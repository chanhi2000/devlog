---
lang: ko-KR
title: How to index SwiftData objects in Spotlight
description: Article(s) > How to index SwiftData objects in Spotlight
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
      content: Article(s) > How to index SwiftData objects in Spotlight
    - property: og:description
      content: How to index SwiftData objects in Spotlight
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-index-swiftdata-objects-in-spotlight.html
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
  "title": "How to index SwiftData objects in Spotlight | SwiftData by Example",
  "desc": "How to index SwiftData objects in Spotlight",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-index-swiftdata-objects-in-spotlight", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

The `@Attribute` macro has a `.spotlight` option that, on paper at least, automatically indexes a property in Spotlight. If you look at other folks writing about this attribute that’s what they’ll say, but as far as I can tell this attribute does *nothing at all*.

If you actually *try* it you’ll see for yourself that it does nothing: the data is stored in a regular SQLite database, and isn’t magically visible to Spotlight searches.

In Core Data we were able to use `NSCoreDataCoreSpotlightDelegate` to trigger spotlight indexing of Spotlight-enabled data, but this is not currently an option for SwiftData apps.

Maybe I’m just “holding it wrong”, but if you’ve found a solution please let me know!

In the meantime, your only option is to use a Core Data coexistence solution and use `NSCoreDataCoreSpotlightDelegate` as before to index your data.

---

<TagLinks />