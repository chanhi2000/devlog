---
lang: ko-KR
title: "How to sort an array using sort()"
description: "Article(s) > How to sort an array using sort()"
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
      content: "Article(s) > How to sort an array using sort()"
    - property: og:description
      content: "How to sort an array using sort()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/arrays/how-to-sort-an-array-using-sort.html
date: 2019-06-01
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
  "title": "How to sort an array using sort() | Array - free Swift example code",
  "desc": "How to sort an array using sort()",
  "link": "https://hackingwithswift.com/example-code/arrays/how-to-sort-an-array-using-sort",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<VidStack src="youtube/o_zYsGu2Z8U" />

<!-- TODO: 작성 -->

<!-- 
All arrays have built-in `sort()` and `sorted()` methods that can be used to sort the array, but they are subtly different.

If the array is simple you can just call `sort()` directly, like this, to sort an array in place:

```swift
var names = ["Jemima", "Peter", "David", "Kelly", "Isabella"]
names.sort()
```

If you have a custom struct or class and want to sort them arbitrarily, you should call `sort()` using a trailing closure that sorts on a field you specify. Here's an example using an array of custom structs that sorts on a particular property:

```swift
struct User {
    var firstName: String
}

var users = [
    User(firstName: "Jemima"),
    User(firstName: "Peter"),
    User(firstName: "David"),
    User(firstName: "Kelly"),
    User(firstName: "Isabella")
]

users.sort {
    $0.firstName < $1.firstName
}
```

If you want to return a sorted array rather than sort it in place, use `sorted()` like this:

```swift
let sortedUsers = users.sorted {
    $0.firstName < $1.firstName
}
```

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-reverse-sort-an-array">How to reverse sort an array 
/example-code/language/how-to-sort-the-keys-of-your-json-using-codable">How to sort the keys of your JSON using Codable 
/example-code/language/how-to-convert-a-multidimensional-array-to-a-single-dimensional-array">How to convert a multidimensional array to a single-dimensional array 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table 
/example-code/language/how-to-append-one-array-to-another-array">How to append one array to another array</a>
-->

:::

---

<TagLinks />