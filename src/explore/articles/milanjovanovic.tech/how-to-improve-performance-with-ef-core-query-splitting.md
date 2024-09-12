---
lang: ko-KR
title: How To Improve Performance With EF Core Query Splitting
description: Article(s) > How To Improve Performance With EF Core Query Splitting
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
      content: Article(s) > How To Improve Performance With EF Core Query Splitting
    - property: og:description
      content: How To Improve Performance With EF Core Query Splitting
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/how-to-improve-performance-with-ef-core-query-splitting.html
prev: /programming/cs/articles/README.md
date: 2022-09-17
isOriginal: false
cover: https://www.milanjovanovic.tech/blog-covers/mnw_003.png
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
  name="How To Improve Performance With EF Core Query Splitting"
  desc="I recently ran into an issue with Entity Framework Core. The query I was running was constantly timing out. So I used a new EF Core feature called Query Splitting to significantly improve my performance."
  url="https://milanjovanovic.tech/blog/how-to-improve-performance-with-ef-core-query-splitting/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://www.milanjovanovic.tech/blog-covers/mnw_003.png"/>

<!-- TODO: 작성 -->

<!-- 
I recently ran into an issue with **Entity Framework Core**.

The query I was running was constantly timing out.

I tried to scale up the application server, and it didn't help.

I tried to scale up the database server, and it didn't help.

So how did I solve the problem?

---

## what-was-the-problem-with-this-query"><a href="#what-was-the-problem-with-this-query">What Was The Problem With This Query?

I'm working on an application in the e-commerce domain.
To be specific, it's an order management system for a kitchen cabinet manufacturer.

The table that I frequently query on is the `Orders` table.
The `Order` can have one or more `LineItems`.
A typical `Order` will contain 50 `LineItems`.
Also, `LineItems` have a table that contains the valid dimensions - `LineItemDimensions`.

This is the query I was trying to run:

```cs
dbContext
    .Orders
    .Include(order => order.LineItems)
    .ThenInclude(lineItem => lineItem.Dimensions)
    .First(order => order.Id == orderId);

```

When EF Core converts this into SQL, this is what it will send to the database:

```sql
SELECT o.*, li.*, d.*
FROM Orders o
LEFT JOIN LineItems li ON li.OrderId = o.Id
LEFT JOIN LineItemDimensions d ON d.LineItemId = li.Id
WHERE o.Id = @orderId
ORDER BY o.Id, li.Id, d.Id;

```

In most cases, this query will execute just fine.

However, in my situation I was running into the problem of *Cartesian Explosion*.
This is mainly because of the join to the `LineItemDimensions` table.
And this is what's causing my query to fail, and time out.

So how did I solve this problem?

---

## query-splitting-to-the-rescue"><a href="#query-splitting-to-the-rescue">Query Splitting To The Rescue

With the release of **EF Core 5.0** we got a new feature called **Query Splitting**.
This allows us to specify that a given LINQ query should be split into multiple `SQL` queries.

To use **Query Splitting**, all you need to do is call the `AsSplitQuery` method:

```cs
dbContext
    .Orders
    .Include(order => order.LineItems)
    .ThenInclude(lineItem => lineItem.Dimensions)
    .AsSplitQuery()
    .First(order => order.Id == orderId);

```

In this case, EF Core will generate the following SQL queries:

```sql
SELECT o.*
FROM Orders o
WHERE o.Id = @orderId;

SELECT li.*
FROM LineItems li
JOIN Orders o ON li.OrderId = o.Id
WHERE o.Id = @orderId;

SELECT d.*
FROM LineItemDimensions d
JOIN LineItems li ON d.LineItemId = li.Id
JOIN Orders o ON li.OrderId = o.Id
WHERE o.Id = @orderId;

```

Notice that for each `Include` statement we have a separate `SQL` query.
The benefit here is that we are not duplicating data when fetching from the database,
as we were in the previous case.

---

## turning-on-query-splitting-for-all-queries"><a href="#turning-on-query-splitting-for-all-queries">Turning On Query Splitting For All Queries

You can enable **Query Splitting** at the database context level.
When configuring your database context you need to call the `UseQuerySplittingBehavior` method:

```cs
services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(
        "CONNECTION_STRING",
        o => o.UseQuerySplittingBehavior(
            QuerySplittingBehavior.SplitQuery)));

```

This will cause all queries that EF Core generates to be split queries.
To revert back to a single query, you need to call the `AsSingleQuery` method:

```cs
dbContext
    .Orders
    .Include(o => o.LineItems)
    .ThenInclude(li => li.Dimensions)
    .AsSingleQuery()
    .First(o => o.Id == orderId);

```

---

## what-you-should-know-about-query-splitting"><a href="#what-you-should-know-about-query-splitting">What You Should Know About Query Splitting

Although query splitting is an excellent addition to EF Core, there are a few things you need to be aware of.

There is no consistency guarantee for multiple SQL queries.
You may run into a problem if you have a concurrent update going through
at the same time when you query your data.
To mitigate this, you can wrap the queries inside of a transaction, but this will only introduce performance issues elsewhere.

Each query will require one network round trip. This can degrade performance if your latency to the database is high.

Now that you are armed with this knowledge, go and make your EF queries faster!

-->

---

<TagLinks />