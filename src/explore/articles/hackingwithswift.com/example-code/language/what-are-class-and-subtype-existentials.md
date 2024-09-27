---
lang: ko-KR
title: "What are class and subtype existentials?"
description: "Article(s) > What are class and subtype existentials?"
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
      content: "Article(s) > What are class and subtype existentials?"
    - property: og:description
      content: "What are class and subtype existentials?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-are-class-and-subtype-existentials.html
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
  "title": "What are class and subtype existentials? | Language - free Swift example code",
  "desc": "What are class and subtype existentials?",
  "link": "https://hackingwithswift.com/example-code/language/what-are-class-and-subtype-existentials",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
You should already know that Swift lets you specify a concrete type as a function parameter, meaning that you can say “this parameter must be a string.” Swift also lets you specify protocols types for function parameters, meaning that you can say “this parameter must conform to `Codable`.” 

Those two are straightforward, but sometimes you need more power. Fortunately, Swift lets us represent existentials of classes and subtypes that conform to protocols, which is dramatic way of saying that you can now refer to types in a more complex way.

As an example, consider this class hierarchy:

```swift
class Animal { }

class Dog: Animal, Codable { }
class Cat: Animal, Codable { }
```

There’s a main `Animal` class, and two subclasses called `Dog` and `Cat`. Both of the subclasses also conform to `Codable`. Swift lets us combine both `Animal` (the class) and `Codable` (the protocol) to write functions that require a parameter to be both at the same time:

```swift
func encodeAnimal(with animal: Animal & Codable) {

}

let animal = Dog()
encodeAnimal(with: animal)
```

Without the `Codable` part that function would accept instances of the main `Animal` class even though it wouldn’t work inside, and without the `Animal` part that function would accept anything that’s `Codable` – only the combination of the two makes sense.

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