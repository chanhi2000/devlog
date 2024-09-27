---
lang: ko-KR
title: "How to add custom spacing to UIStackView items"
description: "Article(s) > How to add custom spacing to UIStackView items"
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
  - ios-11.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to add custom spacing to UIStackView items"
    - property: og:description
      content: "How to add custom spacing to UIStackView items"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-add-custom-spacing-to-uistackview-items.html
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
  "title": "How to add custom spacing to UIStackView items | UIKit - free Swift example code",
  "desc": "How to add custom spacing to UIStackView items",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-add-custom-spacing-to-uistackview-items",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!--
Each `UIStackView` has an overall `spacing` property that affects spacing between all of its arranged subviews, but in addition you can add custom spacing after specific views – for example, “put 20 points of space under this button.”

To make that happen, use the `setCustomSpacing()` method of your stack view, providing it the number of points of spacing you want and the view that should precede the spacing.

For example, this code creates a stack view and a button, adds the button to the stack view, then requests 20 points of spacing after it:

```swift
let stackView = UIStackView()
let btn = UIButton()

stackView.addArrangedSubview(btn)
stackView.setCustomSpacing(20, after: btn)
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-add-spacing-between-letters-in-text">How to add spacing between letters in text 
/quick-start/swiftui/how-to-style-text-views-with-fonts-colors-line-spacing-and-more">How to style text views with fonts, colors, line spacing, and more 
/quick-start/swiftui/how-to-customize-stack-layouts-with-alignment-and-spacing">How to customize stack layouts with alignment and spacing 
/quick-start/swiftui/how-to-control-spacing-around-individual-views-using-padding">How to control spacing around individual views using padding 
/example-code/uikit/what-are-the-different-uistackview-distribution-types">What are the different UIStackView distribution types?</a>
-->

:::

---

<TagLinks />