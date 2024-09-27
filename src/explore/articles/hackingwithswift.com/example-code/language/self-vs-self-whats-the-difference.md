---
lang: ko-KR
title: "Self vs self - what's the difference?"
description: "Article(s) > Self vs self - what's the difference?"
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
      content: "Article(s) > Self vs self - what's the difference?"
    - property: og:description
      content: "Self vs self - what's the difference?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/self-vs-self-whats-the-difference.html
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
  "title": "Self vs self - what's the difference? | Language - free Swift example code",
  "desc": "Self vs self - what's the difference?",
  "link": "https://hackingwithswift.com/example-code/language/self-vs-self-whats-the-difference",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
When you’re writing protocols and protocol extensions, there’s a difference between `Self` (capital S) and `self` (lowercase S). When used with a capital S, `Self` refers to the type that conform to the protocol, e.g. `String` or `Int`. When used with a lowercase S, `self` refers to the value inside that type, e.g. “hello” or 556.

As an example, consider this extension on `BinaryInteger`:

```swift
extension BinaryInteger {
    func squared() -> Self {
        return self * self
    }
}
```

Remember, `Self` with a capital S refers to whatever type is conforming to the protocol. In the example above, `Int` conforms to `BinaryInteger`, so when called on `Int` the method returns an `Int`.

On the other hand, `self` with a *lowercase* S refers to whatever value the type holds. If the example above were called on an `Int` storing the value 5 it would effectively be `5 * 5`.

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-fix-the-error-protocol-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements” 
/quick-start/swiftui/how-to-fix-protocol-view-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix “Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements” 
/quick-start/swiftui/how-to-fix-cannot-assign-to-property-self-is-immutable">How to fix “Cannot assign to property: 'self' is immutable” 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/language/whats-the-difference-between-init-and-init">What’s the difference between init?() and init()?</a>
-->

:::

---

<TagLinks />