---
lang: ko-KR
title: "How to support low data mode networking using allowsConstrainedNetworkAccess"
description: "Article(s) > How to support low data mode networking using allowsConstrainedNetworkAccess"
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
      content: "Article(s) > How to support low data mode networking using allowsConstrainedNetworkAccess"
    - property: og:description
      content: "How to support low data mode networking using allowsConstrainedNetworkAccess"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/networking/how-to-support-low-data-mode-networking-using-allowsconstrainednetworkaccess.html
date: 2019-10-19
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Networking - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/networking/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to support low data mode networking using allowsConstrainedNetworkAccess | Networking - free Swift example code",
  "desc": "How to support low data mode networking using allowsConstrainedNetworkAccess",
  "link": "https://hackingwithswift.com/example-code/networking/how-to-support-low-data-mode-networking-using-allowsconstrainednetworkaccess",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
iOS lets users enable Low Data Mode for any cellular or WiFi connection, which signals to apps that they should be careful how much data they use. This might mean downloading lower-resolution images, it might mean disabling prefetching, or some other way of cutting down on bandwidth use.

By default your app does not honor the user’s low data mode setting, but you can change that by setting the `allowsConstrainedNetworkAccess` property to false for a given `URLRequest`. For example:

```swift
var request = URLRequest(url: someURL)
request.allowsConstrainedNetworkAccess = false
```

When that request executes iOS will immediately return an error if low data mode is enabled, which might be your cue to do another request for less data or lower-resolution images, for example. You can detect this error by typecasting it to a `URLError`, then checking if the `networkUnavailableReason` property is set to `.constrained`:

```swift
if let error = error as? URLError, error.networkUnavailableReason == .constrained {
    // user has activated low data mode so this request could not be satisfied
}
```

**Tip:** There is a similarly named `URLSession` property called `allowsExpensiveNetworkAccess`, which determines whether network requests can be made over a personal hotspot. It’s considered expensive because often users on cellular networks have lower data caps, but broadly speaking you should prefer working with low data mode because it gives users control.

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-detect-low-power-mode-is-enabled">How to detect low power mode is enabled 
/quick-start/swiftui/how-to-support-drag-and-drop-in-swiftui">How to support drag and drop in SwiftUI 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/quick-start/swiftui/how-to-detect-dark-mode">How to detect dark mode 
/example-code/uikit/how-to-support-right-to-left-languages">How to support right-to-left languages</a>
-->

:::

---

<TagLinks />