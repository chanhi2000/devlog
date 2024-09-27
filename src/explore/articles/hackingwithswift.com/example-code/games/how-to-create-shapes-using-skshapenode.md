---
lang: ko-KR
title: "How to create shapes using SKShapeNode"
description: "Article(s) > How to create shapes using SKShapeNode"
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
      content: "Article(s) > How to create shapes using SKShapeNode"
    - property: og:description
      content: "How to create shapes using SKShapeNode"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-create-shapes-using-skshapenode.html
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
  "title": "How to create shapes using SKShapeNode | Games - free Swift example code",
  "desc": "How to create shapes using SKShapeNode",
  "link": "https://hackingwithswift.com/example-code/games/how-to-create-shapes-using-skshapenode",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
SpriteKit's `SKShapeNode` class is a fast and convenient way to draw arbitrary shapes in your games, including circles, lines, rounded rectangles and more. You can assign a fill color, a stroke color and width, plus other drawing options such as whether it should glow – yes, really.

The example code below draws a rounded rectangle smack in the middle of the game scene, giving it a red fill color and a 10-point blue border:

```swift
let shape = SKShapeNode()
shape.path = UIBezierPath(roundedRect: CGRect(x: -128, y: -128, width: 256, height: 256), cornerRadius: 64).cgPath
shape.position = CGPoint(x: frame.midX, y: frame.midY)
shape.fillColor = UIColor.red
shape.strokeColor = UIColor.blue
shape.lineWidth = 10
addChild(shape)
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-combine-shapes-to-create-new-shapes">How to combine shapes to create new shapes 
/example-code/uikit/how-to-draw-shapes-using-uibezierpath">How to draw shapes using UIBezierPath 
/quick-start/swiftui/how-to-fill-and-stroke-shapes-at-the-same-time">How to fill and stroke shapes at the same time 
/example-code/calayer/how-to-draw-shapes-using-cashapelayer">How to draw shapes using CAShapeLayer 
/quick-start/swiftui/swiftuis-built-in-shapes">SwiftUI’s built-in shapes</a>
-->

---

<TagLinks />