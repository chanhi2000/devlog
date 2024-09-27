---
lang: ko-KR
title: Getting Started With NServiceBus in .NET
description: Article(s) > Getting Started With NServiceBus in .NET
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
      content: Article(s) > Getting Started With NServiceBus in .NET
    - property: og:description
      content: Getting Started With NServiceBus in .NET
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/getting-started-with-nservicebus-in-dotnet.html
prev: /programming/cs/articles/README.md
date: 2023-10-07
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_058.png
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
  name="Getting Started With NServiceBus in .NET"
  desc="NServiceBus is a feature-rich messaging framework supporting many different message transports. It's developed and maintained by Particular Software. And it simplifies the process of building complex distributed systems across various cloud-based queueing technologies. The basic building blocks of NServiceBus are messages and endpoints. A message contains the required information to execute a business operation. Endpoints are logical entities that send and receive messages."
  url="https://milanjovanovic.tech/blog/getting-started-with-nservicebus-in-dotnet/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_058.png"/>


NServiceBus is a feature-rich messaging framework supporting many different message transports. It's developed and maintained by [<FontIcon icon="fas fa-globe"/>Particular Software](https://particular.net/). And it simplifies the process of building complex distributed systems across various cloud-based queueing technologies.

The basic building blocks of NServiceBus are messages and endpoints. A message contains the required information to execute a business operation. Endpoints are logical entities that send and receive messages.

And now let's see how to get started with NServiceBus, from installation and setup to building your first NServiceBus endpoint.

In this week's newsletter, you will learn how to:

- Configure an endpoint to use Azure Service Bus
- Send and publish messages using `IMessageSession`
- Handle messages with NServiceBus

Let's dive in!

---

## What is NServiceBus?

