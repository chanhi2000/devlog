---
lang: ko-KR
title: "How to modify haptic events over time using CHHapticParameterCurve"
description: "Article(s) > How to modify haptic events over time using CHHapticParameterCurve"
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
      content: "Article(s) > How to modify haptic events over time using CHHapticParameterCurve"
    - property: og:description
      content: "How to modify haptic events over time using CHHapticParameterCurve"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/core-haptics/how-to-modify-haptic-events-over-time-using-chhapticparametercurve.html
date: 2019-10-08
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
  "title": "How to modify haptic events over time using CHHapticParameterCurve | Core Haptics - free Swift example code",
  "desc": "How to modify haptic events over time using CHHapticParameterCurve",
  "link": "https://hackingwithswift.com/example-code/core-haptics/how-to-modify-haptic-events-over-time-using-chhapticparametercurve",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
Core Haptics gives us extraordinary control over vibration events, including one-off taps (transient haptics), longer vibrations (continuous haptics), and shaped vibrations (haptic parameter curves).

For example, if you wanted to make a vibration that started strong and faded away, you would use import CoreHaptics and create a property to store the haptic engine:

```swift
var engine: CHHapticEngine?
```

Then you would spin up the haptic engine like this:

```swift
guard CHHapticEngine.capabilitiesForHardware().supportsHaptics else { return }

do {
    engine = try CHHapticEngine()
    try engine?.start()
} catch {
    print("There was an error creating the engine: \(error.localizedDescription)")
}
```

Finally, you need to run this code whenever you want your haptic to play

```swift
// create a dull, strong haptic
let sharpness = CHHapticEventParameter(parameterID: .hapticSharpness, value: 0)
let intensity = CHHapticEventParameter(parameterID: .hapticIntensity, value: 1)

// create a curve that fades from 1 to 0 over one second
let start = CHHapticParameterCurve.ControlPoint(relativeTime: 0, value: 1)
let end = CHHapticParameterCurve.ControlPoint(relativeTime: 1, value: 0)

// use that curve to control the haptic strength
let parameter = CHHapticParameterCurve(parameterID: .hapticIntensityControl, controlPoints: [start, end], relativeTime: 0)

// create a continuous haptic event starting immediately and lasting one second
let event = CHHapticEvent(eventType: .hapticContinuous, parameters: [sharpness, intensity], relativeTime: 0, duration: 1)

// now attempt to play the haptic, with our fading parameter
do {
    let pattern = try CHHapticPattern(events: [event], parameterCurves: [parameter])

    let player = try engine?.makePlayer(with: pattern)
    try player?.start(atTime: 0)
} catch {
    // add your own meaningful error handling here!
    print(error.localizedDescription)
}
```

As you can see, it does take quite a bit of code to get a fairly basic effect. However, the reason for that is because Core Haptics allows us to create more complicated effects by adding more parameters, curves, and events – it’s a remarkably flexible API.

For example, we just created a fading continuous haptic, but we can actually combine that with multiple transient haptics to make an explosion effect: one fading buzz, with lots of smaller little pops going off at the same time.

To try this out, first make sure you follow the setup steps above, then use this code to create and play your haptic:

```swift
var events = [CHHapticEvent]()
var curves = [CHHapticParameterCurve]()

do {
    // create one continuous buzz that fades out
    let sharpness = CHHapticEventParameter(parameterID: .hapticSharpness, value: 0)
    let intensity = CHHapticEventParameter(parameterID: .hapticIntensity, value: 1)

    let start = CHHapticParameterCurve.ControlPoint(relativeTime: 0, value: 1)
    let end = CHHapticParameterCurve.ControlPoint(relativeTime: 1.5, value: 0)

    let parameter = CHHapticParameterCurve(parameterID: .hapticIntensityControl, controlPoints: [start, end], relativeTime: 0)
    let event = CHHapticEvent(eventType: .hapticContinuous, parameters: [sharpness, intensity], relativeTime: 0, duration: 1.5)
    events.append(event)
    curves.append(parameter)
}

for _ in 1...16 {
    // make some sparkles
    let sharpness = CHHapticEventParameter(parameterID: .hapticSharpness, value: 1)
    let intensity = CHHapticEventParameter(parameterID: .hapticIntensity, value: 1)
    let event = CHHapticEvent(eventType: .hapticTransient, parameters: [sharpness, intensity], relativeTime: TimeInterval.random(in: 0.1...1))
    events.append(event)
}

do {
    let pattern = try CHHapticPattern(events: events, parameterCurves: curves)

    let player = try engine?.makePlayer(with: pattern)
    try player?.start(atTime: 0)
} catch {
    print(error.localizedDescription)
}
```

By combining 16 random transient haptics with our fading continuous haptic, we can get an effect that feels great and can be bundled into a method for easier re-use – it’s a really neat special effect you can add to both apps and games.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-generate-haptic-feedback-with-uifeedbackgenerator">How to generate haptic feedback with UIFeedbackGenerator 
/example-code/core-haptics/how-to-detect-whether-haptic-event-playback-is-supported">How to modify haptic events over time using CHHapticParameterCurve 
/quick-start/swiftui/how-to-add-haptic-effects-using-sensory-feedback">How to add haptic effects using sensory feedback 
/quick-start/swiftui/how-to-detect-and-respond-to-key-press-events">How to detect and respond to key press events 
/quick-start/swiftui/how-to-respond-to-view-lifecycle-events-onappear-and-ondisappear">How to respond to view lifecycle events: onAppear() and onDisappear()</a>
-->

:::

---

<TagLinks />