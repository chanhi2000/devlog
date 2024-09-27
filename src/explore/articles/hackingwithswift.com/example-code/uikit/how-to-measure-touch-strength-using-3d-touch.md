---
lang: ko-KR
title: "How to measure touch strength using 3D Touch"
description: "Article(s) > How to measure touch strength using 3D Touch"
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
      content: "Article(s) > How to measure touch strength using 3D Touch"
    - property: og:description
      content: "How to measure touch strength using 3D Touch"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-measure-touch-strength-using-3d-touch.html
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
  "title": "How to measure touch strength using 3D Touch | UIKit - free Swift example code",
  "desc": "How to measure touch strength using 3D Touch",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-measure-touch-strength-using-3d-touch",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
You can read a user's 3D Touch strength using the `force` property of a `UITouch`, which is best used when compared against the `touch.maximumPossibleForce`. For example, you can divide one into the other to see how much relative strength is applied, or do a straight comparison to check to see whether the user is pressing as hard as possible.

Before you try to make use of 3D Touch, make sure it's available by checking the `forceTouchCapability` of your current trait collection. Here's an example `touchesMoved()` implementation that checks whether 3D Touch is available and the user is pressing hard:

```swift
override func touchesMoved(_ touches: Set<UITouch>, with event: UIEvent?) {
    super.touchesMoved(touches, with: event)

    if let touch = touches.first {
        if view.traitCollection.forceTouchCapability == .available {
            if touch.force == touch.maximumPossibleForce {
                // user pressed hard – do something!
            }
        }
    }
}
```

-->

::: details Similar solutions…

<!--
/example-code/testing/how-to-write-performance-tests-using-measure">How to write performance tests using measure() 
/example-code/strings/how-to-measure-a-string-for-objective-c-code">How to measure a string for Objective-C code 
/quick-start/swiftui/how-to-add-metal-shaders-to-swiftui-views-using-layer-effects">How to add Metal shaders to SwiftUI views using layer effects 
/example-code/uikit/how-to-add-a-uiapplicationshortcutitem-quick-action-for-3d-touch">How to add a UIApplicationShortcutItem quick action for 3D Touch 
/example-code/system/how-to-use-touch-id-to-authenticate-users-by-fingerprint">How to use Touch ID to authenticate users by fingerprint</a>
-->

:::

---

<TagLinks />