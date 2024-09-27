---
lang: ko-KR
title: "What is the safe area layout guide?"
description: "Article(s) > What is the safe area layout guide?"
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
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > What is the safe area layout guide?"
    - property: og:description
      content: "What is the safe area layout guide?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/what-is-the-safe-area-layout-guide.html
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
  "title": "What is the safe area layout guide? | UIKit - free Swift example code",
  "desc": "What is the safe area layout guide?",
  "link": "https://hackingwithswift.com/example-code/uikit/what-is-the-safe-area-layout-guide",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!--
Before iOS 11 it was common to create views that went edge to edge on the screen, taking up all available space in the glass rectangle of the iOS display. However, from iOS 11 onwards Apple introduced the safe area layout guide, which is a feature that restricts the edges of views so they don’t get clipped by the rounded corners and notch of the iPhone X.

You don’t *need* to make your view fall inside the safe area, and in fact it’s common to ignore this for background views that should fill the screen behind your content. For example, the built-in Weather app runs its background graphics edge to edge, then puts its main content inside the safe area.

If you use view controller containers such as `UINavigationController` and `UITabBarController` they will automatically keep your content clear of the safe area so you don’t need to worry about it. Otherwise, you should switch all your Auto Layout constraints over to the safe area layout guide inside Interface Builder – IB will automatically generate backwards-compatible constraints for older versions of iOS.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-make-a-background-image-run-under-the-safe-area">How to make a background image run under the safe area 
/quick-start/swiftui/how-to-place-content-outside-the-safe-area">How to place content outside the safe area 
/quick-start/swiftui/how-to-inset-the-safe-area-with-custom-content">How to inset the safe area with custom content 
/quick-start/swiftui/how-to-add-extra-padding-to-the-safe-area">How to add extra padding to the safe area 
/quick-start/swiftui/how-to-place-content-into-the-safe-area">How to place content into the safe area</a>
-->

:::

---

<TagLinks />