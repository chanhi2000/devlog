---
lang: ko-KR
title: How to create multi-column lists using Table
description: Article(s) > How to create multi-column lists using Table
category:
  - Swift
  - SwiftUI
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swiftui
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to create multi-column lists using Table
    - property: og:description
      content: How to create multi-column lists using Table
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-multi-column-lists-using-table.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
   "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to create multi-column lists using Table | SwiftUI by Example",
  "desc": "How to create multi-column lists using Table",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-multi-column-lists-using-table",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Improved in iOS 17**

SwiftUI's `Table` view type let us create lists with multiple columns, including selection and sorting. They work quite differently from regular lists because we pass the `Table` an array of data to show then specify values to display using key paths, each time also passing a title to show in the header area. If you're using iOS 17 or later, you can add `DisclosureTableRow` instances to make your table rows expand and collapse.

::: important

On iPhone tables are collapsed down to show just the first column of data, but on iPad and Mac they will show all their data.

:::

As an example, we might have a simple `User` struct like this one:

```swift
struct User: Identifiable {
    let id: Int
    var name: String
    var score: Int
}
```

I've used both a `String` and `Int` for types there, because both are used slightly differently inside `Table`.

With that `User` struct in place, we could then go ahead and create a few instances of that struct, then display it using a simple `Table` like this:

```swift
struct ContentView: View {
    @State private var users = [
        User(id: 1, name: "Taylor Swift", score: 95),
        User(id: 2, name: "Justin Bieber", score: 80),
        User(id: 3, name: "Adele Adkins", score: 85)
    ]

    var body: some View {
        Table(users) {
            TableColumn("Name", value: \.name)
            TableColumn("Score") { user in
                Text(String(user.score))
            }
        }
    }
}
```

Notice how:

1. I've declared the array as being mutable using `@State` so that we can add sorting shortly. If you don't need sorting, a simple constant is fine.
2. Both table columns have a string title: “Name” and “Score”.
3. The first table column reads its value using the simple key path `\.name`.
4. The second table column uses no key path, but instead creates its own custom contents.

The reason I've taken two different approaches is because `TableColumn` knows how to use a key path to display values that are simple strings, but for anything else – a `score` integer in our case – we need to add custom view creation code by hand. So, when you just want to display a simple string you should use a key path, but for displaying all other types you should use a custom view.

Selection in tables works slightly differently from lists: rather than storing the specific object that was selected, `Table` instead wants to bind to the *identifier* of the object. As our User struct conforms to `Identifiable`, this will be `User.ID` – the associated type that points to our `id` property. So, we'd add a new property to store an optional `User.ID` value, then bind it to the `Table` like this:

```swift
struct ContentView: View {
    @State private var users = [
        User(id: 1, name: "Taylor Swift", score: 95),
        User(id: 2, name: "Justin Bieber", score: 80),
        User(id: 3, name: "Adele Adkins", score: 85)
    ]

    @State private var selection: User.ID?

    var body: some View {
        Table(users, selection: $selection) {
            TableColumn("Name", value: \.name)
            TableColumn("Score") { user in
                Text(String(user.score))
            }
        }
    }
}
```

::: tip

If you want multiple rows to be selectable, use `selection = Set<User.ID>()` rather than `selection: User.ID?`.

:::

Adding sorting to the mix takes four steps:

1. Make an array of `KeyPathComparator` objects with your default sorting inside.
2. Add that as the `sortOrder` parameter to your `Table` initializer.
3. Add a specific key path for the “Score” column, so SwiftUI understands what sorting it means.
4. Watch for changes in the sort order, and resort your array as needed. We already marked our array using `@State`, so we can sort it in place.

Here's how our example code looks with those four changes in place:

```swift
struct ContentView: View {
    @State private var users = [
        User(id: 1, name: "Taylor Swift", score: 95),
        User(id: 2, name: "Justin Bieber", score: 80),
        User(id: 3, name: "Adele Adkins", score: 85)
    ]

    @State private var sortOrder = [KeyPathComparator(\User.name)]
    @State private var selection: User.ID?

    var body: some View {
        Table(users, selection: $selection, sortOrder: $sortOrder) {
            TableColumn("Name", value: \.name)
            TableColumn("Score", value: \.score) { user in
                Text(String(user.score))
            }
        }
        .onChange(of: sortOrder) { newOrder in
            users.sort(using: newOrder)
        }
    }
}
```

There are two extra things you'll want to know when using `Table`. First, you can set a specific width for one or more columns using a `width()` modifier. This can be a fixed value, like this:

```swift
TableColumn("Score", value: \.score) { user in
    Text(String(user.score))
}
.width(100)
```

