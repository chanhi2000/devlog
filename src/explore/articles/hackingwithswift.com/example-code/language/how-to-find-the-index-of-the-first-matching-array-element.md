---
lang: ko-KR
title: "How to find the index of the first matching array element"
description: "Article(s) > How to find the index of the first matching array element"
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
      content: "Article(s) > How to find the index of the first matching array element"
    - property: og:description
      content: "How to find the index of the first matching array element"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-find-the-index-of-the-first-matching-array-element.html
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
  "title": "How to find the index of the first matching array element | Language - free Swift example code",
  "desc": "How to find the index of the first matching array element",
  "link": "https://hackingwithswift.com/example-code/language/how-to-find-the-index-of-the-first-matching-array-element",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
If you have an array of items and want to find the first item that matches a specific condition, you should use the `index(where:)` method. This accepts a closure of code to use as a test, applies that test to all elements in an array, then returns the index of the first item to match it. If no item matches you’ll get back nil, so be prepared to unwrap the optional you get sent back.

For example, if we had an array of numbers:

```swift
let numbers = [2, 4, 6, 8, 9, 10]
```

We could find the first odd number like this:

```swift
let firstOdd = numbers.index { $0 % 2 == 1 }
```

That will send back 4 as an optional integer, because the first odd number (9) is at index four.

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-find-the-first-matching-element-in-an-array">How to find the first matching element in an array 
/example-code/language/how-to-count-element-frequencies-in-an-array">How to count element frequencies in an array 
/example-code/language/how-to-get-a-random-element-from-an-array-using-randomelement">How to get a random element from an array using randomElement() 
/example-code/language/how-to-count-matching-items-in-an-array">How to count matching items in an array 
/example-code/language/how-to-remove-the-first-or-last-item-from-an-array">How to remove the first or last item from an array</a>
-->

:::

---

<TagLinks />