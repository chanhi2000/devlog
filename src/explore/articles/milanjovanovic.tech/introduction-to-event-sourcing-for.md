---
lang: ko-KR
title: Introduction to Event Sourcing for .NET Developers
description: Article(s) > Introduction to Event Sourcing for .NET Developers
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
      content: Article(s) > Introduction to Event Sourcing for .NET Developers
    - property: og:description
      content: Introduction to Event Sourcing for .NET Developers
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/introduction-to-event-sourcing-for-net-developers.html
prev: /programming/cs/articles/README.md
date: 2024-08-31
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_105.png
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
  name="Introduction to Event Sourcing for .NET Developers"
  desc="Discover event sourcing in .NET through a beginner's eyes. Explore core concepts, benefits, and real-world challenges."
  url="https://milanjovanovic.tech/blog/introduction-to-event-sourcing-for-net-developers/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_105.png"/>

<!-- TODO: 작성 -->

<!-- 
I've been coding in .NET for years, but I never built an event sourced system.
Event sourcing has always intrigued me, though.
The idea of capturing every change and having a complete history of your data - it's fascinating.

So, I decided to dive in.
Not as an expert but as a curious developer.

In this newsletter, I'm sharing my journey into event sourcing.

- What is it really?
- Why does it matter?
- And how might it change the way we think about our .NET apps?

We'll look at the core concepts of event sourcing, potential benefits, and even some practical examples.

---

## What is Event Sourcing?

> Event Sourcing is an architectural design pattern where changes that occur in a domain are immutably stored as events in an append-only log.

*— <a href="https://eventstore.com/event-sourcing" target="_blank">Event Store</a>*

When I first encountered event sourcing, it seemed complex.
But stripped down, it's a surprisingly simple idea: store changes, not just the current state.

Think of a bank account or wallet.
Normally, we'd just save the balance.
With event sourcing, we record every deposit and withdrawal.
The balance is then calculated from these events.

This diagram illustrates the difference:

