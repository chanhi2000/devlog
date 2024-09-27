---
lang: ko-KR
title: "How to use ISO-8601 dates with JSONDecoder and Codable"
description: "Article(s) > How to use ISO-8601 dates with JSONDecoder and Codable"
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
      content: "Article(s) > How to use ISO-8601 dates with JSONDecoder and Codable"
    - property: og:description
      content: "How to use ISO-8601 dates with JSONDecoder and Codable"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-iso-8601-dates-with-jsondecoder-and-codable.html
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
  "title": "How to use ISO-8601 dates with JSONDecoder and Codable | Language - free Swift example code",
  "desc": "How to use ISO-8601 dates with JSONDecoder and Codable",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-iso-8601-dates-with-jsondecoder-and-codable",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Encoding and decoding dates using the `Codable` protocol isn’t hard to do, but it does produce some unexpected data by default: `Date` stores its information as a floating-point number counting the number of seconds since January 1st 2001, rather than something standard involved days, months, and years.

ISO-8601 is the web’s standard way of referring to dates and times, and looks like this: 2018-12-25T17:30:00Z – in English that’s December 25th 2018, at 5:30pm UTC. Both `JSONEncoder` and `JSONDecoder` are able to use this date format rather than the floating-point default – all you have to do is set their `dateEncodingStrategy` and `dateDecodingStrategy` properties.

If you’re decoding dates, use this:

```swift
let decoder = JSONDecoder()
decoder.dateDecodingStrategy = .iso8601
```

And if you’re *encoding* dates you should use this:

```swift
let encoder = JSONEncoder()
encoder.dateEncodingStrategy = .iso8601
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a>
-->

:::

---

<TagLinks />