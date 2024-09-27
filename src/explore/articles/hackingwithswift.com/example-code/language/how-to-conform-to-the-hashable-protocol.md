---
lang: ko-KR
title: "How to conform to the Hashable protocol"
description: "Article(s) > How to conform to the Hashable protocol"
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
      content: "Article(s) > How to conform to the Hashable protocol"
    - property: og:description
      content: "How to conform to the Hashable protocol"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-conform-to-the-hashable-protocol.html
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
  "title": "How to conform to the Hashable protocol | Language - free Swift example code",
  "desc": "How to conform to the Hashable protocol",
  "link": "https://hackingwithswift.com/example-code/language/how-to-conform-to-the-hashable-protocol",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
In Swift, conforming to the `Hashable` protocol is often just as easy as adding `Hashable` to your conformance list. However, if you have custom requirements, or use properties that don’t all conform to `Hashable`, it takes a little more work.

Here’s an example struct we can work with:

```swift
struct iPad: Hashable {
    var serialNumber: String
    var capacity: Int
}
```

Because that conforms to the `Hashable` protocol and both its properties also conform to the `Hashable` protocol, Swift will generate a `hash(into:)` method automatically.

However, in this case we can see that `serialNumber` is enough to identify each iPad uniquely so hashing `capacity` isn’t needed. So, we can write our own implementation of `hash(into:)` that hashes just that one property:

```swift
func hash(into hasher: inout Hasher) {
    hasher.combine(serialNumber)
}
```

You can add more properties to your hash by calling `combine()` repeatedly, and the order in which you add properties affects the finished hash value.

Swift uses a random seed every time it hashes an object, which means the hash value for any object is effectively guaranteed to be different between runs of your app.

This in turn means that elements you add to a set or a dictionary are highly likely to have a different order each time you run your app.

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-conform-to-the-comparable-protocol">How to conform to the Comparable protocol 
/example-code/language/how-to-conform-to-the-equatable-protocol">How to conform to the Equatable protocol 
/quick-start/swiftui/how-to-fix-referencing-initializer-initwrappedvalue-on-observedobject-requires-that-sometype-conform-to-observableobject">How to fix “Referencing initializer 'init(wrappedValue:)' on 'ObservedObject' requires that ‘SomeType’ conform to 'ObservableObject'" 
/quick-start/swiftui/how-to-fix-initializer-init-rowcontent-requires-that-sometype-conform-to-identifiable">How to fix “Initializer 'init(_:rowContent:)' requires that ‘SomeType’ conform to 'Identifiable’” 
/example-code/language/how-to-constrain-a-protocol-associated-type">How to constrain a protocol associated type</a>
-->

:::

---

<TagLinks />