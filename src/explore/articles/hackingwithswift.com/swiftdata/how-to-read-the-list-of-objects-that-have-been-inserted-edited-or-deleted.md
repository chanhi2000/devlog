---
lang: ko-KR
title: How to check whether a SwiftData model object has been deleted
description: Article(s) > How to check whether a SwiftData model object has been deleted
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
      content: Article(s) > How to check whether a SwiftData model object has been deleted
    - property: og:description
      content: How to check whether a SwiftData model object has been deleted
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-read-the-list-of-objects-that-have-been-inserted-edited-or-deleted.html
prev: /explore/articles/hackingwithswift.com/swiftdata/how-to-use-swiftdata-to-store-singletons.md
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
  "title": "How to check whether a SwiftData model object has been deleted | SwiftData by Example",
  "desc": "How to check whether a SwiftData model object has been deleted",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-read-the-list-of-objects-that-have-been-inserted-edited-or-deleted", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftData can get confused if you accidentally attempt to insert the same object instance twice, which can sometimes happen when working with relationships. To avoid problems, you can check one of three properties in your model context to see exactly what data has been changed since the last save:

- Read `insertedModelsArray` to see which model objects have been created.
- Read `changedModelsArray` to see which model objects have been edited.
- Read `deletedModelsArray` to see which model objects have been deleted, or read `isDeleted` directly on a model object.

Each of these have equivalents in Core Data's `NSManagedObject`: `isInserted`, `isUpdated`, or `isDeleted`.

Alternatively, you can read the `hasChanges` property of a model object, which will be true if the object has been inserted, deleted, or edited since the last save.

---

<TagLinks />