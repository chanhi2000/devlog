---
lang: ko-KR
title: How to add multiple configurations to a ModelContainer
description: Article(s) > How to add multiple configurations to a ModelContainer
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
      content: Article(s) > How to add multiple configurations to a ModelContainer
    - property: og:description
      content: How to add multiple configurations to a ModelContainer
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-add-multiple-configurations-to-a-modelcontainer.html
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
  "title": "How to add multiple configurations to a ModelContainer | SwiftData by Example",
  "desc": "How to add multiple configurations to a ModelContainer",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-add-multiple-configurations-to-a-modelcontainer", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

For more advanced SwiftData setups, it’s possible to send multiple model configurations into a single model container, giving you fine-grained control over how each part of your schema is manipulated.

::: important

SwiftData models with relationships *must* be part of the same store. For example, if a `User` model has a relationship with a `Recipe` model, SwiftData will not let you create a configuration for one that excludes the other – even if you exclude one, it will implicitly be added by SwiftData. To be clear, relationships *cannot* span multiple SwiftData stores.

:::

For example, you might want to store `Recipe` objects permanently, but download `Comment` objects into a temporary store for faster access:

```swift
@main
struct RecipeBookApp: App {
    var container: ModelContainer

    init() {
        do {
            let config1 = ModelConfiguration(for: Recipe.self)
            let config2 = ModelConfiguration(for: Comment.self, isStoredInMemoryOnly: true)

            container = try ModelContainer(for: Recipe.self, Comment.self, configurations: config1, config2)
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

Again, if those two model types were linked through a relationship, SwiftData would have no choice but to load both types in both configurations.

---

<TagLinks />