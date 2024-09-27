---
lang: ko-KR
title: "How to run code after a delay using asyncAfter() and perform()"
description: "Article(s) > How to run code after a delay using asyncAfter() and perform()"
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
  - ios-4.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to run code after a delay using asyncAfter() and perform()"
    - property: og:description
      content: "How to run code after a delay using asyncAfter() and perform()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-run-code-after-a-delay-using-asyncafter-and-perform.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "System - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/system/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to run code after a delay using asyncAfter() and perform() | System - free Swift example code",
  "desc": "How to run code after a delay using asyncAfter() and perform()",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-run-code-after-a-delay-using-asyncafter-and-perform",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.0

<VidStack src="youtube/1RD8-5_Zsws" />

<!-- TODO: 작성 -->

<!-- 
There are two ways to run code after a delay using Swift: GCD and `perform(_:with:afterDelay:)`, but GCD has the advantage that it can run arbitrary blocks of code, whereas the `perform()` method runs methods.

So, using GCD we can write something that runs code after a half-second delay:

```swift
DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
    // your code here
}
```

An alternative option is to use `perform(_:with:afterDelay:)`, which lets you specify a method to call after a certain time has elapsed.

To call the `authenticate()` method after 1 second, you would use this code:

```swift
perform(#selector(authenticate), with: nil, afterDelay: 1)
```

Note: any method called using `perform(_:with:afterDelay:)` must be marked with the `@objc` attribute.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a>
-->

:::

---

<TagLinks />