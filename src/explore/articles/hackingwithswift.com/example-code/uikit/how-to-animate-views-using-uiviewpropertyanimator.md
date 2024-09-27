---
lang: ko-KR
title: "How to animate views using UIViewPropertyAnimator"
description: "Article(s) > How to animate views using UIViewPropertyAnimator"
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
  - ios-11.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to animate views using UIViewPropertyAnimator"
    - property: og:description
      content: "How to animate views using UIViewPropertyAnimator"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-animate-views-using-uiviewpropertyanimator.html
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
  "title": "How to animate views using UIViewPropertyAnimator | UIKit - free Swift example code",
  "desc": "How to animate views using UIViewPropertyAnimator",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-animate-views-using-uiviewpropertyanimator",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!--
iOS 10 introduced a new closure-based animation class in the form of `UIViewPropertyAnimator`. Amongst other things, it lets you interactively adjust the position of an animation, making it jump to any point in time that we need – a technique commonly called *scrubbing*. 

To try it yourself, create a new Single View App project targeting iPad, then lock it so that it supports landscape only and use Interface Builder to embed its view controller inside a navigation controller.

To demonstrate animation scrubbing we’re going to create a `UISlider` then fix it to the bottom of our view, spanning the full width.

Open <FontIcon icon="fa-brands fa-swift"/>`ViewController.swift` and add this code to `viewDidLoad()`:

```swift
let slider = UISlider()
slider.translatesAutoresizingMaskIntoConstraints = false
view.addSubview(slider)

slider.bottomAnchor.constraint(equalTo: view.bottomAnchor).isActive = true
slider.widthAnchor.constraint(equalTo: view.widthAnchor).isActive = true
```

When that slider is dragged from left to right, it will count from 0 to 1 and we’re going to use that to manipulate an animation of a red box sliding across the screen.

Add this code to `viewDidLoad()`:

```swift
let redBox = UIView(frame: CGRect(x: -64, y: 0, width: 128, height: 128))
redBox.translatesAutoresizingMaskIntoConstraints = false
redBox.backgroundColor = UIColor.red
redBox.center.y = view.center.y
view.addSubview(redBox)
```

That creates a 128x128 red box, centered vertically and part-way off the left edge of the screen. Even though we’re going to manipulate it elsewhere in the app, we *don’t* need a property for it – `UIViewPropertyAnimator` works using closures, so it will capture the box for us.

Next, add a property for the animator:

```swift
var animator: UIViewPropertyAnimator!
```

We’re going to make the animation move the box from the left to the right, while spinning around and scaling down to nothing. All that will happen over two seconds, with an ease-in-ease-out curve. Add this to the end of `viewDidLoad()`:

```swift
animator = UIViewPropertyAnimator(duration: 2, curve: .easeInOut) { [unowned self, redBox] in
    redBox.center.x = self.view.frame.width
    redBox.transform = CGAffineTransform(rotationAngle: CGFloat.pi).scaledBy(x: 0.001, y: 0.001)
}
```

That doesn’t actually *run* the animation, which is OK for now. Instead, it creates the animation and stores it away in the `animator` property, ready for us to manipulate.

At this point, we have a slider on the screen and a red box too, so we just need to connect it all. When the slider is moved, its `.valueChanged` event will be triggered, and we can add a method to catch that. We can actually feed the slider’s `value` property – the number from 0.0 to 1.0 – directly into the `fractionComplete` property of our `UIViewPropertyAnimator`, which controls how much of the animation has happened, and UIKit will take care of the rest for us.

Add this method to `ViewController`:

```swift
@objc func sliderChanged(_ sender: UISlider) {
    animator.fractionComplete = CGFloat(sender.value)
}
```

To make that get called by the slider, add this to `viewDidLoad()`:

```swift
slider.addTarget(self, action: #selector(sliderChanged), for: .valueChanged)
```

That’s it! We’ve created the user interface, prepared an animation, then connected the slider’s value to the animation’s progress. If you run the app now you’ll see you can drag the slider from left to right and back again to manipulate the box – you literally have exact control over its position in the animation.

If you wanted to make the animation play the traditional way – i.e., without user control – just call its `startAnimation()` method. You can also set `animator.isReversed = true` to force the animation to move backwards, ultimately returning to its starting state.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-make-uiviewpropertyanimator-scrub-with-a-custom-curve-scrubslinearly">How to make UIViewPropertyAnimator scrub with a custom curve: scrubsLinearly 
/example-code/uikit/how-to-animate-views-with-spring-damping-using-animatewithduration">How to animate views with spring damping using animate(withDuration:) 
/example-code/uikit/how-to-animate-views-using-animatewithduration">How to animate views using animate(withDuration:) 
/example-code/uikit/how-to-animate-when-your-size-class-changes-willtransitionto">How to animate when your size class changes: willTransition(to:) 
/example-code/uikit/how-to-animate-a-blur-effect-using-uivisualeffectview">How to animate a blur effect using UIVisualEffectView</a>
-->

:::

---

<TagLinks />