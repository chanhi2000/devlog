---
lang: ko-KR
title: "How to scale, stretch, move, and rotate UIViews using CGAffineTransform"
description: "Article(s) > How to scale, stretch, move, and rotate UIViews using CGAffineTransform"
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
      content: "Article(s) > How to scale, stretch, move, and rotate UIViews using CGAffineTransform"
    - property: og:description
      content: "How to scale, stretch, move, and rotate UIViews using CGAffineTransform"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-scale-stretch-move-and-rotate-uiviews-using-cgaffinetransform.html
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
  "title": "How to scale, stretch, move, and rotate UIViews using CGAffineTransform | UIKit - free Swift example code",
  "desc": "How to scale, stretch, move, and rotate UIViews using CGAffineTransform",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-scale-stretch-move-and-rotate-uiviews-using-cgaffinetransform",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<VidStack src="youtube/psRBotODPQc" />

<!-- TODO: 작성 -->

<!--
Every `UIView` subclass has a `transform` property that lets you manipulate its size, position and rotation using something called an affine transform. This property is animatable, which means you can make a view smoothly double in size, or make it spin around, just by changing one value.

Here are some examples to get you started:

```swift
imageView.transform = CGAffineTransform(scaleX: 2, y: 2)
imageView.transform = CGAffineTransform(translationX: -256, y: -256)
imageView.transform = CGAffineTransform(rotationAngle: CGFloat.pi)
imageView.transform = CGAffineTransform.identity
```

The first one makes an image view double in size, the second one makes it move up and left 256 points, the third one makes it spin around 180 degrees (the values are expressed in radians), and the fourth one sets the image view's transform back to "identity" – this means "reset."

-->

::: details Similar solutions…

<!--
/example-code/core-graphics/how-to-find-the-scale-from-a-cgaffinetransform">How to find the scale from a CGAffineTransform 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a>
-->

:::

---

<TagLinks />