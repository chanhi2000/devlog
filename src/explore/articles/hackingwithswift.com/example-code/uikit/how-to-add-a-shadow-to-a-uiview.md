---
lang: ko-KR
title: "How to add a shadow to a UIView"
description: "Article(s) > How to add a shadow to a UIView"
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
      content: "Article(s) > How to add a shadow to a UIView"
    - property: og:description
      content: "How to add a shadow to a UIView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-add-a-shadow-to-a-uiview.html
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
  "title": "How to add a shadow to a UIView | UIKit - free Swift example code",
  "desc": "How to add a shadow to a UIView",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-add-a-shadow-to-a-uiview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.2

<VidStack src="youtube/pwaaU3hyPfk" />

<!-- TODO: 작성 -->

<!--
iOS can dynamically generate shadows for any `UIView`, and these shadows automatically adjust to fit the shape of the item in question – even following the curves of text inside a `UILabel`. This functionality is built right in, so all you need to do is configure its properties, and there are four you need to care about:

- `shadowColor` sets the color of the shadow, and needs to be a `CGColor`.
<li>`shadowOpacity` sets how transparent the shadow is, where 0 is invisible and 1 is as strong as possible.
<li>`shadowOffset` sets how far away from the view the shadow should be, to give a 3D offset effect.
<li>`shadowRadius` sets how wide the shadow should be.

Here's a simple example to get you started:

```swift
let yourView = UIView()
yourView.layer.shadowColor = UIColor.black.cgColor
yourView.layer.shadowOpacity = 1
yourView.layer.shadowOffset = .zero
yourView.layer.shadowRadius = 10
```

Be warned: generating shadows dynamically is expensive, because iOS has to draw the shadow around the exact shape of your view's contents. If you can, set the `shadowPath` property to a specific value so that iOS doesn't need to calculate transparency dynamically. For example, this creates a shadow path equivalent to the frame of the view:

```swift
yourView.layer.shadowPath = UIBezierPath(rect: yourView.bounds).cgPath
```

Alternatively, ask iOS to cache the rendered shadow so that it doesn't need to be redrawn:

```swift
yourView.layer.shouldRasterize = true
```

If you want to go down the rasterization route, you should make sure iOS caches the shadow at the same drawing scale as the main screen, otherwise it will look pixelated:

```swift
yourView.layer.rasterizationScale = UIScreen.main.scale
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-draw-a-shadow-around-a-view">How to draw a shadow around a view 
/example-code/uikit/how-to-mask-one-uiview-using-another-uiview">How to mask one UIView using another UIView 
/example-code/calayer/how-to-add-a-border-outline-color-to-a-uiview">How to add a border outline color to a UIView 
/example-code/calayer/how-to-make-a-uiview-fade-out">How to make a UIView fade out 
/quick-start/swiftui/how-to-wrap-a-custom-uiview-for-swiftui">How to wrap a custom UIView for SwiftUI</a>
-->

:::

---

<TagLinks />