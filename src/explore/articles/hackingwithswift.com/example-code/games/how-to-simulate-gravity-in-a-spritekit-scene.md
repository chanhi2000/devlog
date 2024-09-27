---
lang: ko-KR
title: "How to simulate gravity in a SpriteKit scene"
description: "Article(s) > How to simulate gravity in a SpriteKit scene"
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
  - ios-8.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to simulate gravity in a SpriteKit scene"
    - property: og:description
      content: "How to simulate gravity in a SpriteKit scene"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-simulate-gravity-in-a-spritekit-scene.html
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
  "title": "How to simulate gravity in a SpriteKit scene | Games - free Swift example code",
  "desc": "How to simulate gravity in a SpriteKit scene",
  "link": "https://hackingwithswift.com/example-code/games/how-to-simulate-gravity-in-a-spritekit-scene",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Once you’ve given all your SpriteKit nodes physics bodies, you might want to add some simulated gravity so they fall to the ground over time. This technique is also useful if you want to simulate wind (think of it like horizontal gravity), or even for making the user tilt their device to make nodes fall in different directions.

Gravity for your scene is configured using the `physicsWorld.gravity` property. By default it’s set to a value equal to Earth’s gravity of 9.8 meters per second, but you can change that however you want. For example, you might want to simulate someone walking on the moon where gravity is 1.62 meters per second:

```swift
physicsWorld.gravity = CGVector(dx: 0, dy: -1.62)
```

Alternatively you can disable gravity entirely by using a zero vector:

```swift
physicsWorld.gravity = .zero
```

These changes don’t need to be permanent – you could disable gravity when the player picks up an anti-grav belt, then re-enable it after 30 seconds.

-->

::: details Similar solutions…

<!--
/example-code/games/how-to-debug-physics-in-a-spritekit-scene-using-showsphysics">How to debug physics in a SpriteKit scene using showsPhysics 
/quick-start/swiftui/how-to-integrate-spritekit-using-spriteview">How to integrate SpriteKit using SpriteView 
/example-code/games/how-to-create-a-spritekit-texture-atlas-in-xcode">How to create a SpriteKit texture atlas in Xcode 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/games/how-to-stop-an-skphysicsbody-responding-to-physics-using-its-dynamic-property">How to stop an SKPhysicsBody responding to physics using its dynamic property</a>
-->

---

<TagLinks />