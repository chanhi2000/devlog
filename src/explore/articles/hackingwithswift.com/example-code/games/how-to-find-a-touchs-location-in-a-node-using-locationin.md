---
lang: ko-KR
title: "How to find a touch's location in a node using location(in:)"
description: "Article(s) > How to find a touch's location in a node using location(in:)"
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
      content: "Article(s) > How to find a touch's location in a node using location(in:)"
    - property: og:description
      content: "How to find a touch's location in a node using location(in:)"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-find-a-touchs-location-in-a-node-using-locationin.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Games - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/games/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to find a touch's location in a node using location(in:) | Games - free Swift example code",
  "desc": "How to find a touch's location in a node using location(in:)",
  "link": "https://hackingwithswift.com/example-code/games/how-to-find-a-touchs-location-in-a-node-using-locationin",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
It's just one line of code to find where the user touched the screen when you're using SpritKit, and that one line can even be used to calculative relative positions of a touch compared to any node in your game.

To get started, you should implement `touchesBegan()` in your SpriteKit node or scene. This will get called when the user starts touching the node, regardless of where on the node. To locate the exact position, call `location(in:)` on any `UITouch`, passing in the node you want to check, like this:

```swift
override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
    if let touch = touches.first {
        let location = touch.location(in: self)
        print(location)
    }
}
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-find-a-touchs-location-in-a-view-with-locationin">How to find a touch's location in a view with location(in:) 
/example-code/uikit/how-to-measure-touch-strength-using-3d-touch">How to measure touch strength using 3D Touch 
/example-code/uikit/how-to-add-a-uiapplicationshortcutitem-quick-action-for-3d-touch">How to add a UIApplicationShortcutItem quick action for 3D Touch 
/example-code/system/how-to-use-touch-id-to-authenticate-users-by-fingerprint">How to use Touch ID to authenticate users by fingerprint 
/example-code/location/how-to-read-the-users-location-while-your-app-is-in-the-background">How to read the user’s location while your app is in the background</a>
-->

---

<TagLinks />