---
lang: ko-KR
title: "How to crop a sprite using SKCropNode"
description: "Article(s) > How to crop a sprite using SKCropNode"
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
  - ios-7.1
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to crop a sprite using SKCropNode"
    - property: og:description
      content: "How to crop a sprite using SKCropNode"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-crop-a-sprite-using-skcropnode.html
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
  "title": "How to crop a sprite using SKCropNode | Games - free Swift example code",
  "desc": "How to crop a sprite using SKCropNode",
  "link": "https://hackingwithswift.com/example-code/games/how-to-crop-a-sprite-using-skcropnode",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.1

<!-- TODO: 작성 -->

<!-- 
SpriteKit has a dedicated node type for handling cropping, and you can add things to it, position it where you want, then add it to your scene just like any other node.

However, its role is to crop the nodes it contains: when you assign a node to its `maskNode` property, SpriteKit looks at the colors of the mask and uses that to crop all the child nodes of the crop node. So, you might create an `SKCropNode` with five child nodes, then give it a circular mask node so that parts of the children are invisible. Everything that has a color in the mask won’t be cropped, and everything that is invisible will be.

Let’s look at some code. First you create and position your crop node:

```swift
let cropNode = SKCropNode()
cropNode.position = CGPoint(x: 50, y: 50)
```

Next you set its `maskNode` property to any SpriteKit node. Using a sprite node is easy enough:

```swift
cropNode.maskNode = SKSpriteNode(imageNamed: "cropMask")
```

Third you create a child node, position it inside the crop node, then add it to the crop node:

```swift
childNode = SKSpriteNode(imageNamed: "child")
childNode.position = CGPoint(x: 0, y: -90)
childNode.name = "character"
cropNode.addChild(childNode)
```

Finally add the crop node to your main scene:

```swift
addChild(cropNode)
```

-->

::: details Similar solutions…

<!--
/example-code/games/how-to-warp-a-sprite-using-skwarpgeometrygrid">How to warp a sprite using SKWarpGeometryGrid 
/example-code/games/how-to-change-a-sprites-texture-using-sktexture">How to change a sprite’s texture using SKTexture 
/example-code/games/how-to-make-one-sprite-draw-in-front-of-another-using-zposition">How to make one sprite draw in front of another using zPosition 
/example-code/games/how-to-make-a-sprite-follow-a-path">How to make a sprite follow a path 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a>
-->

---

<TagLinks />