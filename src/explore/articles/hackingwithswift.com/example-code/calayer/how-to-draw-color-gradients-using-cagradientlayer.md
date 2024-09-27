---
lang: ko-KR
title: "How to draw color gradients using CAGradientLayer"
description: "Article(s) > How to draw color gradients using CAGradientLayer"
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
  - ios-3.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to draw color gradients using CAGradientLayer"
    - property: og:description
      content: "How to draw color gradients using CAGradientLayer"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/calayer/how-to-draw-color-gradients-using-cagradientlayer.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "CALayer - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/calayer/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to draw color gradients using CAGradientLayer | CALayer - free Swift example code",
  "desc": "How to draw color gradients using CAGradientLayer",
  "link": "https://hackingwithswift.com/example-code/calayer/how-to-draw-color-gradients-using-cagradientlayer",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.0

<!-- TODO: 작성 -->

<!-- 
I love `CAGradientLayer` because it takes just four lines of code to use, and yet looks great because it quickly and accurately draws smooth color gradients use Core Graphics. Here's a basic example:

```swift
let layer = CAGradientLayer()
layer.frame = CGRect(x: 64, y: 64, width: 160, height: 160)
layer.colors = [UIColor.red.cgColor, UIColor.black.cgColor]
view.layer.addSublayer(layer)
```

Note that you need to fill in an array of `colors` that will be used to draw the gradient. You can provide more than one if you want to, at which point you will also need to fill in the `locations` array to tell `CAGradientLayer` where each color starts and stops. Note that you need to specify your colors as `CGColor` and not `UIColor`.

If you want to make your gradient work in a different direction, you should set the `startPoint` and `endPoint` properties. These are both `CGPoints` where the X and Y values are between 0 and 1, where 0 is one edge and 1 is the opposite edge. The default start point is X 0.5, Y 0.0 and the default end point is X 0.5, Y 1.0, which means both points are in the center of the layer, but it starts at the top and ends at the bottom.

You might be interested to know that `CAGradientLayer` happily works with translucent colors, meaning that you can make a gradient that fades out.

-->

::: details Similar solutions…

<!--
/example-code/core-graphics/how-to-use-core-graphics-blend-modes-to-draw-a-uiimage-differently">How to use Core Graphics blend modes to draw a UIImage differently 
/quick-start/swiftui/how-to-draw-images-using-image-views">How to draw images using Image views 
/example-code/core-graphics/how-to-draw-a-square-using-core-graphics-addrect">How to draw a square using Core Graphics: addRect() 
/example-code/core-graphics/how-to-draw-lines-in-core-graphics-moveto-and-addlineto">How to draw lines in Core Graphics: move(to:) and addLine(to:) 
/example-code/core-graphics/how-to-draw-a-circle-using-core-graphics-addellipsein">How to draw a circle using Core Graphics: addEllipse(in:)</a>
-->

:::

---

<TagLinks />