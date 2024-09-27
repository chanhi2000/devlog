---
lang: ko-KR
title: "How to customize a view controller’s back button on a navigation bar: backBarButtonItem"
description: "Article(s) > How to customize a view controller’s back button on a navigation bar: backBarButtonItem"
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
      content: "Article(s) > How to customize a view controller’s back button on a navigation bar: backBarButtonItem"
    - property: og:description
      content: "How to customize a view controller’s back button on a navigation bar: backBarButtonItem"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-customize-a-view-controllers-back-button-on-a-navigation-bar-backbarbuttonitem.html
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
  "title": "How to customize a view controller’s back button on a navigation bar: backBarButtonItem | UIKit - free Swift example code",
  "desc": "How to customize a view controller’s back button on a navigation bar: backBarButtonItem",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-customize-a-view-controllers-back-button-on-a-navigation-bar-backbarbuttonitem",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
When you move between view controllers using `UINavigationController`, it automatically configures a Back button show either “Back” or the title of the previous view controller. That usually works well enough, but if your previous controller has a long title you’ll probably want something custom.

This is where the `backBarButtonItem` property comes in: set this to an instance of `UIBarButtonItem` to have UIKit create a back button title of your choosing. You don’t need to provide anything for the `target` or `action` parameters of your button, because even with a custom title it’s still just a back button.

Here’s some example code:

```swift
navigationItem.backBarButtonItem = UIBarButtonItem(title: "Cancel", style: .plain, target: nil, action: nil)
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-add-a-bar-button-to-a-navigation-bar">How to add a bar button to a navigation bar 
/example-code/uikit/how-to-detect-when-the-back-button-is-tapped">How to detect when the Back button is tapped 
/example-code/uikit/how-to-add-a-button-to-a-navigation-bar-using-storyboards">How to add a button to a navigation bar using storyboards 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/how-to-customize-the-submit-button-for-textfield-securefield-and-texteditor">How to customize the submit button for TextField, SecureField, and TextEditor</a>
-->

:::

---

<TagLinks />