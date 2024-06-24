---
lang: ko-KR
title: How SwiftData works with Swift concurrency
description: Article(s) > How SwiftData works with Swift concurrency
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
      content: Article(s) > How SwiftData works with Swift concurrency
    - property: og:description
      content: How SwiftData works with Swift concurrency
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-swiftdata-works-with-swift-concurrency.html
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
  "title": "How SwiftData works with Swift concurrency | SwiftData by Example",
  "desc": "How SwiftData works with Swift concurrency",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-swiftdata-works-with-swift-concurrency", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftData has fairly simple rules with Swift's concurrency system, and the absolute least you need to know is that `ModelContainer` and `PersistentIdentifier` are both sendable, whereas model objects and model contexts are not.

::: tip

I highly recommend you enable Xcode's complete concurrency checking. This means going to your target's build settings and setting Strict Concurrency Checking to Complete, so Xcode flags data races as warnings or errors.

:::

Beyond those basics, there are a handful of specific things to know:

- You can create many `ModelContext` instances from a single, shared `ModelContainer`, across any number of actors. The correct approach is to send your model container into your actor, then create a local model context there.
- When you want to transfer a model object from one actor to another, you should send its `id` property (a `PersistentIdentifier` instance) then load it locally on the other actor. Do not attempt to send a model instance directly between actors.
- If you create a model context inside a `Task`, you *must* call `save()` explicitly in order to write your chance, even when autosave is enabled for that context – autosave may not have a chance to run before the context is discarded.
- All SwiftData calls happen synchronously with the exception of `enumerate()`, which uses a callback for individual objects. This means SwiftData only ever works with data that is synced to your local data store, even when there are further changes waiting in iCloud.
- If you're using SwiftData with MVVM, `@Observable` does not automatically imply `@MainActor`. While you *can* update your SwiftUI views from an `@Observable` object running on a background actor, chances are your animations won't work quite right. I'd suggest using `@Observable @MainActor` to avoid this problem.

---

<TagLinks />