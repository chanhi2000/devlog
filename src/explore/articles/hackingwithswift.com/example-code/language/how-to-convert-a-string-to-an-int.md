---
lang: ko-KR
title: "How to convert a string to a Int"
description: "Article(s) > How to convert a string to a Int"
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
      content: "Article(s) > How to convert a string to a Int"
    - property: og:description
      content: "How to convert a string to a Int"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-convert-a-string-to-an-int.html
date: 2019-09-19
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
  "title": "How to convert a string to a Int | Language - free Swift example code",
  "desc": "How to convert a string to a Int",
  "link": "https://hackingwithswift.com/example-code/language/how-to-convert-a-string-to-an-int",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<VidStack src="youtube/48QScxC1lBQ" />

<!-- TODO: 작성 -->

<!-- 
If you have an integer hiding inside a string, you can convert between the two just by using the integer's initializer, like this:

```swift
let myString1 = "556"
let myInt1 = Int(myString1)
```

Because strings might contain something that isn’t a number – e.g. “Fish” rather than “556” – the `Int` initializer will return an optional integer, so if you want to force a value you should use nil coalescing like this:

```swift
let myInt2 = Int(myString) ?? 0
```

That means “attempt to convert `myString` to an integer, but if the conversion failed because it contained something invalid then use 0 instead.”

As with other data types (`Float` and `Double`) it’s also possible to convert by using `NSString` if you’re desperate:

```swift
let myInt3 = (myString1 as NSString).integerValue
```

Ideally, though, that shouldn’t needed.

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-convert-an-int-to-a-string">How to convert an Int to a String 
/example-code/language/how-to-convert-a-float-to-an-int">How to convert a float to an int 
/example-code/language/how-to-convert-an-int-to-a-float">How to convert an int to a float 
/example-code/language/how-to-multiply-an-int-and-a-double">How to multiply an int and a double 
/example-code/system/how-to-convert-dates-and-times-to-a-string-using-dateformatter">How to convert dates and times to a string using DateFormatter</a>
-->

:::

---

<TagLinks />