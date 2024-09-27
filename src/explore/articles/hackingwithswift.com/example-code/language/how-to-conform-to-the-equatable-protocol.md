---
lang: ko-KR
title: "How to conform to the Equatable protocol"
description: "Article(s) > How to conform to the Equatable protocol"
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
  - ios-13.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to conform to the Equatable protocol"
    - property: og:description
      content: "How to conform to the Equatable protocol"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-conform-to-the-equatable-protocol.html
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
  "title": "How to conform to the Equatable protocol | Language - free Swift example code",
  "desc": "How to conform to the Equatable protocol",
  "link": "https://hackingwithswift.com/example-code/language/how-to-conform-to-the-equatable-protocol",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
The `Equatable` protocol is what allows two objects to be compared using `==`, and it’s surprisingly easy to implement because Swift does most of the work for you by default.

First, here’s a struct we can work with:

```swift
struct Person {
    var name: String
    var age: String
}
```

To make that `Equatable` you need to add the `Equatable` conformance like this:

```swift
struct Person: Equatable {
    var name: String
    var age: String
}
```

If you don’t want to check all properties for equality, or if any of your properties are not also `Equatable`, then you need to write your own `==` function like this:

```swift
static func ==(lhs: Person, rhs: Person) -> Bool {
    return lhs.name == rhs.name && lhs.age == rhs.age
}
```

Put that *inside* the `Person` struct. Because that’s your own function you can make it do any comparisons you like. Swift’s default `Equatable` implementation will check all properties for equality, so if you have one property that is guaranteed to be unique adding your own `Equatable` implementation is a good idea.

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-conform-to-the-hashable-protocol">How to conform to the Hashable protocol 
/example-code/language/how-to-conform-to-the-comparable-protocol">How to conform to the Comparable protocol 
/quick-start/swiftui/how-to-fix-referencing-initializer-initwrappedvalue-on-observedobject-requires-that-sometype-conform-to-observableobject">How to fix “Referencing initializer 'init(wrappedValue:)' on 'ObservedObject' requires that ‘SomeType’ conform to 'ObservableObject'" 
/quick-start/swiftui/how-to-fix-initializer-init-rowcontent-requires-that-sometype-conform-to-identifiable">How to fix “Initializer 'init(_:rowContent:)' requires that ‘SomeType’ conform to 'Identifiable’” 
/example-code/language/how-to-constrain-a-protocol-associated-type">How to constrain a protocol associated type</a>
-->

:::

---

<TagLinks />