---
lang: ko-KR
title: What’s the difference between Sequence, AsyncSequence, and AsyncStream?
description: Article(s) > What’s the difference between Sequence, AsyncSequence, and AsyncStream?
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > What’s the difference between Sequence, AsyncSequence, and AsyncStream?
    - property: og:description
      content: What’s the difference between Sequence, AsyncSequence, and AsyncStream?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/whats-the-difference-between-sequence-asyncsequence-and-asyncstream.html
prev: /explore/articles/hackingwithswift.com/concurrency/whats-the-difference-between-sequence-asyncsequence-and-asyncstream.md
date: 2021-06-24
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Swift Concurrency by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/concurrency/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "What’s the difference between Sequence, AsyncSequence, and AsyncStream? | Swift Concurrency by Example",
  "desc": "What’s the difference between Sequence, AsyncSequence, and AsyncStream?",
  "link": "https://hackingwithswift.com/quick-start/c oncurrency/whats-the-difference-between-sequence-asyncsequence-and-asyncstream", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Swift provides several ways of receiving a potentially endless flow of data, allowing us to read values one by one, or loop over them using `for`, `while`, or similar.

The simplest is the `Sequence` protocol, which continually returns values until the sequence is terminated by returning `nil`. Lots of things conform to `Sequence`, including arrays, strings, ranges, `Data`, and more. Through protocol extensions `Sequence` also gives us access to a variety of methods, including `contains()`, `filter()`, `map()`, and others.

The `AsyncSequence` protocol is almost identical to `Sequence`, with the important exception that each element in the sequence is returned asynchronously. I realize that sounds obvious, but it actually has two major impacts on the way they work.

First, reading a value from the async sequence must use `await` so the sequence can suspend itself while reading its next value. This might be performing some complex work, for example, or perhaps fetching data from a server.

Second, more advanced async sequences known as *async streams* might generate values faster than you can read them, in which case you can either discard the extra values or buffer them to be read later on.

So, in the first case think of it like your code wanting values faster than the async sequence can make them, whereas in the second case it’s more like the async sequence generating data faster than than your code can read them.

Otherwise, `Sequence` and `AsyncSequence` have lots in common: the code to create a custom one yourself is almost the same, both can throw errors if you want, both get access to common functionality such as `map()`, `filter()`, `contains()`, and `reduce()`, and you can also use `break` or `continue` to exit loops over either of them.

::: details Similar solutions…

```component VPCard
{
  "title": "How to create a custom AsyncSequence | Swift Concurrency by Example",
  "desc": "How to create a custom AsyncSequence",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-create-a-custom-asyncsequence.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to convert an AsyncSequence into a Sequence | Swift Concurrency by Example",
  "desc": "How to convert an AsyncSequence into a Sequence",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-convert-an-asyncsequence-into-a-sequence.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to manipulate an AsyncSequence using map(), filter(), and more | Swift Concurrency by Example",
  "desc": "How to manipulate an AsyncSequence using map(), filter(), and more",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-manipulate-an-asyncsequence-using-map-filter-and-more.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to loop over an AsyncSequence using for await | Swift Concurrency by Example",
  "desc": "How to loop over an AsyncSequence using for await",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-loop-over-an-asyncsequence-using-for-await.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What’s the difference between async let, tasks, and task groups? | Swift Concurrency by Example",
  "desc": "What’s the difference between async let, tasks, and task groups?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/whats-the-difference-between-async-let-tasks-and-task-groups.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />