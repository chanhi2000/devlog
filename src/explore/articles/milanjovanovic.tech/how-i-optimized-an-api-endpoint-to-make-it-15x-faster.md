---
lang: ko-KR
title: How I Optimized an API Endpoint to Make It 15x Faster
description: Article(s) > How I Optimized an API Endpoint to Make It 15x Faster
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
      content: Article(s) > How I Optimized an API Endpoint to Make It 15x Faster
    - property: og:description
      content: How I Optimized an API Endpoint to Make It 15x Faster
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/how-i-optimized-an-api-endpoint-to-make-it-15x-faster.html
prev: /programming/cs/articles/README.md
date: 2022-10-15
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_007.png
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
  name="How I Optimized an API Endpoint to Make It 15x Faster"
  desc="Performance optimizations are my favorite thing about software engineering. Over the last 5 years, I've encountered various performance problems that taught me different ways to overcome them."
  url="https://milanjovanovic.tech/blog/how-i-optimized-an-api-endpoint-to-make-it-15x-faster/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_007.png"/>

Performance optimization is my favorite thing about software engineering. Over the last 5 years, I've encountered various performance problems that taught me different ways to overcome them.

About a month ago, I ran into an issue with an API endpoint that wasn't scaling well.

This endpoint is used to calculate a report for an e-commerce web application. It needed to talk to multiple modules (services) to gather all the necessary data, combine it and perform the calculations.

I made a [<FontIcon icon="fa-brands fa-linkedin"/>post about it on LinkedIn](https://linkedin.com/feed/update/urn:li:activity:6966700329111310336/) that resonated with many people.

![](https://milanjovanovic.tech/blogs/mnw_007/linkedin_post.png?imwidth=1920)

In this newsletter, I want to break down what I did to achieve a **15x performance improvement**.

---

## Focus On Bottlenecks First

The first thing I do when I'm solving a performance problem is determine where the slowest piece of the code is. Fixing this part of the code will usually give the most significant improvement.

Solving one bottleneck can also reveal where the next bottleneck is.<br/>This is a continual process.

In my situation, there were a few bottlenecks:

- Calling the database from a loop
- Calling an external service multiple times
- Executing a complex calculation multiple times with identical parameters

How can you measure performance?

A simple approach can be using `System.Timers.Timer` where you manually log execution times between method calls. Or you can use a performance profiler.

---

## Reduce The Number of Round Trips

A round trip between your application and a database (or some other service) can last 5-10ms, or more. If you have many round trips in your flow, it's going to add up quickly.

Here are a few things you can do reduce the number of round trips:

::: tabs 

@tab:active 1.

Don't call the database from a loop. This can usually be solved with a simple query like this:

```sql
   SELECT * FROM [TableName] WHERE Id IN (list_of_ids)
```

@tab 2.

Use a query that returns multiple result sets from the database. One library that supports this is [<FontIcon icon="iconfont icon-github"/>`DapperLib/Dapper`](https://github.com/DapperLib/Dapper), with the `QueryMultiple` method.


@tab 3.

If you need to make multiple calls to another service, try to convert that into one call. And in the service, aggregate the required data and return everything at once.

:::

---

## Parallelize External Calls

I had a situation where I was awaiting multiple asynchronous calls from a few services. These calls had no dependencies on each other, so I used a simple technique to gain a significant performance improvement.

Let's say you're awaiting two tasks:

```cs
var task1Result = await CallService1Async();

var task2Result = await CallService2Async();

// Use the results.
```

A simple way to parallelize these calls is using the `Task.WhenAll` method:

```cs
var task1 = CallService1Async();

var task2 = CallService2Async();

await Task.WhenAll(task1, task2);

// Use the results.
task1.Result;
task2.Result;
```

Notice that I'm directly accessing the `Result` property on the tasks. This can be **detrimental** if you're using it to block on an asynchronous call, and can even lead to deadlocks.

However, in this situation it is perfectly safe to do, because the two tasks will have completed after the call to `Task.WhenAll` completes.

Of course, whether or not these tasks will be executed in parallel when calling `Task.WhenAll` depends on a few factors, which I won't cover here.

---

## Caching As a Last Resort

I try to leave caching for the end, after I have exhausted all other possibilities to improve performance. While I love to use caching in general, I'm aware it can introduce some unwanted behavior when data is stale.

You have to consider how long you can safely cache the data, and how you are going to clear the cache if the underlying data changes.

In simple applications, I use `IMemoryCache` that is available in **ASP.NET Core** out of the box. But you can also use an external cache like [<FontIcon icon="iconfont icon-redis"/>Redis](https://redis.io/).

A good candidate for caching is data that is frequently accessed, but rarely modified.

---

## Closing Thoughts

I didn't talk about database optimization and indexes here, but this should also be on your mind if the database is your bottleneck.

---

<TagLinks />