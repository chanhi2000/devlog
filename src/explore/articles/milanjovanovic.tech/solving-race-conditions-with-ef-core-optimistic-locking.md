---
lang: ko-KR
title: "Solving Race Conditions With EF Core Optimistic Locking"
description: "Article(s) > Solving Race Conditions With EF Core Optimistic Locking"
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
      content: "Article(s) > Solving Race Conditions With EF Core Optimistic Locking"
    - property: og:description
      content: "Solving Race Conditions With EF Core Optimistic Locking"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/solving-race-conditions-with-ef-core-optimistic-locking.html
prev: /programming/cs/articles/README.md
date: 2023-09-09
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_054.png
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
  name="Solving Race Conditions With EF Core Optimistic Locking"
  desc="How often do you think about concurrency conflicts when writing code? You write the code for a new feature, confirm that it works, and call it a day. But one week later, you find out you introduced a nasty bug because you didn't think about concurrency. The most common issue is race conditions with two competing threads executing the same function. If you don't consider this during development, you introduce the risk of leaving the system in a corrupted state."
  url="https://milanjovanovic.tech/blog/solving-race-conditions-with-ef-core-optimistic-locking/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_054.png"/>

<!-- TODO: 작성 -->

<!-- 
How often do you think about concurrency conflicts when writing code?

You write the code for a new feature, confirm that it works, and call it a day.

But one week later, you find out you introduced a nasty bug because you didn't think about concurrency.

The most common issue is race conditions with two competing threads executing the same function. If you don't consider this during development, you introduce the risk of leaving the system in a corrupted state.

In this week's newsletter, I'll challenge you to spot the race condition in a method for reserving a booking. The business requirement is you can't have two overlapping reservations for the same dates.

And then, I'll show you how to solve this race condition using EF Core optimistic concurrency.

Let's dive in!

---

## What's Wrong With This Code?

There's a race condition hiding somewhere in this code snippet.

Can you see it?

```cs
public Result<Guid> Handle(
    ReserveBooking command,
    AppDbContext dbContext)
{
    var user = dbContext.Users.GetById(command.UserId);
    var apartment = dbContext.Apartments.GetById(command.ApartmentId);
    var (startDate, endDate) = command;

<span class="code-line highlight-line">    if (dbContext.Bookings.IsOverlapping(apartment, startDate, endDate))
    {
        return Result.Failure<Guid>(BookingErrors.Overlap);
    }

    var booking = Booking.Reserve(apartment, user, startDate, endDate);

    dbContext.Add(booking);

<span class="code-line highlight-line">    dbContext.SaveChanges();

    return booking.Id;
}
```

The call to `IsOverlapping` is an optimistic check to see if there's an existing booking for the specified dates.

```cs
if (dbContext.Bookings.IsOverlapping(apartment, startDate, endDate)) { }
```

If it returns `true`, we're trying to double-book the apartment. So we return a failure, and the method completes.

But if it returns `false`, we reserve a booking and call `SaveChanges` to persist the changes in the database.

And there lies the problem.

There's a chance for a concurrent request to pass the `IsOverlapping` check and attempt to reserve the booking. Without any concurrency control, both requests will succeed, and we will end up with an inconsistent state in the database.

So how can we solve this?

---

## Optimistic Concurrency With EF Core

The pessimistic concurrency approach acquires a lock for the data before modifying it. It's slower and causes competing transactions to be blocked until the lock is released. EF Core doesn't support this approach out of the box.

You can also solve this problem using optimistic concurrency with EF Core. It doesn't take any locks, but any data modifications will fail to save if the data has changed since it was queried.

To implement optimistic concurrency in EF Core, you need to configure a property as a *concurrency token*. It's loaded and tracked with the entity. When you call `SaveChanges`, EF Core will compare the value of the concurrency token to the value in the database.

Let's assume we're using SQL Server, which has a native <a href="https://learn.microsoft.com/en-us/sql/t-sql/data-types/rowversion-transact-sql?view=sql-server-ver16">`rowversion`</a> column. The `rowversion` automatically changes when the row is updated, so it's a great option for a concurrency token.

To configure a `byte[]` property as a concurrency token you can decorate it with the `Timestamp` attribute. It will be mapped to a `rowversion` column in SQL Server.

```cs
public class Apartment
{
    public Guid Id { get; set; }

<span class="code-line highlight-line">    [Timestamp]
    public byte[] Version { get; set; }
}
```

I prefer a different approach because attributes pollute the entity.

You can do the same with the Fluent API. I will even use a shadow property to hide the concurrency token from the entity class.

```cs
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Apartment>()
<span class="code-line highlight-line">        .Property<byte[]>("Version")
<span class="code-line highlight-line">        .IsRowVersion();
}
```

The exact configuration will differ based on the database you are using, so check the documentation.

---

## How Optimistic Concurrency Works In Practice

So here's what changes when we configure the concurrency token.

When loading the `Apartment` entity, EF will also load the concurrency token.

```sql
SELECT a.Id, a.Version
FROM Apartments a
WHERE a.Id = @p0
```

And when we call `SaveChanges`, the update statement will compare the concurrency token value with the one in the database:

```sql
UPDATE Apartments a
SET a.LastBookedOnUtc = @p0
WHERE a.Id = @p1 AND a.Version = @p2;

```

If the `rowversion` in the database changes, the number of updated rows will be `0`.

EF Core expects to update `1` row, so it will throw a `DbUpdateConcurrencyException`, which you need to handle.

---

## Handling Concurrency Exceptions

Now that you know how to use optimistic concurrency with EF Core, you can fix the previous code snippet.

If two concurrent requests pass the `IsOverlapping` check, only one can complete the `SaveChanges` call. The other concurrent request will run into a `Version` mismatch in the database and throw a `DbUpdateConcurrencyException`.

In case of a concurrency conflict, we need to add a `try-catch` statement to catch the `DbUpdateConcurrencyException`. How you handle the actual exception depends on your business requirements. And sometimes, <a href="https://go.particular.net/milanjovanovic/raceconditions">race conditions</a> might not even exist.

```cs
public Result<Guid> Handle(
    ReserveBooking command,
    AppDbContext dbContext)
{
    var user = dbContext.Users.GetById(command.UserId);
    var apartment = dbContext.Apartments.GetById(command.ApartmentId);
    var (startDate, endDate) = command;

    if (dbContext.Bookings.IsOverlapping(apartment, startDate, endDate))
    {
        return Result.Failure<Guid>(BookingErrors.Overlap);
    }

    try
    {
        var booking = Booking.Reserve(apartment, user, startDate, endDate);

        dbContext.Add(booking);

        dbContext.SaveChanges();

        return booking.Id;
    }
<span class="code-line highlight-line">    catch (DbUpdateConcurrencyException)
    {
        return Result.Failure<Guid>(BookingErrors.Overlap);
    }
}
```

---

## When Should You Use Optimistic Concurrency?

Optimistic concurrency considers the best scenario is also the most probable one. It assumes conflicts between transactions will be infrequent and doesn't acquire locks on the data. This means your system can scale better because there is no blocking slowing down performance.

However, you must still expect concurrency conflicts and implement custom logic to handle them.

Optimistic concurrency is a good choice if your application doesn't expect many conflicts.

Another reason to use optimistic concurrency is when you can't hold an open connection to the database for the length of the transaction. This is required for pessimistic locking.

Hope this was helpful.

I'll see you next week!

-->

---

<TagLinks />