---
lang: ko-KR
title: "How to use system icons in your app"
description: "Article(s) > How to use system icons in your app"
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
      content: "Article(s) > How to use system icons in your app"
    - property: og:description
      content: "How to use system icons in your app"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-use-system-icons-in-your-app.html
date: 2019-06-04
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
  "title": "How to use system icons in your app | UIKit - free Swift example code",
  "desc": "How to use system icons in your app",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-use-system-icons-in-your-app",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!--
iOS 13 lets us use icons from a range of over 1500 designed by Apple, all of which come in a variety of weights and sizes. These icons form part of new `UIImage` API, and they are vector-based so you can us them at a range of sizes without loss of quality.

**Note:** This is a stringly typed API, so you should download the new SF Symbols app that lists all variants – <a href="https://developer.apple.com/design/resources/">download it here</a>.

To load a system icon you use the new `UIImage(systemName:)` initializer. In its most basic form it looks like this:

```swift
let paperPlane = UIImage(systemName: "paperplane.fill")
let action = UIImage(systemName: "square.and.arrow.down")
```

You can request specific weights of your icon by creating an instance of `UIImage.SymbolConfiguration` like this:

```swift
let boldConfig = UIImage.SymbolConfiguration(weight: .bold)
let boldBell = UIImage(systemName: "bell", withConfiguration: boldConfig)
```

More usefully, you can also tell UIKit what kind of text is being rendered nearby so it can ensure the icon is sized appropriately, like this:

```swift
let largeConfig = UIImage.SymbolConfiguration(textStyle: .largeTitle)
let largeBolt = UIImage(systemName: "bolt", withConfiguration: largeConfig)
```

This ensures your icons work correctly alongside your other Dynamic Type code.

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/example-code/uikit/how-to-change-your-app-icon-dynamically-with-setalternateiconname">How to change your app icon dynamically with setAlternateIconName() 
/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a>
-->

:::

---

<TagLinks />