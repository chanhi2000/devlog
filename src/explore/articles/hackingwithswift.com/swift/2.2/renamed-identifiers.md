---
lang: ko-KR
title: "Renamed debug identifiers: line, function, file"
description: "Article(s) > Renamed debug identifiers: line, function, file"
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
      content: "Article(s) > Renamed debug identifiers: line, function, file"
    - property: og:description
      content: "Renamed debug identifiers: line, function, file"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/2.2/renamed-identifiers.html
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
  "title": "Renamed debug identifiers: line, function, file | Changes in Swift 2.2",
  "desc": "Renamed debug identifiers: line, function, file",
  "link": "https://hackingwithswift.com/swift/2.2/renamed-identifiers", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 2.2

Swift 2.1 and earlier used the "screaming snake case" symbols `__FILE__`, `__LINE__`, `__COLUMN__`, and `__FUNCTION__`, which automatically get replaced the compiler by the filename, line number, column number and function name where they appear.

From Swift 2.2, those old symbols have been replaced with `#file`, `#line`, `#column` and `#function`, which will be familiar to you if you've already used [Swift 2.0's #available](/explore/articles/hackingwithswift.com/new-syntax-swift-2-availability-checking.md) to check for iOS features. As the official Swift review says, it also introduced "a convention where # means invoke compiler substitution logic here."

Here’s how the debug identifiers in action from Swift 2.2 and later:

```swift
func printGreeting(name: String, repeat repeatCount: Int) {
    print("This is on line \(#line) of \(#function)")

    let upperName = name.uppercaseString

    for _ in 0 ..< repeatCount {
        print(upperName)
    }
}

printGreeting("Taylor", repeat: 5)
```

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

```component VPCard
{
  "title": "Tuple splat syntax is deprecated | Changes in Swift ",
  "desc": "Tuple splat syntax is deprecated",
  "link": "/explore/articles/hackingwithswift.com/swift/2.2/tuple-splat.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

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
<!-- 
```component VPCard
{
  "title": "Renamed debug identifiers: line, function, file | Changes in Swift ",
  "desc": "Renamed debug identifiers: line, function, file",
  "link": "/explore/articles/hackingwithswift.com/swift/2.2/renamed-identifiers.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
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