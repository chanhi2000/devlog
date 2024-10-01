---
lang: ko-KR
title: Screaming Architecture
description: Article(s) > Screaming Architecture
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
      content: Article(s) > Screaming Architecture
    - property: og:description
      content: Screaming Architecture
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/screaming-architecture.html
prev: /academics/system-design/articles/README.md
date: 2024-08-24
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_104.png
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
  name="Screaming Architecture"
  desc="If you were to glance at the folder structure of your system, could you tell what the system is about? Your architecture should communicate what problems it solves. This approach is called sreaming architecture."
  url="https://milanjovanovic.tech/blog/screaming-architecture/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_104.png"/>

<!-- TODO: 작성 -->

<!-- 
If you were to glance at the folder structure of your system, could you tell what the system is about?
And here's a more interesting question.
Could a new developer on your team easily understand what the system does based on the folder structure?

Your architecture should communicate what problems it solves.
Organizing your system around use cases leads to a structure aligned with the business domain.
This approach is called **screaming architecture**.

<a href="https://blog.cleancoder.com/uncle-bob/2011/09/30/Screaming-Architecture.html">Screaming architecture</a> is a term coined by Robert Martin (Uncle Bob).
He argues that a software system's structure should communicate what the system is about.
He draws a parallel between looking at a blueprint for a building, where you can tell the purpose of the building based on the blueprint.

In this article, I want to show some practical examples and discuss the benefits of screaming architecture.

---

## a-use-case-driven-approach"><a href="#a-use-case-driven-approach">A Use Case Driven Approach

A use case represents a specific interaction or task that a user wants to achieve within your system.
It encapsulates the business logic required to fulfill that task.
A use case is a high-level description of a user's goal.
For example, "reserving an apartment" or "purchasing a ticket".
It focuses on the *what* of the system's behavior, not the *how*.

When you look at the folder structure and source code files of your system:

- Do they scream: Apartment Booking System or Ticketing System?
<li>Or do they scream ASP.NET Core?

Here's an example of a folder structure organized around technical concerns:

```pwsh
📁 Api/
|__ 📁 Controllers
|__ 📁 Entities
|__ 📁 Exceptions
|__ 📁 Repositories
|__ 📁 Services
    |__ #️⃣ ApartmentService.cs
    |__ #️⃣ BookingService.cs
    |__ ...
|__ 📁 Models
```

Somewhere inside these folders, we'll find concrete classes that contain the system's behavior.
You'll notice that the cohesion with this folder structure is low.

How does screaming architecture help?

A use case driven approach will place the system's use cases as the top-level concept.
I also like to group related use cases into a top-level feature folder.
Inside a use case folder, we may find technical concepts required to implement it.

<a href="vertical-slice-architecture">**Vertical slice architecture**</a> also approaches this from a similar perspective.

```pwsh
📁 Api/
|__ 📁 Apartments
    |__ 📁 ReserveApartment
    |__ ...
|__ 📁 Bookings
    |__ 📁 CancelBooking
    |__ ...
|__ 📁 Payments
|__ 📁 Reviews
|__ 📁 Disputes
|__ 📁 Invoicing
```

The use case driven folder structure helps us better understand user needs and aligns development efforts with business goals.

---

## Screaming Architecture Benefits

The benefits of organizing our system around use cases are:

- Improved cohesion since related use cases are close together
- High coupling for a single use case and its related use cases
- Low coupling between unrelated use cases
- Easier navigation through the solution

---

## Bounded Contexts and Vertical Slices

We have many techniques for discovering the high-level modules within our system.
For example, we could use <a href="https://eventstorming.com/">event storming</a> to explore the system's use cases.
Domain exploration happens before we write a single line of code.

The next step is decomposing the larger problem domain into smaller sub-domains and later bounded contexts.
This gives us loosely coupled high-level modules that we can translate into code.

![Bounded contexts.](https://milanjovanovic.tech/blogs/mnw_104/bounded_contexts.png?imwidth=3840)

The overarching idea here is thinking about cohesion around functionalities.
We want to organize our system so that the cohesion between the components is high.
Bounded contexts, vertical slices, and screaming architecture are complementary concepts.

Here's a screaming architecture example for this system.
Let's say the `Ticketing` module uses <a href="clean-architecture-folder-structure">**Clean Architecture**</a> internally.
But we can still organize the system around feature folders and use cases.
An alternative approach could be organizing around <a href="vertical-slice-architecture-structuring-vertical-slices">**vertical slices**</a>, resulting in a less nested folder structure.

```pwsh
📁 Modules/
|__ 📁 Attendance
    |__ ...
|__ 📁 Events
    |__ ...
|__ 📁 Ticketing
    |__ 📁 Application
        |__ 📁 Carts
            |__ 📁 AddItemToCart
            |__ 📁 ClearCart
            |__ 📁 GetCart
            |__ 📁 RemoveItemFromCart
        |__ 📁 Orders
            |__ 📁 SubmitOrder
            |__ 📁 CancelOrder
            |__ 📁 GetOrder
        |__ 📁 Payments
            |__ 📁 RefundPayment
        |__ ...
    |__ 📁 Domain
        |__ 📁 Customers
        |__ 📁 Orders
        |__ 📁 Payments
        |__ 📁 Tickets
        |__ ...
    |__ 📁 infrastructure
        |__ 📁 Authentication
        |__ 📁 Customers
        |__ 📁 Database
        |__ 📁 Orders
        |__ 📁 Payments
        |__ 📁 Tickets
        |__ ...
|__ 📁 Users
    |__ ...
```

The example above is a small part of the system I built inside of <a href="/modular-monolith-architecture">**Modular Monolith Architecture**</a>.

---

## Takeaway

**Screaming Architecture** isn't just a catchy phrase, it's an approach that can profoundly impact how you build software.
By organizing your system around use cases, you align your codebase with the core business domain.
Your system exists to solve the business domain problems.

Remember, the goal is to create a system that communicates its purpose through its structure.
Embrace a use case-driven approach, break down complex domains into bounded contexts.
Build a system that truly "screams" about the problems it solves.

If you want to explore these powerful ideas further, check out <a href="/pragmatic-clean-architecture">**Pragmatic Clean Architecture**</a>.
I share my entire framework for building robust applications from the ground up and organizing the system around use cases.

That's all for today.

See you next week.

-->

---

<TagLinks />