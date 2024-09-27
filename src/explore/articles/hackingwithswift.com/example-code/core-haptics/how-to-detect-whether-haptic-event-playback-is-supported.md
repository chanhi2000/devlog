---
lang: ko-KR
title: "How to detect whether haptic event playback is supported"
description: "Article(s) > How to detect whether haptic event playback is supported"
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
  - ios-13.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to detect whether haptic event playback is supported"
    - property: og:description
      content: "How to detect whether haptic event playback is supported"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/core-haptics/how-to-detect-whether-haptic-event-playback-is-supported.html
date: 2019-10-22
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Core Haptics - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/core-haptics/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to detect whether haptic event playback is supported | Core Haptics - free Swift example code",
  "desc": "How to detect whether haptic event playback is supported",
  "link": "https://hackingwithswift.com/example-code/core-haptics/how-to-detect-whether-haptic-event-playback-is-supported",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
Modern iPhones have extremely sensitive haptic engines inside, allowing us precise control over taps and vibrations, and even mixing effects – see “<a href="/example-code/core-haptics/how-to-play-custom-vibrations-using-core-haptics">How to play custom vibrations using Core Haptics</a>” and “<a href="/example-code/core-haptics/how-to-modify-haptic-events-over-time-using-chhapticparametercurve">How to modify haptic events over time using CHHapticParameterCurve</a>” for more information on that.

However, not all devices support Core Haptics, which is why you should always check for supported hardware before trying to spin up any haptic feedback. Once you added an import for `CoreHaptics`, you can detect haptic availability like this:

```swift
if CHHapticEngine.capabilitiesForHardware().supportsHaptics {
    // your haptics code here
}
```

For easier access you could also make the check a computed property, like this:

```swift
var hapticsAvailable: Bool {
    CHHapticEngine.capabilitiesForHardware().supportsHaptics
}
```

-->

::: details Similar solutions…

<!--
/example-code/core-haptics/how-to-modify-haptic-events-over-time-using-chhapticparametercurve">How to modify haptic events over time using CHHapticParameterCurve 
/example-code/uikit/how-to-generate-haptic-feedback-with-uifeedbackgenerator">How to generate haptic feedback with UIFeedbackGenerator 
/quick-start/swiftui/how-to-add-haptic-effects-using-sensory-feedback">How to add haptic effects using sensory feedback 
/quick-start/concurrency/where-is-swift-concurrency-supported">Where is Swift concurrency supported? 
/quick-start/swiftui/how-to-detect-whether-a-scrollview-is-currently-moving-or-is-idle">How to detect whether a scrollview is currently moving or is idle</a>
-->

:::

---

<TagLinks />