---
lang: ko-KR
title: "How to convert an NSRange to a Swift string index"
description: "Article(s) > How to convert an NSRange to a Swift string index"
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
      content: "Article(s) > How to convert an NSRange to a Swift string index"
    - property: og:description
      content: "How to convert an NSRange to a Swift string index"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-convert-an-nsrange-to-a-swift-string-index.html
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
  "title": "How to convert an NSRange to a Swift string index | Language - free Swift example code",
  "desc": "How to convert an NSRange to a Swift string index",
  "link": "https://hackingwithswift.com/example-code/language/how-to-convert-an-nsrange-to-a-swift-string-index",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
Swift strings have changed in every release since the language was first announced, but even after so much change its older counterpart, `NSRange`, still appears in many UIKit APIs. 

Fortunately, Swift 4 introduced a simple way to convert any `NSRange` into a regular Swift `Range`. For example, say you had the following string and range:

```swift
let input = "Hello, world"
let range = NSMakeRange(0, 10)
```

To make that into a Swift `Range` instance you just need this single line of code:

```swift
let swiftRange = Range(range, in: input)
```

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-use-core-spotlight-to-index-content-in-your-app">How to use Core Spotlight to index content in your app 
/example-code/libraries/how-to-search-your-apps-spotlight-index">How to search your app’s Spotlight index 
/example-code/language/how-to-find-the-index-of-the-first-matching-array-element">How to find the index of the first matching array element 
/quick-start/swiftui/how-to-change-the-order-of-view-layering-using-z-index">How to change the order of view layering using Z index 
/quick-start/concurrency/how-to-use-continuations-to-convert-completion-handlers-into-async-functions">How to use continuations to convert completion handlers into async functions</a>
-->

:::

---

<TagLinks />