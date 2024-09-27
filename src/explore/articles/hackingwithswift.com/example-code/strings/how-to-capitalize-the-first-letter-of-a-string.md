---
lang: ko-KR
title: "How to capitalize the first letter of a string"
description: "Article(s) > How to capitalize the first letter of a string"
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
      content: "Article(s) > How to capitalize the first letter of a string"
    - property: og:description
      content: "How to capitalize the first letter of a string"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-capitalize-the-first-letter-of-a-string.html
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
  "title": "How to capitalize the first letter of a string | Strings - free Swift example code",
  "desc": "How to capitalize the first letter of a string",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-capitalize-the-first-letter-of-a-string",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
If you want to capitalize the first letter of a string without touching the rest of the letters, add this simple extension of `String`:

```swift
extension String {
    func capitalizingFirstLetter() -> String {
        return prefix(1).capitalized + dropFirst()
    }

    mutating func capitalizeFirstLetter() {
        self = self.capitalizingFirstLetter()
    }
}
```

Here’s an example to try it out:

```swift
let test = "the rain in Spain"
print(test.capitalizingFirstLetter())
```

-->

::: details Similar solutions…

<!--
/example-code/strings/how-to-capitalize-words-in-a-string-using-capitalized">How to capitalize words in a string using capitalized 
/quick-start/concurrency/what-calls-the-first-async-function">What calls the first async function? 
/example-code/language/how-to-find-the-index-of-the-first-matching-array-element">How to find the index of the first matching array element 
/example-code/language/how-to-find-the-first-matching-element-in-an-array">How to find the first matching element in an array 
/example-code/system/what-is-the-first-responder">What is the first responder?</a>
-->

:::

---

<TagLinks />