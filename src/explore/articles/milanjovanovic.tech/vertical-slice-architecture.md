---
lang: ko-KR
title: Vertical Slice Architecture
description: Article(s) > Vertical Slice Architecture
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
      content: Article(s) > Vertical Slice Architecture
    - property: og:description
      content: Vertical Slice Architecture
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/vertical-slice-architecture.html
prev: /programming/cs/articles/README.md
date: 2023-11-04
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_062.png
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
  name="Vertical Slice Architecture"
  desc="Layered architectures are the foundation of many software systems. However, layered architectures organize the system around technical layers. And the cohesion between layers is low. What if you wanted to organize the system around features instead? This is where Vertical Slice Architecture comes in."
  url="https://milanjovanovic.tech/blog/vertical-slice-architecture/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_062.png"/>

<!-- TODO: 작성 -->

<!-- 
Layered architectures are the foundation of many software systems. However, layered architectures organize the system around technical layers. And the cohesion between layers is low.

What if you wanted to organize the system around features instead?

Minimize coupling between unrelated features and maximize coupling in a single feature.

Today I want to talk about **Vertical Slice Architecture**, which does precisely that.

---

## The Problem With Layered Architectures

Layered architectures organize the software system into layers or tiers. Each of the layers is typically one project in your solution. Some of the popular implementations are N-tier architecture or Clean architecture.

Layered architectures focus on separating the concerns of the various components. This makes it easier to understand and maintain the software system. And there are many benefits of <a href="clean-architecture-and-the-benefits-of-structured-software-design">**structured software design,**</a> such as maintainability, flexibility, and loose coupling.

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%273268%27%20height=%272006%27/%3e"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img srcSet="/blogs/mnw_062/clean_architecture.png?imwidth=3840 1x" src="/blogs/mnw_062/clean_architecture.png?imwidth=3840" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>

However, layered architectures also impose constraints or rigid rules on your system. The direction of dependencies between layers is pre-determined.

For example, in Clean Architecture:

- Domain should have no dependencies
- Application layer can reference the Domain
- Infrastructure can reference both Application and Domain
- Presentation can reference both Application and Domain

You end up having high coupling inside a layer and low coupling between layers. This doesn't mean layered architectures are bad. But it does mean you will have many abstractions between individual layers. And more abstractions mean increased complexity because there are more components to maintain.

---

## What is Vertical Slice Architecture?

I first heard about <a href="https://www.jimmybogard.com/vertical-slice-architecture">Vertical Slice Architecture</a> from Jimmy Bogard. He's also the creator of some popular open-source libraries like <a href="https://github.com/jbogard/MediatR">MediatR</a> and <a href="https://github.com/AutoMapper/AutoMapper">Automapper.</a>

Vertical Slice Architecture was born from the pain of working with layered architectures. They force you to make changes in many different layers to implement a feature.

Let's imagine what adding a new feature looks like in a layered architecture:

- Updating the domain model
- Modifying validation logic
- Creating a use case with MediatR
- Exposing an API endpoint from a controller

The cohesion is low because you are creating many files in different layers.

Vertical slices take a different approach:

> Minimize coupling between slices, and maximize coupling in a slice.

Here's how you can visualize vertical slices:

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271920%27%20height=%271080%27/%3e"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img srcSet="/blogs/mnw_062/vertical_slice_architecture.png?imwidth=1920 1x, /blogs/mnw_062/vertical_slice_architecture.png?imwidth=3840 2x" src="/blogs/mnw_062/vertical_slice_architecture.png?imwidth=3840" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>

All the files for a single use case are grouped inside one folder. So, the cohesion for a single use case is very high. This simplifies the development experience. It's easy to find all the relevant components for each feature since they are close together.

---

## Implementing Vertical Slices

If you're building an API, the system already breaks down into commands (POST/PUT/DELETE) and queries (GET). By splitting the requests into commands and queries, you're getting the benefits of the <a href="cqrs-pattern-with-mediatr">**CQRS pattern.**</a>

Vertical slices narrowly focus on a single feature. This allows you to treat each use case separately and tailor the implementation to the specific requirements. One vertical slice can use EF Core to implement a GET request. Another vertical slice can use Dapper with raw SQL queries.

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271920%27%20height=%271080%27/%3e"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img srcSet="/blogs/mnw_062/vertical_slices.png?imwidth=1920 1x, /blogs/mnw_062/vertical_slices.png?imwidth=3840 2x" src="/blogs/mnw_062/vertical_slices.png?imwidth=3840" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>

Another benefit of implementing vertical slices like this is:

> New features only add code, you're not changing shared code and worrying about side effects.

However, vertical slices have their own set of challenges. Because you are implementing much of the business logic inside a single use case, you need to be able to spot code smells. As the use case grows, it can end up doing too much. You will have to refactor the code by <a href="refactoring-from-an-anemic-domain-model-to-a-rich-domain-model">**pushing logic to the domain.**</a>

---

## Solution Structure With REPR Pattern

Layered architectures, such as Clean architecture, organize the solution across layers. This results in a <a href="clean-architecture-folder-structure">**folder structure grouped by technical concerns.**</a>

Vertical slice architecture, on the other hand, organizes the code around features or use cases.

An interesting approach to structuring APIs around features is using the <a href="https://deviq.com/design-patterns/repr-design-pattern">REPR pattern.</a> It stands for Request-EndPoint-Response. This aligns perfectly with the idea of vertical slices. You can achieve this with the MediatR library, for example.

The REPR pattern defines that web API endpoints should have three components:

- Request
- Endpoint
- Response

Here's an example solution structure in .NET. You'll notice the `Features` folder, which contains the vertical slices. Each vertical slice implements one API request (or use case).

```
🔗 RunTracker.API
|__ 📁 Database
|__ 📁 Entities
    |__ #️⃣ Activity.cs
    |__ #️⃣ Workout.cs
    |__ #️⃣ ...
|__ 📁 Features
    |__ 📁 Activities
        |__ 📁 GetActivity
            |__ #️⃣ ActivityResponse.cs
            |__ #️⃣ GetActivityEndpoint.cs
            |__ #️⃣ GetActivityQuery.cs
            |__ #️⃣ GetActivityQueryHandler.cs
        |__ 📁 CreateActivity
            |__ #️⃣ CreateActivity.cs
                |__ #️⃣ CreateActivity.Command.cs
                |__ #️⃣ CreateActivity.Endpoint.cs
                |__ #️⃣ CreateActivity.Handler.cs
                |__ #️⃣ CreateActivity.Validator.cs
    |__ 📁 Workouts
    |__ 📁 ...
|__ 📁 Middleware
|__ 📄 appsettings.json
|__ 📄 appsettings.Development.json
|__ #️⃣ Program.cs
```

A few more libraries for implementing the REPR pattern:

- <a href="https://github.com/FastEndpoints/FastEndpoints">FastEndpoints</a>
- <a href="https://github.com/ardalis/ApiEndpoints">ApiEndpoints</a>

---

## Next Steps

Some of you may not like the idea of grouping all the files related to a feature in a single folder.

However, there's a lot of value in grouping by features in general. You don't have to implement vertical slices. But you can apply this concept to your domain by grouping files around aggregates, for example. This is the approach I show in <a href="pragmatic-clean-architecture">**Pragmatic Clean Architecture.**</a>

I made a video about <a href="https://youtu.be/msjnfdeDCmo">**Vertical Slice Architecture,**</a> showing how to implement the concepts discussed in today's issue. Check it out <a href="https://youtu.be/msjnfdeDCmo">**here.**</a>

Thanks for reading, and stay awesome!

-->

---

<TagLinks />