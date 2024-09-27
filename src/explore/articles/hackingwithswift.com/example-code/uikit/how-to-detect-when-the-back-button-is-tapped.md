---
lang: ko-KR
title: "How to detect when the Back button is tapped"
description: "Article(s) > How to detect when the Back button is tapped"
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
      content: "Article(s) > How to detect when the Back button is tapped"
    - property: og:description
      content: "How to detect when the Back button is tapped"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-detect-when-the-back-button-is-tapped.html
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
  "title": "How to detect when the Back button is tapped | UIKit - free Swift example code",
  "desc": "How to detect when the Back button is tapped",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-detect-when-the-back-button-is-tapped",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
You probably already know that `viewWillDisappear()` is called when a view controller is about to go away, and that's also called when the user taps the Back button in a navigation controller. Problem is, the same method is called when the user moves forward, i.e. when you push another view controller onto the stack.

The solution is simple: create a Boolean property called `goingForwards` in your view controller, and set it to `true` before pushing any view controller onto the navigation stack, then set it back to `false` when the view controller is shown again. This way, when `viewWillDisappear()` is called you can check `goingForwards`: if it's false, the user tapped Back.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-make-a-button-glow-when-tapped-with-showstouchwhenhighlighted">How to make a button glow when tapped with showsTouchWhenHighlighted 
/example-code/uikit/how-to-customize-a-view-controllers-back-button-on-a-navigation-bar-backbarbuttonitem">How to customize a view controller’s back button on a navigation bar: backBarButtonItem 
/quick-start/swiftui/how-to-push-a-new-view-when-a-list-row-is-tapped">How to push a new view when a list row is tapped 
/example-code/uikit/how-do-you-show-a-modal-view-controller-when-a-uitabbarcontroller-tab-is-tapped">How do you show a modal view controller when a UITabBarController tab is tapped? 
/example-code/wkwebview/how-to-enable-back-and-forward-swiping-gestures-in-wkwebview">How to enable back and forward swiping gestures in WKWebView</a>
-->

:::

---

<TagLinks />