---
lang: ko-KR
title: "How to detect long presses using UILongPressGestureRecognizer"
description: "Article(s) > How to detect long presses using UILongPressGestureRecognizer"
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
      content: "Article(s) > How to detect long presses using UILongPressGestureRecognizer"
    - property: og:description
      content: "How to detect long presses using UILongPressGestureRecognizer"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-detect-long-presses-using-uilongpressgesturerecognizer.html
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
  "title": "How to detect long presses using UILongPressGestureRecognizer | UIKit - free Swift example code",
  "desc": "How to detect long presses using UILongPressGestureRecognizer",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-detect-long-presses-using-uilongpressgesturerecognizer",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.2

<!-- TODO: 작성 -->

<!--
UIKit has a dedicated gesture recognizer that can detect and respond to the user pressing and holding on a view. You can configure how many fingers should be used, whether the user needs to tap the screen first, and how much they are allowed to move their finger before the long press is considered to be a panning movement instead.

To get started, create a `UILongPressGestureRecognizer` that points to a method in your view controller:

```swift
let recognizer = UILongPressGestureRecognizer(target: self, action: #selector(longPressHappened))
view.addGestureRecognizer(recognizer)
```

That will call a method called `longPressHappened()`, which needs to be marked with the `@objc` attribute so it can be called from the Objective-C system.

If you want the user to tap the screen *then* do a long press – i.e., press, release, then long press – set the `numberOfTapsRequired` property to 1 like this:

```swift
recognizer.numberOfTapsRequired = 1
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-move-to-the-next-uitextfield-when-the-user-presses-return">How to move to the next UITextField when the user presses return 
/example-code/uikit/how-to-detect-keyboard-input-using-pressesbegan-and-pressesended">How to detect keyboard input using pressesBegan() and pressesEnded() 
/example-code/location/how-to-detect-ibeacons">How to detect iBeacons 
/example-code/arkit/how-to-detect-images-using-arimagetrackingconfiguration">How to detect images using ARImageTrackingConfiguration 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a>
-->

:::

---

<TagLinks />