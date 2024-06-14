---
lang: ko-KR
title: Migrating from Core Data to SwiftData
description: Article(s) > Migrating from Core Data to SwiftData
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
      content: Article(s) > Migrating from Core Data to SwiftData
    - property: og:description
      content: Migrating from Core Data to SwiftData
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/migrating-from-core-data-to-swiftdata.html
date: 2023-09-17
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
  "title": "Migrating from Core Data to SwiftData | SwiftData by Example",
  "desc": "Migrating from Core Data to SwiftData",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/migrating-from-core-data-to-swiftdata", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you’ve used Core Data before, many of the classes and concepts you know and love map pretty much directly to their SwiftData equivalents, albeit with simpler names and always without the `NS` prefix.

Here’s a list to get you started, with Core Data names followed by SwiftData names:

- `NSPersistentContainer`: `ModelContainer`
- `NSPersistentCloudKitContainer`: `ModelContainer` with iCloud enabled.
- `NSManagedObjectContext`: `ModelContext`
- `NSManagedObject`: the `PersistentModel` protocol and `@Model` macro
- `NSPredicate`: the `#Predicate` macro
- `NSFetchRequest`: `FetchRequest`
- `NSFetchDescriptor`: `FetchDescriptor`
- `NSCompoundPredicate`: Has no equivalent yet
- `NSSortDescriptor`: `SortDescriptor`
- `NSMigrationStage`: `MigrationStage`
- `NSEntityMigrationPolicy`: `SchemaMigrationPlan`

Most notably, Xcode’s model editor is no longer needed now – it’s all code.

---

<TagLinks />