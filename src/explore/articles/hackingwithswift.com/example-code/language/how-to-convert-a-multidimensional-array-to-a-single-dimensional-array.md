---
lang: ko-KR
title: "How to convert a multidimensional array to a single-dimensional array"
description: "Article(s) > How to convert a multidimensional array to a single-dimensional array"
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
      content: "Article(s) > How to convert a multidimensional array to a single-dimensional array"
    - property: og:description
      content: "How to convert a multidimensional array to a single-dimensional array"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-convert-a-multidimensional-array-to-a-single-dimensional-array.html
date: 2019-10-11
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
  "title": "How to convert a multidimensional array to a single-dimensional array | Language - free Swift example code",
  "desc": "How to convert a multidimensional array to a single-dimensional array",
  "link": "https://hackingwithswift.com/example-code/language/how-to-convert-a-multidimensional-array-to-a-single-dimensional-array",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
If you have an array of arrays – for example, an array of an array of integers – you can convert it to a single, flat array by using the `joined()` method. Because Swift sends back an optimized type (`FlattenSequence<[[YourType]]>`, in this case), you might also want to add an array conversion for easier use.

For example, here’s an array of arrays of strings, such as you might find if you had one array for each class of students, grouped into a larger array to represent the whole school:

```swift
let classes = [
    ["Ash", "Brock", "Misty"],
    ["Gloria", "Piper", "Suzanne"],
    ["Picard", "Riker", "Troi"]
]
```

We can use `joined()` to get a single array of names like this:

```swift
let allStudents = classes.joined()
```

As noted, that will make `allStudents` an instance of `FlattenSequence<[[String]]>` rather than an array, so if you need to send it back from a method or want to subscript it you should convert it to an array first, like this:

```swift
let allStudents = Array(classes.joined())
```

That will set `allStudents` to an array containing Ash, Brock, Misty, Gloria, Piper, Suzanne, Picard, Riker, and Troi.

-->

::: details Similar solutions…

<!--
/example-code/arrays/how-to-join-an-array-of-strings-into-a-single-string">How to join an array of strings into a single string 
/example-code/language/how-to-use-reduce-to-condense-an-array-into-a-single-value">How to use reduce() to condense an array into a single value 
/quick-start/swiftui/how-to-show-multiple-alerts-in-a-single-view">How to show multiple alerts in a single view 
/example-code/strings/how-to-read-a-single-character-from-a-string">How to read a single character from a string 
/example-code/uikit/how-to-convert-a-cgpoint-in-one-uiview-to-another-view-using-convert">How to convert a CGPoint in one UIView to another view using convert()</a>
-->

:::

---

<TagLinks />