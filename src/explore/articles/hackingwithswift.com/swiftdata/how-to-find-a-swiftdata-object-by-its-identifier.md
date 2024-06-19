---
lang: ko-KR
title: How to find a SwiftData object by its identifier
description: Article(s) > How to find a SwiftData object by its identifier
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
      content: Article(s) > How to find a SwiftData object by its identifier
    - property: og:description
      content: How to find a SwiftData object by its identifier
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-find-a-swiftdata-object-by-its-identifier.html
prev: /explore/articles/hackingwithswift.com/swiftdata/how-to-add-minimum-and-maximum-constraints-to-relationships.md
date: 2023-10-31
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
  "title": "How to find a SwiftData object by its identifier | SwiftData by Example",
  "desc": "How to find a SwiftData object by its identifier",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-find-a-swiftdata-object-by-its-identifier", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Rather annoyingly this will cause a crash if your persistent identifier is invalid, so I prefer to use the `registeredModel(for:)` variant that only returns an object if it exists in the current model context. (Of course, that has its own problems because your model context likely only contains a subset of all the objects in your container!)

---

<TagLinks />