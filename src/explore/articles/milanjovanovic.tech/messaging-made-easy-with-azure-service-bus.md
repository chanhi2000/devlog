---
lang: ko-KR
title: Messaging Made Easy With Azure Service Bus
description: Article(s) > Messaging Made Easy With Azure Service Bus
icon: iconfont icon-microsoftazure
category: 
  - DevOps
  - Microsoft
  - Azure
  - C#
  - DotNet
  - Article(s)
tag: 
  - blog
  - milanjovanovic.tech
  - devops
  - microsoft
  - azure
  - cs
  - c#
  - csharp
  - dotnet
head:
  - - meta:
    - property: og:title
      content: Article(s) > Messaging Made Easy With Azure Service Bus
    - property: og:description
      content: Messaging Made Easy With Azure Service Bus
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/messaging-made-easy-with-azure-service-bus.html
prev: /programming/cs/articles/README.md
date: 2023-02-11
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_024.png
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
  "title": "Azure > Article(s)",
  "desc": "Article(s)",
  "link": "/devops/azure/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Messaging Made Easy With Azure Service Bus"
  desc="If you're working in a distributed system, you need to be able to communicate between multiple services. There are a few ways that you can implement this. Depending on your chosen approach, you can either introduce tight coupling between your services or stay loosely coupled. Loose coupling is an important quality in a distributed system. It will allow you to evolve your services independently. So how do you implement loosely coupled communication between services?"
  url="https://milanjovanovic.tech/blog/messaging-made-easy-with-azure-service-bus/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_024.png"/>

If you're working in a **distributed system**, you need to be able to communicate between multiple services. There are a few ways that you can implement this. Depending on your chosen approach, you can either introduce tight coupling between your services or stay **loosely coupled**.

**Loose coupling** is an important quality in distributed systems. It allows you to evolve your services independently. So how do you implement loosely coupled **communication between services**?

You need a **messaging system**.

And [<FontIcon icon="fa-brands fa-microsoft"/>Azure Service Bus](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview) is an excellent choice.

In this week's newsletter, I'll show you how to create an **Azure Service Bus** instance, and how to implement messaging over a **queue**.

Let's dive in.

---

## Creating An Azure Service Bus Instance

You can create a new **Azure Service Bus** instance from the **Azure** portal.

I won't go into detail on that, since I find the **Azure** UI pretty intuitive.

