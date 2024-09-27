---
lang: ko-KR
title: "How to show and hide a toolbar inside a UINavigationController"
description: "Article(s) > How to show and hide a toolbar inside a UINavigationController"
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
  - ios-3.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to show and hide a toolbar inside a UINavigationController"
    - property: og:description
      content: "How to show and hide a toolbar inside a UINavigationController"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-show-and-hide-a-toolbar-inside-a-uinavigationcontroller.html
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
  "title": "How to show and hide a toolbar inside a UINavigationController | UIKit - free Swift example code",
  "desc": "How to show and hide a toolbar inside a UINavigationController",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-show-and-hide-a-toolbar-inside-a-uinavigationcontroller",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.0

<!-- TODO: 작성 -->

<!--
All navigation controllers have a toolbar built right in, but it's not showing by default. And even if it were showing, it doesn't have any items by default – that's down to you fill in.

To get started, give a view controller some toolbar items by setting its `toolbarItems` property like this:

```swift
let add = UIBarButtonItem(barButtonSystemItem: .add, target: self, action: #selector(addTapped))
let spacer = UIBarButtonItem(barButtonSystemItem: .flexibleSpace, target: self, action: nil)
toolbarItems = [add, spacer]
```

You can now tell the navigation controller to show its toolbar like this:

```swift
navigationController?.setToolbarHidden(false, animated: false)
```

If you animate between two view controllers with different toolbar items, iOS automatically animates their change.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource 
/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a>
-->

:::

---

<TagLinks />