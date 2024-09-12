---
lang: ko-KR
title: What Is a Modular Monolith?
description: Article(s) > What Is a Modular Monolith?
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
      content: Article(s) > What Is a Modular Monolith?
    - property: og:description
      content: What Is a Modular Monolith?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/what-is-a-modular-monolith.html
prev: /academics/system-design/articles/README.md
date: 2024-03-09
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_080.png
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
  name="What Is a Modular Monolith?"
  desc="Modular monoliths blend the simplicity and robustness of traditional monolithic applications with the flexibility and scalability of microservices. Today, I'll introduce you to the modular monolith architecture and why you should know about it."
  url="https://milanjovanovic.tech/blog/what-is-a-modular-monolith/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_080.png"/>

<!-- TODO: 작성 -->

<!-- 
I've worked with many different software architectures over the years.

There's one that clearly stands out for its benefits: **Modular Monolith architecture**.

Modular monoliths blend the simplicity and robustness of traditional monolithic applications with the flexibility and scalability of microservices. I'm tempted to say they bring together the best of both worlds.

The modular monolith architecture allows you to work in a unified codebase with clearly defined boundaries and independent modules. You can have a high development velocity without the complexity of distributed systems.

Today, I'll introduce you to the modular monolith architecture and why you should know about it.

---

## What is a Modular Monolith?

A **modular monolith** is an architectural pattern that structures the application into independent modules or components with well-defined boundaries. The modules are split based on logical boundaries, grouping together related functionalities. This approach significantly improves the cohesion of the system.

The modules are loosely coupled, which further promotes modularity and separation of concerns. Modules communicate through a public API, and you can learn more about this in my article on <a href="modular-monolith-communication-patterns">modular monolith communication patterns</a>.

But what are the benefits of a modular design?

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%272934%27%20height=%271554%27/%3e"><img alt="Modular monolith." src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img alt="Modular monolith." srcSet="/blogs/mnw_080/modular_monolith.png?imwidth=3840 1x" src="/blogs/mnw_080/modular_monolith.png?imwidth=3840" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>

If we take the example of an apartment booking system illustrated above. During the holiday season, the system is expecting a traffic spike. The bookings and payments modules need to scale so they can be deployed independently. At the end of the holiday season, they can be merged back into a single deployment. Modular monoliths give you this kind of flexibility.

---

## Modular Architecture

Modular monoliths introduce a few important technical challenges that we will need to solve.

To achieve a modular architecture, the modules:

- Must be independent and interchangeable
- Must be able to provide the required functionality
- Must have a well-defined interface exposed to other modules

Is it possible for a module to be completely independent? Not really. That would mean it's not integrated with other modules. We want loosely coupled modules and to keep the number of dependencies low. We can use a few techniques to keep the modules independent, and having good <a href="modular-monolith-data-isolation">data isolation</a> is one example.

Another factor you need to consider is how strong the dependency is. If two modules are very "chatty", you might have incorrectly defined the boundaries. You should consider merging these modules together.

Remember, a module is a grouping of related functionalities accessed via a <a href="modular-monolith-communication-patterns">well-defined interface</a>.

Having a modular architecture allows you to easily extract modules into separate services.

---

## Monolith First

Microservices have become the most popular architectural pattern in recent years, and for good reason. Microservices offer many benefits like clearly defined service boundaries, independent deployments, independent scalability, and much more.

However, most teams would be better off starting with a monolith application.

A monolith is an architectural pattern where all components are deployed as a single physical deployment unit.

Here's an interesting quote from Martin Fowler:

> You shouldn't start a new project with microservices, even if you're sure your application will be big enough to make it worthwhile.

— *<a href="https://martinfowler.com/bliki/MonolithFirst.html">Martin Fowler</a>*

And I wholeheartedly agree with this. Better yet, consider starting with a modular monolith.

Even Google is jumping on board the modular monolith trend in their recent research paper, <a href="https://dl.acm.org/doi/pdf/10.1145/3593856.3595909">Towards Modern Development of Cloud Applications</a>.

