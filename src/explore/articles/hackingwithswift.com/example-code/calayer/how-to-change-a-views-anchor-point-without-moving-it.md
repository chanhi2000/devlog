---
lang: ko-KR
title: "How to change a view’s anchor point without moving it"
description: "Article(s) > How to change a view’s anchor point without moving it"
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
  - ios-2.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to change a view’s anchor point without moving it"
    - property: og:description
      content: "How to change a view’s anchor point without moving it"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/calayer/how-to-change-a-views-anchor-point-without-moving-it.html
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
  "title": "How to change a view’s anchor point without moving it | CALayer - free Swift example code",
  "desc": "How to change a view’s anchor point without moving it",
  "link": "https://hackingwithswift.com/example-code/calayer/how-to-change-a-views-anchor-point-without-moving-it",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
Every `UIView` has an anchor point, which is the point around which animations take place. Usually this is the center of the view – X:0.5 Y:0.5 – which means if you rotate a view it will spin around its center.

If you wanted the view to rotate around its top corner, as if someone had driven a nail into that point and you were spinning the view around that corner rather than the center, you can change the anchor point using the `layer.anchorPoint` property.

However, there’s a problem: changing the anchor point also changes the point where the view’s position is calculated, which means changing the anchor point also moves the view’s position.

So, if you want to change a view’s anchor point *without* moving it, here’s a little extension to do just that:

```swift
extension UIView {
    func setAnchorPoint(_ point: CGPoint) {
        var newPoint = CGPoint(x: bounds.size.width * point.x, y: bounds.size.height * point.y)
        var oldPoint = CGPoint(x: bounds.size.width * layer.anchorPoint.x, y: bounds.size.height * layer.anchorPoint.y);

        newPoint = newPoint.applying(transform)
        oldPoint = oldPoint.applying(transform)

        var position = layer.position

        position.x -= oldPoint.x
        position.x += newPoint.x

        position.y -= oldPoint.y
        position.y += newPoint.y

        layer.position = position
        layer.anchorPoint = point
    }
}
```

If you want to see that in action, here’s some code to create a blue `UIView` then animate it rotating around its top-left corner:

```swift
let box = UIView(frame: CGRect(x: 50, y: 50, width: 256, height: 256))
box.backgroundColor = .blue
view.addSubview(box)

box.setAnchorPoint(CGPoint(x: 0, y: 0))

UIView.animate(withDuration: 3) {
    box.transform = CGAffineTransform(rotationAngle: .pi)
}
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-detect-whether-a-scrollview-is-currently-moving-or-is-idle">How to detect whether a scrollview is currently moving or is idle 
/example-code/language/how-to-add-a-custom-initializer-to-a-struct-without-losing-its-memberwise-initializer">How to add a custom initializer to a struct without losing its memberwise initializer 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/strings/how-to-specify-floating-point-precision-in-a-string">How to specify floating-point precision in a string 
/example-code/core-graphics/how-to-calculate-the-point-where-two-lines-intersect">How to calculate the point where two lines intersect</a>
-->

:::

---

<TagLinks />