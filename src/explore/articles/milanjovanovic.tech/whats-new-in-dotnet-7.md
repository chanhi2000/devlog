---
lang: ko-KR
title: What's New In .NET 7?
description: Article(s) > What's New In .NET 7?
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
      content: Article(s) > What's New In .NET 7?
    - property: og:description
      content: What's New In .NET 7?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/whats-new-in-dotnet-7.html
prev: /programming/cs/articles/README.md
date: 2022-11-12
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_011.png
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

---

<SiteInfo
  name="What's New In .NET 7?"
  desc="In this week's newsletter I want to highlight a few interesting things that are now available with the release of C# 11 and .NET 7. In case you missed it, .NET 7 was released November 8th."
  url="https://milanjovanovic.tech/blog/whats-new-in-dotnet-7/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_011.png"/>

In this week's newsletter I want to highlight a few interesting things that are now available with the release of **C# 11** and **.NET 7**.

In case you missed it, **.NET 7** was released November 8th.

There are many new features, and you can be sure I had a hard time choosing which ones to highlight.

Here's what we are going to cover:

[[toc]]

Let's see what the new features look like!

---

## Required Members

We can now define a class member as required by using the `required` keyword. It can be applied to a *field* or *property* and it tells the compiler these members must be initialized by all constructors or by the object initializer.

Why is this useful?

Before **C# 11**, the only way to enforce a property being set was through a constructor. If you used an object initializer you could bypass the constructor and not initialize some properties.

Here's how you can say that a property is required:

```cs
public class ContentCreator
{
    public required string Firstname { get; init; }
    public string? MiddleName { get; init; }
    public required string LastName { get; init; }
}
```

If you try to create a new `ContentCreator` instance without initializing
the `required` properties you get a compile error:

```cs
var creator = new ContentCreator
{
    FirstName = "Milan" // Error: No LastName
}
```

---

## Generic Attributes

You can now declare a *generic* class whose base class is `Attribute`.

Before **C# 11**, if you wanted to pass in a type as a parameter
to an `Attribute` you would need to pass it through the constructor:

```cs
public class TypedAttribute : Attribute
{
    public TypedAttribute(Type t) => Param = t;

    public Type Param { get; }
}
```

And here's how you would use it with the `typeof` operator:

```cs
[TypedAttribute(typeof(int))]
public int Method() => default;

```

Using the generic attributes feature, you can now define it like this:

```cs
public class TypedAttribute<T> : Attribute { ... }
```

Now, we can specify the type parameter as a generic argument:

```cs
[TypedAttribute<int>()]
public int Method() => default;
```

---

## Static Abstract Members in Interfaces

This is a very interesting feature that allows abstracting of static operations. An example of this would be operators.

```cs
public interface IMonoid<TSelf> where TSelf : IMonoid<TSelf>
{
    public static abstract TSelf operator +(TSelf a, TSelf b);

    public static abstract TSelf Zero { get; }
}
```

How can we use the `IMonoid` interface?

It may be confusing at first, since the members are virtual and there is no instance to call the virtual members on. The solution is to use generics and let the compiler infer the rest.

Here's a simple example:

```cs
T AddAll<T>(params T[] elements) where T : IMonoid<T>
{
    T result = T.Zero;

    foreach (var element in elements)
    {
         result += element;
    }

    return result;
}
```

If you want to learn more, check out the docs on [<FontIcon icon="fa-brands fa-microsoft"/>static abstract interface methods](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/tutorials/static-virtual-interface-members#static-abstract-interface-methods) and [<FontIcon icon="fa-brands fa-microsoft"/>generic math](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/tutorials/static-virtual-interface-members#generic-math).

---

## File Keyword

With the new `file` keyword you can define a type whose scope and visibility is restricted to the file in which it is declared.

```cs
file class HiddenClass
{
}
```

This feature is practical when used inside of source generators, to avoid collisions when naming generated types.

But you may be able to find a use for it in your application.

---

## LINQ Order and OrderDescending

The new `Order` and `OrderDescending` methods allow us to sort an `IEnumerable`, which simplifies the code for sorting.

Here's an example of ordering an array:

```cs
var array = new[] { 19, 91, 21 };

var arrayAsc = array.Order();

var arrayDesc = array.OrderDescending();
```

I want to highlight that `IQueryable` also supports the new methods.

---

## Will You Upgrade to .NET 7?

**.NET 7** is not an LTS (Long Term Support) release, and will be in support until May 2024, with **.NET 8** releasing in November 2023.

Here are a few reasons why you should consider upgrading:

- Major performance improvements
- New features in **.NET 7**
- New features in **EF Core 7**
- Easier migration to **.NET 8**

I will be moving some of my new projects from **.NET 6** to **.NET 7**.

And I will also upgrade all of my YouTube content to **.NET 7**.

---

<TagLinks />