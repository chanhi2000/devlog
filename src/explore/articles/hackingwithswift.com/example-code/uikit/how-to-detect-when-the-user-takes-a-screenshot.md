---
lang: ko-KR
title: "How to detect when the user takes a screenshot"
description: "Article(s) > How to detect when the user takes a screenshot"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to detect when the user takes a screenshot"
    - property: og:description
      content: "How to detect when the user takes a screenshot"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-detect-when-the-user-takes-a-screenshot.html
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
  "title": "How to detect when the user takes a screenshot | UIKit - free Swift example code",
  "desc": "How to detect when the user takes a screenshot",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-detect-when-the-user-takes-a-screenshot",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
If you’re showing sensitive data it can be important to know when you’re user takes a screenshot. Snapchat, for example, automatically notifies participants in a conversation if someone takes a screenshot, effectively letting them know their privacy might have been breached.

The key is to watch for the `.UIApplicationUserDidTakeScreenshot` message to be posted, which will happen whenever a screenshot happens. For example, this runs a `screenshotTaken()` method:

```swift
NotificationCenter.default.addObserver(self, selector: #selector(screenshotTaken), name: UIApplication.userDidTakeScreenshotNotification, object: nil)
```

And this just prints a log message instead:

```swift
NotificationCenter.default.addObserver(forName: UIApplication.userDidTakeScreenshotNotification, object: nil, queue: OperationQueue.main) { notification in
    print("Screenshot taken!")
}
```

Use whichever of those two fits your needs best.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table 
/example-code/system/how-to-detect-which-country-a-user-is-in">How to detect which country a user is in 
/quick-start/swiftui/how-to-detect-the-user-hovering-over-a-view">How to detect the user hovering over a view 
/quick-start/concurrency/how-to-call-an-async-function-using-async-let">How to call an async function using async let 
/example-code/uikit/how-to-detect-keyboard-input-using-pressesbegan-and-pressesended">How to detect keyboard input using pressesBegan() and pressesEnded()</a>
-->

:::

---

<TagLinks />