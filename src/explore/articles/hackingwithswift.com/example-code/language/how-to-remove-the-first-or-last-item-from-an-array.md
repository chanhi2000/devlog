---
lang: ko-KR
title: "How to remove the first or last item from an array"
description: "Article(s) > How to remove the first or last item from an array"
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
      content: "Article(s) > How to remove the first or last item from an array"
    - property: og:description
      content: "How to remove the first or last item from an array"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-remove-the-first-or-last-item-from-an-array.html
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
  "title": "How to remove the first or last item from an array | Language - free Swift example code",
  "desc": "How to remove the first or last item from an array",
  "link": "https://hackingwithswift.com/example-code/language/how-to-remove-the-first-or-last-item-from-an-array",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Arrays have built-in methods for removing the first or last items, but there’s a subtle difference between them.

First, there are two ways of removing the last item: `popLast()` and `removeLast()`. Both remove the last item from the array, but `popLast()` returns an optional – if the array was empty, you get back nil. If you call `removeLast()` on an empty array, your app crashes.

So, in this example `last1` will contain 5 and `last2` will contain 4:

```swift
var numbers = [1, 2, 3, 4, 5]
let last1 = numbers.popLast()
let last2 = numbers.removeLast()
```

As for removing items from the start of the array, there’s only *one* method: `removeFirst()`. This, like `removeLast()`, will crash your app if called when the array is empty.

So, continuing the above example, this will put 1 into `first1`:

```swift
let first1 = numbers.removeFirst()
```

There is no `popFirst()` because it’s an expensive operation and the developers want you to think twice – each time you remove an item from the front the rest of the items have to move down, so trying to use `popFirst()` in a loop would be inefficient.

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-create-an-array-by-repeating-an-item">How to create an array by repeating an item 
/example-code/arrays/how-to-find-an-item-in-an-array-using-firstindexof">How to find an item in an array using firstIndex(of:) 
/example-code/language/how-to-remove-duplicate-items-from-an-array">How to remove duplicate items from an array 
/example-code/language/remove-all-instances-of-an-object-from-an-array">Remove all instances of an object from an array 
/example-code/language/how-to-remove-items-from-an-array-using-filter">How to remove items from an array using filter()</a>
-->

:::

---

<TagLinks />