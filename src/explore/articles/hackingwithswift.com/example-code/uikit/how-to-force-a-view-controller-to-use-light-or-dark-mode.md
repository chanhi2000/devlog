---
lang: ko-KR
title: "How to force a view controller to use light or dark mode"
description: "Article(s) > How to force a view controller to use light or dark mode"
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
  - ios-13.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to force a view controller to use light or dark mode"
    - property: og:description
      content: "How to force a view controller to use light or dark mode"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-force-a-view-controller-to-use-light-or-dark-mode.html
date: 2019-06-03
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
  "title": "How to force a view controller to use light or dark mode | UIKit - free Swift example code",
  "desc": "How to force a view controller to use light or dark mode",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-force-a-view-controller-to-use-light-or-dark-mode",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!--
By default all instances of `UIViewController` are set to automatically adapt their color appearance to match the user’s system preferences, but if you want you can force some or all of your app to use light or dark mode by setting the `overrideUserInterfaceStyle` property of your view controller to `.light` or `.dark`.

For example:

```swift
class ViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        overrideUserInterfaceStyle = .dark    
    }
}
```

This setting exists on other containers, such as `UIWindow` and `UIView`, and the value of this property cascades to everything inside the thing you change. So, if you set your main `UIWindow` to always have dark mode, then all view controllers and views inside it will always have dark mode.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-show-different-images-and-other-views-in-light-or-dark-mode">How to show different images and other views in light or dark mode 
/quick-start/swiftui/how-to-preview-your-layout-in-light-and-dark-mode">How to preview your layout in light and dark mode 
/example-code/uicolor/how-to-use-semantic-colors-to-help-your-ios-app-adapt-to-dark-mode">How to use semantic colors to help your iOS app adapt to dark mode 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/how-to-detect-dark-mode">How to detect dark mode</a>
-->

:::

---

<TagLinks />