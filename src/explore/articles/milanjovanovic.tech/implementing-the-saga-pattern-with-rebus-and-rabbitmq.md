---
lang: ko-KR
title: "Implementing The Saga Pattern With Rebus And RabbitMQ"
description: "Article(s) > Implementing The Saga Pattern With Rebus And RabbitMQ"
icon: iconfont icon-csharp
category: 
  - C#
  - DotNet
  - Erlang
  - RabbitMQ
  - Article(s)
tag: 
  - blog
  - milanjovanovic.tech
  - cs
  - c#
  - csharp
  - dotnet
  - erlang
  - erl
  - rabbitmq
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Implementing The Saga Pattern With Rebus And RabbitMQ"
    - property: og:description
      content: "Implementing The Saga Pattern With Rebus And RabbitMQ"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/implementing-the-saga-pattern-with-rebus-and-rabbitmq.html
prev: /programming/cs/articles/README.md
date: 2023-04-01
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_031.png
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
  "title": "RabbitMQ > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/erl-rabbitmq/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Implementing The Saga Pattern With Rebus And RabbitMQ"
  desc="Designing long-lived processes in a distributed environment is an interesting engineering challenge. And a well known pattern for solving this problem is a Saga. A Saga is a sequence of local transactions, where each local transaction updates the Saga state and publishes a message triggering the next step in the Saga. Sagas come in two forms: Orchestrated Choreographed With an orchestrated Saga, there's a central component responsible for orchestrating the individual steps. In a choreographed Saga, processes work independently but coordinate with each other using events."
  url="https://milanjovanovic.tech/blog/implementing-the-saga-pattern-with-rebus-and-rabbitmq/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_031.png"/>

Designing long-lived processes in a distributed environment is an interesting engineering challenge.

