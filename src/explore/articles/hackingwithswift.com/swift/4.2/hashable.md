---
lang: ko-KR
title: Simpler, more secure hashing
description: Article(s) > Simpler, more secure hashing
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-4.2
head:
  - - meta:
    - property: og:title
      content: Article(s) > Simpler, more secure hashing
    - property: og:description
      content: Simpler, more secure hashing
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/4.2/hashable.html
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
  "title": "Simpler, more secure hashing | Changes in Swift 4.2",
  "desc": "Simpler, more secure hashing",
  "link": "https://hackingwithswift.com/swift/4.2/hashable", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 4.2

Swift 4.2 implemented [SE-0206 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0206-hashable-enhancements.md), which simplifies the way we make custom types conform to the `Hashable` protocol.

From Swift 4.1 onwards conformance to `Hashable` can be synthesized by the compiler. However, if you want your own hashing implementation – for example, if your type has many properties but you know that one of them was enough to identify it uniquely – you still need to write your own code using whatever algorithm you thought was best.

Swift 4.2 introduced a new `Hasher` struct that provides a randomly seeded, universal hash function to make this process easier:

```swift
struct iPad: Hashable {
    var serialNumber: String
    var capacity: Int

    func hash(into hasher: inout Hasher) {
        hasher.combine(serialNumber)
    }
}
```

You can add more properties to your hash by calling `combine()` repeatedly, and the order in which you add properties affects the finished hash value.

You can also use `Hasher` as a standalone hash generator: just provide it with whatever values you want to hash, then call `finalize()` to generate the final value. For example:

```swift
let first = iPad(serialNumber: "12345", capacity: 256)
let second = iPad(serialNumber: "54321", capacity: 512)

var hasher = Hasher()
hasher.combine(first)
hasher.combine(second)
let hash = hasher.finalize()
```

`Hasher` uses a random seed every time it hashes an object, which means the hash value for any object is effectively guaranteed to be different between runs of your app.

This in turn means that elements you add to a set or a dictionary are highly likely to have a different order each time you run your app.

::: details Other Changes in Swift 4.2

```component VPCard
{
  "title": "Derived collections of enum cases | Changes in Swift 4.2",
  "desc": "Derived collections of enum cases",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/caseiterable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Warning and error diagnostic directives | Changes in Swift 4.2",
  "desc": "Warning and error diagnostic directives",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/warning-error.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Dynamic member look up | Changes in Swift 4.2",
  "desc": "Dynamic member look up",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/dynamic-member-lookup.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Enhanced conditional conformances | Changes in Swift 4.2",
  "desc": "Enhanced conditional conformances",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/conditional-conformance.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Random number generation and shuffling | Changes in Swift 4.2",
  "desc": "Random number generation and shuffling",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/random.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Simpler, more secure hashing | Changes in Swift 4.2",
  "desc": "Simpler, more secure hashing",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/hashable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Checking sequence elements match a condition | Changes in Swift 4.2",
  "desc": "Checking sequence elements match a condition",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/allsatisfy.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "In-place collection element removal | Changes in Swift 4.2",
  "desc": "In-place collection element removal",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/remove-where.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Boolean toggling | Changes in Swift 4.2",
  "desc": "Boolean toggling",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/toggle.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 4.2 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-4-1-to-4-2.playground.zip)

:::

---

<TagLinks />