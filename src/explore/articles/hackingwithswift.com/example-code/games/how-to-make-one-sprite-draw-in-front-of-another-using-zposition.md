---
lang: ko-KR
title: "How to make one sprite draw in front of another using zPosition"
description: "Article(s) > How to make one sprite draw in front of another using zPosition"
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
      content: "Article(s) > How to make one sprite draw in front of another using zPosition"
    - property: og:description
      content: "How to make one sprite draw in front of another using zPosition"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-make-one-sprite-draw-in-front-of-another-using-zposition.html
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
  "title": "How to make one sprite draw in front of another using zPosition | Games - free Swift example code",
  "desc": "How to make one sprite draw in front of another using zPosition",
  "link": "https://hackingwithswift.com/example-code/games/how-to-make-one-sprite-draw-in-front-of-another-using-zposition",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
All nodes in SpriteKit have a `zPosition` property that dictates its depth on the screen. If you’re using Xcode’s default SpriteKit template then the view you’re rendering into has its `ignoresSiblingOrder` property set to true, which means `zPosition` is the only factor that decides whether one node is drawn above or below another.

All Z positions default to 0, but if you use negative values (-1, -2, etc) it forces those nodes to be drawn behind nodes that have higher Z positions (1, 2, etc). These numbers don’t have any absolute meaning – all that matters is that one number is higher or lower than another. That is, setting a Z position to 10,000 doesn’t make a sprite any larger or more prominent than setting it to 1,000.

Here’s some example code:

```swift
// place the background behind other things
background.zPosition = -1

// place the player in front
player.zPosition = 1

// make the score go above everything
score.zPosition = 10
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-bring-a-subview-to-the-front-of-a-uiview">How to bring a subview to the front of a UIView 
/example-code/games/how-to-warp-a-sprite-using-skwarpgeometrygrid">How to warp a sprite using SKWarpGeometryGrid 
/example-code/games/how-to-make-a-sprite-follow-a-path">How to make a sprite follow a path 
/example-code/games/how-to-change-a-sprites-texture-using-sktexture">How to change a sprite’s texture using SKTexture 
/example-code/system/how-to-make-one-operation-wait-for-another-to-complete-using-adddependency">How to make one operation wait for another to complete using addDependency()</a>
-->

---

<TagLinks />