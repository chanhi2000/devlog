---
lang: ko-KR
title: How To Use The New Bulk Update Feature In EF Core 7
description: Article(s) > How To Use The New Bulk Update Feature In EF Core 7
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
      content: Article(s) > How To Use The New Bulk Update Feature In EF Core 7
    - property: og:description
      content: How To Use The New Bulk Update Feature In EF Core 7
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/how-to-use-the-new-bulk-update-feature-in-ef-core-7.html
prev: /programming/cs/articles/README.md
date: 2022-11-26
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_013.png
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
  name="How To Use The New Bulk Update Feature In EF Core 7"
  desc="In this week's newsletter, we're going to explore the new ExecuteUpdate and ExecuteDelete methods that were released with EF7. ExecuteUpdate allows us to write a query and run a bulk update operation on the entities matching that query. Similarly, ExecuteDelete allows us to write a query and delete the entities matching that query. We can significantly improve performance using the new methods in some scenarios, and I'm going to show you what those scenarios are."
  url="https://milanjovanovic.tech/blog/how-to-use-the-new-bulk-update-feature-in-ef-core-7/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_013.png"/>

<!-- TODO: 작성 -->

<!-- 
In this week's newsletter, we're going to explore the new
`ExecuteUpdate` and `ExecuteDelete` methods that were released with **EF7**.

`ExecuteUpdate` allows us to write a query and run a bulk update
operation on the entities matching that query.

Similarly, `ExecuteDelete` allows us to write a query and delete
the entities matching that query.

We can significantly improve performance using the new methods in some scenarios, and I'm going to show you what those scenarios are.

Let's dive in.

---

## updating-and-deleting-entities-before-ef-core-7"><a href="#updating-and-deleting-entities-before-ef-core-7">Updating And Deleting Entities Before EF Core 7

If you want to update a collection of entities before **EF7**,
you need to load the entities into memory using the `DatabaseContext`.

The **EF ChangeTracker** will then track any changes made to these entities.
When you are ready to commit the changes to the database,
you simply call the `SaveChanges` method.

Here's an example where we load a few notifications,
and we want to snooze them so they aren't sent:

```cs
var notifications = dbContext
    .Notifications
    .Where(n => !n.Snoozed)
    .ToList();

foreach(var notification in notifications)
{
    notification.Snoozed = true;
}

dbContext.SaveChanges();

```

**EF7** will generate the following **SQL** statement to update the records in the database:

```sql
UPDATE [Notifications] n
SET n.[Snoozed] = TRUE
WHERE n.[Id] = @notificationId_1;

...

UPDATE [Notifications] n
SET n.[Snoozed] = TRUE
WHERE n.[Id] = @notificationId_N;

```

Notice that for every notification we end up with one **SQL UPDATE** statement.
This won't scale well as the number of notifications increases.

---

## updating-entities-with-executeupdate"><a href="#updating-entities-with-executeupdate">Updating Entities With ExecuteUpdate

With **EF7**, we now have access to the new `ExecuteUdpate` method.
It also has an asynchronous version - `ExecuteUpdateAsync`.

How do you use it?

You need to write a query that will select the records you want to update,
and then call the `ExecuteUpdate` method on the resulting `IQueryable`.

Let's rewrite the previous example using the new approach:

```cs
dbContext
    .Notifications
    .Where(n => !n.Snoozed)
    .ExecuteUpdate(s => s.SetProperty(
        n => n.Snoozed,
        n => true));

```

In the call to `ExecuteUpdate` we call the `SetProperty` method to specify
which properties we want to update, and what values we want to set.
The `SetProperty` method can be called multiple times, if you need to update more than one property.

In this case, **EF7** will generate the following **SQL** query:

```sql
UPDATE n
SET n.[Snoozed] = TRUE
FROM [Notifications] AS n
WHERE n.[Snoozed] = FALSE;

```

Notice that this time we only have one **SQL** query being sent to the database.
This is a major performance improvement. It can be as much as 10x faster
than the old version, from my testing.

---

## deleting-entities-with-executedelete"><a href="#deleting-entities-with-executedelete">Deleting Entities With ExecuteDelete

Let's also see how we can do bulk deletes using the `ExecuteDelete` and `ExecuteDeleteAsync` methods.

Again, you have to write a query that will select the records you want to delete,
and then call the `ExecuteDelete` method on the resulting `IQueryable`.

If you want to delete all snoozed notifications:

```cs
dbContext
    .Notifications
    .Where(n => n.Snoozed)
    .ExecuteDelete();

```

And **EF7** will generate the following **SQL** query:

```sql
DELETE FROM n
FROM [Notifications] AS n
WHERE n.[Snoozed] = TRUE;

```

I think this will be incredibly useful when you want to
delete records in the database based on a specific condition.

---

## transactions-change-tracking-and-query-filters-with-bulk-methods"><a href="#transactions-change-tracking-and-query-filters-with-bulk-methods">Transactions, Change Tracking And Query Filters With Bulk Methods

You need to be aware how transactions and change tracking
work with the new bulk methods. `ExecuteUpdate` and `ExecuteDelete` will
immediately go to database, and run the **SQL** query.

**What does this mean for transactions?**

If you want to run a bulk method together with other updates
applied with `SaveChanges`, by default they won't run in the same transaction.
You need to open an explicit **transaction** using the `DatabaseContext` to keep everything consistent.

**What does this mean for change tracking?**

`ExecuteUpdate` and `ExecuteDelete` run directly on the database, without loading any entities into memory.
**EF7** will not track these entities in the `ChangeTracker`.

If you have any database interceptors defined, they won't execute
after calling one of the bulk update methods.
This also means that if you override `SaveChanges`
to add custom behavior, it won't be called.

**Do Query Filters still work?**

Yes, **query filters** will be **correctly applied** when calling `ExecuteUpdate` or `ExecuteDelete`.

---

## when-should-you-use-the-new-bulk-methods"><a href="#when-should-you-use-the-new-bulk-methods">When Should You Use The New Bulk Methods?

I think this is an excellent new addition to **EF7**,
and it solves a real problem when you need to run
a typical **UPDATE** or **DELETE** query with a
**WHERE** statement applied.

Previously, you had to write raw **SQL** and execute it using something like **Dapper**.

I will likely use this approach when it applies to my projects.

-->

---

<TagLinks />