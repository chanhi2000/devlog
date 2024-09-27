---
lang: ko-KR
title: "How to convert dates and times to a string using DateFormatter"
description: "Article(s) > How to convert dates and times to a string using DateFormatter"
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
  - ios-2.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to convert dates and times to a string using DateFormatter"
    - property: og:description
      content: "How to convert dates and times to a string using DateFormatter"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/system/how-to-convert-dates-and-times-to-a-string-using-dateformatter.html
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
  "title": "How to convert dates and times to a string using DateFormatter | System - free Swift example code",
  "desc": "How to convert dates and times to a string using DateFormatter",
  "link": "https://hackingwithswift.com/example-code/system/how-to-convert-dates-and-times-to-a-string-using-dateformatter",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
If you want to get a string from a `Date`, Apple’s `DateFormatter` class has everything you need: you can get short dates, long dates, dates with times, and can even go the opposite way to give you a `Date` from a string.

There are four primary ways you’re going to use it:

1. Converting a `Date` instance to a string using one of the built-in date formats.
<li>Converting a `Date` instance to a string using one of the built-in *time* formats.
<li>Converting a `Date` instance to a string using a completely custom format.
<li>Converting a string instance to a `Date`.

Below are examples of each to get you started.

First, this converts a `Date` to a short date string using `dateStyle`:

```swift
let today = Date.now
let formatter1 = DateFormatter()
formatter1.dateStyle = .short
print(formatter1.string(from: today))
```

That will print something like “12/31/2019” depending on the user’s locale.

Second, this converts the same date to a medium time string using `timeStyle`:

```swift
let formatter2 = DateFormatter()
formatter2.timeStyle = .medium
print(formatter2.string(from: today))
```

That will print something like “20:27:32” or “8:27:32pm” depending on the user’s locale.

Third, this converts the same date to a date *and* time string using a custom date format:

```swift
let formatter3 = DateFormatter()
formatter3.dateFormat = "HH:mm E, d MMM y"
print(formatter3.string(from: today))
```

That will print something like “20:32 Wed, 30 Oct 2019”.

Finally, this attempts to convert a string to a date

```swift
let string = "20:32 Wed, 30 Oct 2019"
let formatter4 = DateFormatter()
formatter4.dateFormat = "HH:mm E, d MMM y"
print(formatter4.date(from: string) ?? "Unknown date")
```

`date(from:)` returns an optional `Date` because it might be given a string containing an invalid value, so that code uses nil coalescing to make sure there’s a default value printed.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource 
/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a>
-->

:::

---

<TagLinks />