---
lang: ko-KR
title: "How to remove duplicate items from an array"
description: "Article(s) > How to remove duplicate items from an array"
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
      content: "Article(s) > How to remove duplicate items from an array"
    - property: og:description
      content: "How to remove duplicate items from an array"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-remove-duplicate-items-from-an-array.html
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
  "title": "How to remove duplicate items from an array | Language - free Swift example code",
  "desc": "How to remove duplicate items from an array",
  "link": "https://hackingwithswift.com/example-code/language/how-to-remove-duplicate-items-from-an-array",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
There are several ways of removing duplicate items from an array, but one of the easiest is with the following extension on `Array`:

```swift
extension Array where Element: Hashable {
    func removingDuplicates() -> [Element] {
        var addedDict = [Element: Bool]()

        return filter {
            addedDict.updateValue(true, forKey: $0) == nil
        }
    }

    mutating func removeDuplicates() {
        self = self.removingDuplicates()
    }
}
```

That provides two methods: one called `removingDuplicates()` that returns an array with duplicates removed, and one called `removeDuplicates()` that changes the array in place.

The method works using `filter()` and a dictionary: when you call `updateValue()` on a dictionary it returns nil if the key is new, so we can use that to figure out which items are unique.

For example:

```swift
let numbers = [1, 5, 3, 4, 5, 1, 3]
let unique = numbers.removingDuplicates()
```

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-remove-items-from-an-array-using-filter">How to remove items from an array using filter() 
/example-code/language/how-to-remove-the-first-or-last-item-from-an-array">How to remove the first or last item from an array 
/example-code/language/remove-all-instances-of-an-object-from-an-array">Remove all instances of an object from an array 
/example-code/uikit/how-to-remove-cells-from-a-uitableview">How to remove cells from a UITableView 
/example-code/strings/how-to-remove-a-prefix-from-a-string">How to remove a prefix from a string</a>
-->

:::

---

<TagLinks />