---
lang: ko-KR
title: "How to use compiler directives to detect the iOS Simulator"
description: "Article(s) > How to use compiler directives to detect the iOS Simulator"
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
      content: "Article(s) > How to use compiler directives to detect the iOS Simulator"
    - property: og:description
      content: "How to use compiler directives to detect the iOS Simulator"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-compiler-directives-to-detect-the-ios-simulator.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Language - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/language/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to use compiler directives to detect the iOS Simulator | Language - free Swift example code",
  "desc": "How to use compiler directives to detect the iOS Simulator",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-compiler-directives-to-detect-the-ios-simulator",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
Swift makes it easy to write special code that should be executed only in the iOS Simulator. This is helpful to test situations where the simulator and devices don't match, for example testing the accelerometer or camera.

If you want certain code to be run only in the iOS simulator, you should use this:

```swift
#if targetEnvironment(simulator)
// your code
#endif
```

Any code between the `#if` and `#endif` won't even exist when the app is run on devices, so it has zero performance impact. If you want to specify alternate code that should only be run on devices (and never on the simulator) you should use `#else`, like this:

```swift
func updateMotion() {
#if targetEnvironment(simulator)
    // we're on the simulator - calculate pretend movement
    if let currentTouch = lastTouchPosition {
        let diff = CGPoint(x: currentTouch.x - player.position.x, y: currentTouch.y - player.position.y)
        physicsWorld.gravity = CGVector(dx: diff.x / 100, dy: diff.y / 100)
    }
#else
    // we're on a device – use the accelerometer
    if let accelerometerData = motionManager.accelerometerData {
        physicsWorld.gravity = CGVector(dx: accelerometerData.acceleration.y * -50, dy: accelerometerData.acceleration.x * 50)
    }
#endif
}
```

-->

::: details Similar solutions…

<!--
/example-code/xcode/how-to-set-the-clock-in-the-ios-simulator">How to set the clock in the iOS Simulator 
/example-code/uikit/what-does-the-message-simulator-user-has-requested-new-graphics-quality-100-mean">What does the message "Simulator user has requested new graphics quality: 100" mean? 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject? 
/example-code/catalyst/how-to-detect-your-ios-app-is-running-on-macos-catalyst">How to detect your iOS app is running on macOS Catalyst</a>
-->

:::

---

<TagLinks />