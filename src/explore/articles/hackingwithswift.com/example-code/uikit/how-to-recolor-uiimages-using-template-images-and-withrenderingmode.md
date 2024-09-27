---
lang: ko-KR
title: "How to recolor UIImages using template images and withRenderingMode()"
description: "Article(s) > How to recolor UIImages using template images and withRenderingMode()"
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
      content: "Article(s) > How to recolor UIImages using template images and withRenderingMode()"
    - property: og:description
      content: "How to recolor UIImages using template images and withRenderingMode()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-recolor-uiimages-using-template-images-and-withrenderingmode.html
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
  "title": "How to recolor UIImages using template images and withRenderingMode() | UIKit - free Swift example code",
  "desc": "How to recolor UIImages using template images and withRenderingMode()",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-recolor-uiimages-using-template-images-and-withrenderingmode",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
Template images are the iOS 7.0 way of tinting any kind of image when it's inside a `UIImageView`. This is usually used to mimic the tinting of button images (as seen in toolbars and tab bars) but it works anywhere you want to dynamically recolor an image.

To get started, load an image then call `withRenderingMode()` on it, like this:

```swift
if let myImage = UIImage(named: "myImage") {
    let tintableImage = myImage.withRenderingMode(.alwaysTemplate)
    imageView.image = tintableImage
}
```

The tint color of a `UIImageView` is the standard iOS 7 blue by default, but you can change it easily enough:

```swift
imageView.tintColor = UIColor.red
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/quick-start/swiftui/whats-in-the-basic-template">What’s in the basic template? 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a>
-->

:::

---

<TagLinks />