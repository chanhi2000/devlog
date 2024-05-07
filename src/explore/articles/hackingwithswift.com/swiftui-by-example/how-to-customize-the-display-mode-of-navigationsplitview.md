---
lang: ko-KR
title: How to customize the display mode of NavigationSplitView
description: Article(s) > How to customize the display mode of NavigationSplitView
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
      content: Article(s) > How to customize the display mode of NavigationSplitView
    - property: og:description
      content: How to customize the display mode of NavigationSplitView
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-customize-the-display-mode-of-navigationsplitview.html
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
  "title": "How to customize the display mode of NavigationSplitView | SwiftUI by Example",
  "desc": "How to customize the display mode of NavigationSplitView",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-customize-the-display-mode-of-navigationsplitview",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI's `NavigationSplitView` has three options to control how sidebars are displayed, each of which can be adjusted using the `navigationSplitViewStyle()` modifier.

The first is `.prominentDetail`, which tells SwiftUI you want the detail view to retain its full size at all times – the sidebar and content view will *slide over* the detail view, rather than pushing it to one side or squeezing it smaller:

```swift
struct ContentView: View {
    var body: some View {
        NavigationSplitView {
            Text("Sidebar")
        } content: {
            Text("Content")
        } detail: {
            Text("Detail")
        }
        .navigationSplitViewStyle(.prominentDetail)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-customize-the-display-mode-of-navigationsplitview-1.zip)

The second option is `.balanced`, which will reduce the size of your detail view as the sidebar or content bar are shown – just switch `.prominentDetail` to `.balanced`, like this:

```swift
struct ContentView: View {
    var body: some View {
        NavigationSplitView {
            Text("Sidebar")
        } content: {
            Text("Content")
        } detail: {
            Text("Detail")
        }
        .navigationSplitViewStyle(.balanced)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-customize-the-display-mode-of-navigationsplitview-2.zip)

The default is `.automatic`, which will vary according to the platform – at the time of writing, on iPhone it becomes `prominentDetail`, and on iPad it becomes `.balanced`.

::: details Similar solutions…

```component VPCard
{
  "title": "How to customize a view's width in NavigationSplitView | SwiftUI by Example",
  "desc": "How to customize a view's width in NavigationSplitView",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-customize-a-views-width-in-navigationsplitview.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a two-column or three-column layout with NavigationSplitView | SwiftUI by Example",
  "desc": "How to create a two-column or three-column layout with NavigationSplitView",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-two-column-or-three-column-layout-with-navigationsplitview.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to control which NavigationSplitView column is shown in compact layouts | SwiftUI by Example",
  "desc": "How to control which NavigationSplitView column is shown in compact layouts",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-control-which-navigationsplitview-column-is-shown-in-compact-layouts.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to display solid shapes | SwiftUI by Example",
  "desc": "How to display solid shapes",
  "link": "https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-display-solid-shapes.html",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to display a bottom sheet | SwiftUI by Example",
  "desc": "How to display a bottom sheet",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-display-a-bottom-sheet.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />