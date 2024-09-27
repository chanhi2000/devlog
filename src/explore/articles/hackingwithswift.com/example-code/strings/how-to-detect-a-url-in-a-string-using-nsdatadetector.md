---
lang: ko-KR
title: "How to detect a URL in a String using NSDataDetector"
description: "Article(s) > How to detect a URL in a String using NSDataDetector"
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
  - ios-4.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to detect a URL in a String using NSDataDetector"
    - property: og:description
      content: "How to detect a URL in a String using NSDataDetector"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-detect-a-url-in-a-string-using-nsdatadetector.html
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
  "title": "How to detect a URL in a String using NSDataDetector | Strings - free Swift example code",
  "desc": "How to detect a URL in a String using NSDataDetector",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-detect-a-url-in-a-string-using-nsdatadetector",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.0

<!-- TODO: 작성 -->

<!-- 
The `NSDataDetector` class makes it easy to detect URLs inside a string using just a few lines of code. This example loops through all URLs in a string, printing each one out:

```swift
let input = "This is a test with the URL https://www.hackingwithswift.com to be detected."
let detector = try! NSDataDetector(types: NSTextCheckingResult.CheckingType.link.rawValue)
let matches = detector.matches(in: input, options: [], range: NSRange(location: 0, length: input.utf16.count))

for match in matches {
    guard let range = Range(match.range, in: input) else { continue }
    let url = input[range]
    print(url)
}
```

-->

::: details Similar solutions…

<!--
/example-code/strings/how-to-convert-a-string-to-a-safe-format-for-url-slugs-and-filenames">How to convert a string to a safe format for URL slugs and filenames 
/example-code/strings/how-to-load-a-string-from-a-website-url">How to load a string from a website URL 
/quick-start/swiftui/how-to-load-a-remote-image-from-a-url">How to load a remote image from a URL 
/example-code/uikit/how-to-load-a-remote-image-url-into-uiimageview">How to load a remote image URL into UIImageView 
/example-code/system/how-to-open-a-url-in-safari">How to open a URL in Safari</a>
-->

:::

---

<TagLinks />