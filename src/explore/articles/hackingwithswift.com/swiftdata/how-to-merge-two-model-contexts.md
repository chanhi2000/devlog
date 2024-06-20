---
lang: ko-KR
title: How to merge two model contexts
description: Article(s) > How to merge two model contexts
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
      content: Article(s) > How to merge two model contexts
    - property: og:description
      content: How to merge two model contexts
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-merge-two-model-contexts.html
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
  "title": "How to merge two model contexts | SwiftData by Example",
  "desc": "How to merge two model contexts",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-merge-two-model-contexts", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

One of the very first questions I had about SwiftData was “how do you merge two `ModelContext` objects?” The answer is you can’t – or at least not directly, in the same way we would have merged two `NSManagedObjectContext` instances. Instead, the best we can do is spin off a new model context from a model container, make changes there, then save those changes back into the container when you’re ready.

::: tip

This solution works, but SwiftUI often screws up its animations. This isn’t ideal, and I have yet to find a workaround for it, so if you have a better idea please let me know!

:::

To demonstrate merging using this workaround, we first need a trivial data model to work with:

```swift
@Model
class Issue {
    var name: String

    init(name: String) {
        self.name = name
    }
}
```

Second, we need a `ContentView` that is able to create some sample data, then navigate to edit a single `Issue` when it’s selected.

::: important

On selection, this needs to show your editing view using the `id` property of the object to edit, alongside your model container so you can load it in the separate model context. This is a process sometimes called *rehydrating* the object: we don't want to share a single model object across two model contexts, so instead we pass the identifier and load it separately in our new context.

Here’s an example `ContentView` doing that:

```swift
struct ContentView: View {
    @Environment(\.modelContext) var modelContext
    @Query(sort: \Issue.name) var issues: [Issue]

    var body: some View {
        NavigationStack {
            List(issues) { issue in
                NavigationLink(value: issue) {
                    Text(issue.name)
                }
            }
            .navigationDestination(for: Issue.self) { issue in
                EditingView(issueID: issue.id, in: modelContext.container)
            }
            .navigationTitle("Discarding Test")
            .toolbar {
                Button("Create Samples", action: createSamples)
            }
        }
    }

    // Creates 10 sample issues
    func createSamples() {
        _ = try? modelContext.delete(model: Issue.self)

        for i in 1...10 {
            let issue = Issue(name: "Issue \(i)")
            modelContext.insert(issue)
        }

        try? modelContext.save()
    }
}
```

And now for the important part: we need an `EditingView` that accepts an object ID and a model container, spins up its own local model context with autosave disabled, and loads the editing object using that context.

```swift
struct EditingView: View {
    @Environment(\.dismiss) var dismiss
    @Bindable var issue: Issue

    var modelContext: ModelContext

    // Create a local context, then load the issue that was requested or use a default if it can't be found.
    init(issueID: PersistentIdentifier, in container: ModelContainer) {
        modelContext = ModelContext(container)
        modelContext.autosaveEnabled = false
        issue = modelContext.model(for: issueID) as? Issue ?? Issue(name: "New Issue")
    }

    var body: some View {
        Form {
            TextField("Edit the name", text: $issue.name)
        }
        .toolbar {
            Button("Discard") {
                // Exit without saving.
                dismiss()
            }

            Button("Save") {
                // Save then exit.
                try? modelContext.save()
                dismiss()
            }
        }
    }
}
```

Using this approach means we have isolated all changes made in `EditingView` inside its local context, meaning that we can either exit without saving or merge those changes back into the main model container.

So, it *doesn’t* solve the problem of merging one context into another, but at least it gives us something close!

---

<TagLinks />