---
lang: ko-KR
title: "How to conform to the Comparable protocol"
description: "Article(s) > How to conform to the Comparable protocol"
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
      content: "Article(s) > How to conform to the Comparable protocol"
    - property: og:description
      content: "How to conform to the Comparable protocol"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-conform-to-the-comparable-protocol.html
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
  "title": "How to conform to the Comparable protocol | Language - free Swift example code",
  "desc": "How to conform to the Comparable protocol",
  "link": "https://hackingwithswift.com/example-code/language/how-to-conform-to-the-comparable-protocol",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
The `Comparable` protocol allows use to use the `<`, `>`, `<=`, and `>=` operators with conforming data types, which in turn means that Swift knows how to sort arrays of those types. Most of Swift’s built-in types support `Comparable` out of the box, but if you want your own type to conform to them then you need to implement `<` – from that Swift can provide default implementations of the other three operators.

The `<` function needs to accept two instances of your type, one of the left-hand side and one on the right, and return true if the left-hand object should be ordered before the right-hand object.

As an example, consider this simple `Person` struct:

```swift
struct Person {
    var name: String
}
```

That has one property called `name`, and we’re going to make `Person` conform to the `Comparable` protocol based on that property. This means writing a static method called `<` that takes two instances of `Person` and internally compares the `name` properties of each of them:

```swift
struct Person: Comparable {
    var name: String

    static func <(lhs: Person, rhs: Person) -> Bool {
        return lhs.name < rhs.name
    }
}
```

With that in place you can now use `<` to compare two instances of `Person` like this:

```swift
let taylor = Person(name: "Taylor Swift")
let justin = Person(name: "Justin Bieber")
print(taylor < justin)
```

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-conform-to-the-hashable-protocol">How to conform to the Hashable protocol 
/example-code/language/how-to-conform-to-the-equatable-protocol">How to conform to the Equatable protocol 
/quick-start/swiftui/how-to-fix-referencing-initializer-initwrappedvalue-on-observedobject-requires-that-sometype-conform-to-observableobject">How to fix “Referencing initializer 'init(wrappedValue:)' on 'ObservedObject' requires that ‘SomeType’ conform to 'ObservableObject'" 
/quick-start/swiftui/how-to-fix-initializer-init-rowcontent-requires-that-sometype-conform-to-identifiable">How to fix “Initializer 'init(_:rowContent:)' requires that ‘SomeType’ conform to 'Identifiable’” 
/example-code/language/how-to-constrain-a-protocol-associated-type">How to constrain a protocol associated type</a>
-->

:::

---

<TagLinks />