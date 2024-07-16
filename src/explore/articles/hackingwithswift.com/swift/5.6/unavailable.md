---
lang: ko-KR
title: Unavailability condition
description: Article(s) > Unavailability condition
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.6
head:
  - - meta:
    - property: og:title
      content: Article(s) > Unavailability condition
    - property: og:description
      content: Unavailability condition
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.6/unavailable.html
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "HACKING WITH SWIFT",
  "desc": "What's new in Swift?",
  "link": "/explore/articles/hackingwithswift.com/swift/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Unavailability condition | Changes in Swift 5.6",
  "desc": "Unavailability condition",
  "link": "https://hackingwithswift.com/swift/5.6/unavailable", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.6

[SE-0290 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0290-negative-availability.md) introduces an inverted form of `#available` called `#unavailable`, which will run some code if an availability check fails.

This is going to be particularly useful in places where you were previously using `#available` with an empty true block because you only wanted to run code if a specific operating system was *unavailable*. So, rather than writing code like this:

```swift
if #available(iOS 15, *) { } else {
    // Code to make iOS 14 and earlier work correctly
}
```

We can now write this:

```swift
if #unavailable(iOS 15) {
    // Code to make iOS 14 and earlier work correctly
}
```

This problem wasn’t just theoretical – using an empty `#available` block was a [fairly (<FontIcon icon="iconfont icon-github"/>`signalapp/Signal-iOS`)](https://github.com/signalapp/Signal-iOS/blob/fb2e0d785081d4f4b2d2f568f1f2a4f8e94ee5a2/Signal/src/ViewControllers/ConversationView/ConversationViewLayout.swift#L890) [common (<FontIcon icon="iconfont icon-github"/>`videolan/vlc-ios`)](https://github.com/videolan/vlc-ios/blob/82e93d7b3e1ce607bacfa61bd4938f36a816be74/SharedSources/Store%20Integration/StoreViewController.swift#L48) [workaround (<FontIcon icon="iconfont icon-github"/>`ProtonMail/ios-mail`)](https://github.com/ProtonMail/ios-mail/blob/bad1e950430f3ae1d893dc8e4ad5f4833ecfbfe2/ProtonMail/ProtonMail/AppDelegate.swift#L226), particularly in the transition to the scene-based UIKit APIs in iOS 13.

Apart from their flipped behavior, one key difference between `#available` and `#unavailable` is the platform wildcard, `*`. This is required with `#available` to allow for potential future platforms, which meant that writing `if #available(iOS 15, *)` would mark some code as being available on iOS versions 15 or later, or all other platforms – macOS, tvOS, watchOS, and any future unknown platforms.

With `#unavailable`, this behavior no longer makes sense: would writing `if #unavailable(iOS 15, *)` mean “the following code should be run on iOS 14 and earlier,” or should it also include macOS, tvOS, watchOS, Linux, and more, where iOS 15 is also unavailable? To avoid this ambiguity, the platform wildcard is *not* allowed with `#unavailable`: only platforms you specifically list are considered for the test.

::: details Other Changes in Swift 5.6

```component VPCard
{
  "title": "Introduce existential any | Changes in Swift 5.6",
  "desc": "Introduce existential any",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/existential-any.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Type placeholders | Changes in Swift 5.6",
  "desc": "Type placeholders",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/type-placeholders.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Allow coding of non String/Int keyed Dictionary into a KeyedContainer | Changes in Swift 5.6",
  "desc": "Allow coding of non String/Int keyed Dictionary into a KeyedContainer",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/codingkeyrepresentable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Unavailability condition | Changes in Swift 5.6",
  "desc": "Unavailability condition",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/unavailable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "More concurrency changes | Changes in Swift 5.6",
  "desc": "More concurrency changes",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/preconcurrency.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Plugins for Swift Package Manager | Changes in Swift 5.6",
  "desc": "Plugins for Swift Package Manager",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/swiftpm-plugins.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.6 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-5-to-5-6.playground.zip)

:::

---

<TagLinks />