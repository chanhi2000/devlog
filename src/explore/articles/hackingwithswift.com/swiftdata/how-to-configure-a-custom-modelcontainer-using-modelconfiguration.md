---
lang: ko-KR
title: How to configure a custom ModelContainer using ModelConfiguration
description: Article(s) > How to configure a custom ModelContainer using ModelConfiguration
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
      content: Article(s) > How to configure a custom ModelContainer using ModelConfiguration
    - property: og:description
      content: How to configure a custom ModelContainer using ModelConfiguration
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-configure-a-custom-modelcontainer-using-modelconfiguration.html
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
  "title": "How to configure a custom ModelContainer using ModelConfiguration | SwiftData by Example",
  "desc": "How to configure a custom ModelContainer using ModelConfiguration",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-configure-a-custom-modelcontainer-using-modelconfiguration", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 16

When you use `modelContainer(for:)` you get a default configuration, which means SwiftData decides where your database is stored, enables autosave, disables undo, and more. You can override some of these by using overloads of the `modelContainer()` modifier, but for complete control you need to create a `ModelConfiguration` instance by hand, then use that to create your container.

For example, if you wanted to write to an exact file in your documents directory rather than the default location, you would use code like this:

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

One big advantage to creating your configuration by hand is that it allows us to disable saving entirely – if you have particularly sensitive data, or perhaps you’ve shipped some template data that shouldn’t be changed under any circumstances.

You can disable saving like this:

```swift
let config = ModelConfiguration(allowsSave: false)
```

The `ModelConfiguration` initializers expose most of the options you can use with `ModelContext`, including schema, CloudKit containers, and more. For example, you could create a configuration that loads specific model types, writes to a custom database file, and connects to a particular CloudKit database name, like this:

```swift
let storeURL = URL.documentsDirectory.appending(path: "database.sqlite")
let schema = Schema([Recipe.self, User.self])
let config = ModelConfiguration(schema: schema, url: storeURL, cloudKitDatabase: .private("pastalavista"))
container = try ModelContainer(for: schema, configurations: config)
```

The power of this approach is that you can use multiple `ModelConfiguration` objects to configure a single model container – perhaps you want recipe data to be stored in one file and user data to be stored in another, or perhaps one should back up to CloudKit whereas the other shouldn’t.

::: important

Irrespective of which set of configurations you use, you must still make sure you send the full list of model types to your `ModelContainer` initializer, either explicitly by listing them all or implicitly through relationships.

:::

---

<TagLinks />