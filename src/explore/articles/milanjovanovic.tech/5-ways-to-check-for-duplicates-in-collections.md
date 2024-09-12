---
lang: ko-KR
title: 5 Ways To Check For Duplicates In Collections, With Benchmarks
description: Article(s) > 5 Ways To Check For Duplicates In Collections, With Benchmarks
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
      content: Article(s) > 5 Ways To Check For Duplicates In Collections, With Benchmarks
    - property: og:description
      content: 5 Ways To Check For Duplicates In Collections, With Benchmarks
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/5-ways-to-check-for-duplicates-in-collections.html
prev: /programming/cs/articles/README.md
date: 2022-11-05
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_010.png
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
  name="5 Ways To Check For Duplicates In Collections, With Benchmarks"
  desc="In this week's newsletter, we will take a look at five different ways to check if a collection contains duplicates. I'm going to explain the idea behind each algorithm, discuss the algorithm complexity (Big O Notation), and at the end, we'll look at some benchmark results."
  url="https://milanjovanovic.tech/blog/5-ways-to-check-for-duplicates-in-collections/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_010.png"/>

<!-- TODO: 작성 -->

<!--
In this week's newsletter, we will take a look at five different ways to check if a collection **contains duplicates**.

I'm going to explain the idea behind each **algorithm**, discuss the **algorithm complexity** (Big O Notation), and at the end, we'll look at some **benchmark results**.

The five approaches for finding a duplicate will use the:

- <a href="#check-for-duplicates-with-foreach-loop">`foreach`</a> loop
<li>LINQ <a href="#check-for-duplicates-with-linq-any">`Any`</a> method
<li>LINQ <a href="#check-for-duplicates-with-linq-all">`All`</a> method
<li>LINQ <a href="#check-for-duplicates-with-linq-distinct">`Distinct`</a> method
<li>LINQ <a href="#check-for-duplicates-with-linq-tohashset">`ToHashSet`</a> method

Let's see how we can implement each approach!

---

## check-for-duplicates-with-foreach-loop"><a href="#check-for-duplicates-with-foreach-loop">Check For Duplicates With ForEach Loop

The first implementation will use the `foreach` loop and the `HashSet` data structure.

Here's the code for the `ContainsDuplicates` method:

```cs
public bool ContainsDuplicates<T>(IEnumerable<T> enumerable)
{
   HashSet<T> set = new();

   foreach(var element in enumerable)
   {
      if (!set.Add(element))
      {
         return true;
      }
   }

   return false;
}

```

The idea is simple:

- Loop through the collection
<li>Add each element to the `HashSet`
<li>When `HashSet.Add` returns false we found a duplicate
<li>If we loop through the entire collection there are no duplicates

In terms of **algorithm complexity**, this would be **O(n)** or linear complexity.
This is because there's only one iteration through the collection.

Adding an element to a `HashSet` is a constant operation - **O(1)**.
So it doesn't affect the overall complexity.

---

## check-for-duplicates-with-linq-any"><a href="#check-for-duplicates-with-linq-any">Check For Duplicates With LINQ Any

We'll combine the idea from the previous implementation of
using the `HashSet` and pair it with the LINQ `Any`
method to iterate over the collection.

Here's the implementation for the `ContainsDuplicates` method:

```cs
public bool ContainsDuplicates<T>(IEnumerable<T> enumerable)
{
   HashSet<T> set = new();

   return enumerable.Any(element => !set.Add(element));
}

```

You can see this implementation is significantly shorter.
But it works the same as the one with the `foreach` loop.

If any element in the collection satisfies the specified expression,
`Any` will *short-circuit* and return `true`.
Otherwise, it will iterate over the entire collection and return `false`.

We're still looking at linear complexity here, **O(n)**.

---

## check-for-duplicates-with-linq-all"><a href="#check-for-duplicates-with-linq-all">Check For Duplicates With LINQ All

For our third implementation, we will use the opposite
of the LINQ `Any` method - the LINQ `All` method.

Here's the implementation with LINQ `All`:

```cs
public bool ContainsDuplicates<T>(IEnumerable<T> enumerable)
{
   HashSet<T> set = new();

   return !enumerable.All(set.Add);
}

```

The idea here is a little different than in the previous implementation.

`All` will return `true` if all elements in a collection
satisfy the specified expression.

If at least one element doesn't satisfy the condition -
in our case when a **duplicate** is found - it will *short-circuit* and return `false`.

This is still linear complexity, **O(n)**.

---

## check-for-duplicates-with-linq-distinct"><a href="#check-for-duplicates-with-linq-distinct">Check For Duplicates With LINQ Distinct

So far, we've seen a few implementations using the `HashSet` data structure.
Now let's consider a different approach.

We can use the LINQ `Distinct` method to check for duplicates.

Here's the code for the `ContainsDuplicates` method:

```cs
public bool ContainsDuplicates<T>(IEnumerable<T> enumerable)
{
   return enumerable.Distinct().Count() != enumerable.Count();
}

```

The idea is first find the `Distinct` elements and `Count` them,
and then compare that to the number of all elements.

If the number of distinct elements is not equal to
the number of all elements, we have a **duplicate** value.

In terms of **algorithm complexity**, this is still linear complexity.

But we have at least two iterations through the collection
or three in the worst-case scenario.

We have one iteration for `Distinct` and one more
iteration for the call to `Count` right after that.
The last call to `Count` can return in constant time,
if the collection is an `array` or `List`.

---

## check-for-duplicates-with-linq-tohashset"><a href="#check-for-duplicates-with-linq-tohashset">Check For Duplicates With LINQ ToHashSet

For the last implementation we will use the LINQ `ToHashSet` method.

It takes a collection and creates a `HashSet` instance from it.

Here's what the `ContainsDuplicates` implementation looks like:

```cs
public bool ContainsDuplicates<T>(IEnumerable<T> enumerable)
{
   return enumerable.ToHashSet().Count != enumerable.Count();
}

```

We compare the number of elements in the `HashSet` to the number of elements in the collection.

If they are different, we have a **duplicate** value.

This is also linear complexity, **O(n)**.

---

## benchmark-results"><a href="#benchmark-results">Benchmark Results

Now that we've seen our implementations let's put them to the test.

I ran the benchmark for collections of varying sizes:

- 100
<li>1,000
<li>10,000

Each collection contains exactly one duplicate value located somewhere around the middle of the collection.

Here are the results:

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271339%27%20height=%27627%27/%3e"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img srcSet="/blogs/mnw_010/benchmark.png?imwidth=1920 1x, /blogs/mnw_010/benchmark.png?imwidth=3840 2x" src="/blogs/mnw_010/benchmark.png?imwidth=3840" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>
The approach using the `foreach` loop comes out as the clear winner in terms of performance.

However, I would lean towards using the implementations with LINQ `Any` or `All` because of their simplicity.

You can find the <a href="https://github.com/m-jovanovic/find-duplicates-benchmark">source code for the benchmark</a>
on my GitHub. Feel free to submit a PR with a faster implementation if you can think of one.

<hr>
-->

---

<TagLinks />