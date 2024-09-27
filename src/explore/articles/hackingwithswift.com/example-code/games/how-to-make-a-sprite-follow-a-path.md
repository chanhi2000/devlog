---
lang: ko-KR
title: "How to make a sprite follow a path"
description: "Article(s) > How to make a sprite follow a path"
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
      content: "Article(s) > How to make a sprite follow a path"
    - property: og:description
      content: "How to make a sprite follow a path"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-make-a-sprite-follow-a-path.html
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
  "title": "How to make a sprite follow a path | Games - free Swift example code",
  "desc": "How to make a sprite follow a path",
  "link": "https://hackingwithswift.com/example-code/games/how-to-make-a-sprite-follow-a-path",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
SpriteKit makes it easy for a node to follow a path we specify, and you can use it to make rockets take off, enemies to zig zag around a maze, and more.

First, create a `UIBezierPath` specifying the shape of your path: 

```swift
let path = UIBezierPath()
path.move(to: CGPoint(x: 0, y: 0))
path.addLine(to: CGPoint(x: 0, y: 1000))
```

That will move directly up.

Next, turn that into an `SKAction` using `SKAction.follow()`. You can specify whether this path is an *offset* or contains absolute coordinates – we used X:0 Y:0 above, so if we request offset movement that will be equivalent to the node’s starting position.

The `follow()` method also accepts parameters for speed (how fast the movement should happen), and whether the node should orient itself to the path. The orientation option is particularly neat: your node will turn itself so that it’s always facing towards the path.

Try this code to make a node follow a path with path orientation enabled:

```swift
let move = SKAction.follow(path.cgPath, asOffset: true, orientToPath: true, speed: 200)
node.run(move)
```

-->

::: details Similar solutions…

<!--
/example-code/games/how-to-warp-a-sprite-using-skwarpgeometrygrid">How to warp a sprite using SKWarpGeometryGrid 
/example-code/games/how-to-make-one-sprite-draw-in-front-of-another-using-zposition">How to make one sprite draw in front of another using zPosition 
/example-code/games/how-to-change-a-sprites-texture-using-sktexture">How to change a sprite’s texture using SKTexture 
/example-code/games/how-to-crop-a-sprite-using-skcropnode">How to crop a sprite using SKCropNode 
/quick-start/swiftui/how-to-draw-a-custom-path">How to draw a custom path</a>
-->

---

<TagLinks />