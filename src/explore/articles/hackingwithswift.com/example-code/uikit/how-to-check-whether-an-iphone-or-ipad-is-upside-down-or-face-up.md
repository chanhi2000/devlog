---
lang: ko-KR
title: "How to check whether an iPhone or iPad is upside down or face up"
description: "Article(s) > How to check whether an iPhone or iPad is upside down or face up"
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
      content: "Article(s) > How to check whether an iPhone or iPad is upside down or face up"
    - property: og:description
      content: "How to check whether an iPhone or iPad is upside down or face up"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-check-whether-an-iphone-or-ipad-is-upside-down-or-face-up.html
date: 2019-11-28
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
  "title": "How to check whether an iPhone or iPad is upside down or face up | UIKit - free Swift example code",
  "desc": "How to check whether an iPhone or iPad is upside down or face up",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-check-whether-an-iphone-or-ipad-is-upside-down-or-face-up",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.2

<!-- TODO: 작성 -->

<!--
If your app needs to know the orientation of the user’s device – face up or face down – it takes only four steps to implement.

First, write a method that can be called when the device orientation changes:

```swift
@objc func orientationChanged() {

}
```

That needs to be marked `@objc` because it’s going to be called by the system whenever the accelerometer signals the orientation has changed. So, step two is to request those changes be sent to the new method:

```swift
NotificationCenter.default.addObserver(self, selector: #selector(orientationChanged), name: UIDevice.orientationDidChangeNotification, object: nil)
```

Third, ask the system to start checking for orientation changes:

```swift
UIDevice.current.beginGeneratingDeviceOrientationNotifications()
```

You shouldn’t leave that on all the time unless you need it; you should call `endGeneratingDeviceOrientationNotifications()` when you’re done with the data.

Finally, you can read the `orientation` property of the current `UIDevice` to see what the orientation currently is. This property doesn’t work correctly unless you already asked UIKit to begin generating device orientation notifications, which is why the above steps were required:

```swift
if UIDevice.current.orientation == .faceDown {
    // it's face down
}
```

You probably want that inside `orientationChanged()` so that it reads values as they change.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-read-the-battery-level-of-an-iphone-or-ipad">How to read the battery level of an iPhone or iPad 
/example-code/testing/how-to-do-conditional-test-tear-down-using-addteardownblock">How to do conditional test tear down using addTeardownBlock() 
/quick-start/swiftui/how-to-scale-a-view-up-or-down">How to scale a view up or down 
/example-code/language/check-whether-all-items-in-an-array-match-a-condition">Check whether all items in an array match a condition 
/example-code/language/how-to-check-whether-an-integer-lies-inside-a-range">How to check whether an integer lies inside a range</a>
-->

:::

---

<TagLinks />