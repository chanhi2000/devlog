---
lang: ko-KR
title: "How to made an SKSpriteNode render faster using blendMode"
description: "Article(s) > How to made an SKSpriteNode render faster using blendMode"
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
      content: "Article(s) > How to made an SKSpriteNode render faster using blendMode"
    - property: og:description
      content: "How to made an SKSpriteNode render faster using blendMode"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-made-an-skspritenode-render-faster-using-blendmode.html
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
  "title": "How to made an SKSpriteNode render faster using blendMode | Games - free Swift example code",
  "desc": "How to made an SKSpriteNode render faster using blendMode",
  "link": "https://hackingwithswift.com/example-code/games/how-to-made-an-skspritenode-render-faster-using-blendmode",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
All SpriteKit nodes have a `blendMode` property that describes how they should be drawn to the screen. The default value is `.alpha`, which means the sprite should be drawn so that its alpha transparency is respected – any parts that are translucent get blended with the existing background color at that point, and any fully transparent parts are not drawn at all.

Alpha drawing is obviously a sensible default, because it allows us to render sprites with irregular shapes and holes. However, if you know for a fact that your sprite is completely rectangular and has no holes then using `.alpha` is wasteful – SpriteKit is forced to do alpha blending even though it isn’t required. This is particularly common with background images: if they are designed to fill the full screen, there’s no need to make them drawing using `.alpha`. 

To fix this – and make such drawing significantly faster – change the blend mode of opaque sprites to be `.replace`, which ignores any alpha in the texture:

```swift
background.blendMode = .replace
```

-->

::: details Similar solutions…

<!--
/example-code/games/how-to-add-physics-to-an-skspritenode">How to add physics to an SKSpriteNode 
/example-code/games/how-to-add-pixel-perfect-physics-to-an-skspritenode">How to add pixel-perfect physics to an SKSpriteNode 
/example-code/games/how-to-add-a-fragment-shader-to-an-skspritenode-using-skshader">How to add a fragment shader to an SKSpriteNode using SKShader 
/example-code/games/how-to-color-an-skspritenode-using-colorblendfactor">How to color an SKSpriteNode using colorBlendFactor 
/example-code/uikit/how-to-render-shadows-using-nsshadow-and-setshadow">How to render shadows using NSShadow and setShadow()</a>
-->

---

<TagLinks />