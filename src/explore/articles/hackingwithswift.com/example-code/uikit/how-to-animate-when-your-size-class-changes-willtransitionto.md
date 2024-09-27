---
lang: ko-KR
title: "How to animate when your size class changes: willTransition(to:)"
description: "Article(s) > How to animate when your size class changes: willTransition(to:)"
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
      content: "Article(s) > How to animate when your size class changes: willTransition(to:)"
    - property: og:description
      content: "How to animate when your size class changes: willTransition(to:)"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-animate-when-your-size-class-changes-willtransitionto.html
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
  "title": "How to animate when your size class changes: willTransition(to:) | UIKit - free Swift example code",
  "desc": "How to animate when your size class changes: willTransition(to:)",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-animate-when-your-size-class-changes-willtransitionto",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!--
A size class change is usually triggered by your user rotating their device, but it can also happen for example when using the new iOS 9.0 multitasking to adjust window splits. Your UI needs to look great in all size classes it supports, which means you either create multiple variations of your layouts inside Interface Builder (this is the preferred route) or you make changes in code.

More often than not, I find myself mixing approaches: I do the vast majority of work inside IB, then make minor changes by hand inside the `willTransition(to:)` method. When this is called, you'll be given a `UIViewControllerTransitionCoordinator` object (yes, that's an extremely long name!) to work with, which allows you to animate your changes as needed.

To give you a very visible demonstration of how this works, I've written some example code below that adjusts the background color of the current view. **You should run this using the iOS simulator using an iPhone rather than an iPad.** The reason that this requires the iPhone simulator rather than the iPad simulator is that iPads have the same size classes in portrait and landscape, which makes the changes harder to spot.

Anyway, put this code into a view controller, then try it on an iPhone. When you rotate the simulator, the screen will change between red and blue, or green and blue, depending on the rotation. The important thing is that the change is animated because it's placed inside a call to `animate(alongsideTransition:)`, which automatically makes your animation match the rotation animation.

Using this method requires two closures: the first is where you make the changes you want to animate, and the second is code to be run when the animation completes. So, when the new vertical size class is compact, the screen will animate from blue to red, then jump back to blue. I realize this isn't directly useful in your own apps, but that's because you'll want to make your own changes – just take the code below and replace the background color changes with your own logic.

```swift
override func willTransition(to newCollection: UITraitCollection, with coordinator: UIViewControllerTransitionCoordinator) {
    super.willTransition(to: newCollection, with: coordinator)

    coordinator.animate(alongsideTransition: { [unowned self] _ in
        if newCollection.verticalSizeClass == .compact {
            self.view.backgroundColor = UIColor.red
        } else {
            self.view.backgroundColor = UIColor.green
        }
    }) { [unowned self] _ in
        self.view.backgroundColor = UIColor.blue
    }
}
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-detect-when-your-size-class-changes">How to detect when your size class changes 
/quick-start/swiftui/how-to-animate-the-size-of-text">How to animate the size of text 
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/example-code/uikit/how-to-animate-views-using-animatewithduration">How to animate views using animate(withDuration:) 
/example-code/uikit/how-to-animate-views-with-spring-damping-using-animatewithduration">How to animate views with spring damping using animate(withDuration:)</a>
-->

:::

---

<TagLinks />