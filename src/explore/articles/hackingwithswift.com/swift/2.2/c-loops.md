---
lang: ko-KR
title: Traditional C-style for loops are deprecated
description: Article(s) > Traditional C-style for loops are deprecated
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
      content: Article(s) > Traditional C-style for loops are deprecated
    - property: og:description
      content: Traditional C-style for loops are deprecated
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/2.2/string-interpolation.html
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
  "title": "Traditional C-style for loops are deprecated | Changes in Swift 2.2",
  "desc": "Traditional C-style for loops are deprecated",
  "link": "https://hackingwithswift.com/swift/2.2/c-loops", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 2.2

This changed outlawed the following syntax in Swift:

```swift
for var i = 1; i <= 10; i += 1 {
    print("\(i) green bottles")
}
```

These are called C-style for loops because they have long been a feature of C-like languages, and conceptually even pre-date C by quite a long way.

Although Swift is (just about!) a C-like language, it has a number of newer, smarter alternatives to the traditional for loop. The result: this construct was deprecated in Swift 2.2 and will be removed "in a future version of Swift."

To replace these old for loops, use one of the many alternatives. For example, the "green bottles" code above could be rewritten to loop over a range, like this:

```swift
for i in 1...10 {
    print("\(i) green bottles")
}
```

Remember, though, that it's a bad idea to create a range where the start is higher than the end: your code will compile, but it will crash at runtime. So, rather than writing this:

```swift
for i in 10...1 {
    print("\(i) green bottles")
}
```

…you should write this instead:

```swift
for i in (1...10).reverse() {
    print("\(i) green bottles")
}
```

Another alternative is just to use regular fast enumeration over an array of items, like this:

```swift
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for number in array {
    print("\(number) green bottles")
}
```

Although if you want to be technically correct (also known as "the best kind of correct") you would write such a beast like this:

```swift
var array = Array(1...10)

for number in array {
    print("\(number) green bottles")
}
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
<!-- 
```component VPCard
{
  "title": "Traditional C-style for loops are deprecated | Changes in Swift ",
  "desc": "Traditional C-style for loops are deprecated",
  "link": "/explore/articles/hackingwithswift.com/swift/2.2/c-loops.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
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