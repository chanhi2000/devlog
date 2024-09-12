---
lang: ko-KR
title: "How To Apply Functional Programming In C#"
description: "Article(s) > How To Apply Functional Programming In C#"
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
      content: "Article(s) > How To Apply Functional Programming In C#"
    - property: og:description
      content: "How To Apply Functional Programming In C#"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/how-to-apply-functional-programming-in-csharp.html
prev: /programming/cs/articles/README.md
date: 2023-03-04
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_027.png
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
  name="How To Apply Functional Programming In C#"
  desc="Although C# is an object-oriented programming language, it received many new functional features in recent versions. To mention just a few of these features: - Pattern matching - Switch expressions - Records You're probably already doing functional programming without even knowing it. Do you use LINQ? If you do, then you're doing functional programming. Because LINQ is a functional .NET library."
  url="https://milanjovanovic.tech/blog/how-to-apply-functional-programming-in-csharp/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_027.png"/>

<!-- TODO: 작성 -->

<!-- 
Although **C#** is an **object-oriented programming** language, it received many new functional features in recent versions.

To mention just a few of these features:

- Pattern matching
<li>Switch expressions
<li>Records

You're probably already doing **functional programming** without even knowing it.

Do you use LINQ?
If you do, then you're doing functional programming.
Because LINQ is a functional .NET library.

In today's issue, I will show you how to **refactor** some **imperative code** with **functional programming**.

Let's dive in.

---

## benefits-of-functional-programming"><a href="#benefits-of-functional-programming">Benefits Of Functional Programming

Before we take a look at some code, let's see what are the **benefits** of using **functional programming**:

- Emphasis on immutability
<li>Emphasis on function purity
<li>Code is easier to reason about
<li>Less prone to bugs and errors
<li>Ability to compose functions and create higher-order functions
<li>Easier to test and debug

From my experience, I think functional programming is more enjoyable once you get used to it.
Starting out, it feels strange because your old object-oriented programming habits will kick in.
But after a while, **functional programming** feels easier to work with than imperative code.

---

## starting-with-imperative-code"><a href="#starting-with-imperative-code">Starting With Imperative Code

**Imperative programming** is the most basic programming approach.
We describe a step-by-step process to execute a program.
It's easier for beginners to reason with imperative code by following along with the steps in the process.

Here's an example of an `EmailValidator` class written with imperative code:

```cs
public class EmailValidator
{
    private const int MaxLength = 255;

    public (bool IsValid, string? Error) Validate(string email)
    {
        if (string.IsNullOrEmpty(email))
        {
            return (false, "Email is empty");
        }

        if (email.Length > MaxLength)
        {
            return (false, "Email is too long");
        }

        if (email.Split('@').Length != 2)
        {
            return (false, "Email format is invalid");
        }

        if (Uri.CheckHostName(email.Split('@')[1]) == UriHostNameType.Unknown)
        {
            return (false, "Email domain is invalid");
        }

        return (true, null);
    }
}

```

You can clearly see the distinct steps:

- Check if email is null or empty
<li>Check if email is not too long
<li>Check if email format is valid
<li>Check if email domain is valid

Let's see how we can refactor this using **functional programming**.

---

## applying-functional-programming"><a href="#applying-functional-programming">Applying Functional Programming

The basic building block in **functional programming** is - **a function**.
And programs are written by composing function calls.
There are a few other things you need to keep in mind, like keeping your functions pure.
A function is pure if it always returns the same output for the same input.

We can capture each step from the imperative version of `EmailValidator` with a `Func` delegate.
To also capture the respective error message together with the validation check, we can use a tuple.
And since we know all of our validation steps, we can create an array of `Func` delegates to store all of the individual **functions**.

```cs
public class EmailValidator
{
    const int MaxLength = 255;

    static readonly Func<string, (bool IsValid, string? Error)>[] _validations =
    {
        email => (!string.IsNullOrEmpty(email), "Email is empty"),
        email => (email.Length <= MaxLength, "Email is too long"),
        email => (email.Split('@').Length == 2, "Email format is invalid"),
        email => (
            Uri.CheckHostName(email.Split('@')[1]) != UriHostNameType.Unknown,
            "Email domain is invalid")
    };

    static readonly (bool IsValid, string? Error) _successResult = (true, null);

    public (bool IsValid, string? Error) Validate(string email)
    {
        var validationResult = _validations
            .Select(func => func(email))
            .FirstOrDefault(func => !func.IsValid);

        return validationResult is { IsValid: false, Error: { Length: >0 } } ?
            validationResult : _successResult;
    }
}

```

Notice that this allows us to do all sorts of interesting things with the `_validations` array.
How hard would it be to modify this function to return *all of the errors* instead of just the first one?

If you're thinking we can use LINQ's `Select` method somehow, you're thinking in the right direction.

---

## further-reading"><a href="#further-reading">Further Reading

We only scratched the surface of what functional programming is, and what you can do with it.
If you want to learn more, here are some learning materials:

- <a href="https://www.manning.com/books/functional-programming-in-c-sharp">Functional Programming in C#, by Enrico Buonanno</a>
<li><a href="https://youtu.be/dDasAmowFts">Functional Programming With C# Using Railway-Oriented Programming</a>
<li><a href="https://youtu.be/zuy2j8vxgYc">How Function Composition Can Make Your Code Better</a>
<li><a href="https://youtu.be/AVA2mKG4WOc">Make Your ASP.NET Core API Controllers Incredibly Simple With Functional Programming</a>

Thank you for reading, and have a wonderful Saturday.

-->

---

<TagLinks />