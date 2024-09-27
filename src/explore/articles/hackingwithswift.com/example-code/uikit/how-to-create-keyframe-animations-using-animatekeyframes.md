---
lang: ko-KR
title: "How to create keyframe animations using animateKeyframes()"
description: "Article(s) > How to create keyframe animations using animateKeyframes()"
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
      content: "Article(s) > How to create keyframe animations using animateKeyframes()"
    - property: og:description
      content: "How to create keyframe animations using animateKeyframes()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-create-keyframe-animations-using-animatekeyframes.html
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
  "title": "How to create keyframe animations using animateKeyframes() | UIKit - free Swift example code",
  "desc": "How to create keyframe animations using animateKeyframes()",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-create-keyframe-animations-using-animatekeyframes",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
If you need to combine a selection of animations over time the easiest thing to do is create a keyframe animation. This starts with a call to `animateKeyframes()`, then you go ahead and call `addKeyframe()` as many times as you need.

Each keyframe you add has a relative start time and relative duration, so they work independently of the overall timing. You also provide each keyframe with the animation it should perform, again not worrying about the rest of the animation. When it runs, iOS combines them all together, blending one animation seamlessly into the next.

To give you an example, here’s some code that moves and scales an image view around the screen:

```swift
let start = self.imageView.center

UIView.animateKeyframes(withDuration: 5, delay: 0, options: .calculationModeCubic, animations: {
    UIView.addKeyframe(withRelativeStartTime: 0.0, relativeDuration: 0.25) {
        self.imageView.transform = CGAffineTransform(scaleX: 2, y: 2)
    }

    UIView.addKeyframe(withRelativeStartTime: 0.25, relativeDuration: 0.25) {
        self.imageView.center = CGPoint(x: self.view.bounds.midX, y: self.view.bounds.maxY)
    }

    UIView.addKeyframe(withRelativeStartTime: 0.5, relativeDuration: 0.25) {
        self.imageView.center = CGPoint(x: self.view.bounds.width, y: start.y)
    }

    UIView.addKeyframe(withRelativeStartTime: 0.75, relativeDuration: 0.25) {
        self.imageView.center = start
    }
})
```

The `calculationModeCubic` option tells iOS to blend the animations together, so you’ll see the image view overshoot one animation as it curves into the next. You should also try using `calculationModeCubicPaced` instead – in the above code it makes the scaling part run over the entire length of the animation.

-->

::: details Similar solutions…

<!--
/example-code/calayer/how-to-create-keyframe-animations-using-cakeyframeanimation">How to create keyframe animations using CAKeyframeAnimation 
/quick-start/swiftui/how-to-create-custom-text-effects-and-animations">How to create custom text effects and animations 
/quick-start/swiftui/how-to-override-animations-with-transactions">How to override animations with transactions 
/quick-start/swiftui/how-to-create-multi-step-animations-using-phase-animators">How to create multi-step animations using phase animators 
/quick-start/swiftui/how-to-apply-multiple-animations-to-a-view">How to apply multiple animations to a view</a>
-->

:::

---

<TagLinks />