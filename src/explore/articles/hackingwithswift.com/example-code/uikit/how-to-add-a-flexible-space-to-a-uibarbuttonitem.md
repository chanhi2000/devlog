---
lang: ko-KR
title: "How to add a flexible space to a UIBarButtonItem"
description: "Article(s) > How to add a flexible space to a UIBarButtonItem"
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
      content: "Article(s) > How to add a flexible space to a UIBarButtonItem"
    - property: og:description
      content: "How to add a flexible space to a UIBarButtonItem"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-add-a-flexible-space-to-a-uibarbuttonitem.html
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
  "title": "How to add a flexible space to a UIBarButtonItem | UIKit - free Swift example code",
  "desc": "How to add a flexible space to a UIBarButtonItem",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-add-a-flexible-space-to-a-uibarbuttonitem",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
There's a special kind of `UIBarButtonItem` called `flexibleSpace`, and this acts like a spring between other buttons, pushing them to one side. A flexible space will always expand to take up as much room as possible, splitting space evenly between other flexible spaces if they exist.

For example, if you add this button to a toolbar, it will sit on the left edge of the toolbar:

```swift
let refresh = UIBarButtonItem(barButtonSystemItem: .refresh, target: self, action: #selector(refreshTapped))
```

If you create and add a flexible space first, then that button will be pushed to the right edge as the flexible space expands to take up most of the toolbar. Here's how you create the flexible space:

```swift
let spacer = UIBarButtonItem(barButtonSystemItem: .flexibleSpace, target: nil, action: nil)
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-add-multiple-uibarbuttonitem-to-a-navigation-bar-using-rightbarbuttonitems">How to add multiple UIBarButtonItem to a navigation bar using rightBarButtonItems 
/example-code/uikit/how-to-add-a-custom-view-to-a-uibarbuttonitem">How to add a custom view to a UIBarButtonItem 
/quick-start/swiftui/how-to-adjust-the-way-an-image-is-fitted-to-its-space">How to adjust the way an image is fitted to its space 
/example-code/strings/how-to-display-different-strings-based-on-available-space-using-variantfittingpresentationwidth">How to display different strings based on available space using variantFittingPresentationWidth() 
/example-code/uikit/how-to-add-a-bar-button-to-a-navigation-bar">How to add a bar button to a navigation bar</a>
-->

:::

---

<TagLinks />