---
lang: ko-KR
title: Complete Guide to Amazon SQS and Amazon SNS With MassTransit
description: Article(s) > Complete Guide to Amazon SQS and Amazon SNS With MassTransit
icon: iconfont icon-csharp
category: 
  - C#
  - DotNet
  - DevOps
  - AWS
  - Article(s)
tag: 
  - blog
  - milanjovanovic.tech
  - cs
  - c#
  - csharp
  - dotnet
  - devops
  - aws
head:
  - - meta:
    - property: og:title
      content: Article(s) > Complete Guide to Amazon SQS and Amazon SNS With MassTransit
    - property: og:description
      content: Complete Guide to Amazon SQS and Amazon SNS With MassTransit
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/complete-guide-to-amazon-sqs-and-amazon-sns-with-masstransit.html
prev: /programming/cs/articles/README.md
date: 2024-08-17
isOriginal: false
author: Milan Jovanovic
cover: https://milanjovanovic.tech/blog-covers/mnw_103.png
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

```component VPCard
{
  "title": "AWS > Article(s)",
  "desc": "Article(s)",
  "link": "/devops/aws/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Complete Guide to Amazon SQS and Amazon SNS With MassTransit"
  desc="In this article, we'll explore how to use Amazon SQS and SNS for asynchronous messaging in .NET applications. We'll also see how MassTransit simplifies the process, enabling you to build robust message-driven systems."
  url="https://milanjovanovic.tech/blog/complete-guide-to-amazon-sqs-and-amazon-sns-with-masstransit/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_103.png"/>

<!-- TODO: 작성 -->

<!-- 
Have you ever wondered how large-scale systems handle traffic spikes or maintain performance even when parts of the system are temporarily down?
The answer lies in asynchronous messaging.

Asynchronous messaging is, at its core, about decoupling.
Our components can operate independently and communicate through a message queue or topic.
If one service (component) is temporarily unavailable, the others can continue working.
This improves our system's scalability, resilience, and fault tolerance.

In this article, we'll explore how to use Amazon SQS and SNS for asynchronous messaging in .NET applications.

We'll also see how MassTransit simplifies the process, enabling you to build robust message-driven systems.

Let's dive in.

---

## What is Amazon SQS?

<a href="https://aws.amazon.com/sqs/">Amazon Simple Queue Service</a> (SQS) is a fully managed message queueing service. It facilitates the decoupling and scaling of microservices and distributed systems.

SQS acts as a reliable middleman for asynchronous communication. It enables different components of your architecture to exchange messages without needing to be online or directly connected at the same time. Messages are stored in queues and consumed on demand.

SQS offers two distinct queue types depending on your requirements:

- **Standard Queues**: Ideal for high-throughput scenarios. Standard Queues provide at-least-once delivery and best-effort ordering.
- **FIFO Queues**: Recommended when maintaining message order is required. FIFO Queues guarantee exactly-once processing and preserve the sequence in which messages are sent.

Let's say we have two services - `Stock` and `Reporting`. When a user creates a purchase order in the `Stock` service, we want to notify the `Reporting` service.

SQS allows us to create decoupled communication between these services.
The `Stock` service sends a message to an SQS queue, and the `Reporting` service can poll from the queue to consume messages.

![Amazon SQS.](https://milanjovanovic.tech/blogs/mnw_103/amazon_sqs.png?imwidth=3840)

It's interesting to highlight that SQS uses a polling mechanism for message consumers. When a consumer polls for new messages, SQS starts a <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">visibility timeout</a>. SQS doesn't automatically delete the messages. Instead, messages are hidden from other consumers until the timeout expires.

When the consumer successfully processes a message, it's removed from the queue. But if the visibility timeout expires, the message becomes visible and can be delivered again. Other consumers can receive this message when polling from SQS. This is why SQS offers at-least-once delivery (for standard queues). You will have to implement <a href="idempotent-consumer-handling-duplicate-messages">**idempotency in the consumer**</a>.

---

## Amazon SQS and Competing Consumers

Let's introduce another service into our system - the `Risk Management` service. When multiple consumers (services) poll an SQS queue, each wants to retrieve and process messages as they become available. However, once a message is successfully received and processed by one consumer, it's removed from the queue.

Why is this a problem?

Other consumers who might have been polling will miss out on that specific message. This is known as <a href="https://learn.microsoft.com/en-us/azure/architecture/patterns/competing-consumers">competing consumers</a>.

Let's consider the example of `Reporting` and `Risk Management` services polling the same queue. If a new message arrives, only one of these services will "win" the race and retrieve it for processing. The other service won't find that message even if it polls moments later.

![Amazon SQS and competing consumers.](https://milanjovanovic.tech/blogs/mnw_103/amazon_sqs_competing_consumers.png?imwidth=3840)

So, how can we solve this?

We could introduce a dedicated queue for each service. However, the producer now needs to publish to multiple queues. This creates a possibility for some (not so) interesting partial failures. What happens if we successfully publish to one queue but fail to publish to the other?

You can see how this becomes difficult to scale while maintaining reliability.

Luckily, there's a solution.

---

## Amazon SNS to The Rescue

<a href="https://aws.amazon.com/sns/">Amazon Simple Notification Service</a> (SNS) is a fully managed pub/sub messaging service. It allows publishers to send messages to multiple subscribers (topics) simultaneously.

SNS operates on the principle of publishers and subscribers. Publishers send messages to an SNS topic, while subscribers express interest in specific topics and receive messages published to those topics. This decoupled architecture allows you to add or remove subscribers without impacting the publisher or other subscribers.

SNS seamlessly integrates with SQS, allowing you to create a powerful combination where SNS handles the fan-out of messages, and SQS queues ensure that each message is processed exclusively by a single consumer (service).

Instead of sending a message to the queue, the `Stock` service now publishes to an SNS topic. Both the `Reporting` and `Risk Management` services create their own SQS queues and subscribe these queues to the SNS topic. When a new message is published to the SNS topic, SNS delivers it to both SQS queues. Each queue receives its own copy of the message.

If we want to introduce a new service, we'll create a new SQS queue and subscribe it to the topic.

![Amazon SNS.](https://milanjovanovic.tech/blogs/mnw_103/amazon_sns.png?imwidth=3840)

---

## MassTransit Integration With SQS and SNS

How can we use SNS and SQS from a .NET application?

You could use the official AWS SDKs. The benefit is you'll have more control over messaging. However, you will need to write more code to receive and handle messages successfully.

So, I want to suggest a different approach.

MassTransit is one of the most popular messaging libraries in .NET. It provides a set of messaging abstractions on top of the supported message transports.

I wrote an article about <a href="using-masstransit-with-rabbitmq-and-azure-service-bus">**using MassTransit with RabbitMQ and Azure Service Bus**</a>.

But we'll focus on using MassTransit with SQS and SNS.

Let's start by installing the NuGet package we'll need:

```pwsh
Install-Package MassTransit.AmazonSQS
```

Next, we'll need to configure MassTransit with our .NET applications.

Here's the MassTransit configuration for the `Stock` service:

```cs
builder.Services.AddMassTransit(configure =>
{
    configure.AddConsumer<PurchaseOrderSentConsumer>().Endpoint(e => e.InstanceId = "stocks");

    configure.UsingAmazonSqs((context, cfg) =>
    {
        cfg.Host("eu-central-1", h =>
        {
            h.AccessKey(builder.Configuration["AmazonSqs:AccessKey"]!);
            h.SecretKey(builder.Configuration["AmazonSqs:SecretKey"]!);

            h.Scope("stocks-platform", scopeTopics: true);
        });

        cfg.ConfigureEndpoints(context, new KebabCaseEndpointNameFormatter("stocks-platform-", false));
    });
});
```

Here are a few things I want to highlight here:

- `UsingAmazonSqs` - Configures SQS (and SNS) as the message transport.
- `Scope` - Adds a prefix to SNS topic names. This helps distinguish topics from other applications and environments.
- `Endpoint` - Sets the `InstanceId`, which is appended to the endpoint (queue) name.
- `ConfigureEndpoints` - Allows us to specify a prefix for endpoint (queue) names. The idea is the same as the topic name prefix.

You'll also need to configure an <a href="https://masstransit.io/documentation/configuration/transports/amazon-sqs#example-iam-policy">IAM policy</a> that gives MassTransit the required permissions for AWS resources.

And with this setup in place, you can use MassTransit to publish messages. Here's an endpoint that accepts a purchase order and publishes a `PurchaseOrderSent` message.

```cs
app.MapPost("purchase-orders", async (PurchaseOrderRequest request, IPublishEndpoint publishEndpoint) =>
{
    var purchaseOrder = new PurchaseOrder
    {
        Id = Guid.NewGuid(),
        Ticker = request.Ticker,
        LimitPrice = request.LimitPrice,
        Quantity = request.Quantity
    };

    OrdersDb.Add(purchaseOrder);

    await publishEndpoint.Publish(new PurchaseOrderSent(purchaseOrder.Id));

    return Results.Ok(purchaseOrder);
});
```

We will process the purchase order in the `PurchaseOrderSentConsumer`.
If it's successfully processed (filled), we will publish an `OrderFilled` message.

The `Risk Management` service can subscribe to this message using MassTransit.
The configuration is almost identical, with the only difference being the endpoint's `InstanceId`.

```cs
builder.Services.AddMassTransit(configure =>
{
    configure.AddConsumer<OrderFilledConsumer>().Endpoint(e => e.InstanceId = "risk-management");

    configure.UsingAmazonSqs((context, cfg) =>
    {
        cfg.Host("eu-central-1", h =>
        {
            h.AccessKey(builder.Configuration["AmazonSqs:AccessKey"]!);
            h.SecretKey(builder.Configuration["AmazonSqs:SecretKey"]!);

            h.Scope("stocks-platform", true);
        });

        cfg.ConfigureEndpoints(context, new KebabCaseEndpointNameFormatter("stocks-platform-", false));
    });
});
```

---

## Broker Topology in AWS

MassTransit will automatically create the required queues, topics, and subscriptions in AWS. If needed, you can further configure the SQS and SNS resources.

Of course, you can also create the required infrastructure in AWS and tell MassTransit to use it.

But let's keep it simple and allow MassTransit to provision the AWS resources.

By default, MassTransit creates standard SQS queues. Here's what we get in Amazon SQS.

![Amazon SQS queues created by MassTransit.](https://milanjovanovic.tech/blogs/mnw_103/amazon_sqs_queues.png?imwidth=3840)

And here's what we get in Amazon SNS:

![Amazon SNS topics created by MassTransit.](https://milanjovanovic.tech/blogs/mnw_103/amazon_sns_topics.png?imwidth=3840)

MassTransit automatically configures the required subscriptions between the topic and queues.

And we are ready to start publishing and consuming messages.

---

## In Summary

Asynchronous communication and decoupling are pivotal in achieving scalability, resilience, and fault tolerance. Amazon SQS and SNS provide the building blocks of message-driven architectures in the AWS cloud.

We explored the core concepts of SQS and SNS, understanding how they enable reliable message delivery and fan-out capabilities.

MassTransit provides an excellent abstraction layer over SQS and SNS, simplifying development. We can focus on solving the business problems and delivering value to our users.

The combination of Amazon SQS, SNS, and MassTransit gives us robust tools for building modern, event-driven applications.

Thanks for reading, and I'll see you next week!

::: note P.S.

You can find the source code for this article in <a href="https://github.com/m-jovanovic/aws-tutorials">**this repository**</a>, under the `Amazon SQS and SNS` folder.

:::

-->

---

<TagLinks />