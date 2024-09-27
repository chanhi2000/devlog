---
lang: ko-KR
title: "How to draw a circle using Core Graphics: addEllipse(in:)"
description: "Article(s) > How to draw a circle using Core Graphics: addEllipse(in:)"
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
      content: "Article(s) > How to draw a circle using Core Graphics: addEllipse(in:)"
    - property: og:description
      content: "How to draw a circle using Core Graphics: addEllipse(in:)"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-draw-a-circle-using-core-graphics-addellipsein.html
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
  "title": "How to draw a circle using Core Graphics: addEllipse(in:) | Core Graphics - free Swift example code",
  "desc": "How to draw a circle using Core Graphics: addEllipse(in:)",
  "link": "https://hackingwithswift.com/example-code/core-graphics/how-to-draw-a-circle-using-core-graphics-addellipsein",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.0

<!-- TODO: 작성 -->

<!-- 
Core Graphics is able to draw circles and ellipses with just a few lines of code, although there is some set up to do first. The example code below creates a 512x512 circle with a red fill and a black border:

```swift
let renderer = UIGraphicsImageRenderer(size: CGSize(width: 512, height: 512))
let img = renderer.image { ctx in
    ctx.cgContext.setFillColor(UIColor.red.cgColor)
    ctx.cgContext.setStrokeColor(UIColor.green.cgColor)
    ctx.cgContext.setLineWidth(10)

    let rectangle = CGRect(x: 0, y: 0, width: 512, height: 512)
    ctx.cgContext.addEllipse(in: rectangle)
    ctx.cgContext.drawPath(using: .fillStroke)
}
```

Please note: although a 10-point border is specified, Core Graphics draws borders half-way inside and half-way outside the path you create, so if you want to see the whole border (rather than have it cropped) you either need to draw a smaller shape or create a bigger context.

-->

::: details Similar solutions…

<!--
/example-code/core-graphics/how-to-use-core-graphics-blend-modes-to-draw-a-uiimage-differently">How to use Core Graphics blend modes to draw a UIImage differently 
/example-code/core-graphics/how-to-draw-a-square-using-core-graphics-addrect">How to draw a square using Core Graphics: addRect() 
/example-code/core-graphics/how-to-draw-lines-in-core-graphics-moveto-and-addlineto">How to draw lines in Core Graphics: move(to:) and addLine(to:) 
/example-code/core-graphics/how-to-draw-a-text-string-using-core-graphics">How to draw a text string using Core Graphics 
/example-code/uikit/how-to-add-retina-and-retina-hd-graphics-to-your-project">How to add Retina and Retina HD graphics to your project</a>
-->

:::

---

<TagLinks />