Here are the five main challenges Google identified with microservices:

- **Performance** - The overhead of serializing data and sending it across the network has a noticeable impact on performance.
- **Correctness** - It's difficult to reason about the correctness of a distributed system when there are many interactions between components.
- **Management** - We have to manage multiple different applications, each with its release schedule.
- **Frozen APIs** - Once an API is established, it becomes hard to change without breaking any existing API consumers.
- **Development speed** - Making a change in one microservice may affect many other microservices, which requires carefully planning deployments.

When you factor in the complexity of distributed systems, starting with a modular monolith becomes increasingly compelling. I also recommend reading about the <a href="https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing">fallacies of distributed computing</a> if you're unfamiliar with them.

Well-defined, in-process components (modules) can be an excellent stepping stone to out-of-process components (services).

---

## Benefits of a Modular Monolith

Modular monoliths have many benefits. So, I want to highlight a few that I consider important:

- **Simplified deployment** - Unlike microservices, which require complex deployment strategies, a modular monolith can be deployed as a single unit.
- **Improved performance** - Communication between modules occurs in-process. This means that there's no network latency or data serialization/deserialization overhead.
- **Enhanced development velocity** - There's a single codebase to manage, simplifying debugging and the overall development experience.
- **Easier transaction management** - Managing transactions in a distributed system is very challenging. Modular monoliths simplify this since modules can share the same database.
- **Lower operational complexity** - Modular monoliths reduce the operational overhead that comes with managing and deploying a distributed microservices system.
- **Easier transition to Microservices** - A well-structured modular monolith offers a clear path to a microservices architecture.
You can gradually <a href="monolith-to-microservices-how-a-modular-monolith-helps">extract modules into separate services</a> when the need arises.

---

## Modular Monolith vs Microservices

The biggest difference between modular monoliths and microservices is how they're deployed. Microservices elevate the logical boundaries inside a modular monolith into physical boundaries.

Microservices give you a clear strategy for modularity and decomposing the bounded contexts. But, you can also achieve this without building a distributed system. The problem is people end up using microservices to enforce code boundaries.

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%272828%27%20height=%271592%27/%3e"><img alt="Modular monolith vs. microservices." src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img alt="Modular monolith vs. microservices." srcSet="/blogs/mnw_080/modular_monolith_vs_microservices.png?imwidth=3840 1x" src="/blogs/mnw_080/modular_monolith_vs_microservices.png?imwidth=3840" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>
Instead, you can build a modular monolith to get most of the same benefits.
Modular monoliths give you high cohesion, low coupling, data encapsulation, focus on business functionalities, and more.

Microservices give you all that, plus independent deployments, independent scalability, and the ability to use different technology stacks per service.

> Choose microservices for the benefits, not because your monolithic codebase is a mess.

— *<a href="https://twitter.com/simonbrown">Simon Brown</a>*

---

## Next Steps

Modular monoliths offer a compelling way to structure applications. They balance the benefits of well-organized code, scalability potential, and a smooth path for transitioning to microservices if needed. If you want to improve the maintainability and adaptability of your software, consider exploring modular monoliths.

Want to dive deeper into modular monoliths? Check out these resources:

- <a href="modular-monolith-communication-patterns">Modular Monolith Communication Patterns</a>
- <a href="modular-monolith-data-isolation">Modular Monolith Data Isolation</a>
- <a href="monolith-to-microservices-how-a-modular-monolith-helps">Monolith to Microservices: How a Modular Monolith Helps</a>
- <a href="https://youtu.be/Xo3rsiZYsJQ">Modular Monoliths: How To Build One & Lessons Learned</a>
- <a href="https://youtu.be/z3piPJ7x4WU">How to Structure a Modular Monolith Project in .NET</a>
- <a href="https://youtu.be/5dilYMii9T4">Getting Started with Modular Monoliths in .NET</a>
- <a href="/modular-monolith-architecture">Modular Monolith Architecture course</a>

That's all for today. Stay awesome, and I'll see you next week.

-->

---

<TagLinks />