---
lang: ko-KR
title: "How to count matching items in an array"
description: "Article(s) > How to count matching items in an array"
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
      content: "Article(s) > How to count matching items in an array"
    - property: og:description
      content: "How to count matching items in an array"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-count-matching-items-in-an-array.html
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
  "title": "How to count matching items in an array | Language - free Swift example code",
  "desc": "How to count matching items in an array",
  "link": "https://hackingwithswift.com/example-code/language/how-to-count-matching-items-in-an-array",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
If you want to count how many items in an array (or any collection) match a test you specify, the easiest thing to do is run the collection through a call to `filter()` then count the remainder.

For example, if you had an array of numbers and wanted to count how many were odd, you would write this:

```swift
let count1 = [1, 2, 3, 4, 5].filter { $0 % 2 == 1 }.count
```

Because this is something that all collections might want to do, you should consider wrapping it in an extension on `Collection`, like this:

```swift
extension Collection {
    func count(where test: (Element) throws -> Bool) rethrows -> Int {
        return try self.filter(test).count
    }
}
```

With that change, counting the odd numbers becomes this:

```swift
let count2 = [1, 2, 3, 4, 5].count { $0 % 2 == 1 }
```

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-find-the-index-of-the-first-matching-array-element">How to find the index of the first matching array element 
/example-code/language/how-to-count-element-frequencies-in-an-array">How to count element frequencies in an array 
/example-code/language/how-to-find-the-first-matching-element-in-an-array">How to find the first matching element in an array 
/example-code/arrays/how-to-count-objects-in-a-set-using-nscountedset">How to count objects in a set using NSCountedSet 
/example-code/language/removing-matching-elements-from-a-collection-removeallwhere">Removing matching elements from a collection: removeAll(where:)</a>
-->

:::

---

<TagLinks />