---
lang: ko-KR
title: "How to get the lines in a string as an array"
description: "Article(s) > How to get the lines in a string as an array"
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
      content: "Article(s) > How to get the lines in a string as an array"
    - property: og:description
      content: "How to get the lines in a string as an array"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-get-the-lines-in-a-string-as-an-array.html
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
  "title": "How to get the lines in a string as an array | Strings - free Swift example code",
  "desc": "How to get the lines in a string as an array",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-get-the-lines-in-a-string-as-an-array",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Swift’s strings have their lines separated by the `\n` character, which is a line break on Unix operating systems. Using that plus the `components(separatedBy:)` method, you can get an array of all the lines in a string like this:

```swift
let lines = str.components(separatedBy: "\n")
```

If you intend to use that regularly, consider making an extension on `String` like this one:

```swift
extension String {
    var lines: [String] {
        return self.components(separatedBy: "\n")
    }
}
```

-->

::: details Similar solutions…

<!--
/example-code/core-graphics/how-to-calculate-the-point-where-two-lines-intersect">How to calculate the point where two lines intersect 
/example-code/core-graphics/how-to-draw-lines-in-core-graphics-moveto-and-addlineto">How to draw lines in Core Graphics: move(to:) and addLine(to:) 
/quick-start/concurrency/how-to-get-a-result-from-a-task">How to get a Result from a task 
/example-code/language/how-to-get-a-random-element-from-an-array-using-randomelement">How to get a random element from an array using randomElement() 
/example-code/strings/how-to-get-the-length-of-a-string">How to get the length of a string</a>
-->

:::

---

<TagLinks />