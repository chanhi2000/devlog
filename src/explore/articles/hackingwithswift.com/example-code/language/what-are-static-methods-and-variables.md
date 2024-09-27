---
lang: ko-KR
title: "What are static methods and variables?"
description: "Article(s) > What are static methods and variables?"
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
      content: "Article(s) > What are static methods and variables?"
    - property: og:description
      content: "What are static methods and variables?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-are-static-methods-and-variables.html
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
  "title": "What are static methods and variables? | Language - free Swift example code",
  "desc": "What are static methods and variables?",
  "link": "https://hackingwithswift.com/example-code/language/what-are-static-methods-and-variables",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Static methods and variables belong to the type that defined them, rather than instances of that type. For example, we could create a struct to track taxis in a city, like this:

```swift
struct Taxi1 {
    var ownerName: String
    var licensePlate: String
}
```

Each instance of that struct will have its own `ownerName` and `licensePlate` property strings. However, if we made a *static* property inside that struct then it would be shared by all taxis. For example, we could add this property to store how many taxis exist in the city:

```swift
struct Taxi2 {
    var ownerName: String
    var licensePlate: String
    static var count: Int = 0
}
```

When we want to reference that property we need to use `Taxi2.count`, because it belongs to the struct not to instances of that struct.

The same is true of static methods, which are sometimes called “type methods” – they belong to the struct or class that defined them rather than instance of the class. In practice that means you can’t use `self` inside the method because there is no instance to refer to.

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