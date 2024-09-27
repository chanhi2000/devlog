---
lang: ko-KR
title: "How to shuffle an array using arc4random_uniform()"
description: "Article(s) > How to shuffle an array using arc4random_uniform()"
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
      content: "Article(s) > How to shuffle an array using arc4random_uniform()"
    - property: og:description
      content: "How to shuffle an array using arc4random_uniform()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/arrays/how-to-shuffle-an-array-using-arc4random-uniform.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Array - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/arrays/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to shuffle an array using arc4random_uniform() | Array - free Swift example code",
  "desc": "How to shuffle an array using arc4random_uniform()",
  "link": "https://hackingwithswift.com/example-code/arrays/how-to-shuffle-an-array-using-arc4random-uniform",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
Modern Swift code will use Swift’s own `shuffle()` and `shuffled()` methods, but sometimes you might find code that does it by hand using `arc4random_uniform()` or similar.

Nate Cook wrote a simple `shuffle()` extension to arrays that implements the Fisher-Yates shuffle algorithm in Swift. Here's the code:

```swift
extension Array {
    mutating func customShuffle() {
        for i in 0 ..< (count - 1) {
            let j = Int(arc4random_uniform(UInt32(count - i))) + i
            swapAt(i, j)
        }
    }
}
```

-->

::: details Similar solutions…

<!--
/example-code/arrays/how-to-randomize-the-order-of-an-array-shuffle-and-shuffled">How to randomize the order of an array: shuffle() and shuffled() 
/example-code/language/how-to-convert-a-multidimensional-array-to-a-single-dimensional-array">How to convert a multidimensional array to a single-dimensional array 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table 
/example-code/language/how-to-append-one-array-to-another-array">How to append one array to another array 
/quick-start/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue">How to use @MainActor to run code on the main queue</a>
-->

:::

---

<TagLinks />