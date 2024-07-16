---
lang: ko-KR
title: Synthesized Equatable and Hashable
description: Article(s) > Synthesized Equatable and Hashable
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
      content: Article(s) > Synthesized Equatable and Hashable
    - property: og:description
      content: Synthesized Equatable and Hashable
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/4.1/synthesized-protocols.html
prev: /explore/articles/hackingwithswift.com/swift/4.2/toggle.md
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
  "title": "Synthesized Equatable and Hashable | Changes in Swift 4.1",
  "desc": "Synthesized Equatable and Hashable",
  "link": "https://hackingwithswift.com/swift/4.1/synthesized-protocols", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 4.1

The `Equatable` protocol allows Swift to compare one instance of a type against another. When we say `5 == 5`, Swift understands what that means because `Int` conforms to `Equatable`, which means it implements a function describing what `==` means for two instances of `Int`.

Implementing `Equatable` in our own value types allows them to work like Swift’s strings, arrays, numbers, and more, and it’s usually a good idea to make your structs conform to `Equatable` just so they fit the concept of value types better.

However, implementing `Equatable` can be annoying. Consider this code:

```swift
struct Person {
    var firstName: String
    var lastName: String
    var age: Int
    var city: String
}
```

If you have two instances of `Person` and want to make sure they are identical, you need to compare all four properties, like this:

```swift
struct Person: Equatable {
    var firstName: String
    var lastName: String
    var age: Int
    var city: String

    static func ==(lhs: Person, rhs: Person) -> Bool {
        return lhs.firstName == rhs.firstName && lhs.lastName == rhs.lastName && lhs.age == rhs.age && lhs.city == rhs.city
    }
}
```

Even *reading* that is tiring, never mind *writing* it.

Fortunately, Swift 4.1 can synthesize conformance for `Equatable` – it can generate an `==` method automatically, which will compare all properties in one value with all properties in another, just like above. So, all you have to do now is add `Equatable` as a protocol for your type, and Swift will do the rest.

Of course, if you *want* you can implement `==` yourself. For example, if your type has an `id` field that identifies it uniquely, you would write `==` to compare that single value rather than letting Swift do all the extra work.

Swift 4.1 also introduced synthesized support for the `Hashable` protocol, which means it will generate a `hashValue` property for conforming types automatically. `Hashable` was always annoying to implement because you need to return a unique (or at least mostly unique) hash for every object. It’s important, though, because it lets you use your objects as dictionary keys and store them in sets.

Previously we’d need to write code like this:

```swift
var hashValue: Int {
    return firstName.hashValue ^ lastName.hashValue &* 16777619
}
```

For the most part that’s no longer needed in Swift 4.1, although as with `Equatable` you might still want to write your own method if there’s something specific you need.

::: note

You still need to opt in to these protocols by adding a conformance to your type, and using the synthesized code does require that all properties in your type conform to `Equatable` or `Hashable` respectively.

:::

For more information, see [Swift Evolution proposal SE-0185 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0185-synthesize-equatable-hashable.md).

::: details Other Changes in Swift 4.1
<!-- 
```component VPCard
{
  "title": "Synthesized Equatable and Hashable | Changes in Swift 4.1",
  "desc": "Synthesized Equatable and Hashable",
  "link": "/explore/articles/hackingwithswift.com/swift/4.1/synthesized-protocols.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Key decoding strategies for Codable | Changes in Swift 4.1",
  "desc": "Key decoding strategies for Codable",
  "link": "/explore/articles/hackingwithswift.com/swift/4.1/key-decoding-strategies.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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