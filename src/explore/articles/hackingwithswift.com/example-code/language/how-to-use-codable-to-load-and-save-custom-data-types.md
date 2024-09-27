---
lang: ko-KR
title: "How to use Codable to load and save custom data types"
description: "Article(s) > How to use Codable to load and save custom data types"
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
      content: "Article(s) > How to use Codable to load and save custom data types"
    - property: og:description
      content: "How to use Codable to load and save custom data types"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-codable-to-load-and-save-custom-data-types.html
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
  "title": "How to use Codable to load and save custom data types | Language - free Swift example code",
  "desc": "How to use Codable to load and save custom data types",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-codable-to-load-and-save-custom-data-types",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Swift 4 introduced a new way to load and save data, replacing the old `NSCoding` protocol with something that’s more flexible, safer, and easier to write: `Codable`.

Unless you want a custom implementation, just making your data type conform to `Codable` is all it takes to allow it to be saved to property list XML or JSON.

For example, here’s a custom struct that conforms to `Codable`, along with a few instances of it:

```swift
struct Language: Codable {
    var name: String
    var version: Int
}

let swift = Language(name: "Swift", version: 4)
let php = Language(name: "PHP", version: 7)
let perl = Language(name: "Perl", version: 6)
```

You can see I've marked the Language struct as conforming to the `Codable` protocol – there’s no need to add custom loading and saving code like we had with `NSCoding`.

With that one tiny conformance, we can convert it to a `Data` representation of JSON like this:

```swift
let encoder = JSONEncoder()
if let encoded = try? encoder.encode(swift) {
    // save `encoded` somewhere
}
```

Swift will automatically encode all properties inside your data type – you don't need to do anything.

To prove that everything is working well, we can try converting that `Data` object into a string so we can print it out, then decode it back into a new Language instance that we can read from:

```swift
if let encoded = try? encoder.encode(swift) {
    if let json = String(data: encoded, encoding: .utf8) {
        print(json)
    }

    let decoder = JSONDecoder()
    if let decoded = try? decoder.decode(Language.self, from: encoded) {
        print(decoded.name)
    }
}
```

Notice how decoding doesn't require a typecast – you provide the data type name as its first parameter, so Swift infers the return type from there.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/how-to-save-and-load-navigationstack-paths-using-codable">How to save and load NavigationStack paths using Codable 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a>
-->

:::

---

<TagLinks />