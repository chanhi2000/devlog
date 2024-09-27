---
lang: ko-KR
title: "How to make a custom sequence"
description: "Article(s) > How to make a custom sequence"
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
      content: "Article(s) > How to make a custom sequence"
    - property: og:description
      content: "How to make a custom sequence"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-make-a-custom-sequence.html
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
  "title": "How to make a custom sequence | Language - free Swift example code",
  "desc": "How to make a custom sequence",
  "link": "https://hackingwithswift.com/example-code/language/how-to-make-a-custom-sequence",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
When you use a `for-in` loop, Swift maps that code to a `while` loop that generates an iterator for your data. Swift then calls `next()` on that iterator repeatedly until it gets back `nil` to signal that the loop has ended.

This functionality is all handled through two protocols: `Sequence` describes something that can be looped over, and `IteratorProtocol` describes something that iterates over a sequence. If you combine them both into a single type, all you need to do is implement a `next()` method returning whatever value comes next in your sequence.

Let’s walk through a simple sequence that counts doubles up from 1, so it will count 1, 2, 4, 8, 16, 32, 64, 128, 256, and so on until we run out of integers that can be stored in `Int`.

In code this means creating a new `DoubleGenerator` struct that conforms to both `Sequence` and `IteratorProtocol`. Because this type conforms to both protocols, we only need to implement one method: `next()`. This should double the current number then return it, however we need to do that doubling inside a `defer` block so that we only double *after* we’ve returned.

Here’s the code:

```swift
struct DoubleGenerator: Sequence, IteratorProtocol {
    var current = 1

    mutating func next() -> Int? {
        defer {
            current *= 2
        }

        return current
    }
}
```

As that’s an infinite sequence you should be careful using it. For example, this code increments a counter each time its loop goes around and exits the loop when the counter reaches 10.

```swift
var i = 0

let numbers = DoubleGenerator()
for number in numbers {
    i += 1
    if i == 10 { break }

    print(number)
}
```

That will print doubles of 1 through to 256.

If you want your iterator and sequences to be *different* types, you’ll need to add a `makeIterator()` method to your sequence.

-->

::: details Similar solutions…

<!--
/quick-start/concurrency/whats-the-difference-between-sequence-asyncsequence-and-asyncstream">What’s the difference between Sequence, AsyncSequence, and AsyncStream? 
/quick-start/concurrency/how-to-convert-an-asyncsequence-into-a-sequence">How to convert an AsyncSequence into a Sequence 
/example-code/language/what-is-a-lazy-sequence">What is a lazy sequence? 
/example-code/games/how-to-run-skactions-in-a-sequence">How to run SKActions in a sequence 
/example-code/language/how-to-find-the-longest-initial-sequence-in-an-array">How to find the longest initial sequence in an array</a>
-->

:::

---

<TagLinks />