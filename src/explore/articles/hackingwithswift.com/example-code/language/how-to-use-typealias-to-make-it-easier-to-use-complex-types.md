---
lang: ko-KR
title: "How to use typealias to make it easier to use complex types"
description: "Article(s) > How to use typealias to make it easier to use complex types"
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
      content: "Article(s) > How to use typealias to make it easier to use complex types"
    - property: og:description
      content: "How to use typealias to make it easier to use complex types"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-typealias-to-make-it-easier-to-use-complex-types.html
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
  "title": "How to use typealias to make it easier to use complex types | Language - free Swift example code",
  "desc": "How to use typealias to make it easier to use complex types",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-typealias-to-make-it-easier-to-use-complex-types",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Although it’s generally a good idea to use structs or classes for defining your types, sometimes you’ll find yourself using tuples. If this happens to you, it’s quite tedious having to type the full definition of your tuple whenever you want to use it, so the `typealias` lets you create a specific name for it:

```swift
typealias Name = (first: String, last: String)
```

Type aliases are also useful when you might want to change the underlying type used for data. For example, you might store a value as a `Float` today, but you want to leave open the option to switch to a `Double` later on. In this situation, you’d use `typealias` like this:

```swift
typealias MyValue = Float
```

You can then go ahead and use `MyValue` everywhere in your code, and if you ever choose to change to `Double` you can just change the type alias and all your code will update.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/language/how-to-fix-the-error-expression-was-too-complex-to-be-solved-in-reasonable-time">How to fix the error “Expression was too complex to be solved in reasonable time” 
/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject? 
/example-code/language/how-to-safely-use-reference-types-inside-value-types-with-isknownuniquelyreferenced">How to safely use reference types inside value types with isKnownUniquelyReferenced() 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a>
-->

:::

---

<TagLinks />