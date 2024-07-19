---
lang: ko-KR
title: "Pack iteration"
description: "Article(s) > Pack iteration"
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-6.0
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Pack iteration"
    - property: og:description
      content: "Pack iteration"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/6.0/pack-iteration.html
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
  "title": "Pack iteration | Changes in Swift 6.0",
  "desc": "Pack iteration",
  "link": "https://hackingwithswift.com/swift/6.0/pack-iteration", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 6.0

[SE-0408 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolutino`)](https://github.com/apple/swift-evolution/blob/main/proposals/0408-pack-iteration.md) introduces pack iteration, which adds the ability to loop over the parameter pack feature introduced in Swift 5.9.

Although value packs remain one of the most complex features of Swift, the evolution proposal shows just how useful this feature is by adding tuple comparison for any arity in just a few lines of code:

```swift
func == <each Element: Equatable>(lhs: (repeat each Element), rhs: (repeat each Element)) -> Bool {
    for (left, right) in repeat (each lhs, each rhs) {
        guard left == right else { return false }
    }
    return true
}
```

If that means nothing to you, the Simple English version is that [SE-0015 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0015-tuple-comparison-operators.md) added support for direct tuple comparison up to arity 6, meaning that two tuples with up to six items could be compared using ==. If you tried comparing tuples with seven items – e.g. `(1, 2, 3, 4, 5, 6, 7) == (1, 2, 3, 4, 5, 6, 7)` – Swift would throw up an error. SE-0408, along with the code above, removes that restriction.

Tantalizingly, the [Future Directions section (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0408-pack-iteration.md#future-directions) of this evolution proposal suggests that in the future we might see a variant of Swift's `zip()` function that supports any number of sequences.

::: details Other Changes in Swift 6.0

```component VPCard
{
  "title": "Complete concurrency enabled by default | Changes in Swift 6.0",
  "desc": "Complete concurrency enabled by default",
  "link": "/explore/articles/hackingwithswift.com/swift/6.0/concurrency.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "count(where:) | Changes in Swift 6.0",
  "desc": "count(where:)",
  "link": "/explore/articles/hackingwithswift.com/swift/6.0/count-where.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Typed throws | Changes in Swift 6.0",
  "desc": "Typed throws",
  "link": "/explore/articles/hackingwithswift.com/swift/6.0/typed-throws.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Pack iteration | Changes in Swift 6.0",
  "desc": "Pack iteration",
  "link": "/explore/articles/hackingwithswift.com/swift/6.0/pack-iteration.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Add Collection Operations on Noncontiguous Elements | Changes in Swift 6.0",
  "desc": "Add Collection Operations on Noncontiguous Elements",
  "link": "/explore/articles/hackingwithswift.com/swift/6.0/rangeset.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Access-level modifiers on import declarations | Changes in Swift 6.0",
  "desc": "Access-level modifiers on import declarations",
  "link": "/explore/articles/hackingwithswift.com/swift/6.0/access-level-import.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Upgrades for noncopyable types | Changes in Swift 6.0",
  "desc": "Upgrades for noncopyable types",
  "link": "/explore/articles/hackingwithswift.com/swift/6.0/noncopyable-upgrades.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "128-bit Integer Types | Changes in Swift 6.0",
  "desc": "128-bit Integer Types",
  "link": "/explore/articles/hackingwithswift.com/swift/6.0/int128.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "BitwiseCopyable | Changes in Swift 6.0",
  "desc": "BitwiseCopyable",
  "link": "/explore/articles/hackingwithswift.com/swift/6.0/bitwisecopyable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 6.0 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-10-to-6-0.playground.zip)

:::

---

<TagLinks />