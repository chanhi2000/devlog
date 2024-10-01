---
lang: ko-KR
title: "Mastering Dapper Relationship Mappings"
description: "Article(s) > Mastering Dapper Relationship Mappings"
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
      content: "Article(s) > Mastering Dapper Relationship Mappings"
    - property: og:description
      content: "Mastering Dapper Relationship Mappings"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/mastering-dapper-relationship-mappings.html
prev: /programming/cs/articles/README.md
date: 2023-08-12
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_050.png
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
  name="Mastering Dapper Relationship Mappings"
  desc="Dapper is a lightweight object-relational mapper in .NET. It's popular because it's easy to use and fast at the same time. Dapper extends the IDbConnection interface with methods for sending SQL queries to the database. But, because of the nature of SQL, mapping the result into an object model can be tricky."
  url="https://milanjovanovic.tech/blog/mastering-dapper-relationship-mappings/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_050.png"/>

**Dapper** is a lightweight **object-relational mapper** in .NET. It's popular because it's easy to use and fast at the same time.

Dapper extends the `IDbConnection` interface with methods for sending SQL queries to the database.

But, because of the nature of SQL, mapping the result into an object model can be tricky.

So in this week's newsletter, I'll teach you how to map:

- Simple queries
- One-to-one relationships
- One-to-many relationships
- Many-to-many relationships

Let's dive in!

---

## Simple Mapping

Let's first see how to do a **simple mapping** using Dapper.

Writing a query with Dapper has three parts:

- Creating an `IDbConnection` instance
- Writing the SQL query
- Calling a method that Dapper exposes

We will write a SQL query to load a set of `LineItem` objects for a specific `Order`.

```cs
public class LineItem
{
    public long LineItemId { get; init; }

    public long OrderId { get; init; }

    public decimal Price { get; init; }

    public string Currency { get; init; }

    public decimal Quantity { get; init; }
}
```

Here's the SQL query returning the result we need:

```sql
SELECT Id AS LineItemId, OrderId, Price, Currency, Quantity
FROM LineItems
WHERE OrderId = @OrderId
```

I'm parameterizing the `Order` identifier using the `@OrderId` syntax. This is a Dapper convention. It's important that you use **parameterized queries** to **avoid SQL injection attacks**.

The mapping is straightforward in this case because we are only returning one type from the database.

We call the `QueryAsync` method and specify `LineItem` as the return type. Make sure to pass in the arguments for this method, the SQL query, and the `OrderId` parameter. I prefer creating anonymous objects for Dapper parameters.

```cs
using var connection = new SqlConnection();

var lineItems = await connection.QueryAsync<LineItem>(
    sql,
    new { OrderId = orderId });
```

That's everything you need for a simple mapping.

---

## Dapper One To One Relationship Mapping

What if the object we want to return from the SQL query contains a **nested object**?

Here's an updated `LineItem` type that also contains a `Product` inside.

```cs
public class LineItem
{
    public long LineItemId { get; init; }

    public long OrderId { get; init; }

    public decimal Price { get; init; }

    public string Currency { get; init; }

    public decimal Quantity { get; init; }

    public Product Product { get; init; }
}

public class Product
{
    public long ProductId { get; init; }

    public string Name { get; init; }
}
```

Now you need to return two types in the same query.

Here's the updated SQL query with a join on the `Products` table:

```sql
SELECT li.Id AS LineItemId, li.OrderId, li.Price, li.Currency, li.Quantity,
       p.Id AS ProductId, p.Name
FROM LineItems li
JOIN Products p ON p.Id = li.ProductId
WHERE li.OrderId = @OrderId
```

This query is more complicated because we need to use Dapper's **multi-mapping** feature.

In the `QueryAsync` method, we specify both `LineItem` and `Product` as return types and `LineItem` as the final return type for the method.

We must also tell Dapper how to map the `LineItem` and `Product` from the result set into a single `LineItem` object.

And we need to specify the `splitOn` argument, which tells Dapper where one object ends and the next begins.

```cs
using var connection = new SqlConnection();

var lineItems = await connection.QueryAsync<LineItem, Product, LineItem>(
    sql,
    (lineItem, product) =>
    {
        lineItem.Product = product;

        return lineItem;
    },
    new { OrderId = orderId },
    splitOn: "ProductId");
```

We write more code to make this work, but it should be easy to wrap your head around it.

---

## Dapper One To Many Relationship Mapping

Another frequent situation is mapping a **one-to-many relationship** from SQL into an object model.

Because you are joining two tables, the result set will contain duplicate data on the "one" side of the relationship.

For this example, let's use an `Order` with a list of `LineItem` objects.

```cs
public class Order
{
    public long OrderId { get; init; }

    public List<LineItem> LineItems { get; init; } = new();
}

public class LineItem
{
    public long LineItemId { get; init; }

    public long OrderId { get; init; }

    public decimal Price { get; init; }

    public string Currency { get; init; }

    public decimal Quantity { get; init; }
}
```

Here's the SQL query returning the data we need from the database:

```sql
SELECT o.Id AS OrderId,
       li.Id AS LineItemId, li.OrderId, li.Price, li.Currency, li.Quantity
FROM Orders o
JOIN LineItems li ON li.OrderId = o.Id
WHERE o.Id = @OrderId
```

We're going to get back duplicate `Order` data because of the `JOIN`. But we only want to return one `Order` with all the line items.

The Dapper mapping function only gives us the `Order` and `LineItem` for the current row in the result set.

One way to solve this is to use a `Dictionary` to store the `Order` and reuse it inside the mapping.

- Store the `Order` in the dictionary if it's not there
- If it is there, add the `LineItem` to the existing `Order` instance

```cs
using var connection = new SqlConnection();

var ordersDictionary = new Dictionary<long, Order>();

await connection.QueryAsync<Order, LineItem, Order>(
    sql,
    (order, lineItem) =>
    {
        if (ordersDictionary.TryGetValue(order.OrderId, out var existingOrder))
        {
            order = existingOrder;
        }
        else
        {
            ordersDictionary.Add(order.OrderId, order);
        }

        order.LineItems.Add(lineItem);

        return order;
    },
    new { OrderId = orderId },
    splitOn: "LineItemId");

var mappedOrder = ordersDictionary[orderId];
```

A **many-to-many relationship** would use the same idea, except you'll need two dictionaries for each side of the relationship.

---

## In Summary

**Dapper** is a fantastic library for writing fast database queries using SQL.

Because of how SQL works, mapping into an object model is sometimes complicated.

There are four common scenarios:

- Simple mapping - a flat structure mapped directly from SQL to an object
- One-to-one mapping - provide a mapping function to connect two objects
- One-to-many mapping - manage a dictionary for the "one" side of the relationship
- Many-to-many mapping - same as above, except you need a dictionary for both sides of the relationship

Now you have a cheat sheet for mapping relationships with Dapper.

Hope this was helpful.

I'll see you next week!

---

<TagLinks />