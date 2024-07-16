---
lang: ko-KR
title: Key decoding strategies for Codable
description: Article(s) > Key decoding strategies for Codable
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-4.1
head:
  - - meta:
    - property: og:title
      content: Article(s) > Key decoding strategies for Codable
    - property: og:description
      content: Key decoding strategies for Codable
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/4.1/key-decoding-strategies.html
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "HACKING WITH SWIFT",
  "desc": "What's new in Swift?",
  "link": "/explore/articles/hackingwithswift.com/swift/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Key decoding strategies for Codable | Changes in Swift 4.1",
  "desc": "Key decoding strategies for Codable",
  "link": "https://hackingwithswift.com/swift/4.1/key-decoding-strategies", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 4.1

In Swift 4.0 a common problem was trying to use `Codable` with JSON that utilized snake_case for its key names rather than the camelCase we normally use in Swift. Codable was unable to understand how the two different name types were mapped, so you had to create a custom `CodingKeys` enum helping it out.

This is where Swift 4.1's new `keyDecodingStrategy` property comes in: it’s set to `.useDefaultKeys` by default, which does a direct mapping of JSON names to Swift properties. However, if you change it to `.convertFromSnakeCase` then `Codable` handles the name conversion for us.

For example:

```swift
let decoder = JSONDecoder()
decoder.keyDecodingStrategy = .convertFromSnakeCase

do {
    let macs = try decoder.decode([Mac].self, from: jsonData)
    print(macs)
} catch {
    print(error.localizedDescription)
}
```

When you want to go back the other way – to convert a `Codable` struct with camelCase properties back to JSON with snake_case keys, set the `keyEncodingStrategy` to `.convertToSnakeCase` like this:

```swift
let encoder = JSONEncoder()
encoder.keyEncodingStrategy = .convertToSnakeCase
let encoded = try encoder.encode(someObject)
```

::: note

At the time of writing `keyDecodingStrategy` and `keyEncodingStrategy` are not available on Linux.

:::

::: details Other Changes in Swift 4.1

```component VPCard
{
  "title": "Synthesized Equatable and Hashable | Changes in Swift 4.1",
  "desc": "Synthesized Equatable and Hashable",
  "link": "/explore/articles/hackingwithswift.com/swift/4.1/synthesized-protocols.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Key decoding strategies for Codable | Changes in Swift 4.1",
  "desc": "Key decoding strategies for Codable",
  "link": "/explore/articles/hackingwithswift.com/swift/4.1/key-decoding-strategies.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Conditional conformances | Changes in Swift 4.1",
  "desc": "Conditional conformances",
  "link": "/explore/articles/hackingwithswift.com/swift/4.1/conditional-conformance.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Recursive constraints on associated types | Changes in Swift 4.1",
  "desc": "Recursive constraints on associated types",
  "link": "/explore/articles/hackingwithswift.com/swift/4.1/recursive-constraints.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Build configuration import testing | Changes in Swift 4.1",
  "desc": "Build configuration import testing",
  "link": "/explore/articles/hackingwithswift.com/swift/4.1/import-testing.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Target environment testing | Changes in Swift 4.1",
  "desc": "Target environment testing",
  "link": "/explore/articles/hackingwithswift.com/swift/4.1/target-environment.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "flatMap is now (partly) compactMap() | Changes in Swift 4.1",
  "desc": "flatMap is now (partly) compactMap()",
  "link": "/explore/articles/hackingwithswift.com/swift/4.1/compactmap.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 4.1 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-4-0-to-4-1.playground.zip)

:::

---

<TagLinks />