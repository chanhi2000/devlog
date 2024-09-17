---
lang: ko-KR
title: "Caching in ASP.NET Core: Improving Application Performance"
description: "Article(s) > Caching in ASP.NET Core: Improving Application Performance"
icon: iconfont icon-csharp
category: 
  - C#
  - DotNet
  - Redis
  - Article(s)
tag: 
  - blog
  - milanjovanovic.tech
  - cs
  - c#
  - csharp
  - dotnet
  - redis
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Caching in ASP.NET Core: Improving Application Performance"
    - property: og:description
      content: "Caching in ASP.NET Core: Improving Application Performance"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/caching-in-aspnetcore-improving-application-performance.html
prev: /programming/cs/articles/README.md
date: 2024-06-08
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_093.png
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

```component VPCard
{
  "title": "Redis > Article(s)",
  "desc": "Article(s)",
  "link": "/data-science/redis/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Caching in ASP.NET Core: Improving Application Performance"
  desc="Caching is one of the simplest techniques to significantly improve your application's performance. In this newsletter, we will explore how to implement caching in ASP.NET Core applications."
  url="https://milanjovanovic.tech/blog/caching-in-aspnetcore-improving-application-performance/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_093.png"/>

Caching is one of the simplest techniques to significantly improve your application's performance. It's the process of temporarily storing data in a faster access location. You will typically cache the results of expensive operations or frequently accessed data.

Caching allows subsequent requests for the same data to be served from the cache instead of fetching the data from its source.

ASP.NET Core offers several types of caches, such as `IMemoryCache`, `IDistributedCache`, and the upcoming `HybridCache` (.NET 9).

In this newsletter, we will explore how to implement [<FontIcon icon="fa-brands fa-microsoft"/>caching in ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/performance/caching/memory) applications.

---

## How Caching Improves Application Performance

Caching improves your application's performance by reducing latency and server load while enhancing scalability and user experience.

- **Faster data retrieval**: Cached data can be accessed much faster than retrieving it from the source (like a database or an API). Caches are typically stored in memory (RAM).
- **Fewer database queries**: Caching frequently accessed data reduces the number of database queries. This reduces the load on the database server.
- **Lower CPU usage**: Rendering web pages or processing API responses can consume significant CPU resources. Caching the results reduces the need for repetitive CPU-intensive tasks.
- **Handling increased traffic**: By reducing the load on backend systems, caching allows your application to handle more concurrent users and requests.
- **Distributed caching**: Distributed cache solutions like [<FontIcon icon="iconfont icon-redis"/>Redis](https://redis.io/) enable scaling the cache across multiple servers, further improving performance and resilience.

In a recent project I worked on, we used Redis to scale to more than 1,000,000 users. We only had one SQL Server instance with a read-replica for reporting. The power of caching, eh?

---

## Caching Abstractions in ASP.NET Core

ASP.NET Core provides two primary abstractions for working with caches:

- `IMemoryCache`: Stores data in the memory of the web server. Simple to use but not suitable for distributed scenarios.
- `IDistributedCache`: Offers a more robust solution for distributed applications. It allows you to store cached data in a distributed cache like Redis.

We have to register these services with DI to use them. `AddDistributedMemoryCache` will configure the in-memory implementation of `IDistributedCache`, which isn't distributed.

```cs
builder.Services.AddMemoryCache();

builder.Services.AddDistributedMemoryCache();
```

Here's how you can use the `IMemoryCache`. We will first check if the cached value is present and return it directly if it's there. Otherwise, we must fetch the value from the database and cache it for subsequent requests.

```cs
app.MapGet(
    "products/{id}",
    (int id, IMemoryCache cache, AppDbContext context) =>
    {
        if (!cache.TryGetValue(id, out Product product))
        {
            product = context.Products.Find(id);

            var cacheEntryOptions = new MemoryCacheEntryOptions()
                .SetAbsoluteExpiration(TimeSpan.FromMinutes(10))
                .SetSlidingExpiration(TimeSpan.FromMinutes(2));

            cache.Set(id, product, cacheEntryOptions);
        }

        return Results.Ok(product);
    });
```

Cache expiration is another important topic to discuss. We want to remove cache entries that aren't used and become stale. You can pass in the `MemoryCacheEntryOptions`, allowing you to configure cache expiration. For example, we can set the `AbsoluteExpiration` and `SlidingExpiration` values to control when the cache entry will expire.

---

## Cache-Aside Pattern

The cache-aside pattern is the most common caching strategy. Here's how it works:

1. **Check the cache**: Look for the requested data in the cache.
2. **Fetch from source (if cache miss)**: If the data isn't in the cache, fetch it from the source.
3. **Update the cache**: Store the fetched data in the cache for subsequent requests.

![Cache-aside pattern.](https://milanjoavnovic.tech/blogs/mnw_093/cache_aside.png?imwidth=3840)

Here's how you can implement the cache-aside pattern as an extension method for `IDistributedCache`:

```cs
public static class DistributedCacheExtensions
{
    public static DistributedCacheEntryOptions DefaultExpiration => new()
    {
        AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(2)
    };

