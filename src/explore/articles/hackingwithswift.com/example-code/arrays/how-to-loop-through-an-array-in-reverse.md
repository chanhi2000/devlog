---
lang: ko-KR
title: "How to loop through an array in reverse"
description: "Article(s) > How to loop through an array in reverse"
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
      content: "Article(s) > How to loop through an array in reverse"
    - property: og:description
      content: "How to loop through an array in reverse"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/arrays/how-to-loop-through-an-array-in-reverse.html
date: 2019-03-29
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Array - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/arrays/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to loop through an array in reverse | Array - free Swift example code",
  "desc": "How to loop through an array in reverse",
  "link": "https://hackingwithswift.com/example-code/arrays/how-to-loop-through-an-array-in-reverse",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
If you want to read through an array in reverse, you should use the `reversed()` method. You can use this as part of the regular fast enumeration technique if you want, which would give you code like this:

```swift
let array = ["Apples", "Peaches", "Plums"]

for item in array.reversed() {
    print("Found \(item)")
}
```

You can also reverse an enumerated array just by appending the method call, like this:

```swift
for (index, item) in array.reversed().enumerated() {
    print("Found \(item) at position \(index)")
}
```

Note that whether you call `reversed()` then `enumerated()` or vice versa matters! In the above code, enumerate will count upwards, but if you use `array.enumerated().reversed()` it will count backwards.

-->

::: details Similar solutions…

<!--
/example-code/arrays/how-to-loop-through-items-in-an-array">How to loop through items in an array 
/example-code/strings/how-to-loop-through-letters-in-a-string">How to loop through letters in a string 
/example-code/language/how-to-reverse-sort-an-array">How to reverse sort an array 
/example-code/strings/how-to-reverse-a-string-using-reversed">How to reverse a string using reversed() 
/example-code/language/how-to-use-the-foreach-method-to-loop-over-an-array">How to use the forEach method to loop over an array</a>
-->

:::

---

<TagLinks />