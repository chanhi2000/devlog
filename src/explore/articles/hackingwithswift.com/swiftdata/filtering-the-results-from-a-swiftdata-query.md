---
lang: ko-KR
title: Filtering the results from a SwiftData query
description: Article(s) > Filtering the results from a SwiftData query
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
      content: Article(s) > Filtering the results from a SwiftData query
    - property: og:description
      content: Filtering the results from a SwiftData query
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/filtering-the-results-from-a-swiftdata-query.html
date: 2023-10-12
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
  "title": "Filtering the results from a SwiftData query | SwiftData by Example",
  "desc": "Filtering the results from a SwiftData query",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/filtering-the-results-from-a-swiftdata-query", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

<VidStack src="youtube/VyCLfLbA-s0" />

Filtering in SwiftData is done with predicates: a test that can be applied to decide whether objects should appear in the resulting array or not. This is done with a special `#Predicate` macro that takes Swift code we write and converts it into filters the underlying database can understand.

::: tip

If you used Core Data before, `#Predicate` is similar to `NSPredicate`. The main difference is that `#Predicate` gets typechecked at compile time, but there is no `NSCompoundPredicate` equivalent at this time.

:::

Let's try out a few sample predicates. For example, we might say that our app shouldn’t show any destinations with a low priority:

```swift
init(sort: SortDescriptor<Destination>) {
    _destinations = Query(filter: #Predicate {
        $0.priority >= 2
    }, sort: [sort])
}
```

As you can see, we give `#Predicate` a closure that takes one object from the query and applies a test to it. In this case, does the object have a priority of at least 2?

Or we could write a predicate that only shows destinations that are upcoming in our trip, ignoring those that are older than now. We can't read `Date.now` inside the `#Predicate` macro, but if we take a local copy of it first then it will work fine. So, our predicate would be this:

```swift
init(sort: SortDescriptor<Destination>) {
    let now = Date.now

    _destinations = Query(filter: #Predicate {
        $0.date > now
    }, sort: [sort])
}
```

Those are both interesting, but in this project we're going to use a predicate to let the user search for specific destinations using SwiftUI's `searchable()` modifier.

As this will change while the app is running, specifying a dynamic filter is just the same as specifying a dynamic sort order: we need to create state in `ContentView`, then pass it into the initializer for `DestinationListingView`.

This takes four steps, starting with adding some new state in `ContentView` to store whatever is the user's current search text:

```swift
@State private var searchText = ""
```

We then need to bind that to a `searchable()` modifier, so put this next to `navigationTitle()` in `ContentView`:

```swift
.searchable(text: $searchText)
```

Third, we need to update the initializer of `DestinationListingView` to accept a search string, and use it for the query predicate:

```swift
init(sort: SortDescriptor<Destination>, searchString: String) {
    _destinations = Query(filter: #Predicate {
        if searchString.isEmpty {
            return true
        } else {
            return $0.name.localizedStandardContains(searchString)
        }
    }, sort: [sort])
}
```

::: note

`localizedStandardContains()` is almost always the best way to do user-facing string searches. If you use the regular `contains()` method you'll get case-sensitive searching.

:::

Make sure you send a sample search into your preview, even if that's just an empty string:

```swift
DestinationListingView(sort: SortDescriptor(\Destination.name), searchString: "")
```

Finally, we need to edit the way `DestinationListingView` is created in `ContentView`, so that it passes in both the current sort order and search string:

```swift
DestinationListingView(sort: sortOrder, searchString: searchText)
```

And now we have dynamic filtering – nice!

---

<TagLinks />