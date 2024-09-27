---
lang: ko-KR
title: "How to format dates with an ordinal suffix using NumberFormatter's ordinalStyle"
description: "Article(s) > How to format dates with an ordinal suffix using NumberFormatter's ordinalStyle"
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
  - ios-9.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to format dates with an ordinal suffix using NumberFormatter's ordinalStyle"
    - property: og:description
      content: "How to format dates with an ordinal suffix using NumberFormatter's ordinalStyle"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-format-dates-with-an-ordinal-suffix-using-numberformatters-ordinalstyle.html
date: 2018-03-28
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
  "title": "How to format dates with an ordinal suffix using NumberFormatter's ordinalStyle | System - free Swift example code",
  "desc": "How to format dates with an ordinal suffix using NumberFormatter's ordinalStyle",
  "link": "https://hackingwithswift.com/example-code/how-to-format-dates-with-an-ordinal-suffix-using-numberformatters-ordinalstyle",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!-- 
As of iOS 9.0, Apple introduced a simple way to make ordinal style numbers, which is a fancy way of saying 1st, 2nd, 3rd or 100th – the kind of numbers you normally write for dates, for example. This uses the `NumberFormatterStyle.ordinal` style of writing numbers with `NumberFormatter`, like this:

```swift
let formatter = NumberFormatter()
formatter.numberStyle = .ordinal
let first = formatter.string(from: 1)
let second = formatter.string(from: 2)
let tenth = formatter.string(from: 10)
let oneThousandAndFirst = formatter.string(from: 1001)
```

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-spell-out-numbers-using-numberformatters-spellout-style">How to spell out numbers using NumberFormatter's spellOut style 
/quick-start/swiftui/how-to-format-dates-inside-text-views">How to format dates inside text views 
/example-code/system/how-to-convert-dates-and-times-to-a-string-using-dateformatter">How to convert dates and times to a string using DateFormatter 
/quick-start/swiftui/how-to-format-a-textfield-for-numbers">How to format a TextField for numbers 
/quick-start/swiftui/how-to-let-the-user-select-multiple-dates">How to let the user select multiple dates</a>
-->

:::

---

<TagLinks />