---
lang: ko-KR
title: "What is a protocol associated type?"
description: "Article(s) > What is a protocol associated type?"
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
      content: "Article(s) > What is a protocol associated type?"
    - property: og:description
      content: "What is a protocol associated type?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-a-protocol-associated-type.html
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
  "title": "What is a protocol associated type? | Language - free Swift example code",
  "desc": "What is a protocol associated type?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-a-protocol-associated-type",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
Associated types are a powerful way of making protocols generic, but they can be a bit confusing at first. In essence, they mark holes in protocols that must be filled by whatever types conform to those protocols.

Let’s start with a simple example: an `ItemStoring` protocol that can store items in an array. What *type* those items are depends on whatever conforms to the protocol, but we can still use them inside the protocol and any extensions.

Here’s the basic protocol:

```swift
protocol ItemStoring {
    associatedtype DataType

    var items: [DataType] { get set}
    mutating func add(item: DataType)
}
```

As you can see, it requires that conforming types provide an `items` array that holds an array of whatever is used to fill the `DataType` hole, and also a mutating method to add items of that type.

That mutating method is probably going to be the same for all conforming types, so we can write a protocol extension that provides a default implementation:

```swift
extension ItemStoring {
    mutating func add(item: DataType) {
        items.append(item)
    }
}
```

Finally we can create a `NameDatabase` struct that conforms to the `ItemStoring` protocol like this:

```swift
struct NameDatabase: ItemStoring {
    var items = [String]()
}
```

Swift is smart enough to realize that `String` is being used to fill the hole in the associated type, because the `items` array must be whatever `DataType` is.

That’s all the code written, so you can go ahead and use `NameDatabase`:

```swift
var names = NameDatabase()
names.add(item: "James")
names.add(item: "Jess")
```

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-fix-the-error-protocol-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements” 
/example-code/language/how-to-constrain-a-protocol-associated-type">How to constrain a protocol associated type 
/quick-start/swiftui/how-to-fix-protocol-view-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix “Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements” 
/example-code/language/how-to-add-associated-values-to-enums">How to add associated values to enums 
/quick-start/swiftui/how-to-fix-function-declares-an-opaque-return-type-but-has-no-return-statements-in-its-body-from-which-to-infer-an-underlying-ty">How to fix “Function declares an opaque return type, but has no return statements in its body from which to infer an underlying type”</a>
-->

:::

---

<TagLinks />