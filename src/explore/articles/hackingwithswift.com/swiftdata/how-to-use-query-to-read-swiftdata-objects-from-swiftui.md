---
lang: ko-KR
title: How to use @Query to read SwiftData objects from SwiftUI
description: Article(s) > How to use @Query to read SwiftData objects from SwiftUI
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
      content: Article(s) > How to use @Query to read SwiftData objects from SwiftUI
    - property: og:description
      content: How to use @Query to read SwiftData objects from SwiftUI
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-use-query-to-read-swiftdata-objects-from-swiftui.html
date: 2023-09-22
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
  "title": "How to use @Query to read SwiftData objects from SwiftUI | SwiftData by Example",
  "desc": "How to use @Query to read SwiftData objects from SwiftUI",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-use-query-to-read-swiftdata-objects-from-swiftui", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftData provides the `@Query` macro for querying model objects from a SwiftUI view, optionally providing a sort order, a filter predicate, and either a custom animation or a custom transaction to handle changing results smoothly. Even better, `@Query` automatically stays up to date every time your data changes, and will reinvoke your SwiftUI view so it stays in sync.

As an example, we could define two related models for a `Movie` and `Director`, like this:

```swift
@Model
class Director {
    var name: String
    var movies: [Movie]

    init(name: String, movies: [Movie]) {
        self.name = name
        self.movies = movies
    }
}

@Model
class Movie {
    var title: String
    var director: Director

    init(title: String, director: Director) {
        self.title = title
        self.director = director
    }
}
```

And now we could display a list of all movies, sorted by their title, like this:

```swift
struct AuthorsView: View {
    @Query(sort: \Movie.title) var movies: [Movie]

    var body: some View {
        NavigationStack {
            List(movies) { movie in
                Text(movie.title)
                Text("Director: \(movie.director.name)")
            }
            .navigationTitle("Movie Time")
        }
    }
}
```

As you can see, SwiftData automatically provides us with the director names property, even though that's provided through a relationship. SwiftData loads these relationships lazily – if there's a relationship you don't use, it won't be fetched.

::: important:

When you use `@Query` to load SwiftData objects in your view, that query is run immediately when your view is displayed. This means you should be careful to avoid loading large amounts of data, because it might cause your user interface to freeze temporarily.

:::

There are lots of ways of customizing `@Query`, such as providing a filter using `#Predicate`. For example, we might write a filter to show only movies by James Cameron:

```swift
@Query(filter: #Predicate<Movie> { movie in
    movie.director.name == "James Cameron"
}, sort: \Movie.title) var movies: [Movie]
```

You can also get more fine-grained control over the sort order, either by asking for it to be reversed:

```swift
@Query(sort: \Movie.title, order: .reverse) var movies: [Movie]
```

Or by providing an array of sort descriptors, where they get applied in order:

```swift
@Query(sort: [SortDescriptor(\Movie.title), SortDescriptor(\Movie.releaseYear, order: .reverse)]) var movies: [Movie]
```

That sorts movies alphabetically by their title, but if any movies have the same name they'll be sorted by their release year descending.

::: tip

Your views can have as many `@Query` properties as you need, although if there's more than three I'd start to wonder if there were a more efficient approach.

:::

For more advanced purposes, you can provide a custom `FetchDescriptor` that you've configured with extra options such as a fetch limit or offset. This takes a little thinking because some fetch descriptor options are available only after the descriptor is initialized.

I've found the easiest way to do this is using a static property for the descriptor, so I can reference it freely in the query. For example, if I wanted to show the 10 most recent movies I'd use a reverse release year sort plus a fetch limit of 10, like this:

```swift
static var descriptor: FetchDescriptor<Movie> {
    var descriptor = FetchDescriptor<Movie>(sortBy: [SortDescriptor(\.releaseYear, order: .reverse)])
    descriptor.fetchLimit = 10
    return descriptor
}

@Query(descriptor) var latestMovies: [Movie]
```

::: important

Regardless of how it's created, the `@Query` macro works only inside SwiftUI views. Swift won't stop you using it elsewhere, it just won't work!

:::

---

<TagLinks />