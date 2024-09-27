---
lang: ko-KR
title: "How to change a sprite’s texture using SKTexture"
description: "Article(s) > How to change a sprite’s texture using SKTexture"
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
      content: "Article(s) > How to change a sprite’s texture using SKTexture"
    - property: og:description
      content: "How to change a sprite’s texture using SKTexture"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-change-a-sprites-texture-using-sktexture.html
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
  "title": "How to change a sprite’s texture using SKTexture | Games - free Swift example code",
  "desc": "How to change a sprite’s texture using SKTexture",
  "link": "https://hackingwithswift.com/example-code/games/how-to-change-a-sprites-texture-using-sktexture",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.1

<!-- TODO: 작성 -->

<!-- 
Although you can create an `SKSpriteNode` from a color and size, most folks create them from textures – image data stored in an asset catalog or texture atlas. SpriteKit’s textures are handled using their own class called `SKTexture`, and you can load them individually then use them to change the texture used to draw a sprite.

At its most basic, you can change a sprite’s texture like this:

```swift
let texture1 = SKTexture(imageNamed: "newTexture")
someSprite.texture = texture1
```

However, that only works if your sprite and the texture are the same size – if they don’t, the texture will get squashed to fit the available space.

If the sprite and texture are *different* sizes then a better thing to do is use the `setTexture()` action, passing in true for its `resize` parameter like this:

```swift
let texture2 = SKTexture(imageNamed: "newTexture")
let action = SKAction.setTexture(texture2, resize: true)
someSprite.run(action)
```

That will switch the texture over, then grow the sprite to fit the new texture size.

-->

::: details Similar solutions…

<!--
/example-code/games/how-to-warp-a-sprite-using-skwarpgeometrygrid">How to warp a sprite using SKWarpGeometryGrid 
/example-code/games/how-to-create-a-spritekit-texture-atlas-in-xcode">How to create a SpriteKit texture atlas in Xcode 
/example-code/games/how-to-crop-a-sprite-using-skcropnode">How to crop a sprite using SKCropNode 
/example-code/games/how-to-make-one-sprite-draw-in-front-of-another-using-zposition">How to make one sprite draw in front of another using zPosition 
/example-code/games/how-to-make-a-sprite-follow-a-path">How to make a sprite follow a path</a>
-->

---

<TagLinks />