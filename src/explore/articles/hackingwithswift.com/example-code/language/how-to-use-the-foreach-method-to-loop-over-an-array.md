---
lang: ko-KR
title: "How to use the forEach method to loop over an array"
description: "Article(s) > How to use the forEach method to loop over an array"
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
      content: "Article(s) > How to use the forEach method to loop over an array"
    - property: og:description
      content: "How to use the forEach method to loop over an array"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-the-foreach-method-to-loop-over-an-array.html
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
  "title": "How to use the forEach method to loop over an array | Language - free Swift example code",
  "desc": "How to use the forEach method to loop over an array",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-the-foreach-method-to-loop-over-an-array",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
In Swift we normally loop over arrays like this:

```swift
let numbers = [1, 2, 3, 4, 5]

for number in numbers {
    print(number)
}
```

However, Swift provides us an alternative: a dedicated array method called `forEach()`, that loops over each item in the array and does something with it. For example, the above loop would be written like this:

```swift
numbers.forEach {
    print($0)
}
```

The difference is that `forEach()` can’t skip over any items – you can’t exit the loop part way, without processing the rest of the items. This helps people reading your code to figure out your intent: you want to act on all items, and won’t stop in the middle.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-create-views-in-a-loop-using-foreach">How to create views in a loop using ForEach 
/example-code/language/how-to-loop-over-non-nil-items-in-an-array">How to loop over non-nil items in an array 
/quick-start/swiftui/how-to-create-a-list-or-a-foreach-from-a-binding">How to create a List or a ForEach from a binding 
/quick-start/concurrency/how-to-loop-over-an-asyncsequence-using-for-await">How to loop over an AsyncSequence using for await 
/example-code/language/using-stride-to-loop-over-a-range-of-numbers">Using stride() to loop over a range of numbers</a>
-->

:::

---

<TagLinks />