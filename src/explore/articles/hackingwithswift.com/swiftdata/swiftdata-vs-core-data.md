---
lang: ko-KR
title: SwiftData vs Core Data
description: Article(s) > SwiftData vs Core Data
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
      content: Article(s) > SwiftData vs Core Data
    - property: og:description
      content: SwiftData vs Core Data
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/swiftdata-vs-core-data.html
date: 2023-09-22
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
  "title": "SwiftData vs Core Data | SwiftData by Example",
  "desc": "SwiftData vs Core Data",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/swiftdata-vs-core-data", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Although SwiftData builds on top of Core Data, not all the functionality has been exposed for us to use. This means quite a few major Core Data features are not yet supported for developers working exclusively in SwiftData, including:

1. We don’t have an equivalent of `NSCompoundPredicate`, for creating complex, multi-step predicates.
2. We don’t have an equivalent of `NSFetchedResultsController`, for executing then monitoring queries for changes.
3. There is no support for derived attributes, so things like an automatic `lastUpdated` property aren’t possible.
4. There are no sectioned fetched requests.
5. SwiftData does not support abstract classes or child contexts.
6. Or pinning to a specific query generation.

Everyone will have different priorities for those features, but for me missing the first two is *hard*. Hopefully we’ll see SwiftData continue to improve rapidly over time, until we eventually reach full parity with Core Data.

You should also keep in mind that SwiftData is extremely new, whereas Core Data has been in constant development for about 20 years. This means you’re likely to hit edge cases and surprises on a fairly frequent basis, and I think it’s fair to say that SwiftData has more sharp edges than a porcupine’s dance party. Do things exactly right and you’ll be happy, but a lot of the time you’ll find yourself staring at a crash wondering which small but apparently critical mistake you made.

Don’t despair – it will get better! In the meantime, please watch out for the many things marked **Important** or **Tip** in this guide; I’ve gone through the pain for you, so please save yourself the hassle and learn from that pain rather than repeating it.

---

<TagLinks />