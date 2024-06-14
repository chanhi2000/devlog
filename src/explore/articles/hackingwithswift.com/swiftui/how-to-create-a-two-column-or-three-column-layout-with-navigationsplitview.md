---
lang: ko-KR
title: How to create a two-column or three-column layout with NavigationSplitView
description: Article(s) > How to create a two-column or three-column layout with NavigationSplitView
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
      content: Article(s) > How to create a two-column or three-column layout with NavigationSplitView
    - property: og:description
      content: How to create a two-column or three-column layout with NavigationSplitView
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-two-column-or-three-column-layout-with-navigationsplitview.html
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
  "title": "How to create a two-column or three-column layout with NavigationSplitView | SwiftUI by Example",
  "desc": "How to create a two-column or three-column layout with NavigationSplitView",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-two-column-or-three-column-layout-with-navigationsplitview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

Updated for Xcode 15

**Updated in iOS 16**

SwiftUI's `NavigationSplitView` allows us to create multi-column layouts on larger devices (iPadOS, macOS, and large iPhones in landscape), but automatically collapses to a `NavigationStack`-style layout when space is limited.

In its simplest form, you should provide your sidebar as its first trailing closure, and your detail view as its second, like this:

```swift
NavigationSplitView {
    Text("Sidebar")
} detail: {
    Text("Detail View")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-a-two-column-or-three-column-layout-with-navigationsplitview-1.zip)

Usually, though, you'll want to add some kind of selection mechanism to the sidebar, then load that selection in the detail view, like this:

```swift
NavigationSplitView {
    List(1..<50) { i in
        NavigationLink("Row \(i)", value: i)
    }
    .navigationDestination(for: Int.self) {
        Text("Selected row \($0)")
    }
    .navigationTitle("Split View")
} detail: {
    Text("Please select a row")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-a-two-column-or-three-column-layout-with-navigationsplitview-2.zip)

In that code, the “Please select a row” text is shown only when the user has yet to make a selection in the sidebar, but it will automatically be replaced when the user makes a selection - the `navigationDestination()` modifier displays its destination view in the detail area automatically. Even better, when space is limited you'll see the whole thing flattens down to a regular `NavigationStack`, so you get the best of both worlds.

If you want to go further, `NavigationSplitView` allows us to add a *third* view to its layout, which can be shown with a button tap:

```swift
struct ContentView: View {
    var body: some View {
        NavigationSplitView {
            Text("Sidebar")
        } content: {
            Text("Primary View")
        } detail: {
            Text("Detail View")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-a-two-column-or-three-column-layout-with-navigationsplitview-3.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-a-sidebar-for-ipados-1~dark.mp4" />

SwiftUI will automatically take care of showing a button to slide in your bar from the side of the screen, and also collapse it with your primary view if you're in a compact size class.

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-a-sidebar-for-ipados-2~dark.mp4" />

If you're targeting iPadOS 15 or earlier, you can get a sidebar by placing three views inside a `NavigationView`, like this:

```swift
struct ContentView: View {
    var body: some View {
        NavigationView {
            Text("Sidebar")
            Text("Primary View")
            Text("Detail View")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-a-two-column-or-three-column-layout-with-navigationsplitview-4.zip)

If you're presenting a list inside an iPadOS 15 sidebar, it's a good idea to use the `.listStyle()` to give it the system-standard theme for sidebars, like this:

```swift
struct ContentView: View {
    var body: some View {
        List(1..<100) { i in
            Text("Row \(i)")
        }
        .listStyle(.sidebar)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-a-two-column-or-three-column-layout-with-navigationsplitview-5.zip)

![A list of rows with no separators and a gray background.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-a-sidebar-for-ipados-3~dark@2x.png)

::: details Similar solutions…

```component VPCard
{
  "title": "How to customize the display mode of NavigationSplitView | SwiftUI by Example",
  "desc": "How to customize the display mode of NavigationSplitView",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-customize-the-display-mode-of-navigationsplitview.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to customize a view's width in NavigationSplitView | SwiftUI by Example",
  "desc": "How to customize a view's width in NavigationSplitView",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-customize-a-views-width-in-navigationsplitview.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to control which NavigationSplitView column is shown in compact layouts | SwiftUI by Example",
  "desc": "How to control which NavigationSplitView column is shown in compact layouts",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-control-which-navigationsplitview-column-is-shown-in-compact-layouts.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a custom layout using the Layout protocol | SwiftUI by Example",
  "desc": "How to create a custom layout using the Layout protocol",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-custom-layout-using-the-layout-protocol.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create an adaptive layout with ViewThatFits | SwiftUI by Example",
  "desc": "How to create an adaptive layout with ViewThatFits",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-an-adaptive-layout-with-viewthatfits.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />