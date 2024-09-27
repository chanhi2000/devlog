---
lang: ko-KR
title: "What are the different UIStackView distribution types?"
description: "Article(s) > What are the different UIStackView distribution types?"
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
  - ios-9.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > What are the different UIStackView distribution types?"
    - property: og:description
      content: "What are the different UIStackView distribution types?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/what-are-the-different-uistackview-distribution-types.html
date: 2019-03-28
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
  "title": "What are the different UIStackView distribution types? | UIKit - free Swift example code",
  "desc": "What are the different UIStackView distribution types?",
  "link": "https://hackingwithswift.com/example-code/uikit/what-are-the-different-uistackview-distribution-types",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!--
One of the most compelling reasons to upgrade to iOS 9.0 is the new `UIStackView` class it introduced, which offers a simplified way of doing layouts in iOS. To give you more control over how it arranges their subviews, stack views offer five different distribution types for you to try, and here's what they do:

- **Fill** makes one subview take up most of the space, while the others remain at their natural size. It decides which view to stretch by examining the content hugging priority for each of the subviews.
- **Fill Equally** adjusts each subview so that it takes up equal amount of space in the stack view. All space will be used up.
- **Fill Proportionally** is the most interesting, because it ensures subviews remain the same size relative to each other, but still stretches them to fit the available space. For example, if one view is 100 across and another is 200, and the stack view decides to stretch them to take up more space, the first view might stretch to 150 and the other to 300 – both going up by 50%.
- **Equal Spacing** adjusts the spacing between subviews without resizing the subviews themselves.
- **Equal Centering** attempts to ensure the centers of each subview are equally spaced, irrespective of how far the edge of each subview is positioned.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-add-custom-spacing-to-uistackview-items">How to add custom spacing to UIStackView items 
/quick-start/concurrency/how-to-handle-different-result-types-in-a-task-group">How to handle different result types in a task group 
/quick-start/swiftui/how-to-return-different-view-types">How to return different view types 
/example-code/uikit/how-to-give-a-uistackview-a-background-color">How to give a UIStackView a background color 
/example-code/language/how-to-safely-use-reference-types-inside-value-types-with-isknownuniquelyreferenced">How to safely use reference types inside value types with isKnownUniquelyReferenced()</a>
-->

:::

---

<TagLinks />