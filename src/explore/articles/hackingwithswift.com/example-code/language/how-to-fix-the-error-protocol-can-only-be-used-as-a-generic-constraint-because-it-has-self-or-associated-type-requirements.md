---
lang: ko-KR
title: "How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements”"
description: "Article(s) > How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements”"
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
      content: "Article(s) > How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements”"
    - property: og:description
      content: "How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements”"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-fix-the-error-protocol-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements.html
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
  "title": "How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements” | Language - free Swift example code",
  "desc": "How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements”",
  "link": "https://hackingwithswift.com/example-code/language/how-to-fix-the-error-protocol-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Protocols with associated types are a powerful, if somewhat treacherous, feature of Swift. Sometimes it’s fair to say that the only winning move is not to play – i.e., to avoid them entirely – but if that isn’t the case you are sometimes likely to find yourself facing a difficult error: “protocol can only be used as a generic constraint because it has Self or associated type requirements.”

As an example, here’s a protocol with an associated type:

```swift
protocol Identifiable {
    associatedtype ID
    var id: ID { get set }
}
```

So, whatever type wants to conform to `Identifiable` must state which type they use to identify themselves. We could create two instances of such types like this:

```swift
struct Person: Identifiable {
    var id: String
}

struct Website: Identifiable {
    var id: URL
}
```

That is, people identify themselves using a `String`, and websites use a `URL`. So far, so easy. However, if you want to write a function using `Identifiable` as parameters you’ll hit a problem. For example, you might try to write a function that compares two instances of `Identifiable` like this:

```swift
func compareThing1(_ thing1: Identifiable, against thing2: Identifiable) -> Bool {
    return true
}
```

That will issue the error “protocol 'Identifiable' can only be used as a generic constraint because it has Self or associated type requirements.”

The reason for the error is simple enough: although `thing1` and `thing2` being passed into the function both conform to `Identifiable` that doesn’t make them usable in the same way – the `id` of a person and the `id` of a website are completely different types, so there’s no meaningful way you can use them together.

As the error says, this protocol can be used only as a generic constraint. That’s actually pointing us to the solution here: if we use `Identifiable` as a generic constraint then we can tell Swift not only that `thing1` and `thing2` conform to the protocol but also that they are actually the same type.

```swift
func compareThing1<T: Identifiable>(_ thing1: T, against thing2: T) -> Bool {
    return true
}
```

That code fixes the problem, because Swift has enough information to know how you plan to use `thing1` and `thing2`.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-fix-protocol-view-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix “Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements” 
/example-code/xcode/how-to-fix-the-error-view-controller-is-unreachable-because-it-has-no-entry-points-and-no-identifier-for-runtime-access">How to fix the error “View controller is unreachable because it has no entry points and no identifier for runtime access” 
/example-code/language/what-is-a-protocol-associated-type">What is a protocol associated type? 
/example-code/language/self-vs-self-whats-the-difference">Self vs self - what's the difference? 
/example-code/language/how-to-constrain-a-protocol-associated-type">How to constrain a protocol associated type</a>
-->

:::

---

<TagLinks />