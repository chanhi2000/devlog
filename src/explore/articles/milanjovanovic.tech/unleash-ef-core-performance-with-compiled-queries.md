---
lang: ko-KR
title: Unleash EF Core Performance With Compiled Queries
description: Article(s) > Unleash EF Core Performance With Compiled Queries
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
      content: Article(s) > Unleash EF Core Performance With Compiled Queries
    - property: og:description
      content: Unleash EF Core Performance With Compiled Queries
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/unleash-ef-core-performance-with-compiled-queries.html
prev: /programming/cs/articles/README.md
date: 2023-01-14
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_020.png
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
  name="Unleash EF Core Performance With Compiled Queries"
  desc="In this week's newsletter I want to introduce you to an interesting feature in EF Core called Compiled Queries. If you have queries that you execute frequently in your application with a different set of parameters, it can be helpful to explicitly compile the query and reuse it throughout the lifetime of your application. Compiled Queries are more performant than standard EF queries, because they can take advantage of some additional optimizations. Let me show you how to use Compiled Queries, and how much performance improvement to expect."
  url="https://milanjovanovic.tech/blog/unleash-ef-core-performance-with-compiled-queries/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_020.png"/>

In this week's newsletter I want to introduce you to an interesting feature in **EF Core** called **Compiled Queries**.

If you have queries that you execute frequently in your application with a different set of parameters, it can be helpful to explicitly compile the query and reuse it throughout the lifetime of your application.

**Compiled Queries** are more performant than standard EF queries, because they can take advantage of some additional optimizations.

Let me show you how to use **Compiled Queries**, and how much performance improvement to expect!

---

## How To Create Compiled Queries

Lets define a simple class that will represent out data model that we will use for writing **EF** queries:

```cs
public class Newsletter
{
    public long Id { get; init; }

    public string Title { get; init; }

    public int ReadTimeInMinutes { get; init; }
}
```

How would we write a simple query to fetch a `Newsletter` by the `Id`? I think you can do this in your sleep.

```cs
using var dbContext = new AppDbContext();

var newsletter = dbContext.Set<Newsletter>().FirstOrDefault(n => n.Id == id);
```

Now, how do we convert this query into a **Complied Query**?

There are a few steps involved:

- Create a **Compiled Query** by calling `EF.CompileQuery`
- Store the **Compiled Query** in a static field, so that it can be reused
- Execute the database query using the **Compiled Query**

You can define the **Compiled Query** in a static field inside of the `AppDbContext`. And then expose a method that will accept an argument, and pass it to the **Compiled Query** to invoke it.

```cs
using Microsoft.EntityFrameworkCore;

public class AppDbContext
{
    private static Func<AppDbContext, long, Newsletter?> GetNewsletter =
        EF.CompileQuery(
            (dbContext, id) =>
                dbContext.Set<Newsletter>().FirstOrDefault(n => n.Id == id));

    public Newsletter? GetNewsletter(long id)
    {
        return GetNewsletter(this, id);
    }
}
```

This is how we would call the method which invokes the **Compiled Query**:

```cs
using var dbContext = new AppDbContext();

var newsletter = dbContext.GetNewsletter(id);
```

I ran some benchmarks, with the following setup:

- **EF Core 7**
- **SQL Server 2022**
- Table with 10,000 records

The **Compiled Query** was consistently around **10% faster**.

I also tried running a no-tracking query by calling `AsNoTracking()` and observed similar results.

---

## Why Are Compiled Queries Faster?

So we can conclude that **Compiled Queries** are faster. But why is that?

Let's examine what happens when we execute an **EF** LINQ query. Before **EF** can convert the query into valid SQL that can be executed in the database, it needs to compile the query. The compiled query is cached and **EF** will be able to reuse that cached query. In some situations the query needs to be recompiled, introducing additional performance costs.

When we explicitly compile the query by calling `EF.CompileQuery`, we can utilize some optimization techniques that aren't available at runtime.

Note that **Compiled Queries** only improve the performance of the in-memory portion of executing an EF query. The round trip time and materializing results from the database remain unaffected.

---

## Can We Make Compiled Queries Asynchronous?

I showed you how to write a synchronous **Compiled Query**. But due to performance considerations we almost always want to execute database queries asynchronously.

Here's how we can create an asynchronous **Compiled Query**:

```cs
using Microsoft.EntityFrameworkCore;

public class AppDbContext
{
    private static Func<AppDbContext, string, Task<Newsletter?>> GetByTitle =
        EF.CompileAsyncQuery(
            (AppDbContext context, string title) =>
                context.Set<Newsletter>().FirstOrDefault(c => c.Title == title));

    public async Task<Newsletter?> GetNewsletterByTitleAsync(string title)
    {
        return await GetByTitle(this, title);
    }
}
```

It's interesting that we aren't writing an asynchronous query in the expression passed to `EF.CompileAsyncQuery`. It will be converted to an asynchronous query during compilation.

---

## Compiled Queries Aren't a Silver Bullet

You might be tempted to go and convert all of your **EF** queries into **Compiled Queries**, to squeeze out that last little bit of performance. I urge you not do it. **Compiled Queries** are a useful tool, but they aren't the solution to all your problems.

Instead, I think we should use **Compiled Queries** sparingly, only in situations where we really need to do these kinds of micro-optimizations.

Although **Compiled Queries** seem great, we can't deny they increase the complexity of our code considerably. If you think the slight performance improvement gained from using **Compiled Queries** justifies the increase in complexity, then by all means, you should use them. Otherwise, I would look for other ways to improve performance.

---

<TagLinks />