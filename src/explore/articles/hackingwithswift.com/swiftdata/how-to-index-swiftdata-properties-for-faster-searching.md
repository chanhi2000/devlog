---
lang: ko-KR
title: How to index SwiftData properties for faster searching
description: Article(s) > How to index SwiftData properties for faster searching
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
      content: Article(s) > How to index SwiftData properties for faster searching
    - property: og:description
      content: How to index SwiftData properties for faster searching
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-index-swiftdata-properties-for-faster-searching.html
next: /explore/articles/hackingwithswift.com/swiftdata/inferred-vs-explicit-relationships.md
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
  "title": "How to index SwiftData properties for faster searching | SwiftData by Example",
  "desc": "How to index SwiftData properties for faster searching",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-index-swiftdata-properties-for-faster-searching", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Core Data allowed us to create indexes for faster searching, so rather than having to look through every row for a particular piece of data it could just consult the index and get the answer in a fraction of the time.

**SwiftData does not support custom indexes.**

They just aren't a thing, at least not yet. Obviously I'm hoping this will change soon because indexes are critically important when dealing with large data sets.

Fingers crossed…

---

<TagLinks />