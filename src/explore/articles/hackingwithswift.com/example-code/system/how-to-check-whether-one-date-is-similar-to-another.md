---
lang: ko-KR
title: "How to check whether one date is similar to another"
description: "Article(s) > How to check whether one date is similar to another"
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
      content: "Article(s) > How to check whether one date is similar to another"
    - property: og:description
      content: "How to check whether one date is similar to another"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/system/how-to-check-whether-one-date-is-similar-to-another.html
date: 2022-03-23
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "System - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/system/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to check whether one date is similar to another | System - free Swift example code",
  "desc": "How to check whether one date is similar to another",
  "link": "https://hackingwithswift.com/example-code/system/how-to-check-whether-one-date-is-similar-to-another",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Apple’s `Calendar` object gives us lots of useful methods for evaluating dates in various ways. One of the most useful is the method `isDate(_:equalTo:toGranularity:)`, which lets us compare two dates at a specific level of granularity: do these two dates occur in the same minute? The same hour? Or day, week, year? 

As an example, here are two dates for us to work with:

```swift
let first = Date.now
let second = Date.now.addingTimeInterval(10000)
```

We can now check whether those two occur within the same day, like this:

```swift
let sameDay = Calendar.current.isDate(first, equalTo: second, toGranularity: .day)
```

If all you want to do is check whether a date points to some time during today, you should use `isDateInToday()` instead:

```swift
let isToday = Calendar.current.isDateInToday(first)
```

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-check-whether-a-date-is-inside-a-date-range">How to check whether a date is inside a date range 
/example-code/naturallanguage/how-to-find-similar-words-for-a-search-term">How to find similar words for a search term 
/example-code/language/how-to-check-whether-a-module-is-available-using-canimport">How to check whether a module is available using canImport() 
/example-code/system/how-to-show-a-relative-date-and-time-using-relativedatetimeformatter">How to show a relative date and time using RelativeDateTimeFormatter 
/quick-start/swiftui/how-to-create-a-date-picker-and-read-values-from-it">How to create a date picker and read values from it</a>
-->

:::

---

<TagLinks />