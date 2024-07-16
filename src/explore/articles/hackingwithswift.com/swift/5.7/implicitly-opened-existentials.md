---
lang: ko-KR
title: Implicitly opened existentials
description: Article(s) > Implicitly opened existentials
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
      content: Article(s) > Implicitly opened existentials
    - property: og:description
      content: Implicitly opened existentials
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.7/implicitly-opened-existentials.html
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
  "title": "Implicitly opened existentials | Changes in Swift 5.7",
  "desc": "Implicitly opened existentials",
  "link": "https://hackingwithswift.com/swift/5.7/implicitly-opened-existentials", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.7

[SE-0352 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0352-implicit-open-existentials.md) allows Swift to call generic functions using a protocol in many situations, which removes a somewhat odd barrier that existed previously.

As an example, here’s a simple generic function that is able to work with any kind of `Numeric` value:

```swift
func double<T: Numeric>(_ number: T) -> T {
    number * 2
}
```

If we call that directly, e.g. `double(5)`, then the Swift compiler can choose to *specialize* the function – to effectively create a version that accepts an `Int` directly, for performance reasons.

However, what SE-0352 does is allow that function to be callable when all we know is that our data conforms to a protocol, like this:

```swift
let first = 1
let second = 2.0
let third: Float = 3

let numbers: [any Numeric] = [first, second, third]

for number in numbers {
    print(double(number))
}
```

Swift calls these *existential types*: the actual data type you’re using sits inside a box, and when we call methods on that box Swift understands it should implicitly call the method on the data *inside* the box. SE-0352 extends this same power to function calls too: the `number` value in our loop is an existential type (a box containing either an `Int`, `Double`, or `Float`), but Swift is able to pass it in to the generic `double()` function by sending in the value inside the box.

There are limits to what this capable of, and I think they are fairly self explanatory. For example, this kind of code won’t work:

```swift
func areEqual<T: Numeric>(_ a: T, _ b: T) -> Bool {
    a == b
}

print(areEqual(numbers[0], numbers[1]))
```

Swift isn’t able to statically verify (i.e., at compile time) that both values are things that can be compared using `==`, so the code simply won’t build.

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

```component VPCard
{
  "title": "Type inference from default expressions | Changes in Swift 5.7",
  "desc": "Type inference from default expressions",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/default-type-inference.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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
<!-- 
```component VPCard
{
  "title": "Implicitly opened existentials | Changes in Swift 5.7",
  "desc": "Implicitly opened existentials",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/implicitly-opened-existentials.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
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