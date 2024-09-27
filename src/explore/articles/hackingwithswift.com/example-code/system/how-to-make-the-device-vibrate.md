---
lang: ko-KR
title: "How to make the device vibrate"
description: "Article(s) > How to make the device vibrate"
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
      content: "Article(s) > How to make the device vibrate"
    - property: og:description
      content: "How to make the device vibrate"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-make-the-device-vibrate.html
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
  "title": "How to make the device vibrate | System - free Swift example code",
  "desc": "How to make the device vibrate",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-make-the-device-vibrate",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
All iPhones have a built-in motor to create vibration effects, and if you just want a quick vibration it takes just one line of code:

```swift
AudioServicesPlaySystemSound(kSystemSoundID_Vibrate)
```

You’ll need to import the AVFoundation framework if you don’t have it already.

That’s not a particularly easy line of code to remember, so why not make it an extension on `UIDevice`?

```swift
extension UIDevice {
    static func vibrate() {
        AudioServicesPlaySystemSound(kSystemSoundID_Vibrate)
    }
}
```

Now you can just call `UIDevice.vibrate()` as needed.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-detect-device-rotation">How to detect device rotation 
/example-code/uikit/how-to-respond-to-the-device-being-shaken">How to respond to the device being shaken 
/example-code/system/how-to-identify-an-ios-device-uniquely-with-identifierforvendor">How to identify an iOS device uniquely with identifierForVendor 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a>
-->

:::

---

<TagLinks />