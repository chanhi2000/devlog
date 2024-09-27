---
lang: ko-KR
title: "When to use a set rather than an array"
description: "Article(s) > When to use a set rather than an array"
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
      content: "Article(s) > When to use a set rather than an array"
    - property: og:description
      content: "When to use a set rather than an array"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/when-to-use-a-set-rather-than-an-array.html
date: 2019-11-28
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
  "title": "When to use a set rather than an array | Language - free Swift example code",
  "desc": "When to use a set rather than an array",
  "link": "https://hackingwithswift.com/example-code/language/when-to-use-a-set-rather-than-an-array",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
Sets and arrays both store objects of your choosing, but they have four important differences:

1. Sets do not store objects in the order they add them.
<li>Instead, they are stored in a way to make them fast to find, which means finding items in sets is extremely efficient.
<li>Sets store each item precisely once.
<li>All items you want to store in a set must conform to `Hashable`.

As a result, you should use a set rather than an array if all the following criteria are true:

1. You intend to add each item only once. Sets never allow duplicates.
<li>You don’t care about the order of the items in the set.
<li>You don’t need to use APIs that require arrays.
<li>You’re storing `Hashable` types, either your own or one of Swift’s built-in types likes strings and integers. Sets use hash values for fast look up of items.

You can switch between an array and a set simply enough:

```swift
let array = [1, 2, 3]
let set = Set(array)
let array2 = Array(set)
```

Using `contains()` on a set takes the same amount of time if you have one item as it does if you have one thousand items – it’s called an O(1) operation.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-give-uitableviewcells-a-selected-color-other-than-gray">How to give UITableViewCells a selected color other than gray 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/arrays/how-to-count-objects-in-a-set-using-nscountedset">How to count objects in a set using NSCountedSet 
/example-code/system/how-to-set-local-alerts-using-unnotificationcenter">How to set local alerts using UNNotificationCenter 
/example-code/xcode/how-to-set-the-clock-in-the-ios-simulator">How to set the clock in the iOS Simulator</a>
-->

:::

---

<TagLinks />