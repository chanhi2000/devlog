---
lang: ko-KR
title: "How To Publish MediatR Notifications In Parallel"
description: "Article(s) > How To Publish MediatR Notifications In Parallel"
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
      content: "Article(s) > How To Publish MediatR Notifications In Parallel"
    - property: og:description
      content: "How To Publish MediatR Notifications In Parallel"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/how-to-publish-mediatr-notifications-in-parallel.html
prev: /programming/cs/articles/README.md
date: 2023-03-25
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_030.png
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
  name="How To Publish MediatR Notifications In Parallel"
  desc="MediatR is a popular library with a simple mediator pattern implementation in .NET. Here's a definiton taken from MediatR's GitHub: 'In-process messaging with no dependencies.' With the rise in popularity of the CQRS pattern, MediatR became the go-to library to implement commands and queries. However, MediatR also has support for the publish-subscribe pattern using notifications. You can publish an INotification instance and have multiple subscribers handle the published message. Until recently, the handlers subscribing to an INotification message could only execute serially, one by one."
  url="https://milanjovanovic.tech/blog/how-to-publish-mediatr-notifications-in-parallel/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_030.png"/>

**MediatR** is a popular library with a simple **mediator pattern** implementation in .NET.

Here's a definiton taken from MediatR's GitHub: **"In-process messaging with no dependencies."**

With the rise in popularity of the **CQRS pattern**, MediatR became the go-to library to implement commands and queries.

However, MediatR also has support for the **publish-subscribe** pattern using notifications. You can publish an `INotification` instance and have multiple subscribers handle the published message.

Until recently, the handlers subscribing to an `INotification` message could only execute serially, one by one.

In this week's newsletter, I'll show you how to configure MediatR to **execute the handlers in parallel**.

Let's dive in.

---

## How Publish-Subscribe Works With MediatR

Before I talk about notification publishing strategies, let's see how **publish-subscribe** works with **MediatR**.

You need a class implementing the `INotification` interface:

```cs
public record OrderCreated(Guid OrderId) : INotification;
```

Then you need a respective `INotificationHandler` implementation:

```cs
public class OrderCreatedHandler : INotificationHandler<OrderCreated>
{
    private readonly INotificationService _notificationService;

    public OrderCreatedHandler(INotificationService notificationService)
    {
        _notificationService = notificationService;
    }

    public async Task Handle(
        OrderCreated notification,
        CancellationToken cancellationToken)
    {
        await _notificationService.SendOrderCreatedEmail(
            notification.OrderId,
            cancellationToken);
    }
}
```

And then you simply publish a message using either `IMediator` or `IPublisher`. I prefer using the `IPublisher` because it's more expressive:

```cs
await publisher.Publish(new OrderCreated(order.Id), cancellationToken);
```

MediatR will invoke all the respective handlers.

---

## Introducing Notification Publisher Strategies

Before MediatR v12, the publishing strategy would invoke each handler individually.

However, there's a new interface `INotificationPublisher` controlling how the handlers are called.

The default implementation of this interface is `ForeachAwaitPublisher`:

```cs
public class ForeachAwaitPublisher : INotificationPublisher
{
    public async Task Publish(
        IEnumerable<NotificationHandlerExecutor> handlerExecutors,
        INotification notification,
        CancellationToken cancellationToken)
    {
        foreach (var handler in handlerExecutors)
        {
            await handler
                .HandlerCallback(notification, cancellationToken)
                .ConfigureAwait(false);
        }
    }
}
```

But now you can also use the `TaskWhenAllPublisher`:

```cs
public class TaskWhenAllPublisher : INotificationPublisher
{
    public Task Publish(
        IEnumerable<NotificationHandlerExecutor> handlerExecutors,
        INotification notification,
        CancellationToken cancellationToken)
    {
        var tasks = handlerExecutors
            .Select(handler => handler.HandlerCallback(
                notification,
                cancellationToken))
            .ToArray();

        return Task.WhenAll(tasks);
    }
}
```

Here's a comparison between these two strategies.

`ForeachAwaitPublisher`:

- Invokes each handler one by one
- Fails when an exception occurs in one of the handlers

`TaskWhenAllPublisher`:

- Invokes all the handlers at the same time
- Executes all the handlers regardless of one of them throwing an exception

If you store the task returned by `TaskWhenAllPublisher` you can access the `Task.Exception` property, which will contain an `AggregateException` instance.
You can then implement more robust exception handling.

---

## Configuring MediatR Notification Publishing Strategy

How do we configure which `INotificationPublisher` strategy MediatR will use?

There's a new way to apply configuration options when calling the `AddMediatR` method.

You supply an `Action<MediatRServiceConfiguration>` delegate and configure the `MediatRServiceConfiguration` instance.

If you want to use the `TaskWhenAllPublisher` strategy, you can either:

- Provide a value for the `NotificationPublisher` property
- Specify the strategy type on the `NotificationPublisherType` property

```cs
services.AddMediatR(config => {
    config.RegisterServicesFromAssemblyContaining<Program>();

    // Setting the publisher directly will make the instance a Singleton.
    config.NotificationPublisher = new TaskWhenAllPublisher();

    // Seting the publisher type will:
    // 1. Override the value set on NotificationPublisher
    // 2. Use the service lifetime from the ServiceLifetime property below
    config.NotificationPublisherType = typeof(TaskWhenAllPublisher);

    config.ServiceLifetime = ServiceLifetime.Transient;
});
```

You can also implement a custom `INotificationPublisher` instance and use your own implementation instead.

---

## How Is This Useful?

Being able to **run notification handlers in parallel** provides a significant **performance improvement** over the default behavior.

However, note that all handlers will use the same service scope.

If you have service instances that don't support concurrent access you may run into problems.

Unfortunately, one such service instance is the **EF Core** `DbContext`.

In any case, I think this is a great addition to the already amazing **MediatR** library.

That's all for today.

See you next week.

---

<TagLinks />