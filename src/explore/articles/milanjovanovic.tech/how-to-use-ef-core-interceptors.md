---
lang: ko-KR
title: How To Use EF Core Interceptors
description: Article(s) > How To Use EF Core Interceptors
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
      content: Article(s) > How To Use EF Core Interceptors
    - property: og:description
      content: How To Use EF Core Interceptors
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/how-to-use-ef-core-interceptors.html
prev: /programming/cs/articles/README.md
date: 2023-11-18
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_064.png
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
  name="How To Use EF Core Interceptors"
  desc="EF Core is my favorite ORM for .NET applications. Yet, its many fantastic features sometimes go unnoticed. For example, query splitting, query filters, and interceptors. EF interceptors are interesting because you can do powerful things with them. For example, you can hook into materialization, handle optimistic concurrency errors, or add query hints. The most practical use case is adding behavior when saving changes to the database."
  url="https://milanjovanovic.tech/blog/how-to-use-ef-core-interceptors/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_064.png"/>

<!-- TODO: 작성 -->

<!-- 
EF Core is my favorite ORM for .NET applications.
Yet, its many fantastic features sometimes go unnoticed.
For example, <a href="how-to-improve-performance-with-ef-core-query-splitting">**query splitting**</a>,
<a href="how-to-use-global-query-filters-in-ef-core">**query filters**</a>,
and interceptors.

EF interceptors are interesting because you can do powerful things with them.
For example, you can hook into materialization, handle optimistic concurrency errors, or add query hints.

The most practical use case is adding behavior when saving changes to the database.

Today I want to show you three unique use cases for EF Core interceptors:

- Audit logging
<li>Publishing domain events
<li>Persisting Outbox messages

---

## what-are-ef-interceptors"><a href="#what-are-ef-interceptors">What are EF Interceptors?

<a href="https://learn.microsoft.com/en-us/ef/core/logging-events-diagnostics/interceptors">EF Core interceptors</a>
allow you to intercept, change, or suppress EF Core operations.
Every interceptor implements the `IInterceptor` interface.
A few common derived interfaces include `IDbCommandInterceptor`, `IDbConnectionInterceptor`, and `IDbTransactionInterceptor`.

The most popular one is the `ISaveChangesInterceptor`. It allows you to add behavior before or after saving changes.

Interceptors are registered for each `DbContext` instance when configuring the context.

```cs
public interface IInterceptor
{
}

```

You don't have to implement these interfaces directly.
It's better to use concrete implementations and override the needed methods.

For example, I'll show you how to use the `SaveChangesInterceptor`.

---

## audit-logging-with-ef-interceptors"><a href="#audit-logging-with-ef-interceptors">Audit Logging With EF Interceptors

An audit log of entity changes is a valuable feature in some applications.
You write additional audit information every time an entity is created or modified.
The audit log could also contain the complete before/after values, depending on your requirements.

However, let's use a simple example to make it easy to understand.

I have an `IAuditable` interface with two properties representing when an entity was created or modified.

```cs
public interface IAuditable
{
    DateTime CreatedOnUtc { get; }

    DateTime? ModifiedOnUtc { get; }
}

```

Next, I'll implement an `UpdateAuditableInterceptor` interceptor to write the audit values.
It uses the `ChangeTracker` to find all `IAuditable` instances and sets the respective property value.

I want to highlight that I'm overriding the `SavingChangesAsync` method here.
`SavingChangesAsync` runs before the changes are saved in the database and any updates applied inside the `UpdateAuditableInterceptor`
are also part of the current database transaction.

This implementation can be easily extended to include the information about the current user.

