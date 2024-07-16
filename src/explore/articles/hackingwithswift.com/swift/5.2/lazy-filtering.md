---
lang: ko-KR
title: Lazy filtering order is now reversed
description: Article(s) > Lazy filtering order is now reversed
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.2
head:
  - - meta:
    - property: og:title
      content: Article(s) > Lazy filtering order is now reversed
    - property: og:description
      content: Lazy filtering order is now reversed
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.2/lazy-filtering.html
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
  "title": "Lazy filtering order is now reversed | Changes in Swift 5.2",
  "desc": "Lazy filtering order is now reversed",
  "link": "https://hackingwithswift.com/swift/5.2/lazy-filtering", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.2

There’s a small change in Swift 5.2 that could potentially cause your functionality to break: if you use a lazy sequence such as an array, and apply multiple filters to it, those filters are now run in the reverse order.

For example, this code below has one filter that selects names that start with S, then a second filter that prints out the name then returns true:

```swift
let people = ["Arya", "Cersei", "Samwell", "Stannis"]
    .lazy
    .filter { $0.hasPrefix("S") }
    .filter { print($0); return true }
_ = people.count
```

In Swift 5.2 and later that will print “Samwell” and “Stannis”, because after the first filter runs those are the only names that remain to go into the second filter. But *before* Swift 5.2 it would have returned all four names, because the second filter would have been run before the first one. This was confusing, because if you removed the `lazy` then the code would always return just Samwell and Stannis, regardless of Swift version.

This is particularly problematic because the behavior of this depends on where the code is being run: if you run Swift 5.2 code on iOS 13.3 or earlier, or macOS 10.15.3 or earlier, then you’ll get the old backward behavior, but the same code running on newer operating systems will give the new, correct behavior.

::: details Other Changes in Swift 5.2

```component VPCard
{
  "title": "Key path expressions as functions | Changes in Swift 5.2",
  "desc": "Key path expressions as functions",
  "link": "/explore/articles/hackingwithswift.com/swift/5.2/keypath-expressions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Callable values of user-defined nominal types | Changes in Swift 5.2",
  "desc": "Callable values of user-defined nominal types",
  "link": "/explore/articles/hackingwithswift.com/swift/5.2/callasfunction.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Subscripts can now declare default arguments | Changes in Swift 5.2",
  "desc": "Subscripts can now declare default arguments",
  "link": "/explore/articles/hackingwithswift.com/swift/5.2/subscript-default-arguments.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Lazy filtering order is now reversed | Changes in Swift 5.2",
  "desc": "Lazy filtering order is now reversed",
  "link": "/explore/articles/hackingwithswift.com/swift/5.2/lazy-filtering.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "New and improved diagnostics | Changes in Swift 5.2",
  "desc": "New and improved diagnostics",
  "link": "/explore/articles/hackingwithswift.com/swift/5.2/new-diagnostics.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.2 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-1-to-5-2.playground.zip)

:::

---

<TagLinks />