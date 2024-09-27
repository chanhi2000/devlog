---
lang: ko-KR
title: "How to specify your own date format with Codable and JSONEncoder"
description: "Article(s) > How to specify your own date format with Codable and JSONEncoder"
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
      content: "Article(s) > How to specify your own date format with Codable and JSONEncoder"
    - property: og:description
      content: "How to specify your own date format with Codable and JSONEncoder"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-specify-your-own-date-format-with-codable-and-jsonencoder.html
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
  "title": "How to specify your own date format with Codable and JSONEncoder | Language - free Swift example code",
  "desc": "How to specify your own date format with Codable and JSONEncoder",
  "link": "https://hackingwithswift.com/example-code/language/how-to-specify-your-own-date-format-with-codable-and-jsonencoder",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
When using `JSONEncoder` to encode dates, there are a handful of built-in date formats you can choose from. If none of them fit your needs, why not make your own? You can configure a `DateFormatter` using whatever date and time format you want, then pass that to the `JSONEncoder` as its `dateEncodingStrategy` property, like this:

```swift
let encoder = JSONEncoder()
let formatter = DateFormatter()
formatter.dateStyle = .full
formatter.timeStyle = .full
encoder.dateEncodingStrategy = .formatted(formatter)
```

That converts any `Date` properties to be the fullest possible string for your locale, e.g. "Monday, February 5, 2018 at 9:28:10 PM Greenwich Mean Time”.

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a>
-->

:::

---

<TagLinks />