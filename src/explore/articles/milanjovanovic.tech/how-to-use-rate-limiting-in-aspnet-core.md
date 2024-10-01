---
lang: ko-KR
title: "How To Use Rate Limiting In ASP.NET Core"
description: "Article(s) > How To Use Rate Limiting In ASP.NET Core"
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
      content: "Article(s) > How To Use Rate Limiting In ASP.NET Core"
    - property: og:description
      content: "How To Use Rate Limiting In ASP.NET Core"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/how-to-use-rate-limiting-in-aspnet-core.html
prev: /programming/cs/articles/README.md
date: 2023-04-08
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_032.png
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
  name="How To Use Rate Limiting In ASP.NET Core"
  desc="Rate limiting is a technique to limit the number of requests to a server or an API. A limit is introduced within a given time period to prevent server overload and protect against abuse. In ASP.NET Core 7 we have a built-in rate limiter middleware, that's easy to integrate into your API."
  url="https://milanjovanovic.tech/blog/how-to-use-rate-limiting-in-aspnet-core/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_032.png"/>

Rate limiting is a technique to limit the number of requests to a server or an API.

A limit is introduced within a given time period to prevent server overload and protect against abuse.

In ASP.NET Core 7, we have a built-in rate limiter middleware that's easy to integrate into your API.

Let's see how we can work with rate limiting.

---

## What Is Rate Limiting?

Rate limiting is about restricting the number of requests to an API, usually within a specific time window or based on other criteria.

This is practical for a few reasons:

- Prevents overloading of servers or applications
- Improves security and guards against DDoS attacks
- Reduces costs by preventing unnecessary resource usage

In a multi-tenant application, each unique user can have a limitation on the number of API requests.

---

## Configuring Rate Limiting

ASP.NET Core 7 introduced built-in rate limiting middleware in the `Microsoft.AspNetCore.RateLimiting` namespace.

To add rate limiting to your application, you first need to register the rate limiting services:

```cs
builder.Services.AddRateLimiter(options =>
{
    options.RejectionStatusCode = StatusCodes.Status429TooManyRequests;

    // We'll talk about adding specific rate limiting policies later.
});
```

I suggest updating the `RejectionStatusCode` to `429 (Too Many Requests)` because it's more correct. The default value is `503 (Service Unavailable)`.

And you also have to apply the `RateLimitingMiddleware`:

```cs
app.UseRateLimiter();
```

That's everything you'll need.

Let's see the rate limiting algorithms we can use.

---

## Fixed Window Limiter

The `AddFixedWindowLimiter` method configures a fixed window limiter.

The `Window` value determines the time window.

When a time window expires, a new one starts, and the request limit is reset.

```cs
builder.Services.AddRateLimiter(rateLimiterOptions =>
{
    rateLimiterOptions.AddFixedWindowLimiter("fixed", options =>
    {
        options.PermitLimit = 10;
        options.Window = TimeSpan.FromSeconds(10);
        options.QueueProcessingOrder = QueueProcessingOrder.OldestFirst;
        options.QueueLimit = 5;
    });
});
```

---

## Sliding Window Limiter

The sliding window algorithm is similar to the fixed window, but it introduces segments in a window.

Here's how it works:

- Each time window is divided into multiple segments
- The window slides one segment each segment interval
- The segment interval is (window_time)/(segments_per_window)
- When a segment expires, the requests taken in that segment are added to the current segment

The `AddSlidingWindowLimiter` method configures a sliding window limiter.

```cs
builder.Services.AddRateLimiter(rateLimiterOptions =>
{
    rateLimiterOptions.AddSlidingWindowLimiter("sliding", options =>
    {
        options.PermitLimit = 10;
        options.Window = TimeSpan.FromSeconds(10);
        options.SegmentsPerWindow = 2;
        options.QueueProcessingOrder = QueueProcessingOrder.OldestFirst;
        options.QueueLimit = 5;
    });
});
```

---

## Token Bucket Limiter

The token bucket algorithm is similar to the sliding window, but instead of adding back the requests from the expired segment, a fixed number of tokens are added after each replenishment period.

The total number of tokens can never exceed the token limit.

