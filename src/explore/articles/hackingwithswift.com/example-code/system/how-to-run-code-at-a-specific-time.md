---
lang: ko-KR
title: "How to run code at a specific time"
description: "Article(s) > How to run code at a specific time"
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
      content: "Article(s) > How to run code at a specific time"
    - property: og:description
      content: "How to run code at a specific time"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-run-code-at-a-specific-time.html
date: 2022-03-23
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
  "title": "How to run code at a specific time | System - free Swift example code",
  "desc": "How to run code at a specific time",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-run-code-at-a-specific-time",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
You can use `perform(_:with:afterDelay:)` to run a method after a certain number of seconds have passed, but if you want to run code at a specific time – say at exactly 4pm – then you should use `Timer` instead. This class is great for executing code repeatedly at a specific time interval, but it's also great for running code at an exact time that you specify.

This is accomplished using a `Timer` constructor that accepts an `Date` for when the timer should fire. You can make this date however you want, which is what makes this approach so flexible.

As a simple example, this will create a timer that calls a `runCode()` method in five seconds:

```swift
let date = Date.now.addingTimeInterval(5)
let timer = Timer(fireAt: date, interval: 0, target: self, selector: #selector(runCode), userInfo: nil, repeats: false)
RunLoop.main.add(timer, forMode: .common)
```

Notice how you can specify a `interval` parameter? That's for when you set `repeats` to be `true`. If you have a `Date` 5 seconds from now and an `interval` of 1 (after setting `repeat` to be true!), it means "call `runCode()` after five seconds, then every one second after that."

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/quick-start/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue">How to use @MainActor to run code on the main queue 
/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts 
/example-code/accessibility/how-to-help-voiceover-read-specific-kinds-of-text-using-accessibilitytextualcontext">How to help VoiceOver read specific kinds of text using accessibilityTextualContext 
/example-code/calayer/how-to-round-only-specific-corners-using-maskedcorners">How to round only specific corners using maskedCorners</a>
-->

:::

---

<TagLinks />