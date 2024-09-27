---
lang: ko-KR
title: "How to use Core Motion to read accelerometer data"
description: "Article(s) > How to use Core Motion to read accelerometer data"
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
      content: "Article(s) > How to use Core Motion to read accelerometer data"
    - property: og:description
      content: "How to use Core Motion to read accelerometer data"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-use-core-motion-to-read-accelerometer-data.html
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
  "title": "How to use Core Motion to read accelerometer data | System - free Swift example code",
  "desc": "How to use Core Motion to read accelerometer data",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-use-core-motion-to-read-accelerometer-data",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.0

<!-- TODO: 작성 -->

<!-- 
Core Motion makes it ridiculously easy to read the accelerometer from iPhones and iPads, and it even takes care of managing how the accelerometer and gyroscope work together to report orientation. To get started import the Core Motion framework like this:

```swift
import CoreMotion
```

Now create a property that can store a `CMMotionManager`, like this:

```swift
var motionManager: CMMotionManager!
```

When you're ready to start reading accelerometer data (this will be inside `viewDidLoad()` for most people), go ahead and create your motion manager then call its `startAccelerometerUpdates()` method:

```swift
motionManager = CMMotionManager()
motionManager.startAccelerometerUpdates()
```

Finally, read the accelerometer data as often as you want. It's optional, though, so make sure you unwrap it carefully.

For example, if you want to change the gravity of a SpriteKit physics world so that tipping your device makes things roll around, you'd look for something like this in your `update()` method:

```swift
if let accelerometerData = motionManager.accelerometerData {
    physicsWorld.gravity = CGVector(dx: accelerometerData.acceleration.y * -50, dy: accelerometerData.acceleration.x * 50)
}
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-detect-the-reduce-motion-accessibility-setting">How to detect the Reduce Motion accessibility setting 
/example-code/uikit/how-to-check-whether-users-have-enabled-the-reduced-motion-setting">How to check whether users have enabled the reduced motion setting 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject? 
/quick-start/swiftui/how-to-configure-core-data-to-work-with-swiftui">How to configure Core Data to work with SwiftUI</a>
-->

:::

---

<TagLinks />