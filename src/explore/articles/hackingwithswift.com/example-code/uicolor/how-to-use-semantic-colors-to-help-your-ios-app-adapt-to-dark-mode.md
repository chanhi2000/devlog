---
lang: ko-KR
title: "How to use semantic colors to help your iOS app adapt to dark mode"
description: "Article(s) > How to use semantic colors to help your iOS app adapt to dark mode"
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
      content: "Article(s) > How to use semantic colors to help your iOS app adapt to dark mode"
    - property: og:description
      content: "How to use semantic colors to help your iOS app adapt to dark mode"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uicolor/how-to-use-semantic-colors-to-help-your-ios-app-adapt-to-dark-mode.html
date: 2019-06-03
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIClolr - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uicolor/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to use semantic colors to help your iOS app adapt to dark mode | UIClolr - free Swift example code",
  "desc": "How to use semantic colors to help your iOS app adapt to dark mode",
  "link": "https://hackingwithswift.com/example-code/uicolor/how-to-use-semantic-colors-to-help-your-ios-app-adapt-to-dark-mode",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
When specifying colors for objects in your views, it’s often easier to use the built-in semantic colors of `UIColor` rather than specifying our own custom colors that might not look good in both light and dark mode.

For example, when you are coloring a label, use `UIColor.label`, `.secondaryLabel`, or similar so that UIKit will automatically make sure it stands out.

For backgrounds you should use `UIColor.systemBackground`, `.secondarySystemBackground`, or similar so that when you layer one view over another they don’t appear to become merged.

And when you’re using fixed colors like `.red` or `.blue` you should instead use `.systemRed` or `.systemBlue` to get a color that will adapt to the user’s trait environment – it will be a lighter red when in dark mode, and a darker red in light mode, rather than the fixed pure red of `.red`.

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/example-code/uikit/how-to-detect-dark-mode-in-ios">How to detect dark mode in iOS 
/quick-start/swiftui/how-to-show-different-images-and-other-views-in-light-or-dark-mode">How to show different images and other views in light or dark mode 
/example-code/uikit/how-to-force-a-view-controller-to-use-light-or-dark-mode">How to force a view controller to use light or dark mode 
/quick-start/swiftui/how-to-preview-your-layout-in-light-and-dark-mode">How to preview your layout in light and dark mode</a>
-->

:::

---

<TagLinks />