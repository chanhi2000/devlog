---
lang: ko-KR
title: "How to create custom colors using UIColor RGB and hues"
description: "Article(s) > How to create custom colors using UIColor RGB and hues"
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
      content: "Article(s) > How to create custom colors using UIColor RGB and hues"
    - property: og:description
      content: "How to create custom colors using UIColor RGB and hues"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uicolor/how-to-create-custom-colors-using-uicolor-rgb-and-hues.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIClolr - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uicolor/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to create custom colors using UIColor RGB and hues | UIClolr - free Swift example code",
  "desc": "How to create custom colors using UIColor RGB and hues",
  "link": "https://hackingwithswift.com/example-code/uicolor/how-to-create-custom-colors-using-uicolor-rgb-and-hues",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
Although there are quite a few built-in UIColors, you'll want to create your own very frequently. This can be done in a number of ways, but the most common is specifying individual values for red, green, blue and alpha, like this:

```swift
let col1 = UIColor(red: 1, green: 0, blue: 0, alpha: 1)
```

Each of those numbers need to be between 0 and 1.

An alternative way is to specify color values as hue, saturation and brightness, or HSB. Hue is a value between 0 and 1 on a color wheel, where 0 and 1 are both red. Saturation is how deep the color should be (so 0 is just gray) and brightness is how light the shade should be.

Here's how it's done:

```swift
let col2 = UIColor(hue: 0, saturation: 0.66, brightness: 0.66, alpha: 1)
let col3 = UIColor(hue: 0.25, saturation: 0.66, brightness: 0.66, alpha: 1)
let col4 = UIColor(hue: 0.5, saturation: 0.66, brightness: 0.66, alpha: 1)
let col5 = UIColor(hue: 0.75, saturation: 0.66, brightness: 0.66, alpha: 1)
```

The advantage to using HSB rather than RGB is that you can generate very similar colors by keeping the saturation and brightness constant and changing only the hue – the code above generates some nice pastel shades of red, green, cyan and magenta, for example.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/quick-start/swiftui/how-to-create-new-colors-by-blending-two-other-swiftui-colors">How to create new colors by blending two other SwiftUI colors 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a>
-->

:::

---

<TagLinks />