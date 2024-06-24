---
lang: ko-KR
title: How to migrate an app from Core Data to SwiftData
description: Article(s) > How to migrate an app from Core Data to SwiftData
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
      content: Article(s) > How to migrate an app from Core Data to SwiftData
    - property: og:description
      content: How to migrate an app from Core Data to SwiftData
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-migrate-an-app-from-core-data-to-swiftdata.html
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
  "title": "How to migrate an app from Core Data to SwiftData | SwiftData by Example",
  "desc": "How to migrate an app from Core Data to SwiftData",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-migrate-an-app-from-core-data-to-swiftdata", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you already have an app built with Core Data and want to move it to SwiftData, you'll be pleased to know that the two are almost entirely compatible at the data layer – all your Core Data models will move across smoothly, with all user data preserved.

::: important

Just because you *can* move over to SwiftData, it doesn't mean you *should*. Not only are there some features that are missing at this time, such as `NSFetchedResultsController`, `NSCompoundPredicate`, and more advanced CloudKit sharing, but if you have Core Data code that's proven to work… maybe leave it alone?

:::

I'm going to assume you've already done the whole cost/benefit analysis yourself and are ready to move over to SwiftData. Once you've taken a backup of your project (or at least ensured all your changes are stored safely in version control), the best first step to take is to ask Xcode to attempt the conversion for you.

To do that, open your Core Data model in the model editor, then go to the Editor menu and choose Create SwiftData Code. This will show you a list of the models that will be created, so press Next then Create to have it attempt the conversion for you.

You'll notice that Xcode likes making its classes `public`, and also likes making properties optional. For the best SwiftData experience I'd recommend adjusting this:

1. Remove optionality where you can, so you're always dealing with concrete values. If you intend to support CloudKit, you'll need to assign default values for your objects.
2. Remove the `public` keyword because it doesn't really add much.
3. Add a meaningful initializer that accepts the values you use in your model.

For example, if Xcode produced this:

```swift
@Model
class User {
    var name: String

    init(name: String) {
        self.name = name
    }
}
```

I'd adjust it to this:

```swift
@Model public class User {
    var name: String?

    public init() { }
}
```

::: important

If your models include relationships, make sure Xcode has captured them correctly with the `@Relationship` macro.

:::

Once your models are where you want to them to do, you can delete any old controller classes you used previously – many projects have a `PersistenceController` or `DataController` class that sets up their Core Data stack, and that can all go.

Finally, delete your data model file itself, because it's all done in code now. That feels better, doesn't it?

That completes the data migration step, but now for the much bigger work: moving the whole rest of your project over.

This means:

1. Replacing any `@FetchRequest` properties with `@Query`, including adjusting your predicates. You might find some things are unsupported with SwiftData, such as setting a property on your fetch request to dynamically adjust its sort or filter, which means you need to do more work here.
2. Replacing any `managedObjectContext` environment values with `modelContext`.
3. Replacing any places where your model objects are being created with their correct, new initializer, rather than always initializing with a Core Data view context.
4. Replacing any `@StateObject` properties with `@State`.
5. Replacing any `@ObservableObject` properties with `@Bindable` or similar depending on your usage.
6. Creating a model container and injecting it into your SwiftUI environment, using the `modelContainer()` modifier.

Depending on how neatly abstracted your Core Data layer was, you might also need a few other tweaks here and there, but the above should cover most of it.

And now for the most important part: test the heck out of your project, particularly focusing on the switchover from Core Data to SwiftData. Please keep in mind that even though SwiftData is built on top of Core Data, it's a significantly newer framework and so might have a few surprising behaviors from time time.

---

<TagLinks />