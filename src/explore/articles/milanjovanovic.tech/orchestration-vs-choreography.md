---
lang: ko-KR
title: Orchestration vs Choreography
description: Article(s) > Orchestration vs Choreography
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
      content: Article(s) > Orchestration vs Choreography
    - property: og:description
      content: Orchestration vs Choreography
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/orchestration-vs-choreography.html
prev: /academics/system-design/articles/README.md
date: 2023-08-26
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_052.png
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
  name="Orchestration vs Choreography"
  desc="More than 63%+ of organizations said in a Dzone survey that they are adopting Microservices for some or all of their applications. As more businesses adopt the use of Microservice architectures, we as developers have to become more skilled with Microservices communication. Working with distributed systems is both fun and challenging at the same time. One of those challenges is designing effective communication between services. More centralization or less centralization? More coupling or less coupling? More control or less control? These are only a few questions you need to answer."
  url="https://milanjovanovic.tech/blog/orchestration-vs-choreography/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_052.png?imwidth=1920"/>

More than 63%+ of organizations said in a [<FontIcon icon="fas fa-globe"/>Dzone survey](https://dzone.com/articles/new-research-shows-63-percent-of-enterprises-are-a) that they are adopting **Microservices** for some or all of their applications.

As more businesses adopt the use of Microservice architectures, we as developers have to become more skilled with Microservices communication.

Working with **distributed systems** is both fun and challenging at the same time. One of those challenges is designing **effective communication** between services.

More centralization or less centralization? More coupling or less coupling? More control or less control?

These are only a few questions you need to answer.

In this week's newsletter, we will:

- Break down **Orchestration vs. Choreography**
- Understand key differences and **tradeoffs** between them
- Create a framework for deciding which approach to use

Let's dive in!

---

## What Are Microservices?

**Microservices** are a **software architecture** style where an application is built from small, autonomous services. Each microservice serves a distinct purpose and can be independently deployed.

You probably already know this, so this is a quick refresher.

![](https://milanjovanovic.tech/blogs/mnw_052/microservices_hell.png?imwidth=1920)

Here are the key tenets of Microservices:

- Independent development
- Deployment independence
- Technological freedom
- Scalability
- Resilience

A significant challenge is designing effective inter-service communication within this distributed environment.

Inside a Monolith system, communication happens through direct method calls. This is a straightforward approach that works well when all components live within a single process. However, this doesn't work with microservices.

---

## Orchestration - Command-driven Communication

**Orchestration** is a centralized approach to Microservices communication. One of the services takes on the role of the **orchestrator** and coordinates the communication between services.

Orchestration uses **command-driven** communication. The command communicates the intent of the action. The sender wants something to happen, and the recipient doesn't need to know who sent the command.

An example of orchestration can be a [**Saga implemented with RabbitMQ.**](/explore/articles/milanjovanovic.tech/implementing-the-saga-pattern-with-rebus-and-rabbitmq.md)

![](https://milanjovanovic.tech/blogs/mnw_052/orchestration.png?imwidth=2048)

It has some nice **benefits**:

- Simple
- Centralized
- Ease of troubleshooting
- Monitoring is straightforward

**Orchestration** is typically **simpler** to implement and maintain than choreography. Because there is a central coordinator, you can manage and monitor service interactions. This, in turn, improves troubleshooting, as you know where to look when something goes wrong.

The **drawbacks** of orchestration are:

- Tight coupling
- Single point of failure
- Difficulty adding, removing, or replacing microservices

---

## Choreography - Event-driven Communication

**Choreography** is a **decentralized** communication approach. Choreography uses **event-driven** communication - as opposed to orchestration, which uses commands.

An **event** is something that has happened in the past and is a fact. The sender does not know who will handle the event or what will happen after processing it.

I talked about events in-depth in the newsletter about [**publishing domain events.**](/explore/articles/milanjovanovic.tech/how-to-use-domain-events-to-build-loosely-coupled-systems.md)

![](https://milanjovanovic.tech/blogs/mnw_052/choreography.png?imwidth=2048)

The most important **benefits** of choreography are:

- Loose coupling
- Ease of maintenance
- Decentralized control
- Asynchronous communication

**Choreography** allows microservices to be **loosely coupled**, which means they can operate independently and asynchronously. This makes the system more scalable and resilient. A failure of one microservice won't necessarily affect microservices.

Of course, there are **downsides** to choreography:

- Complexity
- Monitoring is difficult
- Difficulty troubleshooting

It's more complex to implement and maintain than orchestration.

Effective monitoring is the biggest challenge from my experience.

---

## The Crossroads: Which One Should You Choose?

So, how do you know which one to pick for your system?

I always start with the requirements of the system I'm building. And then, I look at the pros and cons of orchestration vs. choreography. Here's a small framework to help you decide.

**Orchestration** excels when:

- You need to wait for the completion of intermediate steps (such as credit card payment confirmation)
- You need to make a conditional choice of subsequent steps
- The process must be carried out atomically (entirely or not at all)
- The process needs to be centralized in one place for monitoring

This also means you will need a central database managed by the orchestrator to handle all workflow-related state.

**Choreography** works best when:

- The process can rely on the input message without needing additional context
- Steps clearly follow one another
- Progress is made in one direction

You can benefit from increased flexibility (such as modifying individual steps in isolation) Unfortunately, choreography can make it difficult to trace, debug, or monitor the processes triggered by an event. And the larger the event stream is, the more challenging it becomes.

So, think carefully before opting for orchestration or choreography.

Both approaches bring their advantages but also downsides.

---

## Takeaway

**Orchestration** defines a sequence of steps that each microservice must follow. This is great for identifying and addressing complex service interdependencies. Another benefit is that business logic can be managed and monitored in one place.

**Choreography**, on the other hand, is a decentralized technique for microservices communication. Each service can operate independently while still being part of the larger architecture.

To decide which approach to use, you should observe your system and identify what you stand to gain or lose. Everything is a tradeoff.

There's also an **alternative approach** I want to mention.

You could go for a **hybrid approach** that integrates orchestration and choreography.

In a **hybrid approach**, you decide which communication technique to use for a specific workflow. Some workflows can benefit from orchestration, and others can benefit more from choreography.

Hope this was helpful.

I'll see you next week!

---

<TagLinks />