---
lang: ko-KR
title: "How to draw shapes using UIBezierPath"
description: "Article(s) > How to draw shapes using UIBezierPath"
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
      content: "Article(s) > How to draw shapes using UIBezierPath"
    - property: og:description
      content: "How to draw shapes using UIBezierPath"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-draw-shapes-using-uibezierpath.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIKit - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uikit/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to draw shapes using UIBezierPath | UIKit - free Swift example code",
  "desc": "How to draw shapes using UIBezierPath",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-draw-shapes-using-uibezierpath",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.2

<!-- TODO: 작성 -->

<!--
`UIBezierPath` is a simple and efficient class for drawing shapes using Swift, which you can then put into `CAShapeLayer`, `SKShapeNode`, or other places. It comes with various shapes built in, so you can write code like this to create a rounded rectangle or a circle:

```swift
let rect = CGRect(x: 0, y: 0, width: 256, height: 256)
let roundedRect = UIBezierPath(roundedRect: rect, cornerRadius: 50)
let circle = UIBezierPath(ovalIn: rect)
```

You can also create custom shapes by moving a pen to a starting position then adding lines:

```swift
let freeform = UIBezierPath()
freeform.move(to: .zero)
freeform.addLine(to: CGPoint(x: 50, y: 50))
freeform.addLine(to: CGPoint(x: 50, y: 150))
freeform.addLine(to: CGPoint(x: 150, y: 50))
freeform.addLine(to: .zero)
```

If your end result needs a `CGPath`, you can get one by accessing the `cgPath` property of your `UIBezierPath`.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-use-uibezierpath-and-cgpath-in-swiftui">How to use UIBezierPath and CGPath in SwiftUI 
/quick-start/swiftui/how-to-combine-shapes-to-create-new-shapes">How to combine shapes to create new shapes 
/example-code/calayer/how-to-draw-shapes-using-cashapelayer">How to draw shapes using CAShapeLayer 
/quick-start/swiftui/how-to-fill-and-stroke-shapes-at-the-same-time">How to fill and stroke shapes at the same time 
/quick-start/swiftui/swiftuis-built-in-shapes">SwiftUI’s built-in shapes</a>
-->

:::

---

<TagLinks />