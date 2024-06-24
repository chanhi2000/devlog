---
lang: ko-KR
title: How to discard changes to a SwiftData object
description: Article(s) > How to discard changes to a SwiftData object
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
      content: Article(s) > How to discard changes to a SwiftData object
    - property: og:description
      content: How to discard changes to a SwiftData object
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-discard-changes-to-a-swiftdata-object.html
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
  "title": "How to discard changes to a SwiftData object | SwiftData by Example",
  "desc": "How to discard changes to a SwiftData object",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-discard-changes-to-a-swiftdata-object", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftData makes it easy to pass an object between various parts of your app, and have changes made in one place automatically be reflected elsewhere: just create an editing view with your model object as `@Bindable`, and SwiftData takes care of the rest.

However, it's a little trickier when you want the user to be able to save or discard their changes in an editing view, because SwiftData will automatically synchronize changes as soon as they happen.

The problem happens because SwiftData doesn't have the concept of a child context, so we can't make some isolated changes then merge them upwards only when needed. Instead, the best solution I've found is to create a peer context from the same container, pass in your model object's ID to your detail view, then load it there using the new context with autosave disabled. 

::: tip

This solution works, but I've found it causes SwiftUI to screw up its list deselection animation when returning to the parent view – the row you were editing stays highlighted. I have yet to find a workaround for this, so if you have a better idea please let me know!

:::

Let me walk you the solution I use. First, here's an example data model

```swift
@Model
class Issue {
    var name: String

    init(name: String) {
        self.name = name
    }
}
```

Second, we need a `ContentView` that can show issue data and navigate to edit a single `Issue` when it’s selected.

Remember, we don't pass the actual issue into the editing view, because it will exist on our default model context with autosave enabled. Instead, we pass in our existing container along with the `Issue` identifier, so we can create a fresh context in the editing view and load the `Issue` object there.

This is a process sometimes called *rehydrating* the object: we can’t share a single model object across two model contexts, so instead we pass the identifier and load it separately in our new context.

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
            .navigationTitle("Discardable Editing")
        }
    }
}
```

Now for the important part: an `EditingView` that accepts an object ID along with our shared model container. It will then create its own local model context that disables autosave, loading the editing object using that context.

```swift
struct EditingView: View {
    @Environment(\.dismiss) var dismiss
    @Bindable var issue: Issue

    var modelContext: ModelContext

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
                dismiss()
            }

            Button("Save") {
                try? modelContext.save()
                dismiss()
            }
        }
    }
}
```

As you can see, that exits the view without saving when "Discard" is pressed, which means all the local edits to the object aren't synchronized with the original context – they just get tossed away, because the local context is discarded without saving.

In my various projects I've found this to be the simplest way of handling discardable editing of SwiftData objects, but if you have a better solution I'd love to hear it!

---

<TagLinks />