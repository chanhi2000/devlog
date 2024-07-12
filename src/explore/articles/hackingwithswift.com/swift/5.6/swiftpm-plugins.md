---
lang: ko-KR
title: Plugins for Swift Package Manager
description: Article(s) > Plugins for Swift Package Manager
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.6
head:
  - - meta:
    - property: og:title
      content: Article(s) > Plugins for Swift Package Manager
    - property: og:description
      content: Plugins for Swift Package Manager
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.6/swiftpm-plugins.html
next: /explore/articles/hackingwithswift.com/swift/5.5/async-await.md
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "HACKING WITH SWIFT",
  "desc": "What's new in Swift?",
  "link": "/explore/articles/hackingwithswift.com/swift/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Plugins for Swift Package Manager | Changes in Swift 5.6",
  "desc": "Plugins for Swift Package Manager",
  "link": "https://hackingwithswift.com/swift/5.6/swiftpm-plugins", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.6

Swift 5.6 includes a raft (\[[1 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0303-swiftpm-extensible-build-tools.md)\], \[[2 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0305-swiftpm-binary-target-improvements.md)\], \[[3 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`](https://github.com/apple/swift-evolution/blob/main/proposals/0325-swiftpm-additional-plugin-apis.md))\], \[[4 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0332-swiftpm-command-plugins.md)\]) of improvements to Swift Package Manager, which combine to add the beginnings of plugin support using external build tools.

At this point earlier adopters are [<FontIcon icon="fa-brands fa-x-twitter"/>reporting](https://x.com/tonyarnold/status/1498508218934644737) that the functionality isn’t quite far along enough to support more [<FontIcon icon="fa-brands fa-x-twitter"/>complex use cases](https://x.com/merowing_/status/1498567302702374912), but it does at least seem to support SwiftGen and there are further examples demonstrating possibilities for DocC and swift-format.

::: details Other Changes in Swift 5.6

```component VPCard
{
  "title": "Introduce existential any | Changes in Swift 5.6",
  "desc": "Introduce existential any",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/existential-any.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Type placeholders | Changes in Swift 5.6",
  "desc": "Type placeholders",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/type-placeholders.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Allow coding of non String/Int keyed Dictionary into a KeyedContainer | Changes in Swift 5.6",
  "desc": "Allow coding of non String/Int keyed Dictionary into a KeyedContainer",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/codingkeyrepresentable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Unavailability condition | Changes in Swift 5.6",
  "desc": "Unavailability condition",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/unavailable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "More concurrency changes | Changes in Swift 5.6",
  "desc": "More concurrency changes",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/preconcurrency.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Plugins for Swift Package Manager | Changes in Swift 5.6",
  "desc": "Plugins for Swift Package Manager",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/swiftpm-plugins.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.6 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-5-to-5-6.playground.zip)

:::

---

<TagLinks />