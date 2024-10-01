---
lang: ko-KR
title: "Advanced Rate Limiting Use Cases In .NET"
description: "Article(s) > Advanced Rate Limiting Use Cases In .NET"
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
      content: "Article(s) > Advanced Rate Limiting Use Cases In .NET"
    - property: og:description
      content: "Advanced Rate Limiting Use Cases In .NET"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/advanced-rate-limiting-use-cases-in-dotnet.html
prev: /programming/cs/articles/README.md
date: 2023-08-19
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_051.png
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
  name="Advanced Rate Limiting Use Cases In .NET"
  desc="Rate limiting is about restricting the number of requests to your application. It's usually applied within a specific time window or based on some other criteria. Rate limiting is practical for a few reasons: - Improves security - Guards against DDoS attacks - Prevents overloading of application servers - Reduces costs by preventing unnecessary resource consumption But you need to know how to implement it correctly, or you could grind your system to a halt."
  url="https://milanjovanovic.tech/blog/advanced-rate-limiting-use-cases-in-dotnet/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_051.png"/>

**Rate limiting** is about restricting the number of requests to your application. It's usually applied within a specific time window or based on other criteria.

It's helpful for a few reasons:

- Improves security
- Guards against DDoS attacks
- Prevents overloading of application servers
- Reduces costs by preventing unnecessary resource consumption

**.NET 7** shipped with a **built-in rate limiter**, but you need to know how to implement it correctly. Or you could grind your system to a halt - and we don't want that.

In this week's newsletter, I'll teach you:

- How to rate limit users by **IP address**
- How to rate limit users by their **identity**
- How to apply **rate limiting** on the **reverse proxy**

So let's dive in!

---

## Built-In Rate Limiting In .NET 7

Starting with .NET 7, we have access to built-in **rate limiting middleware** in the `Microsoft.AspNetCore.RateLimiting` namespace. The API is straightforward, and you can create a rate limit policy with a few lines of code.

We can use one of the four **rate limiting algorithms**:

- Fixed window
- Sliding window
- Token bucket
- Concurrency

Here's how to define a **rate limit policy** by calling the `AddTokenBucketLimiter` method:

```cs
builder.Services.AddRateLimiter(rateLimiterOptions =>
{
    options.RejectionStatusCode = StatusCodes.Status429TooManyRequests;

    rateLimiterOptions.AddTokenBucketLimiter("token", options =>
    {
        options.TokenLimit = 1000;
        options.ReplenishmentPeriod = TimeSpan.FromHours(1);
        options.TokensPerPeriod = 700;
        options.AutoReplenishment = true;
    });
});
```

Now you can reference the `token` rate limit policy on your endpoint or controller.

You also have to add the `RateLimitingMiddleware` to the request pipeline:

```cs
app.UseRateLimiter();

```

You can learn more about [**rate limiting in .NET 7 here,**](/explore/articles/milanjovanovic.tech/how-to-use-rate-limiting-in-aspnet-core.md) so I won't go deeper into the fundamentals.

---

## Rate Limiting Users By IP Address

The approach I just showed you has a **problem** - the **rate limit policy** is global and **applies to all users**.

Most of the time, you don't want to do this. Rate limiting should be granular and apply to **individual users**.

Luckily, you can achieve this by creating a `RateLimitPartition`.

The `RateLimitPartition` has two components:

- Partition key
- Rate limiter policy

Here's how to define a rate limiter with a fixed window policy, and the **partition key** is the user's **IP address**.

```cs{5}
builder.Services.AddRateLimiter(options =>
{
    options.AddPolicy("fixed-by-ip", httpContext =>
        RateLimitPartition.GetFixedWindowLimiter(
            partitionKey: httpContext.Connection.RemoteIpAddress?.ToString(),
            factory: _ => new FixedWindowRateLimiterOptions
            {
                PermitLimit = 10,
                Window = TimeSpan.FromMinutes(1)
            }));
});
```

Rate limiting by **IP address** can be a good layer of security for **unauthenticated users**. You don't know who is accessing your system and can't apply more granular rate limiting. This can help protect your system from malicious users trying to perform a DDoS attack.

