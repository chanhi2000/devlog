---
lang: ko-KR
title: "Vertical Slice Architecture: Structuring Vertical Slices"
description: "Article(s) > Vertical Slice Architecture: Structuring Vertical Slices"
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
      content: "Article(s) > Vertical Slice Architecture: Structuring Vertical Slices"
    - property: og:description
      content: "Vertical Slice Architecture: Structuring Vertical Slices"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/vertical-slice-architecture-structuring-vertical-slices.html
prev: /programming/cs/articles/README.md
date: 2024-06-01
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_092.png
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
  name="Vertical Slice Architecture: Structuring Vertical Slices"
  desc="Are you tired of organizing your project across layers? Vertical Slice Architecture is a compelling alternative to traditional layered architectures."
  url="https://milanjovanovic.tech/blog/vertical-slice-architecture-structuring-vertical-slices/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_092.png"/>

<!-- TODO: 작성 -->

<!-- 
Are you tired of organizing your project across layers?

Vertical Slice Architecture is a compelling alternative to traditional layered architectures. <a href="vertical-slice-architecture">VSA</a> flips the script on how we structure code.

Instead of horizontal layers (Presentation, Application, Domain), VSA organizes code by feature. Each feature encompasses everything it needs, from API endpoints to data access.

In this newsletter, we will explore how you can structure vertical slices in VSA.

---

## Understanding Vertical Slices

At its core, a vertical slice represents a self-contained unit of functionality. It's a slice through the entire application stack. It encapsulates all the code and components necessary to fulfill a specific feature.

In traditional layered architectures, code is organized horizontally across the various layers. One feature implementation can be scattered across many layers. Changing a feature requires modifying the code in multiple layers.

VSA addresses this by grouping all the code for a feature into a single slice.

This shift in perspective brings several advantages:

- **Improved cohesion**: Code related to a specific feature resides together, making it easier to understand, modify, and test.
- **Reduced complexity**: VSA simplifies your application's mental model by avoiding the need to navigate multiple layers.
- **Focus on business logic**: The structure naturally emphasizes the business use case over technical implementation details.
- **Easier maintenance**: Changes to a feature are localized within its slice, reducing the risk of unintended side effects.

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%272159%27%20height=%271276%27/%3e"><img alt="Vertical slices." src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img alt="Vertical slices." srcSet="/blogs/mnw_092/vertical_slices.png?imwidth=3840 1x" src="/blogs/mnw_092/vertical_slices.png?imwidth=3840" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>

---

## Implementing Vertical Slice Architecture

Here's an example vertical slice representing the `CreateProduct` feature. We use a static class to represent the feature and group the related types. Each feature can have a respective `Request` and `Response` class. The use case with the business logic can be in a <a href="automatically-register-minimal-apis-in-aspnetcore">Minimal API endpoint</a>.

A vertical slice is likely either a command or a query. This approach gives us <a href="cqrs-pattern-with-mediatr">CQRS</a> out of the box.

```cs
public static class CreateProduct
{
    public record Request(string Name, decimal Price);
    public record Response(int Id, string Name, decimal Price);

    public class Endpoint : IEndpoint
    {
        public void MapEndpoint(IEndpointRouteBuilder app)
        {
            app.MapPost("products", Handler).WithTags("Products");
        }

        public static IResult Handler(Request request, AppDbContext context)
        {
            var product = new Product
            {
                Name = request.Name,
                Price = request.Price
            };

            context.Products.Add(product);

            context.SaveChanges();

            return Results.Ok(
                new Response(product.Id, product.Name, product.Price));
        }
    }
}
```

I want to mention a few benefits of structuring your application like this.

The code for the entire `CreateProduct` feature is tightly grouped within a single file. This makes it extremely easy to locate, understand, and modify everything related to this functionality. We don't need to navigate multiple layers (like controllers, services, repositories, etc.).

Directly using `AppDbContext` within the endpoint might tightly couple the slice to your database technology. Depending on your project's size and requirements, you could consider abstracting data access (using a repository pattern) to make the slice more adaptable to changes in the persistence layer.

---

## Introducing Validation in Vertical Slices

Vertical slices usually need to solve some <a href="balancing-cross-cutting-concerns-in-clean-architecture">cross-cutting concerns</a>, one of which is validation. Validation is the gatekeeper, preventing invalid or malicious data from entering your system. We can easily implement <a href="cqrs-validation-with-mediatr-pipeline-and-fluentvalidation">validation with the FluentValidation library</a>.

Within your slice, you'd define a `Validator` class that encapsulates the rules specific to your feature's request model. It also supports dependency injection, so we can run complex validations here.

```cs
public class Validator : AbstractValidator<Request>
{
    public Validator()
    {
        RuleFor(x => x.Name).NotEmpty().MaximumLength(100);
        RuleFor(x => x.Price).GreaterThanOrEqualTo(0);
        // ... other rules
    }
}
```

This validator can then be injected into your endpoint using dependency injection, allowing you to perform validation before processing the request.

```cs
public static class CreateProduct
{
    public record Request(string Name, decimal Price);
    public record Response(int Id, string Name, decimal Price);

<span class="code-line highlight-line">    public class Validator : AbstractValidator<Request> // { ... }

    public class Endpoint : IEndpoint
    {
        public void MapEndpoint(IEndpointRouteBuilder app)
        {
            app.MapPost("products", Handler).WithTags("Products");
        }

        public static IResult Handler(
            Request request,
            IValidator<Request> validator,
            AppDbContext context)
        {
<span class="code-line highlight-line">            var validationResult = await validator.Validate(request);
<span class="code-line highlight-line">            if (!validationResult.IsValid)
<span class="code-line highlight-line">            {
<span class="code-line highlight-line">                return Results.BadRequest(validationResult.Errors);
<span class="code-line highlight-line">            }

            // ... (Create product and return response)
        }
    }
}
```

---

## Handling Complex Features and Shared Logic

The previous examples were simple. But what do we do with complex features and shared logic?

VSA excels at managing self-contained features. However, real-world applications often involve complex interactions and shared logic.

Here are a few strategies you can consider to address this:

- **Decomposition**: Break down complex features into smaller, more manageable vertical slices. Each slice should represent a cohesive piece of the overall feature.
- **Refactoring**: When a vertical slice becomes difficult to maintain, you can apply some refactoring techniques. The most common ones I use are `Extract method ` and `Extract class`.
- **Extract shared logic**: Identify common logic that's used across multiple features. Create a separate class (or extension method) to reference it from your vertical slices as needed.
- **Push logic down**: Write vertical slices using procedural code, like a <a href="https://martinfowler.com/eaaCatalog/transactionScript.html">Transaction Script</a>. Then, you can identify parts of the business logic that naturally belong to the domain entities.

You and your team will need to understand code smells and refactorings to make the most of VSA.

---

## Summary

Vertical Slice Architecture is more than just a way to structure your code. By focusing on features, VSA allows you to create cohesive and maintainable applications. Vertical slices are self-contained, making unit and integration testing more straightforward.

VSA brings benefits in terms of code organization and development speed, making it a valuable tool in your toolbox. Code is grouped by feature, making it easier to locate and understand. The structure aligns with the way business users think about features. Changes are localized, reducing the risk of regressions and enabling faster iterations.

Consider embracing <a href="vertical-slice-architecture">Vertical Slice Architecture</a> in your next project. It's a big mindset shift from <a href="/pragmatic-clean-architecture">Clean Architecture</a>. However, they both have their place and even share similar ideas.

That's all for this week. Stay awesome!

-->

---

<TagLinks />