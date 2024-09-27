---
lang: ko-KR
title: "How to create a parallax effect in UIKit"
description: "Article(s) > How to create a parallax effect in UIKit"
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
      content: "Article(s) > How to create a parallax effect in UIKit"
    - property: og:description
      content: "How to create a parallax effect in UIKit"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-create-a-parallax-effect-in-uikit.html
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
  "title": "How to create a parallax effect in UIKit | UIKit - free Swift example code",
  "desc": "How to create a parallax effect in UIKit",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-create-a-parallax-effect-in-uikit",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
Parallax effects have been standard since iOS 7.0, and the `UIInterpolatingMotionEffect` class makes this easy by automatically smoothing accelerometer input so your views can adjust to tilt data.

If you want to have a `UIView` respond to tilting, add this function to your code then call it on any view you want:

```swift
func addParallaxToView(vw: UIView) {
    let amount = 100

    let horizontal = UIInterpolatingMotionEffect(keyPath: "center.x", type: .tiltAlongHorizontalAxis)
    horizontal.minimumRelativeValue = -amount
    horizontal.maximumRelativeValue = amount

    let vertical = UIInterpolatingMotionEffect(keyPath: "center.y", type: .tiltAlongVerticalAxis)
    vertical.minimumRelativeValue = -amount
    vertical.maximumRelativeValue = amount

    let group = UIMotionEffectGroup()
    group.motionEffects = [horizontal, vertical]
    vw.addMotionEffect(group)
}
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/answering-the-big-question-should-you-learn-swiftui-uikit-or-both">Answering the big question: should you learn SwiftUI, UIKit, or both? 
/quick-start/swiftui/migrating-from-uikit-to-swiftui">Migrating from UIKit to SwiftUI 
/example-code/uikit/how-to-create-a-page-curl-effect-using-uipageviewcontroller">How to create a page curl effect using UIPageViewController 
/example-code/calayer/how-to-create-a-marching-ants-effect-using-linedashphase">How to create a marching ants effect using lineDashPhase 
/quick-start/swiftui/how-to-create-a-marching-ants-border-effect">How to create a marching ants border effect</a>
-->

:::

---

<TagLinks />