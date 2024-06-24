---
lang: ko-KR
title: How to use SwiftData to store singletons
description: Article(s) > How to use SwiftData to store singletons
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
      content: Article(s) > How to use SwiftData to store singletons
    - property: og:description
      content: How to use SwiftData to store singletons
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-use-swiftdata-to-store-singletons.html
next: /explore/articles/hackingwithswift.com/swiftdata/how-to-read-the-list-of-objects-that-have-been-inserted-edited-or-deleted.md
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
  "title": "How to use SwiftData to store singletons | SwiftData by Example",
  "desc": "How to use SwiftData to store singletons",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-use-swiftdata-to-store-singletons", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Given how easy SwiftData makes data storage, you’re likely to be tempted to want to use it for general app storage such as settings and more. However, this takes a little more work because the `@Query` macro is designed to return collections of model objects rather than a single instance.

They here is to create a custom fetch request to read the whole collection of results, then simply return the first one to get your data, or create a fresh instance if there was nothing already saved.

As an example, we might have an `AppSettings` model such as this one:

```swift
@Model class AppSettings {
    var name: String
    var location: String
    var selectedTopics: [String]

    init(name: String, location: String, selectedTopics: [String]) {
        self.name = name
        self.location = location
        self.selectedTopics = selectedTopics
    }
}
```

We could then load that either at app launch, or using `onAppear()` inside a root view such as this:

```swift
struct ContentView: View {
    @Environment(\.modelContext) var modelContext
    @State private var settings: AppSettings?

    var body: some View {
        NavigationStack {
            VStack {
                if let settings {
                    Text("Name: \(settings.name)")
                    Text("Location: \(settings.location)")
                    Text("Topics: \(settings.selectedTopics.formatted(.list(type: .and)))")
                } else {
                    Text("Loading…")
                }
            }
            .navigationTitle("Singletons")
            .onAppear(perform: load)
        }
    }

    func load() {
        let request = FetchDescriptor<AppSettings>()
        let data = try? modelContext.fetch(request)
        settings = data?.first ?? AppSettings(name: "Anonymous", location: "Unknown", selectedTopics: ["Latest News"])
    }
}
```

While this approach definitely works, it’s worth asking whether it’s the best option – would using a simple `Codable` type work better, for example? 

::: note

Although SwiftData supports working with document-based apps, it does not provide the document as a singleton inside there – you still need to issue a query for a collection of results.

:::

---

<TagLinks />