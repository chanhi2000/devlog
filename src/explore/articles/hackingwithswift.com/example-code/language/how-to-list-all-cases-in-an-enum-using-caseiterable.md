---
lang: ko-KR
title: "How to list all cases in an enum using CaseIterable"
description: "Article(s) > How to list all cases in an enum using CaseIterable"
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
      content: "Article(s) > How to list all cases in an enum using CaseIterable"
    - property: og:description
      content: "How to list all cases in an enum using CaseIterable"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-list-all-cases-in-an-enum-using-caseiterable.html
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
  "title": "How to list all cases in an enum using CaseIterable | Language - free Swift example code",
  "desc": "How to list all cases in an enum using CaseIterable",
  "link": "https://hackingwithswift.com/example-code/language/how-to-list-all-cases-in-an-enum-using-caseiterable",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Swift has a `CaseIterable` protocol that automatically generates an array property of all cases in an enum. To enable it, all you need to do is make your enum conform to the `CaseIterable` protocol and at compile time Swift will automatically generate an `allCases` property that is an array of all your enum’s cases, in the order you defined them.

For example, this creates an enum of colors and asks Swift to automatically generate an `allCases` array for it:

```swift
enum Color: CaseIterable {
    case red, green, blue
}
```

You can then use that property as a regular array – it will be a `[Color]` given the code above, so we could print each case like this:

```swift
for color in Color.allCases {
    print("My favorite color is \(color).")
}
```

This automatic synthesis of `allCases` will only take place for enums that do not have associated values. Adding those automatically wouldn’t make sense, however if you want you can add it yourself:

```swift
enum Car: CaseIterable {
    static var allCases: [Car] {
        return [.ford, .toyota, .jaguar, .bmw, .porsche(convertible: false), .porsche(convertible: true)]
    }

    case ford, toyota, jaguar, bmw
    case porsche(convertible: Bool)
}
```

Swift can’t synthesize an `allCases` property if any enum cases are marked unavailable. So, if you need `allCases` then you’ll need to add it yourself, like this:

```swift
enum Direction: CaseIterable {
    static var allCases: [Direction] {
        return [.north, .south, .east, .west]
    }

    case north, south, east, west

    @available(*, unavailable)
    case all
}
```

**Note:** You must add `CaseIterable` to the original declaration of your enum rather than an extension in order for the `allCases` array to be synthesized – you can’t use extensions to retroactively make existing enums conform to the protocol.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/language/what-is-an-enum">What is an enum? 
/example-code/language/check-whether-all-items-in-an-array-match-a-condition">Check whether all items in an array match a condition 
/example-code/language/remove-all-instances-of-an-object-from-an-array">Remove all instances of an object from an array 
/example-code/language/checking-all-array-elements-match-a-condition-allsatisfy">Checking all array elements match a condition: allSatisfy()</a>
-->

:::

---

<TagLinks />