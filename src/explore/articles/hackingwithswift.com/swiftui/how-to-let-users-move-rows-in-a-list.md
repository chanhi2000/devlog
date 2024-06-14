---
lang: ko-KR
title: How to let users move rows in a list
description: Article(s) > How to let users move rows in a list
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
      content: Article(s) > How to let users move rows in a list
    - property: og:description
      content: How to let users move rows in a list
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-let-users-move-rows-in-a-list.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
   "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to let users move rows in a list | SwiftUI by Example",
  "desc": "How to let users move rows in a list",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-let-users-move-rows-in-a-list",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI provides two ways to let us move items in a list: a simple way supported on iOS 16.0 or later, and a more advanced way that works on older iOS versions too. Regardless of which approach you choose, you can also selectively disable moving a row using the `moveDisabled()` modifier.

The simple approach to moving works great if you're just moving your item around in an array, without adding any additional logic. To use it, use a data binding with your list and pass in the `editActions` parameter, like this:

```swift
struct ContentView: View {
    @State private var users = ["Glenn", "Malcolm", "Nicola", "Terri"]

    var body: some View {
        NavigationStack {
            List($users, id: \.self, editActions: .move) { $user in
                Text(user)
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-let-users-move-rows-in-a-list-1.zip)

That immediately lets users drag the list rows around, and the `users` array will be updated as they do so. If you want to add swipe to delete as well, use `.all` rather than just `.move`.

If you want to disable movement for one row, use `moveDisabled()` with whatever criteria you have. For example, we could say that Glenn must always appear first in our list like this:

```swift
struct ContentView: View {
    @State private var users = ["Glenn", "Malcolm", "Nicola", "Terri"]

    var body: some View {
        NavigationStack {
            List($users, id: \.self, editActions: .move) { $user in
                Text(user)
                    .moveDisabled(user == "Glenn")
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-let-users-move-rows-in-a-list-2.zip)

For the more complex approach to moving, we can attach an `onMove(perform:)` modifier to a `ForEach` inside a list, and have it call a method of our choosing when a move operation happens. That method needs to accept a source `IndexSet` and a destination `Int`, like this:

```swift
func move(from source: IndexSet, to destination: Int) {
    // move the data here
}
```

When moving several items it's always a good idea to move the later ones first so that you avoid moving other items and getting your indexes confused. Fortunately, Swift's sequences have a built-in way to move index sets for us, so we can just pass the parameters along and have it work correctly.

As an example, we could create a `ContentView` struct that sets up an array of three username strings, and asks SwiftUI to move them around calling a `move()` method. In order to activate moving – i.e., to make the drag handles appear – it also adds an edit button to the navigation stack so the user can toggle editing mode.

Here's the code:

```swift
struct ContentView: View {
    @State private var users = ["Paul", "Taylor", "Adele"]

    var body: some View {
        NavigationStack {
            List {
                ForEach(users, id: \.self) { user in
                    Text(user)
                }
                .onMove(perform: move)
            }
            .toolbar {
                EditButton()
            }
        }
    }

    func move(from source: IndexSet, to destination: Int) {
        users.move(fromOffsets: source, toOffset: destination)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-let-users-move-rows-in-a-list-3.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-let-users-move-rows-in-a-list-1~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "How to let users delete rows from a list | SwiftUI by Example",
  "desc": "How to let users delete rows from a list",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-let-users-delete-rows-from-a-list.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to change the tint color for individual list rows | SwiftUI by Example",
  "desc": "How to change the tint color for individual list rows",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-change-the-tint-color-for-individual-list-rows.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add a badge to TabView items and List rows | SwiftUI by Example",
  "desc": "How to add a badge to TabView items and List rows",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-add-a-badge-to-tabview-items-and-list-rows.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to set the background color of list rows using listRowBackground() | SwiftUI by Example",
  "desc": "How to set the background color of list rows using listRowBackground()",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-set-the-background-color-of-list-rows-using-listrowbackground.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Showing and hiding form rows | SwiftUI by Example",
  "desc": "Showing and hiding form rows",
  "link": "/explore/articles/hackingwithswift.com/swiftui/showing-and-hiding-form-rows.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />