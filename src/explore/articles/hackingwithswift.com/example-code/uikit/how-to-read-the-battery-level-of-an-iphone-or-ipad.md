---
lang: ko-KR
title: "How to read the battery level of an iPhone or iPad"
description: "Article(s) > How to read the battery level of an iPhone or iPad"
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
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to read the battery level of an iPhone or iPad"
    - property: og:description
      content: "How to read the battery level of an iPhone or iPad"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-read-the-battery-level-of-an-iphone-or-ipad.html
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
  "title": "How to read the battery level of an iPhone or iPad | UIKit - free Swift example code",
  "desc": "How to read the battery level of an iPhone or iPad",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-read-the-battery-level-of-an-iphone-or-ipad",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!--
iOS lets you track the battery level and status of the device you’re running on, which is helpful if you’re overlaying some sort of battery indicator over your user interface. You could even write a trivial app to detect power outages just by plugging in a spare phone then waiting for the charge state to change.

To get started, first enable the `isBatteryMonitoringEnabled` property of the current device, like this:

```swift
UIDevice.current.isBatteryMonitoringEnabled = true
```

You can now read the current battery level as a value between 0.0 (flat) and 1.0 (fully charged) using this:

```swift
let level = UIDevice.current.batteryLevel
```

If you want to be notified every time the battery level changes you can register for the `UIDeviceBatteryLevelDidChange` notification (sent up to once a minute), and you can also register for `UIDeviceBatteryStateDidChange` notification to see when the charge state changes. Both of those require `isBatteryMonitoringEnabled` to be enabled.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-check-whether-an-iphone-or-ipad-is-upside-down-or-face-up">How to check whether an iPhone or iPad is upside down or face up 
/example-code/uikit/how-to-hide-the-home-indicator-on-iphone-x">How to hide the home indicator on iPhone X 
/example-code/location/how-to-make-an-iphone-transmit-an-ibeacon">How to make an iPhone transmit an iBeacon 
/quick-start/swiftui/how-to-read-the-size-and-position-of-a-scrollview">How to read the size and position of a scrollview 
/example-code/uikit/how-to-read-a-title-from-a-uipickerview-using-titleforrow">How to read a title from a UIPickerView using titleForRow</a>
-->

:::

---

<TagLinks />