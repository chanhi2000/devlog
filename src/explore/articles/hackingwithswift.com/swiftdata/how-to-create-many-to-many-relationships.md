---
lang: ko-KR
title: How to create many-to-many relationships
description: Article(s) > How to create many-to-many relationships
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
      content: Article(s) > How to create many-to-many relationships
    - property: og:description
      content: How to create many-to-many relationships
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-create-many-to-many-relationships.html
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
  "title": "How to create many-to-many relationships | SwiftData by Example",
  "desc": "How to create many-to-many relationships",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-create-many-to-many-relationships", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Many-to-many relationships in SwiftData are created when both sides of a relationship use arrays. They are fairly common, too: some actors appear in many films and most films have many actors, some authors write many books and some books have several authors, and so on.

::: important

SwiftData will not infer many-to-many relationships; you must make them explicit using the `@Relationship` macro. Many-to-many relationships are easy to get wrong, so please read the below carefully.

:::

First, declare your models, using `@Relationship` in one of the two so you make clear the inverse of your relationship. For example, we might have say actors can star in many films, and films can have many actors:

```swift
@Model
class Actor {
    var name: String
    var movies: [Movie]

    init(name: String, movies: [Movie]) {
        self.name = name
        self.movies = movies
    }
}

@Model
class Movie {
    var name: String
    var releaseYear: Int
    @Relationship(inverse: \Actor.movies) var cast: [Actor]

    init(name: String, releaseYear: Int, cast: [Actor]) {
        self.name = name
        self.releaseYear = releaseYear
        self.cast = cast
    }
}
```

Now create and link your data, like so:

```swift
let mi2 = Movie(name: "Mission: Impossible 2", releaseYear: 2000, cast: [])
let cruise = Actor(name: "Tom Cruise", movies: [mi2])
let newton = Actor(name: "Thandiwe Newton", movies: [mi2])

modelContext.insert(cruise)
modelContext.insert(newton)
```

::: note

We don’t need to insert the `Movie` object – it will be inserted automatically by SwiftData because it’s used by the two actors.

:::

There are lots of ways you can get many-to-many relationships wrong, and I’m afraid SwiftData is entirely unforgiving here – if you don’t follow the steps correctly things will just behave strangely, or even crash at runtime.

For example, if you attempt to manipulate the `movies` property of an actor before inserting them, you’ll get a hard crash. So, this code won’t work:

```swift
let mi2 = Movie(name: "Mission: Impossible 2", releaseYear: 2000, cast: [])

let cruise = Actor(name: "Tom Cruise", movies: [])
let newton = Actor(name: "Thandiwe Newton", movies: [])

mi2.cast.append(cruise)
mi2.cast.append(newton)

modelContext.insert(mi2)
modelContext.insert(cruise)
modelContext.insert(newton)
```

You’ll also get a crash with the message “illegal attempt to establish a relationship” if you attempt to insert things out of sequence, like this:

```swift
let mi2 = Movie(name: "Mission: Impossible 2", releaseYear: 2000, cast: [])
modelContext.insert(mi2)

let cruise = Actor(name: "Tom Cruise", movies: [mi2])
let newton = Actor(name: "Thandiwe Newton", movies: [mi2])

modelContext.insert(cruise)
modelContext.insert(newton)
```

And just for fun, if you accidentally miss off the `@Relationship` macro what you’ll get is pretty much random even when you insert things in the correct order.

If you need to manipulate the arrays directly, it’s important that all your data be inserted first. For our movies and actors example, that would mean creating all the data, inserting it, *then* manipulating the arrays, like this:

```swift
let mi2 = Movie(name: "Mission: Impossible 2", releaseYear: 2000, cast: [])
let cruise = Actor(name: "Tom Cruise", movies: [])
let newton = Actor(name: "Thandiwe Newton", movies: [])

modelContext.insert(mi2)
modelContext.insert(cruise)
modelContext.insert(newton)

mi2.cast.append(cruise)
mi2.cast.append(newton)
```

Or we could add the movies to the actors:

```swift
cruise.movies.append(mi2)
newton.movies.append(mi2)
```

::: important

There is a rather catastrophic SwiftData bug in iOS 17.0 where many-to-many relationships will fail based on the alphabetical ordering of your model names. This means in the above examples models named `Actor` and `Movie` will work but `Movie` and `Person` will not. Until a fix is released, a workaround is to provide a default value for your relationship array, like this: `var movies: [Movie] = []`.

:::

---

<TagLinks />