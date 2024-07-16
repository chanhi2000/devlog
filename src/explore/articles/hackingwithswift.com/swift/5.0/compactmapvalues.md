---
lang: ko-KR
title: Transforming and unwrapping dictionary values with compactMapValues()
description: Article(s) > Transforming and unwrapping dictionary values with compactMapValues()
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
      content: Article(s) > Transforming and unwrapping dictionary values with compactMapValues()
    - property: og:description
      content: Transforming and unwrapping dictionary values with compactMapValues()
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.0/compactmapvalues.html
next: /explore/articles/hackingwithswift.com/swift/4.2/caseiterable.md
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
  "title": "Transforming and unwrapping dictionary values with compactMapValues() | Changes in Swift 5.0",
  "desc": "Transforming and unwrapping dictionary values with compactMapValues()",
  "link": "https://hackingwithswift.com/swift/5.0/compactmapvalues", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.0

[SE-0218 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0218-introduce-compact-map-values.md) adds a new `compactMapValues()` method to dictionaries, bringing together the `compactMap()` functionality from arrays (“transform my values, unwrap the results, then discard anything that’s nil”) with the `mapValues()` method from dictionaries (“leave my keys intact but transform my values”).

As an example, here’s a dictionary of people in a race, along with the times they took to finish in seconds. One person did not finish, marked as “DNF”:

```swift
let times = [
    "Hudson": "38",
    "Clarke": "42",
    "Robinson": "35",
    "Hartis": "DNF"
]
```

We can use `compactMapValues()` to create a new dictionary with names and times as an integer, with the one DNF person removed:

```swift
let finishers1 = times.compactMapValues { Int($0) }
```

Alternatively, you could just pass the `Int` initializer directly to `compactMapValues()`, like this:

```swift
let finishers2 = times.compactMapValues(Int.init)
```

You can also use `compactMapValues()` to unwrap optionals and discard nil values without performing any sort of transformation, like this:

```swift
let people = [
    "Paul": 38,
    "Sophie": 8,
    "Charlotte": 5,
    "William": nil
]

let knownAges = people.compactMapValues { $0 }
```

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

```component VPCard
{
  "title": "Checking for integer multiples | Changes in Swift 5.0",
  "desc": "Checking for integer multiples",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/integer-multiples.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Transforming and unwrapping dictionary values with compactMapValues() | Changes in Swift 5.0",
  "desc": "Transforming and unwrapping dictionary values with compactMapValues()",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/compactmapvalues.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.0 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-4-2-to-5-0.playground.zip)

:::

---

<TagLinks />