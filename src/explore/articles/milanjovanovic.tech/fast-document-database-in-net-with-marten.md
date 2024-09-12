---
lang: ko-KR
title: Fast Document Database In .NET With Marten
description: Article(s) > Fast Document Database In .NET With Marten
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
      content: Article(s) > Fast Document Database In .NET With Marten
    - property: og:description
      content: Fast Document Database In .NET With Marten
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/fast-document-database-in-net-with-marten.html
prev: /programming/cs/articles/README.md
date: 2022-12-17
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_016.png
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
  name="Fast Document Database In .NET With Marten"
  desc="Did you know you can turn PostgreSQL into a fully-fledged Document database? Marten is a .NET library that allows developers to use the PostgreSQL database as both a document database and a fully-featured event store. You don't need to install anything else to be able to use PostgreSQL as a document database, outside of the Nuget pacakge. Marten relies on the JSONB support available since PostgreSQL 9.4. In this week's newsletter, I want to introduce you to the basics of working with Marten and show you how easy it is to get started."
  url="https://milanjovanovic.tech/blog/fast-document-database-in-net-with-marten/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_016.png"/>

<!-- TODO: 작성 -->

<!-- 
Did you know you can turn **PostgreSQL** into a fully-fledged **Document database**?

**Marten** is a **.NET** library that allows developers to use the **PostgreSQL**
database as both a **document database** and a fully-featured **event store**.

You don't need to install anything else to be able to use **PostgreSQL**
as a **document database**, outside of the Nuget package. **Marten** relies
on the **JSONB** support available since **PostgreSQL** 9.4.

In this week's newsletter, I want to introduce you to the basics of working
with **Marten** and show you how easy it is to get started.

Let's dive in.

---

## installing-and-configuring-marten"><a href="#installing-and-configuring-marten">Installing And Configuring Marten

What are you going to need to start using **PostgreSQL** as a **Document datbase**?

Other than a running instance of **PostgreSQL**, of course, you will need
to install the **Marten** Nuget package:

```cs
dotnet add package Marten

```

**Marten** can build the required database schema and necessary tables on the fly,
and I suggest using this approach in development.
For a production environment, you definitely want to apply schema
changes on your own with migration scripts.

To register **Marten** with dependency injection, you need to call the `AddMarten`
method.

Here's an example **Marten** configuration inside of a **.NET 7** application:

```cs
builder.Services.AddMarten(options =>
{
    options.Connection(builder.Configuration.GetConnectionString("Marten"));
});

```

This will register a few services with dependency injection:

- `IDocumentStore` - used to create sessions, generate schema migrations, and do bulk inserts
<li>`IDocumentSession` - used for read and write operations
<li>`IQuerySession` - used for read operations

Let's see how we can work with documents using **Marten**.

---

## storing-documents-with-marten"><a href="#storing-documents-with-marten">Storing Documents With Marten

Storing documents in the database is very straightforward. You need to create
a new `DocumentStore` instance, and open an `IDocumentSession` which exposes
methods for storing and persisting documents.

Let's see how we can store a `Product` document:

```cs
var store = DocumentStore.For("Connection string to PostgreSQL");

using var session = store.OpenSession();

var product = new Product
{
    Name = "C# 11 and .NET 7 - Modern Cross-Platform Fundamentals",
    Price = 46.87
};

session.Store(product);

await session.SaveChangesAsync();

```

We're creating a new `DocumentStore` instance which we use to open
a session to **PostgreSQL**. And then we just call `Store` and pass in
the `Product` instance. Note that **Marten** will populate the
`Product.Id` at this point. **Marten** can populate keys of `Guid`,
`int`, `long`, and other data types. It uses the HiLo algorithm
for numeric keys. Finally, when we call `SaveChangesAsync` the
`Product` is serialized into **JSON** and persisted as a document.

An important thing to be aware of is that the `IDocumentSession`
created by `OpenSession` doesn't track changes on the entities automatically.
You need to create a session with dirty checking enabled by
calling `DirtyTrackedSession` on the `DocumentStore` to enable
automatic change detection.

---

## querying-documents-with-marten"><a href="#querying-documents-with-marten">Querying Documents With Marten

**Marten** has rich support for querying documents in the database.
You can write and execute queries using **LINQ**, which you are
familiar with if you worked with **EF Core**. And you can also
write and execute **SQL** queries, because it's still a **PostgreSQL**
database underneath.

Here's an example query to return products that have a higher price
than the one which is specified:

```cs
var store = DocumentStore.For("Connection string to PostgreSQL");

using var session = store.QuerySession();

var products = session.Query<Product>().Where(p => p.Price > 9.99).ToList();

```

**Marten** also has support for:

- Including related documents
<li>Batched queries
<li>Paging
<li>Full text search

---

## advanced-options-with-marten"><a href="#advanced-options-with-marten">Advanced Options With Marten

**Marten** can utilize the full capabilities **PostgreSQL** has to offer,
notably transactions and indexing. **Marten** sessions are transactional
by default, either all of the documents are persisted together or
none of them are. And you can configure indexes on your documents
for faster queries.

**Marten** isn't just a **document database** on top of **PostgreSQL**!

You have fully-fledged support for **event sourcing** with **Marten**,
as well as projections. This makes it a perfect choice for
implementing **CQRS**. But this is a topic for a separate newsletter.

---

## closing-thoughts"><a href="#closing-thoughts">Closing Thoughts

I'm absolutely amazed with <a href="https://martendb.io/">Marten</a> and what it has to offer.
And **PostgreSQL** is also my favorite database, so it's like a match
made in heaven. I don't get too excited about learning new
technologies, but **Marten** has been an endless source
of joy this past week.

I still need to explore a few more topics before I can consider it
for production use:

- Schema migrations
<li>Relationships and foreign keys
<li>Advanced configuration options

Considering that **PostgreSQL** is cheaper than most **document databases**,
I think using **Marten** is an interesting alternative. And if you are
familiar with **SQL** databases, you can still use all of that knowledge.

-->

---

<TagLinks />