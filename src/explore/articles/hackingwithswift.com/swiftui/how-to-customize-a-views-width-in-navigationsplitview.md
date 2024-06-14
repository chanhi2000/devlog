---
lang: ko-KR
title: How to customize a view's width in NavigationSplitView
description: Article(s) > How to customize a view's width in NavigationSplitView
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
      content: Article(s) > How to customize a view's width in NavigationSplitView
    - property: og:description
      content: How to customize a view's width in NavigationSplitView
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-customize-a-views-width-in-navigationsplitview.html
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
  "title": "How to customize a view's width in NavigationSplitView | SwiftUI by Example",
  "desc": "How to customize a view's width in NavigationSplitView",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-customize-a-views-width-in-navigationsplitview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI's `NavigationSplitView` uses a system-standard width for the view it presents, but with the `navigationSplitViewColumnWidth()` modifier you can attempt to customize this.

::: note

The system can choose to ignore the width you specify. At the time of writing this modifier is ignored on iPhone, and on iPad only works for values *lower* than the default size.

:::

In its simplest form, sending a single value to `navigationSplitViewColumnWidth()` causes it to use a fixed size, no smaller or larger:

```swift
NavigationSplitView {
    Text("Sidebar")
        .navigationSplitViewColumnWidth(100)
} content: {
   Text("Content")
        .navigationSplitViewColumnWidth(200)
} detail: {
    Text("Detail")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-customize-a-views-width-in-navigationsplitview-1.zip)

However, if you're happy to allow flexibility – and if you're platform supports it, which right now might just be macOS – you an provide minimum, ideal, and maximum sizes instead, like this:

```swift
NavigationSplitView {
    Text("Sidebar")
        .navigationSplitViewColumnWidth(min: 100, ideal: 200, max: 300)
} content: {
   Text("Content")
        .navigationSplitViewColumnWidth(min: 100, ideal: 200, max: 300)
} detail: {
    Text("Detail")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-customize-a-views-width-in-navigationsplitview-2.zip)

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
  "title": "How to make two views the same width or height | SwiftUI by Example",
  "desc": "How to make two views the same width or height",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-make-two-views-the-same-width-or-height.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a two-column or three-column layout with NavigationSplitView | SwiftUI by Example",
  "desc": "How to create a two-column or three-column layout with NavigationSplitView",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-two-column-or-three-column-layout-with-navigationsplitview.md",
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
  "title": "How to let users customize toolbar buttons | SwiftUI by Example",
  "desc": "How to let users customize toolbar buttons",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-let-users-customize-toolbar-buttons.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />