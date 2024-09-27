---
lang: ko-KR
title: "How to count element frequencies in an array"
description: "Article(s) > How to count element frequencies in an array"
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
      content: "Article(s) > How to count element frequencies in an array"
    - property: og:description
      content: "How to count element frequencies in an array"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-count-element-frequencies-in-an-array.html
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
  "title": "How to count element frequencies in an array | Language - free Swift example code",
  "desc": "How to count element frequencies in an array",
  "link": "https://hackingwithswift.com/example-code/language/how-to-count-element-frequencies-in-an-array",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
If you have an array containing various elements and you want to count how often each item appears, you can do so by combining the `map()` method with a `Dictionary` initializer.

First, create an array of items:

```swift
let items = ["a", "b", "a", "c"]
```

Second, convert that to an array of key-value pairs using tuples, where each value is the number 1:

```swift
let mappedItems = items.map { ($0, 1) }
```

Finally, create a `Dictionary` from that tuple array, asking it to add the 1s together every time it finds a duplicate key:

```swift
let counts = Dictionary(mappedItems, uniquingKeysWith: +)
```

That will create the dictionary `["b": 1, "a": 2, "c": 1]` because dictionaries are not stored in order – as you can see, it tells us that “a” appeared twice, while the other two appeared once.

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-find-the-index-of-the-first-matching-array-element">How to find the index of the first matching array element 
/example-code/language/how-to-find-the-first-matching-element-in-an-array">How to find the first matching element in an array 
/example-code/language/how-to-get-a-random-element-from-an-array-using-randomelement">How to get a random element from an array using randomElement() 
/example-code/language/how-to-count-matching-items-in-an-array">How to count matching items in an array 
/example-code/arrays/how-to-count-objects-in-a-set-using-nscountedset">How to count objects in a set using NSCountedSet</a>
-->

:::

---

<TagLinks />