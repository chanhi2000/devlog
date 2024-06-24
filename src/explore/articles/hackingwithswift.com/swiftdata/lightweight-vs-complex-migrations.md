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
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/lightweight-vs-complex-migrations.html
prev: /explore/articles/hackingwithswift.com/swiftdata/how-to-rollback-changes-without-saving.md
date: 2024-04-16
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
  "link": "https://hackingwithswift.com/quick-start/swiftdata/lightweight-vs-complex-migrations", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

When you change your data model, SwiftData can sometimes handle the update automatically, but often it needs intervention from you to make sure the update goes smoothly. This is known as *data migration*, and in SwiftData we call automatic migration “lightweight”, and everything else “complex”. You’ll need to know how both work if you intend to change your data model over time.

SwiftData will execute lightweight migration automatically for a range of small changes, including:

1. Adding one or more new models.
2. Adding one or more new properties that have a default value.
3. Renaming one or more properties.
4. Deleting properties from a model.
5. Adding or removing the `.externalStorage` or `.allowsCloudEncryption` attributes.
6. Adding the `.unique` attribute and all values for that property are already unique.
7. Adjusting the delete rule on relationships.

These changes are always safe, and so are automatic. In contrast, changes that *aren’t* safe will require a complex migration where you need to step in and handle the update yourself.

For example, if you’re adding the `.unique` attribute to a property where all values for that property are already unique, it’s a lightweight migration. But if there are duplicate values the lightweight migration will fail, and your container will not be loaded – your app will effectively be non-functional.

::: tip

Broadly speaking it’s a good idea to tell SwiftData about all migrations that might happen in your app, even if they are all lightweight, because it makes life easier if you introduce more complex migrations in the future.

:::

---

<TagLinks />