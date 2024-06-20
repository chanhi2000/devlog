---
lang: ko-KR
title: How to get natural string sorting for SwiftData queries
description: Article(s) > How to get natural string sorting for SwiftData queries
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swiftdata
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to get natural string sorting for SwiftData queries
    - property: og:description
      content: How to get natural string sorting for SwiftData queries
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-get-natural-string-sorting-for-swiftdata-queries.html
date: 2023-09-30
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftData by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftdata/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to get natural string sorting for SwiftData queries | SwiftData by Example",
  "desc": "How to get natural string sorting for SwiftData queries",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-get-natural-string-sorting-for-swiftdata-queries", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you sort strings using the default ordering, you'll get sorting like this: User 1, User 10, User 100, User 11, User 2, User 3, User 4, and so on – it will sort the numbers based on their string contents, rather than their numerical values.

A smarter, more natural option is to use Finder-style sorting, which correctly sorts strings based on any text prefix ("User"), followed by any numerical values. So, we'd get User 1, User 2, User 3, etc, up to User 9, then User 10, User 11, and so on.

To do this with SwiftData, create a `SortDescriptor` using the `.localizedStandard` comparator. For example, if you were using the `@Query` macro you'd write something like this:

```swift
@Query(sort: [SortDescriptor(\User.name, comparator: .localizedStandard)]) var users: [User]
```

It's such a small change, but makes for much more user-friendly sorting!

---

<TagLinks />