---
lang: ko-KR
title: How to hide the tab bar, navigation bar, or other toolbars
description: Article(s) > How to hide the tab bar, navigation bar, or other toolbars
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
      content: Article(s) > How to hide the tab bar, navigation bar, or other toolbars
    - property: og:description
      content: How to hide the tab bar, navigation bar, or other toolbars
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-hide-the-tab-bar-navigation-bar-or-other-toolbars.html
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
  "title": "How to hide the tab bar, navigation bar, or other toolbars | SwiftUI by Example",
  "desc": "How to hide the tab bar, navigation bar, or other toolbars",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-hide-the-tab-bar-navigation-bar-or-other-toolbars",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 16**

SwiftUI's `toolbar()` modifier lets us hide or show any of the system bars whenever we need, which is particularly useful when you have a `TabView` that you want to hide after a navigation push.

Attach the modifier to whatever view should trigger the bar to be hidden or shown. For example, this code will cause the tab bar to be hidden when it's pushed onto the navigation stack:

```swift
TabView {
    NavigationStack {
        NavigationLink("Tap Me") {
            Text("Detail View")
                .toolbar(.hidden, for: .tabBar)
        }
        .navigationTitle("Primary View")
    }
    .tabItem {
        Label("Home", systemImage: "house")
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-hide-the-tab-bar-navigation-bar-or-other-toolbars-1.zip)

If you don't specify an exact bar to hide – if you write just `toolbar(.hidden)` without specifying `for: .tabBar` – the hide request flows upwards to the nearest container. In this case it will result in the navigation bar being hidden as that's the nearest container.

You can change the value passed in to `toolbar()` whenever you want, so you could allow the user to toggle the navigation bar with code like this:

```swift
struct DetailView: View {
    @State private var showNavigationBar = true

    var body: some View {
        Text("Detail View")
            .toolbar(showNavigationBar ? .visible : .hidden)
            .onTapGesture {
                withAnimation {
                    showNavigationBar.toggle()
                }
            }
    }
}

struct ContentView: View {
    var body: some View {
        NavigationStack {
            NavigationLink("Tap Me", destination: DetailView.init)
            .navigationTitle("Primary View")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-hide-the-tab-bar-navigation-bar-or-other-toolbars-2.zip)

::: details Similar solutions…

```component VPCard
{
  "title": "How to customize the background color of navigation bars, tab bars, and toolbars | SwiftUI by Example",
  "desc": "How to customize the background color of navigation bars, tab bars, and toolbars",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-customize-the-background-color-of-navigation-bars-tab-bars-and-toolbars.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to hide the home indicator and other system UI | SwiftUI by Example",
  "desc": "How to hide the home indicator and other system UI",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-hide-the-home-indicator-and-other-system-ui.md",
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
  "title": "How to layer views on top of each other using ZStack | SwiftUI by Example",
  "desc": "How to layer views on top of each other using ZStack",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-layer-views-on-top-of-each-other-using-zstack.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to show different images and other views in light or dark mode | SwiftUI by Example",
  "desc": "How to show different images and other views in light or dark mode",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-different-images-and-other-views-in-light-or-dark-mode.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />