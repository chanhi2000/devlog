---
lang: ko-KR
title: Callable values of user-defined nominal types
description: Article(s) > Callable values of user-defined nominal types
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.2
head:
  - - meta:
    - property: og:title
      content: Article(s) > Callable values of user-defined nominal types
    - property: og:description
      content: Callable values of user-defined nominal types
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.2/callasfunction.html
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
  "title": "Callable values of user-defined nominal types | Changes in Swift 5.2",
  "desc": "Callable values of user-defined nominal types",
  "link": "https://hackingwithswift.com/swift/5.2/callasfunction", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.2

[SE-0253 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0253-callable.md) introduced statically callable values to Swift, which is a fancy way of saying that you can now call a value directly if its type implements a method named `callAsFunction()`. You don’t need to conform to any special protocol to make this behavior work; you just need to add that method to your type.

For example, we could create a `Dice` struct that has properties for `lowerBound` and `upperBound`, then add `callAsFunction` so that every time you call a dice value you get a random roll:

```swift
struct Dice {
    var lowerBound: Int
    var upperBound: Int

    func callAsFunction() -> Int {
        (lowerBound...upperBound).randomElement()!
    }
}

let d6 = Dice(lowerBound: 1, upperBound: 6)
let roll1 = d6()
print(roll1)
```

That will print a random number from 1 through 6, and it’s identical to just using `callAsFunction()` directly. For example, we could call it like this:

```swift
let d12 = Dice(lowerBound: 1, upperBound: 12)
let roll2 = d12.callAsFunction()
print(roll2)
```

Swift automatically adapts your call sites based on how `callAsFunction()` is defined. For example, you can add as many parameters as you want, you can control the return value, and you can even mark methods as `mutating` if needed.

For example, this creates a `StepCounter` struct that tracks how far someone has walked and reports back whether they reached their target of 10,000 steps:

```swift
struct StepCounter {
    var steps = 0

    mutating func callAsFunction(count: Int) -> Bool {
        steps += count
        print(steps)
        return steps > 10_000
    }
}

var steps = StepCounter()
let targetReached = steps(count: 10)
```

For more advanced usage, `callAsFunction()` supports both `throws` and `rethrows`, and you can even define multiple `callAsFunction()` methods on a single type – Swift will choose the correct one depending on the call site, just like regular overloading.

::: details Other Changes in Swift 5.2

```component VPCard
{
  "title": "Key path expressions as functions | Changes in Swift 5.2",
  "desc": "Key path expressions as functions",
  "link": "/explore/articles/hackingwithswift.com/swift/5.2/keypath-expressions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Callable values of user-defined nominal types | Changes in Swift 5.2",
  "desc": "Callable values of user-defined nominal types",
  "link": "/explore/articles/hackingwithswift.com/swift/5.2/callasfunction.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
```component VPCard
{
  "title": "Subscripts can now declare default arguments | Changes in Swift 5.2",
  "desc": "Subscripts can now declare default arguments",
  "link": "/explore/articles/hackingwithswift.com/swift/5.2/subscript-default-arguments.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Lazy filtering order is now reversed | Changes in Swift 5.2",
  "desc": "Lazy filtering order is now reversed",
  "link": "/explore/articles/hackingwithswift.com/swift/5.2/lazy-filtering.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "New and improved diagnostics | Changes in Swift 5.2",
  "desc": "New and improved diagnostics",
  "link": "/explore/articles/hackingwithswift.com/swift/5.2/new-diagnostics.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.2 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-1-to-5-2.playground.zip)

:::

---

<TagLinks />