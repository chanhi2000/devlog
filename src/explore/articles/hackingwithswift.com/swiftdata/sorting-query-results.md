---
lang: ko-KR
title: Sorting query results
description: Article(s) > Sorting query results
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
      content: Article(s) > Sorting query results
    - property: og:description
      content: Sorting query results
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/sorting-query-results.html
date: 2023-10-01
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
  "title": "Sorting query results | SwiftData by Example",
  "desc": "Sorting query results",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/sorting-query-results", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

<VidStack src="youtube/mqLDroFreFE" />

The easy way to sort your SwiftData queries is by passing extra options to the `@Query` macro.

For example, we might want to store destinations alphabetically by their name, so we'd

```swift
@Query(sort: \Destination.name)
```

Or we can sort by priority in descending order like this:

```swift
@Query(sort: \Destination.priority, order: .reverse) var destinations: [Destination]
```

That handles only one property, but so if you need more than one – if you want to sort by priority descending then name ascending, for example, you need to use a `SortDescriptor` array:

```swift
@Query(sort: [SortDescriptor(\Destination.priority, order: .reverse), SortDescriptor(\Destination.name)]) var destinations: [Destination]
```

You can have as many sort descriptors as you need in that array, and SwiftData will work through them one by one.

This approach works great when you know your sort order at compile time, but very often you want your user to be able to sort their data however they want.

This takes quite a bit more work, because properties created with `@Query` don't have any sort of simple `sortOrder` property we can use. Instead, you need to move your `@Query` property down one view in SwiftUI’s hierarchy – you need to put it into a subview where you can inject a sort using the view's initializer.

The first step is to make a new SwiftUI view called `DestinationListingView`, then giving it a SwiftData import line at the top. 

Next, we need to move some code from `ContentView` into `DestinationListingView`:

1. The `destinations` property.
2. The whole `List` into there, but not its modifiers.
3. The `deleteDestinations()` method.

You should also *copy* the `@Environment` property for `modelContext` into `DestinationListingView` – this should be copied rather than moved, because we need it in both places.

Finally, put `DestinationListingView` where the `List` was in `ContentView`, like this:

```swift
NavigationStack(path: $path) {
    DestinationListingView()
        .navigationDestination(for: Destination.self, destination: EditDestinationView.init)
        .navigationTitle("iTour")
        .toolbar {
            Button("Add Destination", systemImage: "plus", action: addDestination)
        }
}
```

All we've done is move the code around a little, which means the app will look identical when it runs. However, because `DestinationListingView` is a subview of `ContentView`, we’re now able to send values into there to control the SwiftData query.

This takes five steps in in total:

1. Making some storage to hold whatever is the user's current sort order.
2. Creating some UI to adjust that sort order based on the user’s settings.
3. Telling the `DestinationListingView` that it needs to be created with some kind of sort order.
4. Updating its preview to pass in an example sort order.
5. Passing the sort order into `DestinationListingView` when it’s created.

We’ll work through those step by step.

First, add this property to `ContentView`, which will contain the current sort order with a sensible default:

```swift
@State private var sortOrder = SortDescriptor(\Destination.name)
```

Second, we'll create a menu button in our toolbar that lets the user switch between sort orders. Add this to the toolbar in `ContentView`:

```swift
Menu("Sort", systemImage: "arrow.up.arrow.down") {
    Picker("Sort", selection: $sortOrder) {
        Text("Name")
            .tag(SortDescriptor(\Destination.name))

        Text("Priority")
            .tag(SortDescriptor(\Destination.priority, order: .reverse))

        Text("Date")
            .tag(SortDescriptor(\Destination.date))
    }
    .pickerStyle(.inline)
}
```

Third, we need to add an initializer to `DestinationListingView` so that it accepts a destination sort order to use its query. Because we're trying to change the query itself rather than the array of data it returned, we need to use the underscored property name like this:

```swift
init(sort: SortDescriptor<Destination>) {
    _destinations = Query(sort: [sort])
}
```

Fourth, we need to update the preview code to pass in a sample sort option:

```swift
#Preview {
    DestinationListingView(sort: SortDescriptor(\Destination.name))
}
```

And finally, we need to adjust `ContentView` so that it sends its sorting value into `DestinationListingView`, like this:

```swift
DestinationListingView(sort: sortOrder)
```

All that work has moved the sort ordering up one level from `DestinationListingView`, which means we can now control it dynamically.

---

<TagLinks />