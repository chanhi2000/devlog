---
lang: ko-KR
title: "How to compare two tuples for equality"
description: "Article(s) > How to compare two tuples for equality"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to compare two tuples for equality"
    - property: og:description
      content: "How to compare two tuples for equality"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-compare-two-tuples-for-equality.html
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
  "title": "How to compare two tuples for equality | Language - free Swift example code",
  "desc": "How to compare two tuples for equality",
  "link": "https://hackingwithswift.com/example-code/language/how-to-compare-two-tuples-for-equality",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
Swift 2.2 introduced the ability to compare two tuples up to arity six, which means the tuples can contain no more than six elements. To compare tuples, just use the `==` operator, like this:

```swift
let singer = ("Taylor", "Swift")
let alien = ("Justin", "Bieber")

if singer == alien {
    print("Matching tuples!")
} else {
    print("Non-matching tuples!")
}
```

**Warning:** if you use labels, these are not evaluated when comparing two tuples. So, the code below will print "Matching tuples!" even though the labels are different:

```swift
let taylor = (first: "Taylor", last: "Swift")
let bird = (name: "Taylor", type: "Swift")

if taylor == bird {
    print("Matching tuples!")
} else {
    print("Non-matching tuples!")
}
```

-->

::: details Similar solutions…

<!--
/example-code/core-graphics/how-to-compare-two-cgrects-with-equalto">How to compare two CGRects with equalTo() 
/example-code/language/how-to-compare-dates">How to compare dates 
/quick-start/swiftui/two-way-bindings-in-swiftui">Two-way bindings in SwiftUI 
/example-code/language/how-to-use-the-zip-function-to-join-two-arrays">How to use the zip() function to join two arrays 
/example-code/core-graphics/how-to-calculate-the-distance-between-two-cgpoints">How to calculate the distance between two CGPoints</a>
-->

:::

---

<TagLinks />