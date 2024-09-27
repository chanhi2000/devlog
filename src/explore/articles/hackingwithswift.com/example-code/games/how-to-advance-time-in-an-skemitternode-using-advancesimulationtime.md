---
lang: ko-KR
title: "How to advance time in an SKEmitterNode using advanceSimulationTime()"
description: "Article(s) > How to advance time in an SKEmitterNode using advanceSimulationTime()"
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
      content: "Article(s) > How to advance time in an SKEmitterNode using advanceSimulationTime()"
    - property: og:description
      content: "How to advance time in an SKEmitterNode using advanceSimulationTime()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-advance-time-in-an-skemitternode-using-advancesimulationtime.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Games - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/games/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to advance time in an SKEmitterNode using advanceSimulationTime() | Games - free Swift example code",
  "desc": "How to advance time in an SKEmitterNode using advanceSimulationTime()",
  "link": "https://hackingwithswift.com/example-code/games/how-to-advance-time-in-an-skemitternode-using-advancesimulationtime",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
When you create a particle system in SpriteKit, the particles start at their creation point and move outwards from there. That’s fine for things like explosions and fire, but if you’re using the particles to simulate something that has no real start or end – space dust, for example – then having your particles start from a particular location looks wrong.

To fix this, you should use the `advanceSimulationTime()` method of `SKEmitterNode`: give it a number of seconds, and it effectively fast forwards the particle system by that amount. For a space dust particle system, this would fill the screen with particles, so the game screen doesn’t start empty.

Here’s some code:

```swift
if let starfield = SKEmitterNode(fileNamed: "Starfield") {
    starfield.position = CGPoint(x: 1024, y: 384)
    starfield.advanceSimulationTime(10)
    addChild(starfield)
}
```

-->

::: details Similar solutions…

<!--
/example-code/games/how-to-emit-particles-using-skemitternode">How to emit particles using SKEmitterNode 
/quick-start/swiftui/how-to-fill-and-stroke-shapes-at-the-same-time">How to fill and stroke shapes at the same time 
/example-code/testing/how-to-benchmark-app-launch-time-using-xctossignpostmetricapplicationlaunch">How to benchmark app launch time using XCTOSSignpostMetric.applicationLaunch 
/example-code/system/how-to-run-code-at-a-specific-time">How to run code at a specific time 
/quick-start/swiftui/how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture">How to make two gestures recognize at the same time using simultaneousGesture()</a>
-->

---

<TagLinks />