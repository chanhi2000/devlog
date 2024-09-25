---
lang: ko-KR
title: Modular Monolith Data Isolation
description: Article(s) > Modular Monolith Data Isolation
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
      content: Article(s) > Modular Monolith Data Isolation
    - property: og:description
      content: Modular Monolith Data Isolation
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/modular-monolith-data-isolation.html
prev: /programming/cs/articles/README.md
date: 2023-12-09
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_067.png
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
  name="Modular Monolith Data Isolation"
  desc="Modular monoliths are an architectural approach that's becoming very popular. They combine the benefits of modularity and monolithic design. Data isolation ensures that modules are independent and loosely coupled. Today, I will show you four data isolation approaches for modular monoliths"
  url="https://milanjovanovic.tech/blog/modular-monolith-data-isolation/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_067.png"/>

Modular monoliths are an architectural approach that's becoming very popular. They combine the benefits of modularity and monolithic design.

Modular monoliths try to solve the shortcomings of monolithic and microservice architectures.

One problem I often see with monolithic architectures is tight coupling between components.

This leads to dependencies between different parts of the system.

Modular monoliths enforce better architectural practices with well-defined module boundaries and [**communication patterns.**](/explore/articles/milanjovanovic.tech/modular-monolith-communication-patterns.md)

But one aspect you can't overlook is data isolation between modules.

Data isolation ensures that modules are independent and loosely coupled.

Today, I will show you four data isolation approaches for modular monoliths:

- Separate table
- Separate schema
- Separate database
- Different persistence

---

## Why Is Data Isolation Important?

Let's first understand why data isolation is important in a modular monolith architecture.

A modular monolith has strict rules for data integrity:

- Each module can only access its own tables
- No sharing of tables or objects between modules
- Joins are only allowed between tables of the same module

Modules inside a modular monolith should be self-contained. Each module handles its own data. Other modules can access that data using the module's public API.

What are the benefits of this design?

Keeping modules isolated from each other promotes modularity and loose coupling. It makes it easier to introduce new changes to the system. There are fewer unintended side effects when components are loosely coupled.

If you are using a relational database, you can still maintain referential integrity. Removing the foreign keys when extracting tables is not a problem.

![](https://milanjovanovic.tech/blogs/mnw_067/monolith_components.png?imwidth=3840)

---

## Level 1 - Separate Table

The simplest solution is to have no isolation at the database level. Tables for all modules live inside one database. It's not easy to determine which tables belong to which module.

I'm only mentioning this approach for the sake of completeness.

But this approach works fine up to a particular application size.

However, the more tables you have, the harder it becomes to keep them isolated between modules.

You can improve this by adding logical isolation between tables.

![](https://milanjovanovic.tech/blogs/mnw_067/separate_table.png?imwidth=3840)

---

## Level 2 - Separate Schema

Grouping related tables in the database is a way to introduce logical isolation. You can implement this using database schemas. Each module has a unique schema containing the module's tables.

Now, it becomes easy to distinguish which module contains which tables.

An easy way to implement this is using [**multiple EF Core database contexts.**](/explore/articles/milanjovanovic.tech/using-multiple-ef-core-dbcontext-in-single-application.md)

You can also introduce rules to prevent querying data from other modules. For example, you could implement this using [**architecture tests.**](/explore/articles/milanjovanovic.tech/enforcing-software-architecture-with-architecture-tests.md)

I always start with logical data isolation when building a modular monolith.

But what if this isn't enough?

![](https://milanjovanovic.tech/blogs/mnw_067/separate_schema.png?imwidth=3840)

---

## Level 3 - Separate Database

The next data isolation level is moving each module's data into separate databases.
This approach has more constraints than data isolation using schemas.

This is the way to go if you need strict data isolation rules between modules.
But, the downside is more operational complexity.
You have to manage infrastructure for multiple databases.

However, this is an excellent step toward [**extracting modules.**](/explore/articles/milanjovanovic.tech/monolith-to-microservices-how-a-modular-monolith-helps.md)

First, you move the tables of the module you want to extract into a separate database.
This also forces you to solve any database coupling problems between your modules.
You're ready to extract the module once you move the tables into a separate database.

Can we take the module data isolation further?

![](https://milanjovanovic.tech/blogs/mnw_067/separate_db.png?imwidth=3840)

---

## Level 4 - Different Persistence

Who says you have to use the same database type for all modules?

I work with relational (SQL) databases most of the time. Relational databases are amazing and solve a wide range of problems. But sometimes, a document or graph database is a much better solution.

The idea here is similar: you're doing data isolation using separate databases.

However, you can introduce a different database type to solve specific problems. For example, you can use a relational database for one module. And a graph or column-store database for another module. You also have to maintain different persistence models in your application.

This could be a worthwhile tradeoff for your use case. But it takes careful planning.

![](https://milanjovanovic.tech/blogs/mnw_067/separate_db_type.png?imwidth=3840)

---

## Summary

Modular monoliths are excellent if you don't need microservices right away. You develop your application as a monolith with distinct boundaries inside the system. You still have the flexibility to [**extract modules and move to microservices.**](/explore/articles/milanjovanovic.tech/monolith-to-microservices-how-a-modular-monolith-helps.md) But you have faster development speed with a modular monolith.

Modules have to comply with a few rules. They can only access their own tables. They can't share tables with other modules. And they can't directly query tables of other modules. These rules help to enforce data isolation between modules.

But you still have to implement data isolation at the database level.

There are four options you can choose from:

- Separate table
- Separate schema
- Separate database
- Different persistence

I always go for logical isolation using schemas. It's easy to implement and helps me understand my boundaries better. Depending on the requirements, I can introduce separate databases later.

Hope this was helpful.

See you next week.

---

<TagLinks />