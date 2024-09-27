---
lang: ko-KR
title: "How to draw lines in Core Graphics: move(to:) and addLine(to:)"
description: "Article(s) > How to draw lines in Core Graphics: move(to:) and addLine(to:)"
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
      content: "Article(s) > How to draw lines in Core Graphics: move(to:) and addLine(to:)"
    - property: og:description
      content: "How to draw lines in Core Graphics: move(to:) and addLine(to:)"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-draw-lines-in-core-graphics-moveto-and-addlineto.html
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
  "title": "How to draw lines in Core Graphics: move(to:) and addLine(to:) | Core Graphics - free Swift example code",
  "desc": "How to draw lines in Core Graphics: move(to:) and addLine(to:)",
  "link": "https://hackingwithswift.com/example-code/core-graphics/how-to-draw-lines-in-core-graphics-moveto-and-addlineto",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.0

<!-- TODO: 작성 -->

<!-- 
You can draw lines in Core Graphics using `move(to:)` and `addLine(to:)`. The first function moves the Core Graphics path to a `CGPoint` of your choosing, and the second function moves the path to a new point while also adding a line. Once you add in the required code to set up a context and choose a color, you can draw a triangle with this code:

```swift
let renderer1 = UIGraphicsImageRenderer(size: CGSize(width: 500, height: 500))
let img1 = renderer1.image { ctx in
    ctx.cgContext.setStrokeColor(UIColor.white.cgColor)
    ctx.cgContext.setLineWidth(3)

    ctx.cgContext.move(to: CGPoint(x: 50, y: 450))
    ctx.cgContext.addLine(to: CGPoint(x: 250, y: 50))
    ctx.cgContext.addLine(to: CGPoint(x: 450, y: 450))
    ctx.cgContext.addLine(to: CGPoint(x: 50, y: 450))

    let rectangle = CGRect(x: 0, y: 0, width: 512, height: 512)
    ctx.cgContext.addRect(rectangle)
    ctx.cgContext.drawPath(using: .fillStroke)
}
```

Once you've mastered drawing basic lines, you can create neat effects by rotating the context as you draw, like this:

```swift
let renderer2 = UIGraphicsImageRenderer(size: CGSize(width: 512, height: 512))
let img2 = renderer2.image { ctx in
    ctx.cgContext.setStrokeColor(UIColor.black.cgColor)

    ctx.cgContext.translateBy(x: 256, y: 256)

    var first = true
    var length: CGFloat = 256

    for _ in 0 ..< 256 {
        ctx.cgContext.rotate(by: CGFloat.pi / 2)

        if first {
            ctx.cgContext.move(to: CGPoint(x: length, y: 50))
            first = false
        } else {
            ctx.cgContext.addLine(to: CGPoint(x: length, y: 50))
        }

        length *= 0.99
    }

    ctx.cgContext.strokePath()
}
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/core-graphics/how-to-calculate-the-point-where-two-lines-intersect">How to calculate the point where two lines intersect 
/example-code/core-graphics/how-to-use-core-graphics-blend-modes-to-draw-a-uiimage-differently">How to use Core Graphics blend modes to draw a UIImage differently</a>
-->

:::

---

<TagLinks />