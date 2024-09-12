---
lang: ko-KR
title: "EF Core Raw SQL Queries"
description: "Article(s) > EF Core Raw SQL Queries"
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
      content: "Article(s) > EF Core Raw SQL Queries"
    - property: og:description
      content: "EF Core Raw SQL Queries"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/ef-core-raw-sql-queries.html
prev: /programming/cs/articles/README.md
date: 2023-04-15
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_033.png
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
  name="EF Core Raw SQL Queries"
  desc="EF Core is getting many new and exciting features in the upcoming version. EF7 introduced support for returning scalar types using SQL queries. And now we're getting support for querying unmapped types with raw SQL queries in EF8. This is exactly what Dapper offers out of the box, and it's good to see EF Core catching up."
  url="https://milanjovanovic.tech/blog/ef-core-raw-sql-queries/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_033.png"/>

<!-- TODO: 작성 -->

<!-- 
**EF Core** is getting many new and exciting features in the upcoming version.

**EF7** introduced support for returning **scalar types** using **SQL** queries.

And now we're getting support for **querying unmapped types** with **raw SQL queries** in **EF8.**

This is exactly what **Dapper** offers out of the box, and it's good to see **EF Core** catching up.

In this week's newsletter, I'm going to cover how to use **EF Core** for:

- <a href="#ef-core-and-sql-queries">Raw SQL queries</a>
<li><a href="#composing-sql-queries-with-linq">Composing SQL queries with LINQ</a>
<li><a href="#sql-queries-for-data-modifications">Executing data modifications with SQL</a>

Let's dive in!

---

## ef-core-and-sql-queries"><a href="#ef-core-and-sql-queries">EF Core And SQL Queries

**EF7** added support for **raw SQL queries** returning scalar types.
**EF8** is taking this a step further with raw SQL queries that can return any mappable type, without having to include it in the **EF model**.

You can query unmapped types with the `SqlQuery` and `SqlQueryRaw` methods.

The `SqlQuery` method uses string interpolation to parameterize the query, protecting against SQL injection attacks.

Here's an example query returning an `OrderSummary` list:

```cs
var startDate = new DateOnly(2023, 1, 1);

var ordersIn2023 = await dbContext
    .Database
    .SqlQuery<OrderSummary>(
        $"SELECT * FROM OrderSummaries AS o WHERE o.CreatedOn >= {startDate}")
    .ToListAsync();

```

This will be the **SQL** sent to the database:

```sql
SELECT * FROM OrderSummaries AS o WHERE o.CreatedOn >= @p0

```

The type used for the query result can have a parameterized constructor.
The property names don't need to match the column names in the database, but they do have to match the names of the values in the result set.

You can also execute raw SQL queries and return results with:

- Views
<li>Functions
<li>Stored procedures

---

## composing-sql-queries-with-linq"><a href="#composing-sql-queries-with-linq">Composing SQL Queries With LINQ

An interesting thing about `SqlQuery` is that it returns `IQueryable`, which can be further composed with **LINQ.**

You can add a `Where` statement after calling `SqlQuery`:

```cs
var startDate = new DateOnly(2023, 1, 1);

var ordersIn2023 = await dbContext
    .Database
    .SqlQuery<OrderSummary>("SELECT * FROM OrderSummaries AS o")
    .Where(o => o.CreatedOn >= startDate)
    .ToListAsync();

```

However, the generated **SQL** isn't optimal:

```sql
SELECT s.Id, s.CustomerId, s.TotalPrice, s.CreatedOn
FROM (
    SELECT * FROM OrderSummaries AS o
) AS s
WHERE s.CreatedOn >= @p0

```

Another possibility is to combine an `OrderBy` statement with `Skip` and `Take`:

```cs
var startDate = new DateOnly(2023, 1, 1);

var ordersIn2023 = await dbContext
    .Database
    .SqlQuery<OrderSummary>(
        $"SELECT * FROM OrderSummaries AS o WHERE o.CreatedOn >= {startDate}")
    .OrderBy(o => o.Id)
    .Skip(10)
    .Take(5)
    .ToListAsync();

```

This would be the generated **SQL** for the previous query:

```sql
SELECT s.Id, s.CustomerId, s.TotalPrice, s.CreatedOn
FROM (
    SELECT * FROM OrderSummaries AS o WHERE o.CreatedOn >= @p0
) AS s
ORDER BY s.Id
OFFSET @p1 ROWS FETCH NEXT @p2 ROWS ONLY

```

In case you're wondering, the performance is similar to **LINQ** queries using `Select` projections.

I ran some benchmarks, and didn't notice any significant performance improvement.

This feature will be very useful if you're more comfortable with writing **SQL** or you want to fetch data from views, functions, and stored procedures.

---

## sql-queries-for-data-modifications"><a href="#sql-queries-for-data-modifications">SQL Queries For Data Modifications

If you want to modify data in the database with **SQL**, you will typically write a query that doesn't return a result.

The SQL query can be an `UPDATE` or `DELETE` statement, or even a stored procedure call.

You can use the `ExecuteSql` method to execute this type of query with **EF Core**:

```cs
var startDate = new DateOnly(2023, 1, 1);

dbContext.Database.ExecuteSql(
    $"UPDATE Orders SET Status = 5 WHERE CreatedOn >= {startDate}");

```

`ExecuteSql` also protects from SQL injection by parameterizing arguments, just like `SqlQuery`.

With **EF7** you can write the above query with **LINQ** and the `ExecuteUpdate` method.
There's also the `ExecuteDelete` method for deleting records.

---

## in-summary"><a href="#in-summary">In Summary

**EF7** introduced support for raw SQL queries returning **scalar** values.

**EF8** will add support for **raw SQL queries** returning **unmapped types** with `SqlQuery` and `SqlQueryRaw`.

I like the direction that **EF** is going, introducing more flexibility for querying the database.

The performance isn't as good as **Dapper**, unfortunately.
But it's close enough that network costs will play the bigger factor.

I will probably be using only **EF** moving forward since it covers more use cases.

Thank you for reading, and have an awesome Saturday.

-->

---

<TagLinks />