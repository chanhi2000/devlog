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

<!-- TODO: 작성 -->

<!-- 
More than 63%+ of organizations said in a <a href="https://dzone.com/articles/new-research-shows-63-percent-of-enterprises-are-a">Dzone survey</a> that they are adopting **Microservices** for some or all of their applications.

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

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27900%27%20height=%27468%27/%3e"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img srcSet="/blogs/mnw_052/microservices_hell.png?imwidth=1080 1x, /blogs/mnw_052/microservices_hell.png?imwidth=1920 2x" src="/blogs/mnw_052/microservices_hell.png?imwidth=1920" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>

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

An example of orchestration can be a <a href="implementing-the-saga-pattern-with-rebus-and-rabbitmq">**Saga implemented with RabbitMQ.**</a>

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271021%27%20height=%27600%27/%3e"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img srcSet="/blogs/mnw_052/orchestration.png?imwidth=1080 1x, /blogs/mnw_052/orchestration.png?imwidth=2048 2x" src="/blogs/mnw_052/orchestration.png?imwidth=2048" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>

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

I talked about events in-depth in the newsletter about <a href="how-to-use-domain-events-to-build-loosely-coupled-systems">**publishing domain events.**</a>

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271021%27%20height=%27600%27/%3e"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img srcSet="/blogs/mnw_052/choreography.png?imwidth=1080 1x, /blogs/mnw_052/choreography.png?imwidth=2048 2x" src="/blogs/mnw_052/choreography.png?imwidth=2048" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>

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

## takeaway"><a href="#takeaway">Takeaway

**Orchestration** defines a sequence of steps that each microservice must follow. This is great for identifying and addressing complex service interdependencies. Another benefit is that business logic can be managed and monitored in one place.

**Choreography**, on the other hand, is a decentralized technique for microservices communication. Each service can operate independently while still being part of the larger architecture.

To decide which approach to use, you should observe your system and identify what you stand to gain or lose. Everything is a tradeoff.

There's also an **alternative approach** I want to mention.

You could go for a **hybrid approach** that integrates orchestration and choreography.

In a **hybrid approach**, you decide which communication technique to use for a specific workflow. Some workflows can benefit from orchestration, and others can benefit more from choreography.

Hope this was helpful.

I'll see you next week!

-->

---

<TagLinks />