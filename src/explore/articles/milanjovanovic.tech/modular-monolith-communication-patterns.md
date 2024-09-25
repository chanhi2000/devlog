---
lang: ko-KR
title: Modular Monolith Communication Patterns
description: Article(s) > Modular Monolith Communication Patterns
icon: fas fa-pen
category: 
  - Design
  - System
  - Article(s)
tag: 
  - blog
  - milanjovanovic.tech
  - system
  - design
head:
  - - meta:
    - property: og:title
      content: Article(s) > Modular Monolith Communication Patterns
    - property: og:description
      content: Modular Monolith Communication Patterns
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/modular-monolith-communication-patterns.html
prev: /academics/system-design/articles/README.md
date: 2023-08-05
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_049.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "System Design > Article(s)",
  "desc": "Article(s)",
  "link": "/academics/system-design/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Modular Monolith Communication Patterns"
  desc="Modular monoliths are becoming more popular in the software engineering community. The allure of Microservices is becoming less compelling. We also have seasoned veterans of our industry saying you should reconsider: > You shouldn't start a new project with microservices, even if you're sure your application will be big enough to make it worthwhile. — Martin Fowler Modular monoliths give you the logical architecture of Microservices without the operational complexity. You can safely determine the boundaries between modules. And refactoring is straightforward and less risky. They can also be easily migrated into Microservices if you decide to do so. I've built and maintained several Modular monolith systems in the past years."
  url="https://milanjovanovic.tech/blog/modular-monolith-communication-patterns/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_049.png?imwidth=1920"/>

**Modular monoliths** are becoming more popular in the software engineering community.

The allure of **Microservices** is becoming less compelling. We also have seasoned veterans of our industry saying you should reconsider:

> You shouldn't start a new project with microservices, even if you're sure your application will be big enough to make it worthwhile.
>
>> *[<FontIcon icon="fas fa-globe"/>Martin Fowler](https://martinfowler.com/bliki/MonolithFirst.html)*

Modular monoliths give you the **logical architecture** of Microservices without the operational complexity. You can safely determine the boundaries between modules. And refactoring is straightforward and less risky. They can also be easily migrated into Microservices if you decide to do so.

I've built and maintained several large **Modular monolith** systems in the past years.

In this week's newsletter, I want to focus on the **communication patterns** in the Modular monolith architecture.

But first, let me explain what is a **Modular monolith**.

---

## What Is a Modular Monolith?

Here's one definition of what a **Modular monolith** is:

> A Modular Monolith is a software design approach in which a monolith is designed with an emphasis on interchangeable (and potentially reusable) modules.

The problem with most monolith systems is that they become **tightly coupled** over time. Components are deeply intertwined. Making a change in one component impacts many others. Introducing new features is difficult and error-prone.

Modular monoliths aim to solve these problems.

![](https://milanjovanovic.tech/blogs/mnw_049/modular_monolith_diagram.png?imwidth=3840)

A Modular monolith consists of many **loosely coupled** modules. Modules represent cohesive sets of functionalities. Modules are also **independent** of each other.

Here are a few examples:

- Payments module
- Shipping module
- Booking module
- Reviews module

If this concept reminds you of Microservices, that's because it should.

Microservices represent self-contained services encapsulating a set of functionalities of the larger system, much like modules in a Modular monolith.

For a Modular monolith to be loosely coupled, you need to solve how modules will communicate.

Modules cannot reference each other directly except through their public APIs.

There are two widely used communication patterns. Both have pros and cons and a set of tradeoffs that you need to understand.

---

## Synchronous Communication With Method Calls

The first and easiest communication pattern is simple **method calls** between modules. Method calls are **synchronous** and very fast because they're in memory.

Module A calls a method declared on the **public API** of Module B and waits until it receives a result.

Each module exposes a **public API**, which can be an `interface` in .NET.

The module will implement this interface internally and hide any implementation details. You can use the `internal` keyword to make the implementation inaccessible outside the module.

Modules depend on the interfaces at compile-time.
At runtime, **dependency injection** will provide the respective implementation.

![](https://milanjovanovic.tech/blogs/mnw_049/modular_monolith_sync_communication.png?imwidth=3840)

The benefits of this approach are:

- Speed of in-memory calls
- Easy to implement
- No indirection

But, the drawback of this approach is **strong coupling**.

**Synchronous communication** means that the modules will be tightly coupled. If one of the modules is unavailable, it will affect any dependent modules. You can introduce a retry mechanism, but this only goes so far.

---

## Asynchronous Communication With Messaging

The second communication pattern is asynchronous **messaging** between modules.

Module A sends a message to the message broker in a fire-and-forget fashion. Module B subscribes to relevant messages and handles them accordingly.

Modules don't need to know about each other, but they do need to know about the message contracts.

**Message contracts** are the **public API** of a module in this scenario.

![](https://milanjovanovic.tech/blogs/mnw_049/modular_monolith_async_communication.png?imwidth=3840)

The benefits of this approach are:

- High availability
- Loose coupling

**Asynchronous communication** gives us loose coupling because modules communicate using messages. Module B doesn't need to be available for Module A to send a message.

The obvious drawback of this approach is **increased complexity**.

We're introducing a **message broker** to the system. This is another infrastructure component we have to manage. It's also a single point of failure. If the message broker fails, so does communication between the modules.

You can prevent message loss by storing messages in an [**Outbox**](/explore/articles/milanjovanovic.tech/outbox-pattern-for-reliable-microservices-messaging.md) before publishing them. We can always send the messages again from the database in case of a message broker failure.

---

## Takeaway

**Synchronous communication** between modules is easy to implement, and it's performant. But it comes at the cost of tight coupling between modules.

**Asynchronous communication** using a message broker is loosely coupled. But it's more complex to implement.

So which **communication pattern** should you be using?

It depends.

Asynchronous communication can help you build **loosely coupled** and **independent** modules. Migrating a **Modular monolith** using messaging into a **distributed system** is much easier.

You extract a module into its own deployment unit. And the communication between modules remains the same. Because you are using messaging, you don't need to reimplement anything.

**Synchronous method calls** are an excellent choice to increase development velocity and reduce operational complexity.

I'll let the software architect in you decide.

Thanks for reading.

And stay awesome!

---

<TagLinks />