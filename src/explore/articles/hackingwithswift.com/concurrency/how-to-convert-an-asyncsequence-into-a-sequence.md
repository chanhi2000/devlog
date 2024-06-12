---
lang: ko-KR
title: How to convert an AsyncSequence into a Sequence
description: Article(s) > How to convert an AsyncSequence into a Sequence
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
      content: Article(s) > How to convert an AsyncSequence into a Sequence
    - property: og:description
      content: How to convert an AsyncSequence into a Sequence
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/how-to-convert-an-asyncsequence-into-a-sequence.html
next: /explore/articles/hackingwithswift.com/concurrency/what-are-tasks-and-task-groups.md
date: 2021-11-28
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
  "title": "How to convert an AsyncSequence into a Sequence | Swift Concurrency by Example",
  "desc": "How to convert an AsyncSequence into a Sequence",
  "link": "https://hackingwithswift.com/quick-start/concurrency/how-to-convert-an-asyncsequence-into-a-sequence", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Swift does not provide a built-in way of converting an `AsyncSequence` into a regular `Sequence`, but often you’ll want to make this conversion yourself so you don’t need to keep awaiting results to come back in the future.

The easiest thing to do is call `reduce(into:)` on the sequence, appending each item to an array of the sequence’s element type. To make this more reusable, I’d recommend adding an extension such as this one:

```swift
extension AsyncSequence {
    func collect() async rethrows -> [Element] {
        try await reduce(into: [Element]()) { $0.append($1) }
    }
}
```

With that in place, you can now call `collect()` on any async sequence in order to get a simple array of its values. Because this is an async operation, you must call it using `await` like so:


```swift
extension AsyncSequence {
    func collect() async rethrows -> [Element] {
        try await reduce(into: [Element]()) { $0.append($1) }
    }
}

func getNumberArray() async throws -> [Int] {
    let url = URL(string: "https://hws.dev/random-numbers.txt")!
    let numbers = url.lines.compactMap(Int.init)
    return try await numbers.collect()
}

if let numbers = try? await getNumberArray() {
    for number in numbers {
        print(number)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-convert-an-asyncsequence-into-a-sequence-1.zip)

::: tip

Because we’ve made `collect()` use `rethrows`, you only need to call it using `try` if the call to `reduce()` would normally throw, so if you have an async sequence that doesn’t throw errors you can skip `try` entirely.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "What’s the difference between Sequence, AsyncSequence, and AsyncStream? | Swift Concurrency by Example",
  "desc": "What’s the difference between Sequence, AsyncSequence, and AsyncStream?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/whats-the-difference-between-sequence-asyncsequence-and-asyncstream.md",
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
  "title": "How to use continuations to convert completion handlers into async functions | Swift Concurrency by Example",
  "desc": "How to use continuations to convert completion handlers into async functions",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-use-continuations-to-convert-completion-handlers-into-async-functions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />