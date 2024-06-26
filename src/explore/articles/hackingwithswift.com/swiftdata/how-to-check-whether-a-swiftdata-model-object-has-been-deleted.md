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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-check-whether-a-swiftdata-model-object-has-been-deleted.html
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
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-check-whether-a-swiftdata-model-object-has-been-deleted", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

All SwiftData model objects have an `isDeleted` property that determines whether it is deleted or not, but it needs to be used carefully.

First, when you ask your model context to delete an object, it is only *marked* for deletion. The actual deletion won't take place until the next save is triggered; in the meantime the object will still be around, just stored in the `deletedModelsArray` of your context. Objects marked for deletion but not yet *actually* deleted will still appear in results from `@Query`.

Second, if any part of your app retains a copy of a deleted model, `isDeleted` will appear `true` at first, but it may then flip back to `false` – even though the object itself has been deleted.

Third, if you don't have autosave enabled *and* any part of your app retains a copy of the deleted model, attempting to change any properties is likely to result in a crash because the underlying data has been destroyed.

Fourth, as a result of all these there's very little point trying to read the `isDeleted` in the `disabled()` SwiftUI view modifier – you might think it's helpful to disable a form if an object no longer exists, but in practice it's just a bit too quirky to rely upon.

---

<TagLinks />