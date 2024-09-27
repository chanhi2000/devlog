---
lang: ko-KR
title: "How to transform a dictionary using mapValues()"
description: "Article(s) > How to transform a dictionary using mapValues()"
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
      content: "Article(s) > How to transform a dictionary using mapValues()"
    - property: og:description
      content: "How to transform a dictionary using mapValues()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-transform-a-dictionary-using-mapvalues.html
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
  "title": "How to transform a dictionary using mapValues() | Language - free Swift example code",
  "desc": "How to transform a dictionary using mapValues()",
  "link": "https://hackingwithswift.com/example-code/language/how-to-transform-a-dictionary-using-mapvalues",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Although dictionaries have a general `map()` method, they also have a specialized form of `map()` called `mapValues()` – it transforms just the *values* of the dictionary, leaving the keys untouched.

This extra method is useful because dictionaries can’t have duplicate keys, but if you’re only transforming the *values* from a dictionary then this is not a problem.

Let’s try it out on a dictionary containing the height in centimeters of various people:

```swift
let peopleMetric = ["Taylor": 178.0, "Justin": 175.0, "Ed": 173.0]
```

If we want to convert those heights to inches without changing the keys, we can use `mapValues()` like this:

```swift
let peopleImperial = peopleMetric.mapValues { $0 / 2.54 }
```

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-use-map-to-transform-an-array">How to use map() to transform an array 
/example-code/language/how-to-use-compactmap-to-transform-an-array">How to use compactMap() to transform an array 
/example-code/uikit/showing-dictionary-definitions-using-uireferencelibraryviewcontroller">Showing dictionary definitions using UIReferenceLibraryViewController 
/example-code/language/what-is-a-dictionary">What is a dictionary? 
/example-code/language/how-to-specify-default-values-for-dictionary-keys">How to specify default values for dictionary keys</a>
-->

:::

---

<TagLinks />