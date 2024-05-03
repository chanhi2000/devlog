---
lang: ko-KR
title: How to allow row selection in a list
description: Article(s) > How to allow row selection in a list
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
      content: Article(s) > How to allow row selection in a list
    - property: og:description
      content: How to allow row selection in a list
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-allow-row-selection-in-a-list.html
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
  "title": "How to allow row selection in a list | SwiftUI by Example",
  "desc": "How to allow row selection in a list",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-allow-row-selection-in-a-list",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI's lists support both single and multiple selection of its items, but only when your list is in editing mode.

To support single selection, first add an optional property of the same type you're using inside your list. For example, if you were using a list of integers you would have an optional `Int`. Once you have that, pass it to your list using its `selection` parameter, then make sure your list is in editing mode.

As an example, this code shows an array of strings in a list, and stores the selected item as an optional string:

```swift
struct ContentView: View {
    @State private var selection: String?

    let names = [
        "Cyril",
        "Lana",
        "Mallory",
        "Sterling"
    ]

    var body: some View {
        NavigationStack {
            List(names, id: \.self, selection: $selection) { name in
                Text(name)
            }
            .navigationTitle("List Selection")
            .toolbar {
                EditButton()
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-allow-row-selection-in-a-list-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-allow-row-selection-in-a-list-1~dark.mp4" />

Notice that edit button in the toolbar – remember, your list must be in editing mode to support selection.

If you want *multiple* selection, all you need to do is change your selection property into a `Set` of the same type as your list array. So, if we wanted multiple selection in the previous example we'd use this:

```swift
@State private var selection = Set<String>()
```

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-allow-row-selection-in-a-list-2~dark.mp4" />

::: tip

Both the single and multiple selection options can be changed by you programmatically, allowing you to change which rows were selected by modifying the state yourself.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to adjust List row separator insets | SwiftUI by Example",
  "desc": "How to adjust List row separator insets",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-list-row-separator-insets.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add custom swipe action buttons to a List row | SwiftUI by Example",
  "desc": "How to add custom swipe action buttons to a List row",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-custom-swipe-action-buttons-to-a-list-row.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to push a new view when a list row is tapped | SwiftUI by Example",
  "desc": "How to push a new view when a list row is tapped",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-push-a-new-view-when-a-list-row-is-tapped.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to scroll to a specific row in a list | SwiftUI by Example",
  "desc": "How to scroll to a specific row in a list",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-scroll-to-a-specific-row-in-a-list.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to adjust List row separator visibility and color | SwiftUI by Example",
  "desc": "How to adjust List row separator visibility and color",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-list-row-separator-visibility-and-color.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />