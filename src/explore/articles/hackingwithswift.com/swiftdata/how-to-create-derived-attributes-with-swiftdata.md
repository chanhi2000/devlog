---
lang: ko-KR
title: How to create derived attributes with SwiftData
description: Article(s) > How to create derived attributes with SwiftData
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
      content: Article(s) > How to create derived attributes with SwiftData
    - property: og:description
      content: How to create derived attributes with SwiftData
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-create-derived-attributes-with-swiftdata.html
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
  "title": "How to create derived attributes with SwiftData | SwiftData by Example",
  "desc": "How to create derived attributes with SwiftData",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-create-derived-attributes-with-swiftdata", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Derived attributes were a power feature of Core Data, allowing us to automatically calculate or update some properties dynamically. Sadly they don’t exist in SwiftData, however we can sort of work around this with some extra effort.

::: important

Derived attributes in Core Data are extremely efficient because they are implemented as triggers at the database level. Our workarounds are nothing like as efficient!

:::

We have three options here.

The first option is the simplest: we derive the value ourselves as a computed property, which at least puts the functionality in place until we hopefully get official support for real derived attributes in the future.

For example, in Core Data it was common to use derivations like `@count` or `@sum`, so we can implement these by hand:

```swift
@Model
class School {
    var students: [Student]

    var studentCount: Int {
        students.count
    }

    init(students: [Student]) {
        self.students = students
    }
}

@Model
class Student {
    var name: String

    init(name: String) {
        self.name = name
    }
}
```

If that were implemented as a derived attribute, Core Data would be able to calculate the number of students directly rather than fetching the whole array then returning its `count` property, but like I said it’s just a workaround.

That option works well for some derived attributes, but in my experience the most common thing I want to derive is some kind of `lastModified` property that automatically updates whenever any value is changed.

That wouldn’t work with a simple computed property, so here there’s a second option: create a generic `update()` method that can adjust any value inside your model, but while doing automatically updates some other value.

For example, this code creates a `Player` class with a `lastModified` property, along with an `update()` method that can adjust any value while also changing `lastUpdated` to the current date and time:

```swift
@Model class Player {
    var name: String
    var score: Int
    var lastModified: Date

    init(name: String, score: Int) {
        self.name = name
        self.score = score
        self.lastModified = .now
    }

    func update<T>(keyPath: ReferenceWritableKeyPath<Player, T>, to value: T) {
        self[keyPath: keyPath] = value
        lastModified = .now
    }
}
```

With that in place, we can use `user.update(keyPath: \.score, to: 10)` to change the `score` property and also update `lastModified`.

::: note

SwiftData properties do not support `willSet` or `didSet` property observers, so we’re effectively bouncing our changes through a new method in lieu of using `didSet`.

:::

A third option is to create a new `@Transient` attribute for the values you want. Unlike regular SwiftData properties, `@Transient` properties *do* support `willSet` and `didSet` property observers, but honestly this is more trouble than it’s worth – you’d need transient properties for everything you want to watch, so you’re creating a huge amount of work for yourself.

Let’s hope we either get regular `didSet` and `willSet` support soon, or, better yet, actual derived attributes implemented at the database level…

---

<TagLinks />