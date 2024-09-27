---
lang: ko-KR
title: "What’s the difference between Any and AnyObject?"
description: "Article(s) > What’s the difference between Any and AnyObject?"
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
  - ios-13.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > What’s the difference between Any and AnyObject?"
    - property: og:description
      content: "What’s the difference between Any and AnyObject?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/whats-the-difference-between-any-and-anyobject.html
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
  "title": "What’s the difference between Any and AnyObject? | Language - free Swift example code",
  "desc": "What’s the difference between Any and AnyObject?",
  "link": "https://hackingwithswift.com/example-code/language/whats-the-difference-between-any-and-anyobject",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
Swift has two anonymous types: `Any` and `AnyObject`. They are subtly different, and you will need to use both sooner or later.

`AnyObject` refers to any instance of a class, and is equivalent to `id` in Objective-C. It’s useful when you specifically want to work with a reference type, because it won’t allow any of Swift’s structs or enums to be used. `AnyObject` is also used when you want to restrict a protocol so that it can be used only with classes.

`Any` refers to any instance of a class, struct, or enum – literally anything at all. You’ll see this in Swift wherever types are unknown or are mixed in ways that can be meaningfully categorized:

```swift
let values: [Any] = [1, 2, "Fish"]
```

Ideally you should avoid both `Any` and `AnyObject` in your code – it’s better to be more specific if you can be.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/language/what-is-anyobject">What is AnyObject? 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a>
-->

:::

---

<TagLinks />