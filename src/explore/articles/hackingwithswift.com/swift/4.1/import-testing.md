---
lang: ko-KR
title: Build configuration import testing
description: Article(s) > Build configuration import testing
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
      content: Article(s) > Build configuration import testing
    - property: og:description
      content: Build configuration import testing
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/4.1/import-testing.html
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
  "title": "Build configuration import testing | Changes in Swift 4.1",
  "desc": "Build configuration import testing",
  "link": "https://hackingwithswift.com/swift/4.1/import-testing", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 4.1

Swift 4.1 implemented [SE-0075 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0075-import-test.md), which introduced a new `canImport` condition that lets us check whether a specific module can be imported when our code is compiled.

This is particularly important for cross-platform code: if you had a Swift file that implemented one behavior on macOS and another on iOS, or if you needed specific functionality for Linux. For example:

```swift
#if canImport(SpriteKit)
   // this will be true for iOS, macOS, tvOS, and watchOS
#else
   // this will be true for other platforms, such as Linux
#endif
```

Previously you would have had to use inclusive or exclusive tests by operating system, like this:

```swift
#if !os(Linux)
   // Matches macOS, iOS, watchOS, tvOS, and any other future platforms
#endif

#if os(macOS) || os(iOS) || os(tvOS) || os(watchOS)
   // Matches only Apple platforms, but needs to be kept up to date as new platforms are added
#endif
```

The new `canImport` condition lets us focus on the functionality we care about rather than what platform we're compiling for, thus avoiding a variety of problems.

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
<!-- 
```component VPCard
{
  "title": "Build configuration import testing | Changes in Swift 4.1",
  "desc": "Build configuration import testing",
  "link": "/explore/articles/hackingwithswift.com/swift/4.1/import-testing.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
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