![](https://milanjovanovic.tech/blogs/mnw_024/service_bus.png?imwidth=1920)

After creating your **Azure Service Bus** instance, you'll need to do two more things:

- Create a new **queue**
- Find the **connection string**

After that you can proceed with implementing the pub-sub pattern over a queue. And you'll use the connection string from the Azure portal for connecting to the Azure Service Bus instance.

---

## Publishing Messages To The Azure Service Bus Queue

The first thing we need to do is to create the publishing side of our system, and then we'll see how we can process messages. We're going to use the `Azure.Messaging.ServiceBus` library to connect to the queue running in Azure Service Bus.

You can install the NuGet package by running the following command:

```pwsh
Install-Package Azure.Messaging.ServiceBus
```

And now, let's write the code for publishing a message to an Azure Service Bus queue.

To work with the Azure Service Bus instance, you will use the [<FontIcon icon="fa-brands fa-microsoft"/>`ServiceBusClient`](https://learn.microsoft.com/en-us/dotnet/api/azure.messaging.servicebus.servicebusclient?view=azure-dotnet) class. It requires a connection string to be able to connect to the Azure Service Bus instance.

The `ServiceBusClient` is safe to cache and reuse in the application, so it can be registered as a service with the singleton lifetime.

With the `ServiceBusClient` you can create a [<FontIcon icon="fa-brands fa-microsoft"/>`ServiceBusSender`](https://learn.microsoft.com/en-us/dotnet/api/azure.messaging.servicebus.servicebussender?view=azure-dotnet) instance, which is responsible for sending the actual messages. You also need to specify which queue it will be sending messages to. This can also be the name of a topic, if you are publishing to a topic instead.

```cs
using Azure.Messaging.ServiceBus;

await using var client = new ServiceBusClient(ConnectionString);

await using ServiceBusSender sender = client.CreateSender(QueueName);

// This will be the payload for the message ✉️
var productCreated = new ProductCreatedEvent(
    eventId: Guid.NewGuid(),
    product.Id,
    product.Name);

string json = JsonSerializer.Serialize(productCreated);

var message = new ServiceBusMessage(json);

await sender.SendMessageAsync(message);

```

As you can see, publishing a message to the queue is relatively simple.

We're creating a new instance of `ProductCreatedEvent`, which represents our message payload. The payload itself is serialized into a `JSON` string, wrapped inside a `ServiceBusMessage`.

For publishing messages to Azure Service Bus, you simply call the `SendMessageAsync` method.

---

## Receiving Messages From The Azure Service Bus Queue

Publishing messages to a queue is only half of the job. You also need to be able to receive messages from the queue. However, you'll see that this is very similar to the publishing side.

On the receiving side, you'll also need to create a `ServiceBusClient`. And then use it to create an instance of [<FontIcon icon="fa-brands fa-microsoft"/>`ServiceBusProcessor`](https://learn.microsoft.com/en-us/dotnet/api/azure.messaging.servicebus.servicebusprocessor?view=azure-dotnet), which is used for consuming messages. You need to tell the `ServiceBusProcessor` which queue it will subscribe to.

The `ServiceBusProcessor` exposes two events, which represent callbacks for when a message is received. These events are [<FontIcon icon="fa-brands fa-microsoft"/>`ProcessMessageAsync`](https://learn.microsoft.com/en-us/dotnet/api/azure.messaging.servicebus.servicebusprocessor.processmessageasync?view=azure-dotnet) and [<FontIcon icon="fa-brands fa-microsoft"/>`ProcessErrorAsync`](https://learn.microsoft.com/en-us/dotnet/api/azure.messaging.servicebus.servicebusprocessor.processerrorasync?view=azure-dotnet).

You need to provide a handler for these two events, to properly consume messages from the queue. In the example below, we're using the `HandleMessageAsync` and `HandleErrorAsync` local functions.

```cs
using Azure.Messaging.ServiceBus;

await using var client = new ServiceBusClient(ConnectionString);

await using ServiceBusProcessor processor  = client.CreateProcessor(QueueName);

processor.ProcessMessageAsync += HandleMessageAsync;

processor.ProcessErrorAsync += HandleErrorAsync;

await processor.StartProcessingAsync();

async Task HandleMessageAsync(ProcessMessageEventArgs args)
{
    string json = args.Message.Body.ToString();

    var productCreated = JsonSerializer.Deserialize<ProductCreatedEvent>(json);

    Console.WriteLine(productCreated);

    await args.CompleteMessageAsync(args.Message);
}

Task HandleErrorAsync(ProcessErrorEventArgs args)
{
    var exception = args.Exception;

    Console.WriteLine(exception.ToString());

    return Task.CompletedTask;
}

```

The `ServiceBusProcessor` begins listening to messages coming from the queue after calling the `StartProcessingAsync` method.

Notice that the success and error event handlers need to accept the [<FontIcon icon="fa-brands fa-microsoft"/>`ProcessMessageEventArgs`](https://learn.microsoft.com/en-us/dotnet/api/azure.messaging.servicebus.processmessageeventargs?view=azure-dotnet) and [<FontIcon icon="fa-brands fa-microsoft"/>`ProcessErrorEventArgs`](https://learn.microsoft.com/en-us/dotnet/api/azure.messaging.servicebus.processerroreventargs?view=azure-dotnet), respectively.

From the `ProcessMessageEventArgs` you can access the `Message.Body` which contains the mesage payload.

---

## Further Reading

**Azure Service Bus** is a very feature rich service cloud. I showed you how to work with **queues**, which are great if you only have one publisher and one subscriber. However, if you need the ability to have multiple subscribers to a single message, you can't achieve this with queues.

You will have to use [<FontIcon icon="fa-brands fa-microsoft"/>topics](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions#topics-and-subscriptions), and I invite you to research this *topic* further (pun intended).

**Azure Functions** have excellent support for integrating with **Azure Service Bus**. You can define a `QueueTrigger` that will run your **Azure Function** when you receive a message to an Azure Service Bus **queue**.

I also released a video showing how to [<FontIcon icon="fa-brands fa-youtube"/>publish and consume messages using RabbitMQ](https://youtu.be/CTKWFMZVIWA), and I think you might enjoy it after reading this newsletter.

<VidStack src="youtube/CTKWFMZVIWA" />

Have an excellent weekend, and stay awesome!

---

<TagLinks />