---
lang: ko-KR
title: How to connect SwiftData to SwiftUI
description: Article(s) > How to connect SwiftData to SwiftUI
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
      content: Article(s) > How to connect SwiftData to SwiftUI
    - property: og:description
      content: How to connect SwiftData to SwiftUI
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-connect-swiftdata-to-swiftui.html
prev: /explore/articles/hackingwithswift.com/swiftdata/how-to-create-a-complex-migration-using-versionedschema.md
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
  "title": "How to connect SwiftData to SwiftUI | SwiftData by Example",
  "desc": "How to connect SwiftData to SwiftUI",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-connect-swiftdata-to-swiftui", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftData was built with SwiftUI in mind, and it integrates tightly into SwiftUI views. This takes a number of forms:

1. The `@Query` macro queries SwiftData objects, and automatically stays updated as those objects change. This macro works only on SwiftUI views.
2. We can inject one or more SwiftData model contains directly into the environment using the `modelContainer()` modifier. This will create the database if it isn't there, or load an existing one that was created previously.
3. Although each SwiftUI view can have only one model container, we can attach different model containers to different views in our hierarchy.
4. We have a `.modelContext` environment key to read the main context, which automatically uses the main actor to make data manipulation safe from views. This is the same model context used by any `@Query` properties in that view.

We can put all the core components together in some sample code, starting with two models to store authors and the books they have written:

```swift
@Model
class Author {
    var name: String
    var books: [Book]

    init(name: String, books: [Book]) {
        self.name = name
        self.books = books
    }
}

@Model
class Book {
    var title: String
    var author: Author?

    init(title: String, author: Author? = nil) {
        self.title = title
        self.author = author
    }
}
```

We could then show a list of authors and their books using `@Query` in a SwiftUI view, such as this one:

```swift
struct AuthorsView: View {
    @Query(sort: \Author.name) var authors: [Author]

    var body: some View {
        NavigationStack {
            List(authors) { author in
                Text(author.name)
                Text(author.books.map(\.title).formatted(.list(type: .and)))
            }
            .navigationTitle("iLibrary")
        }
    }
}
```

And finally, tie it all together in our `App` struct, using the `modelContainer(for:)` modifier:

```swift
@main
struct LibraryApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
        .modelContainer(for: [Author.self, Book.self])
    }
}
```

::: note

Because `Author` and `Book` share a relationship, we can use either `modelContainer(for: Author.self)` or `modelContainer(for: Book.self)` and have SwiftData automatically load both models.

:::


---

<TagLinks />