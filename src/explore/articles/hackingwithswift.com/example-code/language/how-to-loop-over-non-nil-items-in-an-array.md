---
lang: ko-KR
title: "How to loop over non-nil items in an array"
description: "Article(s) > How to loop over non-nil items in an array"
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
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to loop over non-nil items in an array"
    - property: og:description
      content: "How to loop over non-nil items in an array"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-loop-over-non-nil-items-in-an-array.html
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
  "title": "How to loop over non-nil items in an array | Language - free Swift example code",
  "desc": "How to loop over non-nil items in an array",
  "link": "https://hackingwithswift.com/example-code/language/how-to-loop-over-non-nil-items-in-an-array",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
Consider an array of items containing some optionals, like this one:

```swift
let numbers: [Int?] = [1, nil, 3, nil, 5]
```

If you want to loop over all the items and print them out, you’d write something like this:

```swift
for number in numbers {
    print(number)
}
```

However, that prints out all items in their current state: optionally wrapped integers for some, nil for others. 

With a small change to that loop, you can have Swift unwrap all the optionals then only enter the loop for any that contain a value – any `nil` items are ignored. This is done using `for case let` syntax, like this:

```swift
for case let number? in numbers {
    print(number)
}
```

That will print the numbers 1, 3, and 5.

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-use-the-foreach-method-to-loop-over-an-array">How to use the forEach method to loop over an array 
/example-code/language/using-stride-to-loop-over-a-range-of-numbers">Using stride() to loop over a range of numbers 
/example-code/arrays/how-to-loop-through-items-in-an-array">How to loop through items in an array 
/quick-start/swiftui/how-to-detect-the-user-hovering-over-a-view">How to detect the user hovering over a view 
/example-code/core-haptics/how-to-modify-haptic-events-over-time-using-chhapticparametercurve">How to modify haptic events over time using CHHapticParameterCurve</a>
-->

:::

---

<TagLinks />