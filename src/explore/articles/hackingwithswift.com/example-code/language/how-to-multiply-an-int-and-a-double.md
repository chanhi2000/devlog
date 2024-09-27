---
lang: ko-KR
title: "How to multiply an int and a double"
description: "Article(s) > How to multiply an int and a double"
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
  - ios-8.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to multiply an int and a double"
    - property: og:description
      content: "How to multiply an int and a double"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-multiply-an-int-and-a-double.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Language - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/language/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to multiply an int and a double | Language - free Swift example code",
  "desc": "How to multiply an int and a double",
  "link": "https://hackingwithswift.com/example-code/language/how-to-multiply-an-int-and-a-double",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Swift’s type safety means code to multiply an integer and a double won’t compile:

```swift
let a = 4
let b = 5.0
let c = a * b
```

You can either fix this by forcing your integer to be a double:

```swift
let d: Double = 4
let e = 5.0
let f = a * b
```

Alternatively you can convert your integer to a double as needed:

```swift
let g = 4
let h = 5.0
let i = Double(a) * b
```

If this situation really annoys you and you want it solved fully, add this custom `*` function:

```swift
func *(lhs: Int, rhs: Double) -> Double {
    return Double(lhs) * rhs
}
```

That will multiply an integer on the left with a double on the right, returning a double containing the result.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource 
/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a>
-->

:::

---

<TagLinks />