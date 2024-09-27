---
lang: ko-KR
title: "What is the UIAppearance proxy?"
description: "Article(s) > What is the UIAppearance proxy?"
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
  - ios-5.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > What is the UIAppearance proxy?"
    - property: og:description
      content: "What is the UIAppearance proxy?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/what-is-the-uiappearance-proxy.html
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
  "title": "What is the UIAppearance proxy? | UIKit - free Swift example code",
  "desc": "What is the UIAppearance proxy?",
  "link": "https://hackingwithswift.com/example-code/uikit/what-is-the-uiappearance-proxy",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!--
If you need to make broad changes to UIKit components, the UIAppearance proxy is your friend: you can treat it like an instance of any given UIKit type, except the changes you make there apply to all new instances of that type. Note: it applies to *new* instances of that, and won’t change any *existing* instances you have created.

For example, if you want all navigation bars to have a red background color regardless of where they appear in your app, you could put this into the `didFinishLaunching` method of your app delegate:

```swift
UINavigationBar.appearance().barTintColor = .red
```

For more precise changes you can use `appearance(whenContainedInInstancesOf:)` and specify a container appearance proxy. For example, you might want to make bar button items one color when they appear in navigation bars and another color when they appear in toolbars:

```swift
UIBarButtonItem.appearance(whenContainedInInstancesOf: [UINavigationBar.self]).tintColor = .green
UIBarButtonItem.appearance(whenContainedInInstancesOf: [UIToolbar.self]).tintColor = .red
```

While that’s easy to do, I hope you at least choose better colors!

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-detect-when-the-size-or-position-of-a-view-changes">How to detect when the size or position of a view changes 
/quick-start/swiftui/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location">How to dynamically adjust the appearance of a view based on its size and location 
/quick-start/swiftui/how-to-scroll-to-a-specific-row-in-a-list">How to scroll to a specific row in a list 
/quick-start/swiftui/how-to-add-metal-shaders-to-swiftui-views-using-layer-effects">How to add Metal shaders to SwiftUI views using layer effects 
/example-code/uikit/how-to-style-the-font-in-a-uinavigationbars-title">How to style the font in a UINavigationBar's title</a>
-->

:::

---

<TagLinks />