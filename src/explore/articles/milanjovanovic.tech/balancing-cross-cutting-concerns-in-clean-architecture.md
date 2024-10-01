---
lang: ko-KR
title: Balancing Cross-Cutting Concerns in Clean Architecture
description: Article(s) > Balancing Cross-Cutting Concerns in Clean Architecture
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
      content: Article(s) > Balancing Cross-Cutting Concerns in Clean Architecture
    - property: og:description
      content: Balancing Cross-Cutting Concerns in Clean Architecture
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/balancing-cross-cutting-concerns-in-clean-architecture.html
prev: /programming/cs/articles/README.md
date: 2024-01-20
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_073.png
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
  name="Balancing Cross-Cutting Concerns in Clean Architecture"
  desc="Cross-cutting concerns are software aspects that affect the entire application. These are your common application-level functionalities that span several layers and tiers. Cross-cutting concerns should be centralized in one location. This prevents code duplication and tight coupling between components. In today's newsletter, I'll show you how to integrate cross-cutting concerns in Clean Architecture."
  url="https://milanjovanovic.tech/blog/balancing-cross-cutting-concerns-in-clean-architecture/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_073.png"/>

Cross-cutting concerns are software aspects that affect the entire application. These are your common application-level functionalities that span several layers and tiers. Cross-cutting concerns should be centralized in one location. This prevents code duplication and tight coupling between components.

A few examples of cross-cutting concerns are:

- Authentication & Authorization
- Logging and tracing
- Exception handling
- Validation
- Caching

In today's newsletter, I'll show you how to integrate cross-cutting concerns in Clean Architecture.

---

## Cross-Cutting Concerns in Clean Architecture

