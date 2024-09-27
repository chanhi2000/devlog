---
lang: ko-KR
title: "NSRegularExpression: How to match regular expressions in strings"
description: "Article(s) > NSRegularExpression: How to match regular expressions in strings"
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
      content: "Article(s) > NSRegularExpression: How to match regular expressions in strings"
    - property: og:description
      content: "NSRegularExpression: How to match regular expressions in strings"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/nsregularexpression-how-to-match-regular-expressions-in-strings.html
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
  "title": "NSRegularExpression: How to match regular expressions in strings | Strings - free Swift example code",
  "desc": "NSRegularExpression: How to match regular expressions in strings",
  "link": "https://hackingwithswift.com/example-code/strings/nsregularexpression-how-to-match-regular-expressions-in-strings",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.0

<!-- TODO: 작성 -->

<!-- 
The `NSRegularExpression` class lets you find and replace substrings using regular expressions, which are concise and flexible descriptions of text. For example, if we wanted to pull "Taylor Swift" out of the string "My name is Taylor Swift", we could write a regular expression that matches the text "My name is " followed by any text, then pass that to the `NSRegularExpression` class.

The example below does just that. Note that we need to pull out the second match range because the first range is the entire matched string, whereas the second range is just the "Taylor Swift" part:

```swift
do {
    let input = "My name is Taylor Swift"
    let regex = try NSRegularExpression(pattern: "My name is (.*)", options: NSRegularExpression.Options.caseInsensitive)
    let matches = regex.matches(in: input, options: [], range: NSRange(location: 0, length: input.utf16.count))

    if let match = matches.first {
        let range = match.range(at:1)
        if let swiftRange = Range(range, in: input) {
            let name = input[swiftRange]
        }
    }
} catch {
    // regex was bad!
}
```

-->

::: details Similar solutions…

<!--
/example-code/language/check-whether-all-items-in-an-array-match-a-condition">Check whether all items in an array match a condition 
/example-code/language/checking-all-array-elements-match-a-condition-allsatisfy">Checking all array elements match a condition: allSatisfy() 
/example-code/strings/how-to-use-string-interpolation-to-combine-strings-integers-and-doubles">How to use string interpolation to combine strings, integers and doubles 
/example-code/strings/how-do-you-make-raw-strings-in-swift">How do you make raw strings in Swift? 
/example-code/strings/how-to-display-different-strings-based-on-available-space-using-variantfittingpresentationwidth">How to display different strings based on available space using variantFittingPresentationWidth()</a>
-->

:::

---

<TagLinks />