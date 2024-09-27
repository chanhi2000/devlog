---
lang: ko-KR
title: "How to format JSON using Codable and pretty printing"
description: "Article(s) > How to format JSON using Codable and pretty printing"
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
      content: "Article(s) > How to format JSON using Codable and pretty printing"
    - property: og:description
      content: "How to format JSON using Codable and pretty printing"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-format-json-using-codable-and-pretty-printing.html
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
  "title": "How to format JSON using Codable and pretty printing | Language - free Swift example code",
  "desc": "How to format JSON using Codable and pretty printing",
  "link": "https://hackingwithswift.com/example-code/language/how-to-format-json-using-codable-and-pretty-printing",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
When you use `JSONEncoder` and `Codable` to create JSON from your Swift data, it comes out in a compressed format by default – it has all its excess whitespace removed. This makes it efficient for transferring over the network, but hard to debug because it’s just a big jumble of words.

For debugging purposes, it’s a good idea to enable pretty printing for your encoded JSON, which will tell `JSONEncoder` to separate everything using line breaks and spaces so you can read it more easily.

To make this happen, set the `outputFormatting` property of your JSON encoder to be `.prettyPrinted`, like this:

```swift
let encoder = JSONEncoder()
encoder.outputFormatting = .prettyPrinted
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/quick-start/concurrency/how-to-download-json-from-the-internet-and-decode-it-into-any-codable-type">How to download JSON from the internet and decode it into any Codable type 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a>
-->

:::

---

<TagLinks />