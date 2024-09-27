---
lang: ko-KR
title: "How to measure a string for Objective-C code"
description: "Article(s) > How to measure a string for Objective-C code"
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
      content: "Article(s) > How to measure a string for Objective-C code"
    - property: og:description
      content: "How to measure a string for Objective-C code"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-measure-a-string-for-objective-c-code.html
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
  "title": "How to measure a string for Objective-C code | Strings - free Swift example code",
  "desc": "How to measure a string for Objective-C code",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-measure-a-string-for-objective-c-code",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
Regular Swift code can treat strings like other kinds of sequence, so you can use its `count` property to read the number of characters it contains:

```swift
let str = "Hello, world"
let count = str.count
```

However, this falls down when you need to work with Objective-C code, for example `NSRegularExpression`, `NSDataDetector`, `UITextChecker`, and more – they use UTF-16 rather than Swift’s extended grapheme clusters, and so if you use `count` with them you’re likely to miss characters.

Instead, the correct solution is to measure your string’s length using `utf16.count`, like this:

```swift
let input = "This is a test with the URL https://www.hackingwithswift.com to be detected."
let detector = try! NSDataDetector(types: NSTextCheckingResult.CheckingType.link.rawValue)
let matches = detector.matches(in: input, options: [], range: NSRange(location: 0, length: input.utf16.count))
```

That guarantees your string’s length is reported fully when interacting with Objective-C code.

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-create-an-objective-c-bridging-header-to-use-code-in-swift">How to create an Objective-C bridging header to use code in Swift 
/example-code/language/how-to-fix-argument-of-selector-refers-to-instance-method-that-is-not-exposed-to-objective-c">How to fix “argument of #selector refers to instance method that is not exposed to Objective-C” 
/example-code/testing/how-to-write-performance-tests-using-measure">How to write performance tests using measure() 
/example-code/uikit/how-to-measure-touch-strength-using-3d-touch">How to measure touch strength using 3D Touch 
/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a>
-->

:::

---

<TagLinks />