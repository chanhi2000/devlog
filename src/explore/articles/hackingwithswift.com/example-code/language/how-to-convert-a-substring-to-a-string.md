---
lang: ko-KR
title: "How to convert a Substring to a String"
description: "Article(s) > How to convert a Substring to a String"
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
      content: "Article(s) > How to convert a Substring to a String"
    - property: og:description
      content: "How to convert a Substring to a String"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-convert-a-substring-to-a-string.html
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
  "title": "How to convert a Substring to a String | Language - free Swift example code",
  "desc": "How to convert a Substring to a String",
  "link": "https://hackingwithswift.com/example-code/language/how-to-convert-a-substring-to-a-string",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Swift has a dedicated `Substring` type (`String.SubSequence`) that is designed to hold slices of strings, which is a performance optimization: when you store part of a string in a different variable, Swift can simply point the substring at the parent string rather than copy all the data.

However, while substrings can be used in many of the same ways as regular strings, they aren’t the same – if you have a function that accepts a `String` as a parameter, you simply cannot send it a `Substring`.

To fix this, you can wrap your substring in a `String` initializer like this:

```swift
let quote = "The revolution will be Swift"
let substring = quote.dropFirst(23)
let realString = String(substring)
```

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-convert-dates-and-times-to-a-string-using-dateformatter">How to convert dates and times to a string using DateFormatter 
/example-code/language/how-to-convert-data-to-a-string">How to convert Data to a String 
/example-code/uikit/how-to-convert-a-cgpoint-in-one-uiview-to-another-view-using-convert">How to convert a CGPoint in one UIView to another view using convert() 
/quick-start/swiftui/how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-binding-string">How to fix “Cannot convert value of type 'String' to expected argument type 'Binding<string>’”</string> 
/example-code/uicolor/how-to-convert-a-html-name-string-into-a-uicolor">How to convert a HTML name string into a UIColor</a>
-->

:::

---

<TagLinks />