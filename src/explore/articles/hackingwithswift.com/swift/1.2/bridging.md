---
lang: ko-KR
title: Implicit bridging has been reduced
description: Article(s) > Implicit bridging has been reduced
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
      content: Article(s) > Implicit bridging has been reduced
    - property: og:description
      content: Implicit bridging has been reduced
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/1.2/bridging.html
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
  "title": "Implicit bridging has been reduced | Changes in Swift 1.2",
  "desc": "Implicit bridging has been reduced",
  "link": "https://hackingwithswift.com/swift/1.2/bridging", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 1.2


Prior to Swift 1.2 bridging from Objective-C types to Swift types happened implicitly, meaning that you could use the two interchangeable. From Swift 1.2 onwards you must now use `as` to typecast these yourself. For example:

```swift
authenticateUser(yourNSString as String)
```

::: note

This has changed in later versions of Swift – implicit bridging never happens now.

:::

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

```component VPCard
{
  "title": "The flatMap() method transforms optionals and arrays | Changes in Swift 1.2",
  "desc": "The flatMap() method transforms optionals and arrays",
  "link": "/explore/articles/hackingwithswift.com/swift/1.2/flatmap.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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
<!-- 
```component VPCard
{
  "title": "Implicit bridging has been reduced | Changes in Swift 1.2",
  "desc": "Implicit bridging has been reduced",
  "link": "/explore/articles/hackingwithswift.com/swift/1.2/bridging.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
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