---
lang: ko-KR
title: Querying SwiftData objects in SwiftUI
description: Article(s) > Querying SwiftData objects in SwiftUI
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
      content: Article(s) > Querying SwiftData objects in SwiftUI
    - property: og:description
      content: Querying SwiftData objects in SwiftUI
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/querying-swiftdata-objects-in-swiftui.html
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
  "title": "Querying SwiftData objects in SwiftUI | SwiftData by Example",
  "desc": "Querying SwiftData objects in SwiftUI",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/querying-swiftdata-objects-in-swiftui", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

<VidStack src="youtube/Saw_sZWa4aQ" />

Once you've designed your SwiftData models and injected them into your SwiftUI app using the `modelContainer()` modifier, the next step is to create some SwiftUI code to read out objects of your model and display them somehow.

Start by opening your ContentView.swift file and adding an `import SwiftData` line at the top to bring in all the SwiftData code we need.

Now add this new property to the `ContentView` struct:

```swift
@Query var destinations: [Destination]
```

That uses the `@Query` macro to read all `Destination` objects being managed by SwiftData. We don't have any destinations yet so that array will be empty, but we'll fix that later.

`@Query` is really smart: it will load all the destinations immediately when the view appears, but it will also watch the database for changes so that whenever any `Destination` object gets added, deleted, or changed, the `destinations` property will also be updated.

::: tip

If you've used Core Data previously, this is equivalent to the `@FetchRequest` property wrapper.

:::

Because all SwiftData model objects automatically conform to the `Identifiable` protocol, we can immediately write some SwiftUI code to show all our destinations in a list:

```swift
NavigationStack {
    List {
        ForEach(destinations) { destination in
            VStack(alignment: .leading) {
                Text(destination.name)
                    .font(.headline)

                Text(destination.date.formatted(date: .long, time: .shortened))
            }
        }
    }
    .navigationTitle("iTour")
}
```

::: tip

We could have used `List(destinations)` rather than a `List` plus a `ForEach`, but we need the `ForEach` so we can add swipe to delete later.

:::

Like I said earlier, that list will be empty because we haven't created any destinations yet. Obviously we want the user to be able to add their own destinations once the app is finished, but for now we can take a little shortcut and add some sample data.

Put this below the `navigationTitle()` modifier:

```swift
.toolbar {
    Button("Add Samples", action: addSamples)
}
```

And now add this method for it to run:

```swift
func addSamples() {
    let rome = Destination(name: "Rome")
    let florence = Destination(name: "Florence")
    let naples = Destination(name: "Naples")
}
```

That creates some instances of our `Destination` model, but Swift will warn us that they aren’t used – we are creating them, but we aren't actually telling SwiftData to store them.

To do that we need to learn an important SwiftData concept called the *model context*, which has the job of tracking all objects that are currently being used by our app. That's not *every* object, because it would be terrifically inefficient to load everything all at once. Instead, it's just objects that we're actively using right now.

When we used the `modelContainer()` modifier earlier that *also* created a model context for us, and placed that context into SwiftUI’s environment for us to use. This automatic model context always runs on Swift’s main actor, so it’s safe to use from our user interface.

We need to access that model context to add our objects to SwiftData's storage, and we can use SwiftUI’s `@Environment` property wrapper to get it. Add this property to `ContentView` now:

```swift
@Environment(\.modelContext) var modelContext
```

And now we can insert our new `Destination` objects into the model context by adding these three lines at the end of `addSamples()`:

```swift
modelContext.insert(rome)
modelContext.insert(florence)
modelContext.insert(naples)
```

Run the app again then press Add Samples, and you should see the new destinations appear in our list – it works! Even better, if you go back to Xcode and press Cmd+R again to relaunch the app, you’ll see they are still there, because SwiftData automatically saved them for us.

This autosave behavior is enabled by default: as soon as our button code finishes executing SwiftData will save all our changes to its permanent storage, so our data is always safe.

---

<TagLinks />