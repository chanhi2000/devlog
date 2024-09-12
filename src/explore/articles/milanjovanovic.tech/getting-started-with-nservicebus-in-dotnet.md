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

<!-- TODO: 작성 -->

<!-- 
NServiceBus is a feature-rich messaging framework supporting many different message transports.
It's developed and maintained by <a href="https://particular.net/">Particular Software.</a>
And it simplifies the process of building complex distributed systems across various cloud-based queueing technologies.

The basic building blocks of NServiceBus are messages and endpoints.
A message contains the required information to execute a business operation.
Endpoints are logical entities that send and receive messages.

And now let's see how to get started with NServiceBus, from installation and setup to building your first NServiceBus endpoint.

In this week's newsletter, you will learn how to:

- Configure an endpoint to use Azure Service Bus
<li>Send and publish messages using `IMessageSession`
<li>Handle messages with NServiceBus

Let's dive in!

---

## what-is-nservicebus"><a href="#what-is-nservicebus">What is NServiceBus?

<a href="https://go.particular.net/milanjovanovic">NServiceBus</a> is a messaging framework and platform that simplifies building reliable, scalable, and maintainable distributed systems.
It's designed to address the challenges that arise when building applications that are distributed across multiple servers.

One of NServiceBus's foundational principles is its embrace of a message-driven architecture.
In this model, components communicate by sending and receiving messages.
Messages are the fundamental units of communication, representing commands, events, or data that services exchange.

Why is this significant?

Message-driven architectures offer several advantages:

- Asynchronous communication
<li>Loose coupling
<li>Reliability

NServiceBus supports the powerful publish/subscribe (pub/sub) messaging pattern.
This pattern allows services to publish events and subscribe to events of interest.
When a service publishes an event, all interested subscribers receive a copy of the event.
This is a key feature for building event-driven architectures, where services react to and process events in response to various actions or changes in the system.

---

## configuring-the-nservicebus-endpoint"><a href="#configuring-the-nservicebus-endpoint">Configuring the NServiceBus Endpoint

NServiceBus uses the concept of an *endpoint* to send and receive messages.
It's a logical component that communicates with other components.
You define your message handlers and sagas inside of an endpoint.

Let's start by installing the `NServiceBus` NuGet package:

```pwsh
Install-Package NServiceBus.Extensions.Hosting

```

Now you can configure an *endpoint* to use <a href="https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview">Azure Service Bus</a>
to send messages:

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

The call to `UseNServiceBus` tells the host to use NServiceBus.
Inside the callback, you can configure the endpoint that will start when the host runs.

One more important aspect is calling `EnableInstallers` to set up the Azure Service Bus topology.
This will tell NServiceBus to create the required queues, so you don't have to do it manually.

---

## publishing-messages-in-nservicebus"><a href="#publishing-messages-in-nservicebus">Publishing Messages in NServiceBus

The next building block you need in any messaging system is the messages.
Messages are C# classes or interfaces that contain meaningful data for the business process.

NServiceBus supports three types of messages:

- `ICommand` - sends a request to perform an action
<li>`IEvent` - communicates that something significant occurred
<li>`IMessage` - for messages that aren't commands or events (typically for replies in *request-response*)

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

```cs
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

NServiceBus has some built-in validation when sending messages.
You have to specify an `ICommand` when calling the `Send` method, or you will get an exception.
Similarly, you have to specify an `IEvent` when calling the `Publish` method.

---

## handling-messages-with-nservicebus"><a href="#handling-messages-with-nservicebus">Handling Messages With NServiceBus

Once you send a message, you need a way to handle it and run some business logic.
To handle a message, you need to implement the `IHandleMessages` interface and specify which message you are handling.

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

Implementing `IHandleMessages<WorkoutCreated>` tells NServiceBus how to process the `WorkoutCreated` message when an endpoint receives it.
This interface defines only one method: `Handle`.

The `Handle` method has an `IMessageHandlerContext` parameter, which allows you to send more messages.
This can be helpful when implementing a choreographed saga.
Processing one message triggers the next step in the chain until the entire process is completed.

---

## in-summary"><a href="#in-summary">In Summary

In this week's issue, we discussed NServiceBus, a robust messaging framework for building distributed systems in .NET.
You learned how to configure NServiceBus with the Azure Service Bus transport.
We discussed the different message types in NServiceBus and how to publish and handle a message.

Building distributed systems is a complex endeavor, but NServiceBus simplifies many challenges.
By embracing a message-driven architecture and leveraging NServiceBus's features,
you'll be well-equipped to create resilient, scalable, and maintainable applications in the .NET ecosystem.

Further reading:

- <a href="https://go.particular.net/milanjovanovic/getting-started-with-nservicebus">NServiceBus step-by-step tutorial</a>
<li><a href="https://go.particular.net/milanjovanovic/live-coding-your-first-nservicebus-system">Live coding an NServiceBus system</a>
<li><a href="https://go.particular.net/milanjovanovic/monitoring-demo">NServiceBus monitoring demo</a>
<li><a href="messaging-made-easy-with-azure-service-bus">Messaging with Azure Service Bus</a>
<li><a href="implementing-the-saga-pattern-with-rebus-and-rabbitmq">Implementing the Saga pattern</a>
<li><a href="orchestration-vs-choreography">Orchestration vs Choreography</a>

Hope this was helpful.

I'll see you next week!

-->

---

<TagLinks />