---
lang: ko-KR
title: "How to lock a view controller’s orientation using supportedInterfaceOrientations"
description: "Article(s) > How to lock a view controller’s orientation using supportedInterfaceOrientations"
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
      content: "Article(s) > How to lock a view controller’s orientation using supportedInterfaceOrientations"
    - property: og:description
      content: "How to lock a view controller’s orientation using supportedInterfaceOrientations"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-lock-a-view-controllers-orientation-using-supportedinterfaceorientations.html
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
  "title": "How to lock a view controller’s orientation using supportedInterfaceOrientations | UIKit - free Swift example code",
  "desc": "How to lock a view controller’s orientation using supportedInterfaceOrientations",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-lock-a-view-controllers-orientation-using-supportedinterfaceorientations",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
At the project level you can configure which orientations your whole app should support, but sometimes you want individual view controllers to support a subset of those. For example, you might want most of your app to work in any orientation, but one part to work specifically in portrait.

To configure this, you need to override the `supportedInterfaceOrientations` property in your `UIViewController` subclass, returning whichever orientations you want. Probably the most common use for this is to support all orientations for iPads, but `.allButUpsideDown` on iPhone. 

Here’s some example code doing just that:

```swift
override var supportedInterfaceOrientations: UIInterfaceOrientationMask {
    if UIDevice.current.userInterfaceIdiom == .phone {
        return .allButUpsideDown
    } else {
        return .all
    }
}
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-read-the-interface-orientation-portrait-or-landscape">How to read the interface orientation: portrait or landscape? 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/xcode/how-to-lock-interface-builder-controls-to-stop-accidental-changes">How to lock Interface Builder controls to stop accidental changes 
/example-code/uikit/how-to-use-view-controller-containment">How to use view controller containment 
/example-code/uikit/how-to-find-the-view-controller-responsible-for-a-view">How to find the view controller responsible for a view</a>
-->

:::

---

<TagLinks />