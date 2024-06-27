---
lang: ko-KR
title: Sequences get prefix(while:) and drop(while:) methods
description: Article(s) > Sequences get prefix(while:) and drop(while:) methods
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-3.1
head:
  - - meta:
    - property: og:title
      content: Article(s) > Sequences get prefix(while:) and drop(while:) methods
    - property: og:description
      content: Sequences get prefix(while:) and drop(while:) methods
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/3.1/prefix-drop.html
next: /explore/articles/hackingwithswift.com/swift/3.0/function-parameters.md
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
  "title": "Sequences get prefix(while:) and drop(while:) methods | Changes in Swift 3.1",
  "desc": "Sequences get prefix(while:) and drop(while:) methods",
  "link": "https://hackingwithswift.com/swift/3.1/prefix-drop", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 3.1

Two useful new methods have been added to the `Sequence` protocol: `prefix(while:)` and `drop(while:)`. The former returns the longest subsequence that satisfies a predicate, which is a fancy way of saying that you give it a closure to run on every item, and it will go through all the elements in the sequence and return those that match the closure – but will stop as soon as it finds a non-matching element.

Let's take a look at a code example:

```swift
let names = ["Michael Jackson", "Michael Jordan", "Michael Caine", "Taylor Swift", "Adele Adkins", "Michael Douglas"]
let prefixed = names.prefix { $0.hasPrefix("Michael") }
print(prefixed)
```

That uses the `hasPrefix()` method to return the subsequence `["Michael Jackson", "Michael Jordan", "Michael Caine"` – the first three elements in the sequence. It won't include "Michael Douglas", because that comes after the first non-Michael. If you wanted *all* the Michaels regardless of their position, you should use `filter()` instead.

The second new method, `drop(while:)` is effectively the opposite: it finds the longest subsequence that satisfies your predicate, then returns everything *after* it. For example:

```swift
let names = ["Michael Jackson", "Michael Jordan", "Michael Caine", "Taylor Swift", "Adele Adkins", "Michael Douglas"]
let dropped = names.drop { $0.hasPrefix("Michael") }
print(dropped)
```

That will return the subsequence `["Taylor Swift", "Adele Adkins", "Michael Douglas"]` – everything after the initial Michaels.

::: details Other Changes in Swift 3.1

```component VPCard
{
  "title": "Concrete constrained extensions | Changes in Swift ",
  "desc": "Concrete constrained extensions",
  "link": "/explore/articles/hackingwithswift.com/swift/3.1/concrete-constrained-extensions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Generics with nested types | Changes in Swift ",
  "desc": "Generics with nested types",
  "link": "/explore/articles/hackingwithswift.com/swift/3.1/generic-nested-types.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Sequences get prefix(while:) and drop(while:) methods | Changes in Swift ",
  "desc": "Sequences get prefix(while:) and drop(while:) methods",
  "link": "/explore/articles/hackingwithswift.com/swift/3.1/prefix-drop.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
[<FontIcon icon="fas fa-file-zipper"/>Download Swift 3.1 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-3-0-to-3-1.playground.zip)

:::

---

<TagLinks />    