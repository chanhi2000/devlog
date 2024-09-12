---
lang: ko-KR
title: Why Clean Architecture Is Great For Complex Projects
description: Article(s) > Why Clean Architecture Is Great For Complex Projects
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
      content: Article(s) > Why Clean Architecture Is Great For Complex Projects
    - property: og:description
      content: Why Clean Architecture Is Great For Complex Projects
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/why-clean-architecture-is-great-for-complex-projects.html
prev: /academics/system-design/articles/README.md
date: 2023-07-29
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_048.png
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
  name="Why Clean Architecture Is Great For Complex Projects"
  desc="I've been using Clean Architecture for 6+ years on large scale applications serving thousands of customers and millions of requests. Today I want to talk about why it's a great approach for structuring your applications. I'm aware that Clean Architecture isn't a silver bullet, so I will discuss what types of systems can benefit from this architecture. Clean architecture isn't revolutionary. But it's prescriptive about how you should structure the code. It's an evolution of the layered architecture, focusing on the core domain and the direction of dependencies. All dependencies should point inwards, applying dependency inversion."
  url="https://milanjovanovic.tech/blog/why-clean-architecture-is-great-for-complex-projects/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_048.png?imwidth=1920"/>

<!-- TODO: 작성 -->

<!-- 
I've been using **Clean Architecture** for 6+ years on large-scale applications serving thousands of customers and millions of requests. Today I want to talk about why it's a great approach for structuring your applications.

I'm aware that Clean Architecture isn't a silver bullet, so I will discuss what types of systems can benefit from this architecture.

Clean architecture isn't revolutionary.

But it's **prescriptive** about how you should structure the code.

It's an evolution of layered architecture, focusing on the core domain and the direction of dependencies. All dependencies should point inwards, applying **dependency inversion**.

Here are some of the promises of Clean Architecture:

- Maintainability
- Testability
- Loose coupling
- Separation of concerns

It's **independent** of UI, databases, or external services - but you also need to be **pragmatic** (more on this later).

Let's dive in!

---

## What Is Clean Architecture?

Clean Architecture was created by <a href="https://en.wikipedia.org/wiki/Robert_C._Martin">**Robert C. Martin**</a>, aka Uncle Bob.

Clean Architecture is an approach to organizing a software system to **separate the concerns** of the various components.
Making the system easier to understand and maintain.

You can think about Clean Architecture as a domain-centric approach to organizing dependencies.

There are similar architectures that follow the same domain-centric idea.
You may know them as the Hexagonal and Onion architectures.
They are more or less interchangeable with each other.
And they all place the core domain at the center of the architecture.

This is my high-level interpretation of **Clean Architecture**:

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%273268%27%20height=%272006%27/%3e"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img srcSet="/blogs/mnw_048/clean_architecture.png?imwidth=3840 1x" src="/blogs/mnw_048/clean_architecture.png?imwidth=3840" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>
There are four layers inside:

- Domain
- Application
- Infrastructure
- Presentation

Let's see what should live inside each layer.

---

## Clean Architecture Layers

Here's a breakdown of what should live inside each **layer** of the **Clean Architecture**.

::: tabs

@tab:active Domain

- Contains the core business rules & logic
- It should be independent of other layers in the system
- Should be persistence ignorant - the persistence mechanism shouldn't influence your domain model
- **Examples:** Entities, Value Objects, Domain services, Domain events, Enums, Repository interfaces

@tab Application

- Contains the application use cases
- Contains application-specific business rules
- Orchestrates the domain entities to perform business operations
- It should be independent of external concerns (but it doesn't have to be)
- **Examples:** Application services, Commands, Queries, External service interfaces, Exceptions

@tab Infrastructure

- Contains anything related to external concerns
- Implements interfaces defined in the layers below
- **Examples:** PostgreSQL, Keycloak, AWS S3, RabbitMQ, Kafka, SendGrid

@tab Presentation

- Represents the entry point to the system
- Accepts data from the outside and passes it to the use cases
- Acts as the composition root for dependency injection
- **Examples:** ASP.NET Core, gRPC

:::

<a href="clean-architecture-folder-structure">**Here's an example**</a> of how to structure the Clean Architecture on a solution level.
You can also group related components together by feature.
It leads to better cohesion and is an excellent option if your project is more complex.

I also made a few videos covering the Clean Architecture project setup:

- <a href="https://youtu.be/tLk4pZZtiDY">**Clean Architecture walkthrough**</a> (100k+ views)
- <a href="https://youtu.be/fe4iuaoxGbA">**Clean Architecture project setup from scratch**</a> (40k+ views)

---

## Where Should You Use Clean Architecture?

**Clean Architecture** is very versatile and applies to various domains and systems.

But, you should play to its strengths and use it only when there's a tangible benefit.

I use the **Clean Architecture** when I want to:

- Apply Domain-Driven Design
- Solve complex business logic
- Build highly testable projects
- Enforce design policies via the architecture

If the above is true for your project, then Clean Architecture is an excellent option.

You should also consider the <a href="clean-architecture-and-the-benefits-of-structured-software-design">**benefits of Clean Architecture.**</a>

---

## The Case For Being Pragmatic

I try to be **pragmatic** when using **Clean Architecture**.

Applying what I like and having the freedom of "breaking" Clean Architecture if it will simplify things.

Can this be called Clean Architecture, then? No, not in the purest sense.

But, I still get **most** of the **benefits** of Clean Architecture.

Here's an example, when I'm applying CQRS in Clean Architecture to implement the use cases.

On the command (write) side, it's valuable to be independent of external concerns, so I will use repositories behind an interface. I can control the repository contract, and unit testing is straightforward.

But, on the query (read) side, I want to return the response as fast as possible. Creating an abstraction only adds indirection and reduces performance.

A better approach is to use the EF or Dapper in the handler and query the database. It's simple, fast, and you can use all the features offered by the ORM. You don't need a lot of complexity or abstractions on the query side.

I should call this approach <a href="/pragmatic-clean-architecture">**Pragmatic Clean Architecture**.</a>

---

## Closing Thoughts

**Clean Architecture** gives you a **standard** for organizing your solution.

You don't have to reinvent the wheel every time at the start of the project.

But, the layered structure and architectural constraints can increase the **complexity** of smaller projects.<br>So make sure your project is complex enough to apply Clean Architecture.

Another **caveat** of Clean Architecture is the danger of **over-engineering**.

Don't follow the principles religiously without considering the specific project requirements.<br>The overhead of maintaining so many layers and abstractions may not be justified.

Be **pragmatic** and try to make the best decision possible.

Sometimes that means straying from the paradigm.

Hope this was helpful.

I'll see you next week!

-->

---

<TagLinks />