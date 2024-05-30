---
lang: ko-KR
title: How to open a new window
description: Article(s) > How to open a new window
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
      content: Article(s) > How to open a new window
    - property: og:description
      content: How to open a new window
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-open-a-new-window.html
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
  "title": "How to open a new window | SwiftUI by Example",
  "desc": "How to open a new window",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-open-a-new-window",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI provides an `openWindow` environment key that allows us to create new windows on macOS whenever we need them.

To get started, first edit your `App` scene to include a new `Window`. This means providing a window title, but also an *identifier* – a name we’ll use when asking the system to open this window:

```swift
Window("What's New", id: "whats-new") {
    Text("New in this version…")
}
```

That can be the only scene in your app body, or it can live alongside other windows or window groups. If it *is* the only window in your app, macOS will automatically remove the File > New menu item, and your app will automatically terminate when the last window is closed.

::: tip

If you add an explicit `navigationTitle()` to your window contents, that will override any window title string.

:::

When you want to *open* that window, call the `openWindow` environment key with the same ID value, like this:

```swift
struct ContentView: View {
    @Environment(\.openWindow) var openWindow

    var body: some View {
        Button("Show What's New") {
            openWindow(id: "whats-new")
        }
    }
}
```

The window can also be opened by going to the Window menu – macOS will automatically show it there, using the window title you provided.

::: details Similar solutions…

```component VPCard
{
  "title": "How to open web links in Safari | SwiftUI by Example",
  "desc": "How to open web links in Safari",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-open-web-links-in-safari.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to present a new view using sheets | SwiftUI by Example",
  "desc": "How to present a new view using sheets",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-present-a-new-view-using-sheets.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to push a new view when a list row is tapped | SwiftUI by Example",
  "desc": "How to push a new view when a list row is tapped",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-push-a-new-view-when-a-list-row-is-tapped.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to combine shapes to create new shapes | SwiftUI by Example",
  "desc": "How to combine shapes to create new shapes",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-combine-shapes-to-create-new-shapes.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to push a new view onto a NavigationStack | SwiftUI by Example",
  "desc": "How to push a new view onto a NavigationStack",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-push-a-new-view-onto-a-navigationstack.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />