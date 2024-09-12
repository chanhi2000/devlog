---
lang: ko-KR
title: "How To Use Domain Events To Build Loosely Coupled Systems"
description: "Article(s) > How To Use Domain Events To Build Loosely Coupled Systems"
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
      content: "Article(s) > How To Use Domain Events To Build Loosely Coupled Systems"
    - property: og:description
      content: "How To Use Domain Events To Build Loosely Coupled Systems"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/how-to-use-domain-events-to-build-loosely-coupled-systems.html
prev: /programming/cs/articles/README.md
date: 2023-07-22
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_047.png
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
  name="How To Use Domain Events To Build Loosely Coupled Systems"
  desc="In software engineering, coupling means how much different parts of a software system depend on each other. If they are tightly coupled, changes to one part can affect many others. But if they are loosely coupled, changes to one part won't cause big problems in the rest of the system. Domain events are a Domain-Driven Design (DDD) tactical pattern that we can use to build loosely coupled systems. You can raise a domain event from the domain, which represents a fact that has occurred. And other components in the system can subscribe subscribe to this event, and handle it accordingly."
  url="https://milanjovanovic.tech/blog/how-to-use-domain-events-to-build-loosely-coupled-systems/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_047.png"/>

<!-- TODO: 작성 -->

<!-- 
In software engineering, "coupling" means how much different parts of a software system depend on each other.
If they are **tightly coupled**, changes to one part can affect many others.
But if they are **loosely coupled**, changes to one part won't cause big problems in the rest of the system.

**Domain events** are a **Domain-Driven Design (DDD)** tactical pattern that we can use to build **loosely coupled** systems.

You can raise a **domain event** from the domain, which represents a fact that has occurred.
And other components in the system can subscribe to this event and handle it accordingly.

Here's what you will learn in this week's newsletter:

- What are <a href="#what-are-domain-events">domain events</a>
<li>How they're <a href="#domain-events-versus-integration-events">different from integration events</a>
<li>How to <a href="#implementing-domain-events">implement</a> & <a href="#raising-domain-events">raise domain events</a>
<li>How to <a href="#how-to-publish-domain-events-with-ef-core">publish domain events</a> with EF Core
<li>How to <a href="#how-to-handle-domain-events">handle domain events</a> with MediatR

We have a lot to cover, so let's dive in!

---

## what-are-domain-events"><a href="#what-are-domain-events">What Are Domain Events?

An **event** is something that has happened in the past.

It is a fact.

Unchangeable.

A **domain event** is something that happened in the domain, and other parts of the domain should be aware of it.

**Domain events** allow you to express side effects explicitly, and provide a better separation of concerns in the domain.
They're an ideal way to trigger side effects across multiple aggregates inside the domain.

It's your responsibility to ensure that publishing a **domain event** is transactional.
You'll see why this is easier said than done.

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%272704%27%20height=%271515%27/%3e"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img srcSet="/blogs/mnw_047/domain_events.png?imwidth=3840 1x" src="/blogs/mnw_047/domain_events.png?imwidth=3840" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>
---

## domain-events-versus-integration-events"><a href="#domain-events-versus-integration-events">Domain Events Versus Integration Events

You may have heard of **integration events**, and you're now wondering what's the difference between them and **domain events**.

Semantically, they're the same thing: a representation of something that occurred in the past.

However, their **intent is different** and this is important to understand.

Domain events:

- Published and consumed within a single domain
<li>Sent using an in-memory message bus
<li>Can be processed synchronously or asynchronously

Integration events:

- Consumed by other subsystems (microservices, Bounded Contexts)
<li>Sent with a message broker over a queue
<li>Processed completely asynchronously

So if you're wondering what type of event you should publish, think about the intent and who should be handling the event.

**Domain events** can also be used to **generate integration events**, which leave the domain boundary.

---

## implementing-domain-events"><a href="#implementing-domain-events">Implementing Domain Events

My preferred approach to implement **domain events** is creating an `IDomainEvent` abstraction and implementing MediatR `INotification`.

The benefit is you can use **MediatR's publish-subscribe** support to publish a notification to one or multiple handlers.

```cs
using MediatR;

public interface IDomainEvent : INotification
{
}

```

Now you can implement a concrete domain event.

Here are a few **constraints** to consider when **designing domain events**:

- Immutability - domain events are facts, and should be immutable
<li>Fat vs Thin domain events - how much information do you need?
<li>Use past tense for event naming

```cs
public class CourseCompletedDomainEvent : IDomainEvent
{
    public Guid CourseId { get; init; }
}

```

---

## raising-domain-events"><a href="#raising-domain-events">Raising Domain Events

After you create your domain events, you want to raise them from the domain.

My approach is creating an `Entity` base class, because only entities are allowed to raise domain events.
You can further encapsulate raising domain events by making the `RaiseDomainEvent` method `protected`.

We're storing domain events in an internal collection, to prevent anyone else from accessing it.
The `GetDomainEvents` method is there to get a snapshot of the collection, and the `ClearDomainEvents` method to clear the internal collection.

