---
lang: ko-KR
title: "How to flip a UIView with a 3D effect: transition(with:)"
description: "Article(s) > How to flip a UIView with a 3D effect: transition(with:)"
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
      content: "Article(s) > How to flip a UIView with a 3D effect: transition(with:)"
    - property: og:description
      content: "How to flip a UIView with a 3D effect: transition(with:)"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-fix-the-error-failed-to-instantiate-the-default-view-controller-for-uimainstoryboardfile.html
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
  "title": "How to flip a UIView with a 3D effect: transition(with:) | UIKit - free Swift example code",
  "desc": "How to flip a UIView with a 3D effect: transition(with:)",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-fix-the-error-failed-to-instantiate-the-default-view-controller-for-uimainstoryboardfile",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
iOS has a built-in way to transition between views, and you can use this to produce 3D flips in just a few lines of code. Here's a basic example that flips between two views:

```swift
@objc func flip() {
    let transitionOptions: UIView.AnimationOptions = [.transitionFlipFromRight, .showHideTransitionViews]

    UIView.transition(with: firstView, duration: 1.0, options: transitionOptions, animations: {
        self.firstView.isHidden = true
    })

    UIView.transition(with: secondView, duration: 1.0, options: transitionOptions, animations: {
        self.secondView.isHidden = false
    })
}
```

Here's a basic test harness you can use to see that method in action:

```swift
var firstView: UIView!
var secondView: UIView!

override func viewDidLoad() {
    super.viewDidLoad()

    firstView = UIView(frame: CGRect(x: 32, y: 32, width: 128, height: 128))
    secondView = UIView(frame: CGRect(x: 32, y: 32, width: 128, height: 128))

    firstView.backgroundColor = UIColor.red
    secondView.backgroundColor = UIColor.blue

    secondView.isHidden = true

    view.addSubview(firstView)
    view.addSubview(secondView)

    perform(#selector(flip), with: nil, afterDelay: 2)
}
```

Try experimenting with the different values of `UIView.AnimationOptions` to see what other animations are available.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-create-a-custom-transition">How to create a custom transition 
/example-code/games/how-to-change-skscene-with-a-transition-presentscene">How to change SKScene with a transition: presentScene() 
/quick-start/swiftui/how-to-add-and-remove-views-with-a-transition">How to add and remove views with a transition 
/quick-start/swiftui/how-to-make-views-scroll-with-a-custom-transition">How to make views scroll with a custom transition 
/example-code/uikit/how-to-mask-one-uiview-using-another-uiview">How to mask one UIView using another UIView</a>
-->

:::

---

<TagLinks />