You can also [<FontIcon icon="fa-brands fa-microsoft"/>**create chained limiters**](https://learn.microsoft.com/en-us/aspnet/core/performance/rate-limit?view=aspnetcore-7.0#create-chained-limiters) using the `CreateChained` API. It allows you to pass in multiple `PartitionedRateLimiter`, which are combined into one `PartitionedRateLimiter`. The chained limiter runs all the input limiters in sequence (one by one).

If your application is running behind a **reverse proxy**, you need to make sure not to rate limit the proxy IP address. Reverse proxies usually **forward** the original IP address with the `X-Forwarded-For` header. So you can use it as the **partition key**:

```cs{5}
builder.Services.AddRateLimiter(options =>
{
    options.AddPolicy("fixed-by-ip", httpContext =>
        RateLimitPartition.GetFixedWindowLimiter(
            httpContext.Request.Headers["X-Forwarded-For"].ToString(),
            factory: _ => new FixedWindowRateLimiterOptions
            {
                PermitLimit = 10,
                Window = TimeSpan.FromMinutes(1)
            }));
});
```

---

## Rate Limiting Users By Identity

If you require users to **authenticate** with your API, you can determine who the current is. Then you can use the user's **identity** as the **partition key** for a `RateLimitPartition`.

Here's how you would create such a rate limit policy:

```cs{5}
builder.Services.AddRateLimiter(options =>
{
    options.AddPolicy("fixed-by-user", httpContext =>
        RateLimitPartition.GetFixedWindowLimiter(
            partitionKey: httpContext.User.Identity?.Name?.ToString(),
            factory: _ => new FixedWindowRateLimiterOptions
            {
                PermitLimit = 10,
                Window = TimeSpan.FromMinutes(1)
            }));
});
```

I'm using the `User.Identity` value on the `HttpContext` to get the current user's `Name` claim. This usually corresponds to the `sub` claim inside a JWT - which is the user identifier.

---

## Applying Rate Limting On The Reverse Proxy

In a robust implementation, you want to **rate limit** on the **reverse proxy** level before the request hits your API. And if you have a distributed system, this is a requirement. Otherwise, your system wouldn't function correctly.

There are many reverse proxy implementations to choose from.

**YARP** is a reverse proxy with excellent .NET integration. Not surprising since it was written in C#. You can learn more about [**building an API Gateway with YARP here.**](/explore/articles/milanjovanovic.tech/implementing-an-api-gateway-for-microservices-with-yarp.md)

To implement rate limiting on the reverse proxy with **YARP** you need to:

- Define a rate limit policy (covered in previous examples)
- Configure the `RateLimiterPolicy` for the route in YARP settings

```json
"products-route": {
  "ClusterId": "products-cluster",
  "RateLimiterPolicy": "sixty-per-minute-fixed",
  "Match": {
    "Path": "/products/{**catch-all}"
  },
  "Transforms": [
    { "PathPattern": "{**catch-all}" }
  ]
}
```

The built-in rate limiter middleware uses an **in-memory** store to track the number of requests. If you want to run your reverse proxy in a high-availability setup, you will need to use a **distributed cache**. A nice option to look into is using a [**Redis backplane for rate limiting.** (<FontIcon icon="iconfont icon-github"/>`cristipufu/aspnetcore-redis-rate-limiting`)](https://github.com/cristipufu/aspnetcore-redis-rate-limiting)

---

## Closing Thoughts

With the `PartitionedRateLimiter` you can easily create granular rate limit policies.

The two common approaches are:

- Rate limiting by **IP address**
- Rate limiting by the **user identifier**

I was really excited to see the .NET team ship rate limiting. But, the current implementation has its shortcomings. The main issue is that it only works **in memory**. For a **distributed** solution, you need to implement something yourself or use an external library.

You can use the **YARP** reverse proxy to build robust and scalable distributed systems. And it only takes a few lines of code to add **rate limiting** on the reverse proxy level. I'm using it extensively in my systems.

Thanks for reading.

And stay awesome!

---

<TagLinks />