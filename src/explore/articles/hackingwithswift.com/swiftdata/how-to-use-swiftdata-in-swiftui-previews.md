---
lang: ko-KR
title: How to use SwiftData in SwiftUI previews
description: Article(s) > How to use SwiftData in SwiftUI previews
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
      content: Article(s) > How to use SwiftData in SwiftUI previews
    - property: og:description
      content: How to use SwiftData in SwiftUI previews
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-use-swiftdata-in-swiftui-previews.html
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
  "title": "How to use SwiftData in SwiftUI previews | SwiftData by Example",
  "desc": "How to use SwiftData in SwiftUI previews",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-use-swiftdata-in-swiftui-previews", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftData makes basic Xcode previews trivial, because they work immediately as long as you don't try to insert any data – any properties created using the `@Query` macro will quietly return no results. However, if you want some sample model data you need to tread a little more carefully, including creating your data using an in-memory data store.

As an example, here's a trivial `User` model with a small SwiftUI that accepts a user to edit:

```swift
@Model
class User {
    var name: String

    init(name: String) {
        self.name = name
    }
}

struct EditingView: View {
    @Environment(\.modelContext) var modelContext
    @Bindable var user: User

    var body: some View {
        Form {
            TextField("Name", text: $user.name)
        }
    }
}
```

In order to create a sample `User` for your preview, you must create a custom `ModelConfiguration` that stores data in memory only, use that to create a `ModelContainer` for the `User` model, then finally create your sample data and send it into your view.

Creating a `ModelContainer` can throw errors, but as this is a preview I think you're safe using `try!` here:

```swift
#Preview {
    let config = ModelConfiguration(isStoredInMemoryOnly: true)
    let container = try! ModelContainer(for: User.self, configurations: config)

    let user = User(name: "Test User")
    return EditingView(user: user)
        .modelContainer(container)
}
```

::: important

If you attempt to create a model object without first having created a container for that object, your preview will crash. If you do all that and don't use the `modelContainer()` modifier to send your container into SwiftUI, running any code using the `\.modelContext` environment key will also crash your preview.

:::

If you want SwiftData to be able to query your objects, you should insert them into your in-memory context. For example, you might use a SwiftUI view with `@Query`, like this:

```swift
struct ContentView: View {
    @Query(sort: [SortDescriptor(\User.name, comparator: .localizedStandard)]) var users: [User]

    var body: some View {
        NavigationStack {
            List(users) { user in
                Text(user.name)
            }
        }
    }
}
```

That query won't detect any SwiftData objects unless you have specifically inserted them into the context, so your preview should look like this:

```swift
#Preview {
    let config = ModelConfiguration(isStoredInMemoryOnly: true)
    let container = try! ModelContainer(for: User.self, configurations: config)

    for i in 1..<10 {
        let user = User(name: "Example User \(i)")
        container.mainContext.insert(user)
    }

    return ContentView()
        .modelContainer(container)
}
```

Just as with Core Data, it's usually a good idea to set up some kind of standard `preview` singleton you can work with in many views – something that creates the in-memory configuration, creates a container from it using whatever types are in your project, then inserts some standard sample data.

For example, you might do this:

```swift
@MainActor
class DataController {
    static let previewContainer: ModelContainer = {
        do {
            let config = ModelConfiguration(isStoredInMemoryOnly: true)
            let container = try ModelContainer(for: User.self, configurations: config)

            for i in 1...9 {
                let user = User(name: "Example User \(i)")
                container.mainContext.insert(user)
            }

            return container
        } catch {
            fatalError("Failed to create model container for previewing: \(error.localizedDescription)")
        }
    }()
}
```

---

<TagLinks />