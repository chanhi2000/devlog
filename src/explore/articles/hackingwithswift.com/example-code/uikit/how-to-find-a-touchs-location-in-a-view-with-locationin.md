---
lang: ko-KR
title: "How to find a touch's location in a view with location(in:)"
description: "Article(s) > How to find a touch's location in a view with location(in:)"
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
      content: "Article(s) > How to find a touch's location in a view with location(in:)"
    - property: og:description
      content: "How to find a touch's location in a view with location(in:)"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-find-a-touchs-location-in-a-view-with-locationin.html
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
  "title": "How to find a touch's location in a view with location(in:) | UIKit - free Swift example code",
  "desc": "How to find a touch's location in a view with location(in:)",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-find-a-touchs-location-in-a-view-with-locationin",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
When the user starts touching an iOS screen, `touchesBegan()` is immediately called with a set of `UITouches`. If you want to find where the user touched, you need to take one of those touches then use `location(in:)` on it, like this:

```swift
override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
    if let touch = touches.first {
        let position = touch.location(in: view)
        print(position)
    }
}
```

That will make `position` a `CGPoint` representing where the user touched in the current view. You can if you want pass a different view to `location(in:)`, and it will tell you where the touch was relative to that other view instead.

-->

::: details Similar solutions…

<!--
/example-code/games/how-to-find-a-touchs-location-in-a-node-using-locationin">How to find a touch's location in a node using location(in:) 
/example-code/uikit/how-to-measure-touch-strength-using-3d-touch">How to measure touch strength using 3D Touch 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/system/how-to-use-touch-id-to-authenticate-users-by-fingerprint">How to use Touch ID to authenticate users by fingerprint 
/example-code/uikit/how-to-add-a-uiapplicationshortcutitem-quick-action-for-3d-touch">How to add a UIApplicationShortcutItem quick action for 3D Touch</a>
-->

:::

---

<TagLinks />