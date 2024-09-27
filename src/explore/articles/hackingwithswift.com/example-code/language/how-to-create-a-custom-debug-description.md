---
lang: ko-KR
title: "How to create a custom debug description"
description: "Article(s) > How to create a custom debug description"
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
      content: "Article(s) > How to create a custom debug description"
    - property: og:description
      content: "How to create a custom debug description"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-create-a-custom-debug-description.html
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
  "title": "How to create a custom debug description | Language - free Swift example code",
  "desc": "How to create a custom debug description",
  "link": "https://hackingwithswift.com/example-code/language/how-to-create-a-custom-debug-description",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Swift lets you print all types of data, but some data is more useful than others thanks to the `CustomDebugStringConvertible` protocol. If you write a type conforming to that protocol, you must include a `debugDescription` string property that describes how instances of this type should be represented while debugging.

To test this out, we’re going to create a `Player` struct that stores a player’s name. When we try to debug an instance of this struct – i.e., print it out, or hover over it in the debugger – we just want the player’s name to come back, for easier debugging.

Try adding this struct to a playground:

```swift
struct Player: CustomDebugStringConvertible {
    var name: String = "@twostraws"

    var debugDescription: String {
        return name
    }
}
```

You can now create instances of that struct and print them out to see the player name:

```swift
let player = Player()
print(player)
```

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-create-quick-look-debug-previews-for-your-custom-types">How to create Quick Look debug previews for your custom types 
/example-code/language/how-to-print-debug-text-in-swift">How to print debug text in Swift 
/example-code/games/how-to-debug-physics-in-a-spritekit-scene-using-showsphysics">How to debug physics in a SpriteKit scene using showsPhysics 
/example-code/xcode/how-to-debug-view-layouts-in-xcode">How to debug view layouts in Xcode 
/example-code/strings/how-to-test-localization-by-setting-a-debug-locale-and-double-length-pseudolanguage">How to test localization by setting a debug locale and double length pseudolanguage</a>
-->

:::

---

<TagLinks />