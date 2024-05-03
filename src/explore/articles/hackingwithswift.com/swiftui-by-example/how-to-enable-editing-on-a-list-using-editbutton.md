---
lang: ko-KR
title: How to enable editing on a list using EditButton
description: Article(s) > How to enable editing on a list using EditButton
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
      content: Article(s) > How to enable editing on a list using EditButton
    - property: og:description
      content: How to enable editing on a list using EditButton
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-enable-editing-on-a-list-using-editbutton.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/README.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to enable editing on a list using EditButton | SwiftUI by Example",
  "desc": "How to enable editing on a list using EditButton",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-enable-editing-on-a-list-using-editbutton",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you have configured a SwiftUI list view to support deletion or editing of its items, you can allow the user to toggle editing mode for your list view by adding an `EditButton` somewhere.

For example, this `ContentView` struct defines an array of users, attaches an `onDelete()` method, then adds an edit button to the navigation bar:

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
            .toolbar {
                EditButton()
            }
        }
    }

    func delete(at offsets: IndexSet) {
        users.remove(atOffsets: offsets)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-enable-editing-on-a-list-using-editbutton-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-enable-editing-on-a-list-using-editbutton-1~dark.mp4" />

When that is run, you'll find you can tap the edit button to enable or disable editing mode for the items in the list.

::: details Similar solutions…

```component VPCard
{
  "title": "Adding swipe to delete and EditButton | SwiftUI by Example",
  "desc": "Adding swipe to delete and EditButton",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/adding-swipe-to-delete-and-editbutton.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to enable pull to refresh | SwiftUI by Example",
  "desc": "How to enable pull to refresh",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-enable-pull-to-refresh.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to enable vertical page scrolling | SwiftUI by Example",
  "desc": "How to enable vertical page scrolling",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-enable-vertical-page-scrolling.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to allow row selection in a list | SwiftUI by Example",
  "desc": "How to allow row selection in a list",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-allow-row-selection-in-a-list.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let users move rows in a list | SwiftUI by Example",
  "desc": "How to let users move rows in a list",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-move-rows-in-a-list.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />