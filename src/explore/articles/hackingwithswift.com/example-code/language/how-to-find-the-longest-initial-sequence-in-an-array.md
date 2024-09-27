---
lang: ko-KR
title: "How to find the longest initial sequence in an array"
description: "Article(s) > How to find the longest initial sequence in an array"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-5.10
  - ios
  - ios-8.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to find the longest initial sequence in an array"
    - property: og:description
      content: "How to find the longest initial sequence in an array"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-find-the-longest-initial-sequence-in-an-array.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Language - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/language/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to find the longest initial sequence in an array | Language - free Swift example code",
  "desc": "How to find the longest initial sequence in an array",
  "link": "https://hackingwithswift.com/example-code/language/how-to-find-the-longest-initial-sequence-in-an-array",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
One of Swift’s lesser-known functions is `prefix(while:)`: call this on an array along with a test to apply, and it will return as many items from the start of the array as it can, stopping only when it reaches the first element that fails your test.

For example, if we had an array of test scores:

```swift
let scores = [89, 86, 96, 78, 92, 100]
```

We could use `prefix(while:)` to return all scores over 85 that occurred before the first score below 85 – i.e., find me all the passing scores that took place before the first person failed.

Here’s that in Swift:

```swift
let initialPasses1 = scores.prefix { $0 > 85 }
```

You can apply any test you want, and sometimes you’ll get back an empty array if the very first element fails your test. For example, this will return an empty array:

```swift
let initialPasses2 = scores.prefix { $0 < 85 }
```

-->

::: details Similar solutions…

<!--
/quick-start/concurrency/whats-the-difference-between-sequence-asyncsequence-and-asyncstream">What’s the difference between Sequence, AsyncSequence, and AsyncStream? 
/example-code/language/how-to-make-a-custom-sequence">How to make a custom sequence 
/quick-start/concurrency/how-to-convert-an-asyncsequence-into-a-sequence">How to convert an AsyncSequence into a Sequence 
/example-code/games/how-to-run-skactions-in-a-sequence">How to run SKActions in a sequence 
/example-code/language/what-is-a-lazy-sequence">What is a lazy sequence?</a>
-->

:::

---

<TagLinks />