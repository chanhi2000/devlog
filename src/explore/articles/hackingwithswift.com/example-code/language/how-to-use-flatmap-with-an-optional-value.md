---
lang: ko-KR
title: "How to use flatMap() with an optional value"
description: "Article(s) > How to use flatMap() with an optional value"
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
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to use flatMap() with an optional value"
    - property: og:description
      content: "How to use flatMap() with an optional value"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-flatmap-with-an-optional-value.html
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
  "title": "How to use flatMap() with an optional value | Language - free Swift example code",
  "desc": "How to use flatMap() with an optional value",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-flatmap-with-an-optional-value",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 

The `flatMap()` method of optionals allows you to transform the optional if it has a value, or do nothing if it is empty. This makes for shorter and more expressive code than doing a regular unwrap, and doesn’t require you to change your data type.

Using `flatMap()` with optionals is similar to using `map()`, with one important difference: if your transformation closure returns an optional, `flatMap()` will combine that optional with the existing optional, whereas `map()` will keep them both.

Here’s a practical example so you can see the difference:

```swift
let stringNumber: String? = "5"
let intNumber = stringNumber.map { Int($0) }
```

When that code runs, `intNumber` will be an `Int??` – an optional optional integer. This is because we already have optionality from `stringNumber`, and the `Int` initializer from a string also returns an optional, so `map()` just puts them together.

In comparison, `flatMap()` acts differently:

```swift
let flatMapNumber = stringNumber.flatMap { Int($0) }
```

That will return a regular `Int?`, meaning that either the whole thing exists or nothing exists – it’s easier to work with.

-->

::: details Similar solutions…

<!--
/example-code/language/optional-vs-implicitly-unwrapped-optional-whats-the-difference">Optional vs implicitly unwrapped optional: what’s the difference? 
/example-code/language/how-to-use-map-with-an-optional-value">How to use map() with an optional value 
/example-code/language/what-is-an-optional-value-in-swift">What is an optional value in Swift? 
/example-code/language/what-is-a-monad">What is a monad? 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a>
-->

:::

---

<TagLinks />