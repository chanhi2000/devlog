---
lang: ko-KR
title: How to delete all instances of a particular model
description: Article(s) > How to delete all instances of a particular model
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
      content: Article(s) > How to delete all instances of a particular model
    - property: og:description
      content: How to delete all instances of a particular model
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-delete-all-instances-of-a-particular-model.html
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
  "title": "How to delete all instances of a particular model | SwiftData by Example",
  "desc": "How to delete all instances of a particular model",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-delete-all-instances-of-a-particular-model", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftData’s `ModelContext` class has a dedicated `delete(model:)` method that removes from your context all instances of a particular model. Once a save is triggered, either manually or using autosave, the objects will be deleted from disk too.

For example, if we had a `Student` model we could delete all its instances like this:

```swift
do {
    try modelContext.delete(model: Student.self)
} catch {
    print("Failed to delete students.")
}
```

If you want only *some* of your model instances to be deleted, provide a predicate to the `where` parameter like this. For example, if we wanted to delete all schools that don’t have any active students, we’d write this:

```swift
try modelContext.delete(model: School.self, where: #Predicate { $0.students.isEmpty })
```

::: tip

Technically the `delete(model:)` method has an overload that allows an `includeSubclasses` Boolean to be passed in. As far as I can tell this is impossible to use, because SwiftData models cannot be subclassed at the time of writing.

:::

---

<TagLinks />