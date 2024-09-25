---
lang: ko-KR
title: "Monolith to Microservices: How a Modular Monolith Helps"
description: "Article(s) > Monolith to Microservices: How a Modular Monolith Helps"
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
      content: "Article(s) > Monolith to Microservices: How a Modular Monolith Helps"
    - property: og:description
      content: "Monolith to Microservices: How a Modular Monolith Helps"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/monolith-to-microservices-how-a-modular-monolith-helps.html
prev: /programming/cs/articles/README.md
date: 2023-09-23
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_056.png
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
  name="Monolith to Microservices: How a Modular Monolith Helps"
  desc="You start building a beautiful monolith system. Maybe a modular monolith. The system grows, and requirements are ever-changing. Slowly, cracks begin to appear in the system. This could be for organizational reasons and distributing the work across a team. Or it could be because of scaling issues and performance bottlenecks. You begin the process of evaluating the benefits and tradeoffs of possible solutions. At last, you come to a decision. It's time to migrate parts of the system to individual services. So, how do we approach this migration from monolith to microservices?"
  url="https://milanjovanovic.tech/blog/monolith-to-microservices-how-a-modular-monolith-helps/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_056.png"/>

You start building a beautiful monolith system. Maybe a modular monolith.

The system grows over time, and requirements are ever-changing. Slowly, cracks begin to appear in the system.

This could be for organizational reasons and distributing the work across a team. Or it could be because of scaling issues and performance bottlenecks.

You begin evaluating the possible solutions, and the benefits and tradeoffs of each one. At last, you come to a decision.

It's time to migrate parts of the system to individual (micro)services.

So, how do we approach this migration from monolith to microservices?

That is the topic of this week's newsletter.

Let's dive in!

---

## Decoupling Using Bounded Contexts

The first step in moving from a monolith to microservices is identifying the bounded contexts. Because they represent cohesive parts of the domain that are candidates for extraction.