The `AddTokenBucketLimiter` method configures a token bucket limiter.

```cs
builder.Services.AddRateLimiter(rateLimiterOptions =>
{
    rateLimiterOptions.AddTokenBucketLimiter("token", options =>
    {
        options.TokenLimit = 100;
        options.QueueProcessingOrder = QueueProcessingOrder.OldestFirst;
        options.QueueLimit = 5;
        options.ReplenishmentPeriod = TimeSpan.FromSeconds(10);
        options.TokensPerPeriod = 20;
        options.AutoReplenishment = true;
    });
});
```

When `AutoReplenishment` is `true`, an internal timer will execute every `ReplenishmentPeriod` and replenish the tokens.

---

## Concurrency Limiter

The concurrency limiter is the most straightforward algorithm, and it just limits the number of concurrent requests.

The `AddConcurrencyLimiter` method configures a concurrency limiter.

```cs
builder.Services.AddRateLimiter(rateLimiterOptions =>
{
    rateLimiterOptions.AddConcurrencyLimiter("concurrency", options =>
    {
        options.PermitLimit = 10;
        options.QueueProcessingOrder = QueueProcessingOrder.OldestFirst;
        options.QueueLimit = 5;
    });
});
```

There's no time component involved in this case. The only parameter is the number of concurrent requests.

---

## Using Rate Limiting In Your API

Now that we have configured our rate limiting policies, let's see how we can use them in our API.

There are slight differences between controllers and minimal API endpoints, so I'll cover them in separate examples.

### Controllers

To add rate limiting on a controller we use the `EnableRateLimiting` and `DisableRateLimiting` attributes.

`EnableRateLimiting` can be applied on the controller or on the individual endpoints.

```cs
[EnableRateLimiting("fixed")]
public class TransactionsController
{
    private readonly ISender _sender;

    public TransactionsController(ISender sender)
    {
        _sender = sender;
    }

    [EnableRateLimiting("sliding")]
    public async Task<IActionResult> GetTransactions()
    {
        return Ok(await _sender.Send(new GetTransactionsQuery()));
    }

    [DisableRateLimiting]
    public async Task<IActionResult> GetTransactionById(int id)
    {
        return Ok(await _sender.Send(new GetTransactionByIdQuery(id)));
    }
}
```

In the previous example:

- All endpoints in the `TransactionsController` will use a **fixed window** policy
- The `GetTransactions` endpoint will use a **sliding window** policy
- The `GetTransactionById` endpoint won't have any rate limiting applied

### Minimal APIs

In a Minimal API endpoint you can configure the rate limit policy by calling `RequireRateLimiting` and specifying the policy name.

We're using the **token bucket** policy in this example.

```cs
app.MapGet("/transactions", async (ISender sender) =>
{
    return Results.Ok(await sender.Send(new GetTransactionsQuery()));
})
.RequireRateLimiting("token");
```

---

## Closing Thoughts

It's great that we can quickly introduce **rate limiting** in ASP.NET Core.

You can choose from one of the existing rate limiter algorithms:

- Fixed window
- Sliding window
- Token bucket
- Concurrency

Here are some resources if you want to learn more about rate limiting:

<SiteInfo
  name="Rate Limiting pattern"
  desc="You can use a rate limiting pattern to help you avoid or minimize throttling errors."
  url="https://learn.microsoft.com/en-us/azure/architecture/patterns/rate-limiting-pattern"
  logo="/imagea/content/learn.microsoft.com/favicon.ico"
  preview="/imagea/content/learn.microsoft.com/open-graph-image.png"/>

<SiteInfo
  name="Announcing Rate Limiting for .NET"
  desc="Announcing built-in Rate Limiting support in .NET 7. Rate limiting provides a way to protect a resource to avoid overwhelming your app."
  url="https://devblogs.microsoft.com/dotnet/announcing-rate-limiting-for-dotnet/"
  logo="/images/content/devblogs.microsoft.com/favicon.jpg"
  preview="/images/content/devblogs.microsoft.com/open-graph-image.png"/>

I'm excited to try out rate limiting in my projects.

That's all for today.

Have an awesome Saturday!

---

<TagLinks />