    public static async Task<T> GetOrCreateAsync<T>(
        this IDistributedCache cache,
        string key,
        Func<Task<T>> factory,
        DistributedCacheEntryOptions? cacheOptions = null)
    {
        var cachedData = await cache.GetStringAsync(key);

        if (cachedData is not null)
        {
            return JsonSerializer.Deserialize<T>(cachedData);
        }

        var data = await factory();

        await cache.SetStringAsync(
            key,
            JsonSerializer.Serialize(data),
            cacheOptions ?? DefaultExpiration);

        return data;
    }
}
```

We're using `JsonSerializer` to manage serialization to and from a JSON string. The `SetStringAsync` method also accepts a `DistributedCacheEntryOptions` argument to control cache expiration.

Here's how we would use this extension method:

```cs
app.MapGet(
    "products/{id}",
    (int id, IDistributedCache cache, AppDbContext context) =>
    {
        var product = cache.GetOrCreateAsync($"products-{id}", async () =>
        {
            var productFromDb = await context.Products.FindAsync(id);

            return productFromDb;
        });

        return Results.Ok(product);
    });
```

---

## Pros and Cons of In-Memory Caching

::: tabs

@tab:active Pros:

- Extremely fast
- Simple to implement
- No external dependencies

@tab Cons:

- Cache data is lost if the server restarts
- Limited to the memory (RAM) of a single server
- Cache data is not shared across multiple instances of your application

:::

---

## Distributed Caching With Redis

[<FontIcon icon="iconfont icon-redis"/>Redis](https://redis.io/) is a popular in-memory data store often used as a high-performance distributed cache. To use Redis in your ASP.NET Core application, you can use the `StackExchange.Redis` library.

However, there's also the `Microsoft.Extensions.Caching.StackExchangeRedis` library, allowing you to integrate Redis with `IDistributedCache`.

```pwsh
Install-Package Microsoft.Extensions.Caching.StackExchangeRedis
```

Here's how you can configure it with DI by providing a connection string to Redis:

```cs
string connectionString = builder.Configuration.GetConnectionString("Redis");

builder.Services.AddStackExchangeRedisCache(options =>
{
    options.Configuration = connectionString;
});
```

An alternative approach is to register an `IConnectionMultiplexer` as a service. Then, we will use it to provide a function for the `ConnectionMultiplexerFactory`.

```cs
string connectionString = builder.Configuration.GetConnectionString("Redis");

IConnectionMultiplexer connectionMultiplexer =
    ConnectionMultiplexer.Connect(connectionString);

builder.Services.AddSingleton(connectionMultiplexer);

builder.Services.AddStackExchangeRedisCache(options =>
{
    options.ConnectionMultiplexerFactory =
        () => Task.FromResult(connectionMultiplexer);
});
```

Now, when you inject `IDistributedCache`, it will use Redis under the hood.

---

## Cache Stampede and HybridCache

The in-memory cache implementations in ASP.NET Core are susceptible to race conditions, which can cause a cache stampede. A [<FontIcon icon="fa-brands fa-wikipedia-w"/>cache stampede](https://en.wikipedia.org/wiki/Cache_stampede) happens when concurrent requests encounter a cache miss and try to fetch the data from the source. This can overload your application and negate the benefits of caching.

Locking is one solution for the cache stampede problem. .NET offers many options for [locking and concurrency control](/explore/articles/milanjovanovic.tech/introduction-to-locking-and-concurrency-control-in-dotnet-6.md). The most commonly used locking primitives are the `lock` statement and the `Semaphore` (or `SemaphoreSlim`) class.

Here's how we could use `SemaphoreSlim` to introduce locking before fetching data:

```cs{3,13,24}
public static class DistributedCacheExtensions
{
    private static readonly SemaphoreSlim Semaphore = new SemaphoreSlim(1, 1);

    // Arguments omitted for brevity
    public static async Task<T> GetOrCreateAsync<T>(...)
    {
        // Fetch data from cache, and return if present

        // Cache miss
        try
        {
            await Semaphore.WaitAsync();

            // Check if the data was added to the cache by another request

            // If not, proceed to fetch data and cache it
            var data = await factory();

            await cache.SetStringAsync(
                key,
                JsonSerializer.Serialize(data),
                cacheOptions ?? DefaultExpiration);
        }
        finally
        {
            Semaphore.Release();
        }

        return data;
    }
}
```

The previous implementation has a lock contention issue since all requests have to wait for the semaphore. A much better solution would be locking based on the `key` value.

.NET 9 introduces a new caching abstraction called `HybridCache`, which aims to solve the shortcomings of `IDistributedCache`. Learn more about this in the [<FontIcon icon="fa-brands fa-microsoft"/>Hybrid cache documentation](https://learn.microsoft.com/en-us/aspnet/core/performance/caching/hybrid).

---

## Summary

Caching is a powerful technique for improving web application performance. ASP.NET Core's caching abstractions make it easy to implement various caching strategies.

We can choose from `IMemoryCache` for in-memory cache and `IDistributedCache` for distributed caching.

Here are a few guidelines to wrap up this week's issue:

- Use `IMemoryCache` for simple, in-memory caching
- Implement the cache aside pattern to minimize database hits
- Consider Redis as a high-performance distributed cache implementation
- Use `IDistributedCache` for sharing cached data across multiple applications

That's all for today.

See you next week.

---

<TagLinks />