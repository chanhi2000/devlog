---
lang: ko-KR
title: "What are protocol extensions?"
description: "Article(s) > What are protocol extensions?"
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
      content: "Article(s) > What are protocol extensions?"
    - property: og:description
      content: "What are protocol extensions?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-are-protocol-extensions.html
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
  "title": "What are protocol extensions? | Language - free Swift example code",
  "desc": "What are protocol extensions?",
  "link": "https://hackingwithswift.com/example-code/language/what-are-protocol-extensions",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
This might sound obvious, but protocol extensions are extensions to protocols as opposed to concrete types. For example, the `BinaryInteger` protocol is adopted by all integer types: `Int`, `Int64`, `UInt8`, and so on. If you wanted to add a method to all of those at once, you’d use a protocol extension to modify `BinaryInteger`, like this:

```swift
extension BinaryInteger {
    func cubed() -> Self {
        return self * self * self
    }
}
```

That `cubed()` method will now existing on all integer types, so you can write code like this:

```swift
let i: Int = 5
let j: UInt8 = 7
print(i.cubed())
print(j.cubed())
```

Note: `Self` with a capital S refers to whatever type conforms to the protocol, e.g. `Int` or `UInt32`, whereas `self` with a lowercase S refers to whatever the current value of the type is, e.g. 5 or 99.

-->

::: details Similar solutions…

<!--
/example-code/language/what-is-protocol-oriented-programming">What is protocol-oriented programming? 
/example-code/language/what-is-a-protocol-associated-type">What is a protocol associated type? 
/example-code/language/whats-the-difference-between-a-protocol-and-a-class">What’s the difference between a protocol and a class? 
/example-code/language/how-to-fix-the-error-protocol-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements” 
/example-code/language/what-is-a-protocol">What is a protocol?</a>
-->

:::

---

<TagLinks />