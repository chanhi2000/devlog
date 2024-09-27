---
lang: ko-KR
title: "Remove all instances of an object from an array"
description: "Article(s) > Remove all instances of an object from an array"
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
      content: "Article(s) > Remove all instances of an object from an array"
    - property: og:description
      content: "Remove all instances of an object from an array"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/remove-all-instances-of-an-object-from-an-array.html
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
  "title": "Remove all instances of an object from an array | Language - free Swift example code",
  "desc": "Remove all instances of an object from an array",
  "link": "https://hackingwithswift.com/example-code/language/remove-all-instances-of-an-object-from-an-array",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Arrays already have methods to find and remove a single item, or remove all items at once, but for removing all instances of a specific item you need to use a closure-based method called `removeAll(where:)`.

For example, given these numbers:

```swift
var numbers = [2, 1, 2, 3, 2, 4, 2, 5]
```

If we wanted to remove all instances of 2 from that array, we could use `removeAll(where:)` like this:

```swift
numbers.removeAll { $0 == 2 }
```

If you want to *return* the array with items removed rather than doing it in place, you’d need to write your own extension to `Array`, like this:

```swift
extension Array where Element: Equatable {
    func removing(_ obj: Element) -> [Element] {
        return filter { $0 != obj }
    }
}
```

Now you can write `let removed = numbers.removing(2)` to get back `[1, 3, 4, 5]`.

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-remove-items-from-an-array-using-filter">How to remove items from an array using filter() 
/example-code/arrays/how-to-tell-if-an-array-contains-an-object">How to tell if an array contains an object 
/example-code/language/how-to-remove-the-first-or-last-item-from-an-array">How to remove the first or last item from an array 
/example-code/language/how-to-remove-duplicate-items-from-an-array">How to remove duplicate items from an array 
/example-code/language/how-to-run-code-when-an-object-is-destroyed">How to run code when an object is destroyed</a>
-->

:::

---

<TagLinks />