---
lang: ko-KR
title: How to count results without loading them
description: Article(s) > How to count results without loading them
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
      content: Article(s) > How to count results without loading them
    - property: og:description
      content: How to count results without loading them
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-count-results-without-loading-them.html
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
  "title": "How to count results without loading them | SwiftData by Example",
  "desc": "How to count results without loading them",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-count-results-without-loading-them", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

A regular SwiftData query loads all matchings objects into memory for immediate use, but sometimes you don't actually need the data because you just want to show how many matches there were.

For times like this, you should use the `fetchCount()` method of your model context. This returns how many objects matches your predicate without loading those objects into memory, which means it executes several orders of magnitude faster and uses almost no memory.

As an example, if you wanted to know how many employees had a salary over $100,000 you should prefer to write this:

```swift
let descriptor = FetchDescriptor<Employee>(predicate: #Predicate { $0.salary > 100_000 })
let count = (try? modelContext.fetchCount(descriptor)) ?? 0
```

That does the entire counting in the database, wasting no time or memory.

In contrast, using a regular fetch *then* performing a count loads all the objects into memory for no real reason. So, this kind of code is a bad idea:

```swift
let descriptor = FetchDescriptor<Employee>(predicate: #Predicate { $0.salary > 100_000 })
let objects = (try? modelContext.fetch(descriptor)) ?? []
let count = objects.count
```

---

<TagLinks />