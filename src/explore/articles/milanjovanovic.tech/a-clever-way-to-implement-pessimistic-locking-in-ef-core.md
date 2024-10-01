---
lang: ko-KR
title: A Clever Way To Implement Pessimistic Locking in EF Core
description: Article(s) > A Clever Way To Implement Pessimistic Locking in EF Core
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
      content: Article(s) > A Clever Way To Implement Pessimistic Locking in EF Core
    - property: og:description
      content: A Clever Way To Implement Pessimistic Locking in EF Core
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/a-clever-way-to-implement-pessimistic-locking-in-ef-core.html
prev: /programming/cs/articles/README.md
date: 2024-04-13
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_085.png
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
  name="A Clever Way To Implement Pessimistic Locking in EF Core"
  desc="Sometimes, especially in high-traffic scenarios, you absolutely need to ensure that only one process can modify a piece of data at a time. Entity Framework Core is a fantastic tool, but it doesn't have a direct mechanism for pessimistic locking. In this article, I'll show you how we can solve that problem with raw SQL queries."
  url="https://milanjovanovic.tech/blog/a-clever-way-to-implement-pessimistic-locking-in-ef-core/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_085.png"/>

Sometimes, especially in high-traffic scenarios, you absolutely need to ensure that only one process can modify a piece of data at a time.

Imagine you're building the ticket sales system for a wildly popular concert.
Customers are eagerly grabbing tickets, and the last few could sell out simultaneously.
If you're not careful, multiple customers might think they've secured the final seat, leading to overbooking and disappointment!

Entity Framework Core is a fantastic tool, but it doesn't have a direct mechanism for pessimistic locking.
[Optimistic locking](/explore/articles/milanjovanovic.tech/solving-race-conditions-with-ef-core-optimistic-locking.md) (using versions) can work, but in high-contention scenarios, it can lead to a lot of retries.

So, how can we solve this problem with EF Core?

---

## The Scenario in More Detail

Here's a simplified code snippet to illustrate our ticketing challenge:

```cs
public async Task Handle(CreateOrderCommand request)
{
    await using DbTransaction transaction = await unitOfWork
        .BeginTransactionAsync();

    Customer customer = await customerRepository.GetAsync(request.CustomerId);

    Order order = Order.Create(customer);
    Cart cart = await cartService.GetAsync(customer.Id);

    foreach (CartItem cartItem in cart.Items)
    {
        // Uh-oh... what if two requests hit this at the same time?
        TicketType ticketType = await ticketTypeRepository.GetAsync(
            cartItem.TicketTypeId);

        ticketType.UpdateQuantity(cartItem.Quantity);

        order.AddItem(ticketType, cartItem.Quantity, cartItem.Price);
    }

    orderRepository.Insert(order);

    await unitOfWork.SaveChangesAsync();

    await transaction.CommitAsync();

    await cartService.ClearAsync(customer.Id);
}
```

The example above is contrived, but it should be enough to explain the problem. During checkout, we verify the `AvailableQuantity` for each ticket.

What will happen if we get concurrent requests trying to purchase the same ticket?

The worst-case scenario is we end up "overselling" the tickets. Concurrent requests could see available tickets for sale and complete the checkout.

So, how do we solve this?

---

## Raw SQL to the Rescue!

Since EF Core doesn't offer pessimistic locking directly, we'll dip into a bit of good old-fashioned SQL. We will replace the `GetAsync` call to fetch the ticket with `GetWithLockAsync`.

Thankfully, EF Core makes this easy with [raw SQL queries](/explore/articles/milanjovanovic.tech/ef-core-raw-sql-queries.md):

```cs{10}
public async Task<TicketType> GetWithLockAsync(Guid id)
{
    return await context
        .TicketTypes
        .FromSql(
            $@"
            SELECT id, event_id, name, price, currency, quantity
            FROM ticketing.ticket_types
            WHERE id = {id}
            FOR UPDATE NOWAIT") // PostgreSQL: Lock or fail immediately
        .SingleAsync();
}
```

Understanding the magic:

- `FOR UPDATE NOWAIT`: This is the heart of pessimistic locking in PostgreSQL. It tells the database "Grab this row, lock it for me, and if it's already locked, raise an error right now."
- **Error Handling**: We'd wrap our `GetWithLockAsync` call in a `try-catch` block to gracefully handle locking failures, either retrying or notifying the user.

Since there isn't a built-in way in EF Core to add query hints, we have to write raw SQL queries. We can use the PostgreSQL `SELECT FOR UPDATE` statement to acquire a row-level lock on the selected rows. Any competing transactions will be blocked until the current transaction releases the lock. This is a very simple way to implement pessimistic locking.

---

## Flavors of Locking and When to Use Them

To prevent the operation from waiting for other transactions to release any locked rows, you can combine `FOR UPDATE` with:

- `NO WAIT` - Reports an error if the row can't be locked instead of waiting.
- `SKIP LOCKED` - Skips any selected rows that cannot be locked.

Skipping locked rows comes with a caveat - you will get inconsistent results from the database. However, this can be useful to avoid lock contention when multiple consumers access a queue-like table. Implementing the [Outbox pattern](/explore/articles/milanjovanovic.tech/outbox-pattern-for-reliable-microservices-messaging.md) is a great example of this.

**SQL Server**: You'd use the `WITH (UPDLOCK, READPAST)` query hint for a similar effect.

---

## Pessimistic Locking vs. Serializable Transactions

**Serializable** transactions offer the highest level of data consistency. They guarantee that all transactions are executed as if they happened in a strict, sequential order, even if they occur simultaneously. This eliminates the possibility of anomalies like dirty reads (seeing uncommitted data) or non-repeatable reads (data changing between reads).

Here's how it works:

- When a transaction starts under the Serializable isolation level, the database locks all the data the transaction might access.
- These locks are held until the entire transaction is committed or rolled back.
- Any other transaction attempting to access the locked data will be blocked until the first transaction releases its locks.

While Serializable transactions provide the ultimate isolation, they come with a significant cost:

- **Performance Overhead**: Locking a large chunk of data can severely impact performance,
especially in high-concurrency scenarios.
- **Deadlocks**: With so much locking happening, there's a higher risk of deadlocks.
These occur when two or more transactions are waiting for locks held by each other, creating a stalemate.

Pessimistic locking with `SELECT FOR UPDATE` offers a more targeted approach to data isolation. You explicitly lock the specific rows you need to modify. Other transactions attempting to access the locked rows are blocked until the lock is released.

By locking only the necessary data, pessimistic locking avoids the performance overhead associated with locking everything. Since you're locking fewer resources, the chances of deadlocks are lower.

---

## When to Use Each Approach

The best approach depends on your specific needs:

- **Serializable Transactions**: Ideal for scenarios involving highly sensitive data where even the slightest inconsistency is unacceptable. Examples include financial transactions and medical record updates.
- **Pessimistic Locking**: A great choice for most use cases, especially in high-traffic applications. It provides strong consistency while maintaining good performance and reducing deadlock risks.

---

## Takeaway

I hope this exploration of pessimistic locking has been helpful. It's a powerful tool to have in your arsenal if you have scenarios where absolute data consistency is paramount.

Both **Serializable transactions** and pessimistic locking with `SELECT FOR UPDATE` are excellent options for ensuring data consistency. Consider the level of isolation required, potential performance impact, and the likelihood of deadlocks when making your choice.

That's all for today. Stay awesome, and I'll see you next week.

---

<TagLinks />