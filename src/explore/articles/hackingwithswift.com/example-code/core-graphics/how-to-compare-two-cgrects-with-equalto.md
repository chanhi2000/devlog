---
lang: ko-KR
title: "How to compare two CGRects with equalTo()"
description: "Article(s) > How to compare two CGRects with equalTo()"
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
  - ios-2.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to compare two CGRects with equalTo()"
    - property: og:description
      content: "How to compare two CGRects with equalTo()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-compare-two-cgrects-with-equalto.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Core Graphics - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/core-graphics/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to compare two CGRects with equalTo() | Core Graphics - free Swift example code",
  "desc": "How to compare two CGRects with equalTo()",
  "link": "https://hackingwithswift.com/example-code/core-graphics/how-to-compare-two-cgrects-with-equalto",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
You could compare two `CGRect` values by evaluating their X, Y, width and height values, but there's a much faster way: `equalTo()`. This takes two rects as its only two parameters and returns true if they are the same, or false otherwise.

Here's an example:

```swift
let rect1 = CGRect(x: 64, y: 64, width: 128, height: 128)
let rect2 = CGRect(x: 256, y: 256, width: 128, height: 128)

if rect1.equalTo(rect2) {
    // rects equal!
} else {
    // rects not equal
}
```

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-compare-two-tuples-for-equality">How to compare two tuples for equality 
/example-code/language/how-to-compare-dates">How to compare dates 
/quick-start/swiftui/two-way-bindings-in-swiftui">Two-way bindings in SwiftUI 
/example-code/language/how-to-use-the-zip-function-to-join-two-arrays">How to use the zip() function to join two arrays 
/example-code/core-graphics/how-to-calculate-the-distance-between-two-cgpoints">How to calculate the distance between two CGPoints</a>
-->

:::

---

<TagLinks />