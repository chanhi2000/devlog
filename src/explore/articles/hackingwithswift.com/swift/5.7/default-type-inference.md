---
lang: ko-KR
title: Type inference from default expressions
description: Article(s) > Type inference from default expressions
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.7
head:
  - - meta:
    - property: og:title
      content: Article(s) > Type inference from default expressions
    - property: og:description
      content: Type inference from default expressions
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.7/default-type-inference.html
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
  "title": "Type inference from default expressions | Changes in Swift 5.7",
  "desc": "Type inference from default expressions",
  "link": "https://hackingwithswift.com/swift/5.7/default-type-inference", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.7

[SE-0347 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0347-type-inference-from-default-exprs.md) expands Swift ability to use default values with generic parameter types. What it allows seems quite niche, but it does matter: if you have a generic type or function you can now provide a concrete type for a default expression, in places where previously Swift would have thrown up a compiler error.

As an example, we might have a function that returns `count` number of random items from any kind of sequence:

```swift
func drawLotto1<T: Sequence>(from options: T, count: Int = 7) -> [T.Element] {
    Array(options.shuffled().prefix(count))
}
```

That allows us to run a lottery using any kind of sequence, such as an array of names or an integer range:

```swift
print(drawLotto1(from: 1...49))
print(drawLotto1(from: ["Jenny", "Trixie", "Cynthia"], count: 2))
```

SE-0347 extends this to allow us to provide a concrete type as default value for the `T` parameter in our function, allowing us to keep the flexibility to use string arrays or any other kind of collection, while also defaulting to the range option that we want most of the time:

```swift
func drawLotto2<T: Sequence>(from options: T = 1...49, count: Int = 7) -> [T.Element] {
    Array(options.shuffled().prefix(count))
}
```

And now we can call our function either with a custom sequence, or let the default take over:

```swift
print(drawLotto2(from: ["Jenny", "Trixie", "Cynthia"], count: 2))
print(drawLotto2())
```

::: details Other Changes in Swift 5.7

```component VPCard
{
  "title": "if let shorthand for unwrapping optionals | Changes in Swift 5.7",
  "desc": "if let shorthand for unwrapping optionals",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/if-let-shorthand.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Multi-statement closure type inference | Changes in Swift 5.7",
  "desc": "Multi-statement closure type inference",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/multi-statement-inference.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Clock, Instant, and Duration | Changes in Swift 5.7",
  "desc": "Clock, Instant, and Duration",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/clock.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Regular expressions | Changes in Swift 5.7",
  "desc": "Regular expressions",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/regexes.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Type inference from default expressions | Changes in Swift 5.7",
  "desc": "Type inference from default expressions",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/default-type-inference.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Concurrency in top-level code | Changes in Swift 5.7",
  "desc": "Concurrency in top-level code",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/top-level-concurrency.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Opaque parameter declarations | Changes in Swift 5.7",
  "desc": "Opaque parameter declarations",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/opaque-parameter-declarations.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Structural opaque result types | Changes in Swift 5.7",
  "desc": "Structural opaque result types",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/structural-opaque-result-types.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Unlock existentials for all protocols | Changes in Swift 5.7",
  "desc": "Unlock existentials for all protocols",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/unlock-existentials.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Lightweight same-type requirements for primary associated types | Changes in Swift 5.7",
  "desc": "Lightweight same-type requirements for primary associated types",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/primary-associated-types.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Constrained existential types | Changes in Swift 5.7",
  "desc": "Constrained existential types",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/constrained-existentials.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Distributed actor isolation | Changes in Swift 5.7",
  "desc": "Distributed actor isolation",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/distributed-actors.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "buildPartialBlock for result builders | Changes in Swift 5.7",
  "desc": "buildPartialBlock for result builders",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/buildpartialblock.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Implicitly opened existentials | Changes in Swift 5.7",
  "desc": "Implicitly opened existentials",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/implicitly-opened-existentials.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Unavailable from async attribute | Changes in Swift 5.7",
  "desc": "Unavailable from async attribute",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/noasync.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.7 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-6-to-5-7.playground.zip)

:::

---

<TagLinks />