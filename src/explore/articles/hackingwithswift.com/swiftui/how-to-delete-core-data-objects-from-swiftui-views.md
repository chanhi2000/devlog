---
lang: ko-KR
title: How to delete Core Data objects from SwiftUI views
description: Article(s) > How to delete Core Data objects from SwiftUI views
category:
  - Swift
  - SwiftUI
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swiftui
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to delete Core Data objects from SwiftUI views
    - property: og:description
      content: How to delete Core Data objects from SwiftUI views
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-delete-core-data-objects-from-swiftui-views.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
   "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to delete Core Data objects from SwiftUI views | SwiftUI by Example",
  "desc": "How to delete Core Data objects from SwiftUI views",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-delete-core-data-objects-from-swiftui-views",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Deleting Core Data objects in SwiftUI is mostly the same as deleting them in UIKit, although there are a couple of special hoops to jump through to integrate with SwiftUI’s views.

If you followed my [Core Data and SwiftUI set up instructions](/explore/articles/hackingwithswift.com/swiftui/how-to-configure-core-data-to-work-with-swiftui.md), you’ve already injected your managed object context into the SwiftUI environment.

Once you have your managed object context, make it available to your SwiftUI view as a property like this one:

```swift
@Environment(\.managedObjectContext) var managedObjectContext
```

Next, create a fetch request that reads some data from your managed object context. In my example setup there’s a `ProgrammingLanguage` entity, so we can read out all items like this:

```swift
@FetchRequest(
    sortDescriptors: [
        SortDescriptor(\.name)
    ]
) var languages: FetchedResults<ProgrammingLanguage>
```

Third, add an `onDelete` modifier to your SwiftUI view, wherever you’re showing your data. For example, using the above fetch request you might create a list using `ForEach`, like this:

```swift
List {
    ForEach(languages) { language in
        Text("Creator: \(language.creator ?? "Anonymous")")
    }
    .onDelete(perform: removeLanguages)
}
```

Finally, add the `removeLanguages()` method to your SwiftUI view. This should accept an `IndexSet`, which is a collection of unique integer indexes that should be deleted:

```swift
func removeLanguages(at offsets: IndexSet) {
    for index in offsets {
        let language = languages[index]
        managedObjectContext.delete(language)
    }
}
```

You might want to save your Core Data context at this point, in which case after the `for` loop finishes add something like this:

```swift
do {
    try managedObjectContext.save()
} catch {
    // handle the Core Data error
}
```

Or if you’re using my `PersistenceController` setup code, use this:

```swift
PersistenceController.shared.save()
```

Just adding an `onDelete()` modifier is enough to get swipe to delete on your table rows, but if you also want an Edit/Done button to toggle editing mode you should add this modifier to whatever is directly inside your `NavigationStack`:

```swift
.toolbar {
    EditButton()
}
```

::: details Similar solutions…

```component VPCard
{
  "title": "Observable objects, environment objects, and @Published | SwiftUI by Example",
  "desc": "Observable objects, environment objects, and @Published",
  "link": "/explore/articles/hackingwithswift.com/swiftui/observable-objects-environment-objects-and-published.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add Core Data objects from SwiftUI views | SwiftUI by Example",
  "desc": "How to add Core Data objects from SwiftUI views",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-add-core-data-objects-from-swiftui-views.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let users delete rows from a list | SwiftUI by Example",
  "desc": "How to let users delete rows from a list",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-let-users-delete-rows-from-a-list.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Adding swipe to delete and EditButton | SwiftUI by Example",
  "desc": "Adding swipe to delete and EditButton",
  "link": "/explore/articles/hackingwithswift.com/swiftui/adding-swipe-to-delete-and-editbutton.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />