---
lang: ko-KR
title: "How to append one array to another array"
description: "Article(s) > How to append one array to another array"
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
      content: "Article(s) > How to append one array to another array"
    - property: og:description
      content: "How to append one array to another array"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-append-one-array-to-another-array.html
date: 2019-09-19
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
  "title": "How to append one array to another array | Language - free Swift example code",
  "desc": "How to append one array to another array",
  "link": "https://hackingwithswift.com/example-code/language/how-to-append-one-array-to-another-array",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/CYqLHqDfBOQ" />

<!-- TODO: 작성 -->

<!-- 
There are three ways of adding one array to another, and you can use whichever syntax you prefer.

First, make a couple of test arrays to work with:

```swift
var first = ["John", "Paul"]
let second = ["George", "Ringo"]
```

**Note:** I made the `first` array mutable so we can join the second array to it.

One option for joining arrays is the `append(contentsOf:)` method, used like this:

```swift
first.append(contentsOf: second)
```

Another option is using the `+=` operator, which is overloaded for arrays to combine elements:

```swift
first += second
```

The third option is to use a regular `+` to create a new array by combining two others:

```swift
let third = first + second
```

All three options produce the same resulting array, albeit with different approaches.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture">How to force one gesture to recognize before another using highPriorityGesture() 
/example-code/games/how-to-make-one-sprite-draw-in-front-of-another-using-zposition">How to make one sprite draw in front of another using zPosition 
/example-code/system/how-to-make-one-operation-wait-for-another-to-complete-using-adddependency">How to make one operation wait for another to complete using addDependency() 
/quick-start/swiftui/how-to-synchronize-animations-from-one-view-to-another-with-matchedgeometryeffect">How to synchronize animations from one view to another with matchedGeometryEffect() 
/example-code/strings/how-to-run-a-case-insensitive-search-for-one-string-inside-another">How to run a case-insensitive search for one string inside another</a>
-->

:::

---

<TagLinks />