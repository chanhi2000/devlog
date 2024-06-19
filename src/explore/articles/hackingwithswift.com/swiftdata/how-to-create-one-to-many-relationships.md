---
lang: ko-KR
title: How to create one-to-many relationships
description: Article(s) > How to create one-to-many relationships
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
      content: Article(s) > How to create one-to-many relationships
    - property: og:description
      content: How to create one-to-many relationships
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-create-one-to-many-relationships.html
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
  "title": "How to create one-to-many relationships | SwiftData by Example",
  "desc": "How to create one-to-many relationships",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-create-one-to-many-relationships", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

One-to-many relationships are the most common relationship type in SwiftData, and are created automatically when one side of your relationship has an array of data, and the other side is optional.

For example, we might say that every movie has a director, and each director can have directed many movies:

```swift
@Model
class Movie {
    var name: String
    var releaseYear: Int
    var director: Director?

    init(name: String, releaseYear: Int, director: Director) {
        self.name = name
        self.releaseYear = releaseYear
        self.director = director
    }
}

@Model
class Director {
    var name: String
    var movies: [Movie]

    init(name: String, movies: [Movie]) {
        self.name = name
        self.movies = movies
    }
}
```

If you prefer to make the relationship explicit – and I usually recommend doing so, not least because it helps clarify your intent – you’re specify exactly what the inverse should be, and also what happens when a deletion takes place.

So, we might adjust the `Director` definition to this, to say that when we delete a director we replace them with nil in any movie they directed:

```swift
@Relationship(deleteRule: .nullify, inverse: \Movie.director) var movies: [Movie]
```

::: important

There are a handful of rules you need to follow with these relationships:

1. If you intend to use inferred relationships, one side of your data must be optional.
2. If you use an explicit relationship where one side of your data is non-optional, be careful how you delete objects – SwiftData uses the `.nullify` delete rule by default, which can put your data into in an invalid state. To avoid this problem, either use an option value, or use a `.cascade` delete rule.
3. Do not attempt to use collection types other than `Array`, because your code will simply not compile.

:::

---

<TagLinks />