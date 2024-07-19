---
lang: ko-KR
title: How to dynamically change a query's sort order or predicate
description: Article(s) > How to dynamically change a query's sort order or predicate
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
      content: Article(s) > How to dynamically change a query's sort order or predicate
    - property: og:description
      content: How to dynamically change a query's sort order or predicate
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-dynamically-change-a-querys-sort-order-or-predicate.html
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
  "title": "How to dynamically change a query's sort order or predicate | SwiftData by Example",
  "desc": "How to dynamically change a query's sort order or predicate",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-dynamically-change-a-querys-sort-order-or-predicate", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

When it comes to sorting our data, SwiftData has two approaches: the trivial version that works great in a WWDC video and a handful of small projects, and a more complex version that is much more indicative of the kinds of apps you’ll be building in real life. 

We’ve already seen the simple version, because it’s where we can put our sort order directly into the `@Query` macro, like this:

```swift
@Query(sort: \.name, order: .reverse) var users: [User]
```

In practice, however, that doesn’t happen much – usually users want to be able to set the sort order dynamically, which is not actually supported by `@Query` right now. 

To get dynamic sorting working you need to move your `@Query` properties down a view in SwiftUI’s hierarchy – you need to put it into a subview where you can provide a sort value using dependency injection.

This means making a new SwiftUI that uses `@Query` to show the SwiftData objects you're working with, then embed that in a parent view that provides some UI for the user to select their sort order or filter.

For example, if we were working with a `User` model then we might create a `UserListingView` like this one:

```swift
import SwiftData
import SwiftUI

struct UserListingView: View {
    @Query var users: [User]
    @Environment(\.modelContext) var modelContext

    var body: some View {
        List {
            ForEach(users) { user in
                NavigationLink(value: user) {
                    Text("\(user.name) is \(user.age) years old")
                }
            }
            .onDelete(perform: deleteUser)
        }
    }

    func deleteUser(_ indexSet: IndexSet) {
        for item in indexSet {
            let object = users[item]
            modelContext.delete(object)
        }
    }
}
```

And then back in `ContentView` we could create that inside a list such as this:

```swift
NavigationStack {
    UserListingView()
}
```

This change doesn’t actually handle sorting – this is just the setup required to make sorting possible. However, because we now have a subview we’re able to send values into there to control the `@Query` property wrapper.

This takes four steps in in total:

1. Telling the `UserListingView` that it needs to be created with some kind of sort order.
2. Making some storage to hold whatever is the currently active sort order when your program is running.
3. Passing that value into `UserListingView` when it’s created.
4. Creating some UI to adjust that sort order based on the user’s settings.

To complete that first step, we need to adapt the initializer in `UserListingView` so that it changes the query using a sort descriptor passed in from a parent view. This needs to so change the query object itself rather than the array inside it, so as a result we need to access the underscored property name like this:

```swift
init(sort: SortDescriptor<User>) {
    _users = Query(sort: [sort])
}
```

Then in `ContentView` we would add a property to store the current sort order with a sensible default:

```swift
@State private var sortOrder = SortDescriptor(\User.name)
```

We can then use pass that into `UserListingView` wherever it's embedded, like so:

```swift
UserListingView(sort: sortOrder)
```

And finally, we need some UI in `ContentView` to present the user with various sorting options, then adjust our sort order as appropriate. For example, we could put this into a toolbar:

```swift
Menu("Sort") {
    Picker("Sort", selection: $sortOrder) {
        Text("Name")
            .tag(SortDescriptor(\User.name))

        Text("Age")
            .tag(SortDescriptor(\User.age, order: .reverse))

        Text("City")
            .tag(SortDescriptor(\User.city))
    }
    .pickerStyle(.inline)
}
```

What's happening here is that we're moving the sort selection up one level from `UserListingView`, which means we can now control it dynamically. SwiftUI will automatically recreate `UserListingView` whenever that sort order changes, which in turn will recreate the query.

::: tip

You could easily adjust this so your child view's initializer accepts an array of sort descriptors.

:::

---

<TagLinks />