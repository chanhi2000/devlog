---
lang: ko-KR
title: Using MassTransit with RabbitMQ and Azure Service Bus
description: Article(s) > Using MassTransit with RabbitMQ and Azure Service Bus
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
      content: Article(s) > Using MassTransit with RabbitMQ and Azure Service Bus
    - property: og:description
      content: Using MassTransit with RabbitMQ and Azure Service Bus
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/using-masstransit-with-rabbitmq-and-azure-service-bus.html
prev: /programming/cs/articles/README.md
date: 2024-01-06
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_071.png
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
  name="Using MassTransit with RabbitMQ and Azure Service Bus"
  desc="MassTransit is an open-source distributed application framework for .NET. It provides a messaging abstraction on top of the supported message transports. In this week's issue, I'll show you how to use MassTransit."
  url="https://milanjovanovic.tech/blog/using-masstransit-with-rabbitmq-and-azure-service-bus/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_071.png"/>

<!-- TODO: 작성 -->

<!-- 
<a href="https://masstransit.io/">MassTransit</a> is an open-source distributed application framework for .NET. It provides a messaging abstraction on top of the supported message transports. MassTransit lets you focus on adding business value instead of worrying about messaging complexity.

MassTransit supports many message transport technologies. Here are a few that are popular:

- RabbitMQ
- Azure Service Bus
- Amazon SQS
- Kafka

In today's newsletter, I'll show you how to install and configure MassTransit in .NET. We'll connect MassTransit to a few message brokers - RabbitMQ and Azure Service Bus. And we will also cover how to publish and consume messages with MassTransit.

---

## Why Use MassTransit?

MassTransit solves many challenges of building distributed applications. You (almost) don't have to think about the underlying message transport. This allows you to focus on providing business value.

Here are a few things MassTransit does for you:

- **Message routing** - Type-based publish/subscribe, automatic broker topology configuration
- **Exception handling** - Messages can be retried or moved to an error queue
- **Dependency injection** - Service collection configuration and scope service provider
- **Request-Response** - Handle requests with automatic response routing
- **Observability** - Native <a href="https://opentelemetry.io/">Open Telemetry (OTEL)</a> support
- **Scheduling** - Schedule message delivery using transport delay, Quartz.NET, or Hangfire
- **Sagas** - Reliable, durable, event-driven workflow orchestration

Let's see how to start using MassTransit.

---

## Installing and Configuring MassTransit with RabbitMQ

You need to install the `MassTransit` library. If you already have a message transport, you can install the respective transport library. Let's add the `MassTransit.RabbitMQ` library to configure <a href="https://www.rabbitmq.com/">RabbitMQ</a> as the transport mechanism.

```pwsh
Install-Package MassTransit

Install-Package MassTransit.RabbitMQ
```

Then, you can configure the required services for `MassTransit`. The `AddMassTransit` method accepts a delegate where you can configure many settings. For example, you can set the messaging endpoints to use kebab case naming by calling `SetKebabCaseEndpointNameFormatter`. This is also where you configure the transport mechanism. Calling `UsingRabbitMq` allows you to connect RabbitMQ as the transport mechanism.

```cs
builder.Services.AddMassTransit(busConfigurator =>
{
    busConfigurator.SetKebabCaseEndpointNameFormatter();

    busConfigurator.UsingRabbitMq((context, configurator) =>
    {
        configurator.Host("localhost", "/", h =>
        {
            h.Username("guest");
            h.Password("guest");
        });

        configurator.ConfigureEndpoints(context);
    });
});
```

MassTransit takes care of setting up the required broker topology. RabbitMQ supports exchanges and queues, so messages are sent or published to exchanges. RabbitMQ routes those messages through exchanges to the appropriate queues.

You can start RabbitMQ locally inside a Docker container:

```cs
docker run -d --name rabbitmq -p 5672:5672
```

---

## Configuring MassTransit with Azure Service Bus

<a href="https://azure.microsoft.com/en-us/products/service-bus">Azure Service Bus</a> is a cloud-based message broker with support for queues and topics. MassTransit fully supports Azure Service Bus, including many advanced features and capabilities. However, you must be on the Standard or Premium tier of the Microsoft Azure Service Bus service.

To configure MassTransit to work with Azure Service Bus, you need to install the required transport library:

```pwsh
Install-Package MassTransit.Azure.ServiceBus.Core
```

Then, you can connect to Azure Service Bus by calling `UsingAzureServiceBus` and providing the connection string. Everything else remains the same. MassTransit takes care of configuring the broker topology. MassTransit sends messages to topics, and Azure Service Bus routes those messages to the appropriate queues.

```cs
builder.Services.AddMassTransit(busConfigurator =>
{
    busConfigurator.SetKebabCaseEndpointNameFormatter();

    busConfigurator.UsingAzureServiceBus((context, configurator) =>
    {
        configurator.Host("<CONNECTION_STRING>");

        configurator.ConfigureEndpoints(context);
    });
});
```

---

## Using the MassTransit In Memory Transport

You can also configure MassTransit to use an in-memory transport. It's useful for testing, because it doesn't require a message broker to be running. Another advantage is that it's fast.

However, there's a big problem with the in-memory transport - **it's not durable.**

If the message bus is stopped, all messages are lost. Don't use the in-memory transport for production systems.

It will only work on a single machine. So, it doesn't make sense for distributed applications.

```cs
builder.Services.AddMassTransit(busConfigurator =>
{
    busConfigurator.SetKebabCaseEndpointNameFormatter();

    busConfigurator.UsingInMemory((context, configurator) =>
    {
        configurator.ConfigureEndpoints(context);
    });
});
```

---

## Message Types

MassTransit requires message types to be <a href="https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/reference-types">reference types.</a> So, you can use a `class`, `record` or `interface` to define a message.

You'll often create two types of messages: commands and events.

A command is an instruction to perform some action. Commands are intended to have exactly one consumer. Commands are expressed using verbs first: `CreateArticle`, `PublishArticle`, `ShareArticle`.

An event represents that something of significance happened. Events can have one or many consumers. Events should have a name in the past tense: `ArticleCreated`, `ArticlePublished`, `ArticleShared`.

Here's an example `ArticleCreated` message containing information about an article:

```cs
public record ArticleCreated
{
    public Guid Id { get; init; }
    public string Title { get; init; }
    public string Content { get; init; }
    public DateTime CreatedOnUtc { get; init; }
}
```

Using `public set` or `public init` properties is recommended to avoid serialization problems with `System.Text.Json`.

---

## Publishing and Consuming Messages

You can use the `IPublishEndpoint` service to publish messages with MassTransit. The framework routes the message to the appropriate queue or topic based on the message type.

```cs
app.MapPost("article", async (
    CreateArticleRequest request,
<span class="code-line highlight-line">    IPublishEndpoint publishEndpoint) =>
{
<span class="code-line highlight-line">    await publishEndpoint.Publish(new ArticleCreated
    {
        Id = Guid.NewGuid(),
        Title = request.Title,
        Content = request.Content,
        CreatedOnUtc = DateTime.UtcNow
    });

    return Results.Accepted();
});
```

To consume an `ArticleCreated` message, you need to implement the `IConsumer` interface. The `IConsumer` has one `Consume` method where you place your business logic. The consumer also gives you access to the `ConsumeContext`, which you can use to send further messages.

```cs
public class ArticleCreatedConsumer(ApplicationDbContext dbContext)
    : IConsumer<ArticleCreatedEvent>
{
    public async Task Consume(ConsumeContext<ArticleCreatedEvent> context)
    {
        ArticleCreated message = context.Message;

        var article = new Article
        {
            Id = message.Id,
            Title = message.Title,
            Content = message.Content,
            CreatedOnUtc = message.CreatedOnUtc
        };

        dbContext.Add(article);

        await dbContext.SaveChangesAsync();
    }
}
```

MassTransit doesn't automatically know that the `ArticleCreatedConsumer` exists. You have to configure the consumer when calling `AddMassTransit`. The `AddConsumer` method registers the consumer type with the bus.

```cs
builder.Services.AddMassTransit(busConfigurator =>
{
    busConfigurator.SetKebabCaseEndpointNameFormatter();

<span class="code-line highlight-line">    busConfigurator.AddConsumer<ArticleCreatedConsumer>();

    // ...
});
```

---

## Next Steps

**MassTransit** is an excellent messaging library I often use when building distributed applications. The setup is straightforward, and there are only a few important abstractions. You need to know abstraction for publishing messages (`IPublishEndpoint`) and consuming messages (`IConsumer`). MassTransit takes care of doing the heavy lifting for you.

If you aren't already using it, I highly recommend adding MassTransit to your toolbox.

Here are some more practical **MassTransit learning resources**:

- <a href="https://youtu.be/NjsoykEOkrk">Request-Response pattern with MassTransit</a>
- <a href="https://youtu.be/CTKWFMZVIWA">RabbitMQ and MassTransit tutorial</a>
- <a href="https://youtu.be/MzC0PgYocmk">Microservices with RabbitMQ</a>
- <a href="implementing-the-saga-pattern-with-rebus-and-rabbitmq">Saga pattern with RabbitMQ</a>
- <a href="orchestration-vs-choreography">Orchestration vs Choreography</a>
- <a href="messaging-made-easy-with-azure-service-bus">Messaging with Azure Service Bus</a>

That's all for today.

See you next week.

-->

---

<TagLinks />