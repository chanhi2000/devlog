---
lang: ko-KR
title: "What are sets?"
description: "Article(s) > What are sets?"
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
      content: "Article(s) > What are sets?"
    - property: og:description
      content: "What are sets?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-are-sets.html
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
  "title": "What are sets? | Language - free Swift example code",
  "desc": "What are sets?",
  "link": "https://hackingwithswift.com/example-code/language/what-are-sets",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
Sets are a type of sequence similar to arrays, except they may not store any item more than once and are unordered. This eliminates them from many places where you would use an array, but they do have one special super-power: it’s extremely fast to check whether a set contains a specific value. In fact, sets perform this operation at the same speed whether they contain 10 items or 10,000 items.

Sets can be created directly from arrays, then used like them in many ways. For example:

```swift
var numbers = Set([1, 2, 3])
```

You can then go ahead and check whether that contains a specific value, like this:

```swift
print(numbers.contains(5))
```

Because sets don’t have any concept of ordering, they don’t have an `append()` method. Instead, they use `insert()`, like this:

```swift
numbers.insert(5)
```

-->

::: details Similar solutions…

<!--
/example-code/language/when-to-use-a-set-rather-than-an-array">When to use a set rather than an array 
/example-code/uikit/how-to-add-a-shadow-to-a-uiview">How to add a shadow to a UIView 
/example-code/language/what-are-convenience-initializers">What are convenience initializers? 
/quick-start/swiftui/how-to-let-users-move-rows-in-a-list">How to let users move rows in a list 
/quick-start/swiftui/what-is-the-gesturestate-property-wrapper">What is the @GestureState property wrapper?</a>
-->

:::

---

<TagLinks />