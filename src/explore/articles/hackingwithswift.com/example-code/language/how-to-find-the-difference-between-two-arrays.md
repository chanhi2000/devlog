---
lang: ko-KR
title: "How to find the difference between two arrays"
description: "Article(s) > How to find the difference between two arrays"
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
      content: "Article(s) > How to find the difference between two arrays"
    - property: og:description
      content: "How to find the difference between two arrays"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-find-the-difference-between-two-arrays.html
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
  "title": "How to find the difference between two arrays | Language - free Swift example code",
  "desc": "How to find the difference between two arrays",
  "link": "https://hackingwithswift.com/example-code/language/how-to-find-the-difference-between-two-arrays",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
If you have two arrays that contain similar items and want to find out their differences – i.e., which items exist in one or the other, but not both – the easiest thing to do is use a `Set`. Sets have a `symmetricDifference()` method that does exactly this, so you just need to convert both arrays to a set, then convert the result back into an array.

Here’s an extension to make it easier:

```swift
extension Array where Element: Hashable {
    func difference(from other: [Element]) -> [Element] {
        let thisSet = Set(self)
        let otherSet = Set(other)
        return Array(thisSet.symmetricDifference(otherSet))
    }
}
```

And here’s some example code you can use to try it out:

```swift
let names1 = ["John", "Paul", "Ringo"]
let names2 = ["Ringo", "Paul", "George"]
let difference = names1.difference(from: names2)
```

That will set `difference` to be `["George", "John"]`, because those are the two names that only appear once in either array.

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-use-the-zip-function-to-join-two-arrays">How to use the zip() function to join two arrays 
/example-code/core-graphics/how-to-calculate-the-distance-between-two-cgpoints">How to calculate the distance between two CGPoints 
/example-code/language/how-to-find-the-minimum-of-two-numbers">How to find the minimum of two numbers 
/example-code/language/how-to-find-the-maximum-of-two-numbers">How to find the maximum of two numbers 
/example-code/core-graphics/how-to-calculate-the-manhattan-distance-between-two-cgpoints">How to calculate the Manhattan distance between two CGPoints</a>
-->

:::

---

<TagLinks />