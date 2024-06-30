---
lang: ko-KR
title: How to change SwiftData’s underlying storage filename
description: Article(s) > How to change SwiftData’s underlying storage filename
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
      content: Article(s) > How to change SwiftData’s underlying storage filename
    - property: og:description
      content: How to change SwiftData’s underlying storage filename
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/how-to-change-swiftdatas-underlying-storage-filename.html
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
  "title": "How to change SwiftData’s underlying storage filename | SwiftData by Example",
  "desc": "How to change SwiftData’s underlying storage filename",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-change-swiftdatas-underlying-storage-filename", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 16

When you use `modelContainer(for:)` you get a default configuration, which means SwiftData decides where your database is stored. That might be in your application support directory, but might also be in a shared location if you’re using app groups. However, if you want a *custom* location, you need to create a `ModelConfiguration` instance by hand, then use that to create your container.

For example, if you wanted to write to an exact file in your documents directory rather than the default location of default.store, you would use code like this:

```swift
@main
struct RecipeBookApp: App {
    var container: ModelContainer

    init() {
        do {
            let storeURL = URL.documentsDirectory.appending(path: "database.sqlite")
            let config = ModelConfiguration(url: storeURL)
            container = try ModelContainer(for: Recipe.self, configurations: config)
        } catch {
            fatalError("Failed to configure SwiftData container.")
        }
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
        .modelContainer(container)
    }
}
```

This kind of custom location is helpful for when you’re working with an existing database, or perhaps if you want to read or write the database directly – something you *can* do if absolutely required, but should be done only with great caution.

---

<TagLinks />