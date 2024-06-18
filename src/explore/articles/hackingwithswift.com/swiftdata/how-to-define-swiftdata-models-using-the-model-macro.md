---
lang: ko-KR
title: How to define SwiftData models using the @Model macro
description: Article(s) > How to define SwiftData models using the @Model macro
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
      content: Article(s) > How to define SwiftData models using the @Model macro
    - property: og:description
      content: How to define SwiftData models using the @Model macro
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/how-to-define-swiftdata-models-using-the-model-macro.html
prev: /explore/articles/hackingwithswift.com/swiftdata/how-to-enable-or-disable-autosave-for-a-modelcontext.md
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
  "title": "How to define SwiftData models using the @Model macro | SwiftData by Example",
  "desc": "How to define SwiftData models using the @Model macro",
  "link": "https://hackingwithswift.com/quick-start/how-to-define-swiftdata-models-using-the-model-macro", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

You’ll use the `@Model` macro with all your SwiftData model classes. It automatically makes your class load and store from SwiftData, adds support for observing changes, and also adds conformances for `Hashable`, `Identifiable`, `Observable`, and `PersistentModel`.

In a simple case, your code looks like this:

```swift
@Model
class Employee {
    var name: String
    var emailAddress: String

    init(name: String, emailAddress: String) {
        self.name = name
        self.emailAddress = emailAddress
    }
}
```

That now becomes the source of truth for this data model – the complete definition of the data structure for that one type.

::: important

The `@Model` macro requires your type be a class; it will not work on a struct.

:::

Just marking the class with `@Model` automatically converts its stored properties into getters and setters that read/write the underlying SwiftData information, but it’s even smarter than that:

1. Whenever a SwiftUI view reads one of the properties of a SwiftData model object, it will automatically watch that property for changes so the view can be recreated as needed. If you previously used `@Published` and similar to annotate properties, that is not needed with SwiftData.
2. SwiftData quietly groups multiple changes together to save in one pass, so even if you do all sorts of inserting, deleting, and updating, they’ll be batched for maximum performance.
3. Whenever one of these batches completes, SwiftData automatically saves all its outstanding changes, so your data is always kept safe.
4. Any computed properties *aren’t* affected by the macro, and won’t be stored inside SwiftData persistent storage.

There are all sorts of ways to expand your models further. For example, we might say that every employee has a manager, like this:

```swift
@Model
class Employee {
    var name: String
    var emailAddress: String
    var manager: Employee?

    init(name: String, emailAddress: String, manager: Employee?) {
        self.name = name
        self.emailAddress = emailAddress
        self.manager = manager
    }
}
```

That introduces a *one-to-one relationship*: each manager has another manager, although it’s an optional `Employee` because someone at the very top of a company won’t have a manager. Relationships are covered in more detail later.

Another way we can add to our models is to add special attributes to individual properties. For example, we could say that every employee must have a unique email address:

```swift
@Model
class Employee {
    var name: String
    @Attribute(.unique) var emailAddress: String

    init(name: String, emailAddress: String) {
        self.name = name
        self.emailAddress = emailAddress
    }
}
```

SwiftData will enforce this rule for us automatically, ensuring that no two users have the same email address.

---

<TagLinks />