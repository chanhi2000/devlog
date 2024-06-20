---
lang: ko-KR
title: How to rollback changes without saving
description: Article(s) > How to rollback changes without saving
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
      content: Article(s) > How to rollback changes without saving
    - property: og:description
      content: How to rollback changes without saving
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-rollback-changes-without-saving.html
next: /explore/articles/hackingwithswift.com/swiftdata/lightweight-vs-complex-migrations.md
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
  "title": "How to rollback changes without saving | SwiftData by Example",
  "desc": "How to rollback changes without saving",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-rollback-changes-without-saving", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

You can make any SwiftData model `Codable`, but you need to add the conformance by hand. If your model has relationships that you want to be encoded and decoded, those relationships must also conform to `Codable`.

I'll give you a trivial sample first, then show a more complex example with a relationship.

First, the simple example. This creates a `Movie` model with a single string property, so encoding and decoding it is just a matter of reading and writing that one value:

```swift
@Model
class Movie: Codable {
    enum CodingKeys: CodingKey {
        case name
    }

    var name: String

    init(name: String) {
        self.name = name
    }

    required init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        name = try container.decode(String.self, forKey: .name)
    }

    func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(name, forKey: .name)
    }
}
```

As you can see, making the model `Codable` follows the standard steps you would use elsewhere: 

1. Defining your `CodingKeys` enum, listing all the properties you want to load and save.
2. Adding an `init(from:)` initializer that knows how to read all the values from your container.
3. Adding an `encode(to:)` method that knows how to <em>write</em> all the values to a container.

Now you can go ahead and use it as normal. So, encoding a `Movie` would look like this:

```swift
if let data = try? JSONEncoder().encode(movies) {
    print(String(decoding: data, as: UTF8.self))
}
```

And if you wanted to decode data, you can do so either from local data:

```swift
do {
    guard let url = Bundle.main.url(forResource: "movies", withExtension: "json") else {
        fatalError("Failed to find movies.json")
    }

    let data = try Data(contentsOf: url)
    let movies = try JSONDecoder().decode([Movie].self, from: data)

    for movie in movies {
        modelContext.insert(movie)
    }
} catch {
    print("Failed to load movies.")
}
```

Or from a remote server:

```swift
do {
    let url = URL(string: "https://hws.dev/movies.json")!
    let (data, _) = try await URLSession.shared.data(from: url)
    let movies = try JSONDecoder().decode([Movie].self, from: data)

    for movie in movies {
        modelContext.insert(movie)
    }
} catch {
    print("Failed to load movies.")
}
```

::: important

Both those samples insert the data from JSON into a model context, so they are stored in SwiftData. However, whether or not you choose to insert the data, the very act of creating a `Movie` instance requires that you load that model as part of your model container, e.g. `modelContainer(for: Movie.self)`.

:::

**That bears repeating because it's critical:** Even if you're creating your model instances from JSON, you must still have that model type registered with your model container. Failure to do so will trigger a crash.

There's no magic to it, and honestly I'm a bit surprised Apple couldn't find a way to add `Codable` conformance for all models out of the box.

Working with more complex models is really just more of the same. For example, in the code below there's an `Author` model that has many `Book` objects inside it, and because both conform to `Codable` they work great:

```swift
@Model
class Author: Codable {
    enum CodingKeys: CodingKey {
        case firstName, lastName, books
    }

    var firstName: String
    var lastName: String
    var books: [Book]

    init(firstName: String, lastName: String, books: [Book]) {
        self.firstName = firstName
        self.lastName = lastName
        self.books = books
    }

    required init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        firstName = try container.decode(String.self, forKey: .firstName)
        lastName = try container.decode(String.self, forKey: .lastName)
        books = try container.decode([Book].self, forKey: .books)
    }

    func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(firstName, forKey: .firstName)
        try container.encode(lastName, forKey: .lastName)
        try container.encode(books, forKey: .books)
    }
}

@Model
class Book: Codable {
    enum CodingKeys: CodingKey {
        case title, genre
    }

    var title: String
    var genre: String

    init(title: String, genre: String) {
        self.title = title
        self.genre = genre
    }

    required init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        title = try container.decode(String.self, forKey: .title)
        genre = try container.decode(String.self, forKey: .genre)
    }

    func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(title, forKey: .title)
        try container.encode(genre, forKey: .genre)
    }
}
```

As you can see, adding more properties and relationships is just a matter of adding more of the same `Encoder` and `Decoder` functionality – it's not much fun, but at least it works.

---

<TagLinks />