---
lang: ko-KR
title: "How to specify floating-point precision in a string"
description: "Article(s) > How to specify floating-point precision in a string"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to specify floating-point precision in a string"
    - property: og:description
      content: "How to specify floating-point precision in a string"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-specify-floating-point-precision-in-a-string.html
date: 2019-06-01
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
  "title": "How to specify floating-point precision in a string | Strings - free Swift example code",
  "desc": "How to specify floating-point precision in a string",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-specify-floating-point-precision-in-a-string",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<VidStack src="youtube/l5MaiByb0R0" />

<!-- TODO: 작성 -->

<!-- 
Swift's string interpolation makes it easy to put floating-point numbers into a string, but it lacks the ability to specify precision. For example, if a number is 45.6789, you might only want to show two digits after the decimal place.

Here's an example using basic string interpolation:

```swift
let angle = 45.6789
let raw = "Angle: \(angle)"
```

That will make the `raw` value equal to "Angle: 45.6789". But if you wanted to round the angle to two decimal places, you would use this code instead:

```swift
let formatted = String(format: "Angle: %.2f", angle)
```

The "%f" format string means "a floating point number," but "%.2f" means "a floating-point number with two digits after the decimal point. When you use this initializer, Swift will automatically round the final digit as needed based on the following number.

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-specify-your-own-date-format-with-codable-and-jsonencoder">How to specify your own date format with Codable and JSONEncoder 
/quick-start/swiftui/how-to-specify-the-dynamic-type-sizes-a-view-supports">How to specify the Dynamic Type sizes a view supports 
/example-code/language/how-to-specify-default-values-for-dictionary-keys">How to specify default values for dictionary keys 
/example-code/system/how-to-convert-dates-and-times-to-a-string-using-dateformatter">How to convert dates and times to a string using DateFormatter 
/example-code/strings/how-to-calculate-the-rot13-of-a-string">How to calculate the ROT13 of a string</a>
-->

:::

---

<TagLinks />