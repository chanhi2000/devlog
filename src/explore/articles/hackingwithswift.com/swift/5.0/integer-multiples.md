---
lang: ko-KR
title: Checking for integer multiples
description: Article(s) > Checking for integer multiples
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.0
head:
  - - meta:
    - property: og:title
      content: Article(s) > Checking for integer multiples
    - property: og:description
      content: Checking for integer multiples
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.0/integer-multiples.html
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
  "title": "Checking for integer multiples | Changes in Swift 5.0",
  "desc": "Checking for integer multiples",
  "link": "https://hackingwithswift.com/swift/5.0/integer-multiples", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.0

[SE-0225 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0225-binaryinteger-iseven-isodd-ismultiple.md) adds an `isMultiple(of:)` method to integers, allowing us to check whether one number is a multiple of another in a much clearer way than using the division remainder operation, `%`.

For example:

```swift
let rowNumber = 4

if rowNumber.isMultiple(of: 2) {
    print("Even")
} else {
    print("Odd")
}
```

Yes, we could write the same check using `if rowNumber % 2 == 0` but you have to admit that’s less clear – having `isMultiple(of:)` as a method means it can be listed in code completion options in Xcode, which aids discoverability.

::: details Other Changes in Swift 5.0

```component VPCard
{
  "title": "Raw strings | Changes in Swift 5.0",
  "desc": "Raw strings",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/raw-strings.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "A standard Result type | Changes in Swift 5.0",
  "desc": "A standard Result type",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/result.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Customizing string interpolation | Changes in Swift 5.0",
  "desc": "Customizing string interpolation",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/string-interpolation.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Dynamically callable types | Changes in Swift 5.0",
  "desc": "Dynamically callable types",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/dynamically-callable-types.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Handling future enum cases | Changes in Swift 5.0",
  "desc": "Handling future enum cases",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/handling-future-enum-cases.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Flattening nested optionals resulting from try? | Changes in Swift 5.0",
  "desc": "Flattening nested optionals resulting from try?",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/flattening-optionals.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Checking for integer multiples | Changes in Swift 5.0",
  "desc": "Checking for integer multiples",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/integer-multiples.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Transforming and unwrapping dictionary values with compactMapValues() | Changes in Swift 5.0",
  "desc": "Transforming and unwrapping dictionary values with compactMapValues()",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/compactmapvalues.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.0 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-4-2-to-5-0.playground.zip)

:::

---

<TagLinks />