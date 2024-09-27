---
lang: ko-KR
title: "How to create keyframe animations using CAKeyframeAnimation"
description: "Article(s) > How to create keyframe animations using CAKeyframeAnimation"
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
      content: "Article(s) > How to create keyframe animations using CAKeyframeAnimation"
    - property: og:description
      content: "How to create keyframe animations using CAKeyframeAnimation"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/calayer/how-to-create-keyframe-animations-using-cakeyframeanimation.html
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
  "title": "How to create keyframe animations using CAKeyframeAnimation | CALayer - free Swift example code",
  "desc": "How to create keyframe animations using CAKeyframeAnimation",
  "link": "https://hackingwithswift.com/example-code/calayer/how-to-create-keyframe-animations-using-cakeyframeanimation",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
Keyframe animations offer extraordinary power for developers because they let you set multiple values and have iOS animate between them over times you specify. There are three components: a key path (the property to animate), an array of values (the value you want to use for that property), and an array of key times (when that value should be used for the property).

The number of key times needs to match the number of values, because each value is applied in order when its key time is reached. In the example code below, a view will be moved down 300 points then back to its starting point over 2 seconds. It's important that you understand the key times and duration are separate: the key times should be between 0 and 1, where 0 means "the start of the animation" and 1 means "the end of the animation."

```swift
let animation = CAKeyframeAnimation()
animation.keyPath = "position.y"
animation.values = [0, 300, 0]
animation.keyTimes = [0, 0.5, 1]
animation.duration = 2
animation.isAdditive = true

vw.layer.add(animation, forKey: "move")
```

Because the animation is marked as additive, it means that 300 is relative to its starting position.

We can use key frame animations to create a simple shake effect that moves a view left and right across a brief animation. This will use additive animations again because we want to specify relative values (move to the left and right a bit) rather than absolute values:

```swift
func shakeView(vw: UIView) {
    let animation = CAKeyframeAnimation()
    animation.keyPath = "position.x"
    animation.values = [0, 10, -10, 10, -5, 5, -5, 0 ]
    animation.keyTimes = [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1]
    animation.duration = 0.4
    animation.isAdditive = true

    vw.layer.add(animation, forKey: "shake")
}
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-create-keyframe-animations-using-animatekeyframes">How to create keyframe animations using animateKeyframes() 
/quick-start/swiftui/how-to-create-custom-text-effects-and-animations">How to create custom text effects and animations 
/quick-start/swiftui/how-to-override-animations-with-transactions">How to override animations with transactions 
/quick-start/swiftui/how-to-create-multi-step-animations-using-phase-animators">How to create multi-step animations using phase animators 
/quick-start/swiftui/how-to-apply-multiple-animations-to-a-view">How to apply multiple animations to a view</a>
-->

:::

---

<TagLinks />