---
lang: ko-KR
title: Type placeholders
description: Article(s) > Type placeholders
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.6
head:
  - - meta:
    - property: og:title
      content: Article(s) > Type placeholders
    - property: og:description
      content: Type placeholders
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.6/type-placeholders.html
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
  "title": "Type placeholders | Changes in Swift 5.6",
  "desc": "Type placeholders",
  "link": "https://hackingwithswift.com/swift/5.6/type-placeholders", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.6

[SE-0315 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0315-placeholder-types.md) introduces the concept of type placeholders, which allow us to explicitly specify only some parts of a value’s type so that the remainder can be filled in using type inference.

In practice, this means writing `_` as your type in any place you want Swift to use type inference, meaning that these three lines of code are the same:

```swift
let score1 = 5
let score2: Int = 5
let score3: _ = 5
```

In those trivial examples type placeholders don’t add anything, but they *are* useful when the compiler is able to correctly infer part of a type but not all. For example, if you were creating a dictionary of student names and all the exam results they had this year, you might write this:

```swift
var results1 = [
    "Cynthia": [],
    "Jenny": [],
    "Trixie": [],
]
```

Swift will infer that to be a dictionary with strings as keys, and an array of `Any` as values – almost certainly not what you want. You could specify the entire type explicitly, like this:

```swift
var results2: [String: [Int]] = [
    "Cynthia": [],
    "Jenny": [],
    "Trixie": [],
]
```

However, type placeholders allow you to write `_` in place of the parts you want the compiler to infer – it’s a way for us to explicitly say “this part should use type inference”, alongside places where we want an exact type of our choosing.

So, we could also write this:

```swift
var results3: [_: [Int]] = [
    "Cynthia": [],
    "Jenny": [],
    "Trixie": [],
]
```

As you can see, the `_` there is an explicit request for type inference, but we still have the opportunity to specify the exact array type.

::: tip

Type placeholders can be optional too – use `_?` to have Swift infer your type as optional.

:::

Types placeholders do *not* affect the way we write function signatures: you must still provide their parameter and return types in full. However, I have found that type placeholders do still serve a purpose for when you’re busy experimenting with a prototype: telling the compiler you want it to infer some type often prompts Xcode to offer a Fix-it to complete the code for you.

For example, you might write code to create a player like this:

```swift
struct Player<T: Numeric> {
    var name: String
    var score: T
}

func createPlayer() -> _ {
    Player(name: "Anonymous", score: 0)
}
```

That fails to specify a return type for `createPlayer()`, which will cause a compiler error. However, as we’ve asked Swift to infer the type, the error in Xcode will offer a Fix-it to replace `_` with `Player<Int>` – you can imagine that saving a fair amount of hassle when dealing with more complex types.

Think of type placeholders as a way of simplifying long type annotations: you can replace all the less relevant or boilerplate parts with underscores, leaving the important parts spelled out to help make your code more readable.

::: details Other Changes in Swift 5.6

```component VPCard
{
  "title": "Introduce existential any | Changes in Swift 5.6",
  "desc": "Introduce existential any",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/existential-any.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Type placeholders | Changes in Swift 5.6",
  "desc": "Type placeholders",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/type-placeholders.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
```component VPCard
{
  "title": "Allow coding of non String/Int keyed Dictionary into a KeyedContainer | Changes in Swift 5.6",
  "desc": "Allow coding of non String/Int keyed Dictionary into a KeyedContainer",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/codingkeyrepresentable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Unavailability condition | Changes in Swift 5.6",
  "desc": "Unavailability condition",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/unavailable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "More concurrency changes | Changes in Swift 5.6",
  "desc": "More concurrency changes",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/preconcurrency.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Plugins for Swift Package Manager | Changes in Swift 5.6",
  "desc": "Plugins for Swift Package Manager",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/swiftpm-plugins.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.6 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-5-to-5-6.playground.zip)

:::

---

<TagLinks />