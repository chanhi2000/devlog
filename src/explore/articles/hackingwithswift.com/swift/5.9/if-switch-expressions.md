---
lang: ko-KR
title: "if and switch expressions"
description: "Article(s) > if and switch expressions"
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.9
head:
  - - meta:
    - property: og:title
      content: "Article(s) > if and switch expressions"
    - property: og:description
      content: "if and switch expressions"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.9/if-switch-expressions.html
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
  "title": "if and switch expressions | Changes in Swift 5.9",
  "desc": "if and switch expressions",
  "link": "https://hackingwithswift.com/swift/5.9/if-switch-expressions", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.9

[SE-0380 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0380-if-switch-expressions.md) adds the ability for us to use `if` and `switch` as expressions in several situations. This produces syntax that will be a little surprising at first, but overall it does help reduce a little extra syntax in the language.

As a simple example, we could set a variable to either “Pass” or “Fail” depending on a condition like this:

```swift
let score = 800
let simpleResult = if score > 500 { "Pass" } else { "Fail" }
print(simpleResult)
```

Or we could use a `switch` expression to get a wider range of values like this:

```swift
let complexResult = switch score {
    case ...300: "Fail"
    case 301...500: "Pass"
    case 501...800: "Merit"
    default: "Distinction"
}

print(complexResult)
```

You don’t need to assign the result somewhere in order to use this new expression syntax, and in fact it combines beautifully with [SE-0255 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0255-omit-return.md) from Swift 5.1 that allows us to omit the `return` keyword in single expression functions that return a value.

So, because both `if` and `switch` can now both be used as expressions, we can write a function like this one without using `return` in all four possible cases:

```swift
func rating(for score: Int) -> String {
    switch score {
    case ...300: "Fail"
    case 301...500: "Pass"
    case 501...800: "Merit"
    default: "Distinction"
    }
}

print(rating(for: score))
```

You might be thinking this feature makes `if` work more like the ternary conditional operator, and you’d be at least partly right. For example, we could have written our simple `if` condition from earlier like this:

```swift
let ternaryResult = score > 500 ? "Pass" : "Fail"
print(ternaryResult)
```

However, the two are not identical, and there is one place in particular that might catch you out – you can see it in this code:

```swift
let customerRating = 4
let bonusMultiplier1 = customerRating > 3 ? 1.5 : 1
let bonusMultiplier2 = if customerRating > 3 { 1.5 } else { 1.0 }
```

Both those calculations produce a `Double` with the value of 1.5, but pay attention to the alternative value for each of them: for the ternary option I’ve written 1, and for the `if` expression I’ve written 1.0.

This is intentional: when using the ternary Swift checks the types of both values at the same time and so automatically considers 1 to be 1.0, whereas with the `if` expression the two options are type checked independently: if we use 1.5 for one case and 1 for the other then we’ll be sending back a `Double` and an `Int`, which isn’t allowed.

::: details Other Changes in Swift 5.9
<!-- 
```component VPCard
{
  "title": "if and switch expressions | Changes in Swift 5.9",
  "desc": "if and switch expressions",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/if-switch-expressions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Value and Type Parameter Packs | Changes in Swift 5.9",
  "desc": "Value and Type Parameter Packs",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/variadic-generics.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Macros | Changes in Swift 5.9",
  "desc": "Macros",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/macros.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Noncopyable structs and enums | Changes in Swift 5.9",
  "desc": "Noncopyable structs and enums",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/noncopyable-structs-and-enums.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "consume operator to end the lifetime of a variable binding | Changes in Swift 5.9",
  "desc": "consume operator to end the lifetime of a variable binding",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/consume-operator.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Convenience Async[Throwing]Stream.makeStream methods | Changes in Swift 5.9",
  "desc": "Convenience Async[Throwing]Stream.makeStream methods",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/convenience-asyncthrowingstream-makestream.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Add sleep(for:) to Clock | Changes in Swift 5.9",
  "desc": "Add sleep(for:) to Clock",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/sleep-for-clock.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Discarding task groups | Changes in Swift 5.9",
  "desc": "Discarding task groups",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/discarding-task-groups.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.9 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-8-to-5-9.playground.zip)

:::

---

<TagLinks />