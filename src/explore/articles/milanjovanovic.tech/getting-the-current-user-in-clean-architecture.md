---
lang: ko-KR
title: Getting the Current User in Clean Architecture
description: Article(s) > Getting the Current User in Clean Architecture
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
      content: Article(s) > Getting the Current User in Clean Architecture
    - property: og:description
      content: Getting the Current User in Clean Architecture
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/getting-the-current-user-in-clean-architecture.html
prev: /programming/cs/articles/README.md
date: 2024-02-10
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_076.png
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
  name="Getting the Current User in Clean Architecture"
  desc="The applications you build serve your users (customers), to help them solve some problems. It's a common requirement that you will need to know who the current application user is."
  url="https://milanjovanovic.tech/blog/getting-the-current-user-in-clean-architecture/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_076.png"/>

The applications you build serve your users (customers) to help them solve some problems. It's a common requirement that you will need to know who the current application user is.

How do you get the current user's information in a Clean Architecture use case?

Use cases live in the Application layer, where you can't introduce external concerns. Otherwise, you will be breaking the dependency rule.

Let's say you want to know who the current user is to determine if they can access some resource. This is your typical resource-based authorization check. But you have to interact with the identity provider to get this information. This breaks the [dependency rule in Clean Architecture](/explore/articles/milanjovanovic.tech/clean-architecture-and-the-benefits-of-structured-software-design.md).

I've seen this problem confuse developers who are new to Clean Architecture.

In today's issue, I'll show you how to access the current user's information in a clean way.

---

## Start With an Abstraction

The inner layers in Clean Architecture define abstractions for external concerns. From the Application layer's perspective, authentication and user identity are external concerns.

The Infrastructure layer deals with external concerns, including authentication and identity management. This is where you would implement the abstraction.

My preferred approach is creating an `IUserContext` abstraction. The main information I need is the `UserId` of the current user. But you can expand the `IUserContext` with any other data you think is necessary.

```cs
public interface IUserContext
{
    bool IsAuthenticated { get; }

    Guid UserId { get; }
}
```

Let's see how to implement the `IUserContext`.

---

## Implementing the UserContext

The `UserContext` class is the `IUserContext` implementation in the Infrastructure layer. We need to inject the `IHttpContextAccessor`, which allows us to access the [<FontIcon icon="fa-brands fa-microsoft"/>`ClaimsPrincipal`](https://learn.microsoft.com/en-us/dotnet/api/system.security.claims.claimsprincipal?view=net-8.0) through the `User` property. The `ClaimsPrincipal` gives you access to the current user's claims, containing the required information.

In this example, I'm throwing an exception if any of the properties evaluate to `null`. You can decide if throwing an exception makes sense for you.

I also want to share an important remark here about `IHttpContextAccessor`. We're using it to access the `HttpContext` instance — **which only exists during an API request**. Outside an API request, the `HttpContext` will be null, and the `UserContext` will throw an exception when accessing its properties.

```cs
internal sealed class UserContext(IHttpContextAccessor httpContextAccessor)
    : IUserContext
{
    public Guid UserId =>
        httpContextAccessor
            .HttpContext?
            .User
            .GetUserId() ??
        throw new ApplicationException("User context is unavailable");

    public bool IsAuthenticated =>
        httpContextAccessor
            .HttpContext?
            .User
            .Identity?
            .IsAuthenticated ??
        throw new ApplicationException("User context is unavailable");
}
```

Here's the `GetUserId` extension method that's used in the `UserContext.UserId` property. It's looking for a claim with the `ClaimTypes.NameIdentifier` name, and parsing that value into a `Guid`. You can replace this with a different type to match the user identity in your system.

```cs
internal static class ClaimsPrincipalExtensions
{
    public static Guid GetUserId(this ClaimsPrincipal? principal)
    {
        string? userId = principal?.FindFirstValue(ClaimTypes.NameIdentifier);

        return Guid.TryParse(userId, out Guid parsedUserId) ?
            parsedUserId :
            throw new ApplicationException("User id is unavailable");
    }
}
```

---

## Using The Current User Information

Now that you have the `IUserContext`, you can use it from the Application layer.

A common requirement is checking if the current user can access some resources.

Here's an example using the `GetInvoiceQueryHandler`, which queries the database for an invoice. After projecting the result to an `InvoiceResponse` object, we check if the current user is the one to whom the invoice was issued. You can also apply this check as part of the database query. But performing it in memory lets you return a different response to the user when they aren't authorized. For example, a [<FontIcon icon="fas fa-globe"/>403 Forbidden](https://rfc-editor.org/rfc/rfc7231#section-6.5.3) might be appropriate.

```cs
class GetInvoiceQueryHandler(IAppDbContext dbContext, IUserContext userContext)
    : IQueryHandler<GetInvoiceQuery, InvoiceResponse>
{
    public async Task<Result<InvoiceResponse>> Handle(
        GetInvoiceQuery request,
        CancellationToken cancellationToken)
    {
        InvoiceResponse? invoiceResponse = await dbContext
            .Invoices
            .ProjectTo<InvoiceResponse>()
            .FirstOrDefaultAsync(
                invoice => invoice.Id == request.InvoiceId,
                cancellationToken);

        if (invoiceResponse is null ||
<span class="code-line highlight-line">            invoiceResponse.IssuedToUserId != userContext.UserId)
        {
            return Result.Failure<InvoiceResponse>(InvoiceErrors.NotFound);
        }

        return invoiceResponse;
    }
}
```

---

## Takeaway

Incorporating user identity and authentication into [Clean Architecture](/explore/articles/milanjovanovic.tech/why-clean-architecture-is-great-for-complex-projects.md) doesn't have to compromise the integrity of your design. The Application layer should remain decoupled from external concerns such as identity management.

We respect the [Clean Architecture dependency rule](/explore/articles/milanjovanovic.tech/clean-architecture-and-the-benefits-of-structured-software-design.md) by abstracting user-related information through the `IUserContext` interface and implementing it within the Infrastructure layer.

With this strategy, you can effectively manage user information, support authorization checks, and ensure your application remains robust and adaptable to future changes.

Remember, the key is in defining clear abstractions and respecting the architecture's boundaries.

Hope this was helpful.

See you next week.

---

<TagLinks />