---
lang: ko-KR
title: "How to run a case-insensitive search for one string inside another"
description: "Article(s) > How to run a case-insensitive search for one string inside another"
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
      content: "Article(s) > How to run a case-insensitive search for one string inside another"
    - property: og:description
      content: "How to run a case-insensitive search for one string inside another"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-run-a-case-insensitive-search-for-one-string-inside-another.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Strings - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/strings/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to run a case-insensitive search for one string inside another | Strings - free Swift example code",
  "desc": "How to run a case-insensitive search for one string inside another",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-run-a-case-insensitive-search-for-one-string-inside-another",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
You can search for one string inside another using the `range(of:)` method, like this:

```swift
let string = "The rain in Spain"
let range1 = string.range(of: "rain")
```

That returns an optional string index: if the word was found it will say where it was found, otherwise it will be nil.

However, `range(of:)` does a *case-sensitive* search by default, which means it will match “rain” but not “Rain” or “RAIN”. If you want a case-insensitive search you need to provide an extra parameter called `options`, passing it `.caseInsensitive`:

```swift
let range2 = string.range(of: "rain", options: .caseInsensitive)
```

That returns the same optional value depending on what was found, so you can wrap the whole thing in an `if let` to see whether a match was found:

```swift
if let range3 = string.range(of: "rain", options: .caseInsensitive) {
    // match
} else {
    // no match
}
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-add-search-tokens-to-a-search-field">How to add search tokens to a search field 
/example-code/system/how-to-convert-between-camel-case-and-snake-case-with-codable-and-keyencodingstrategy">How to convert between camel case and snake case with Codable and keyEncodingStrategy 
/quick-start/swiftui/how-to-add-a-search-bar-to-filter-your-data">How to add a search bar to filter your data 
/quick-start/swiftui/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture">How to force one gesture to recognize before another using highPriorityGesture() 
/example-code/system/how-to-make-one-operation-wait-for-another-to-complete-using-adddependency">How to make one operation wait for another to complete using addDependency()</a>
-->

:::

---

<TagLinks />