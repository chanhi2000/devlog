---
lang: ko-KR
title: How to create a custom FetchDescriptor
description: Article(s) > How to create a custom FetchDescriptor
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
      content: Article(s) > How to create a custom FetchDescriptor
    - property: og:description
      content: How to create a custom FetchDescriptor
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-create-a-custom-fetchdescriptor.html
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
  "title": "How to create a custom FetchDescriptor | SwiftData by Example",
  "desc": "How to create a custom FetchDescriptor",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-create-a-custom-fetchdescriptor", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftData’s `FetchDescriptor` struct is similar to Core Data’s `NSFetchRequest`, allowing us to fetch a particular set of objects by specifying a model type, predicate, and sort order. However, it also gives us precise control over what’s fetched: you can set a limit of objects to fetch, prefetch relationships, and more.

In its simplest case, you issue a custom fetch request like this:

```swift
let fetchDescriptor = FetchDescriptor<Movie>()

do {
    let movies = try modelContext.fetch(fetchDescriptor)

    for movie in movies {
        print("Found \(movie.name)")
    }
} catch {
    print("Failed to load Movie model.")
}
```

That loads all instances of a `Movie` model, with no filtering or sorting applied. It *won’t* load any relationships automatically, and will instead load those only when you request them.

::: important

If you issue a custom fetch immediately after inserting some data, any data linked through relationships won’t be visible even if you’ve manually called `save()`, and even if you specifically set `includePendingChanges` to true. Yes, when you call `save()` the data is written to disk immediately, but SwiftData seems to wait until the next runloop before making that data available for querying.

:::

You can customize your fetch descriptor in all sorts of ways, and I want to show some code samples for each.

First, you can specify a custom sort order using one or more `SortDescriptor` objects in an array:

```swift
let fetchDescriptor = FetchDescriptor<Movie>(sortBy: [SortDescriptor(\.name), SortDescriptor(\.releaseDate, order: .reverse)])
```

Second, you can filter your results using the `#Predicate` macro, so we could look for unreleased movies like this:

```swift
let now = Date.now
let unreleasedMovies = FetchDescriptor<Movie>(predicate: #Predicate { movie in
    movie.releaseDate > now
})
```

::: note

In that sample we need to copy `Date.now` into a local value so SwiftData can turn it into a filter.

:::

Third, you can limit the number of objects you want to read by creating your fetch descriptor as a variable then setting its `fetchLimit` property. This accepts an optional integer, where either `nil` or 0 both mean “fetch all objects”.

For example, we could ask for the three newest movies like this:

```swift
var fetchDescriptor = FetchDescriptor<Movie>(sortBy: [SortDescriptor(\.releaseDate, order: .reverse)])
fetchDescriptor.fetchLimit = 3
```

This works great in combination with the `offset` parameter of fetch descriptors, which allow us to do paging – we can tell SwiftData to skip the first *n* results. This is helpful when you know you have many results, so rather than fetching everything at once you can instead fetch in pages of 50 or 100 at a time.

For example, if we had a page size of 100 and we were currently on the third page (counting from 0), we’d write code like this:

```swift
let pageSize = 100
let pageNumber = 2

var fetchDescriptor = FetchDescriptor<Movie>(sortBy: [SortDescriptor(\.releaseDate, order: .reverse)])
fetchDescriptor.fetchOffset = pageNumber * pageSize
fetchDescriptor.fetchLimit = pageSize
```

That will set `fetchOffset` to 200 and `fetchLimit` to 100, meaning that SwiftData will attempt to return objects 201 to 300 in the results.

A fourth way to customize your fetch descriptor is by listing the properties you want to fetch. This is helpful for times when your objects are large: rather than loading the entire object into memory at once, you can instead request just the properties you intend to use.

For example, if you knew you wanted to show just the release dates and names of the latest movies, you could use this:

```swift
var fetchDescriptor = FetchDescriptor<Movie>(sortBy: [SortDescriptor(\.releaseDate, order: .reverse)])
fetchDescriptor.propertiesToFetch = [\.name, \.releaseDate]
```

::: note

If you don’t include a property in `propertiesToFetch` then later use it, SwiftData will automatically fetch the data at the point of use. This uses the same system of *faulting* that Core Data used – the properties you don’t request are filled with placeholders that automatically get substituted with their real data on request.

Another great performance optimization you can make is to set the `relationshipKeyPathsForPrefetching` property to an array of relationship properties you want to prefetch. This is empty by default because SwiftData doesn’t fetch relationships until they are used, but if you know you’ll use that data then prefetching allows SwiftData to batch request it all for more efficiently.

Continuing our movie example, we might be building a screen that shows the directors behind the most recent movies. If the director name were baked right into the `Movie` model then it would be fetched automatically unless we specifically requested otherwise, but if it were a relationship then we could prefetch it like this:

```swift
var fetchDescriptor = FetchDescriptor<Movie>(sortBy: [SortDescriptor(\.releaseDate, order: .forward)])
fetchDescriptor.relationshipKeyPathsForPrefetching = [\.director]
```

The last customization point is `includePendingChanges`, which controls whether the fetch should include changes you’ve made that have yet to be saved. This defaults to true, and while there were one or two places you would want otherwise with Core Data I genuinely can’t see this being useful in SwiftData – I’d leave it alone, if I were you.

---

<TagLinks />