---
lang: ko-KR
title: "How to constrain a protocol associated type"
description: "Article(s) > How to constrain a protocol associated type"
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
      content: "Article(s) > How to constrain a protocol associated type"
    - property: og:description
      content: "How to constrain a protocol associated type"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-constrain-a-protocol-associated-type.html
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
  "title": "How to constrain a protocol associated type | Language - free Swift example code",
  "desc": "How to constrain a protocol associated type",
  "link": "https://hackingwithswift.com/example-code/language/how-to-constrain-a-protocol-associated-type",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p style="margin: 0; margin-bottom: 20px;"><a href="/about">Paul Hudson</a>    <i class="fab fa-twitter" aria-hidden="true" style="color: #4099ff"></i> <a href="https://twitter.com/twostraws" target="_blank">@twostraws</a>    <time itemprop="dateModified" datetime="2019-05-28T20:41:20+00:00">May 28th 2019</time><meta itemprop="datePublished" content="2019-05-28T20:41:20+00:00">

Protocol associated types let you add a huge amount of flexibility to your protocols, but sometimes you want a little *less* flexibility. For example, you might say that all types conforming to a protocol must specify the `id` of their object and also what type that ID must be:

```swift
protocol Identifiable1 {
    associatedtype ID
    var id: ID { get set }
}
```

With that code, `ID` could be anything – a `String`, an `Int`, a `UILabel`, and so on. However, you might find you need to apply some constraints to that type: perhaps you need to use it as a dictionary key (`Hashable`), or sort it in an array (`Comparable`).

To make this work, Swift lets us apply constraints to associated types: “it can be any type, as long as that type conforms to…”. For example, this forces `ID` to conform to `Hashable`:

```swift
protocol Identifiable2 {
    associatedtype ID: Hashable
    var id: ID { get set }
}
```

Because `Hashable` inherits from `Equatable` we can now be sure that any types used for `ID` can be compared using `==` and also used as keys in dictionaries.

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-fix-the-error-protocol-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements” 
/example-code/language/what-is-a-protocol-associated-type">What is a protocol associated type? 
/quick-start/swiftui/how-to-fix-protocol-view-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix “Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements” 
/example-code/language/how-to-add-associated-values-to-enums">How to add associated values to enums 
/quick-start/swiftui/how-to-fix-function-declares-an-opaque-return-type-but-has-no-return-statements-in-its-body-from-which-to-infer-an-underlying-ty">How to fix “Function declares an opaque return type, but has no return statements in its body from which to infer an underlying type”</a>
-->

:::

---

<TagLinks />