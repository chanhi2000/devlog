---
lang: ko-KR
title: Why are SwiftData models created as classes?
description: Article(s) > Why are SwiftData models created as classes?
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
      content: Article(s) > Why are SwiftData models created as classes?
    - property: og:description
      content: Why are SwiftData models created as classes?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/why-are-swiftdata-models-created-as-classes.html
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
  "title": "Why are SwiftData models created as classes? | SwiftData by Example",
  "desc": "Why are SwiftData models created as classes?",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/why-are-swiftdata-models-created-as-classes", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Swift developers love using structs, but SwiftData uses classes intentionally:

1. They allow us to share SwiftData objects in many places, so that when we make a change in one place that change appears everywhere else the data is used. This is the same reason why `ObservableObject` and `@Observable` types also rely on classes.
2. Using a class allows a model to create a relationship to another instance of itself. For example, we might say that each employee in a company has a manager, who is also an employee.

As a result, the `@Model` macro can be used only on classes.

That being said, you can *integrate* structs into your models if you want, as long as the structs conform to `Codable`. For example, you might say this:

```swift
@Model
class Customer {
    var name: String
    var address: Address

    init(name: String, address: Address) {
        self.name = name
        self.address = address
    }
}

struct Address: Codable {
    var line1: String
    var line2: String
    var city: String
    var postCode: String
}
```

This can be a neat way of breaking your data models up into more manageable parts, although for most relationships I would recommend using `@Model` classes across the board because it allows you to query your data more broadly.

---

<TagLinks />