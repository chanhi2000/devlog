---
lang: ko-KR
title: How to customize the background color of navigation bars, tab bars, and toolbars
description: Article(s) > How to customize the background color of navigation bars, tab bars, and toolbars
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
      content: Article(s) > How to customize the background color of navigation bars, tab bars, and toolbars
    - property: og:description
      content: How to customize the background color of navigation bars, tab bars, and toolbars
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-customize-the-background-color-of-navigation-bars-tab-bars-and-toolbars.html
next: /explore/articles/hackingwithswift.com/swiftui-by-example/introduction-to-navigation.md
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
  "title": "How to customize the background color of navigation bars, tab bars, and toolbars | SwiftUI by Example",
  "desc": "How to customize the background color of navigation bars, tab bars, and toolbars",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-customize-the-background-color-of-navigation-bars-tab-bars-and-toolbars",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 16**

SwiftUI's `toolbarBackground()` modifier lets us customize the way toolbars look in our app, controlling the styling of `NavigationStack`, `TabView`, and other toolbars as needed.

For example, this shows a list of 100 rows using a teal background color for the navigation bar:

```swift
NavigationStack {
    List(0..<100) {
        Text("Row \($0)")
    }
    .navigationTitle("100 Rows")
    .toolbarBackground(.teal)
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-customize-the-background-color-of-navigation-bars-tab-bars-and-toolbars-1.zip)

::: important

The background you choose here is used when the system deems it necessary, rather than always. So, in the code above the navigation stack view will appear without the color at first, but will change color as soon as the list scrolls under the navigation bar.

:::

Using `toolbarBackground(.teal)` doesn't specify *which* toolbar should be colored teal, so it's down to the system to select whatever is the primary toolbar – that's the navigation bar on iOS, but on macOS it will be the window toolbar instead.

If you want one or two bar types to be colored, or perhaps if you want to provide different styling for each bar, you can provide a second parameter to `toolbarBackground()` to get extra control. For example, we could ask the system to color both the tab bar and the navigation bar like this:

```swift
TabView {
    NavigationStack {
        List(0..<100) {
            Text("Row \($0)")
        }
        .navigationTitle("100 Rows")
        .toolbarBackground(.orange, for: .navigationBar, .tabBar)
    }
    .tabItem {
        Label("Rows", systemImage: "list.bullet")
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-customize-the-background-color-of-navigation-bars-tab-bars-and-toolbars-2.zip)

This modifier has one other important use: rather than specify a background color, you can ask the system to hide the background entirely, like this:

```swift
NavigationStack {
    List(0..<100) {
        Text("Row \($0)")
    }
    .navigationTitle("100 Rows")
    .toolbarBackground(.hidden)
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-customize-the-background-color-of-navigation-bars-tab-bars-and-toolbars-3.zip)

In that example, the list content will appear directly alongside the navigation title as the user scrolls. If you take this approach, please ensure your main content and toolbar content don't clash when they overlap!

::: details Similar solutions…

```component VPCard
{
  "title": "How to hide the tab bar, navigation bar, or other toolbars | SwiftUI by Example",
  "desc": "How to hide the tab bar, navigation bar, or other toolbars",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-hide-the-tab-bar-navigation-bar-or-other-toolbars.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tips-and-tricks.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to embed views in a tab bar using TabView | SwiftUI by Example",
  "desc": "How to embed views in a tab bar using TabView",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-embed-views-in-a-tab-bar-using-tabview.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to change the background color of List, TextEditor, and more | SwiftUI by Example",
  "desc": "How to change the background color of List, TextEditor, and more",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-change-the-background-color-of-list-texteditor-and-more.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />