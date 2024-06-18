---
lang: ko-KR
title: Using structs and enums in SwiftData models
description: Article(s) > Using structs and enums in SwiftData models
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
      content: Article(s) > Using structs and enums in SwiftData models
    - property: og:description
      content: Using structs and enums in SwiftData models
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/using-structs-and-enums-in-swiftdata-models.html
date: 2023-10-12
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
  "title": "Using structs and enums in SwiftData models | SwiftData by Example",
  "desc": "Using structs and enums in SwiftData models",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/using-structs-and-enums-in-swiftdata-models", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Any class marked with `@Model` can be used with SwiftData immediately, but you can also use any struct or enum as long as they conform to the `Codable` protocol. This works even if the enums have raw or associated values.

::: important

Just because you can use them, it doesn’t mean you should. Please read this page fully before coming to a conclusion.

:::

There are a couple of things you should be aware of when doing this, but first let’s look at a practical example. If you wanted to store a `User` record that has a `status` enum attached to it, you might write this:

```swift
enum Status: Codable {
    case active
    case inactive(reason: String)
}

@Model class User {
    var name: String
    var age: Int
    var status: Status

    init(name: String, age: Int, status: Status) {
        self.name = name
        self.age = age
        self.status = status
    }
}
```

SwiftData will store the whole enum case, along with the `reason` string attached to it. 

Internally something interesting happens: SwiftData flattens the enum and its associated value directly into the database record for the `User`, rather than spinning it off into a separate table. This makes sense if you think about it: value types like structs and enums naturally only have a single owner, so there’s no need to create a relationship.

So, value-type properties become attributes in your underlying storage immediately. This works for all basic value types (`Int`, `String`, etc), but you can also also use structs, enums, `Codable` data, and collections of value types. 

However, there is a catch: if you use collections of value types, e.g. `[String]`, SwiftData will save *that* directly inside a single property too. Right now it’s encoded as binary property list data, which means you can’t use the contents of your array in a predicate.

**If you attempt to do so, your app will just crash at runtime.** So, please be very careful.

Of course, this behavior is an implementation detail of SwiftData, and is subject to change at any point in the future – do try it yourself before coming to a final conclusion.

---

<TagLinks />