---
lang: ko-KR
title: More keywords can be used as argument labels
description: Article(s) > More keywords can be used as argument labels
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
      content: Article(s) > More keywords can be used as argument labels
    - property: og:description
      content: More keywords can be used as argument labels
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/2.2/more-keywords.html
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
  "title": "More keywords can be used as argument labels | Changes in Swift 2.2",
  "desc": "More keywords can be used as argument labels",
  "link": "https://hackingwithswift.com/swift/2.2/more-keywords", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 2.2

Argument labels are a core feature of Swift, and let us write code like this:

```swift
for i in 1.stride(through: 9, by: 2) {
    print(i)
}
```

Without the `through` or `by` labels, this code would lose its self-documenting nature: what do the 9 and 2 do in `1.stride(9, 2)`? In this example, Swift also uses the argument labels to distinguish `1.stride(through: 9, by: 2)` from `1.stride(to: 9, by: 2)`, which produces different results.

As of Swift 2.2, you can now use a variety of language keywords as these argument labels. You might wonder why this would be a good thing, but consider this code:

```swift
func printGreeting(name: String, repeat repeatCount: Int) {
    for _ in 0 ..< repeatCount {
        print(name)
    }
}

printGreeting("Taylor", repeat: 5)
```

That uses `repeat` as an argument label, which makes sense because the function will print a string a number of times. Because `repeat` is a keyword, this code would not work before Swift 2.2 – you would need to write `repeat` instead, which is unpleasant.

Note that there are still some keywords that may not be used, specifically `var`, `let` and `inout`.

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
<!-- 
```component VPCard
{
  "title": "More keywords can be used as argument labels | Changes in Swift 2.2",
  "desc": "More keywords can be used as argument labels",
  "link": "/explore/articles/hackingwithswift.com/swift/2.2/more-keywords.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
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

```component VPCard
{
  "title": "Compile-time Swift version checking | Changes in Swift 2.2",
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