And a well known pattern for solving this problem is a [<FontIcon icon="fas fa-globe"/>**Saga**](https://microservices.io/patterns/data/saga.html).

A **Saga** is a sequence of local transactions, where each local transaction updates the **Saga** state and publishes a message triggering the next step in the **Saga**.

Sagas come in two forms:

- **Orchestrated**
- **Choreographed**

With an orchestrated Saga, there's a central component responsible for orchestrating the individual steps.

In a choreographed Saga, processes work independently but coordinate with each other using events.

In this week's issue, I'll show you how to create an **orchestrated Saga** using the **Rebus** library with **RabbitMQ** for message transport.

Let's dive in.

---

## Rebus Configuration

[<FontIcon icon="iconfont icon-github"/>`rebus-org/Rebus`](https://github.com/rebus-org/Rebus) is a free .NET “service bus”, and it's practical for implementing asynchronous messaging-based
communication between the components of an application.

Let's install the following libraries:

- `Rebus.ServiceProvider` for managing the **Rebus** instance
- `Rebus.RabbitMq` for **RabbitMQ** message transport
- `Rebus.SqlServer` for **SQL Server** state persistence

```pwsh
Install-Package Rebus.ServiceProvider -Version 8.4.0
Install-Package Rebus.RabbitMq -Version 8.0.0
Install-Package Rebus.SqlServer -Version 7.3.1
```

Inside of your **ASP.NET Core** application you will need the following configuration.

```cs
services.AddRebus(
    rebus => rebus
        .Routing(r =>
            r.TypeBased().MapAssemblyOf<Program>("newsletter-queue"))
        .Transport(t =>
            t.UseRabbitMq(
                configuration.GetConnectionString("RabbitMq"),
                inputQueueName: "newsletter-queue"))
        .Sagas(s =>
            s.StoreInSqlServer(
                configuration.GetConnectionString("SqlServer"),
                dataTableName: "Sagas",
                indexTableName: "SagaIndexes"))
        .Timeouts(t =>
            t.StoreInSqlServer(
                builder.Configuration.GetConnectionString("SqlServer"),
                tableName: "Timeouts"))
);

services.AutoRegisterHandlersFromAssemblyOf<Program>();
```

Unpacking the individual configuration steps:

- `Routing` - Configures messages to be routed by their type
- `Transport` - Configures the message transport mechanism
- `Sagas` - Configures the Saga persistence store
- `Timeouts` - Configures the timeouts persistence store

You also need to specify the queue name for sending and receiving messages.

`AutoRegisterHandlersFromAssemblyOf` will scan the specified assembly and automatically register the respective message handlers.

---

## Creating The Saga With Rebus

We're going to create a **Saga** for a newsletter onboarding process.

When a user subscribes to the newsletter we want to:

- Send a welcome email immediately
- Send a follow-up email after 7 days

The first step in creating the **Saga** is defining the data model by implementing `ISagaData`.
We'll keep it simple and store the `Email` for **correlation**, and add two flags for the distinct steps in our **Saga**.

```cs
public class NewsletterOnboardingSagaData : ISagaData
{
    public Guid Id { get; set; }
    public int Revision { get; set; }

    public string Email { get; set; }

    public bool WelcomeEmailSent { get; set; }

    public bool FollowUpEmailSent { get; set; }
}
```

Now we can define the `NewsletterOnboardingSaga` class by inheriting from the `Saga` class and implementing the `CorrelateMessages` method.

It's a best practice to use a unique value for correlation.
In our case this will be the `Email`.

You also configure how the `Saga` starts with `IAmInitiatedBy`, and the individual messages the `Saga` handles with `IHandleMessages`.

```cs
public class NewsletterOnboardingSaga :
    Saga<NewsletterOnboardingSagaData>,
    IAmInitiatedBy<SubscribeToNewsletter>,
    IHandleMessages<WelcomeEmailSent>,
    IHandleMessages<FollowUpEmailSent>
{
    private readonly IBus _bus;

    public NewsletterOnboardingSaga(IBus bus)
    {
        _bus = bus;
    }

    protected override void CorrelateMessages(
        ICorrelationConfig<NewsletterOnboardingSagaData> config)
    {
        config.Correlate<SubscribeToNewsletter>(m => m.Email, d => d.Email);

        config.Correlate<WelcomeEmailSent>(m => m.Email, d => d.Email);

        config.Correlate<FollowUpEmailSent>(m => m.Email, d => d.Email);
    }

    /* Handlers omitted for brevity */
}
```

---

## Message Types And Naming Conventions

There are two types of messages you send in a **Saga**:

- Commands
- Events

Commands instruct the receiving component what to do.<br/>Think: **verb, imperative.**

Events notify the Saga which process was just completed.<br/>Think: **what happened, past tense.**

---

## Saga Orchestration With Messages

The `NewsletterOnboardingSaga` starts by handling the `SubscribeToNewsletter` command, and publishes a `SendWelcomeEmail` command.

```cs
public async Task Handle(SubscribeToNewsletter message)
{
    if (!IsNew)
    {
        return;
    }

    await _bus.Send(new SendWelcomeEmail(message.Email));
}
```

The `SendWelcomeEmail` command is handled by a different component, which publishes a `WelcomeEmailSent` event when it completes.

In the `WelcomeEmailSent` handler we update the `Saga` state and publish a **deferred message** by calling `Defer`. Rebus will persist the `SendFollowUpEmail` command, and publish it when the **timeout expires**.

```cs
public async Task Handle(WelcomeEmailSent message)
{
    Data.WelcomeEmailSent = true;

    await _bus.Defer(TimeSpan.FromDays(3), new SendFollowUpEmail(message.Email));
}
```

Finally, the `SendFollowUpEmail` command is handled and we publish the `FollowUpEmailSent` event.

We update the `Saga` state again, and also call `MarkAsComplete` to complete the `Saga`.

```cs
public Task Handle(FollowUpEmailSent message)
{
    Data.FollowUpEmailSent = true;

    MarkAsComplete();

    return Task.CompletedTask;
}
```

Completing the `Saga` will delete it from the database.

---

## Handling Commands With Rebus

Here's how the `SendWelcomeEmail` command handler looks like.

```cs
public class SendWelcomeEmailHandler : IHandleMessages<SendWelcomeEmail>
{
    private readonly IEmailService _emailService;
    private readonly IBus _bus;

    public SendWelcomeEmailHandler(IEmailService emailService, IBus bus)
    {
        _emailService = emailService;
        _bus = bus;
    }

    public async Task Handle(SendWelcomeEmail message)
    {
        await _emailService.SendWelcomeEmailAsync(message.Email);

        await _bus.Reply(new WelcomeEmailSent(message.Email));
    }
}
```

The important thing to highlight here is that we're using the `Reply` method to send a message back. This will reply back to the endpoint specified as the return address on the current message.

---

## In Summary

**Sagas** are practical for implementing a long-lived process in a distributed system. Each business process is represented by a local transaction, and publishes a message to trigger the next step in the **Saga**.

Although **Sagas** are very powerful, they are also *complicated to develop, maintain and debug.*

We didn't cover a few important topics in this newsletter:

- Error handling
- Message retries
- Compensating transactions

I think you'll have some fun researching these on your own.

Take a look at the [**source code for the example used in this newsletter** (<FontIcon icon="iconfont icon-github"/>`m-jovanovic/newsletter-orchestrated-saga`)](https://github.com/m-jovanovic/newsletter-orchestrated-saga) if you want to learn more about implementing Sagas.

<SiteInfo
  name="m-jovanovic/newsletter-orchestrated-saga"
  desc="Orchestrated Saga example with Rebus, RabbitMQ, and SQL Server"
  url="https://github.com/m-jovanovic/newsletter-orchestrated-saga"
  logo="https://avatars.githubusercontent.com/u/34191235?v=4&size=40"
  preview="https://opengraph.githubassets.com/6a1a2cc18686882e5749a7efa8bbb3b49ef0fb239bad6576051fec3533d7b1f8/m-jovanovic/newsletter-orchestrated-saga"/>

If you have **Docker** installed, you should be able to run it without a problem and try it out.

Thank you for reading, and have an awesome Saturday.

---

<TagLinks />