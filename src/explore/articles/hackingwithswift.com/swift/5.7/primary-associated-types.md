---
lang: ko-KR
title: Lightweight same-type requirements for primary associated types
description: Article(s) > Lightweight same-type requirements for primary associated types
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
      content: Article(s) > Lightweight same-type requirements for primary associated types
    - property: og:description
      content: Lightweight same-type requirements for primary associated types
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.7/primary-associated-types.html
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
  "title": "Lightweight same-type requirements for primary associated types | Changes in Swift 5.7",
  "desc": "Lightweight same-type requirements for primary associated types",
  "link": "https://hackingwithswift.com/swift/5.7/primary-associated-types", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.7

[SE-0346 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0346-light-weight-same-type-syntax.md) adds newer, simpler syntax for referring to protocols that have specific associated types. 

As an example, if we were writing code to cache different kinds of data in different kinds of ways, we might start like this:

```swift
protocol Cache<Content> {
    associatedtype Content

    var items: [Content] { get set }

    init(items: [Content])
    mutating func add(item: Content)
}
```

Notice that the protocol now looks like both a protocol and a generic type – it has an associated type declaring some kind of hole that conforming types must fill, but also lists that type in angle brackets: `Cache<Content>`.

The part in angle brackets is what Swift calls its *primary associated type*, and it’s important to understand that not all associated types should be declared up there. Instead, you should list only the ones that calling code normally cares about specifically, e.g. the types of dictionary keys and values or the identifier type in the `Identifiable` protocol. In our case we’ve said that our cache’s content – strings, images, users, etc – is its primary associated type.

At this point, we can go ahead and use our protocol as before – we might create some kind of data we want to cache, and then create a concrete cache type conforming to the protocol, like this:

```swift
struct File {
    let name: String
}

struct LocalFileCache: Cache {
    var items = [File]()

    mutating func add(item: File) {
        items.append(item)
    }
}
```

Now for the clever part: when it comes to creating a cache, we can obviously create a specific one directly, like this:

```swift
func loadDefaultCache() -> LocalFileCache {
    LocalFileCache(items: [])
}
```

But very often we want to hide the specifics of what we’re doing, like this:

```swift
func loadDefaultCacheOld() -> some Cache {
    LocalFileCache(items: [])
}
```

Using `some Cache` gives us the flexibility of changing our mind about what specific cache is sent back, but what SE-0346 lets us do is provide a middle ground between being absolutely specific with a concrete type, and being rather vague with an opaque return type. So, we can specialize the protocol, like this:

```swift
func loadDefaultCacheNew() -> some Cache<File> {
    LocalFileCache(items: [])
}
```

So, we’re still retaining the ability to move to a different `Cache`-conforming type in the future, but we’ve made it clear that whatever is chosen here will store files internally.

This smarter syntax extends to other places too, including things like extensions:

```swift
extension Cache<File> {
    func clean() {
        print("Deleting all cached files…")
    }
}
```

And generic constraints:

```swift
func merge<C: Cache<File>>(_ lhs: C, _ rhs: C) -> C {
    print("Copying all files into a new location…")
    // now send back a new cache with items from both other caches
    return C(items: lhs.items + rhs.items)
}
```

But what will prove most helpful of all is that [SE-0358 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0358-primary-associated-types-in-stdlib.md) brings these primary associated types to Swift’s standard library too, so `Sequence`, `Collection`, and more will benefit – we can write `Sequence<String>` to write code that is agnostic of whatever exact sequence type is being used.

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
<!-- 
```component VPCard
{
  "title": "Lightweight same-type requirements for primary associated types | Changes in Swift 5.7",
  "desc": "Lightweight same-type requirements for primary associated types",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/primary-associated-types.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
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