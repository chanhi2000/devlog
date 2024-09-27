---
lang: ko-KR
title: "How to make a shape draw itself using strokeEnd"
description: "Article(s) > How to make a shape draw itself using strokeEnd"
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
  - ios-3.2
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to make a shape draw itself using strokeEnd"
    - property: og:description
      content: "How to make a shape draw itself using strokeEnd"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/calayer/how-to-make-a-shape-draw-itself-using-strokeend.html
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
  "title": "How to make a shape draw itself using strokeEnd | CALayer - free Swift example code",
  "desc": "How to make a shape draw itself using strokeEnd",
  "link": "https://hackingwithswift.com/example-code/calayer/how-to-make-a-shape-draw-itself-using-strokeend",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.2

<!-- TODO: 작성 -->

<!-- 
iOS makes it easy to draw shapes using `CAShapeLayer`, but you also get the ability to adjust *how* shapes are drawn. By manipulating the `strokeStart` and `strokeEnd` properties you can make shapes draw themselves on the screen: you can present a half-drawn star, or a three-quarters drawn circle, for example.

However, as clever as that is what’s *really* neat is being able to animate the drawing process. To try it out, first create a `CAShapeLayer` with a stroke that’s visible, like this one:

```swift
let layer = CAShapeLayer()
let bounds = CGRect(x: 50, y: 50, width: 250, height: 250)
layer.path = UIBezierPath(roundedRect: bounds, byRoundingCorners: .allCorners, cornerRadii: CGSize(width: 20, height: 20)).cgPath
layer.strokeColor = UIColor.black.cgColor
layer.fillColor = nil
layer.lineDashPattern = [8, 6]
view.layer.addSublayer(layer)
```

Now create and add a `CABasicAnimation` to adjust the `strokeEnd` property:

```swift
let animation = CABasicAnimation(keyPath: "strokeEnd")
animation.fromValue = 0
animation.toValue = 1
animation.duration = 2
animation.autoreverses = true
animation.repeatCount = .infinity
layer.add(animation, forKey: "line")
```

I made that animate from 0 (not drawn) to 1 (fully drawn) over two seconds, but also made it reverse at the end and repeat infinite times.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-draw-part-of-a-solid-shape-using-trim">How to draw part of a solid shape using trim() 
/quick-start/swiftui/how-to-make-a-view-dismiss-itself">How to make a view dismiss itself 
/example-code/core-graphics/how-to-use-core-graphics-blend-modes-to-draw-a-uiimage-differently">How to use Core Graphics blend modes to draw a UIImage differently 
/example-code/games/how-to-make-one-sprite-draw-in-front-of-another-using-zposition">How to make one sprite draw in front of another using zPosition 
/quick-start/swiftui/how-to-draw-images-using-image-views">How to draw images using Image views</a>
-->

:::

---

<TagLinks />