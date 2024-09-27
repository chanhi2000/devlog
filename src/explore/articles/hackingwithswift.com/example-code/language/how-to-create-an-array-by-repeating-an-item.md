---
lang: ko-KR
title: "How to create a custom debug description"
description: "Article(s) > How to create a custom debug description"
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
      content: "Article(s) > How to create a custom debug description"
    - property: og:description
      content: "How to create a custom debug description"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-create-an-array-by-repeating-an-item.html
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
  "title": "How to create a custom debug description | Language - free Swift example code",
  "desc": "How to create a custom debug description",
  "link": "https://hackingwithswift.com/example-code/language/how-to-create-an-array-by-repeating-an-item",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
If you need to create an array of a specific size holding some default values, Swift has a built-in initializer called `repeating:count:`. You tell it what to repeat, and how often, and Swift will generate an array of that size.

For example, this creates an array of 100 items, all containing 0:

```swift
let numbers1 = [Int](repeating: 0, count: 100)
```

You can even use this initializer to create multi-dimensional arrays, for example an array of arrays of numbers:

```swift
let numbers2 = [[Int]](repeating: [Int](repeating: 0, count: 100), count: 100)
```

You can use this when creating a game board: mark all rows and columns as being 0 for a 100x100 board, then fill in squares as the game proceeds.

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-remove-the-first-or-last-item-from-an-array">How to remove the first or last item from an array 
/example-code/arrays/how-to-find-an-item-in-an-array-using-firstindexof">How to find an item in an array using firstIndex(of:) 
/example-code/language/how-to-convert-a-multidimensional-array-to-a-single-dimensional-array">How to convert a multidimensional array to a single-dimensional array 
/example-code/language/how-to-append-one-array-to-another-array">How to append one array to another array 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a>
-->

:::

---

<TagLinks />