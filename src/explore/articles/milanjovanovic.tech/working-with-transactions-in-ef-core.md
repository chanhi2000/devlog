---
lang: ko-KR
title: Working With Transactions In EF Core
description: Article(s) > Working With Transactions In EF Core
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
      content: Article(s) > Working With Transactions In EF Core
    - property: og:description
      content: Working With Transactions In EF Core
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/working-with-transactions-in-ef-core.html
prev: /programming/cs/articles/README.md
date: 2023-02-04
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_023.png
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
  name="Working With Transactions In EF Core"
  desc="Every software engineer working with SQL databases needs to know about transactions. And since most of the time the SQL database will be abstracted by an ORM like EF Core, it's important to understand how you can work with transactions using the available abstractions."
  url="https://milanjovanovic.tech/blog/working-with-transactions-in-ef-core/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_023.png"/>

Every software engineer working with **SQL databases** needs to know about **transactions**. And since most of the time the **SQL database** will be abstracted by an ORM like **EF Core**, it's important to understand how you can work with **transactions** using the available abstractions.

So today, I'll show you how to work with **transactions** in **EF Core**.

Here's what we will cover:

- Default transaction behavior
- Creating transactions
- Using existing transactions

Let's dive in.

---

## Default Transaction Behavior

What is the **default** EF Core **transaction behavior**?

By default, all changes made in a single call to `SaveChanges` are applied in a transaction. If any of the changes fail, the entire transaction is rolled back and no changes are applied to the database. Only if all changes are successfully persisted to the database, the call to `SaveChanges` can complete.

This is a wonderful feature of **SQL databases** and it saves us many headaches. We don't have to think about the databases remaining in an inconsistent state, because database **transactions** can do the work for us.

Let's take a look at an example.

```cs
using var context = new ShoppingContext();

context.LineItems.Add(new LineItem
{
    ProductId = productId,
    Quantity = quantity
});

var stock = context.Stock.FirstOrDefault(s => s.ProductId == productId);

stock.Quantity -= quantity;

context.SaveChanges();
```

Because we are adding a `LineItem`, and in the same scope reducing the `Stock` quantity, the call to `SaveChanges` will apply both changes inside of a transaction. We can guarantee that the database will remain in a **consistent state**.

---

## Creating Transactions With EF Core

What if you want to have more control over **transactions** when working with **EF Core**?

You can manually create a transaction by accessing the `Database` facade available on a `DbContext` instance and calling `BeginTransaction`.

Here's an example where we have multiple calls to `SaveChanges`. In the default scenario, both calls would run in their own transaction. This leaves the possibility of the second call to `SaveChanges` failing, and leaving the database in an inconsistent state.

```cs
using var context = new ShoppingContext();
using var transaction  = context.Database.BeginTransaction();

try
{
    context.LineItems.Add(new LineItem
    {
        ProductId = productId,
        Quantity = quantity
    });

    context.SaveChanges();

    var stock = context.Stock.FirstOrDefault(s => s.ProductId == productId);

    stock.Quantity -= quantity;

    context.SaveChanges();

    // When we commit the changes, they will be applied to the databases.
    // The transaction will auto-rollback when it is disposed,
    // if any command fails.
    transaction.Commit();
}
catch (Exception)
{
    transaction.Rollback();
}
```

We call `BeginTransaction` to manually start a new **database transaction**. This will create a new transaction and return it, so that we can `Commit` the transaction when we want to complete the operation. You also want to add a `try-catch` block around your code, so that you can `Rollback` the transaction if there are any exceptions.

---

## Using Existing Transactions With EF Core

Creating a transaction using the EF Core `DbContext` isn't the only option. You can create a `SqlTransaction` instance and pass it to **EF Core**, so that the changes applied with EF Core can be committed inside the same **transaction**.

Here's what I mean:

```cs
using var sqlConnection = new SqlTransaction(connectionString);
sqlConnection.Open();

using var transaction = sqlConnection.BeginTransaction();

try
{
    using var context = new ShoppingContext();

    // Tell EF Core to use an existing transaction.
    context.UseTransaction(transaction);

    context.LineItems.Add(new LineItem
    {
        ProductId = productId,
        Quantity = quantity
    });

    context.SaveChanges();

    var stock = context.Stock.FirstOrDefault(s => s.ProductId == productId);

    stock.Quantity -= quantity;

    context.SaveChanges();

    transaction.Commit();
}
catch (Exception)
{
    transaction.Rollback();
}
```

---

## In Summary

**EF Core** has excellent support for **transactions** and it's very easy to work with.

You have three options available:

- Rely on the default transaction behavior
- Create a new transaction
- Use an existing transaction

Most of the time, you want to rely on the default behavior and not have to think about it.

As soon as you need to perform multiple `SaveChanges` calls, you should manually create a transaction, and manage the transaction yourself.

See you next week, and have an excellent Saturday.

---

<TagLinks />