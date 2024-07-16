---
lang: ko-KR
title: One-sided ranges
description: Article(s) > One-sided ranges
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-4.0
head:
  - - meta:
    - property: og:title
      content: Article(s) > One-sided ranges
    - property: og:description
      content: One-sided ranges
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/4.0/one-sided-ranges.html
next: /explore/articles/hackingwithswift.com/swift/3.1/concrete-constrained-extensions.md
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
  "title": "One-sided ranges | Changes in Swift 4.0",
  "desc": "One-sided ranges",
  "link": "https://hackingwithswift.com/swift/4.0/one-sided-ranges", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 4.0

Last but not least, Swift 4 introduced Python-like one-sided collection slicing, where the missing side is automatically inferred to be the start or end of the collection. This has no effect on existing code because it's a new use for the existing operator, so you don't need to worry about potential breakage.

Here's an example:

```swift
let characters = ["Dr Horrible", "Captain Hammer", "Penny", "Bad Horse", "Moist"]
let bigParts = characters[..<3]
let smallParts = characters[3...]
print(bigParts)
print(smallParts)
```

That code will print out `["Dr Horrible", "Captain Hammer", "Penny"]` then `["Bad Horse", "Moist"]`.

For more information see [the Swift Evolution proposal for this new feature (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0172-one-sided-ranges.md).

::: details Other Changes in Swift 4.0

```component VPCard
{
  "title": "Encoding and decoding data using Codable | Changes in Swift 4.0",
  "desc": "Encoding and decoding data using Codable",
  "link": "/explore/articles/hackingwithswift.com/swift/4.0/codable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Multi-line string literals | Changes in Swift 4.0",
  "desc": "Multi-line string literals",
  "link": "/explore/articles/hackingwithswift.com/swift/4.0/multiline-strings.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Improved keypaths for key-value coding | Changes in Swift 4.0",
  "desc": "Improved keypaths for key-value coding",
  "link": "/explore/articles/hackingwithswift.com/swift/4.0/keypaths.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Improved dictionary functionality | Changes in Swift 4.0",
  "desc": "Improved dictionary functionality",
  "link": "/explore/articles/hackingwithswift.com/swift/4.0/dictionaries.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Strings are collections again | Changes in Swift 4.0",
  "desc": "Strings are collections again",
  "link": "/explore/articles/hackingwithswift.com/swift/4.0/strings.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "One-sided ranges | Changes in Swift 4.0",
  "desc": "One-sided ranges",
  "link": "/explore/articles/hackingwithswift.com/swift/4.0/one-sided-ranges.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
[<FontIcon icon="fas fa-file-zipper"/>Download Swift 4.0 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-3-1-to-4-0.playground.zip)

:::

---

<TagLinks />