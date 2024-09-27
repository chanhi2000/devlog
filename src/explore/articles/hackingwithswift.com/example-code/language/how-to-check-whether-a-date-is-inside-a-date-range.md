---
lang: ko-KR
title: "How to check whether a date is inside a date range"
description: "Article(s) > How to check whether a date is inside a date range"
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
      content: "Article(s) > How to check whether a date is inside a date range"
    - property: og:description
      content: "How to check whether a date is inside a date range"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-check-whether-a-date-is-inside-a-date-range.html
date: 2022-03-23
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
  "title": "How to check whether a date is inside a date range | Language - free Swift example code",
  "desc": "How to check whether a date is inside a date range",
  "link": "https://hackingwithswift.com/example-code/language/how-to-check-whether-a-date-is-inside-a-date-range",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Everyone knows you can create ranges from two integers such as `1...5`, but few people realize the same applies to dates. This means you can create a date range using the same closed-range operator (`...`) and half-open range operator (`..<`) you already know, allowing you to check whether one date lies inside a range.

For example, we could create three `Date` objects like this:

```swift
let now = Date.now
let soon = Date.now.addingTimeInterval(5000)
let later = Date.now.addingTimeInterval(10000)
```

We can then compare `now` and `later` into a single range like this:

```swift
let range = now...later
```

Finally, we can check whether that range contains the `soon` date using the `contains()` method of ranges, like this:

```swift
if range.contains(soon) {
    print("The date is inside the range")
} else {
    print("The date is outside the range")
}
```

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-check-whether-an-integer-lies-inside-a-range">How to check whether an integer lies inside a range 
/example-code/system/how-to-check-whether-one-date-is-similar-to-another">How to check whether one date is similar to another 
/example-code/language/check-whether-all-items-in-an-array-match-a-condition">Check whether all items in an array match a condition 
/example-code/strings/how-to-check-whether-a-string-contains-any-words-from-an-array">How to check whether a string contains any words from an array 
/example-code/uikit/how-to-check-whether-an-iphone-or-ipad-is-upside-down-or-face-up">How to check whether an iPhone or iPad is upside down or face up</a>
-->

:::

---

<TagLinks />