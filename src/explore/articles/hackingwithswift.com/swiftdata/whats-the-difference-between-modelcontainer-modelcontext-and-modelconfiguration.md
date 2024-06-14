---
lang: ko-KR
title: What's the difference between ModelContainer, ModelContext, and ModelConfiguration?
description: Article(s) > What's the difference between ModelContainer, ModelContext, and ModelConfiguration?
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
      content: Article(s) > What's the difference between ModelContainer, ModelContext, and ModelConfiguration?
    - property: og:description
      content: What's the difference between ModelContainer, ModelContext, and ModelConfiguration?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/whats-the-difference-between-modelcontainer-modelcontext-and-modelconfiguration.html
date: 2023-09-31
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
  "title": "What's the difference between ModelContainer, ModelContext, and ModelConfiguration? | SwiftData by Example",
  "desc": "What's the difference between ModelContainer, ModelContext, and ModelConfiguration?",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/whats-the-difference-between-modelcontainer-modelcontext-and-modelconfiguration", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftData has three important classes with similar names but very different functionality:

- `ModelContainer` is responsible for creating and managing the actual database file used for all SwiftData’s storage needs.
- `ModelContext` has the job of tracking all objects that have been created, modified, and deleted in memory, so they can all be saved to the model container at some later point.
- `ModelConfiguration` determines how and where data is stored, including which CloudKit container to use if any, and whether saving should be enabled or not. This configuration is provided to your model container to determine how it behaves.

Every app that uses SwiftData needs to have at least one model container, so that the system knows where to read and write data. This container is usually placed on permanent storage (an iPhone’s SSD, for example), but might also be stored in memory so that it automatically gets cleared when the app terminates. If you’ve used Core Data previously, this is the same as the `NSPersistentContainer`.

But not everything needs to be on disk at once. In fact, if we were always reading and writing every piece of data we were using, performance would be terrible. Instead, SwiftData prefers to read data from storage into memory then use it from there: when we load data using `@Query` or similar, it gets stored in this model context for fast access. We can then make a whole bunch of changes, and have them saved out to storage in one pass – it’s a lot more efficient. Model contexts provide some extra functionality that is often useful, including the ability to undo or redo changes, and the ability to enable or disable autosave. If you’ve used Core Data previously, this is the same as `NSManagedObjectContext`.

So, the model context stores all the in-memory objects and changes, and the model *container* stores it for long term.

Because all SwiftData apps must have at least one model container, you’ll usually have code like this somewhere in your main `App` struct:

```swift
.modelContainer(for: YourModel.self)
```

That *also* creates a model context for us called the *main context*, and it places that context into SwiftUI’s environment for us to use. This main context always runs on Swift’s main actor, so it’s safe to use from our user interface.

::: important

Model containers can be passed freely around your program, but model contexts must stay on the thread that created them.

:::

We can read this back out from the environment using SwiftUI’s `@Environment` property wrapper by adding code like this to any view where we need the context:

```swift
@Environment(\.modelContext) var modelContext
```

This same context is automatically used by `@Query` in your SwiftUI views.

---

<TagLinks />