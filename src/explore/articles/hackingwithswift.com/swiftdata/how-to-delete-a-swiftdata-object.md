---
lang: ko-KR
title: How to delete a SwiftData object
description: Article(s) > How to delete a SwiftData object
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
      content: Article(s) > How to delete a SwiftData object
    - property: og:description
      content: How to delete a SwiftData object
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-delete-a-swiftdata-object.html
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
  "title": "How to delete a SwiftData object | SwiftData by Example",
  "desc": "How to delete a SwiftData object",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-delete-a-swiftdata-object", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Deleting a SwiftData object takes two steps: calling `delete()` on your model context, passing in the object you want to delete, then saving the changes, either with an explicit call to `save()` or waiting for the autosave to trigger if you have it enabled.

So, for single objects you’d write code like this:

```swift
List(students) { student in
    Text(student.name)
        .swipeActions {
            Button("Delete", systemImage: "trash", role: .destructive) {
                modelContext.delete(student)
            }
        }
}
```

If you were working with a collection of objects, you’d need a `for` loop like this one:

```swift
func delete(_ indexSet: IndexSet) {
    for i in indexSet {
        let student = students[i]
        modelContext.delete(student)
    }
}
```

If you want to delete *all* objects of a particular model type, you should use the `delete(model:)` overload, like this:

```swift
do {
    try modelContext.delete(model: School.self)
} catch {
    print("Failed to delete all schools.")
}
```

And if you want to delete only a subset of objects, you should use `delete(model:)` with a predicate, like this:

```swift
try modelContext.delete(model: School.self, where: #Predicate { school in
    school.students.isEmpty
})
```

::: important

Calling `delete()` marks your object for deletion, but doesn’t actually complete the deletion until a save happens. Between those two states your object is stored in the `deletedModelsArray` of your property, and if the deletion is rolled back the object will be moved back from `deletedModelsArray` to your live data. Alternatively, if you have autosave disabled and don’t call `save()` manually, your deletions will automatically be rolled back.

:::

If you’re deleting an object that has relationships, SwiftData will act on those relationships as part of the deletion – that’s the `.nullify` delete rule by default, but you might also have requested `.cascade` or one of the others. If you have a cascade delete in place, SwiftData will automatically continue the cascade down through all objects in a chain: deleting a `School` might delete all its students, and deleting students might delete all their exam results, for example.

---

<TagLinks />