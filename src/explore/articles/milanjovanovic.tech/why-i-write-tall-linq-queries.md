---
lang: ko-KR
title: Why I Write My LINQ Queries Tall, Not Wide
description: Article(s) > Why I Write My LINQ Queries Tall, Not Wide
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
      content: Article(s) > Why I Write My LINQ Queries Tall, Not Wide
    - property: og:description
      content: Why I Write My LINQ Queries Tall, Not Wide
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/why-i-write-tall-linq-queries.html
prev: /programming/cs/articles/README.md
date: 2022-09-03
isOriginal: false
cover: https://www.milanjovanovic.tech/blog-covers/mnw_001.png
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
  name="Why I Write My LINQ Queries Tall, Not Wide"
  desc="In this newsletter, I'll show you how you can write tall LINQ queries to improve readability and make your code easier to maintain. We are going to start from a wide LINQ query, and see how we can refactor it into a tall LINQ query."
  url="https://milanjovanovic.tech/blog/why-i-write-tall-linq-queries/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://www.milanjovanovic.tech/blog-covers/mnw_001.png"/>

<!-- TODO: 작성 -->

<!-- 
---

## Wishing You a Warm Welcome

First, I want to welcome you to the first edition of **Milan's .NET Weekly** newsletter.

I hope that this newsletter can become a positive force in the .NET community. To bring many of us together so that we can all continue learning and improving.

With that out of the way, let's get into .NET!

---

## The Problem With Wide LINQ

Let's consider the following LINQ expression from a code style perspective.

I call this a wide LINQ expression because it stretches horizontally across the entire screen.

```cs
dbContext.Animals.Where(animal => animal.HasBigEars)
    .OrderBy(animal => animal.IsDangerous).Select(
        animal => (animal.Id, animal.Name)).ToList();

```

- It is difficult to read.
- It is difficult to reason about.
- It is difficult to extend or maintain.

To improve this, I created a simple rule that you can follow:

> When writing LINQ, try to go tall, not wide.

---

## How to Write Tall LINQ

So how do we write tall LINQ expressions?

I'm going to rewrite the previous expression, to improve it.

Try to follow the *one dot per line rule*:

```cs
dbContext
    .Animals
    .Where(animal => animal.HasBigEars)
    .OrderBy(animal => animal.IsDangerous)
    .Select(animal => (animal.Id, animal.Name))
    .ToList();

```

Is the new version easier to read? **Yes**, very much so.

It is easier to understand what each expression does, and how it feeds into the next one in the chain.

If you are working in a team, try to propose this as a coding standard (if it isn't one already).<br>You will see that over time this will make a noticeable difference.

-->

---

<TagLinks />