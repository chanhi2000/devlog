---
lang: ko-KR
title: Tuple splat syntax is deprecated
description: Article(s) > Tuple splat syntax is deprecated
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-2.2
head:
  - - meta:
    - property: og:title
      content: Article(s) > Tuple splat syntax is deprecated
    - property: og:description
      content: Tuple splat syntax is deprecated
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/2.2/tuple-splat.html
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
  "title": "Tuple splat syntax is deprecated | Changes in Swift 2.2",
  "desc": "Tuple splat syntax is deprecated",
  "link": "https://hackingwithswift.com/swift/2.2/tuple-splat", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 2.2

Another feature that has been deprecated is one that has been part of Swift since 2010 (yes, years before it launched). It's been named "the tuple splat", and not many people were using it. It's partly for that reason – although mainly because it introduces all sorts of ambiguities when reading code – that this syntax is being deprecated.

In case you were curious – and let's face it, you probably are – here's an example of tuple splat syntax in action:

```swift
func describePerson(name: String, age: Int) {
    print("\(name) is \(age) years old")
}

let person = ("Taylor Swift", age: 26)
describePerson(person)
```

But remember: don't grow too fond of your new knowledge, because tuple splats are deprecated in Swift 2.2 and will be removed entirely in a later version.

::: details Other changes in Swift 2.2…

```component VPCard
{
  "title": "++ and -- are deprecated | Changes in Swift ",
  "desc": "++ and -- are deprecated",
  "link": "/explore/articles/hackingwithswift.com/swift/2.2/increment-decrement.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Traditional C-style for loops are deprecated | Changes in Swift ",
  "desc": "Traditional C-style for loops are deprecated",
  "link": "/explore/articles/hackingwithswift.com/swift/2.2/c-loops.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Comparing tuples | Changes in Swift ",
  "desc": "Comparing tuples",
  "link": "/explore/articles/hackingwithswift.com/swift/2.2/comparing-tuples.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Tuple splat syntax is deprecated | Changes in Swift ",
  "desc": "Tuple splat syntax is deprecated",
  "link": "/explore/articles/hackingwithswift.com/swift/2.2/tuple-splat.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
```component VPCard
{
  "title": "More keywords can be used as argument labels | Changes in Swift ",
  "desc": "More keywords can be used as argument labels",
  "link": "/explore/articles/hackingwithswift.com/swift/2.2/more-keywords.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Variable parameters have been deprecated | Changes in Swift ",
  "desc": "Variable parameters have been deprecated",
  "link": "/explore/articles/hackingwithswift.com/swift/2.2/variable-parameters.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Renamed debug identifiers: line, function, file | Changes in Swift ",
  "desc": "Renamed debug identifiers: line, function, file",
  "link": "/explore/articles/hackingwithswift.com/swift/2.2/renamed-identifiers.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Stringified selectors are deprecated | Changes in Swift ",
  "desc": "Stringified selectors are deprecated",
  "link": "/explore/articles/hackingwithswift.com/swift/2.2/stringified-selectors.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Compile-time Swift version checking | Changes in Swift ",
  "desc": "Compile-time Swift version checking",
  "link": "/explore/articles/hackingwithswift.com/swift/2.2/version-checking.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 2.2 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-2-1-to-2-2.playground.zip)

:::

---

<TagLinks />