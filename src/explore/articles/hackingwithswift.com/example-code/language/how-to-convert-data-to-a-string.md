---
lang: ko-KR
title: "How to convert Data to a String"
description: "Article(s) > How to convert Data to a String"
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
      content: "Article(s) > How to convert Data to a String"
    - property: og:description
      content: "How to convert Data to a String"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-convert-data-to-a-string.html
date: 2024-03-16
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
  "title": "How to convert Data to a String | Language - free Swift example code",
  "desc": "How to convert Data to a String",
  "link": "https://hackingwithswift.com/example-code/language/how-to-convert-data-to-a-string",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
If you know an instance of `Data` contains a `String` and you want to convert it, you can use the `String(decoding:as:)` initializer, like this:

```swift
let str = String(decoding: data, as: UTF8.self)
```

If the `Data` instance can’t be converted to a UTF-8 string, you’ll might be sent back an empty string, but Swift might replace any bad characters with the Unicode replacement character. You do need to know which format is used to store the string, but UTF-8 is usually the best to go with.

If you're unsure about whether the string can safely be converted or not, there's a failable initializer you should use instead:

```swift
if let str = String(data: data, encoding: .utf8) {
    print("Successfully decoded: \(str)")
}
```

Using this optional approach avoids any problems around decoding invalid strings – if it succeeds you can be sure the string that was loaded is intact and correct.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/system/how-to-convert-dates-and-times-to-a-string-using-dateformatter">How to convert dates and times to a string using DateFormatter 
/quick-start/concurrency/how-to-use-continuations-to-convert-completion-handlers-into-async-functions">How to use continuations to convert completion handlers into async functions 
/example-code/language/how-to-convert-a-string-to-data">How to convert a String to Data 
/example-code/uikit/how-to-convert-a-cgpoint-in-one-uiview-to-another-view-using-convert">How to convert a CGPoint in one UIView to another view using convert()</a>
-->

:::

---

<TagLinks />