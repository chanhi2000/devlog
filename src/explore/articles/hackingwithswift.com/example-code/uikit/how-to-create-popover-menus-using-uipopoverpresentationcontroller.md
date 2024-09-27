---
lang: ko-KR
title: "How to create popover menus using UIPopoverPresentationController"
description: "Article(s) > How to create popover menus using UIPopoverPresentationController"
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
      content: "Article(s) > How to create popover menus using UIPopoverPresentationController"
    - property: og:description
      content: "How to create popover menus using UIPopoverPresentationController"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-create-popover-menus-using-uipopoverpresentationcontroller.html
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
  "title": "How to create popover menus using UIPopoverPresentationController | UIKit - free Swift example code",
  "desc": "How to create popover menus using UIPopoverPresentationController",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-create-popover-menus-using-uipopoverpresentationcontroller",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!--
Show a `UIAlertController` action sheet on iPad isn't as easy as on iPhone. The reason for this is simple: on iPhone the action sheet slides up from the bottom, effectively owning the user's attention until it's dismissed, whereas on iPad it could be shown from anywhere. In fact, if you just try and show one on an iPad like this, your app crashes:

```swift
let ac = UIAlertController(title: "Hello!", message: "This is a test.", preferredStyle: .actionSheet)
present(ac, animated: true)
```

The solution is to use a `UIPopoverPresentationController`, which gets created for you when you try to access the `popoverPresentationController` property of a `UIAlertController`. With this, you can tell it where to show from (and what view those coordinates relate to) before presenting the action sheet, which makes it work correctly on iPad.

To rewrite the previous lines so they work, you'd do this:

```swift
let popover = ac.popoverPresentationController
popover?.sourceView = view
popover?.sourceRect = CGRect(x: 32, y: 32, width: 64, height: 64)

present(ac, animated: true)
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-show-a-popover-view">How to show a popover view 
/example-code/uikit/how-to-create-custom-menus-using-uimenucontroller">How to create custom menus using UIMenuController 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue">How to use @MainActor to run code on the main queue</a>
-->

:::

---

<TagLinks />