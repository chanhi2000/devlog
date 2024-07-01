---
lang: ko-KR
title: Compile-time Swift version checking
description: Article(s) > Compile-time Swift version checking
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
      content: Article(s) > Compile-time Swift version checking
    - property: og:description
      content: Compile-time Swift version checking
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/2.2/version-checking.html
next: /explore/articles/hackingwithswift.com/swift/2.1/string-interpolation.md
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
  "title": "Compile-time Swift version checking | Changes in Swift 2.2",
  "desc": "Compile-time Swift version checking",
  "link": "https://hackingwithswift.com/swift/2.2/version-checking", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 2.2

Swift 2.2 adds a new build configuration option that makes it easy to combine code code written in versions of Swift into a single file. This might seem unnecessary, but spare a thought to people who write libraries in Swift: do they target Swift 2.2 and hope everyone is using it, or target Swift 2.0 and hope users can upgrade using Xcode?

Using the new build option lets you write two different flavours of Swift, and the correct one will be compiled depending on the version of the Swift compiler.

For example:

```swift
#if swift(>=2.2)
print("Running Swift 2.2 or later")
#else
print("Running Swift 2.1 or earlier")
#endif
```

Just like the existing `#if os()` build option, this adjusts what code is produced by the compiler: if you're using a Swift 2.2 compiler, the second `print()` line won't even be seen. This means you can use utter gibberish if you want:

```swift
#if swift(>=2.2)
print("Running Swift 2.2 or later")
#else
THIS WILL COMPILE JUST FINE IF YOU'RE
USING A SWIFT 2.2 COMPILER BECAUSE
THIS BIT IS COMPLETELY IGNORED!
#endif
```

::: details Other changes in Swift 2.2…

```component VPCard
{
  "title": "++ and -- are deprecated | Changes in Swift 2.2",
  "desc": "++ and -- are deprecated",
  "link": "/explore/articles/hackingwithswift.com/swift/2.2/increment-decrement.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Traditional C-style for loops are deprecated | Changes in Swift 2.2",
  "desc": "Traditional C-style for loops are deprecated",
  "link": "/explore/articles/hackingwithswift.com/swift/2.2/c-loops.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Comparing tuples | Changes in Swift 2.2 ",
  "desc": "Comparing tuples",
  "link": "/explore/articles/hackingwithswift.com/swift/2.2/comparing-tuples.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Tuple splat syntax is deprecated | Changes in Swift 2.2",
  "desc": "Tuple splat syntax is deprecated",
  "link": "/explore/articles/hackingwithswift.com/swift/2.2/tuple-splat.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "More keywords can be used as argument labels | Changes in Swift 2.2",
  "desc": "More keywords can be used as argument labels",
  "link": "/explore/articles/hackingwithswift.com/swift/2.2/more-keywords.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Variable parameters have been deprecated | Changes in Swift 2.2",
  "desc": "Variable parameters have been deprecated",
  "link": "/explore/articles/hackingwithswift.com/swift/2.2/variable-parameters.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Renamed debug identifiers: line, function, file | Changes in Swift 2.2",
  "desc": "Renamed debug identifiers: line, function, file",
  "link": "/explore/articles/hackingwithswift.com/swift/2.2/renamed-identifiers.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Stringified selectors are deprecated | Changes in Swift 2.2",
  "desc": "Stringified selectors are deprecated",
  "link": "/explore/articles/hackingwithswift.com/swift/2.2/stringified-selectors.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Compile-time Swift version checking | Changes in Swift 2.2",
  "desc": "Compile-time Swift version checking",
  "link": "/explore/articles/hackingwithswift.com/swift/2.2/version-checking.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
[<FontIcon icon="fas fa-file-zipper"/>Download Swift 2.2 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-2-1-to-2-2.playground.zip)

:::

---

<TagLinks />