---
lang: ko-KR
title: Defining a data model with SwiftData
description: Article(s) > Defining a data model with SwiftData
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
      content: Article(s) > Defining a data model with SwiftData
    - property: og:description
      content: Defining a data model with SwiftData
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/defining-a-data-model-with-swiftdata.html
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
  "title": "Defining a data model with SwiftData | SwiftData by Example",
  "desc": "Defining a data model with SwiftData",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/defining-a-data-model-with-swiftdata", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

<VidStack src="youtube/kiFQevfpuKQ" />

The best way to start any new project is to define your data model, because once that's correct you normally find the rest of the app flows smoothly from there.

In SwiftData all our models are created using code – we can kiss goodbye to the Core Data model editor UI in Xcode, because now everything is described in pure Swift.

For this project we’re going to create a simple model to describe one destination, so create a new Swift file called <FontIcon icon="fa-brands fa-swift"/>`Destination.swift` and give it this code:

```swift
class Destination {
    var name: String
    var details: String
    var date: Date
    var priority: Int
}
```

::: tip

We'll be using numbers between 1 and 3 for the priority.

:::

Yes, that’s a class, just like we had with Core Data. That’s intentional, because even though we’re a big fan of structs in Swift we ultimately still need a way to share data between various parts of our app, and classes do that. 

Because it’s a class we need to provide an initializer for it. If you just start typing `i` somewhere in the class it will prompt you to complete the full initializer. So, you should get this:

```swift
class Destination {
    var name: String
    var details: String
    var date: Date
    var priority: Int

    init(name: String, details: String, date: Date, priority: Int) {
        self.name = name
        self.details = details
        self.date = date
        self.priority = priority
    }
}
```

I'm a big fan of providing default values wherever they make sense. When creating a new, empty destination then all the values would be empty apart from priority, which we'll give a value of 2 by default – not low, not high, just in the middle.

So, modify your initializer to this:

```swift
init(name: String = "", details: String = "", date: Date = .now, priority: Int = 2) {
```

So far this is all pretty standard Swift, but now it’s time to bring in SwiftData. This takes exactly three steps:

1. Add `import SwiftData` to the top of both <FontIcon icon="fa-brands fa-swift"/>`Destination.swift` and <FontIcon icon="fa-brands fa-swift"/>`iTourApp.swift`.
2. Add the `@Model` macro before `class Destination`.
3. Add this modifier to your `WindowGroup` in <FontIcon icon="fa-brands fa-swift"/>`iTourApp.swift`: `.modelContainer(for: Destination.self)`

That’s it: those three changes, all of which are trivial, give us a complete SwiftData stack.

The first one is just a matter of adding an `import` statement in two files so we can access all SwiftData's functionality, but the other two are very interesting.

The `@Model` macro tells SwiftData that we want to be able to load and save `Destination` objects using a SwiftData database. This adds a whole bunch of functionality behind the scenes so that SwiftData can detect when we change individual properties inside a `Destination` object and make sure they automatically get saved, but it also does clever things like lazy loading data to save memory.

As for the `modelContainer()` modifier, this tells SwiftData that we want to:

1. Create the storage for our `Destination` object, or load it if it was created previously.
2. Use that storage all our data inside the window group, which is our entire app.

If you've used Core Data before, this model container is equivalent to an `NSPersistentContainer`, but it also doubles as an `NSPersistentCloudKitContainer` if you have iCloud enabled for your app.

You can run the app now if you want, but you won't see much because we haven't written any UI code yet. Let's do that next…

---

<TagLinks />