In Clean Architecture, [<FontIcon icon="fa-brands fa-wikipedia-w"/>cross-cutting concerns](https://en.wikipedia.org/wiki/Cross-cutting_concern) play an essential role in ensuring the maintainability and scalability of your system. Ideally, these concerns should be handled separately from the core business logic. This aligns with Clean Architecture's principles, emphasizing the decoupling of concerns and modularity. Your core business rules remain uncluttered, and the architecture stays clean and adaptable.

Ideally, you want to implement cross-cutting concerns in the Infrastructure layer. You can use ASP.NET Core middleware, [decorators](/explore/articles/milanjovanovic.tech/decorator-pattern-in-asp-net-core.md), or MediatR pipeline behaviors. Whichever approach you decide to use, the guiding idea remains the same.

![Cross-cutting concerns in Clean Architecture](https://milanjovanovic.tech/blogs/mnw_073/clean_architecture_cross_cutting_concerns.png?imwidth=3840)

Let's see how to implement logging, validation, and caching as cross-cutting concerns.

---

## Cross-Cutting Concern #1 - Logging

Logging is a fundamental aspect of software development, allowing you to look into an application's behavior. It's vital for debugging, monitoring application health, and tracking user activities and system anomalies. In the context of Clean Architecture, logging must be implemented in a way that maintains the separation of concerns.

An elegant way to achieve this is with [MediatR's](/explore/articles/milanjovanovic.tech/cqrs-pattern-with-mediatr.md) `IPipelineBehavior`. By encapsulating the logging logic inside a pipeline behavior, we ensure that logging is treated as a distinct concern, separate from business logic. This approach enables us to capture detailed information about requests flowing through the application.

Effective logging should be consistent, context-rich, and non-intrusive. Using [Serilog's](/explore/articles/milanjovanovic.tech/5-serilog-best-practices-for-better-structured-logging.md) structured logging capabilities, we can create logs that are not only informative but also easily queryable. This is essential for understanding the state of the application at any given moment.

When done correctly, [structured logging](/explore/articles/milanjovanovic.tech/structured-logging-in-asp-net-core-with-serilog.md) provides invaluable insights into your application without cluttering the core logic. It's a balance of granularity and clarity, ensuring that your logs are a helpful tool rather than a source of noise.

```cs
using Serilog.Context;

internal sealed class RequestLoggingPipelineBehavior<TRequest, TResponse>(
    ILogger<RequestLoggingPipelineBehavior<TRequest, TResponse>> logger)
    : IPipelineBehavior<TRequest, TResponse>
    where TRequest : class
    where TResponse : Result
{
    public async Task<TResponse> Handle(
        TRequest request,
        RequestHandlerDelegate<TResponse> next,
        CancellationToken cancellationToken)
    {
        string requestName = typeof(TRequest).Name;

        logger.LogInformation(
            "Processing request {RequestName}",
            requestName);

        TResponse result = await next();

        if (result.IsSuccess)
        {
            logger.LogInformation(
                "Completed request {RequestName}",
                requestName);
        }
        else
        {
            using (LogContext.PushProperty("Error", result.Error, true))
            {
                logger.LogError(
                    "Completed request {RequestName} with error",
                    requestName);
            }
        }

        return result;
    }
}
```

---

## Cross-Cutting Concern #2 - Validation

Validation is a critical cross-cutting concern in software engineering. It serves as the first line of defense against incorrect data entering your system. Validation guards the application against inconsistent data states and potential security vulnerabilities.

In the example below, I'm creating a [validation pipeline behavior](/explore/articles/milanjovanovic.tech/cqrs-validation-with-mediatr-pipeline-and-fluentvalidation.md). This setup allows for a clean separation of validation logic from business logic. The pipeline behavior ensures that each request is validated before it reaches the core processing logic.

In approaching validation, it's crucial to distinguish between two types:

- Input validation
- Business rule validation

Input validation checks for the correctness and format of the data (like string length, number ranges, and date formats), ensuring it meets the basic criteria before processing.

On the other hand, business rule validation is more about ensuring that the data adheres to your domain's specific rules and logic.

Effective validation practices significantly contribute to the resilience and reliability of an application. By enforcing validation rules, you can maintain a high data quality standard and ensure a better user experience.

```cs
internal sealed class ValidationPipelineBehavior<TRequest, TResponse>(
    IEnumerable<IValidator<TRequest>> validators)
    : IPipelineBehavior<TRequest, TResponse>
    where TRequest : class
{
    public async Task<TResponse> Handle(
        TRequest request,
        RequestHandlerDelegate<TResponse> next,
        CancellationToken cancellationToken)
    {
        ValidationFailure[] validationFailures = await ValidateAsync(request);

        if (validationFailures.Length != 0)
        {
            throw new ValidationException(validationFailures);
        }

        return await next();
    }

    private async Task<ValidationFailure[]> ValidateAsync(TRequest request)
    {
        if (!validators.Any())
        {
            return [];
        }

        var context = new ValidationContext<TRequest>(request);

        ValidationResult[] validationResults = await Task.WhenAll(
            validators.Select(validator => validator.ValidateAsync(context)));

        ValidationFailure[] validationFailures = validationResults
            .Where(validationResult => !validationResult.IsValid)
            .SelectMany(validationResult => validationResult.Errors)
            .ToArray();

        return validationFailures;
    }
}
```

---

## Cross-Cutting Concern #3: Caching

Caching is an essential cross-cutting concern in software development. It's primarily aimed at enhancing performance and scalability. Caching involves temporarily storing data in a fast-access layer. This reduces the need to fetch or calculate the same information repeatedly.

The caching pipeline behavior, which you see below, implements the [<FontIcon icon="fa-brands fa-microsoft"/>Cache Aside pattern.](https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside) This pattern involves checking the cache before processing the request and updating the cache with new data as needed. It's a popular caching strategy due to its simplicity and effectiveness. Here's a [<FontIcon icon="fa-brands fa-youtube"/>video tutorial](https://youtu.be/LOEYZRE72wE) if you want to see how I implemented this.

<VidStack src="youtube/LOEYZRE72wE" />

When implementing caching, it's crucial to consider:

- **What to Cache:** Identify data that is expensive to compute or retrieve and stable enough to be cached.
- **Cache Invalidations:** Determine when and how cached data should be invalidated.
- **Cache Configuration:** Configure cache settings like expiration and size appropriately.

Effective caching improves response times and reduces the load on your system, making it a critical strategy for building scalable .NET applications.

```cs
internal sealed class QueryCachingPipelineBehavior<TRequest, TResponse>(
    ICacheService cacheService,
    ILogger<QueryCachingPipelineBehavior<TRequest, TResponse>> logger)
    : IPipelineBehavior<TRequest, TResponse>
    where TRequest : ICachedQuery
    where TResponse : Result
{
    public async Task<TResponse> Handle(
        TRequest request,
        RequestHandlerDelegate<TResponse> next,
        CancellationToken cancellationToken)
    {
        TResponse? cachedResult = await cacheService.GetAsync<TResponse>(
            request.CacheKey,
            cancellationToken);

        string requestName = typeof(TRequest).Name;
        if (cachedResult is not null)
        {
            logger.LogInformation("Cache hit for {RequestName}", requestName);

            return cachedResult;
        }

        logger.LogInformation("Cache miss for {RequestName}", requestName);

        TResponse result = await next();

        if (result.IsSuccess)
        {
            await cacheService.SetAsync(
                request.CacheKey,
                result,
                request.Expiration,
                cancellationToken);
        }

        return result;
    }
}
```

---

## What To Do Next

Managing cross-cutting concerns such as logging, caching, validation, and exception handling is not just about technical implementation. It's about aligning these aspects with the core principles of [Clean Architecture.](/explore/articles/milanjovanovic.tech/clean-architecture-and-the-benefits-of-structured-software-design.md) By adopting the decoupling techniques we discussed, you can ensure that your .NET projects are robust and maintainable.

Each step you take towards refining your handling of cross-cutting concerns is a step towards a better software architecture. I encourage you to experiment with these strategies in your own .NET projects. If you want a structured guide covering these aspects in-depth, take a look at [Pragmatic Clean Architecture.](/explore/articles/milanjovanovic.tech/pragmatic-clean-architecture/README.md)

Remember, the beauty of software development lies in the continuous evolution and relentless pursuit of improvement.

Hope this was helpful.

See you next week.

---

<TagLinks />