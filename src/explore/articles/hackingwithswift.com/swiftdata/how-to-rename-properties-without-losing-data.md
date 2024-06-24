---
lang: ko-KR
title: Lightweight vs complex migrations
description: Article(s) > Lightweight vs complex migrations
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
      content: Article(s) > Lightweight vs complex migrations
    - property: og:description
      content: Lightweight vs complex migrations
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-rename-properties-without-losing-data.html
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
  "title": "Lightweight vs complex migrations | SwiftData by Example",
  "desc": "Lightweight vs complex migrations",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-rename-properties-without-losing-data", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftData is able to handle us renaming model properties through an automatic lightweight migration, however you do need to use the `@Attribute` macro to tell it the original name of the property.

For example, you might start off with a `User` model such as this one:

```swift
@Model
class User {
    var name: String

    init(name: String) {
        self.name = name
    }
}
```

However, you might later decide that `fullName` would have been a better name for the property. That's where the `@Attribute` macro comes in, because it lets you specify the original name used for the property so that SwiftData can move from old to new on your behalf. Here's how that looks:

```swift
@Model
class User {
    @Attribute(originalName: "name") var fullName: String

    init(name: String) {
        self.fullName = name
    }
}
```

That tells SwiftData to use the `fullName` property going forward, but if it finds an older model version using `name` it will be upgraded automatically – it will be renamed for us to the new name without any further intervention from us.

::: tip

If you change the property name *without* using `Attribute(originalName:)`, SwiftData will consider the old and new properties to be different things in your schema, and so it won't migrate between the two. If you want to discard the old data and create a new property then go for it, but if you want to avoid data loss make sure to use `@Attribute`.

:::

---

<TagLinks />