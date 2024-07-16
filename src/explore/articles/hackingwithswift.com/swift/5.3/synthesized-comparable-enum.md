---
lang: ko-KR
title: Synthesized Comparable conformance for enums
description: Article(s) > Synthesized Comparable conformance for enums
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.3
head:
  - - meta:
    - property: og:title
      content: Article(s) > Synthesized Comparable conformance for enums
    - property: og:description
      content: Synthesized Comparable conformance for enums
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.3/synthesized-comparable-enum.html
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
  "title": "Synthesized Comparable conformance for enums | Changes in Swift 5.3",
  "desc": "Synthesized Comparable conformance for enums",
  "link": "https://hackingwithswift.com/swift/5.3/synthesized-comparable-enum", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.3

[SE-0266 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0266-synthesized-comparable-for-enumerations.md) lets us opt in to `Comparable` conformance for enums that either have no associated values or have associated values that are themselves `Comparable`. This allows us to compare two cases from the same enum using `<`, `>`, and similar.

For example, if we had an enum that describes clothing sizes we could ask Swift to synthesize `Comparable` conformance like this:

```swift
enum Size: Comparable {
    case small
    case medium
    case large
    case extraLarge
}

```

We can now create two instances of that enum and compare them using `<`, like this:

```swift
let shirtSize = Size.small
let personSize = Size.large

if shirtSize < personSize {
    print("That shirt is too small")
}
```

This synthesized conformance works great with associated values that are `Comparable`. For example, if we had an enum that described the football World Cup wins for a team, we might write this:

```swift
enum WorldCupResult: Comparable {
    case neverWon
    case winner(stars: Int)
}
```

We could then create several instances of that enum with varying values, and have Swift sort them:

```swift
let americanMen = WorldCupResult.neverWon
let americanWomen = WorldCupResult.winner(stars: 4)
let japaneseMen = WorldCupResult.neverWon
let japaneseWomen = WorldCupResult.winner(stars: 1)

let teams = [americanMen, americanWomen, japaneseMen, japaneseWomen]
let sortedByWins = teams.sorted()
print(sortedByWins)
```

That will sort the array so that the two teams who haven’t won the World Cup come first, then the Japanese women’s team, then the American women’s team – it considers the two `winner` cases to be higher than the two `neverWon` cases, and considers `winner(stars: 4)` to be higher than `winner(stars: 1)`.

::: details Other Changes in Swift 5.3

```component VPCard
{
  "title": "Multi-pattern catch clauses | Changes in Swift 5.3",
  "desc": "Multi-pattern catch clauses",
  "link": "/explore/articles/hackingwithswift.com/swift/5.3/multipattern-catch.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Multiple trailing closures | Changes in Swift 5.3",
  "desc": "Multiple trailing closures",
  "link": "/explore/articles/hackingwithswift.com/swift/5.3/multiple-trailing-closures.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Synthesized Comparable conformance for enums | Changes in Swift 5.3",
  "desc": "Synthesized Comparable conformance for enums",
  "link": "/explore/articles/hackingwithswift.com/swift/5.3/synthesized-comparable-enum.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "self is no longer required in many places | Changes in Swift 5.3",
  "desc": "self is no longer required in many places",
  "link": "/explore/articles/hackingwithswift.com/swift/5.3/removing-self.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Type-based program entry points | Changes in Swift 5.3",
  "desc": "Type-based program entry points",
  "link": "/explore/articles/hackingwithswift.com/swift/5.3/atmain.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "where clauses on contextually generic declarations | Changes in Swift 5.3",
  "desc": "where clauses on contextually generic declarations",
  "link": "/explore/articles/hackingwithswift.com/swift/5.3/where-clauses.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Enum cases as protocol witnesses | Changes in Swift 5.3",
  "desc": "Enum cases as protocol witnesses",
  "link": "/explore/articles/hackingwithswift.com/swift/5.3/enum-protocol-witnesses.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Refined didSet semantics | Changes in Swift 5.3",
  "desc": "Refined didSet semantics",
  "link": "/explore/articles/hackingwithswift.com/swift/5.3/refined-didset.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "A new Float16 type | Changes in Swift 5.3",
  "desc": "A new Float16 type",
  "link": "/explore/articles/hackingwithswift.com/swift/5.3/float16.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Swift Package Manager gains binary dependencies, resources, and more | Changes in Swift 5.3",
  "desc": "Swift Package Manager gains binary dependencies, resources, and more",
  "link": "/explore/articles/hackingwithswift.com/swift/5.3/spm-improvements.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.3 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-2-to-5-3.playground.zip)

:::

---

<TagLinks />