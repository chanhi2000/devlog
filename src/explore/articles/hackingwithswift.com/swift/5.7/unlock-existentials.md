---
lang: ko-KR
title: Unlock existentials for all protocols
description: Article(s) > Unlock existentials for all protocols
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
      content: Article(s) > Unlock existentials for all protocols
    - property: og:description
      content: Unlock existentials for all protocols
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.7/unlock-existentials.html
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
  "title": "Unlock existentials for all protocols | Changes in Swift 5.7",
  "desc": "Unlock existentials for all protocols",
  "link": "https://hackingwithswift.com/swift/5.7/unlock-existentials", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.7

[SE-0309 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0309-unlock-existential-types-for-all-protocols.md) significantly loosens Swift’s ban on using protocols as types when they have `Self` or associated type requirements, moving to a model where only specific properties or methods are off limits based on what they do.

In simple terms, this means the following code becomes legal:

```swift
let firstName: any Equatable = "Paul"
let lastName: any Equatable = "Hudson"
```

`Equatable` is a protocol with `Self` requirements, which means it provides functionality that refers to the specific type that adopts it. For example, `Int` conforms to `Equatable`, so when we say `4 == 4` we’re actually running a function that accepts two integers and returns true if they match.

Swift *could* implement this functionality using a function similar to `func ==(first: Int, second: Int) -> Bool`, but that wouldn’t scale well – they would need to write dozens of such functions to handle Booleans, strings, arrays, and so on. So, instead the `Equatable` protocol has a requirement like this: `func ==(lhs: Self, rhs: Self) -> Bool`. In English, that means “you need to be able to accept two instances of the same type and tell me if they are the same.” That might be two integers, two strings, two Booleans, or two of any other type that conforms to `Equatable`.

To avoid this problem and similar ones, any time `Self` appeared in a protocol before Swift 5.7 the compiler would simply not allow us to use it in code such as this:

```swift
let tvShow: [any Equatable] = ["Brooklyn", 99]
```

From Swift 5.7 onwards, this code *is* allowed, and now the restrictions are pushed back to situations where you attempt to use the type in a place where Swift must actually enforce its restrictions. This means we *can’t* write `firstName == lastName` because as I said `==` must be sure it has two instances of the same type in order to work, and by using `any Equatable` we’re hiding the exact types of our data.

However, what we have gained is the ability to do runtime checks on our data to identify specifically what we’re working with. In the case of our mixed array, we could write this:

```swift
for item in tvShow {
    if let item = item as? String {
        print("Found string: \(item)")
    } else if let item = item as? Int {
        print("Found integer: \(item)")
    }
}
```

Or in the case of our two strings, we could use this:

```swift
if let firstName = firstName as? String, let lastName = lastName as? String {
    print(firstName == lastName)
}
```

The key to understanding what this change does is remembering that it allow us to use these protocol more freely, as long as we don’t do anything that specifically needs to knows about the internals of the type. So, we could write code to check whether all items in any sequence conform to the `Identifiable` protocol:

```swift
func canBeIdentified(_ input: any Sequence) -> Bool {
    input.allSatisfy { $0 is any Identifiable }
}
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
<!-- 
```component VPCard
{
  "title": "Unlock existentials for all protocols | Changes in Swift 5.7",
  "desc": "Unlock existentials for all protocols",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/unlock-existentials.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
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