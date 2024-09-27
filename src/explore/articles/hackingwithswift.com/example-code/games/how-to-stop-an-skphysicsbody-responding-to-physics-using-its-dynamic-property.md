---
lang: ko-KR
title: "How to stop an SKPhysicsBody responding to physics using its dynamic property"
description: "Article(s) > How to stop an SKPhysicsBody responding to physics using its dynamic property"
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
      content: "Article(s) > How to stop an SKPhysicsBody responding to physics using its dynamic property"
    - property: og:description
      content: "How to stop an SKPhysicsBody responding to physics using its dynamic property"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-stop-an-skphysicsbody-responding-to-physics-using-its-dynamic-property.html
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
  "title": "How to stop an SKPhysicsBody responding to physics using its dynamic property | Games - free Swift example code",
  "desc": "How to stop an SKPhysicsBody responding to physics using its dynamic property",
  "link": "https://hackingwithswift.com/example-code/games/how-to-stop-an-skphysicsbody-responding-to-physics-using-its-dynamic-property",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
Enabling physics in SpriteKit is just one line of code, but sometimes you want your physics to be a little more nuanced. For example, your player might have circle physics and should respond to gravity, whereas walls might have rectangle physics and not respond to gravity – they are there to be bounced off, but nothing more.

This problem is solved in SpriteKit by using the `isDynamic` property. It's `true` by default, which means that your objects respond to the world's environment as you would expect, but if you set it to be `false` then you get an object that has active physics but doesn't move as a result of those physics.

Here's an example:

```swift
let wall = SKSpriteNode(imageNamed: "wall")
wall.position = CGPoint(x: 512, y: 0)
wall.physicsBody = SKPhysicsBody(circleOfRadius: wall.size.width / 2.0)
wall.physicsBody?.isDynamic = false
addChild(wall)
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/games/how-to-add-physics-to-an-skspritenode">How to add physics to an SKSpriteNode 
/example-code/games/how-to-debug-physics-in-a-spritekit-scene-using-showsphysics">How to debug physics in a SpriteKit scene using showsPhysics 
/example-code/games/how-to-add-pixel-perfect-physics-to-an-skspritenode">How to add pixel-perfect physics to an SKSpriteNode 
/quick-start/swiftui/how-to-use-dynamic-type-with-a-custom-font">How to use Dynamic Type with a custom font</a>
-->

---

<TagLinks />