---
lang: ko-KR
title: "What’s the difference between a protocol and a class?"
description: "Article(s) > What’s the difference between a protocol and a class?"
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
      content: "Article(s) > What’s the difference between a protocol and a class?"
    - property: og:description
      content: "What’s the difference between a protocol and a class?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/whats-the-difference-between-a-protocol-and-a-class.html
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
  "title": "What’s the difference between a protocol and a class? | Language - free Swift example code",
  "desc": "What’s the difference between a protocol and a class?",
  "link": "https://hackingwithswift.com/example-code/language/whats-the-difference-between-a-protocol-and-a-class",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
When writing protocol-oriented Swift, protocols and classes become fairly similar, but they are never the same.

In their basic form, a protocol describes what an unknown type of object can do. You might say it has two or three properties of various types, plus methods. But that protocol never includes anything *inside* the methods, or provides actual storage for the properties.

In a more advanced form, you can write extensions on your protocols that provide default implementations of the methods. You still can’t provide storage for properties, however.

In comparison, classes are concrete things. While they might adopt protocols – i.e., say they implement the required properties and methods – they aren’t required to do that. You can create objects from classes, whereas protocols are just type definitions. Try to think of protocols as being abstract definitions, whereas classes and structs are real things you can create.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource 
/example-code/language/whats-the-difference-between-a-static-variable-and-a-class-variable">What’s the difference between a static variable and a class variable?</a>
-->

:::

---

<TagLinks />