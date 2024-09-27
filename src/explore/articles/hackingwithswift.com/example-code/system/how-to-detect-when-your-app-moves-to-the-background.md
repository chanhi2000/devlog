---
lang: ko-KR
title: "How to detect when your app moves to the background"
description: "Article(s) > How to detect when your app moves to the background"
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
      content: "Article(s) > How to detect when your app moves to the background"
    - property: og:description
      content: "How to detect when your app moves to the background"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-detect-when-your-app-moves-to-the-background.html
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
  "title": "How to detect when your app moves to the background | System - free Swift example code",
  "desc": "How to detect when your app moves to the background",
  "link": "https://hackingwithswift.com/example-code/how-to-detect-when-your-app-moves-to-the-background",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.0

<!-- TODO: 작성 -->

<!-- 
There are two ways to be notified when your app moves to the background: implement the `applicationWillResignActive()` method in your app delegate, or register for the `UIApplication.willResignActiveNotification` notification anywhere in your app. This particular notification is sent as soon as your app loses focus, meaning that it's triggered when the user taps the home button once (to return to the home screen) or double taps the home button (to enter multi-tasking).

If you want to go down the app delegate route, you'll find a stub for `applicationWillResignActive()` already in your <FontIcon icon="fa-brands fa-swift"/>`AppDelegate.swift` file. If you want to look for the notification, use this:

```swift
override func viewDidLoad() {
    super.viewDidLoad()
    let notificationCenter = NotificationCenter.default
    notificationCenter.addObserver(self, selector: #selector(appMovedToBackground), name: UIApplication.willResignActiveNotification, object: nil)
}

@objc func appMovedToBackground() {
    print("App moved to background!")
}
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-detect-when-your-app-moves-to-the-background-or-foreground-with-scenephase">How to detect when your app moves to the background or foreground with scenePhase 
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app 
/example-code/uikit/how-to-change-your-app-icon-dynamically-with-setalternateiconname">How to change your app icon dynamically with setAlternateIconName() 
/example-code/location/how-to-read-the-users-location-while-your-app-is-in-the-background">How to read the user’s location while your app is in the background</a>
-->

:::

---

<TagLinks />