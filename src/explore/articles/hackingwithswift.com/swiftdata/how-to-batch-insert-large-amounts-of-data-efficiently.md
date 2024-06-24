---
lang: ko-KR
title: How to batch insert large amounts of data efficiently
description: Article(s) > How to batch insert large amounts of data efficiently
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
      content: Article(s) > How to batch insert large amounts of data efficiently
    - property: og:description
      content: How to batch insert large amounts of data efficiently
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-batch-insert-large-amounts-of-data-efficiently.html
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
  "title": "How to batch insert large amounts of data efficiently | SwiftData by Example",
  "desc": "How to batch insert large amounts of data efficiently",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-batch-insert-large-amounts-of-data-efficiently", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

The best way to perform a bulk data import with SwiftData – i.e., to create a lot of model objects at the same time, perhaps as a result of a network call – is to use a background task through something like an actor. 

::: tip

If you're inserting more than 5000 or so objects, or if your models are particularly large because they include binary data, I would strongly suggest you split your inserts into smaller batches and trigger a manual save at the end of each batch so that your memory usage doesn't skyrocket. You might also want to consider very slightly throttling your inserts if you anticipate extended periods of work.

:::

To get you started, here's some sample code for a `BackgroundImporter` actor that inserts lots of sample data on a background actor:

```swift
actor BackgroundImporter {
    var modelContainer: ModelContainer

    init(modelContainer: ModelContainer) {
        self.modelContainer = modelContainer
    }

    func backgroundInsert() async throws {
        let modelContext = ModelContext(modelContainer)

        let batchSize = 1000
        let totalObjects = 100_000

        for i in 0..<(totalObjects / batchSize) {
            for j in 0..<batchSize {
                // try await Task.sleep(for: .milliseconds(1))
                let issue = Movie(title: "Movie \(I * batchSize + j)", cast: [])
                modelContext.insert(issue)
            }

            try modelContext.save()
        }
    }
}
```

That does a few important things you should take note of for maximum performance:

1. It creates the model context inside the `backgroundInsert()` method, thus avoiding the significant cost of accessing an actor's property repeatedly.
2. It inserts 100,000 test objects in chunks of 1000.
3. After each batch it calls `save()` to write the data to disk, keeping the peak memory overhead lower.
4. It has a *commented-out* 1-millisecond pause between each object insertion – the code goes as fast as possible, but if you want to throttle your inserts you should uncomment that line.

::: important

It bears repeating that if you create the model context as a property of your actor rather than inside the method, your batch inserts will run an order of magnitude slower.

:::

Each time you call `save()` your changes will automatically be reflected on your main context, so for example any `@Query` properties will update.

In your own projects, you would presumably either be calculating your data dynamically or fetching it from a remote server, but the concept is the same: push the work onto a model context running on a different actor, and it will automatically be synchronized when `save()` is called.

---

<TagLinks />