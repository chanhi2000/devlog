---
lang: ko-KR
title: "How to specify default values for dictionary keys"
description: "Article(s) > How to specify default values for dictionary keys"
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
      content: "Article(s) > How to specify default values for dictionary keys"
    - property: og:description
      content: "How to specify default values for dictionary keys"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-specify-default-values-for-dictionary-keys.html
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
  "title": "How to specify default values for dictionary keys | Language - free Swift example code",
  "desc": "How to specify default values for dictionary keys",
  "link": "https://hackingwithswift.com/example-code/language/how-to-specify-default-values-for-dictionary-keys",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Reading a dictionary key returns an option value by default, because the key you asked for might not exist. However, there’s a slightly different subscript you can call that eliminates optionality: when you read a key, you can also provide a default value to use if the key doesn’t exist.

For example, here’s a dictionary representing the high scores in a game:

```swift
var scores = ["Taylor Swift": 25, "Ed Sheeran": 20]
```

If we wanted to read the score of Adele Adkins, we’d get back `nil` because she doesn’t have a score. And if we tried to read any of the values that *do* have keys we’d still get back an optional integer.

Fortunately, if you provide a default value while reading a key you can be guaranteed you’ll always get a value back, so the return value for our `scores` dictionary will always be a real integer rather than an optional.

So, here we can read Adele’s score from the dictionary, or give it a default value of 0 if the key doesn’t exist:

```swift
var adeleScore = scores["Adele Adkins", default: 0]
```

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-sort-the-keys-of-your-json-using-codable">How to sort the keys of your JSON using Codable 
/example-code/strings/how-to-specify-floating-point-precision-in-a-string">How to specify floating-point precision in a string 
/quick-start/swiftui/how-to-specify-the-dynamic-type-sizes-a-view-supports">How to specify the Dynamic Type sizes a view supports 
/example-code/language/how-to-specify-your-own-date-format-with-codable-and-jsonencoder">How to specify your own date format with Codable and JSONEncoder 
/example-code/language/how-to-transform-a-dictionary-using-mapvalues">How to transform a dictionary using mapValues()</a>
-->

:::

---

<TagLinks />