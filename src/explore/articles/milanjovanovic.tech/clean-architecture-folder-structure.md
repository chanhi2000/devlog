---
lang: ko-KR
title: How To Approach Clean Architecture Folder Structure
description: Article(s) > How To Approach Clean Architecture Folder Structure
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
      content: Article(s) > How To Approach Clean Architecture Folder Structure
    - property: og:description
      content: How To Approach Clean Architecture Folder Structure
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/clean-architecture-folder-structure.html
prev: /academcis/system-designarticles/README.md
date: 2022-09-24
isOriginal: false
cover: https://www.milanjovanovic.tech/blog-covers/mnw_004.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "System Design > Article(s)",
  "desc": "Article(s)",
  "link": "/academcis/system-design/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

<SiteInfo
  name="How To Approach Clean Architecture Folder Structure"
  desc="Clean Architecture is a popular approach to structuring your .NET application. It's a layered architecture and splits into four layers: Domain, Application, Infrastructure, and Presentation. Each of the layers is typically one project in your solution. How do we create this in our .NET solutions?"
  url="https://milanjovanovic.tech/blog/clean-architecture-folder-structure/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://www.milanjovanovic.tech/blog-covers/mnw_004.png"/>

**Clean Architecture** is a popular approach to structuring your application.

It's a layered architecture that splits the project into four layers:

[[toc]]

Each of the layers is typically one project in your solution.

Here's a visual representation of the **Clean Architecture**:

![](https://milanjovanovic.tech/blogs/mnw_004/clean_architecture.png?imwidth=3840)

How do we create this in our .NET solutions?

---

## Domain Layer

The **Domain layer** sits at the core of the **Clean Architecture**. Here we define things like: entities, value objects, aggregates, domain events, exceptions, repository interfaces, etc.

Here is the folder structure I like to use:

```
📁 Domain
|__ 📁 DomainEvents
|__ 📁 Entities
|__ 📁 Exceptions
|__ 📁 Repositories
|__ 📁 Shared
|__ 📁 ValueObjects
```

You can introduce more things here if you think it's required.

One thing to note is that the **Domain layer** is not allowed to reference other projects in your solution.

---

## Application Layer

The **Application layer** sits right above the **Domain layer**. It acts as an orchestrator for the **Domain layer**, containing the most important use cases in your application.

You can structure your use cases using services or using commands and queries.

I'm a big fan of the **CQRS** pattern, so I like to use the command and query approach.

Here is the folder structure I like to use:

```
📁 Application
|__ 📁 Abstractions
    |__ 📁 Data
    |__ 📁 Email
    |__ 📁 Messaging
|__ 📁 Behaviors
|__ 📁 Contracts
|__ 📁 Entity1
    |__ 📁 Commands
    |__ 📁 Events
    |__ 📁 Queries
|__ 📁 Entity2
    |__ 📁 Commands
    |__ 📁 Events
    |__ 📁 Queries
```

In the `Abstractions` folder, I define the interfaces required for the **Application layer**. The implementations for these interfaces are in one of the upper layers.

For every entity in the **Domain layer**, I create one folder with the commands, queries, and events definitions.

---

## Infrastructure Layer

The **Infrastructure layer** contains implementations for external-facing services.

What would fall into this category?

- Databases - PostgreSQL, MongoDB
- Identity providers - Auth0, Keycloak
- Emails providers
- Storage services - AWS S3, Azure Blob Storage
- Message queues - Rabbit MQ

Here is the folder structure I like to use:

```
📁 Infrastructure
|__ 📁 BackgroundJobs
|__ 📁 Services
    |__ 📁 Email
    |__ 📁 Messaging
|__ 📁 Persistence
    |__ 📁 EntityConfigurations
    |__ 📁 Migrations
    |__ 📁 Repositories
    |__ #️⃣ ApplicationDbContext.cs
|__ 📁 ...
```

I place my `DbContext` implementation here if I'm using **EF Core**.

It's not uncommon to make the Persistence folder its project. I frequently do this to have all database facing-code inside of one project.

---

## Presentation Layer

The **Presentation layer** is the entry point to our system. Typically, you would implement this as a Web API project.

The most important part of the **Presentation layer** is the `Controllers`, which define the API endpoints in our system.

Here is the folder structure I like to use:

```
📁 Presentation
|__ 📁 Controllers
|__ 📁 Middlewares
|__ 📁 ViewModels
|__ 📁 ...
|__ #️⃣ Program.cs

```

Sometimes, I will move the **Presentation layer** away from the actual Web API project. I do this to isolate the `Controllers` and enforce stricter constraints. You don't have to do this if it is too complicated for you.

---

## Is This The Only Way?

You don't have to follow the folder structure I proposed to the T. **Clean Architecture** is very flexible, and you can experiment with it and structure it the way you like.

Do you like more granularity? Create more specific projects.

Do you dislike a lot of projects? Separate concerns using folders.

I'm here to give you options to explore. But it's up to you to decide what's best.

---

<TagLinks />