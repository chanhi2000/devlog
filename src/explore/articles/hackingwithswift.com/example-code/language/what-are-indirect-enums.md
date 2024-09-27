---
lang: ko-KR
title: "What are indirect enums?"
description: "Article(s) > What are indirect enums?"
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
      content: "Article(s) > What are indirect enums?"
    - property: og:description
      content: "What are indirect enums?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-are-indirect-enums.html
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
  "title": "What are indirect enums? | Language - free Swift example code",
  "desc": "What are indirect enums?",
  "link": "https://hackingwithswift.com/example-code/language/what-are-indirect-enums",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Indirect enums are enums that need to reference themselves somehow, and are called “indirect” because they modify the way Swift stores them so they can grow to any size. Without the indirection, any enum that referenced itself could potentially become infinitely sized: it could contain itself again and again, which wouldn’t be possible.

As an example, here’s an indirect enum that defines a node in a linked list:

```swift
indirect enum LinkedListItem<T> {
    case endPoint(value: T)
    case linkNode(value: T, next: LinkedListItem)
}
```

Because that references itself – because one of the associated values is itself a linked list item – we need to mark the enum as being indirect.

Apart from the special way they store their values internally, indirect enums work identically to regular enums. So, we could make a linked list using that enum and loop over it, like this:

```swift
let third = LinkedListItem.endPoint(value: "Third")
let second = LinkedListItem.linkNode(value: "Second", next: third)
let first = LinkedListItem.linkNode(value: "First", next: second)

var currentNode = first

listLoop: while true {
    switch currentNode {
    case .endPoint(let value):
        print(value)
        break listLoop
    case .linkNode(let value, let next):
        print(value)
        currentNode = next
    }
}
```

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-add-associated-values-to-enums">How to add associated values to enums 
/example-code/language/how-to-add-raw-values-to-enums">How to add raw values to enums 
/example-code/language/how-to-list-all-cases-in-an-enum-using-caseiterable">How to list all cases in an enum using CaseIterable 
/example-code/language/whats-the-difference-between-any-and-anyobject">What’s the difference between Any and AnyObject? 
/example-code/language/how-to-create-a-custom-optionset">How to create a custom OptionSet</a>
-->

:::

---

<TagLinks />