---
lang: ko-KR
title: How to completely reset a SwiftData ModelContainer
description: Article(s) > How to completely reset a SwiftData ModelContainer
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
      content: Article(s) > How to completely reset a SwiftData ModelContainer
    - property: og:description
      content: How to completely reset a SwiftData ModelContainer
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-completely-reset-a-swiftdata-modelcontainer.html
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
  "title": "How to completely reset a SwiftData ModelContainer | SwiftData by Example",
  "desc": "How to completely reset a SwiftData ModelContainer",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-completely-reset-a-swiftdata-modelcontainer", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you want to delete and destroy all SwiftData objects – every instance of every model belonging to a specific container – you might think you should should call the `deleteAllData()` of `ModelContainer`. However, that is quite unhelpful as of iOS 17.0: the method call succeeds, but all that happens is SwiftData disconnects from its underlying data store with your data being unchanged – next time you create the same container it will all be back.

::: important

I’m saying that again for folks who think skim reading is cool: at the time of writing `deleteAllData()` won’t do what you expect.

:::

Instead, you need to call the `delete(model:)` method of your model context once for each model type you have, without providing any predicate that would otherwise limit which objects are destroyed.

For example, if you use `Country` and `City` models, you’d use this:

```swift
do {
    try modelContext.delete(model: Country.self)
    try modelContext.delete(model: City.self)
} catch {
    print("Failed to clear all Country and City data.")
}
```

This doesn’t strictly reset your model container completely, however: all the table definitions and other data will be intact, they’ll just be empty.

---

<TagLinks />