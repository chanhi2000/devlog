---
lang: ko-KR
title: "What is a lazy sequence?"
description: "Article(s) > What is a lazy sequence?"
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
      content: "Article(s) > What is a lazy sequence?"
    - property: og:description
      content: "What is a lazy sequence?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-a-lazy-sequence.html
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
  "title": "What is a lazy sequence? | Language - free Swift example code",
  "desc": "What is a lazy sequence?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-a-lazy-sequence",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Lazy sequences are regular sequences where each item is computed on demand rather than up front. For example, consider this array of numbers:

```swift
let numbers = Array(1...100000)
```

That will hold 100,000 numbers. Now, if we wanted to double all those numbers, we’d write something like this:

```swift
let doubled = numbers.map { $0 * 2 }
```

That will cause Swift to double all 100,000 numbers, and sometimes that’s exactly what you want. However, if you know you intend to use only a handful of them, you can make the calculation lazy instead, like this:

```swift
let lazyDoubled = numbers.lazy.map { $0 * 2 }
```

Now that `map()` call won’t do any work up front – it just stores the original array (numbers 1 to 100,000) alongside the transformation closure (double each number). So, when you request item 5,000 it can calculate just that one for you and return it in a split second – a significant time saving.

-->

::: details Similar solutions…

<!--
/example-code/language/what-are-lazy-variables">What are lazy variables? 
/quick-start/swiftui/how-to-lazy-load-views-using-lazyvstack-and-lazyhstack">How to lazy load views using LazyVStack and LazyHStack 
/quick-start/concurrency/whats-the-difference-between-sequence-asyncsequence-and-asyncstream">What’s the difference between Sequence, AsyncSequence, and AsyncStream? 
/example-code/language/how-to-make-a-custom-sequence">How to make a custom sequence 
/quick-start/concurrency/how-to-convert-an-asyncsequence-into-a-sequence">How to convert an AsyncSequence into a Sequence</a>
-->

:::

---

<TagLinks />