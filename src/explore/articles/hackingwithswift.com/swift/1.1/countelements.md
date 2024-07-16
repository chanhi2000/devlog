---
lang: ko-KR
title: countElements() is now count()
description: Article(s) > countElements() is now count()
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-1.1
head:
  - - meta:
    - property: og:title
      content: Article(s) > countElements() is now count()
    - property: og:description
      content: countElements() is now count()
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/1.1/countelements.html
prev: /explore/articles/hackingwithswift.com/swift/1.2/typecasting.md
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
  "title": "countElements() is now count() | Changes in Swift 1.1",
  "desc": "countElements() is now count()",
  "link": "https://hackingwithswift.com/swift/1.1/countelements", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 1.1

In Swift 1.0 you would count an array like this:

```swift
let items = [1, 2, 3]
println(countElements(items))
```

The `countElements()` function has been renamed to `count()` in Swift 1.1, so the new code is this:

```swift
let items = [1, 2, 3]
println(count(items))
```

::: note

This has changed in later versions of Swift – `count` is now a property of strings and collections.

:::

---

<TagLinks />