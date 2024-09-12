---
lang: ko-KR
title: "What You Need To Know About EF Core Bulk Updates"
description: "Article(s) > What You Need To Know About EF Core Bulk Updates"
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
      content: "Article(s) > What You Need To Know About EF Core Bulk Updates"
    - property: og:description
      content: "What You Need To Know About EF Core Bulk Updates"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/what-you-need-to-know-about-ef-core-bulk-updates.html
prev: /programming/cs/articles/README.md
date: 2024-06-22
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_095.png
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
  name="What You Need To Know About EF Core Bulk Updates"
  desc="EF Core 7 introduced two powerful new methods, ExecuteUpdate and ExecuteDelete. However, there's an important caveat: these bulk operations bypass the EF Core Change Tracker."
  url="https://milanjovanovic.tech/blog/what-you-need-to-know-about-ef-core-bulk-updates/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_095.png"/>

<!-- TODO: 작성 -->

<!-- 
When you're dealing with thousands or even millions of records, efficiency is king. That's where <a href="how-to-use-the-new-bulk-update-feature-in-ef-core-7">**EF Core bulk update**</a> capabilities come into play.

EF Core 7 introduced two powerful new methods, `ExecuteUpdate` and `ExecuteDelete`. They're designed to simplify bulk updates in your database. Both methods have their respective async overloads - `ExecuteUpdateAsync` and `ExecuteDeleteAsync`. <a href="https://learn.microsoft.com/en-us/ef/core/saving/execute-insert-update-delete">EF bulk updates</a> offer significant performance advantages over traditional approaches.

However, there's an **important caveat**: these bulk operations bypass the EF Core **Change Tracker**. This disconnect can lead to unexpected behavior if you're not aware of it.

In this week's issue, we'll dive into the details of bulk updates in EF Core.

---

## Understanding the EF Core ChangeTracker

When you load entities from the database with EF Core, the `ChangeTracker` starts tracking them. As you update properties, delete entities, or add new ones, the `ChangeTracker` records these changes.

```cs
using (var context = new AppDbContext())
{
    // Load a product
    var product = context.Products.FirstOrDefault(p => p.Id == 1);
    product.Price = 99.99; // Modify a property

    // At this point, the ChangeTracker knows that 'product' has been modified

    // Add a new product
    var newProduct = new Product { Name = "New Gadget", Price = 129.99 };
    context.Products.Add(newProduct);

    // Delete a product
    context.Products.Remove(product);

    context.SaveChanges(); // Persist all changes to the database
}

```

When you call `SaveChanges`, EF Core uses the `ChangeTracker` to determine which SQL commands to execute. This ensures that the database is perfectly synchronized with your modifications. The `ChangeTracker` acts as a bridge between your in-memory object model and your database.

If you're already familiar with how EF Core works, this serves mostly as a reminder.

---

## Bulk Updates and the ChangeTracker Disconnect

Now, let's focus on how <a href="how-to-use-the-new-bulk-update-feature-in-ef-core-7">**bulk updates in EF Core**</a> interact with the `ChangeTracker` - or rather, how they don't interact with it. This design decision might seem counterintuitive, but there's a solid reason behind it: **performance**.

By directly executing SQL statements against the database, EF Core eliminates the overhead of tracking individual entity modifications.

```cs
using (var context = new AppDbContext())
{
    // Increase price of all electronics by 10%
    context.Products
        .Where(p => p.Category == "Electronics")
        .ExecuteUpdate(
            s => s.SetProperty(p => p.Price, p => p.Price * 1.10));

    // In-memory Product instances with Category == "Electronics"
    // will STILL have their old price
}

```

In this example, we're increasing the price of all products in the `Electronics` category by 10%. The `ExecuteUpdate` method efficiently translates the operation into a single SQL `UPDATE` statement.

```sql
UPDATE [p]
SET [p].[Price] = [p].[Price] * 1.10
FROM [Products] as [p];
```

However, if you inspect the `Product` instances that EF Core has already loaded into memory, you'll find that their `Price` properties haven't changed. This might seem surprising if you aren't aware of how bulk updates interact with the change tracker.

Everything we discussed up to this point also applies to the `ExecuteDelete` method.

<a href="how-to-use-ef-core-interceptors">**EF Core interceptors**</a> do not trigger for `ExecuteUpdate` and `ExecuteDelete` operations. If you need to track or modify bulk update operations, you can create database triggers that fire whenever a relevant table is updated or deleted. This allows you to log details and perform additional actions.

---

## The Problem: Maintaining Consistency

If `ExecuteUpdate` completes successfully, the changes are directly committed to the database. This is because bulk operations bypass the `ChangeTracker` and don't participate in the usual transaction managed by `SaveChanges`.

If `SaveChanges` subsequently fails due to an error (e.g., validation error, database constraint violation, connection issue), you'll be in an inconsistent state. The changes made by `ExecuteUpdate` are already persisted. Any changes made "in memory" are lost.

The most reliable way to ensure consistency is to wrap both `ExecuteUpdate` and the operations that lead to `SaveChanges` in a transaction:

```cs
using (var context = new AppDbContext())
<span class="code-line highlight-line">using (var transaction = context.Database.BeginTransaction())
{
    try
    {
        context.Products
            .Where(p => p.Category == "Electronics")
            .ExecuteUpdate(
                s => s.SetProperty(p => p.Price, p => p.Price * 1.10));

        // ... other operations that modify entities

        context.SaveChanges();

        transaction.Commit();
    }
    catch (Exception ex)
    {
        // You could also let the transaction go out of scope.
        // This would automatically rollback any changes.
        transaction.Rollback();

        // Proceed to handle the exception...
    }
}

```

If `SaveChanges` fails, the transaction will be rolled back, reverting the changes made by both `ExecuteUpdate` and any other operations within the transaction.
This keeps your database in a consistent state.

---

## Summary

EF Core bulk update features, `ExecuteUpdate` and `ExecuteDelete`, are invaluable tools for optimizing performance.
By bypassing the `ChangeTracker` and executing raw SQL directly, they deliver significant speed improvements compared to traditional methods.

However, it's crucial to be mindful of the potential pitfalls associated with this approach. The disconnect between in-memory entities and the database state can lead to unexpected results if not handled correctly.

My rule of thumb is to create an explicit <a href="working-with-transactions-in-ef-core">**database transaction**</a> when I want to make additional entity changes. We can be confident that all the changes will persist in the database or none of them will.

I hope this was helpful, and I'll see you next week.

::: note P.S.

Get the <a href="https://github.com/m-jovanovic/ef-bulk-updates">source code</a> and try out the examples from this issue.

:::

-->

---

<TagLinks />