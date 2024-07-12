---
lang: ko-KR
title: Allow coding of non String/Int keyed Dictionary into a KeyedContainer
description: Article(s) > Allow coding of non String/Int keyed Dictionary into a KeyedContainer
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.6
head:
  - - meta:
    - property: og:title
      content: Article(s) > Allow coding of non String/Int keyed Dictionary into a KeyedContainer
    - property: og:description
      content: Allow coding of non String/Int keyed Dictionary into a KeyedContainer
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.6/codingkeyrepresentable.html
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "HACKING WITH SWIFT",
  "desc": "What's new in Swift?",
  "link": "/explore/articles/hackingwithswift.com/swift/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Allow coding of non String/Int keyed Dictionary into a KeyedContainer | Changes in Swift 5.6",
  "desc": "Allow coding of non String/Int keyed Dictionary into a KeyedContainer",
  "link": "https://hackingwithswift.com/swift/5.6/codingkeyrepresentable", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.6

[SE-0320 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0320-codingkeyrepresentable.md) introduces a new `CodingKeyRepresentable` protocol that allows dictionaries with keys that aren’t a plain `String` or `Int` to be encoded as keyed containers rather than unkeyed containers.

To understand why this is important, you first need to see the behavior without `CodingKeyRepresentable` in place. As an example, this old code uses enum cases for keys in a dictionary, then encodes it to JSON and prints out the resulting string:

```swift
import Foundation

enum OldSettings: String, Codable {
    case name
    case twitter
}

let oldDict: [OldSettings: String] = [.name: "Paul", .twitter: "@twostraws"]
let oldData = try JSONEncoder().encode(oldDict)
print(String(decoding: oldData, as: UTF8.self))
```

Although the enum has a `String` raw value, because the dictionary keys aren’t `String` or `Int` the resulting string will be `"twitter","@twostraws","name","Paul"]` – four separate string values, rather than something that is obviously key/value pairs. Swift is smart enough to recognize this in decoding, and will match alternating strings inside each pair to the original enum keys and string values, but this isn’t helpful if you want to send the JSON to a server.

The new `CodingKeyRepresentable` resolves this, allowing the new dictionary keys to be written correctly. However, as this changes the way your `Codable` JSON is written, you must explicitly add `CodingKeyRepresentable` conformance to get the new behavior, like this:

```swift
enum NewSettings: String, Codable, CodingKeyRepresentable {
    case name
    case twitter
}

let newDict: [NewSettings: String] = [.name: "Paul", .twitter: "@twostraws"]
let newData = try! JSONEncoder().encode(newDict)
print(String(decoding: newData, as: UTF8.self))
```

That will print `{"twitter":"@twostraws","name":"Paul”}`, which is much more useful outside of Swift.

If you’re using custom structs as your keys, you can also conform to `CodingKeyRepresentable` and provide your own methods for converting your data into a string.

::: details Other Changes in Swift 5.6

```component VPCard
{
  "title": "Introduce existential any | Changes in Swift 5.6",
  "desc": "Introduce existential any",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/existential-any.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Type placeholders | Changes in Swift 5.6",
  "desc": "Type placeholders",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/type-placeholders.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Allow coding of non String/Int keyed Dictionary into a KeyedContainer | Changes in Swift 5.6",
  "desc": "Allow coding of non String/Int keyed Dictionary into a KeyedContainer",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/codingkeyrepresentable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
```component VPCard
{
  "title": "Unavailability condition | Changes in Swift 5.6",
  "desc": "Unavailability condition",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/unavailable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "More concurrency changes | Changes in Swift 5.6",
  "desc": "More concurrency changes",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/preconcurrency.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Plugins for Swift Package Manager | Changes in Swift 5.6",
  "desc": "Plugins for Swift Package Manager",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/swiftpm-plugins.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.6 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-5-to-5-6.playground.zip)

:::

---

<TagLinks />