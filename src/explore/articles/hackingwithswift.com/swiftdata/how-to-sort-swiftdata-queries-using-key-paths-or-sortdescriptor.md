---
lang: ko-KR
title: How to sort SwiftData queries using key paths or SortDescriptor
description: Article(s) > How to sort SwiftData queries using key paths or SortDescriptor
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
      content: Article(s) > How to sort SwiftData queries using key paths or SortDescriptor
    - property: og:description
      content: How to sort SwiftData queries using key paths or SortDescriptor
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-sort-swiftdata-queries-using-key-paths-or-sortdescriptor.html
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
  "title": "How to sort SwiftData queries using key paths or SortDescriptor | SwiftData by Example",
  "desc": "How to sort SwiftData queries using key paths or SortDescriptor",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-sort-swiftdata-queries-using-key-paths-or-sortdescriptor", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Sorting SwiftData queries is either done with a key path for simple sorts, or an array of `SortDescriptor` for more complex sorts. Some query variants – e.g. creating a `FetchDescriptor` by hand – only support the array approach, whereas using `@Query` supports both.

For the simplest approach using `@Query`, you can specify your sort order as a key path on the model you’re querying. So, if we had a `Movie` model, we could load all movies sorted alphabetically by their name like this:

```swift
@Query(sort: \Movie.name) var movies: [Movie]
```

And if you wanted a *descending* alphabetical sort, we’d use this:

```swift
@Query(sort: \Movie.name, order: .reverse) var movies: [Movie]
```

You can even dig into relationship data, for example sorting by the name of a movie’s director:

```swift
@Query(sort: \Movie.director.name) var movies: [Movie]
```

This sort key path can be any directly comparable property of your model, so we could sort by movie name, movie release date, director age, or anything similar.

::: important

Although you can make your models conform to `Comparable` and use them in these sort orders, it will not work as intended. Behind the scenes SwiftData will insert your model to its own table with a primary key integer, then sort *by that integer* – you’re effectively sorting by when each object was inserted into your context.

:::

To get more advanced sorting, you can specify an array of `SortDescriptor`. This approach works much the same with both `@Query` and `FetchDescriptor`, which does make life a little easier. The advantage of this approach is that you can specify multiple sort orders to have them applied in order: if the first two fields sort the same for two objects, then they are sorted by the second field, then the third, and so on.

For example, we could sort a list of movies alphabetically, then release date reverse, then finally by director name:

```swift
@Query(sort: [SortDescriptor(\name), SortDescriptor(\Movie.releaseDate, order: .reverse), SortDescriptor(\Movie.director.name)]) var movies: [Movie]
```

There are lots of movies called “The Awakening” (over 30!), and it’s not *impossible* to have two movies with the same name and same release date, but it would be supremely unlikely to have name, release date, *and* director name all be the same.

As I said, this same approach works great with a standalone `FetchDescriptor`, although here the type inference for key paths works a little better so we can skip the model name:

```swift
var descriptor = FetchDescriptor<Movie>(sortBy: [SortDescriptor(\.name)])
let results = (try? modelContext.fetch(descriptor)) ?? []
```

---

<TagLinks />