---
lang: ko-KR
title: How to let users delete rows from a list
description: Article(s) > How to let users delete rows from a list
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
      content: Article(s) > How to let users delete rows from a list
    - property: og:description
      content: How to let users delete rows from a list
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-let-users-delete-rows-from-a-list.html
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
  "title": "How to let users delete rows from a list | SwiftUI by Example",
  "desc": "How to let users delete rows from a list",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-let-users-delete-rows-from-a-list",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI provides two ways to let us delete rows from a list: a simple way supported on iOS 16.0 or later, and a more advanced way that works on older iOS versions too. Regardless of which approach you choose, you can also selectively disable deletion for rows using the `deleteDisabled()` modifier.

The simple approach to deletion works great if you just want users to swipe to delete items from an array, without adding any additional logic. To use it, use a data binding with your list and pass in the `editActions` parameter, like this:

```swift
struct ContentView: View {
    @State private var users = ["Glenn", "Malcolm", "Nicola", "Terri"]

    var body: some View {
        NavigationStack {
            List($users, id: \.self, editActions: .delete) { $user in
                Text(user)
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-let-users-delete-rows-from-a-list-1.zip)

That immediately lets users swipe to delete rows, and the `users` array will be updated as they do so. If you want to let them move the items as well, use `.all` rather than just `.delete`.

If you want to disable deletion for one row, use `deleteDisabled()` with whatever criteria you have. For example, we could say that the user can delete freely from the list as long as there's always at least 1 row remaining:

```swift
struct ContentView: View {
    @State private var users = ["Glenn", "Malcolm", "Nicola", "Terri"]

    var body: some View {
        NavigationStack {
            List($users, id: \.self, editActions: .delete) { $user in
                Text(user)
                    .deleteDisabled(users.count < 2)
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-let-users-delete-rows-from-a-list-2.zip)

For the more complex approach to deletion, we can attach an `onDelete(perform:)` modifier to a `ForEach` inside a list, and have it call a method of our choosing when a delete operation happens. This handler needs to have a specific signature that accepts multiples indexes to delete, like this:

```swift
func delete(at offsets: IndexSet) {
    // delete the objects here
}
```

Inside there you will usually want to call Swift's `remove(atOffsets:)` method to delete the requested rows from your sequence. Because SwiftUI is watching your state, any changes you make will automatically be reflected in your UI.

For example, this code creates a `ContentView` struct with a list of three items, then attaches an `onDelete(perform:)` modifier that removes any item from the list:

```swift
struct ContentView: View {
    @State private var users = ["Paul", "Taylor", "Adele"]

    var body: some View {
        NavigationStack {
            List {
                ForEach(users, id: \.self) { user in
                    Text(user)
                }
                .onDelete(perform: delete)
            }
            .navigationTitle("Users")
        }
    }

    func delete(at offsets: IndexSet) {
        users.remove(atOffsets: offsets)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-let-users-delete-rows-from-a-list-3.zip)

![Three rows in an iOS list, with the middle one showing a delete button after a swipe.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-let-users-delete-rows-from-a-list-1~dark@2x.png)

If you run that code you'll find you can swipe to delete any row in the list.

::: tip

In case you were wondering, `onDelete()` exists as a modifier for `ForEach` but *not* for `List` directly. This is because lists can include static rows, which of course cannot be deleted.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to let users move rows in a list | SwiftUI by Example",
  "desc": "How to let users move rows in a list",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-let-users-move-rows-in-a-list.md",
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
  "title": "Adding swipe to delete and EditButton | SwiftUI by Example",
  "desc": "Adding swipe to delete and EditButton",
  "link": "/explore/articles/hackingwithswift.com/swiftui/adding-swipe-to-delete-and-editbutton.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />