---
lang: ko-KR
title: "How to detect when your size class changes"
description: "Article(s) > How to detect when your size class changes"
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
      content: "Article(s) > How to detect when your size class changes"
    - property: og:description
      content: "How to detect when your size class changes"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-detect-when-your-size-class-changes.html
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
  "title": "How to detect when your size class changes | UIKit - free Swift example code",
  "desc": "How to detect when your size class changes",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-detect-when-your-size-class-changes",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!--
All view controllers have a size class, which is a vague description of how much space is available both horizontally and vertically. These sometimes change when the user rotates their device, but can also change on iPad when they split the screen between two apps in various ways.

If your app needs to respond to size class changes, it’s important you implement the `traitCollectionDidChange` method. There you can check the size class of the current trait collection and respond appropriately. For example:

```swift
override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
    if traitCollection.horizontalSizeClass == .compact {
        // load slim view
    } else {
        // load wide view
    }
}
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-animate-when-your-size-class-changes-willtransitionto">How to animate when your size class changes: willTransition(to:) 
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/quick-start/swiftui/how-to-detect-when-the-size-or-position-of-a-view-changes">How to detect when the size or position of a view changes 
/quick-start/swiftui/how-to-automatically-switch-between-hstack-and-vstack-based-on-size-class">How to automatically switch between HStack and VStack based on size class 
/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a>
-->

:::

---

<TagLinks />