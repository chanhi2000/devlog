---
lang: ko-KR
title: How to filter SwiftData results with predicates
description: Article(s) > How to filter SwiftData results with predicates
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
      content: Article(s) > How to filter SwiftData results with predicates
    - property: og:description
      content: How to filter SwiftData results with predicates
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-filter-swiftdata-results-with-predicates.html
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
  "title": "How to filter SwiftData results with predicates | SwiftData by Example",
  "desc": "How to filter SwiftData results with predicates",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-filter-swiftdata-results-with-predicates", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftData’s `#Predicate` macro lets us filter a wide variety of operations: data loaded through `@Query`, custom `FetchDescriptor` configurations, and also deleting lots of model objects using `delete(model:)` on a model context. All work in exactly the same way: we’re given one object of our model type, and need to return true or false depending on whether that object should be in the final results.

For example, if we had `Movie` and `Director` models, we could load all movies directed by Ridley Scott like this:

```swift
@Query(filter: #Predicate<Movie> { movie in
    movie.director.name == "Ridley Scott"
}) var movies: [Movie]
```

::: note

`#Predicate` works almost identically in each of those three cases, so although the examples given here use `@Query` they are almost identical elsewhere. The only actual difference is that `@Query` sometimes struggles to get type inference correct, so we need to specify `#Predicate&lt;SomeModelType&gt;` explicitly there.

There are a handful of important things to know about using `#Predicate`.

First, it’s a macro that converts your Swift code into a serious of `PredicateExpressions` objects. This means your predicate is checked at compile time for type safety, unlike the older `NSPredicate` from Core Data.

This means what looks like pure Swift code is in fact being evaluated and converted into something else entirely –&nbsp;something that SwiftData can ultimately convert to SQL to run with its queries.

**This process isn’t perfect.** Some things that are type-safe will crash at runtime, sometimes you’ll find two almost identical predicates will behave differently, and many things just aren’t supported.

We can use predicates to filter strings using `contains()`, so this would return all three Back to the Future movies:

```swift
@Query(filter: #Predicate<Movie> { movie in
    movie.name.starts(with: "Back to the Future")
}) var movies: [Movie]
```

::: tip

`starts(with:)` is supported in predicates, but `hasPrefix()` and `hasSuffix()` are not.

:::

String comparisons such as `starts(with:)` and `contains()` are case-sensitive. If you try using `movie.name.uppercased()` you’ll find `uppercased()` (and `lowercased()`) aren’t supported in predicates, and if you try using `movie.name.localizedUppercase` that *does* compile but then crashes at runtime. 

Instead, you should perform a case-insensitive case search like this:

```swift
@Query(filter: #Predicate<Movie> { movie in
    movie.name.localizedStandardContains("JAWS")
}) var movies: [Movie]
```

You can create predicates that depend on relationships, for example showing only movies with a small cast: 

```swift
@Query(filter: #Predicate<Movie> { movie in
    movie.cast.count > 10
}) var movies: [Movie]
```

However, again here you need to be careful. This will work:

```swift
@Query(filter: #Predicate<Movie> { movie in
    movie.cast.isEmpty
}) var movies: [Movie]
```

But this will cause a crash at runtime:

```swift
@Query(filter: #Predicate<Movie> { movie in
    movie.cast.isEmpty == false
}) var movies: [Movie]
```

Cunningly, this will actually build and run correctly:

```swift
@Query(filter: #Predicate<Movie> { movie in
    !movie.cast.isEmpty
}) var movies: [Movie]
```

Yes, that’s the same as writing `movie.cast.isEmpty == false`, but because it gets built differently by the `#Predicate` macro the result is a valid predicate.

If you need more complex logic, you can nest `if` conditions to a degree. For example, if we wanted to show all Steven Spielberg movies that cost more than $100,000,000 to make, we could use this predicate:

```swift
@Query(filter: #Predicate<Movie> { movie in
    if movie.director.name.contains("Steven") {
        if movie.cost > 100_000_000 {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}) var movies: [Movie]
```

However, we *can’t* simplify that code to have a single `return` false, because predicates must be made up of a single expression. So this kind of code won’t compile:

```swift
@Query(filter: #Predicate<Movie> { movie in
    if movie.director.name.contains("Steven") {
        if movie.cost > 100_000_000 {
            return true
        }
    }

    return false
}) var movies: [Movie]
```

Instead, we need to use Boolean operators such as AND (`&&`) and OR (`||`) to phrase our conditions in a single expression, like this:

```swift
@Query(filter: #Predicate<Movie> { movie in
    movie.director.name.contains("Steven") && movie.cost > 100_000_000
}) var movies: [Movie]
```

You can also use a subset of relationship-querying methods. For example, if you wanted to avoid movies with Tom Cruise you would use this:

```swift
!movie.cast.contains { $0.name == "Tom Cruise" }
```

Again, using `== false` rather than `!` will crash at runtime.

This also works if you want to refer to properties from the parent object. For example, this finds all movies where the director is also one of the acting cast:

```swift
@Query(filter: #Predicate<Movie> { movie in
    movie.cast.contains { $0.name == movie.director.name }
}) var directorsWhoActMovies: [Movie]
```

Or you can use `filter()`, for example to search for movies that contain at least three child actors:

```swift
@Query(filter: #Predicate<Movie> { movie in
    movie.cast.filter { $0.age < 18 }.count >= 3
}) var movies: [Movie]
```

However, I’ve found that attempting to read any deeper properties inside these relationship-querying methods will fail. For example, looking for movies where everyone has relatively short names will always silently fail even when there is matching data:

```swift
@Query(filter: #Predicate<Movie> { movie in
    movie.cast.allSatisfy { $0.name.count <= 10 }
}) var movies: [Movie]
```

Or making a predicate to find movies where no cast member has been in more than three movies – this will also fail, except it will do so loudly with a full crash:

```swift
@Query(filter: #Predicate<Movie> { movie in
    movie.cast.filter { $0.movies.count > 3 }.isEmpty
}) var movies: [Movie]
```

One last thing to be aware of is that when you’re using `@Query` you’ll find it difficult to refer to external values.

For example, if you want to look for movies that haven’t been released yet, you need to be able to compare against `Date.now`. However, we can’t create predicates that rely on external values, so we need to create a local copy of `Date.now` in order for it to be converted correctly:

```swift
static var now: Date { Date.now }

@Query(filter: #Predicate<Movie> { movie in
    movie.releaseDate > now
}) var unreleasedMovies: [Movie]
```

If you’re using `FetchDescriptor` or `delete(model:)`, just creating a local copy using `let now = Date.now` is enough.

---

<TagLinks />