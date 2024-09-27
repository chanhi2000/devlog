---
lang: ko-KR
title: "What’s the difference between == and ===?"
description: "Article(s) > What’s the difference between == and ===?"
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
      content: "Article(s) > What’s the difference between == and ===?"
    - property: og:description
      content: "What’s the difference between == and ===?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/whats-the-difference-between-equalsequals-and-equalsequalsequals.html
date: 2019-06-01
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
  "title": "What’s the difference between == and ===? | Language - free Swift example code",
  "desc": "What’s the difference between == and ===?",
  "link": "https://hackingwithswift.com/example-code/language/whats-the-difference-between-equalsequals-and-equalsequalsequals",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Swift gives us two equality operators, `==` and `===`, that do slightly different things. You will almost certainly need to use both of them so it’s worth taking the time to learn them.

First, `==` is the equality operator, which tests that two things are equal for whatever definition of “equal” those things use. For example, `5 == 5` is true because there `==` means an integer comparison, and the same is true for other built-in value types such as strings, booleans, and doubles.

Things get more complicated when `==` is used with a struct you built, because by default they cannot be compared – you need to make them conform to the `Equatable` protocol.

In comparison, `===` is the *identity operator*, which checks whether two instances of a class point to the same memory. This is different from equality, because two objects that were created independently using the same values will be considered equal using `==` but not `===` because they are different objects.

The `===` operator is available only when using classes because structs are designed so they are always uniquely referenced.

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