---
lang: ko-KR
title: Master Claims Transformation for Flexible ASP.NET Core Authorization
description: Article(s) > Master Claims Transformation for Flexible ASP.NET Core Authorization
icon: iconfont icon-csharp
category: 
  - C#
  - DotNet
  - Article(s)
tag: 
  - blog
  - milanjovanovic.tech
  - cs
  - c#
  - csharp
  - dotnet
head:
  - - meta:
    - property: og:title
      content: Article(s) > Master Claims Transformation for Flexible ASP.NET Core Authorization
    - property: og:description
      content: Master Claims Transformation for Flexible ASP.NET Core Authorization
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/master-claims-transformation-for-flexible-aspnetcore-authorization.html
prev: /programming/cs/articles/README.md
date: 2024-04-06
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_084.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "C# > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/cs/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Master Claims Transformation for Flexible ASP.NET Core Authorization"
  desc="Claims-based authorization mechanisms are central to modern authorization in ASP.NET Core. However, the access tokens issued by your Identity Provider (IDP) might not always perfectly align with your application's internal authorization needs. The solution? Claims transformation."
  url="https://milanjovanovic.tech/blog/master-claims-transformation-for-flexible-aspnetcore-authorization/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_084.png"/>

[<FontIcon icon="fa-brands fa-microsoft"/>Claims-based authorization](https://learn.microsoft.com/en-us/aspnet/core/security/authorization/claims) mechanisms are central to modern authorization in ASP.NET Core. However, the access tokens issued by your Identity Provider (IDP) might not always perfectly align with your application's internal authorization needs.

External IDPs like [<FontIcon icon="fa-brands fa-microsoft"/>Microsoft Entra ID](https://microsoft.com/en-us/security/business/identity-access/microsoft-entra-id) (previously Azure AD) or
[<FontIcon icon="fas fa-globe"/>Auth0](https://auth0.com) might have their own schema for claims or might not directly issue all the claims your application needs for its authorization logic.

The solution? Claims transformation.

Claims transformation allows you to modify the claims before the application uses them for authorization.

In today's issue, we will:

- Explore the concept of claims transformation in ASP.NET Core
- Explore the `IClaimsTransformation` interface with practical examples
- Address considerations for security and RBAC (Role-Based Access Control)

---

## How Does Claims Transformation Work?

They say a picture is worth a thousand words. In software engineering, we have something called [<FontIcon icon="fa-brands fa-wikipedia-w"/>UML](https://en.wikipedia.org/wiki/Unified_Modeling_Language) diagrams that we can use to paint a picture.

Here's a [<FontIcon icon="fa-brands fa-wikipedia-w"/>sequence diagram](https://en.wikipedia.org/wiki/Sequence_diagram) showing the claims transformation flow:

1. The user authenticates with the Identity Provider
2. The user calls the backend API and provides an access token
3. The backend API performs claims transformation and authorization
4. If the user is correctly authorized, the backend API returns a response

![Claims transformation sequence diagram.](https://milanjovanovic.tech/blogs/mnw_084/claims_transformation_sequence_diagram.png?imwidth=3840)

Let's see how to implement this in ASP.NET Core.

---

## Simple Claims Transformation

Claims can be created from any user or identity data issued by a trusted identity provider. A claim is a name-value pair that represents the subject's identity, not what the subject can do.

The core of [<FontIcon icon="fa-brands fa-microsoft"/>claims transformation](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/claims#extend-or-add-custom-claims-using-iclaimstransformation) in ASP.NET Core is the [<FontIcon icon="fa-brands fa-microsoft"/>`IClaimsTransformation`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.authentication.iclaimstransformation) interface.

It exposes a single method to transform claims:

```cs
public interface IClaimsTransformation
{
    Task<ClaimsPrincipal> TransformAsync(ClaimsPrincipal principal);
}
```

Here's a simple example of using `IClaimsTransformation` to add a custom claim:

```cs
internal static class CustomClaims
{
    internal const string CardType = "card_type";
}

internal sealed class CustomClaimsTransformation : IClaimsTransformation
{
    public Task<ClaimsPrincipal> TransformAsync(ClaimsPrincipal principal)
    {
        if (principal.HasClaim(claim => claim.Type == CustomClaims.CardType))
        {
            return Task.FromResult(principal);
        }

        ClaimsIdentity claimsIdentity = new ClaimsIdentity();

        claimsIdentity.AddClaim(new Claim(CustomClaims.CardType, "platinum"));

        principal.AddIdentity(claimsIdentity);

        return Task.FromResult(principal);
    }
}
```

The `CustomClaimsTransformation` class should be registered as a service:

```cs
builder.Services
    .AddTransient<IClaimsTransformation, CustomClaimsTransformation>();
```

Finally, you can define a custom authorization policy that uses this claim:

```cs
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy(
        "HasPlatinumCard",
        builder => builder
            .RequireAuthenticatedUser()
            .RequireClaim(CustomClaims.CardType, "platinum"));
});
```

There are a few caveats with using `IClaimsTransformation` you should be aware of:

- **Might execute multiple times**: The `TransformAsync` method might get called multiple times.
Claims transformation should be idempotent to avoid adding the same claim multiple times to the `ClaimsPrincipal`.
- **Potential performance impact**: Since it's executed on authentication requests, be mindful of your transformation logic's performance,
especially if it involves external calls (database, APIs). Consider caching where appropriate.

---

## Implementing RBAC With Claims Transformation

[<FontIcon icon="fas fa-globe"/>Role-Based Access Control (RBAC)](https://auth0.com/docs/manage-users/access-control/rbac) is an authorization model where permissions are assigned to roles,
and users are granted roles. Claims transformation helps implement RBAC smoothly. By adding role claims and potentially permission claims, authorization logic throughout your application can be implified. Another benefit is that you can keep the access token smaller and free of any role or permission claims.

Let's consider a scenario where your application manages resources at a granular level, but your identity provider only provides coarse-grained roles like `Registered` or `Member`. You could use claims transformation to map the `Member` role to specific fine-grained permissions like `SubmitOrder` and `PurchaseTicket`.

Here's a more complex `CustomClaimsTransformation` implementation. We send a database query using `GetUserPermissionsQuery` and get the `PermissionsResponse` back. The `PermissionsResponse` contains the user's permissions, which are added as custom claims.

```cs
internal sealed class CustomClaimsTransformation(
    IServiceProvider serviceProvider)
    : IClaimsTransformation
{
    public async Task<ClaimsPrincipal> TransformAsync(
        ClaimsPrincipal principal)
    {
        if (principal.HasClaim(c => c.Type == CustomClaims.Sub ||
                                    c.Type == CustomClaims.Permission))
        {
            return principal;
        }

        using IServiceScope scope = serviceProvider.CreateScope();

        ISender sender = scope.ServiceProvider.GetRequiredService<ISender>();

        string identityId = principal.GetIdentityId();

        Result<PermissionsResponse> result = await sender.Send(
            new GetUserPermissionsQuery(identityId));

        if (result.IsFailure)
        {
            throw new ClaimsAuthorizationException(
                nameof(GetUserPermissionsQuery), result.Error);
        }

        var claimsIdentity = new ClaimsIdentity();

        claimsIdentity.AddClaim(
            new Claim(CustomClaims.Sub, result.Value.UserId.ToString()));

        foreach (string permission in result.Value.Permissions)
        {
            claimsIdentity.AddClaim(
                new Claim(CustomClaims.Permission, permission));
        }

        principal.AddIdentity(claimsIdentity);

        return principal;
    }
}

```

Now that the `ClaimsPrincipal` contains the permissions as custom claims, you can do some interesting things. For example, you can implement a permission-based `AuthorizationHandler`:

```cs
internal sealed class PermissionAuthorizationHandler
    : AuthorizationHandler<PermissionRequirement>
{
    protected override Task HandleRequirementAsync(
        AuthorizationHandlerContext context,
        PermissionRequirement requirement)
    {
<span class="code-line highlight-line">        HashSet<string> permissions = context.User.GetPermissions();

        if (permissions.Contains(requirement.Permission))
        {
            context.Succeed(requirement);
        }

        return Task.CompletedTask;
    }
}

```

---

## Takeaway

Claims transformation is an elegant way to bridge the gap between claims provided by identity providers and the needs of your ASP.NET Core application. The `IClaimsTransformation` interface enables you to customize the claims of the current `ClaimsPrincipal`. Whether you need to add roles, map external groups to internal permissions, or extract additional information from a user profile, claims transformation offers the flexibility to do so.

However, it's important to use claims transformation with a few key considerations in mind:

- Claims transformations are executed on each request.
- The `IClaimsTransformation` should be idempotent. It should not add existing claims to the `ClaimsPrincipal` if executed multiple times.
- Design your transformations efficiently, and consider caching the results if you're fetching external data to enrich your claims.

If you want to see a complete implementation of RBAC in ASP.NET Core, check out this [<FontIcon icon="fa-brands fa-youtube"/>Authentication & Authorization playlist](https://youtube.com/playlist?list=PLYpjLpq5ZDGtJOHUbv7KHuxtYLk1nJPw5).

Hope this was helpful.

See you next week.

---

<TagLinks />