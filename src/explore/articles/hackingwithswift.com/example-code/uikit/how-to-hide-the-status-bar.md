---
lang: ko-KR
title: "How to hide the status bar"
description: "Article(s) > How to hide the status bar"
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
      content: "Article(s) > How to hide the status bar"
    - property: og:description
      content: "How to hide the status bar"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-hide-the-status-bar.html
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
  "title": "How to hide the status bar | UIKit - free Swift example code",
  "desc": "How to hide the status bar",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-hide-the-status-bar",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
You can hide the status bar in any or all of your view controllers just by adding this code:

```swift
override var prefersStatusBarHidden: Bool {
    return true
}
```

Any view controller containing that code will hide the status bar by default.

If you want to animate the status bar in or out, just call `setNeedsStatusBarAppearanceUpdate()` on your view controller – that will force `prefersStatusBarHidden` to be read again, at which point you can return a different value. If you want, your call to `setNeedsStatusBarAppearanceUpdate()` can actually be inside an animation block, which causes the status bar to hide or show in a smooth way.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-hide-and-show-the-status-bar">How to hide and show the status bar 
/example-code/uikit/how-to-use-light-text-color-in-the-status-bar">How to use light text color in the status bar 
/quick-start/swiftui/how-to-hide-the-tab-bar-navigation-bar-or-other-toolbars">How to hide the tab bar, navigation bar, or other toolbars 
/example-code/uikit/how-to-hide-the-tab-bar-when-a-view-controller-is-shown">How to hide the tab bar when a view controller is shown 
/example-code/uikit/how-to-hide-the-navigation-bar-using-hidesbarsontap">How to hide the navigation bar using hidesBarsOnTap</a>
-->

:::

---

<TagLinks />