---
lang: ko-KR
title: "How to read a single character from a string"
description: "Article(s) > How to read a single character from a string"
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
      content: "Article(s) > How to read a single character from a string"
    - property: og:description
      content: "How to read a single character from a string"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-read-a-single-character-from-a-string.html
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
  "title": "How to read a single character from a string | Strings - free Swift example code",
  "desc": "How to read a single character from a string",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-read-a-single-character-from-a-string",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Swift’s strings are stored in a specific way that stops you from indexing into then easily. In fact, reading one letter from part-way through the string means starting at the beginning of the string and counting through letters until you find the one you want, so if you try reading *all* the characters in the string this way you could accidentally create extremely slow code.

However, if you only need to read one or two letters, here’s a simple extension on `String` that will help:

```swift
extension String {
    subscript(i: Int) -> String {
        return String(self[index(startIndex, offsetBy: i)])
    }
}
```

With that place in place, you can write `myString[15]` to read the 16th letter.

-->

::: details Similar solutions…

<!--
/example-code/vision/how-to-use-vnrecognizetextrequests-optical-character-recognition-to-detect-text-in-an-image">How to use VNRecognizeTextRequest’s optical character recognition to detect text in an image 
/example-code/arrays/how-to-join-an-array-of-strings-into-a-single-string">How to join an array of strings into a single string 
/example-code/language/how-to-use-reduce-to-condense-an-array-into-a-single-value">How to use reduce() to condense an array into a single value 
/example-code/language/how-to-convert-a-multidimensional-array-to-a-single-dimensional-array">How to convert a multidimensional array to a single-dimensional array 
/quick-start/swiftui/how-to-show-multiple-alerts-in-a-single-view">How to show multiple alerts in a single view</a>
-->

:::

---

<TagLinks />