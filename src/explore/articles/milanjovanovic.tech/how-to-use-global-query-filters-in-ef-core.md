---
lang: ko-KR
title: How To Use Global Query Filters in EF Core
description: Article(s) > How To Use Global Query Filters in EF Core
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
      content: Article(s) > How To Use Global Query Filters in EF Core
    - property: og:description
      content: How To Use Global Query Filters in EF Core
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/how-to-use-global-query-filters-in-ef-core.html
prev: /programming/cs/articles/README.md
date: 2022-10-29
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_009.png
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
  name="How To Use Global Query Filters in EF Core"
  desc="In this week's newsletter, I'll show you how you can remove repetitive conditions in EF Core database queries. An example would be when you implement soft-delete, and have to check if a record was soft-deleted or not in every query. Also, it is practical if you're working in a multi-tenant system and need to specify a tenantId on every query. EF Core has a powerful feature called Query Filters that can help you remove repetitive conditions from your code."
  url="https://milanjovanovic.tech/blog/how-to-use-global-query-filters-in-ef-core/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_009.png"/>

<!-- TODO: 작성 -->

<!-- 
In this week's newsletter, I'll show you how you can remove repetitive conditions in **EF Core** database queries.

Which kinds of queries fit this description?

An example would be when you implement **soft-delete**, and have to check if a record was **soft-deleted** or not in every query.

Also, it's practical if you're working in a multi-tenant system and need to specify a `tenantId` on every query.

**EF Core** has a powerful feature that can help you remove repetitive conditions from your code.

I'm talking about <a href="https://learn.microsoft.com/en-us/ef/core/querying/filters">Query Filters</a>.

Let's see how we can implement it.

---

## how-to-apply-query-filters"><a href="#how-to-apply-query-filters">How To Apply Query Filters

Before introducing **Query Filters**, we will see how the standard approach looks.
We have an `Orders` table that supports **soft-deleting**.
And we never want to return **soft-deleted** orders.

We'll start with an `Order` entity that has an `IsDeleted` property.

```cs
public class Order
{
   public int Id { get; set; }
   public bool IsDeleted { get; set; }
}

```

And we have a business requirement that we can only query orders that are not deleted.

Here's what an **EF** query to get a single `Order` might look like:

```cs
dbContext
   .Orders
   .Where(order => !order.IsDeleted)
   .Where(order => order.Id == orderId)
   .FirstOrDefault();

```

This works perfectly for what we need to do.

However, we need to remember to apply this condition every time we want to query the `Order` entity.

Now, let's see how we can define a **Query Filter** on the `Order` entity to
apply this check when querying the database.

Inside of the `OnModelCreating` method on the database context, we need to
call the `HasQueryFilter` method and specify the expression we want:

```cs
modelBuilder
   .Entity<Order>()
   .HasQueryFilter(order => !order.IsDeleted);

```

Now we can omit the **soft-delete** check from the previous **LINQ** expression:

```cs
dbContext
   .Orders
   .Where(order => order.Id == orderId)
   .FirstOrDefault();

```

And this is the **SQL** that **EF** will generate with the **Query Filter**:

```sql
SELECT o.*
FROM Orders o
WHERE o.IsDeleted = FALSE AND o.Id = @orderId

```

---

## disabling-query-filters"><a href="#disabling-query-filters">Disabling Query Filters

You may run into a situation where you need to disable **Query Filters** for a specific query.
Luckily, there is an easy way to do this.

In your **LINQ** expression, you need to call the `IgnoreQueryFilters` method,
and all the **Query Filters** configured for this entity will be disabled:

```cs
dbContext
   .Orders
   .IgnoreQueryFilters()
   .Where(order => order.Id == orderId)
   .FirstOrDefault();

```

Be careful when doing this, as you can easily introduce unwanted behavior in your application.

---

## good-things-to-know-before-using-query-filters"><a href="#good-things-to-know-before-using-query-filters">Good Things To Know Before Using Query Filters

Here are a few more details that you should know about **Query Filters** before using them.
Hopefully, this will save you some trouble if you decide to use them in your application.

**Configuring multiple Query Filters**

Configuring multiple **Query Filters** on the same entity will only apply the last one.
If you need more than one condition, you can do that with the logical `AND` operator (&&).

**Ignoring specific Query Filters**

If you need to ignore a specific expression in a **Query Filter** and leave the rest in place,
unfortunately, you can't do that. Only one **Query Filter** is allowed per entity type.

One solution is calling `IgnoreQueryFilters`, which will remove the configured **Query Filter**
for that entity type. And then manually apply the condition that you need for that specific query.

-->

---

<TagLinks />