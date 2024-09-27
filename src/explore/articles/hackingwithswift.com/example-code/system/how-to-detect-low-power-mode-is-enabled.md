---
lang: ko-KR
title: "How to detect low power mode is enabled"
description: "Article(s) > How to detect low power mode is enabled"
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
  - ios-9.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to detect low power mode is enabled"
    - property: og:description
      content: "How to detect low power mode is enabled"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-detect-low-power-mode-is-enabled.html
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
  "title": "How to detect low power mode is enabled | System - free Swift example code",
  "desc": "How to detect low power mode is enabled",
  "link": "https://hackingwithswift.com/example-code/how-to-detect-low-power-mode-is-enabled",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!-- 
When a user has enabled low-power mode you probably want to avoid doing CPU-intensive work: not only is the system less able to give you resources, but you always want to respect the user's wishes and help their battery last as long as possible.

There are two ways of checking for low-power mode: you can read a property whenever you need it, or register for a notification. First, here's an example with the property:

```swift
func doComplicatedWork() {
    guard ProcessInfo.processInfo.isLowPowerModeEnabled == false else { return }

    // continue doing complicated work here
}
```

You can also register to be notified when the lower power mode state changes, like this:

```swift
NotificationCenter.default.addObserver(self, selector: #selector(powerStateChanged), name: Notification.Name.NSProcessInfoPowerStateDidChange, object: nil)
```

When that method is triggered, you can check the new value of `isLowPowerModeEnabled` to see what state the device is in:

```swift
@objc func powerStateChanged(_ notification: Notification) {
    let lowerPowerEnabled = ProcessInfo.processInfo.isLowPowerModeEnabled
    // take appropriate action
}
```

-->

::: details Similar solutions…

<!--
/example-code/networking/how-to-support-low-data-mode-networking-using-allowsconstrainednetworkaccess">How to support low data mode networking using allowsConstrainedNetworkAccess 
/example-code/uikit/how-to-let-users-tap-on-a-uitableviewcell-while-editing-is-enabled">How to let users tap on a UITableViewCell while editing is enabled 
/example-code/uikit/how-to-check-whether-users-have-enabled-the-reduced-motion-setting">How to check whether users have enabled the reduced motion setting 
/quick-start/swiftui/how-to-detect-dark-mode">How to detect dark mode 
/example-code/uikit/how-to-detect-dark-mode-in-ios">How to detect dark mode in iOS</a>
-->

:::

---

<TagLinks />