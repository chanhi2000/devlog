---
lang: ko-KR
title: 5 EF Core Features You Need To Know
description: Article(s) > 5 EF Core Features You Need To Know
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
      content: Article(s) > 5 EF Core Features You Need To Know
    - property: og:description
      content: 5 EF Core Features You Need To Know
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/5-ef-core-features-you-need-to-know.html
prev: /programming/cs/articles/README.md
date: 2024-08-10
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_102.png
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
  name="5 EF Core Features You Need To Know"
  desc="EF Core is powerful, and knowing a few key features can save you lots of time and frustration. I've cherry-picked five essential features that you really need to know."
  url="https://milanjovanovic.tech/blog/5-ef-core-features-you-need-to-know/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_102.png"/>

Okay, let's be honest.
We all have a million things on our plates, and diving deep into every nook and cranny of EF Core might not be
at the top of your priority list.

But here's the deal: EF Core is powerful, and knowing a few key features can save you lots of time and frustration.

So, I won't bombard you with every single EF Core feature under the sun.

Instead, I've cherry-picked five essential ones that you really need to know.

We'll go through:

- **Query Splitting** - your database's new best friend
- **Bulk Updates and Deletes** - efficiency on steroids
- **Raw SQL Queries** - when you need to go rogue
- **Query Filters** - keeping things nice and tidy
- **Eager Loading** - because lazy isn't so great

Let's get started!

---

## Query Splitting

[**Query splitting**](/explore/articles/milanjovanovic.tech/how-to-improve-performance-with-ef-core-query-splitting.md) is one of those EF Core features that you rarely need.

Until one day, you do.

Query splitting is helpful in scenarios where you're eager loading multiple collections.

