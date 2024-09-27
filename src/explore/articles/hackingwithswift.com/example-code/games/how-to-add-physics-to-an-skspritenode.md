---
lang: ko-KR
title: "How to add physics to an SKSpriteNode"
description: "Article(s) > How to add physics to an SKSpriteNode"
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
      content: "Article(s) > How to add physics to an SKSpriteNode"
    - property: og:description
      content: "How to add physics to an SKSpriteNode"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-add-physics-to-an-skspritenode.html
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
  "title": "How to add physics to an SKSpriteNode | Games - free Swift example code",
  "desc": "How to add physics to an SKSpriteNode",
  "link": "https://hackingwithswift.com/example-code/games/how-to-add-physics-to-an-skspritenode",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
SpriteKit comes with a modified version of the Box2D physics framework, and it's wrapped up a lot of complicated physics mathematics into just one or two lines of code. For example, we can create a square, red sprite and give it rectangular physics like this:

```swift
let box = SKSpriteNode(color: UIColor.red, size: CGSize(width: 64, height: 64))
box.physicsBody = SKPhysicsBody(rectangleOf: CGSize(width: 64, height: 64))
```

That rectangle will wrap perfectly around the box's color, so it will bounce and rotate as it collides with other objects in your scene.

If you want to create circular physics to simulate balls, this is done using the `circleOfRadius` constructor:

```swift
let ball = SKSpriteNode(imageNamed: "ballRed")
ball.physicsBody = SKPhysicsBody(circleOfRadius: ball.size.width / 2.0)
```

-->

::: details Similar solutions…

<!--
/example-code/games/how-to-add-pixel-perfect-physics-to-an-skspritenode">How to add pixel-perfect physics to an SKSpriteNode 
/example-code/games/how-to-stop-an-skphysicsbody-responding-to-physics-using-its-dynamic-property">How to stop an SKPhysicsBody responding to physics using its dynamic property 
/example-code/games/how-to-add-a-fragment-shader-to-an-skspritenode-using-skshader">How to add a fragment shader to an SKSpriteNode using SKShader 
/example-code/games/how-to-debug-physics-in-a-spritekit-scene-using-showsphysics">How to debug physics in a SpriteKit scene using showsPhysics 
/example-code/games/how-to-made-an-skspritenode-render-faster-using-blendmode">How to made an SKSpriteNode render faster using blendMode</a>
-->

---

<TagLinks />