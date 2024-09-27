---
lang: ko-KR
title: "How to set the tabs in a UITabBarController"
description: "Article(s) > How to set the tabs in a UITabBarController"
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
      content: "Article(s) > How to set the tabs in a UITabBarController"
    - property: og:description
      content: "How to set the tabs in a UITabBarController"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-set-the-tabs-in-a-uitabbarcontroller.html
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
  "title": "How to set the tabs in a UITabBarController | UIKit - free Swift example code",
  "desc": "How to set the tabs in a UITabBarController",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-set-the-tabs-in-a-uitabbarcontroller",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
If you're creating your tab bar controller from scratch, or if you just want to change the set up of your tabs at runtime, you can do so just by setting the `viewControllers` property of your tab bar controller. This expects to be given an array of view controllers in the order you want them displayed, and you should already have configured each view controller to have its own `UITabBarItem` with a title and icon.

If your tab bar controller is the root view controller of your window, you should be able to write something like this:

```swift
if let tabBarController = window?.rootViewController as? UITabBarController {
    let first = FirstViewController()
    let second = SecondViewController()

    tabBarController.viewControllers = [first, second]
}
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/changing-which-uitabbarcontroller-tabs-can-be-edited">Changing which UITabBarController tabs can be edited 
/example-code/uikit/how-do-you-show-a-modal-view-controller-when-a-uitabbarcontroller-tab-is-tapped">How do you show a modal view controller when a UITabBarController tab is tapped? 
/example-code/arrays/how-to-count-objects-in-a-set-using-nscountedset">How to count objects in a set using NSCountedSet 
/example-code/language/when-to-use-a-set-rather-than-an-array">When to use a set rather than an array 
/example-code/testing/how-to-set-baselines-for-your-performance-tests">How to set baselines for your performance tests</a>
-->

:::

---

<TagLinks />