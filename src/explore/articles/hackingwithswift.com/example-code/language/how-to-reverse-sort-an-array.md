---
lang: ko-KR
title: "How to reverse sort an array"
description: "Article(s) > How to reverse sort an array"
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
      content: "Article(s) > How to reverse sort an array"
    - property: og:description
      content: "How to reverse sort an array"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-reverse-sort-an-array.html
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
  "title": "How to reverse sort an array | Language - free Swift example code",
  "desc": "How to reverse sort an array",
  "link": "https://hackingwithswift.com/example-code/language/how-to-reverse-sort-an-array",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Regular sorting on comparable data is as easy as calling the `sort()` method, but if you want a *reverse* sort – e.g. highest to lowest numbers, or Z-A alphabetically – there are two options.

The first is to run a regular sort, reverse that sort, then convert the result to an array. For example:

```swift
let numbers = [100, 5, 53, 98, 29]
let reversed1 = Array(numbers.sorted().reversed())
```

The second option is to provide a custom closure to the `sorted()` method that sorts the opposite way to the default, like this:

```swift
let reversed2 = numbers.sorted { $0 > $1 }
```

Both of those will result in the array 100, 98, 53, 29, 5.

-->

::: details Similar solutions…

<!--
/example-code/arrays/how-to-sort-an-array-using-sort">How to sort an array using sort() 
/example-code/arrays/how-to-loop-through-an-array-in-reverse">How to loop through an array in reverse 
/example-code/language/how-to-sort-the-keys-of-your-json-using-codable">How to sort the keys of your JSON using Codable 
/example-code/strings/how-to-reverse-a-string-using-reversed">How to reverse a string using reversed() 
/example-code/language/how-to-convert-a-multidimensional-array-to-a-single-dimensional-array">How to convert a multidimensional array to a single-dimensional array</a>
-->

:::

---

<TagLinks />