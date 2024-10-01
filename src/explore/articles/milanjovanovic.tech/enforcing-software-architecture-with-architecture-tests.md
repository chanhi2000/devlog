---
lang: ko-KR
title: "Enforcing Software Architecture With Architecture Tests"
description: "Article(s) > Enforcing Software Architecture With Architecture Tests"
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
      content: "Article(s) > Enforcing Software Architecture With Architecture Tests"
    - property: og:description
      content: "Enforcing Software Architecture With Architecture Tests"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/enforcing-software-architecture-with-architecture-tests.html
prev: /programming/cs/articles/README.md
date: 2023-05-06
isOriginal: false
author: Milan Jovanović
cover: https://milanjovanovic.tech/blog-covers/mnw_036.png
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
  name="Enforcing Software Architecture With Architecture Tests"
  desc="Software architecture is a blueprint for how you should structure your system. You can follow this blueprint strictly, or you can give yourself varying levels of freedom. But when deadlines are tight, and you start cutting corners, that beautiful software architecture you built crumbles like a house of cards. How can you enforce your software architecture? By writing architecture tests. Architecture tests are automated tests that verify the structure and design of your code. You can use them to enforce your software architecture and the direction of dependencies of your projects."
  url="https://milanjovanovic.tech/blog/enforcing-software-architecture-with-architecture-tests/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_036.png"/>

**Software architecture** is a blueprint for how you should structure your system. You can follow this blueprint strictly, or you can give yourself varying levels of freedom.

But when deadlines are tight, and you start cutting corners, that beautiful software architecture you built crumbles like a house of cards.

How can you **enforce** your **software architecture**?

By writing **architecture tests**.

**Architecture tests** are automated tests that verify the structure and design of your code.

You can use them to enforce your software architecture and the direction of dependencies of your projects.

In this week's issue I'll explain how to:

- Write architecture tests
- Enforce architecture
- Enforce design rules

Let's dive in!

---

## Writing Architecture Tests

You write **architecture tests** the same as any unit test in your application. There's an excellent library for writing architecture tests that already implements the boilerplate code we need to start writing tests.

We're going to use the `NetArchTest.Rules` library for writing architecture tests.

First, you have to install the NuGet package:

```pwsh
Install-Package NetArchTest.Rules
```

And now you can use it to write rules in your test project.

The starting point for writing architecture tests is the static `Types` class, which you can use to load a set of types.

Once you have loaded your types you can further filter them to find a more specific set of types.

Some of the available filtering methods:

- `ResideInNamespace`
- `AreClasses`
- `AreInterfaces`
- `HaveNameStartingWith`
- `HaveNameEndingWith`

Finally, when you are satisfied with your selection, you can write the rule you want to enforce by calling `Should` or `ShouldNot` and applying the condition you want to check.

Here's an example checking that all classes in the domain assembly are sealed:

```cs
var result = Types
  .InAssembly(DomainAssembly)
  .That()
  .AreClasses()
  .Should()
  .BeSealed()
  .GetResult();

Assert.True(result.IsSuccessful);
```

---

## Enforcing Architecture Rules

**Architecture tests** are particularly useful to **enforce software architecture rules** in a layered architecture or **Modular Monolith**.

Let's take the example of the Clean architecture:

- Domain should not have any dependencies
- Application should not depend on Infrastructure
- Infrastructure should depend on Application and Domain

Here's how you can write tests for enforcing architecture rules.

::: tabs

@tab:active Domain should not have any dependencies

```cs
var result = Types
  .InAssembly(DomainAssembly)
  .ShouldNot()
  .HaveDependencyOnAny("Application", "Infrastructure")
  .GetResult();

Assert.True(result.IsSuccessful);
```

@tab Application should not depend on Infrastructure

```cs
var result = Types
  .InAssembly(AplicationAssembly)
  .Should()
  .NotHaveDependencyOn("Infrastructure")
  .GetResult();

Assert.True(result.IsSuccessful);
```

@tab Infrastructure should depend on Application and Domain

How the `NetArchTest.Rules` library works is by scanning the imported namespaces of your types.

Because of this, writing negative conditions like in the previous two examples is straightforward.

But writing positive conditions has to be scoped to a more specific set of types.

For example, we can validate this dependency by checking that all repositories must have a dependency on the `Domain` namespace.

```cs
var result = Types
  .InAssembly(InfrastructureAssembly)
  .HaveNameEndingWith("Repository")
  .Should()
  .HaveDependencyOn("Domain")
  .GetResult();

Assert.True(result.IsSuccessful);
```

:::

---

## Enforcing Design Rules

Another valuable **use case** for **architecture tests** is **enforcing design rules** in your application.

Design rules are more specific than project references, and focus on the implementation details of your classes.

Here are some **design rules** that you can enforce:

- Services must be internal
- Entities and Value objects must be sealed
- Controllers can't depend on repositories directly
- Command (or query) handlers must follow a naming convention

The possibilities are endless, and it's up to you how many design rules you want to enforce.

Here's how you can write tests for enforcing design rules.

::: tabs

@tab:active Command handlers must end with `CommandHandler`

```cs
var result = Types
    .InAssembly(ApplicationAssembly)
    .That()
    .ImplementInterface(typeof(ICommandHandler))
    .Should()
    .HaveNameEndingWith("CommandHandler")
    .GetResult();

Assert.True(result.IsSuccessful);
```

@tab Controllers can't directly reference repositories

```cs
var result = Types
    .InAssembly(ApiAssembly)
    .That()
    .HaveNameEndingWith("Controller")
    .ShouldNot()
    .HaveDependencyOn("Infrastructure.Repositories")
    .GetResult();

Assert.True(result.IsSuccessful);
```

:::

---

## Takeaway

**Architecture tests** are an easy way to **enforce software architecture** and design rules with automated tests.

One of the best investments you can make as a software engineer is writing automated tests. You write the tests once, and use them to verify your system forever. Granted, you also have to maintain the tests over time as your system grows.

Manually enforcing software architecture with pair programming and constant PR reviews is:

- Error prone
- Time consuming
- Not cost effective

**Architecture tests** really shine here, since you can write them quickly and reduce the cost of enforcing your software architecture rules to zero.

Thanks for reading.

Hope that was helpful!

---

<TagLinks />