```cs
internal sealed class UpdateAuditableInterceptor : SaveChangesInterceptor
{
    public override ValueTask<InterceptionResult<int>> SavingChangesAsync(
        DbContextEventData eventData,
        InterceptionResult<int> result,
        CancellationToken cancellationToken = default)
    {
        if (eventData.Context is not null)
        {
            UpdateAuditableEntities(eventData.Context);
        }

        return base.SavingChangesAsync(eventData, result, cancellationToken);
    }

    private static void UpdateAuditableEntities(DbContext context)
    {
        DateTime utcNow = DateTime.UtcNow;
        var entities = context.ChangeTracker.Entries<IAuditable>().ToList();

        foreach (EntityEntry<IAuditable> entry in entities)
        {
            if (entry.State == EntityState.Added)
            {
                SetCurrentPropertyValue(
                    entry, nameof(IAuditable.CreatedOnUtc), utcNow);
            }

            if (entry.State == EntityState.Modified)
            {
                SetCurrentPropertyValue(
                    entry, nameof(IAuditable.ModifiedOnUtc), utcNow);
            }
        }

        static void SetCurrentPropertyValue(
            EntityEntry entry,
            string propertyName,
            DateTime utcNow) =>
            entry.Property(propertyName).CurrentValue = utcNow;
    }
}

```

---

## publish-domain-events-with-ef-interceptors"><a href="#publish-domain-events-with-ef-interceptors">Publish Domain Events With EF Interceptors

Another use case for EF interceptors is <a href="how-to-use-domain-events-to-build-loosely-coupled-systems">**publishing domain events.**</a>
Domain events are a DDD tactical pattern to create loosely coupled systems.

Domain events allow you to express side effects explicitly and provide a better separation of concerns in the domain.

You can create an `IDomainEvent` interface, which derives from `MediatR.INotification`.
This allows you to use the `IPublisher` to publish domain events and handle them asynchronously.

```cs
using MediatR;

public interface IDomainEvent : INotification
{
}

```

Then, I'll create a `PublishDomainEventsInterceptor` that also inherits from `SaveChangesInterceptor`.
However, this time, we're using the `SavedChangesAsync` to publish the domain events *after* saving changes in the database.

This has two important implications:

1. The entire workflow is now eventually consistent. Domain event handlers will save changes to the database after the original transaction.
<li>If any domain event handlers fail, we risk failing the request even though the initial transaction was completed successfully.

You can make this process more reliable by using an <a href="outbox-pattern-for-reliable-microservices-messaging">**Outbox.**</a>

```cs
internal sealed class PublishDomainEventsInterceptor : SaveChangesInterceptor
{
    private readonly IPublisher _publisher;

    public PublishDomainEventsInterceptor(IPublisher publisher)
    {
        _publisher = publisher;
    }

    public override async ValueTask<int> SavedChangesAsync(
        SaveChangesCompletedEventData eventData,
        int result,
        CancellationToken cancellationToken = default)
    {
        if (eventData.Context is not null)
        {
            await PublishDomainEventsAsync(eventData.Context);
        }

        return result;
    }

    private async Task PublishDomainEventsAsync(DbContext context)
    {
        var domainEvents = context
            .ChangeTracker
            .Entries<Entity>()
            .Select(entry => entry.Entity)
            .SelectMany(entity =>
            {
                List<IDomainEvent> domainEvents = entity.DomainEvents;

                entity.ClearDomainEvents();

                return domainEvents;
            })
            .ToList();

        foreach (IDomainEvent domainEvent in domainEvents)
        {
            await _publisher.Publish(domainEvent);
        }
    }
}

```

---

## store-outbox-messages-with-ef-interceptors"><a href="#store-outbox-messages-with-ef-interceptors">Store Outbox Messages With EF Interceptors

Instead of <a href="how-to-use-domain-events-to-build-loosely-coupled-systems">**publishing domain events**</a> as part of the EF transaction, you can convert them to Outbox messages.

Here's an `InsertOutboxMessagesInterceptor` that does precisely this.

It overrides the `SavingChangesAsync` method.
Which means it runs inside the current EF transaction before saving changes.

