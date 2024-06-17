---
lang: ko-KR
title: Working with relationships
description: Article(s) > Working with relationships
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
      content: Article(s) > Working with relationships
    - property: og:description
      content: Working with relationships
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/working-with-relationships.html
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
  "title": "Working with relationships | SwiftData by Example",
  "desc": "Working with relationships",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/working-with-relationships", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

<VidStack src="youtube/m1H7Q7EM_6Y" />

So far we’ve had a simple data model containing a collection of destinations. To finish the app we’re going to upgrade this so that each destination has a list of sights that users want to visit there, for example they might say when they visit Rome they want to see the colosseum, the forum, the Vatican, and so on.

In SwiftData this is called a *relationship*: each destination has many sights to see. Rather than trying to cram all the sights into a single `Destination` object, we can instead create a separate `Sight` model, then tell SwiftData that our original `Destination` model has an array of sights – it will take care of linking the two for us.

To get started, create another new Swift file called Sight.swift, give it an import for SwiftData, then add this code there:

```swift
@Model
class Sight {
    var name: String

    init(name: String) {
        self.name = name
    }
}
```

That stores only a single piece of data, which is the name of the sight – later on you're welcome to add more to it, such as perhaps tracking whether the user has visited it already.

Now we can return to the `Destination` model and add a new property there:

```swift
var sights = [Sight]()
```

Just adding that property that is enough to tell SwiftData that each destination has many sights associated with it. Our original model didn't have that relationship, but that's okay: the next time you run the app, SwiftData will silently upgrade its data store to take this change into account with no extra work from us. This is called a *migration*, and it allows us to upgrade and adjust our models over time.

Of course, we need to actually add a way for users to list sights for each destination, and the simplest approach is to show a separate section in our view with a text field for new sight names.

First, add this new property to `EditDestinationView`:

```swift
@State private var newSightName = ""
```

That will track whatever the user is typing for their new sight name.

Second, add a new method that converts `newSightName` into an actual `Sight` object, then adds it to our destination's existing list of sights:

```swift
func addSight() {
    guard newSightName.isEmpty == false else { return }

    withAnimation {
        let sight = Sight(name: newSightName)
        destination.sights.append(sight)
        newSightName = ""
    }
}
```

And now we can add a new section to the form, looping over all the existing sights and also adding space to create new sights below:

```swift
Section("Sights") {
    ForEach(destination.sights) { sight in
        Text(sight.name)
    }

    HStack {
        TextField("Add a new sight in \(destination.name)", text: $newSightName)

        Button("Add", action: addSight)
    }
}
```

Notice how we can just access `destination.sights` directly? Relationships are loaded *lazily* by SwiftData, which means it will only load the sights for a destination only when they are actually used. This means `DestinationListingView` loads only the data it really needs, helping make sure our code remains fast and light on memory.

Now, before we're done with this relationship there's one tiny change I want to make. You see, right now we have a small problem: if our user decides they don't want to go to a destination they added, what should happen to all the sights they added to that destination?

SwiftData likes playing it safe by default, so in this situation deleting the destination will leave its sights intact and just hidden from view. Sometimes that's exactly what you'll want, but here it will just lead to clutter because there's no way of searching for sights that aren't attached to destinations.

This is when we need to give SwiftData a little extra guidance: we’re going to tell it that when we delete a destination it should also delete all the sights belonging to that destination.

To do that, we need to attach the `@Relationship` macro to the `sights` property, like this:

```swift
@Relationship(deleteRule: .cascade) var sights = [Sight]()
```

A *cascade* delete rule means "when we delete this object, delete all its sights too" – exactly what we want.

---

<TagLinks />