```cs
public abstract class Entity : IEntity
{
    private readonly List<IDomainEvent> _domainEvents = new();

    public IReadOnlyList<IDomainEvent> GetDomainEvents()
    {
        return _domainEvents.ToList();
    }

    public void ClearDomainEvents()
    {
        _domainEvents.Clear();
    }

    protected void RaiseDomainEvent(IDomainEvent domainEvent)
    {
        _domainEvents.Add(domainEvent);
    }
}

```

Now you're entities can inherit from the `Entity` base class and raise domain events:

```cs
public class Course : Entity
{
    public Guid Id { get; private set; }

    public CourseStatus Status { get; private set; }

    public DateTime? CompletedOnUtc { get; private set; }

    public void Complete()
    {
        Status = CourseStatus.Completed;
        CompletedOnUtc = DateTime.UtcNow;

        RaiseDomainEvent(new CourseCompletedDomainEvent { CourseId = this.Id });
    }
}

```

And all that's left to do is **publish** the **domain events**.

---

## how-to-publish-domain-events-with-ef-core"><a href="#how-to-publish-domain-events-with-ef-core">How To Publish Domain Events With EF Core

An elegant solution for publishing domain events is using **EF Core**.

Since EF Core acts as a **Unit of Work**, you can use it to gather all **domain events** in the current transaction and publish them.

I don't like to complicate things, and simply override the `SaveChangesAsync` method to publish the domain events after persisting the changes in the database.
But you could also use an interceptor.

```cs
public class ApplicationDbContext : DbContext
{
    public override async Task<int> SaveChangesAsync(
        CancellationToken cancellationToken = default)
    {
        // When should you publish domain events?
        //
        // 1. BEFORE calling SaveChangesAsync
        //     - domain events are part of the same transaction
        //     - immediate consistency
        // 2. AFTER calling SaveChangesAsync
        //     - domain events are a separate transaction
        //     - eventual consistency
        //     - handlers can fail

        var result = await base.SaveChangesAsync(cancellationToken);

        await PublishDomainEventsAsync();

        return result;
    }
}

```

The most **important decision** you will have to make here is **when to publish the domain events**.

I think it makes the most sense to publish after calling `SaveChangesAsync`.
In other words, after saving changes to the database.

This comes with a few tradeoffs:

- Eventual consistency - because messages are processed after the original transactions
<li>Database inconsistency risk - because handling domain events can fail

Eventual consistency is something I can live with, so I choose to make this tradeoff.

However, introducing a risk of database inconsistency is a big concern.

You can solve this with the <a href="outbox-pattern-for-reliable-microservices-messaging">**Outbox pattern,**</a>
where you persist your changes to the database and the domain events (as outbox messages) in a single transaction.
Now you have a guaranteed atomic transaction, and the domain events are processed asynchronously using a background job.

If you're wondering what's inside the `PublishDomainEventsAsync` method:

```cs
private async Task PublishDomainEventsAsync()
{
    var domainEvents = ChangeTracker
        .Entries<Entity>()
        .Select(entry => entry.Entity)
        .SelectMany(entity =>
        {
            var domainEvents = entity.GetDomainEvents();

            entity.ClearDomainEvents();

            return domainEvents;
        })
        .ToList();

    foreach (var domainEvent in domainEvents)
    {
        await _publisher.Publish(domainEvent);
    }
}

```

---

## how-to-handle-domain-events"><a href="#how-to-handle-domain-events">How To Handle Domain Events

With all of the plumbing we created so far, we're ready to implement a handler for the domain events.
Luckily, this is the simplest step in the process.

All you have to do is define a class implementing `INotificationHandler<T>` and specify your domain event type as the generic argument.

Here's a handler for the `CourseCompletedDomainEvent`, which takes the domain event and publishes a `CourseCompletedIntegrationEvent` to notify other systems.

```cs
public class CourseCompletedDomainEventHandler
    : INotificationHandler<CourseCompletedDomainEvent>
{
    private readonly IBus _bus;

    public CourseCompletedDomainEventHandler(IBus bus)
    {
        _bus = bus;
    }

    public async Task Handle(
        CourseCompletedDomainEvent domainEvent,
        CancellationToken cancellationToken)
    {
        await _bus.Publish(
            new CourseCompletedIntegrationEvent(domainEvent.CourseId),
            cancellationToken);
    }
}

```

---

## in-summary"><a href="#in-summary">In Summary

**Domain events** can help you build a loosely coupled system.
You can use them to separate the core domain logic from the side effects, which can be handled asynchronously.

There's no need to reinvent the wheel for implementing domain events, and you can use the **EF Core** and **MediatR** libraries to build this.

You will have to make the decision when you want to publish domain events.
Publishing before or after saving changes to the database both have their set of **tradeoffs**.

I prefer **publishing** domain events **after saving changes** to the database, and I use the <a href="outbox-pattern-for-reliable-microservices-messaging">**Outbox pattern**</a>
to add transactional guarantees.
This approach introduces eventual consistency, but it's also more reliable.

Hope this was helpful.

See you next week!

**Today's action step:**
Take a look at <a href="https://youtu.be/AHzWJ_SMqLo">**this video,**</a> where I explain how to implement domain events to build a decoupled system that scales.

-->

---

<TagLinks />