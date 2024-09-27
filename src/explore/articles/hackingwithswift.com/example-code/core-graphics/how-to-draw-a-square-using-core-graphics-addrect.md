---
lang: ko-KR
title: "How to draw a square using Core Graphics: addRect()"
description: "Article(s) > How to draw a square using Core Graphics: addRect()"
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
  - ios-4.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to draw a square using Core Graphics: addRect()"
    - property: og:description
      content: "How to draw a square using Core Graphics: addRect()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-draw-a-square-using-core-graphics-addrect.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Core Graphics - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/core-graphics/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to draw a square using Core Graphics: addRect() | Core Graphics - free Swift example code",
  "desc": "How to draw a square using Core Graphics: addRect()",
  "link": "https://hackingwithswift.com/example-code/core-graphics/how-to-draw-a-square-using-core-graphics-addrect",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.0

<!-- TODO: 작성 -->

<!-- 
You can draw a square (or indeed any size of rectangle) using the `addRect()` Core Graphics function. There's a little bit of set up work required, such as creating a context big enough to hold the square and setting up colors, but the code below does everything you need:

```swift
let renderer = UIGraphicsImageRenderer(size: CGSize(width: 512, height: 512))
let img = renderer.image { ctx in
    ctx.cgContext.setFillColor(UIColor.red.cgColor)
    ctx.cgContext.setStrokeColor(UIColor.green.cgColor)
    ctx.cgContext.setLineWidth(10)

    let rectangle = CGRect(x: 0, y: 0, width: 512, height: 512)
    ctx.cgContext.addRect(rectangle)
    ctx.cgContext.drawPath(using: .fillStroke)
}
```

**Important note:** when setting a line width using `setLineWidth()`, the center of the border is the edge of your path. This means our board will be 5 points inside the rectangle and 5 points outside, because we have a total border width of 10 points. Because the square's path is the same size as the context, this means the outside part of the border will be clipped.

-->

::: details Similar solutions…

<!--
/example-code/core-graphics/how-to-use-core-graphics-blend-modes-to-draw-a-uiimage-differently">How to use Core Graphics blend modes to draw a UIImage differently 
/example-code/core-graphics/how-to-draw-lines-in-core-graphics-moveto-and-addlineto">How to draw lines in Core Graphics: move(to:) and addLine(to:) 
/example-code/core-graphics/how-to-draw-a-circle-using-core-graphics-addellipsein">How to draw a circle using Core Graphics: addEllipse(in:) 
/example-code/core-graphics/how-to-draw-a-text-string-using-core-graphics">How to draw a text string using Core Graphics 
/example-code/uikit/how-to-add-retina-and-retina-hd-graphics-to-your-project">How to add Retina and Retina HD graphics to your project</a>
-->

:::

---

<TagLinks />