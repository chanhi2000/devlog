---
lang: ko-KR
title: "How to check a string is spelled correctly using UITextChecker"
description: "Article(s) > How to check a string is spelled correctly using UITextChecker"
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
  - ios-3.2
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to check a string is spelled correctly using UITextChecker"
    - property: og:description
      content: "How to check a string is spelled correctly using UITextChecker"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-check-a-string-is-spelled-correctly-using-uitextchecker.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIKit - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uikit/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to check a string is spelled correctly using UITextChecker | UIKit - free Swift example code",
  "desc": "How to check a string is spelled correctly using UITextChecker",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-check-a-string-is-spelled-correctly-using-uitextchecker",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.2

<!-- TODO: 작성 -->

<!--
You can draw on the iOS dictionary in just a few lines of code thanks to the `UITextChecker` class. Tell it the range of the string you want to check (this could be the whole string or just part of it), then ask it to tell you where the spelling error is. If it says there are no errors, the word is good. Here's the code:

```swift
func isReal(word: String) -> Bool {
    let checker = UITextChecker()
    let range = NSRange(location: 0, length: word.utf16.count)
    let misspelledRange = checker.rangeOfMisspelledWord(in: word, range: range, startingAt: 0, wrap: false, language: "en")

    return misspelledRange.location == NSNotFound
}
```

Note that `rangeOfMisspelledWord(in:)` accepts a language parameter, so you can change that as needed.

-->

::: details Similar solutions…

<!--
/example-code/strings/how-to-check-whether-a-string-contains-any-words-from-an-array">How to check whether a string contains any words from an array 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table 
/example-code/system/how-to-convert-dates-and-times-to-a-string-using-dateformatter">How to convert dates and times to a string using DateFormatter 
/example-code/networking/how-to-check-for-internet-connectivity-using-nwpathmonitor">How to check for internet connectivity using NWPathMonitor 
/quick-start/swiftui/how-to-add-advanced-text-styling-using-attributedstring">How to add advanced text styling using AttributedString</a>
-->

:::

---

<TagLinks />