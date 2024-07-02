---
lang: ko-KR
title: Random number generation and shuffling
description: Article(s) > Random number generation and shuffling
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-4.2
head:
  - - meta:
    - property: og:title
      content: Article(s) > Random number generation and shuffling
    - property: og:description
      content: Random number generation and shuffling
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/4.2/random.html
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
  "title": "Random number generation and shuffling | Changes in Swift 4.2",
  "desc": "Random number generation and shuffling",
  "link": "https://hackingwithswift.com/swift/4.2/random", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 4.2

[SE-0202 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0202-random-unification.md) introduced a new random API that’s native to Swift. This means you can for the most part stop using `arc4random_uniform()` and GameplayKit to get randomness, and instead rely on a cryptographically secure randomizer that’s baked right into the core of the language.

You can generate random numbers by calling the `random()` method on whatever numeric type you want, providing the range you want to work with. For example, this generates a random number in the range 1 through 4, inclusive on both sides:

```swift
let randomInt = Int.random(in: 1..<5)
```

Similar methods exist for `Float`, `Double`, and `CGFloat`:

```swift
let randomFloat = Float.random(in: 1..<10)
let randomDouble = Double.random(in: 1...100)
let randomCGFloat = CGFloat.random(in: 1...1000)
```

There’s also one for booleans, generating either true or false randomly:

```swift
let randomBool = Bool.random()
```

Checking a random boolean is effectively the same as checking `Int.random(in: 0...1) == 1`, but it expresses your intent more clearly.

[SE-0202 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0202-random-unification.md) also includes support for shuffling arrays using new `shuffle()` and `shuffled()` methods depending on whether you want in-place shuffling or not. For example:

```swift
var albums = ["Red", "1989", "Reputation"]

// shuffle in place
albums.shuffle()

// get a shuffled array back
let shuffled = albums.shuffled()
```

It also adds a new `randomElement()` method to arrays, which returns one random element from the array if it isn’t empty, or nil otherwise:

```swift
if let random = albums.randomElement() {
    print("The random album is \(random).")
}
```

::: details Other Changes in Swift 4.2

```component VPCard
{
  "title": "Derived collections of enum cases | Changes in Swift 4.2",
  "desc": "Derived collections of enum cases",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/caseiterable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Warning and error diagnostic directives | Changes in Swift 4.2",
  "desc": "Warning and error diagnostic directives",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/warning-error.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Dynamic member look up | Changes in Swift 4.2",
  "desc": "Dynamic member look up",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/dynamic-member-lookup.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Enhanced conditional conformances | Changes in Swift 4.2",
  "desc": "Enhanced conditional conformances",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/conditional-conformance.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Random number generation and shuffling | Changes in Swift 4.2",
  "desc": "Random number generation and shuffling",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/random.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
```component VPCard
{
  "title": "Simpler, more secure hashing | Changes in Swift 4.2",
  "desc": "Simpler, more secure hashing",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/hashable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Checking sequence elements match a condition | Changes in Swift 4.2",
  "desc": "Checking sequence elements match a condition",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/allsatisfy.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "In-place collection element removal | Changes in Swift 4.2",
  "desc": "In-place collection element removal",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/remove-where.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Boolean toggling | Changes in Swift 4.2",
  "desc": "Boolean toggling",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/toggle.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 4.2 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-4-1-to-4-2.playground.zip)

:::

---

<TagLinks />