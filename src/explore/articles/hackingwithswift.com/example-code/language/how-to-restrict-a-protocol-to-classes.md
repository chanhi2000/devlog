---
lang: ko-KR
title: "How to restrict a protocol to classes"
description: "Article(s) > How to restrict a protocol to classes"
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
      content: "Article(s) > How to restrict a protocol to classes"
    - property: og:description
      content: "How to restrict a protocol to classes"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-restrict-a-protocol-to-classes.html
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
  "title": "How to restrict a protocol to classes | Language - free Swift example code",
  "desc": "How to restrict a protocol to classes",
  "link": "https://hackingwithswift.com/example-code/language/how-to-restrict-a-protocol-to-classes",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
There are some occasions when your protocol relies on reference semantics to work, which in practice means it can be adopted only by classes. For example, you might want to use the identity operator (`===`) to compare two instances of a conforming type, or you might want to change properties inside the type without relying on mutating methods.

To restrict your protocol in this way, make it inherit from `AnyObject` like this:

```swift
protocol Authenticatable: AnyObject {
    func authenticate() -> Bool
}
```

Note: Some older Swift code uses `class` for this restriction, but `AnyObject` is correct for modern Swift.

-->

::: details Similar solutions…

<!--
/quick-start/concurrency/whats-the-difference-between-actors-classes-and-structs">What’s the difference between actors, classes, and structs? 
/example-code/uikit/what-are-size-classes">What are size classes? 
/quick-start/swiftui/how-to-create-different-layouts-using-size-classes">How to create different layouts using size classes 
/example-code/language/what-is-protocol-oriented-programming">What is protocol-oriented programming? 
/example-code/language/what-is-a-protocol-associated-type">What is a protocol associated type?</a>
-->

:::

---

<TagLinks />