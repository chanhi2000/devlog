---
lang: ko-KR
title: How to make Core Data and SwiftData coexist in the same app
description: Article(s) > How to make Core Data and SwiftData coexist in the same app
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
      content: Article(s) > How to make Core Data and SwiftData coexist in the same app
    - property: og:description
      content: How to make Core Data and SwiftData coexist in the same app
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-make-core-data-and-swiftdata-coexist-in-the-same-app.html
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
  "title": "How to make Core Data and SwiftData coexist in the same app | SwiftData by Example",
  "desc": "How to make Core Data and SwiftData coexist in the same app",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-make-core-data-and-swiftdata-coexist-in-the-same-app", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftData is built on top of Core Data, and uses the same underlying storage mechanisms. This means you can make an app run with both SwiftData and Core Data side by side, both reading and writing from the same persistent store.

::: important

If you're moving from Core Data to SwiftData (or vice versa – it happens!), I would recommend *against* the coexistence approach because it's more trouble than it's worth. Instead, it's better to make the jump from one to the other without looking back, if you can.

:::

I'm going to assume you've already decided that co-existence is the right move for your app, so let's look at how it's done.

First, it's important that both your SwiftData and Core Data stacks write to the same underlying data store.

So, you might create a constant value like this one:

```swift
let storeURL = URL.documentsDirectory.appending(path: "shared.store")
```

You would then send that to SwiftData using a custom model configuration:

```swift
let config = ModelConfiguration(url: storeURL)
let container = try ModelContainer(for: YourModel.self, configurations: config)
```

And do the same for Core Data, also enabling persistent history tracking at the same time:

```swift
if let description = coreDataContainer.persistentStoreDescriptions.first {
    description.url = storeURL
    description.setOption(true as NSNumber, forKey: NSPersistentHistoryTrackingKey)
}
```

::: important

You must enable persistent history tracking in Core Data, because it's enabled by default in SwiftData and the two must match. If you're using `NSPersistentCloudKitContainer` persistent history tracking is enabled by default.

:::

Second, you need to make sure that your SwiftData and Core Data model names do not clash. If you have the same model in both frameworks at the same time, you need to rename one of them to avoid problems.

::: important

Do not change your Core Data entity names – these must remain the same as your SwiftData model class names. Instead, change the Name value under Class in the Core Data model editor, which affects the class name that gets generated for your entity.

:::

Apple used the simple prefix "CD" for Core Data objects, which is a simple change that's nice and clear to understand later on.

Last but definitely not least: it is an absolute requirement that your SwiftData and Core Data models are the same – if for example you add a property to one, or rename a property, you must make the same change to the other model.

Once you've done that work you're in a good place to see how well your Core Data and SwiftData stack work together – hopefully smoothly, but you might also notice a few places where Core Data changes aren't reflected in SwiftData queries. I've found that adding a sprinkling `objectWillChange.send()` to my Core Data view models gives SwiftData the nudge it needs to spot all the updates.

Coexistence is great for times when you need backwards compatibility, or you want to move to SwiftData in incremental steps, but the tight requirements about keeping both sets of models in sync might prove rather onerous in the long term.

---

<TagLinks />