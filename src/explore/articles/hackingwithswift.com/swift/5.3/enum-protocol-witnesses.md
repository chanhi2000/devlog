---
lang: ko-KR
title: Enum cases as protocol witnesses
description: Article(s) > Enum cases as protocol witnesses
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.3
head:
  - - meta:
    - property: og:title
      content: Article(s) > Enum cases as protocol witnesses
    - property: og:description
      content: Enum cases as protocol witnesses
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.3/enum-protocol-witnesses.html
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
  "title": "Enum cases as protocol witnesses | Changes in Swift 5.3",
  "desc": "Enum cases as protocol witnesses",
  "link": "https://hackingwithswift.com/swift/5.3/enum-protocol-witnesses", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.3

[SE-0280 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0280-enum-cases-as-protocol-witnesses.md) allows enums to participate in protocol witness matching, which is a technical way of saying they can now match requirements of protocols more easily.

For example, you could write code to handle various types of data, but what if that data were missing? Sure, you could use something like nil coalescing to provide a default value every time, but you could also make a protocol that requires a default value, then make various types conform to it with whatever default values you wanted:

```swift
protocol Defaultable {
    static var defaultValue: Self { get }
}

// make integers have a default value of 0
extension Int: Defaultable {
    static var defaultValue: Int { 0 }
}

// make arrays have a default of an empty array
extension Array: Defaultable {
    static var defaultValue: Array { [] }
}

// make dictionaries have a default of an empty dictionary
extension Dictionary: Defaultable {
    static var defaultValue: Dictionary { [:] }
}
```

What SE-0280 allows us to do is exactly the same thing just for enums. For example, you want to create a `padding` enum that can take some number of pixels, some number of centimeters, or a default value decided by the system:

```swift
enum Padding: Defaultable {
    case pixels(Int)
    case cm(Int)
    case defaultValue
}
```

That kind of code wouldn’t have been possible before SE-0280 – Swift would have said that `Padding` doesn’t satisfy the protocol. However, if you think it through the protocol really *is* satisfied: we said it needs a static `defaultValue` that returns `Self`, i.e. whatever concrete type is conforming to the protocol, and that’s exactly what `Padding.defaultValue` does.

::: details Other Changes in Swift 5.3

```component VPCard
{
  "title": "Multi-pattern catch clauses | Changes in Swift 5.3",
  "desc": "Multi-pattern catch clauses",
  "link": "/explore/articles/hackingwithswift.com/swift/5.3/multipattern-catch.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Multiple trailing closures | Changes in Swift 5.3",
  "desc": "Multiple trailing closures",
  "link": "/explore/articles/hackingwithswift.com/swift/5.3/multiple-trailing-closures.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Synthesized Comparable conformance for enums | Changes in Swift 5.3",
  "desc": "Synthesized Comparable conformance for enums",
  "link": "/explore/articles/hackingwithswift.com/swift/5.3/synthesized-comparable-enum.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "self is no longer required in many places | Changes in Swift 5.3",
  "desc": "self is no longer required in many places",
  "link": "/explore/articles/hackingwithswift.com/swift/5.3/removing-self.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Type-based program entry points | Changes in Swift 5.3",
  "desc": "Type-based program entry points",
  "link": "/explore/articles/hackingwithswift.com/swift/5.3/atmain.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "where clauses on contextually generic declarations | Changes in Swift 5.3",
  "desc": "where clauses on contextually generic declarations",
  "link": "/explore/articles/hackingwithswift.com/swift/5.3/where-clauses.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Enum cases as protocol witnesses | Changes in Swift 5.3",
  "desc": "Enum cases as protocol witnesses",
  "link": "/explore/articles/hackingwithswift.com/swift/5.3/enum-protocol-witnesses.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Refined didSet semantics | Changes in Swift 5.3",
  "desc": "Refined didSet semantics",
  "link": "/explore/articles/hackingwithswift.com/swift/5.3/refined-didset.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "A new Float16 type | Changes in Swift 5.3",
  "desc": "A new Float16 type",
  "link": "/explore/articles/hackingwithswift.com/swift/5.3/float16.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Swift Package Manager gains binary dependencies, resources, and more | Changes in Swift 5.3",
  "desc": "Swift Package Manager gains binary dependencies, resources, and more",
  "link": "/explore/articles/hackingwithswift.com/swift/5.3/spm-improvements.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.3 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-2-to-5-3.playground.zip)

:::

---

<TagLinks />