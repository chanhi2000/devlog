---
lang: ko-KR
title: How to create cascade deletes using relationships
description: Article(s) > How to create cascade deletes using relationships
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
      content: Article(s) > How to create cascade deletes using relationships
    - property: og:description
      content: How to create cascade deletes using relationships
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-create-cascade-deletes-using-relationships.html
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
  "title": "How to create cascade deletes using relationships | SwiftData by Example",
  "desc": "How to create cascade deletes using relationships",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-create-cascade-deletes-using-relationships", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftData’s default delete rule for relationships is `.nullify`, which means for example that if you have an `School` object with many `Student` objects as a relationship, then deleting the school will leave the students intact in your data store. That might make sense in some places, but you can also specify a `.cascade` delete rule, meaning that all related objects will be deleted when the parent object is deleted. 

::: tip

If you have multi-tier relations with cascade delete rules, SwiftData will continue deleting all the way down.

:::

For example, if you have a `House` model with an array of `Room` objects, it would make sense to delete all the rooms when the house is deleted.

There are two ways of writing this. When dealing with a cascade delete rule, the smartest and simplest approach is to specify the inverse relationship by hand, allowing us to make one side of the relationship non-optional, like this:

```swift
@Model
class House {
    var address: String
    @Relationship(deleteRule: .cascade, inverse: \Room.house) var rooms: [Room]

    init(address: String, rooms: [Room] = []) {
        self.address = address
        self.rooms = rooms
    }
}

@Model
class Room {
    var house: House
    var name: String

    init(house: House, name: String) {
        self.house = house
        self.name = name
    }
}
```

If you’d prefer to have SwiftData infer the inverse relationship for you, you should skip the `inverse` parameter for your relationship then make the other property optional, like this:

```swift
@Model
class House {
    var address: String
    @Relationship(deleteRule: .cascade) var rooms: [Room]

    init(address: String, rooms: [Room] = []) {
        self.address = address
        self.rooms = rooms
    }
}

@Model
class Room {
    var house: House?
    var name: String

    init(house: House?, name: String) {
        self.house = house
        self.name = name
    }
}
```

Remember, the name “cascade delete” means that multi-level relationships automatically delete all the way down the chain. For example, if we said that a school has many students and each student has many exam results, then gave each of those relationships a cascade delete rule, then deleting the school would delete all the students and all their exam results in one go.

Here’s how that looks in Swift:

```swift
@Model
class School {
    var name: String
    @Relationship(deleteRule: .cascade, inverse: \Student.school) var students: [Student]

    init(name: String, students: [Student] = []) {
        self.name = name
        self.students = students
    }
}

@Model
class Student {
    var name: String
    var school: School
    @Relationship(deleteRule: .cascade) var results: [Result]

    init(name: String, school: School, results: [Result] = []) {
        self.name = name
        self.school = school
        self.results = results
    }
}

@Model
class Result {
    var subject: String
    var grade: Int

    init(subject: String, grade: Int) {
        self.subject = subject
        self.grade = grade
    }
}
```

---

<TagLinks />