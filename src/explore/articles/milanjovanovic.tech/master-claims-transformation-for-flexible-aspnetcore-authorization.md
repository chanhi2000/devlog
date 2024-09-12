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

<!-- TODO: 작성 -->

<!-- 
<a href="https://learn.microsoft.com/en-us/aspnet/core/security/authorization/claims">Claims-based authorization</a> mechanisms are central to modern authorization in ASP.NET Core.
However, the access tokens issued by your Identity Provider (IDP) might not always perfectly align with your application's internal authorization needs.

External IDPs like <a href="https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id">Microsoft Entra ID</a> (previously Azure AD) or
<a href="https://auth0.com">Auth0</a> might have their own schema for claims or might not directly issue all the claims your application needs for its authorization logic.

The solution? Claims transformation.

Claims transformation allows you to modify the claims before the application uses them for authorization.

In today's issue, we will:

- Explore the concept of claims transformation in ASP.NET Core
<li>Explore the `IClaimsTransformation` interface with practical examples
<li>Address considerations for security and RBAC (Role-Based Access Control)

---

## how-does-claims-transformation-work"><a href="#how-does-claims-transformation-work">How Does Claims Transformation Work?

They say a picture is worth a thousand words.
In software engineering, we have something called <a href="https://en.wikipedia.org/wiki/Unified_Modeling_Language">UML</a> diagrams that we can use to paint a picture.

Here's a <a href="https://en.wikipedia.org/wiki/Sequence_diagram">sequence diagram</a> showing the claims transformation flow:

1. The user authenticates with the Identity Provider
<li>The user calls the backend API and provides an access token
<li>The backend API performs claims transformation and authorization
<li>If the user is correctly authorized, the backend API returns a response

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271614%27%20height=%271357%27/%3e"><img alt="Claims transformation sequence diagram." src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img alt="Claims transformation sequence diagram." srcSet="/blogs/mnw_084/claims_transformation_sequence_diagram.png?imwidth=1920 1x, /blogs/mnw_084/claims_transformation_sequence_diagram.png?imwidth=3840 2x" src="/blogs/mnw_084/claims_transformation_sequence_diagram.png?imwidth=3840" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>
Let's see how to implement this in ASP.NET Core.

---

## simple-claims-transformation"><a href="#simple-claims-transformation">Simple Claims Transformation

Claims can be created from any user or identity data issued by a trusted identity provider.
A claim is a name-value pair that represents the subject's identity, not what the subject can do.

The core of <a href="https://learn.microsoft.com/en-us/aspnet/core/security/authentication/claims#extend-or-add-custom-claims-using-iclaimstransformation">claims transformation</a>
in ASP.NET Core is the <a href="https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.authentication.iclaimstransformation">`IClaimsTransformation`</a> interface.

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
<li>**Potential performance impact**: Since it's executed on authentication requests, be mindful of your transformation logic's performance,
especially if it involves external calls (database, APIs). Consider caching where appropriate.

---

## implementing-rbac-with-claims-transformation"><a href="#implementing-rbac-with-claims-transformation">Implementing RBAC With Claims Transformation

<a href="https://auth0.com/docs/manage-users/access-control/rbac">Role-Based Access Control (RBAC)</a> is an authorization model where permissions are assigned to roles,
and users are granted roles.
Claims transformation helps implement RBAC smoothly.
By adding role claims and potentially permission claims, authorization logic throughout your application can be simplified.
Another benefit is that you can keep the access token smaller and free of any role or permission claims.

Let's consider a scenario where your application manages resources at a granular level,
but your identity provider only provides coarse-grained roles like `Registered` or `Member`.
You could use claims transformation to map the `Member` role to specific fine-grained permissions like `SubmitOrder` and `PurchaseTicket`.

Here's a more complex `CustomClaimsTransformation` implementation.
We send a database query using `GetUserPermissionsQuery` and get the `PermissionsResponse` back.
The `PermissionsResponse` contains the user's permissions, which are added as custom claims.

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

Now that the `ClaimsPrincipal` contains the permissions as custom claims, you can do some interesting things.
For example, you can implement a permission-based `AuthorizationHandler`:

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

## takeaway"><a href="#takeaway">Takeaway

Claims transformation is an elegant way to bridge the gap between claims provided by identity providers and the needs of your ASP.NET Core application.
The `IClaimsTransformation` interface enables you to customize the claims of the current `ClaimsPrincipal`.
Whether you need to add roles, map external groups to internal permissions, or extract additional information from a user profile,
claims transformation offers the flexibility to do so.

However, it's important to use claims transformation with a few key considerations in mind:

- Claims transformations are executed on each request.
<li>The `IClaimsTransformation` should be idempotent. It should not add existing claims to the `ClaimsPrincipal` if executed multiple times.
<li>Design your transformations efficiently, and consider caching the results if you're fetching external data to enrich your claims.

If you want to see a complete implementation of RBAC in ASP.NET Core, check out this <a href="https://www.youtube.com/playlist?list=PLYpjLpq5ZDGtJOHUbv7KHuxtYLk1nJPw5">Authentication & Authorization playlist</a>.

Hope this was helpful.

See you next week.

-->

---

<TagLinks />