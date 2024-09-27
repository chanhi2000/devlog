---
lang: ko-KR
title: "How to run code asynchronously using GCD async()"
description: "Article(s) > How to run code asynchronously using GCD async()"
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
      content: "Article(s) > How to run code asynchronously using GCD async()"
    - property: og:description
      content: "How to run code asynchronously using GCD async()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-run-code-asynchronously-using-gcd-async.html
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
  "title": "How to run code asynchronously using GCD async() | System - free Swift example code",
  "desc": "How to run code asynchronously using GCD async()",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-run-code-asynchronously-using-gcd-async",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.0

<!-- TODO: 작성 -->

<!-- 
```swift
DispatchQueue.global(qos: .userInitiated).async { [unowned self] in
    self.yourCodeHere()
}
```

The `.userInitiated` quality of service setting is the highest priority after `userInteractive`. You can also use `utility` (lower priority) or `.background` (lowest priority.)

The second option looks like this:

```swift
performSelector(inBackground: #selector(yourCodeHere), with: nil)
```

You'll need to replace `yourCodeHere` with the name of an actual method. If you want to pass a parameter, make sure and use “yourCodeHere:" and provide a value for the `with` parameter.

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-run-code-on-the-main-thread-using-gcd-async">How to run code on the main thread using GCD async() 
/example-code/system/how-to-send-notifications-asynchronously-using-notificationqueue">How to send notifications asynchronously using NotificationQueue 
/quick-start/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue">How to use @MainActor to run code on the main queue 
/quick-start/concurrency/how-to-call-an-async-function-using-async-let">How to call an async function using async let 
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a>
-->

:::

---

<TagLinks />