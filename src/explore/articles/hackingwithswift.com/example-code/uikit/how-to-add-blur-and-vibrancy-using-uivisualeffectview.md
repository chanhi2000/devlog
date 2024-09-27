---
lang: ko-KR
title: "How to add blur and vibrancy using UIVisualEffectView"
description: "Article(s) > How to add blur and vibrancy using UIVisualEffectView"
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
  - ios-8.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to add blur and vibrancy using UIVisualEffectView"
    - property: og:description
      content: "How to add blur and vibrancy using UIVisualEffectView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-add-blur-and-vibrancy-using-uivisualeffectview.html
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
  "title": "How to add blur and vibrancy using UIVisualEffectView | UIKit - free Swift example code",
  "desc": "How to add blur and vibrancy using UIVisualEffectView",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-add-blur-and-vibrancy-using-uivisualeffectview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!--
As of iOS 8.0, visual effects such as blur and vibrancy are a cinch because Apple provides a built in `UIView` subclass that does all the hard work: `UIVisualEffectView`. For example, if you want to blur an image, you would use this code:

```swift
let imageView = UIImageView(image: UIImage(named: "example"))
imageView.frame = view.bounds
imageView.contentMode = .scaleToFill
view.addSubview(imageView)

let blurEffect = UIBlurEffect(style: .dark)
let blurredEffectView = UIVisualEffectView(effect: blurEffect)
blurredEffectView.frame = imageView.bounds
view.addSubview(blurredEffectView)
```

As well as blurring content, Apple also lets you add a "vibrancy" effect to your views – this is a translucency effect designed to ensure that text is readable when it's over any kind of blurred background, and it's used to create that soft glow effect you see in the notification center.

We could extend the previous example so that it adds a segmented control in the middle of the view, using a vibrancy effect. This is accomplished by created a second `UIVisualEffectView` inside the first one, this time using `UIVibrancyEffect` to create the glow. Note that you need to use the same blur type for both your visual effect views, otherwise the glow effect will be incorrect.

```swift
let segmentedControl = UISegmentedControl(items: ["First Item", "Second Item"])
segmentedControl.sizeToFit()
segmentedControl.center = view.center

let vibrancyEffect = UIVibrancyEffect(blurEffect: blurEffect)
let vibrancyEffectView = UIVisualEffectView(effect: vibrancyEffect)
vibrancyEffectView.frame = imageView.bounds

vibrancyEffectView.contentView.addSubview(segmentedControl)
blurredEffectView.contentView.addSubview(vibrancyEffectView)
```

Warning: you need to add child views to the `contentView` property of a `UIVisualEffectView` otherwise they will not be drawn correctly.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-animate-a-blur-effect-using-uivisualeffectview">How to animate a blur effect using UIVisualEffectView 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a>
-->

:::

---

<TagLinks />