The `InsertOutboxMessagesInterceptor` converts any domain events into an `OutboxMessage` and adds it to the respective `DbSet<OutboxMessage>`.
This means they will be saved to the database with any existing changes inside the same transaction.

This is an atomic operation.

Either everything succeeds or everything fails.

There's no in-between state like in the `PublishDomainEventsInterceptor`.

You can then create a background worker that will process the Outbox messages.

And this is how you implement the <a href="outbox-pattern-for-reliable-microservices-messaging">**Outbox pattern**</a> with EF Core.

```cs
using Newtonsoft.Json;

public sealed class InsertOutboxMessagesInterceptor : SaveChangesInterceptor
{
    private static readonly JsonSerializerSettings Serializer = new()
    {
        TypeNameHandling = TypeNameHandling.All
    };

    public override ValueTask<InterceptionResult<int>> SavingChangesAsync(
        DbContextEventData eventData,
        InterceptionResult<int> result,
        CancellationToken cancellationToken = default)
    {
        if (eventData.Context is not null)
        {
            InsertOutboxMessages(eventData.Context);
        }

        return base.SavingChangesAsync(eventData, result, cancellationToken);
    }

    private static void InsertOutboxMessages(DbContext context)
    {
        context
            .ChangeTracker
            .Entries<Entity>()
            .Select(entry => entry.Entity)
            .SelectMany(entity =>
            {
                List<IDomainEvent> domainEvents = entity.DomainEvents;

                entity.ClearDomainEvents();

                return domainEvents;
            })
            .Select(domainEvent => new OutboxMessage
            {
                Id = domainEvent.Id,
                OccurredOnUtc = domainEvent.OccurredOnUtc,
                Type = domainEvent.GetType().Name,
                Content = JsonConvert.SerializeObject(domainEvent, Serializer)
            })
            .ToList();

        context.Set<OutboxMessage>().AddRange(outboxMessages);
    }
}

```

---

## configuring-ef-interceptors-using-dependency-injection"><a href="#configuring-ef-interceptors-using-dependency-injection">Configuring EF Interceptors Using Dependency Injection

EF interceptors should be lightweight and stateless.
You can add them to the `DbContext` by calling `AddInterceptors` and passing in the interceptor instances.

I like to configure the interceptors with Dependency Injection for two reasons:

- It allows me also to use DI in the interceptors (be mindful that they are singletons)
<li>To simplify adding the interceptors to the `DbContext` using `AddDbContext`

Here's how you can configure the `UpdateAuditableInterceptor` and `InsertOutboxMessagesInterceptor` with the `ApplicationDbContext`:

```cs
services.AddSingleton<UpdateAuditableInterceptor>();
services.AddSingleton<InsertOutboxMessagesInterceptor>();

services.AddDbContext<IApplicationDbContext, ApplicationDbContext>(
    (sp, options) => options
        .UseSqlServer(connectionString)
        .AddInterceptors(
            sp.GetRequiredService<UpdateAuditableInterceptor>(),
            sp.GetRequiredService<InsertOutboxMessagesInterceptor>()));

```

---

## closing-thoughts"><a href="#closing-thoughts">Closing Thoughts

Interceptors allow you to do almost anything with an EF Core operation.
But with great power comes great responsibility.
You should be mindful that interceptors have an impact on performance.
Calls to external services or handling events will slow down the operation.

Remember, you don't necessarily have to use EF interceptors.
You can achieve the same behavior by overriding the `SaveChangesAsync` method on the `DbContext` and adding your custom logic there.

I showed you a few practical use cases for EF interceptors in this week's issue.

But, if you want to see more examples, I have a few videos about:

- <a href="https://youtu.be/mAlO3OuoQvo">**Auditing logging**</a>
<li><a href="https://youtu.be/AHzWJ_SMqLo">**Publishing domain events**</a>
<li><a href="https://youtu.be/XALvnX7MPeo">**Implementing the Outbox pattern**</a>

Thanks for reading, and stay awesome!

-->

---

<TagLinks />