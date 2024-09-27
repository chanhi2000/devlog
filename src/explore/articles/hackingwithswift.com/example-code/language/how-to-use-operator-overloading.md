---
lang: ko-KR
title: "How to use operator overloading"
description: "Article(s) > How to use operator overloading"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-5.10
  - ios
  - ios-8.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to use operator overloading"
    - property: og:description
      content: "How to use operator overloading"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-operator-overloading.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Language - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/language/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to use operator overloading | Language - free Swift example code",
  "desc": "How to use operator overloading",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-operator-overloading",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Operator overloading is the practice of adding new operators and modifying existing ones to do different things. Operators are those little symbols like `+`, `*`, and `/`, and Swift uses them in a variety of ways depending on context – a string plus another string equals a combined string, for example, whereas an integer plus another integer equals a summed integer.

To create your own operator you need to tell Swift whether it should be *prefix* (before its operand; the values used with it), *postfix* (after its operand), or *infix*. The most common is infix: `+`, `-`, `*`, and more are all infix.

To create a new operator, try adding this to a playground:

```swift
infix operator **
```

That’s the exponentiation operator, designed to raise one number to the power of another. Normally we’d use the `pow()` function for that job, but with operator overloading we can make `**` work instead.

Now you need to tell Swift what to do when it sees that operator. For example, when we write something like `2 ** 4` what does that *mean*?

What Swift wants is a function called `**`, the name of our operator, where the left-hand side is one type and the right-hand side is another type. Which type is down to us, but `**` is normally used with a `Double` on either side, so we’re going to write a function that accepts two doubles and returns a double:

```swift
func **(lhs: Double, rhs: Double) -> Double {
    return pow(lhs, rhs)
}
```

As you can see, the function itself is a cinch thanks to `pow()` – we literally just pass on the numbers. Now this code should work in your playground:

```swift
let result = 2 ** 4
```

For more advanced uses, you also need to specify associativity and a precedence group, but what we have is fine to start with.

-->

::: details Similar solutions…

<!--
/example-code/language/what-is-the-ternary-operator">What is the ternary operator? 
/example-code/language/what-is-the-nil-coalescing-operator">What is the nil coalescing operator? 
/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject? 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a>
-->

:::

---

<TagLinks />