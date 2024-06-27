---
lang: ko-KR
title: Multi-line string literals
description: Article(s) > Multi-line string literals
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
      content: Article(s) > Multi-line string literals
    - property: og:description
      content: Multi-line string literals
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/4.0/multiline-strings.html
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
  "title": "Multi-line string literals | Changes in Swift 4.0",
  "desc": "Multi-line string literals",
  "link": "https://hackingwithswift.com/swift/4.0/multiline-strings", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 4.0

Writing multi-line strings in Swift has always meant adding `\n` inside your strings to add line breaks wherever you want them. This doesn't look good in code, but at least it displays correctly for users. Fortunately, Swift 4 introduced new multi-line string literal syntax that lets you add line breaks freely and use quote marks without escaping, while still benefiting from functionality like string interpolation.

To start a string literal, you need to write three double quotation marks: `"""` then press return. You can then go ahead and write a string as long as you want, including variables and line breaks, before ending your string by pressing return then writing three more double quotation marks.

String literals have two important rules: when you open a string using `"""` the content of your string must begin on a new line, and when you end a multi-line string using `"""` that must also begin on a new line.

Here it is in action:

```swift
let longString = """
When you write a string that spans multiple
lines make sure you start its content on a
line all of its own, and end it with three
quotes also on a line of their own.
Multi-line strings also let you write "quote marks"
freely inside your strings, which is great!
"""
```

That creates a new string with several line breaks right there in the definition – much easier to read *and* write.

For more information see [the Swift Evolution proposal for this new feature (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0168-multi-line-string-literals.md).

::: details Other Changes in Swift 4.0

```component VPCard
{
  "title": "Encoding and decoding data using Codable | Changes in Swift 4.0",
  "desc": "Encoding and decoding data using Codable",
  "link": "/explore/articles/hackingwithswift.com/swift/4.0/codable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Multi-line string literals | Changes in Swift 4.0",
  "desc": "Multi-line string literals",
  "link": "/explore/articles/hackingwithswift.com/swift/4.0/multiline-strings.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
```component VPCard
{
  "title": "Improved keypaths for key-value coding | Changes in Swift 4.0",
  "desc": "Improved keypaths for key-value coding",
  "link": "/explore/articles/hackingwithswift.com/swift/4.0/keypaths.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Improved dictionary functionality | Changes in Swift 4.0",
  "desc": "Improved dictionary functionality",
  "link": "/explore/articles/hackingwithswift.com/swift/4.0/dictionaries.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Strings are collections again | Changes in Swift 4.0",
  "desc": "Strings are collections again",
  "link": "/explore/articles/hackingwithswift.com/swift/4.0/strings.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "One-sided ranges | Changes in Swift 4.0",
  "desc": "One-sided ranges",
  "link": "/explore/articles/hackingwithswift.com/swift/4.0/one-sided-ranges.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 4.0 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-3-1-to-4-0.playground.zip)

:::

---

<TagLinks />