[<FontIcon icon="fas fa-globe"/>NServiceBus](https://go.particular.net/milanjovanovic) is a messaging framework and platform that simplifies building reliable, scalable, and maintainable distributed systems. It's designed to address the challenges that arise when building applications that are distributed across multiple servers.

One of NServiceBus's foundational principles is its embrace of a message-driven architecture. In this model, components communicate by sending and receiving messages. Messages are the fundamental units of communication, representing commands, events, or data that services exchange.

Why is this significant?

Message-driven architectures offer several advantages:

- Asynchronous communication
- Loose coupling
- Reliability

NServiceBus supports the powerful publish/subscribe (pub/sub) messaging pattern. This pattern allows services to publish events and subscribe to events of interest. When a service publishes an event, all interested subscribers receive a copy of the event. This is a key feature for building event-driven architectures, where services react to and process events in response to various actions or changes in the system.

---

## Configuring the NServiceBus Endpoint

NServiceBus uses the concept of an *endpoint* to send and receive messages. It's a logical component that communicates with other components. You define your message handlers and sagas inside of an endpoint.

Let's start by installing the `NServiceBus` NuGet package:

```pwsh
Install-Package NServiceBus.Extensions.Hosting
```

Now you can configure an *endpoint* to use [<FontIcon icon="fa-brands fa-microsoft"/>Azure Service Bus](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview) to send messages:

```cs
var builder = WebApplication.CreateBuilder();

builder.Host.UseNServiceBus(context =>
{
    var endpointConfiguration = new EndpointConfiguration("Training");

    var transport = endpointConfiguration
        .UseTransport<AzureServiceBusTransport>();

    var connectionString = builder.Configuration
        .GetConnectionString("AzureServiceBusConnectionString");
    transport.ConnectionString(connectionString);

    endpointConfiguration.EnableInstallers();

    return endpointConfiguration;
});

var app = builder.Build();

app.Run();
```

The call to `UseNServiceBus` tells the host to use NServiceBus. Inside the callback, you can configure the endpoint that will start when the host runs.

One more important aspect is calling `EnableInstallers` to set up the Azure Service Bus topology. This will tell NServiceBus to create the required queues, so you don't have to do it manually.

---

## Publishing Messages in NServiceBus

The next building block you need in any messaging system is the messages. Messages are C# classes or interfaces that contain meaningful data for the business process.

NServiceBus supports three types of messages:

- `ICommand` - sends a request to perform an action
- `IEvent` - communicates that something significant occurred
- `IMessage` - for messages that aren't commands or events (typically for replies in *request-response*)

Events can have more than one handler, while a command should have only one handler.

Let's create our first message contract:

```cs
using NServiceBus;

public class WorkoutCreated : IEvent
{
    public Guid Id [ get; set; ]
}
```

The `WorkoutCreated` message is an event that we will publish after creating a new `Workout`.

You can use the `IMessageSession` service to send messages from your controllers or Minimal API endpoints.

```cs{4,10}
app.MapPost("api/workouts", async (
    Workout workout,
    AppDbContext context,
<span class="code-line highlight-line">    IMessageSession messageSession) =>
{
    context.Add(workout);

    await context.SaveChangesAsync();

<span class="code-line highlight-line">    await messageSession.Publish(new  WorkoutCreated { Id = workout.Id });

    return Results.Ok(workout);
});
```

NServiceBus has some built-in validation when sending messages. You have to specify an `ICommand` when calling the `Send` method, or you will get an exception. Similarly, you have to specify an `IEvent` when calling the `Publish` method.

---

## Handling Messages With NServiceBus

Once you send a message, you need a way to handle it and run some business logic. To handle a message, you need to implement the `IHandleMessages` interface and specify which message you are handling.

Here's an implementation of the `WorkoutCreatedHandler`:

```cs
public class WorkoutCreatedHandler : IHandleMessages<WorkoutCreated>
{
    private readonly ILogger<WorkoutCreated> _logger;

    public WorkoutCreatedHandler(ILogger<WorkoutCreated> logger)
    {
        _logger = logger;
    }

    public async Task Handle(
        WorkoutCreated message,
        IMessageHandlerContext context)
    {
        logger.LogInformation("Processing workout - {Id}", message.Id);

        // Continue to process the message.
    }
}
```

Implementing `IHandleMessages<WorkoutCreated>` tells NServiceBus how to process the `WorkoutCreated` message when an endpoint receives it. This interface defines only one method: `Handle`.

The `Handle` method has an `IMessageHandlerContext` parameter, which allows you to send more messages. This can be helpful when implementing a choreographed saga. Processing one message triggers the next step in the chain until the entire process is completed.

---

## In Summary

In this week's issue, we discussed NServiceBus, a robust messaging framework for building distributed systems in .NET. You learned how to configure NServiceBus with the Azure Service Bus transport. We discussed the different message types in NServiceBus and how to publish and handle a message.

Building distributed systems is a complex endeavor, but NServiceBus simplifies many challenges. By embracing a message-driven architecture and leveraging NServiceBus's features, you'll be well-equipped to create resilient, scalable, and maintainable applications in the .NET ecosystem.

Further reading:

<SiteInfo
  name="NServiceBus Step-by-step: Getting started • Particular Docs"
  desc="In this 10-15 minute tutorial, you will learn how to set up a development machine for NServiceBus and create your very first messaging endpoint."
  url="https://go.particular.net/milanjovanovic/getting-started-with-nservicebus"
  logo="https://docs.particular.net/favicon.ico"
  preview="https://docs.particular.net/preview-image/795e481c8e1e4fcc8adb382ff2b1b398/tutorials/nservicebus-step-by-step/1-getting-started/index.png"/>

<SiteInfo
  name="Live coding your first NServiceBus system • Particular Software"
  desc="Watch me build an NServiceBus messaging system during this live coding session, mistakes and all. …"
  url="https://go.particular.net/milanjovanovic/live-coding-your-first-nservicebus-system"
  logo="https://docs.particular.net/favicon.ico"
  preview="https://particular.net/images/webinars/training-wheels.jpg"/>

<SiteInfo
  name="NServiceBus monitoring demo • NServiceBus • Particular Docs"
  desc="A self-contained demo solution that you can run to explore the monitoring features of the Particular Service Platform."
  url="https://go.particular.net/milanjovanovic/monitoring-demo"
  logo="https://docs.particular.net/favicon.ico"
  preview="https://docs.particular.net/preview-image/795e481c8e1e4fcc8adb382ff2b1b398/tutorials/monitoring-demo/index.png"/>

```component VPCard
{
  "title": "Messaging Made Easy With Azure Service Bus",
  "desc": "If you're working in a distributed system, you need to be able to communicate between multiple services. There are a few ways that you can implement this. Depending on your chosen approach, you can either introduce tight coupling between your services or stay loosely coupled. Loose coupling is an important quality in a distributed system. It will allow you to evolve your services independently. So how do you implement loosely coupled communication between services?",
  "link": "/explore/articles/milanjovanovic.tech/messaging-made-easy-with-azure-service-bus.md",
  "logo": "https://milanjovanovic.tech/profile_favicon.png",
  "background": "rgba(79,70,229,0,2)"
}
```

```component VPCard
{
  "title": "Implementing The Saga Pattern With Rebus And RabbitMQ",
  "desc": "Designing long-lived processes in a distributed environment is an interesting engineering challenge. And a well known pattern for solving this problem is a Saga. A Saga is a sequence of local transactions, where each local transaction updates the Saga state and publishes a message triggering the next step in the Saga. Sagas come in two forms: Orchestrated Choreographed With an orchestrated Saga, there's a central component responsible for orchestrating the individual steps. In a choreographed Saga, processes work independently but coordinate with each other using events.",
  "link": "/explore/articles/milanjovanovic.tech/implementing-the-saga-pattern-with-rebus-and-rabbitmq.md",
  "logo": "https://milanjovanovic.tech/profile_favicon.png",
  "background": "rgba(79,70,229,0,2)"
}
```

```component VPCard
{
  "title": "Orchestration vs Choreography",
  "desc": "More than 63%+ of organizations said in a Dzone survey that they are adopting Microservices for some or all of their applications. As more businesses adopt the use of Microservice architectures, we as developers have to become more skilled with Microservices communication. Working with distributed systems is both fun and challenging at the same time. One of those challenges is designing effective communication between services. More centralization or less centralization? More coupling or less coupling? More control or less control? These are only a few questions you need to answer.",
  "link": "/explore/articles/milanjovanovic.tech/orchestration-vs-choreography.md",
  "logo": "https://milanjovanovic.tech/profile_favicon.png",
  "background": "rgba(79,70,229,0,2)"
}
```

Hope this was helpful.

I'll see you next week!

---

<TagLinks />