![Event sourcing comparison to traditional data storage.](https://milanjovanovic.tech/blogs/mnw_105/event_sourcing.png?imwidth=3840)

This shift from storing state to storing events is the essence of event sourcing.
It's like keeping a detailed diary of your application's data rather than just a snapshot.
It's not just about where you are but how you got there.
For me, this was a lightbulb moment.

---

## Why Use Event Sourcing?

As I dug deeper into event sourcing, I kept asking myself: "Why would I use this instead of traditional data storage?"

Here's what I've discovered:

- **Full Audit Trail**: Every change is recorded. This is huge for businesses dealing with sensitive data or financial transactions. Imagine being able to trace every step of an order's journey or every modification to a user's account.
- **Debugging Time Machine**: With event sourcing, you can reconstruct the state of your application at any point in time. As a developer, this feels like a superpower. Tracking down bugs becomes less about guesswork and more about replay.
- **Business Insights**: All those stored events? They're a goldmine of data. You can analyze patterns, user behavior, or system performance in ways that might be impossible with just current-state data.
- **Flexibility**: Need to add a new feature that requires historical data? With event sourcing, it's already there. This flexibility could have saved me from many "I wish we had kept that information" moments.

Real-world use cases for event sourcing started to make sense:

- E-commerce platforms leveraging it for order tracking and inventory management.
- Financial systems use it for accurate transaction histories.
- oT applications use it to analyze sensor data over time.

While it's not a silver bullet (what is in programming?), I'm beginning to see why so many developers are excited about event sourcing.
It's not just about storing data; it's about intent and behavior.

---

## Core Concepts And Practical Examples

As I started to implement event sourcing, understanding the core concepts became much easier with a concrete example.
Let's walk through a simple bank account scenario to see how event sourcing works.

### events"><a href="#events">Events

Events are immutable records of something that happened.
In our bank account example, we might have events like `AccountOpened`, `MoneyDeposited`, and `MoneyWithdrawn`.

Here's how we might define these in C#:

```cs
public record AccountOpened(Guid AccountId, DateTime OpenedAt);
public record MoneyDeposited(decimal Amount, DateTime DepositedAt);
public record MoneyWithdrawn(decimal Amount, DateTime WithdrawnAt);
```

<a href="records-anonymous-types-non-destructive-mutation">**Records**</a> are a perfect fit for events, as they are immutable by design.

### State

In event sourcing, the current state is calculated by applying all events in order.

Here's how our `Account` class looks:

```cs
public class Account
{
    public Guid Id { get; private set; }
    public decimal Balance { get; private set; }

    private List<object> _events = new List<object>();

    public Account(Guid id)
    {
        ApplyEvent(new AccountCreated(id));
    }

    public void Deposit(decimal amount)
    {
        ApplyEvent(new MoneyDeposited(amount));
    }

    public void Withdraw(decimal amount)
    {
        if (Balance >= amount)
        {
            ApplyEvent(new MoneyWithdrawn(amount));
        }
        else
        {
            throw new InvalidOperationException("Insufficient funds");
        }
    }

    private void ApplyEvent(object @event)
    {
        _events.Add(@event);

        switch (@event)
        {
            case AccountCreated e:
                Id = e.AccountId;
                Balance = 0;
                break;
            case MoneyDeposited e:
                Balance += e.Amount;
                break;
            case MoneyWithdrawn e:
                Balance -= e.Amount;
                break;
        }
    }
}
```

Notice how the `Account` class maintains its state. Each method (`Deposit`, `Withdraw`) doesn't directly modify the balance. Instead, it creates and applies an event. The `ApplyEvent` method then updates the state based on these events.

### Event Store

In our simple example, we're using a list (`_events`) to store events.
In a real system, we would persist these events in a database.
The key principle remains: events are appended, never modified.

For production systems, there are specialized event sourcing databases like <a href="https://eventstore.com/" target="_blank">EventStoreDB</a>.

There's also <a href="fast-document-database-in-net-with-marten">**Marten**</a>, a .NET library that adds document database and event sourcing capabilities to PostgreSQL.

---

## Putting It All Together

Here's how we might use our event sourced `Account`:

- An action (like depositing money) triggers the creation of an event.
- The event is stored in the event store (in our simple example, it's just added to the `_events` list).
- The event is applied to update the current state of the `Account`.
- We can rebuild the state by replaying all events in order when needed.

```cs
var account = new Account(Guid.NewGuid());
account.Deposit(100);
account.Withdraw(30);
account.Deposit(50);

Console.WriteLine($"Final balance: {account.Balance}"); // Output: Final balance: 120
```

We'd store these events in a database in a real event sourcing system.
This allows us to replay the events on demand to produce the current state.

---

## Challenges and Considerations

Since I started researching event sourcing, I've seen its potential and its hurdles.

Event sourcing itself is a simple idea.
However, the underlying complexity of this approach concerns me.
There's a significant learning curve from event sourcing basics to *applying event sourcing in production*.

It's not just about storing data differently.
It's a fundamental shift in how you model and think about your domain.
This complexity extends to the infrastructure level.
The .NET ecosystem isn't as mature when it comes to event sourcing tools and patterns.

Performance is another consideration that's often overlooked.
While appending events is typically fast, reconstructing the current state from a long history of events can be slow.
Real-world systems often need to implement caching strategies or snapshots to mitigate this.
Event sourcing is also eventually consistent on the read side.

One of the trickiest aspects I've encountered is event schema evolution (event versioning).
As your system grows and changes, so will your events.
Managing these changes without breaking existing event streams is a challenge that requires careful planning and design.
I'm still researching best practices.

---

## In Summary

Event sourcing has a steep learning curve, even for an experienced developer.
It requires a fundamental shift in how you think about data and system design.

If you want to give it a try, start small.
Implement a simple event-sourced system in a side project.
It's the best way to grapple with the concepts hands-on.
As you do, you might find that Domain-Driven Design (DDD) principles align well with event sourcing.

Remember, the goal isn't to use event sourcing everywhere but to understand where it can add value.

If you're ready to explore this topic further, check out <a href="/modular-monolith-architecture">**Modular Monolith Architecture**</a>.
There's an entire chapter on Event-Driven Architecture, which directly complements what you've learned about event sourcing here.

In a future newsletter, we'll explore a more real-world application of event sourcing.

Good luck out there, and I'll see you next week.

-->

---

<TagLinks />