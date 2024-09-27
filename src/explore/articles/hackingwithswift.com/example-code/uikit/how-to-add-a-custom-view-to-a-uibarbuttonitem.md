---
lang: ko-KR
title: "How to add a custom view to a UIBarButtonItem"
description: "Article(s) > How to add a custom view to a UIBarButtonItem"
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
      content: "Article(s) > How to add a custom view to a UIBarButtonItem"
    - property: og:description
      content: "How to add a custom view to a UIBarButtonItem"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-add-a-custom-view-to-a-uibarbuttonitem.html
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
  "title": "How to add a custom view to a UIBarButtonItem | UIKit - free Swift example code",
  "desc": "How to add a custom view to a UIBarButtonItem",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-add-a-custom-view-to-a-uibarbuttonitem",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
Most `UIBarButtonItems` contain either an icon or some text, but they can do so much more – in fact, you can embed any kind of `UIView` subclass inside a bar button item, then put that button into a navigation bar or toolbar as you normally would.

For example, you can create a `UIProgressView` and place it into a bar button like this:

```swift
var progressView = UIProgressView(progressViewStyle: .default)
progressView.sizeToFit()

let progressButton = UIBarButtonItem(customView: progressView)
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-add-multiple-uibarbuttonitem-to-a-navigation-bar-using-rightbarbuttonitems">How to add multiple UIBarButtonItem to a navigation bar using rightBarButtonItems 
/example-code/uikit/how-to-add-a-flexible-space-to-a-uibarbuttonitem">How to add a flexible space to a UIBarButtonItem 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/quick-start/swiftui/how-to-convert-a-swiftui-view-to-an-image">How to convert a SwiftUI view to an image</a>
-->

:::

---

<TagLinks />