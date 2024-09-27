---
lang: ko-KR
title: "How to remove a prefix from a string"
description: "Article(s) > How to remove a prefix from a string"
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
      content: "Article(s) > How to remove a prefix from a string"
    - property: og:description
      content: "How to remove a prefix from a string"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-remove-a-prefix-from-a-string.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Strings - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/strings/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to remove a prefix from a string | Strings - free Swift example code",
  "desc": "How to remove a prefix from a string",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-remove-a-prefix-from-a-string",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Swift’s string have a built-in `hasPrefix()` method that returns true if the string starts with specific letters, but they don’t have a way to remove those letters if they exist.

Fortunately, we can fill that gap with an extension on `String` that combines `hasPrefix()` with `dropFirst()`, which will check whether the prefix exists and remove it in one go:

```swift
extension String {
    func deletingPrefix(_ prefix: String) -> String {
        guard self.hasPrefix(prefix) else { return self }
        return String(self.dropFirst(prefix.count))
    }
}
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-remove-cells-from-a-uitableview">How to remove cells from a UITableView 
/example-code/language/remove-all-instances-of-an-object-from-an-array">Remove all instances of an object from an array 
/example-code/language/how-to-remove-the-first-or-last-item-from-an-array">How to remove the first or last item from an array 
/quick-start/swiftui/how-to-add-and-remove-views-with-a-transition">How to add and remove views with a transition 
/example-code/language/how-to-remove-duplicate-items-from-an-array">How to remove duplicate items from an array</a>
-->

:::

---

<TagLinks />