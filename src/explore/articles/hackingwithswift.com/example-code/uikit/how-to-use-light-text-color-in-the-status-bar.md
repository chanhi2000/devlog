---
lang: ko-KR
title: "How to use light text color in the status bar"
description: "Article(s) > How to use light text color in the status bar"
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
      content: "Article(s) > How to use light text color in the status bar"
    - property: og:description
      content: "How to use light text color in the status bar"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-use-light-text-color-in-the-status-bar.html
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
  "title": "How to use light text color in the status bar | UIKit - free Swift example code",
  "desc": "How to use light text color in the status bar",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-use-light-text-color-in-the-status-bar",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
As of iOS 7.0, all view controllers set their own status bar style by default, which means they can have black text or white text depending on what looks best for your view controller. If you want to have light text in the status bar, add this code to your view controller:

```swift
override var preferredStatusBarStyle: UIStatusBarStyle {
    return .lightContent
}
```

If you want to change the status bar color dynamically, you should call `setNeedsStatusBarAppearanceUpdate()` on your view controller, which will force `preferredStatusBarStyle` to be read again. Pro tip: you can put `setNeedsStatusBarAppearanceUpdate()` inside an animation block to have the change animate.
-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-hide-and-show-the-status-bar">How to hide and show the status bar 
/example-code/uikit/how-to-hide-the-status-bar">How to hide the status bar 
/quick-start/swiftui/how-to-show-different-images-and-other-views-in-light-or-dark-mode">How to show different images and other views in light or dark mode 
/example-code/uikit/how-to-force-a-view-controller-to-use-light-or-dark-mode">How to force a view controller to use light or dark mode 
/quick-start/swiftui/how-to-preview-your-layout-in-light-and-dark-mode">How to preview your layout in light and dark mode</a>
-->

:::

---

<TagLinks />