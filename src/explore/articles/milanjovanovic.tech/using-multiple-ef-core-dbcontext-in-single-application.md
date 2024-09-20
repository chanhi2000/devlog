---
lang: ko-KR
title: "Using Multiple EF Core DbContexts In a Single Application"
description: "Article(s) > Using Multiple EF Core DbContexts In a Single Application"
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
      content: "Article(s) > Using Multiple EF Core DbContexts In a Single Application"
    - property: og:description
      content: "Using Multiple EF Core DbContexts In a Single Application"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/using-multiple-ef-core-dbcontext-in-single-application.html
prev: /programming/cs/articles/README.md
date: 2023-03-11
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_028.png
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
  name="Using Multiple EF Core DbContexts In a Single Application"
  desc="Entity Framework Core (EF Core) is a popular ORM in .NET that allows you to work with SQL databases. EF Core uses a DbContext, which represents a session with the database and is responsible for tracking changes, performing database operations, and managing database connections. It's common to have only one DbContext for the entire application. But what if you need to have multiple DbContexts?"
  url="https://milanjovanovic.tech/blog/using-multiple-ef-core-dbcontext-in-single-application/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_028.png"/>

**Entity Framework Core (EF Core)** is a popular ORM in .NET that allows you to work with SQL databases. EF Core uses a `DbContext`, which represents a session with the database and is responsible for tracking changes, performing database operations, and managing database connections.

It's common to have only one `DbContext` for the entire application.

But what if you need to have **multiple DbContexts**?

In this week's newsletter we're going to explore:

- When you may want to use multiple `DbContexts`
- How to create multiple `DbContexts`
- What are the benefits of using multiple `DbContexts`

Let's dive in!

---

## Why Use Multiple `DbContexts`?

There are a few cases where using **multiple `DbContexts` can be useful.**

::: tabs

@tab:active Multiple Databases

Does your application need to work with multiple SQL databases? Then you're forced to use multiple `DbContexts`, each one dedicated to a specific SQL database.

@tab Separating Concerns

If the application you're building has a complex domain model, you may see an improvement by separating concerns between a few `DbContexts`, where each one is responsible for a specific area of the domain model.

@tab Modular Monolith

When you're building a **Modular Monolith**, using multiple `DbContexts` can be practical because you can configure a different **database schema** per `DbContext`, giving you logical separation at the database level.

@tab Read Replicas

You can configure a separate `DbContext` instance to access the read replica of your database, and use that `DbContext` for read-only queries. You can also configure `QueryTrackingBehavior.NoTracking` on the `DbContext` level to improve query performance.

:::

---

## Creating Multiple DbContexts In a Single Application

Here's how you can easily configure multiple `DbContexts`. Let's say we have a `CatalogDbContext` and an `OrderDbContext` in our application. We want to configure them using the following constrainsts:

- Both DbContexts use the **same database**
- Each DbContext has a **separate database schema**

```cs
public class CatalogDbContext : DbContext
{
    public DbSet<Product> Products { get; set; }

    public DbSet<Category> Categories { get; set; }
}

public class OrderDbContext : DbContext
{
    public DbSet<Order> Orders { get; set; }

    public DbSet<LineItem> LineItems { get; set; }
}
```

First we need to configure the `CatalogDbContext` and `OrderDbContext` with the DI container. You can do this by calling the `AddDbContext` method and specifying which `DbContext` is being configured, and then using the SQL provider specific method to pass the connection string. In this case I'm connecting to SQL Server with the `UseSqlServer` method.

```cs
using Microsoft.EntityFrameworkCore;

services.AddDbContext<CatalogDbContext>(options =>
    options.UseSqlServer("CONNECTION_STRING"));

services.AddDbContext<OrderDbContext>(options =>
    options.UseSqlServer("CONNECTION_STRING"));
```

If you just want to use both DbContexts in the same schema, then this is all the configuration you need. You can now inject the `DbContext` instances in your application and use them.

However, if you want to configure a different schema for each `DbContext` then you also need to override the `OnModelCreating` method and specify the custom schema with `HasDefaultSchema`.

```cs
public class CatalogDbContext : DbContext
{
    public DbSet<Product> Products { get; set; }

    public DbSet<Category> Categories { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.HasDefaultSchema("catalog");
    }
}

public class OrderDbContext : DbContext
{
    public DbSet<Order> Orders { get; set; }

    public DbSet<LineItem> LineItems { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.HasDefaultSchema("order");
    }
}
```

Limitations with multiple `DbContexts`:

1. It's not possible to do a join between different `DbContext` instances, because **EF Core** doesn't know if they are using the same database
2. Transactions will only work if the `DbContexts` are using the same database. You have to create a new transaction and share it between the `DbContexts` by [calling the `UseTransaction` method](/explore/articles/milanjovanovic.tech/working-with-transactions-in-ef-core#using-existing-transactions-with-ef-core.md)

**Migrations History Table**

If you decide to use different schemas per `DbContext`, you will be unpleasantly surprised to learn that the default schema doesn't apply to the migrations history table.

You need to configure this by calling the `MigrationsHistoryTable` method and specifying the table name and schema where the migrations history for that context will live. I used the `HistoryRepository.DefaultTableName` constant in this example, but you can specify a custom table name if you want to.

```cs
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Migrations;

services.AddDbContext<CatalogDbContext>(options =>
    options.UseSqlServer(
        "CONNECTION_STRING",
        o => o.MigrationsHistoryTable(
            tableName: HistoryRepository.DefaultTableName,
            schema: "catalog")));

services.AddDbContext<OrderDbContext>(options =>
    options.UseSqlServer(
        "CONNECTION_STRING",
        o => o.MigrationsHistoryTable(
            tableName: HistoryRepository.DefaultTableName,
            schema: "order")));

```

---

## Benefits Of Using Multiple DbContexts

Using multiple DbContexts can offer several benefits to your application:

- Separation of concerns
- Better performance
- More control & security

Each DbContext can be responsible for a specific subset of the application's data, which can help organize the code and make it more modular.

When you separate data access into multiple DbContexts, the application can reduce the risk of contention and improve concurrency, and this can improve performance.

And if you're using multiple DbContexts, you can configure more granular access control to improve application security. You can also optimize performance and resource usage.

---

## In Summary

Using **multiple EF Core DbContexts** in a single application is straightforward and has many benefits.

For ready-heavy applications you can configure a separate `DbContext` to turn off query tracking by default and get improved performance.

Also, using multiple DbContexts is practical if you're building a **Modular monolith**. You can configure the DbContexts to be in **separate database schemas**, giving you logical separation at the database level.

That's all for today.

See you next week.

---

<TagLinks />