---
lang: ko-KR
title: "How to create a marching ants effect using lineDashPhase"
description: "Article(s) > How to create a marching ants effect using lineDashPhase"
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
      content: "Article(s) > How to create a marching ants effect using lineDashPhase"
    - property: og:description
      content: "How to create a marching ants effect using lineDashPhase"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/calayer/how-to-create-a-marching-ants-effect-using-linedashphase.html
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
  "title": "How to create a marching ants effect using lineDashPhase | CALayer - free Swift example code",
  "desc": "How to create a marching ants effect using lineDashPhase",
  "link": "https://hackingwithswift.com/example-code/calayer/how-to-create-a-marching-ants-effect-using-linedashphase",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.2

<!-- TODO: 작성 -->

<!-- 
“Marching ants” is the informal name used for animation of a selection: you see a dashed line around whatever you selected, and the dashes slowly move around the selection to show that it’s active.

iOS can achieve most of this effect for you when you’re using a `CAShapeLayer`. To try it out, first create a shape layer with a dashed stroke like this:

```swift
let layer = CAShapeLayer()
let bounds = CGRect(x: 50, y: 50, width: 250, height: 250)
layer.path = UIBezierPath(roundedRect: bounds, byRoundingCorners: .allCorners, cornerRadii: CGSize(width: 20, height: 20)).cgPath
layer.strokeColor = UIColor.black.cgColor
layer.fillColor = nil
layer.lineDashPattern = [8, 6]
view.layer.addSublayer(layer)
```

Now you need to create a `CABasicAnimation` to animate the `lineDashPhase` property. Annoyingly, the `lineDashPattern` – the part that describes the way the dashed are drawn – is actually an array of `NSNumber` so we need to boil it down to an integer with code like this:

```swift
layer.lineDashPattern?.reduce(0) { $0 - $1.intValue } ?? 0
```

With the line dash pattern used above – 8, 6 – that will result in `toValue` being set to 14. 

Here’s the animation you need to give the above shape layer a marching ants effect:

```swift
let animation = CABasicAnimation(keyPath: "lineDashPhase")
animation.fromValue = 0
animation.toValue = layer.lineDashPattern?.reduce(0) { $0 - $1.intValue } ?? 0
animation.duration = 1
animation.repeatCount = .infinity
layer.add(animation, forKey: "line")
```

I used `.infinity` for the repeat count so that it lasts forever.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-create-a-marching-ants-border-effect">How to create a marching ants border effect 
/example-code/uikit/how-to-create-a-page-curl-effect-using-uipageviewcontroller">How to create a page curl effect using UIPageViewController 
/example-code/libraries/how-to-get-a-cover-flow-effect-on-ios">How to get a Cover Flow effect on iOS 
/example-code/uikit/how-to-animate-a-blur-effect-using-uivisualeffectview">How to animate a blur effect using UIVisualEffectView 
/example-code/system/nstexteffectletterpressstyle-how-to-add-a-letterpress-effect-to-text">NSTextEffectLetterpressStyle: How to add a letterpress effect to text</a>
-->

:::

---

<TagLinks />