---
lang: ko-KR
title: "How to animate a blur effect using UIVisualEffectView"
description: "Article(s) > How to animate a blur effect using UIVisualEffectView"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to animate a blur effect using UIVisualEffectView"
    - property: og:description
      content: "How to animate a blur effect using UIVisualEffectView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-animate-a-blur-effect-using-uivisualeffectview.html
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
  "title": "How to animate a blur effect using UIVisualEffectView | UIKit - free Swift example code",
  "desc": "How to animate a blur effect using UIVisualEffectView",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-animate-a-blur-effect-using-uivisualeffectview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
UIKit’s `UIVisualEffectView` class lets us add blurring effects to any view, optionally also combining a vibrancy effect to overlaid controls to help make them stand out. This makes it perfect for partly obscuring background content when you want to present information on top, and you can even animate that presentation if you want.

First, place a `UIVisualEffectView` into your view controller, either using code or using IB with an outlet.

When your app launches you should clear the `effect` property of your visual effect view, causing it to do nothing:

```swift
visualEffectView.effect = nil
```

When you want the blur to animate in – i.e., when you’re ready to show information on top – just set that `effect` property to a new instance of `UIBlurEffect` inside an animation block, like this:

```swift
UIView.animate(withDuration: 5) {
    self.visualEffectView.effect = UIBlurEffect(style: UIBlurEffect.Style.prominent)
}
```

UIKit will take care of the rest!

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-add-blur-and-vibrancy-using-uivisualeffectview">How to add blur and vibrancy using UIVisualEffectView 
/quick-start/swiftui/how-to-blur-a-view">How to blur a view 
/example-code/uikit/how-to-animate-views-with-spring-damping-using-animatewithduration">How to animate views with spring damping using animate(withDuration:) 
/example-code/uikit/how-to-animate-views-using-animatewithduration">How to animate views using animate(withDuration:) 
/example-code/uikit/how-to-animate-when-your-size-class-changes-willtransitionto">How to animate when your size class changes: willTransition(to:)</a>
-->

:::

---

<TagLinks />