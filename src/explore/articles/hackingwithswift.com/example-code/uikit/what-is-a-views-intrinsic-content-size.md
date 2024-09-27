---
lang: ko-KR
title: "What is a view’s intrinsic content size?"
description: "Article(s) > What is a view’s intrinsic content size?"
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
  - ios-6.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > What is a view’s intrinsic content size?"
    - property: og:description
      content: "What is a view’s intrinsic content size?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/what-is-a-views-intrinsic-content-size.html
date: 2020-04-18
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIKit - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uikit/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "What is a view’s intrinsic content size? | UIKit - free Swift example code",
  "desc": "What is a view’s intrinsic content size?",
  "link": "https://hackingwithswift.com/example-code/uikit/what-is-a-views-intrinsic-content-size",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 6.0

<!-- TODO: 작성 -->

<!--
Most views have an intrinsic content size, which refers to the amount of space the view needs for its content to appear in an ideal state. For example, the intrinsic content size of a `UILabel` will be the size of the text it contains using whatever font you have configured it to use.

Intrinsic content sizes are important because they allow views to have a natural width and height without us forcing one. For Auto Layout to work it must know where each view is positioned precisely: its X, Y, width, and height values. With intrinsic content size we can say “place this button 20 points from the top and center it horizontally” and that’s enough to form a complete layout – Auto Layout can calculate the rest based on the button’s intrinsic size.

Although Auto Layout does its best to give views the space they need based on their intrinsic content sizes, all views also have a content compression resistance priority and a content hugging priority that determine how much it fights to retain its intrinsic content size when available space is less than or greater than it needs, respectively.
-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-animate-the-size-of-text">How to animate the size of text 
/quick-start/swiftui/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location">How to dynamically adjust the appearance of a view based on its size and location 
/quick-start/swiftui/how-to-detect-when-the-size-or-position-of-a-view-changes">How to detect when the size or position of a view changes 
/quick-start/swiftui/how-to-control-the-size-of-presented-views">How to control the size of presented views</a>
-->

:::

---

<TagLinks />