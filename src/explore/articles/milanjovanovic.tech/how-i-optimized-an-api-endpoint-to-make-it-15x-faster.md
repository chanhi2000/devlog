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

<!-- TODO: 작성 -->

<!-- 
Performance optimization is my favorite thing about software engineering.
Over the last 5 years, I've encountered various performance problems
that taught me different ways to overcome them.

About a month ago, I ran into an issue with an API endpoint that wasn't scaling well.

This endpoint is used to calculate a report for an e-commerce web application.
It needed to talk to multiple modules (services) to gather all the necessary data,
combine it and perform the calculations.

I made a <a href="https://www.linkedin.com/feed/update/urn:li:activity:6966700329111310336/">post about it on LinkedIn</a>
that resonated with many people.

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27762%27%20height=%27742%27/%3e"><img src="/blogs/mnw_007/linkedin_post.png?imwidth=1920" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" srcset="/blogs/mnw_007/linkedin_post.png?imwidth=828 1x, /blogs/mnw_007/linkedin_post.png?imwidth=1920 2x"><noscript><img srcSet="/blogs/mnw_007/linkedin_post.png?imwidth=828 1x, /blogs/mnw_007/linkedin_post.png?imwidth=1920 2x" src="/blogs/mnw_007/linkedin_post.png?imwidth=1920" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>
In this newsletter, I want to break down what I did to achieve a **15x performance improvement**.

---

## focus-on-bottlenecks-first"><a href="#focus-on-bottlenecks-first">Focus On Bottlenecks First

The first thing I do when I'm solving a performance problem
is determine where the slowest piece of the code is.
Fixing this part of the code will usually give the most significant improvement.

Solving one bottleneck can also reveal where the next bottleneck is.<br>
This is a continual process.

In my situation, there were a few bottlenecks:

- Calling the database from a loop
<li>Calling an external service multiple times
<li>Executing a complex calculation multiple times with identical parameters

How can you measure performance?

A simple approach can be using `System.Timers.Timer` where you
manually log execution times between method calls.
Or you can use a performance profiler.

---

## reduce-the-number-of-round-trips"><a href="#reduce-the-number-of-round-trips">Reduce The Number of Round Trips

A round trip between your application and a database
(or some other service) can last 5-10ms, or more.
If you have many round trips in your flow, it's going to add up quickly.

Here are a few things you can do reduce the number of round trips:

1. Don't call the database from a loop. This can usually be solved with a simple query like this:

```sql
   SELECT * FROM [TableName] WHERE Id IN (list_of_ids)

```

<ol start="2">
<li>
Use a query that returns multiple result sets from the database.
One library that supports this is <a href="https://github.com/DapperLib/Dapper">Dapper</a>, with the `QueryMultiple` method.


<li>
If you need to make multiple calls to another service, try to convert that into one call.
And in the service, aggregate the required data and return everything at once.



---

## parallelize-external-calls"><a href="#parallelize-external-calls">Parallelize External Calls

I had a situation where I was awaiting multiple asynchronous calls from a few services.
These calls had no dependencies on each other, so I used a simple technique
to gain a significant performance improvement.

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

Notice that I'm directly accessing the `Result` property on the tasks.
This can be **detrimental** if you're using it to block on an asynchronous call,
and can even lead to deadlocks.

However, in this situation it is perfectly safe to do,
because the two tasks will have completed after the call to `Task.WhenAll` completes.

Of course, whether or not these tasks will be executed in parallel
when calling `Task.WhenAll` depends on a few factors, which I won't cover here.

---

## caching-as-a-last-resort"><a href="#caching-as-a-last-resort">Caching As a Last Resort

I try to leave caching for the end, after I have exhausted
all other possibilities to improve performance.
While I love to use caching in general, I'm aware
it can introduce some unwanted behavior when data is stale.

You have to consider how long you can safely cache the data,
and how you are going to clear the cache if the underlying data changes.

In simple applications, I use `IMemoryCache`
that is available in **ASP.NET Core** out of the box.
But you can also use an external cache like <a href="https://redis.io/">Redis</a>.

A good candidate for caching is data that is frequently accessed, but rarely modified.

---

## closing-thoughts"><a href="#closing-thoughts">Closing Thoughts

I think that for most Web applications,
performance optimization can be boiled down to the following approaches:

- <a href="#focus-on-bottlenecks-first">Focus on bottlenecks first</a>
<li><a href="#reduce-the-number-of-round-trips">Reduce the number of round trips</a>
<li><a href="#parallelize-external-calls">Parallelize external calls</a>
<li><a href="#caching-as-a-last-resort">Caching</a>

I didn't talk about database optimization and indexes here,
but this should also be on your mind if the database is your bottleneck.

-->

---

<TagLinks />