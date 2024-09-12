---
lang: ko-KR
title: "Creating Data-Driven Tests With xUnit"
description: "Article(s) > Creating Data-Driven Tests With xUnit"
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
      content: "Article(s) > Creating Data-Driven Tests With xUnit"
    - property: og:description
      content: "Creating Data-Driven Tests With xUnit"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/creating-data-driven-tests-with-xunit.html
prev: /programming/cs/articles/README.md
date: 2023-03-18
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_029.png
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
  name="Creating Data-Driven Tests With xUnit"
  desc="Data-driven testing is a testing method where test data is provided through some external source. Hence it's also known as parameterized testing. A popular testing library in .NET that supports parameterized testing is xUnit. It uses attributes to define test methods. The Fact attribute defines a simple test, and the Theory attribute defines a parameterized test."
  url="https://milanjovanovic.tech/blog/creating-data-driven-tests-with-xunit/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_029.png"/>

<!-- TODO: 작성 -->

<!-- 
**Data-driven testing** is a testing method where test data is provided through some external source.
Hence it's also known as **parameterized testing**.

A popular testing library in .NET that supports parameterized testing is **xUnit**.
It uses attributes to define test methods.
The `Fact` attribute defines a simple test, and the `Theory` attribute defines a parameterized test.

In this week's newsletter, I'm going to show you four ways to write **parameterized tests** with xUnit:

- `InlineData`
<li>`MemberData`
<li>`ClassData`
<li>`TheoryData`

And I'll discuss which approach I think is the best.

Let's dive in.

---

## writing-parameterized-tests-with-inlinedata"><a href="#writing-parameterized-tests-with-inlinedata">Writing Parameterized Tests With InlineData

The simplest way to write parameterized tests with xUnit is using the `InlineData` attribute.
You provide test data by passing in values to the `InlineData` constructor.

Here's how that would look like:

```cs
[Theory]
[InlineData("test@test.com", "test.com")]
[InlineData("milan@milanjovanovic.tech", "milanjovanovic.tech")]
public void EmailParser_Should_Return_Domain(string email, string expectedDomain)
{
    // Arrange
    var parser = new EmailParser();

    // Act
    var domain = parser.ParseDomain(email);

    // Assert
    Assert.Equal(domain, expectedDomain);
}

```

In this example, we provide two `string` values to the `InlineData` attribute, which represent the `email` and `expectedDomain` parameters in the test.
We can specify the `InlineData` attribute as many times as we want, to introduce more test cases.

The downside of this approach is that it becomes very verbose when we have many test cases.
And we are limited to only using constant data for the parameters.

---

## writing-parameterized-tests-with-memberdata"><a href="#writing-parameterized-tests-with-memberdata">Writing Parameterized Tests With MemberData

With the `MemberData` attribute we have the ability to programmatically provide the test data.
You can load the test data from a static property or member of a type.

Here's an example of using the `MemberData` attribute to load test data from a property:

```cs
[Theory]
[MemberData(nameof(EmailTestData))]
public void EmailParser_Should_Return_Domain(string email, string expectedDomain)
{
    // Arrange
    var parser = new EmailParser();

    // Act
    var domain = parser.ParseDomain(email);

    // Assert
    Assert.Equal(domain, expectedDomain);
}

public static IEnumerable<object[]> EmailTestData => new List<object>
{
    new object[] { "test@test.com", "test.com" },
    new object[] { "milan@milanjovanovic.tech", "milanjovanovic.tech" }
};

```

You specify the name of the member in the `MemberData` attribute, and it's a best practice to use the `nameof` operator
so that you can rename the property (or method) in the future without breaking your test.

The one constraint is that the property (or method) has to return `IEnumerable<object[]>`, so there is no strong typing.

---

## writing-parameterized-tests-with-classdata"><a href="#writing-parameterized-tests-with-classdata">Writing Parameterized Tests With ClassData

The `ClassData` attribute allows you to extract test data into its own class.
This is helpful for organizing your test data separately from your tests, and it allows for easier reuse.
You load the test from a class the inherits from `IEnumerable<object[]>` and implements the `GetEnumerator` method.

Here's an example of using the `ClassData` attribute to load test data from a class:

```cs
[Theory]
[ClassData(typeof(EmailTestData))]
public void EmailParser_Should_Return_Domain(string email, string expectedDomain)
{
    // Arrange
    var parser = new EmailParser();

    // Act
    var domain = parser.ParseDomain(email);

    // Assert
    Assert.Equal(domain, expectedDomain);
}

public class EmailTestData : IEnumerable<object[]>
{

    public IEnumerable<object[]> GetEnumerator()
    {
        yield return new object[] { "test@test.com", "test.com" };
        yield return new object[] { "milan@milanjovanovic.tech", "milanjovanovic.tech" };
    }

    IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
};

```

Unfortunately, this approach is complicated because you have to implement the `IEnumerable` interface.

It almost defeats the purpose of separating test data from the actual tests.

And we still suffer from lack of type-safety.

Is there a better solution?

---

## writing-parameterized-tests-with-theorydata"><a href="#writing-parameterized-tests-with-theorydata">Writing Parameterized Tests With TheoryData

Let me introduce you to `TheoryData`, which is my preferred way of providing test data for parameterized tests.
Using the `TheoryData` class you can implement a class to provide test data while having the benefit of type-safety.

Here's an example of using `TheoryData` in combination with `ClassData`:

```cs
[Theory]
[ClassData(typeof(EmailTestData))]
public void EmailParser_Should_Return_Domain(string email, string expectedDomain)
{
    // Arrange
    var parser = new EmailParser();

    // Act
    var domain = parser.ParseDomain(email);

    // Assert
    Assert.Equal(domain, expectedDomain);
}

public class EmailTestData : TheoryData<string, string>
{
    public EmailTestData()
    {
        Add("test@test.com", "test.com");
        Add("milan@milanjovanovic.tech", "milanjovanovic.tech");
    }
};

```

How does `TheoryData` work?

It's a generic class that allows us to specify the types for our parameterized test.

You just call the `Add` method in the `EmailTestData` constructor to provide test data for a single test case.
And introducing more test cases comes down to calling the `Add` method multiple times.

You can also use `TheoryData` in combination with `MemberData`, and return `TheoryData` from a property or method.

---

## which-approach-should-you-use"><a href="#which-approach-should-you-use">Which Approach Should You Use?

I showed you four approaches to write parameterized tests with xUnit:

- `InlineData`
<li>`MemberData`
<li>`ClassData`
<li>`TheoryData`

So which one should you use?

Here's my personal preference that you can follow if you want:

- `InlineData` for simple test cases
<li>`TheoryData` using `ClassData` for complex test cases

Thank you for reading, and have a wonderful Saturday.

-->

---

<TagLinks />