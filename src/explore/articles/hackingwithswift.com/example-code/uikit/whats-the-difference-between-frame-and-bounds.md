---
lang: ko-KR
title: "What’s the difference between frame and bounds?"
description: "Article(s) > What’s the difference between frame and bounds?"
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
      content: "Article(s) > What’s the difference between frame and bounds?"
    - property: og:description
      content: "What’s the difference between frame and bounds?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/whats-the-difference-between-frame-and-bounds.html
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
  "title": "What’s the difference between frame and bounds? | UIKit - free Swift example code",
  "desc": "What’s the difference between frame and bounds?",
  "link": "https://hackingwithswift.com/example-code/uikit/whats-the-difference-between-frame-and-bounds",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
All `UIView` subclasses have two properties that at first glance seem similar: `frame` and `bounds`. Both return a `CGRect` – a rectangle containing their X and Y position, plus their width and height – but that doesn’t mean they are the *same*.

At its simplest, a view’s bounds refers to its coordinates relative to its own space (as if the rest of your view hierarchy didn’t exist), whereas its frame refers to its coordinates relative to its parent’s space.

This means a few things:

1. If you create a view at X:0, Y:0, width:100, height:100, its `frame` and `bounds` are the same.
2. If you move that view to X:100, its frame will reflect that change but its bounds will not. Remember, the bounds is relative to the view’s own space, and internally to the view nothing has changed.
3. If you transform the view, e.g. rotating it or scaling it up, the frame will change to reflect that, but the bounds still won’t – as far as the view is concerned internally, it hasn’t changed.

When you change the width or height of either `frame` or `bounds`, the other value is updated to match. Generally it’s better to modify `bounds` plus `center` and `transform`, and let UIKit calculate the `frame` for you.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/quick-start/swiftui/how-to-give-a-view-a-custom-frame">How to give a view a custom frame 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a>
-->

:::

---

<TagLinks />