It helps us avoid the [<FontIcon icon="fa-brands fa-microsoft"/>cartesian explosion](https://learn.microsoft.com/en-us/ef/core/performance/efficient-querying#avoid-cartesian-explosion-when-loading-related-entities) problem.

Let's say we want to retrieve a department with all its teams and employees.
We might write a query like this:

```cs
Department department =
    context.Departments
        .Include(d => d.Teams)
        .Include(d => d.Employees)
        .Where(d => d.Id == departmentId)
        .First();
```

This translates to a single SQL query with two JOINs.

However, since these `JOIN` statements are on the same level, the database will return a *cross product*.

Each row from `Teams` will be joined with each row `Employees`.

In that case, the database returns many rows, significantly impacting performance.

Here's how we can avoid these performance issues with query splitting:

```cs
Department department =
    context.Departments
        .Include(d => d.Teams)
        .Include(d => d.Employees)
        .Where(d => d.Id == departmentId)
        .AsSplitQuery()
        .First();
```

With `AsSplitQuery`, EF Core will execute an additional SQL query for each collection navigation.

However, be cautious not to overuse query splitting.

I use split queries when I've *measured* that they consistently perform better.

Split queries have more round trips to the database, which might be slower if database latency is high.

There is also no consistency guarantee across multiple SQL queries.

---

## Bulk Updates and Deletes

EF Core 7 added two new APIs for performing [**bulk updates and deletes**](/explore/articles/milanjovanovic.tech/how-to-use-the-new-bulk-update-feature-in-ef-core-7.md),

`ExecuteUpdate` and `ExecuteDelete`.

They allow you to efficiently update a large number of rows in one round trip to the database.

Here's a practical example.

The company has decided to give a 5% raise to all employees in the "Sales" department.

Without bulk updates, we might iterate through each employee and update their salary individually:

```cs
var salesEmployees = context.Employees
    .Where(e => e.Department == "Sales")
    .ToList();

foreach (var employee in salesEmployees)
{
    employee.Salary *= 1.05m;
}

context.SaveChanges();
```

This approach involves multiple database roundtrips, which can be inefficient, especially for large datasets.

We can achieve the same in one roundtrip using `ExecuteUpdate`:

```cs
context.Employees
    .Where(e => e.Department == "Sales")
    .ExecuteUpdate(s => s.SetProperty(e => e.Salary, e => e.Salary * 1.05m));
```

This executes a single SQL `UPDATE` statement, directly modifying the salaries in the database without loading entities into memory, giving us improved performance.

Here's another example.

Let's say an e-commerce platform wants to delete all shopping carts older than one year.

Here's how we could do this with `ExecuteDelete`:

```cs
context.Carts
    .Where(o => o.CreatedOn < DateTime.Now.AddYears(-1))
    .ExecuteDelete();
```

This results in a single SQL `DELETE` statement, directly removing the old shopping carts from the database.

However, bulk updates bypass the EF change tracker.

This could be problematic, and I wrote about the [**caveats of bulk updates in this article**](/explore/articles/milanjovanovic.tech/what-you-need-to-know-about-ef-core-bulk-updates.md).

---

## Raw SQL Queries

EF Core 8 added a new feature that allows us to query unmapped types with raw SQL.

Suppose we want to retrieve data from a database view, stored procedure, or a table that doesn't directly correspond to any of our entity classes.

For example, we want to retrieve a sales summary for each product.

With EF Core 8, we can define a simple `ProductSummary` class representing the structure of the result set and query it directly:

```cs
public class ProductSummary
{
    public int ProductId { get; set; }
    public string ProductName { get; set; }
    public decimal TotalSales { get; set; }
}

var productSummaries = await context.Database
    .SqlQuery<ProductSummary>(
        @$"""
        SELECT p.ProductId, p.ProductName, SUM(oi.Quantity * oi.UnitPrice) AS TotalSales
        FROM Products p
        JOIN OrderItems oi ON p.ProductId = oi.ProductId
        WHERE p.CategoryId = {categoryId}
        GROUP BY p.ProductId, p.ProductName
        """)
    .ToListAsync();
```

The `SqlQuery` method returns an `IQueryable`, which allows you to compose raw SQL queries with LINQ.

This combines the power of raw SQL with the expressiveness of LINQ.

Remember to use parameterized queries to prevent SQL injection vulnerabilities.

The `SqlQuery` method accepts a `FormattableString`, which means you can safely use an interpolated string.

Each argument is converted to a SQL parameter.

You can learn more about [**raw SQL queries in this article**](/explore/articles/milanjovanovic.tech/ef-core-raw-sql-queries.md).

---

## Query Filters

[**Query filters**](/explore/articles/milanjovanovic.tech/how-to-use-global-query-filters-in-ef-core.md) are like reusable `WHERE` clauses you can apply to your entities.

These filters are automatically added to LINQ queries whenever you retrieve entities of the corresponding type.

This saves you from repeatedly writing the same filtering logic in multiple places within your application.

Query Filters are commonly used for scenarios like:

- [**Soft Deletes**](/explore/articles/milanjovanovic.tech/implementing-soft-delete-with-ef-core.md): Filter out records marked as deleted.
- [**Multi-tenancy**](/explore/articles/milanjovanovic.tech/multi-tenant-applications-with-ef-core.md): Filter data based on the current tenant.
- Row-level security: Restrict access to certain records based on user roles or permissions.

In a multi-tenant application, you often need to filter data based on the current tenant.
Query filters allow us to handle this requirement easily:

```cs
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    // Associate products with tenants
    public int TenantId { get; set; }
}

protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    // The current TenantId is set based on the current request/context
    modelBuilder.Entity<Product>().HasQueryFilter(p => p.TenantId == _currentTenantId);
}

// Now, queries automatically filter based on the tenant:
var productsForCurrentTenant = context.Products.ToList();
```

Configuring multiple query filters on the same entity will only apply the last one.
You can combine multiple query filters using `&&` (AND) and `||` (OR) operators.

You can use `IgnoreQueryFilters` to bypass the filters in specific queries when needed.

---

## Eager Loading

Eager Loading is a feature in EF Core that allows you to load related entities along with your main entity in a single database query.

By fetching all necessary data in a single query, you can improve application performance.

This is especially true when dealing with complex object graphs or when lazy loading would result in many small, inefficient queries.

Here's an example `VerifyEmail` use case.

We want to load an `EmailVerificationToken` and eagerly load a `User` with the `Include` method because we want to modify both entities at the same time.

```cs{6}
internal sealed class VerifyEmail(AppDbContext context)
{
    public async Task<bool> Handle(Guid tokenId)
    {
        EmailVerificationToken? token = await context.EmailVerificationTokens
            .Include(e => e.User)
            .FirstOrDefaultAsync(e => e.Id == tokenId);

        if (token is null || token.ExpiresOnUtc < DateTime.UtcNow || token.User.EmailVerified)
        {
            return false;
        }

        token.User.EmailVerified = true;

        context.EmailVerificationTokens.Remove(token);

        await context.SaveChangesAsync();

        return true;
    }
}
```

EF Core will generate a single SQL query that joins the `EmailVerificationToken` and `User` tables, retrieving all the necessary data in one go.

Eager loading (and query splitting, which we mentioned earlier) isn't a silver bullet.
Consider using projections if you only need specific properties from related entities to avoid fetching unnecessary data.

---

## Summary

So, there you have it!

Five EF Core features that, frankly, you can't afford *not* to know.

Remember, mastering EF Core takes time, but these features provide a solid foundation to build upon.

Another piece of advice is to deeply understand how your database works.

Mastering SQL also allows you to get the most value from EF Core.

While we focused on five key features, there are many other EF Core features worth exploring:

```component VPCard
{
  "title": "Solving Race Conditions With EF Core Optimistic Locking",
  "desc": "How often do you think about concurrency conflicts when writing code? You write the code for a new feature, confirm that it works, and call it a day. But one week later, you find out you introduced a nasty bug because you didn't think about concurrency. The most common issue is race conditions with two competing threads executing the same function. If you don't consider this during development, you introduce the risk of leaving the system in a corrupted state.",
  "link": "/explore/articles/milanjovanovic.tech/solving-race-conditions-with-ef-core-optimistic-locking.md",
  "logo": "https://milanjovanovic.tech/profile_favicon.png",
  "background": "rgba(79,70,229,0,2)"
}
```

```component VPCard
{
  "title": "EF Core Migrations: A Detailed Guide",
  "desc": "In this newsletter, we'll break down the essentials of EF Migrations. We'll explore creating migrations, SQL scripts, applying migrations, migration tooling, and more.",
  "link": "/explore/articles/milanjovanovic.tech/efcore-migrations-a-detailed-guide.md",
  "logo": "https://milanjovanovic.tech/profile_favicon.png",
  "background": "rgba(79,70,229,0,2)"
}
```

```component VPCard
{
  "title": "Unleash EF Core Performance With Compiled Queries",
  "desc": "In this week's newsletter I want to introduce you to an interesting feature in EF Core called Compiled Queries. If you have queries that you execute frequently in your application with a different set of parameters, it can be helpful to explicitly compile the query and reuse it throughout the lifetime of your application. Compiled Queries are more performant than standard EF queries, because they can take advantage of some additional optimizations. Let me show you how to use Compiled Queries, and how much performance improvement to expect.",
  "link": "/explore/articles/milanjovanovic.tech/unleash-ef-core-performance-with-compiled-queries.md",
  "logo": "https://milanjovanovic.tech/profile_favicon.png",
  "background": "rgba(79,70,229,0,2)"
}
```

```component VPCard
{
  "title": "Working With Transactions In EF Core",
  "desc": "Every software engineer working with SQL databases needs to know about transactions. And since most of the time the SQL database will be abstracted by an ORM like EF Core, it's important to understand how you can work with transactions using the available abstractions.",
  "link": "/explore/articles/milanjovanovic.tech/working-with-transactions-in-ef-core.md",
  "logo": "https://milanjovanovic.tech/profile_favicon.png",
  "background": "rgba(79,70,229,0,2)"
}
```

```component VPCard
{
  "title": "How To Use EF Core Interceptors",
  "desc": "EF Core is my favorite ORM for .NET applications. Yet, its many fantastic features sometimes go unnoticed. For example, query splitting, query filters, and interceptors. EF interceptors are interesting because you can do powerful things with them. For example, you can hook into materialization, handle optimistic concurrency errors, or add query hints. The most practical use case is adding behavior when saving changes to the database.",
  "link": "/explore/articles/milanjovanovic.tech/how-to-use-ef-core-interceptors.md",
  "logo": "https://milanjovanovic.tech/profile_favicon.png",
  "background": "rgba(79,70,229,0,2)"
}
```

EF Core is continuously evolving, so keep an eye on the latest updates and releases to stay ahead.

Good luck out there, and see you next week.

---

<TagLinks />