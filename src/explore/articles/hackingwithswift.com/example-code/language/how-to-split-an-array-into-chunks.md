---
lang: ko-KR
title: "How to split an array into chunks"
description: "Article(s) > How to split an array into chunks"
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
      content: "Article(s) > How to split an array into chunks"
    - property: og:description
      content: "How to split an array into chunks"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-split-an-array-into-chunks.html
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
  "title": "How to split an array into chunks | Language - free Swift example code",
  "desc": "How to split an array into chunks",
  "link": "https://hackingwithswift.com/example-code/language/how-to-split-an-array-into-chunks",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
If you have an array of elements and you want to split them into chunks of a size you specify, here’s a useful extension you can add to your code:

```swift
extension Array {
    func chunked(into size: Int) -> [[Element]] {
        return stride(from: 0, to: count, by: size).map {
            Array(self[$0 ..< Swift.min($0 + size, count)])
        }
    }
}
```

That converts an array into an array of arrays, using whatever size you specify. For example, if you have the numbers 1 to 100 in an array and you want to split it so that there are many arrays containing five numbers each, you’d write this:

```swift
let numbers = Array(1...100)
let result = numbers.chunked(into: 5)
```

-->

::: details Similar solutions…

<!--
/example-code/strings/how-to-split-a-string-into-an-array-componentsseparatedby">How to split a string into an array: components(separatedBy:) 
/example-code/language/how-to-split-an-integer-into-an-array-of-its-digits">How to split an integer into an array of its digits 
/example-code/arrays/how-to-join-an-array-of-strings-into-a-single-string">How to join an array of strings into a single string 
/example-code/language/how-to-use-reduce-to-condense-an-array-into-a-single-value">How to use reduce() to condense an array into a single value 
/quick-start/concurrency/how-to-use-continuations-to-convert-completion-handlers-into-async-functions">How to use continuations to convert completion handlers into async functions</a>
-->

:::

---

<TagLinks />