---
lang: ko-KR
title: "Using stride() to loop over a range of numbers"
description: "Article(s) > Using stride() to loop over a range of numbers"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Using stride() to loop over a range of numbers"
    - property: og:description
      content: "Using stride() to loop over a range of numbers"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/using-stride-to-loop-over-a-range-of-numbers.html
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
  "title": "Using stride() to loop over a range of numbers | Language - free Swift example code",
  "desc": "Using stride() to loop over a range of numbers",
  "link": "https://hackingwithswift.com/example-code/language/using-stride-to-loop-over-a-range-of-numbers",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
Swift has a helpful `stride()`, which lets you move from one value to another using any increment – and even lets you specify whether the upper bound is exclusive or inclusive.

First, some examples. This first example counts from 0 to 10 in 2s:

```swift
for i in stride(from: 0, to: 10, by: 2) {
    print(i)
}
```

This second example counts from 0 up to to 0.5, exclusive:

```swift
for i in stride(from: 0, to: 0.5, by: 0.1) {
    print(i)
}
```

Both those examples use `stride(from:to:by:)`, which counts from the start point up to by excluding the `to` parameter. If you want to count up and *including* the `to` parameter, you should use `stride(from:through:by:)`, like this:

```swift
for i in stride(from: 0, through: 10, by: 2) {
    print(i)
}
```

-->

::: details Similar solutions…

<!--
/quick-start/concurrency/how-to-loop-over-an-asyncsequence-using-for-await">How to loop over an AsyncSequence using for await 
/example-code/language/how-to-loop-over-non-nil-items-in-an-array">How to loop over non-nil items in an array 
/example-code/language/how-to-use-the-foreach-method-to-loop-over-an-array">How to use the forEach method to loop over an array 
/example-code/language/how-to-check-whether-a-date-is-inside-a-date-range">How to check whether a date is inside a date range 
/example-code/language/how-to-check-whether-an-integer-lies-inside-a-range">How to check whether an integer lies inside a range</a>
-->

:::

---

<TagLinks />