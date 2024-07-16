---
lang: ko-KR
title: The flatMap() method transforms optionals and arrays
description: Article(s) > The flatMap() method transforms optionals and arrays
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-1.2
head:
  - - meta:
    - property: og:title
      content: Article(s) > The flatMap() method transforms optionals and arrays
    - property: og:description
      content: The flatMap() method transforms optionals and arrays
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/1.2/flatmap.html
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
  "title": "The flatMap() method transforms optionals and arrays | Changes in Swift 1.2",
  "desc": "The flatMap() method transforms optionals and arrays",
  "link": "https://hackingwithswift.com/swift/1.2/flatmap", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 1.2

The `flatMap()` method is designed to allow you to transform optionals and elements inside a collection while also decreasing the amount of containment that happens. For example, if you transform an optional in a way that will also return an optional, using `map()` would give you an optional optional (a double optional), whereas `flatMap()` is able to combine those two optionals into a single optional.

```swift
let lengthOfFirst = names.first.flatMap { count($0) }
```

Decreasing the amount of containment also makes `flatMap()` a simple way of converting multi-dimensional arrays into single-dimensional arrays:

```swift
[[1, 2], [3, 4], [5, 6]].flatMap { $0 }
```

There is no "map" operation there, so we're just left with the flattening behavior – that will result in a single array containing the value `[1, 2, 3, 4, 5, 6]`.

::: details Other changes in Swift 1.2…

```component VPCard
{
  "title": "The zip() function joins two sequences | Changes in Swift 1.2",
  "desc": "The zip() function joins two sequences",
  "link": "/explore/articles/hackingwithswift.com/swift/1.2/zip.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!--
```component VPCard
{
  "title": "The flatMap() method transforms optionals and arrays | Changes in Swift 1.2",
  "desc": "The flatMap() method transforms optionals and arrays",
  "link": "/explore/articles/hackingwithswift.com/swift/1.2/flatmap.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Closures can now be marked @noescape | Changes in Swift 1.2",
  "desc": "Closures can now be marked @noescape",
  "link": "/explore/articles/hackingwithswift.com/swift/1.2/noescape.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Classes can now have static methods and properties | Changes in Swift 1.2",
  "desc": "Classes can now have static methods and properties",
  "link": "/explore/articles/hackingwithswift.com/swift/1.2/static.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Constants no longer require immediate initialization | Changes in Swift 1.2",
  "desc": "Constants no longer require immediate initialization",
  "link": "/explore/articles/hackingwithswift.com/swift/1.2/constants.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "A new Set data structure | Changes in Swift 1.2",
  "desc": "A new Set data structure",
  "link": "/explore/articles/hackingwithswift.com/swift/1.2/set.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Implicit bridging has been reduced | Changes in Swift 1.2",
  "desc": "Implicit bridging has been reduced",
  "link": "/explore/articles/hackingwithswift.com/swift/1.2/bridging.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Multiple if let bindings | Changes in Swift 1.2",
  "desc": "Multiple if let bindings",
  "link": "/explore/articles/hackingwithswift.com/swift/1.2/if-let.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Typecasting now includes as! | Changes in Swift 1.2",
  "desc": "Typecasting now includes as!",
  "link": "/explore/articles/hackingwithswift.com/swift/1.2/typecasting.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />