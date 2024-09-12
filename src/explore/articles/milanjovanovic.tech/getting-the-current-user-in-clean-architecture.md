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

<!-- TODO: 작성 -->

<!-- 
The applications you build serve your users (customers) to help them solve some problems.
It's a common requirement that you will need to know who the current application user is.

How do you get the current user's information in a Clean Architecture use case?

Use cases live in the Application layer, where you can't introduce external concerns.
Otherwise, you will be breaking the dependency rule.

Let's say you want to know who the current user is to determine if they can access some resource.
This is your typical resource-based authorization check.
But you have to interact with the identity provider to get this information.
This breaks the <a href="clean-architecture-and-the-benefits-of-structured-software-design">dependency rule in Clean Architecture.</a>

I've seen this problem confuse developers who are new to Clean Architecture.

In today's issue, I'll show you how to access the current user's information in a clean way.

---

## start-with-an-abstraction"><a href="#start-with-an-abstraction">Start With an Abstraction

The inner layers in Clean Architecture define abstractions for external concerns.
From the Application layer's perspective, authentication and user identity are external concerns.

The Infrastructure layer deals with external concerns, including authentication and identity management.
This is where you would implement the abstraction.

My preferred approach is creating an `IUserContext` abstraction.
The main information I need is the `UserId` of the current user.
But you can expand the `IUserContext` with any other data you think is necessary.

```cs
public interface IUserContext
{
    bool IsAuthenticated { get; }

    Guid UserId { get; }
}

```

Let's see how to implement the `IUserContext`.

---

## implementing-the-usercontext"><a href="#implementing-the-usercontext">Implementing the UserContext

The `UserContext` class is the `IUserContext` implementation in the Infrastructure layer.
We need to inject the `IHttpContextAccessor`, which allows us to access the <a href="https://learn.microsoft.com/en-us/dotnet/api/system.security.claims.claimsprincipal?view=net-8.0">`ClaimsPrincipal`</a>
through the `User` property.
The `ClaimsPrincipal` gives you access to the current user's claims, containing the required information.

In this example, I'm throwing an exception if any of the properties evaluate to `null`.
You can decide if throwing an exception makes sense for you.

I also want to share an important remark here about `IHttpContextAccessor`.
We're using it to access the `HttpContext` instance — **which only exists during an API request**.
Outside an API request, the `HttpContext` will be null, and the `UserContext` will throw an exception when accessing its properties.

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

Here's the `GetUserId` extension method that's used in the `UserContext.UserId` property.
It's looking for a claim with the `ClaimTypes.NameIdentifier` name, and parsing that value into a `Guid`.
You can replace this with a different type to match the user identity in your system.

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

## using-the-current-user-information"><a href="#using-the-current-user-information">Using The Current User Information

Now that you have the `IUserContext`, you can use it from the Application layer.

A common requirement is checking if the current user can access some resources.

Here's an example using the `GetInvoiceQueryHandler`, which queries the database for an invoice.
After projecting the result to an `InvoiceResponse` object, we check if the current user is the one to whom the invoice was issued.
You can also apply this check as part of the database query.
But performing it in memory lets you return a different response to the user when they aren't authorized.
For example, a <a href="https://www.rfc-editor.org/rfc/rfc7231#section-6.5.3">403 Forbidden</a> might be appropriate.

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

## takeaway"><a href="#takeaway">Takeaway

Incorporating user identity and authentication into <a href="why-clean-architecture-is-great-for-complex-projects">Clean Architecture</a>
doesn't have to compromise the integrity of your design.
The Application layer should remain decoupled from external concerns such as identity management.

We respect the <a href="clean-architecture-and-the-benefits-of-structured-software-design">Clean Architecture dependency rule</a> by
abstracting user-related information through the `IUserContext` interface and implementing it within the Infrastructure layer.

With this strategy, you can effectively manage user information, support authorization checks, and ensure your application remains robust and adaptable to future changes.

Remember, the key is in defining clear abstractions and respecting the architecture's boundaries.

Hope this was helpful.

See you next week.

-->

---

<TagLinks />