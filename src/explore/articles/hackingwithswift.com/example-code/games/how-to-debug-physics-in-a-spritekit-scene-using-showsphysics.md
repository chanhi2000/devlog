---
lang: ko-KR
title: "How to debug physics in a SpriteKit scene using showsPhysics"
description: "Article(s) > How to debug physics in a SpriteKit scene using showsPhysics"
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
      content: "Article(s) > How to debug physics in a SpriteKit scene using showsPhysics"
    - property: og:description
      content: "How to debug physics in a SpriteKit scene using showsPhysics"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-debug-physics-in-a-spritekit-scene-using-showsphysics.html
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
  "title": "How to debug physics in a SpriteKit scene using showsPhysics | Games - free Swift example code",
  "desc": "How to debug physics in a SpriteKit scene using showsPhysics",
  "link": "https://hackingwithswift.com/example-code/games/how-to-debug-physics-in-a-spritekit-scene-using-showsphysics",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
SpriteKit’s `SKView` class has a few built-in debugging options, of which two are enabled by default: `showsFPS` to show the current frames per second, and `showsNodeCount` to show how many nodes are currently in your scene.

If you’re having trouble understanding the way your physics objects are behaving, you should enable the `showsPhysics` option on your view, like this:

```swift
skView.showsPhysics = true
```

You can put that into <FontIcon icon="fa-brands fa-swift"/>`GameViewController.swift` if you’re using Xcode’s default SpriteKit template, alongside `showsFPS` and `showsNodeCount`.

When set to true, `showsPhysics` will automatically draw blue lines around all your physics shapes, allowing you to see them in exactly the same way as the physics engine does. Hopefully you’ll be able to see where you’ve made a mistake and can correct it quickly!

-->

::: details Similar solutions…

<!--
/example-code/games/how-to-simulate-gravity-in-a-spritekit-scene">How to simulate gravity in a SpriteKit scene 
/example-code/games/how-to-stop-an-skphysicsbody-responding-to-physics-using-its-dynamic-property">How to stop an SKPhysicsBody responding to physics using its dynamic property 
/example-code/games/how-to-add-physics-to-an-skspritenode">How to add physics to an SKSpriteNode 
/example-code/games/how-to-add-pixel-perfect-physics-to-an-skspritenode">How to add pixel-perfect physics to an SKSpriteNode 
/example-code/language/how-to-print-debug-text-in-swift">How to print debug text in Swift</a>
-->

---

<TagLinks />