One solution is to identify [<FontIcon icon="fas fa-globe"/>bounded contexts](https://martinfowler.com/bliki/BoundedContext.html) using the domain-driven design strategic modeling.

Bounded contexts define the explicit boundaries between modules and separate the responsibilities. This is one of the biggest challenges when migrating to microservices. [<FontIcon icon="fa-brands fa-microsoft"/>Identifying good boundaries](https://learn.microsoft.com/en-us/azure/architecture/microservices/model/domain-analysis) between modules ensures microservices are narrowly focused on one problem domain.

Defining boundaries is also easier in a monolith because you aren't working with a distributed system. [<FontIcon icon="iconfont icon-gcp"/>Refactoring bad boundaries](https://cloud.google.com/architecture/microservices-architecture-refactoring-monoliths) is less risky, and you have more freedom to "get it right".

![Bounded contexts.](https://milanjovanovic.tech/blogs/mnw_056/bounded_contexts.png?imwidth=2048)

And the size of the bounded context shouldn't worry you. Instead, focus on [<FontIcon icon="fas fa-globe"/>service boundaries](https://go.particular.net/right-sized-services).

The next problem you need to solve is coupling. Coupling is manifested in two ways:

- Database dependencies
- Communication between modules

You can solve these problems from the start by building a modular monolith. But I'll also explain the guiding principles you can use to solve coupling.

---

## How a Modular Monolith Solves Coupling

A [modular monolith](/explore/articles/milanjovanovic.tech/modular-monolith-communication-patterns#what-is-a-modular-monolith.md) is a catchy name for a monolith system built from a few bounded contexts (modules) and following a set of principles to control coupling. Each module contains a cohesive set of functionalities and is isolated from other modules in the system. The isolation refers to database dependencies and inter-module communication.

![Modular monolith.](https://milanjovanovic.tech/blogs/mnw_056/modular_monolith.png?imwidth=2048)

You can think of a module as a distinct application within the system. A module has its own domain, entities, use cases, database tables. The modules are deployed together as a single executable application. But they are otherwise independent.

You can apply different architectural approaches to each module, like [Clean Architecture](/explore/articles/milanjovanovic.tech/pragmatic-clean-architecture/README.md).

So I mentioned that you need to reduce the coupling between modules.

Here are two principles to solve database coupling:

- Modules can't share tables in the database
- Modules can't directly query the database tables of other modules

Sharing database tables leads to a high degree of coupling, and this is exactly what you are trying to avoid. You can isolate the data for each module on a logical level using schemas or physically with different databases.

A module should expose a public API that other modules can call. This public API is the entry point into the module. And this is the only way for modules to communicate.

Communication between modules can be [synchronous](/explore/articles/milanjovanovic.tech/modular-monolith-communication-patterns#synchronous-communication-with-method-calls.md) using method calls, or [asynchronous](/explore/articles/milanjovanovic.tech/modular-monolith-communication-patterns#asynchronous-communication-with-messaging.md) using a message bus.

My preferred approach is asynchronous communication using messaging. It's loosely coupled and makes the transition to microservices easier.

---

## Adding a Message Broker To The System

To implement asynchronous communication between modules, you can introduce a message broker. But you don't need to introduce a full-blown message broker from the start.

You can implement messaging between modules using an abstraction like [<FontIcon icon="fas fa-globe"/>MassTransit](https://masstransit.io) while abstracting away the transport mechanism.

MassTransit has an in-memory transport that works well inside a single process. It's very fast. But it isn't durable, and you can lose messages if the bus is stopped.

You only need to configure a different transport mechanism when introducing a real message broker. But you don't need to change your messaging code.

![Modular monolith with a queue.](https://milanjovanovic.tech/blogs/mnw_056/modular_monolith_queue.png?imwidth=2048)

What is the purpose of messaging inside a modular monolith?

Designing your system like this makes the modules loosely coupled and independent. The price you pay in increased complexity at the start is justified as the project matures.

---

## Extracting Modules to Microservices

We decided to move from a monolith system to microservices. Since we built our system in a modular way, the migration comes down to extracting a module into a new process.

You should introduce a [reverse proxy](/explore/articles/milanjovanovic.tech/implementing-an-api-gateway-for-microservices-with-yarp.md) in front of your services to route incoming traffic. This will hide the implementation details of the microservices system from client applications.

The new microservice needs to connect to the message bus, but we don't need to change anything in our code. Using messaging for communication between modules simplifies the migration process. This might remind you of [<FontIcon icon="fas fa-globe"/>event-driven architecture](https://go.particular.net/break-that-big-ball-of-mud).

If you implement inter-module communication using method calls, you must replace that implementation with HTTP calls over the network. Because you're now building a distributed system, and the previous implementation using method calls will not work. You also need to consider authentication, fault tolerance...

![Microservices with extracting modules.](https://milanjovanovic.tech/blogs/mnw_056/extracting_modules.png?imwidth=2048)

Extracting modules from the monolith system leads to replacing all the functionalities of the old system with new microservices. This process of migrating to microservices follows the [<FontIcon icon="fa-brands fa-microsoft"/>strangler fig pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig).

---

## Closing Thoughts

The biggest blocker for moving from a monolith to microservices is coupling. Coupling is a change preventer. So, this is the first thing you need to tackle.

You need to solve coupling at the database level and between components in the code. Building the system in a modular way can prevent these problems from the start.

Which is why a Modular monolith is an excellent approach.

You can identify bounded contexts in the system and use them as the boundaries in the monolith. And getting the boundaries right is easier in a monolith.

Migrating to microservices comes down to extracting the modules into individual services.

Of course, you still need to think about security and fault tolerance because you now have a distributed system.

Talking about architecture in abstract terms can be difficult to grasp, but it's important when discussing conceptual solutions.

I'll show you a practical Modular monolith implementation soon to complete the circle.

Until then, I hope this was valuable.

See you next week!

---

<TagLinks />