---
lang: ko-KR
title: Records, Anonymous Types, and Non-Destructive Mutation
description: Article(s) > Records, Anonymous Types, and Non-Destructive Mutation
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
      content: Article(s) > Records, Anonymous Types, and Non-Destructive Mutation
    - property: og:description
      content: Records, Anonymous Types, and Non-Destructive Mutation
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/records-anonymous-types-non-destructive-mutation.html
prev: /programming/cs/articles/README.md
date: 2022-09-10
isOriginal: false
cover: https://www.milanjovanovic.tech/blog-covers/mnw_002.png
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
  name="Records, Anonymous Types, and Non-Destructive Mutation"
  desc="Today, I'm going to share some fascinating things you can do with records and anonymous types. I will introduce you to the concept of non-destructive mutation. And I will talk about when and why we might want to use this C# language feature."
  url="https://milanjovanovic.tech/blog/records-anonymous-types-non-destructive-mutation/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://www.milanjovanovic.tech/blog-covers/mnw_002.png"/>

Today, I'm going to share some fascinating things you can do with records and anonymous types. I will introduce you to the concept of non-destructive mutation. And I will talk about when and why we might want to use this C# language feature.

---

## What Is a Record?

With **C# 9** we can use **records** that are a new reference type. **C# 10** introduced record structs so that you can define records as value types. Records are distinct from classes in that record types use value-based equality.

Let's see how we would define a `record`:

```cs
public record Food(string Name, double Price);
```

This way of declaring a `record` is called a positional record. The constructor we have defined here is called the **primary constructor**.

The `Name` and `Price` properties are init only properties. This means they can only be set in the constructor or using a property initializer.

Since our properties are init only, is there any way to change their value?

---

## Non-Destructive Mutation Using The With Expression

We said we can't modify the properties of our `record`, because the properties are init only. However, we can use the `with` expression (introduced in **C# 9**) to create a new instance of our record with modified values.

Let's see how we would use the `with` expression:

```cs
var banana = new Food("🍌", 1.95);

var bananaOnSale = banana with
{
    Price = 0.99
};
```

It's important to highlight two things here:

- The original banana instance remains unchanged
- The `with` expression creates a new record instance with only the `Price` property modified

I mentioned Anonymous Types in the title, so let me show you something interesting you can do with them.

---

## Anonymous Types And Non-Destructive Mutation

Did you know that you can use the `with` expression with anonymous types?

Just a reminder that the `with` expression is available from **C# 9** and later.

Let's create an anonymous type:

```cs
var apple = new
{
    Name = "🍎",
    Price = 1.21
};
```

This is how we can modify it using the with expression:

```cs
var orange = apple with
{
    Name = "🍊"
};
```

And again the same rules apply:

- The original apple instance remains unchanged
- The with expression creates a new anonymous type instance with only the Name property modified

I found this feature useful in LINQ method chains.

For example, loading an anonymous type from the database where some properties have a default value. You can then use this feature to calculate the values for these properties in memory.

---

<TagLinks />