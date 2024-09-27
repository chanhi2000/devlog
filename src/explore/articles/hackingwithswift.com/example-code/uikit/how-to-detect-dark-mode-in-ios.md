---
lang: ko-KR
title: "How to detect dark mode in iOS"
description: "Article(s) > How to detect dark mode in iOS"
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
      content: "Article(s) > How to detect dark mode in iOS"
    - property: og:description
      content: "How to detect dark mode in iOS"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-detect-dark-mode-in-ios.html
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
  "title": "How to detect dark mode in iOS | UIKit - free Swift example code",
  "desc": "How to detect dark mode in iOS",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-detect-dark-mode-in-ios",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!--
If you need to take specific action depending on whether your user is running in light mode or dark mode – for example, doing some different drawing – then you should query the `userInterfaceStyle` of your view controller’s trait collection.

For example, this will print one of two messages when the user taps the screen depending on whether the device is set to light mode or dark mode:

```swift
override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
    if traitCollection.userInterfaceStyle == .light {
        print("Light mode")
    } else {
        print("Dark mode")
    }
}
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-detect-dark-mode">How to detect dark mode 
/quick-start/swiftui/how-to-show-different-images-and-other-views-in-light-or-dark-mode">How to show different images and other views in light or dark mode 
/example-code/uicolor/how-to-use-semantic-colors-to-help-your-ios-app-adapt-to-dark-mode">How to use semantic colors to help your iOS app adapt to dark mode 
/example-code/uikit/how-to-force-a-view-controller-to-use-light-or-dark-mode">How to force a view controller to use light or dark mode 
/quick-start/swiftui/how-to-preview-your-layout-in-light-and-dark-mode">How to preview your layout in light and dark mode</a>
-->

:::

---

<TagLinks />