Or you can provide a range of widths, like `frame()`:

```swift
TableColumn("Score", value: \.score) { user in
    Text(String(user.score))
}
.width(min: 50, max: 100)
```

And second, rather than sending a fixed into `Table`, you can also pass a `rows` closure that specifies the exact data you want to show. This is helpful when you want to use static list rows, or mix static and dynamic at the same time. Each row needs to be sent in as a `TableRow` instance, which will take as its only parameter a value to show – one of our `User` instances in our case.

As an example, we could use a `ForEach` to create all the regular dynamic rows, but also add a “First” and “Last” user at the start and end of our table:

```swift
struct ContentView: View {
    @State private var users = [
        User(id: 1, name: "Taylor Swift", score: 90),
        User(id: 2, name: "Justin Bieber", score: 80),
        User(id: 3, name: "Adele Adkins", score: 85)
    ]

    @State private var sortOrder = [KeyPathComparator(\User.name)]
    @State private var selection: User.ID?

    var body: some View {
        Table(selection: $selection, sortOrder: $sortOrder) {
            TableColumn("Name", value: \.name)
            TableColumn("Score", value: \.score) { user in
                Text(String(user.score))
            }
            .width(min: 50, max: 100)
        } rows: {
            TableRow(User(id: 0, name: "First", score: 0))
            ForEach(users)
            TableRow(User(id: 4, name: "Last", score: 100))
        }
        .onChange(of: sortOrder) { newOrder in
            users.sort(using: newOrder)
        }
    }
}
```

::: tip

As the two extra rows are fixed data, they won't be affected by any sorting in the `users` array. The dynamic rows are created using `ForEach`, and from Xcode 15 and later just needs to be given the data you want to iterate over.

:::

If you're targeting iOS 17 or later, you can create expanding tables by adding one or more `DisclosureTableRow` to your tables. Demonstrating the takes a little more code because we need to nest some information in a meaningful way.

First, here's an example `Person` struct that stores someone's name, where they live, where they were born, and what children they have:

```swift
struct Person: Identifiable {
    let id = UUID()
    let name: String
    var city: String
    let birthDate: Date
    var children = [Person]()

    // some example websites
    static let betsy = Person(name: "Betsy Appleseed", city: "San Jose", birthDate: ISO8601DateFormatter().date(from: "1977-01-30T11:28:00+00:00")!)
    static let kate = Person(name: "Kate Appleseed", city: "Los Altos", birthDate: ISO8601DateFormatter().date(from: "1977-02-25T04:15:00+00:00")!)
    static let johnny = Person(name: "Johnny Appleseed", city: "Santa Clara", birthDate: ISO8601DateFormatter().date(from: "1952-06-03T12:45:00+00:00")!, children: [betsy, kate])
    static let tim = Person(name: "Tim Appleseed", city: "Mountain View", birthDate: ISO8601DateFormatter().date(from: "1960-11-01T09:41:00+00:00")!)
}
```

Now we can create a `ContentView` that displays a table of people, using either a regular `TableRow` or a `DisclosureTableRow` depending on whether each person has children or not:

```swift
struct ContentView: View {
    let family: [Person] = [.johnny, .tim]

    @State private var bookmarksExpanded = false

    var body: some View {
        Table(of: Person.self) {
            TableColumn("Name", value: \.name)
            TableColumn("City", value: \.city)
            TableColumn("Birthdate") { person in
                Text(person.birthDate.formatted(date: .numeric, time: .omitted))
            }
        } rows: {
            ForEach(family) { member in
                if member.children.isEmpty {
                    TableRow(member)
                } else {
                    DisclosureTableRow(member) {
                        ForEach(member.children)
                    }
                }
            }
        }
    }
}
```

::: tip

Although you don't need to display a simple TableRow for non-expanding groups, SwiftUI will show a rather useless disclosure arrow for DisclosureTableRow instances without children.

You can if you want bind an isExpanded Boolean to DisclosureTableRow to track whether the user has currently opened that group.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to create expanding lists | SwiftUI by Example",
  "desc": "How to create expanding lists",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-expanding-lists.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create grouped and inset grouped lists | SwiftUI by Example",
  "desc": "How to create grouped and inset grouped lists",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-grouped-and-inset-grouped-lists.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Working with lists | SwiftUI by Example",
  "desc": "Working with lists",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/working-with-lists.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to get translucent lists on macOS | SwiftUI by Example",
  "desc": "How to get translucent lists on macOS",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-get-translucent-lists-on-macos.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make carousel lists on watchOS | SwiftUI by Example",
  "desc": "How to make carousel lists on watchOS",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-carousel-lists-on-watchos.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />