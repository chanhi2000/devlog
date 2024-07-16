---
lang: ko-KR
title: How to optimize the performance of your SwiftData apps
description: Article(s) > How to optimize the performance of your SwiftData apps
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
      content: Article(s) > How to optimize the performance of your SwiftData apps
    - property: og:description
      content: How to optimize the performance of your SwiftData apps
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-optimize-the-performance-of-your-swiftdata-apps.html
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
  "title": "How to optimize the performance of your SwiftData apps | SwiftData by Example",
  "desc": "How to optimize the performance of your SwiftData apps",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-optimize-the-performance-of-your-swiftdata-apps", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Although both SwiftUI and SwiftData hide a lot of implementation detail from us, there are still ways we can reduce their workload to help boost app performance. 

::: tip

As with all performance tips, make sure you benchmark your project before and after trying something listed below, because every project is different and there could be unexpected side effects that end up making your performance worse.

:::

---

## Limit the amount of data you fetch

When you're running a query, you don't have to load all the data, and you don't even need to load all the values of all the data.

The primary way you can load less data is by refining your predicate: SwiftData will run your query, filter out any results that don't match your predicate, then load the remainder into the result. As you might imagine, it's usually much faster to filter out objects in the predicate than to load them into model objects and filter them in Swift.

::: note

Behind the scenes SwiftData might not convert your entire predicate to SQL. If you're curious what actually happens, look for the output of `EXPLAIN QUERY PLAN` in Xcode's logs when you have the `-com.apple.CoreData.SQLDebug` launch argument cranked up to 3.

:::

The same is true for sorting – if you *can* do it in SwiftData rather than Swift, you should. 

This takes two other main forms, both used when creating a custom `FetchDescriptor`:

1. If you know you'll only use certain properties from your model object, set the `propertiesToFetch` to an array of the key paths you actually need. If there are some you didn't list there but end up needing they will automatically be fetched, but you're generating extra work.
2. If you don't need all your results, set a custom `fetchLimit` to load only the top 100 or 500 objects. If you end up needing more, make another fetch descriptor with a `fetchOffset` so that you get paging.

---

## Prefetch relationships you definitely need

SwiftData lazily loads all relationship data, fetching it only when accessed by your object. If you know the relationship will be used immediately, you should create a fetch descriptor with its `relationshipKeyPathsForPrefetching` set to the relationships you'll use.

When this option is provided, SwiftData will load your model and the specified relationships in a single pass, which can be more efficient than regularly fetching individual relationships as they are used.

---

## Order your predicate checks for efficiency

If you have multiple checks inside a single predicate that you know will either be evaluated often or has lots of data to filter, you should arrange them in a smart order:

1. If you can, place the most restrictive checks first to eliminate data as quickly as possible.
2. Run faster checks earlier, such as preferring integer comparison to a string comparison.

For the first case, think of it like this: if 90% of your objects pass your first test, and only 5% of your objects pass the second test, you could flip the two tests around and eliminate one of the two tests for the vast majority of your data.

In the second case, this can be as simple as rearranging your checks. For example, this code uses a predicate that applies a string comparison followed by an integer comparison:

```swift
var descriptor = FetchDescriptor<Employee>()
descriptor.predicate = #Predicate {
    if $0.department.localizedStandardContains("Engineering") {
        return $0.salary > 200_000
    } else {
        return false
    }
}
```

This next code flips the two around, performing the integer comparison then the string comparison:

```swift
var descriptor = FetchDescriptor<Employee>()
descriptor.predicate = #Predicate {
    if $0.salary > 200_000 {
        return $0.department.localizedStandardContains("Engineering")
    } else {
        return false
    }
}
```

It's a small change, but preferring the integer comparison will run an order of magnitude faster.

---

## Fetch counts when you only want the number of matches

`ModelContext` has a dedicated `fetchCount()` method for times when you want to know how many objects would be returned for a given query. *This is significantly more efficient than fetching a whole array then reading its `count` property.*

So, if all you want is a count, use `fetchCount()` with a custom fetch descriptor.

---

## Use background task for batch inserts

If you have lots of data to insert, perhaps as a result of a network call, consider doing it on a background task so that you leave Swift's main actor free to do all its work without freezing up the UI.

::: important

Please remember that `ModelContext` and all SwiftData models are not sendable, which means they are bound to the actor where they were made. If you want to work with background tasks, pass in your `ModelContainer` object that *is* sendable, then make a local context on the other task.

:::

---

## Push large data blobs to external storage

Saving binary data such as images and movies in external storage can dramatically improve speed and lower memory usage, because SwiftData will load them only when needed.

As an example, consider this `User` model that stores user avatar images directly inside the object:

```swift
@Model
class User {
    var name: String
    var number: Int
    var avatar: Data

    init(name: String, number: Int, avatar: Data) {
        self.name = name
        self.number = number
        self.avatar = avatar
    }
}
```

Because the `@Query` macro doesn't let us specify which fields to fetch, SwiftData will load all three into memory when loading an object – that could easily be hundreds of megabytes of data being loaded, potentially without even being used.

A smarter alternative is to mark the very large properties as being suitable for external storage, like this:

```swift
@Attribute(.externalStorage) var avatar: Data
```

That doesn't mean SwiftData *must* store the data externally, only that it can. Any data that *is* stored externally is loaded only when it's actually used, which makes loading both faster and lighter in memory.

---

## Don't worry about checking for changes before saving

In Core Data it was common advice to always check a view context's `hasChanges` property before trying to save, to avoid unnecessary work.

In SwiftData this advice is no longer important – just call `save()` whenever you want, or let autosave do it for you, and you'll be fine, because there's no performance impact.

---

## When in doubt, ask Instruments

Xcode's Instruments tool comes with a dedicated Data Persistence instrument that's able to report back on how many fetches are being, how many faults are being triggered, and also how often saves happen.

---

<TagLinks />