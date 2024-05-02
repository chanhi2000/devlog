---
lang: ko-KR
title: How to embed views in a tab bar using TabView
description: Article(s) > How to embed views in a tab bar using TabView
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
  - hacking-with-swift
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to embed views in a tab bar using TabView
    - property: og:description
      content: How to embed views in a tab bar using TabView
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-embed-views-in-a-tab-bar-using-tabview.html
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
  "title": "How to embed views in a tab bar using TabView | SwiftUI by Example",
  "desc": "How to embed views in a tab bar using TabView",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-embed-views-in-a-tab-bar-using-tabview",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI's `TabView` provides an equivalent to `UITabBarController`, allowing us to let the user switch between several active views using a bar at the bottom of the screen.

In its basic form, you should provide each item with an image and title, optionally also adding a tag if you want to control which tab is active programmatically. For example, this creates two views with different images, titles, and tags:

```swift
struct ContentView: View {    
    var body: some View {
        TabView {
            Text("First View")
                .padding()
                .tabItem {
                    Image(systemName: "1.circle")
                    Text("First")
                }
                .tag(1)
            Text("Second View")
                .padding()
                .tabItem {
                    Image(systemName: "2.circle")
                    Text("Second")
                }
                .tag(2)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-embed-views-in-a-tab-bar-using-tabview-1.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-embed-views-in-a-tab-bar-using-tabview-1~dark.mp4 "/>

Rather than specifying text and image separately, you can also use a `Label` view to combine them together:

```swift
struct ContentView: View {
    var body: some View {
        TabView {
            Text("First View")
                .padding()
                .tabItem {
                    Label("First", systemImage: "1.circle")
                }
                .tag(1)

            Text("Second View")
                .padding()
                .tabItem {
                    Label("Second", systemImage: "2.circle")
                }
                .tag(2)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-embed-views-in-a-tab-bar-using-tabview-2.zip)

::: tip

From iOS 15 you should *not* explicitly request the filled variant of SF Symbols icons, because the system will automatically use them as appropriate.

:::

If you add tags, you can programmatically control the active tab by modifying the tab view's selection. In this example I've made the content of each tab a button that changes view, which is done by adding some new state to track which tab is active, then attaching that to the `selection` value of the `TabView`:

```swift
struct ContentView: View {
    @State var selectedView = 1

    var body: some View {
        TabView(selection: $selectedView) {
            Button("Show Second View") {
                selectedView = 2
            }
            .padding()
            .tabItem {
                Label("First", systemImage: "1.circle")
            }
            .tag(1)

            Button("Show First View") {
                selectedView = 1
            }
            .padding()
            .tabItem {
                Label("Second", systemImage: "2.circle")
            }
            .tag(2)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-embed-views-in-a-tab-bar-using-tabview-3.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-embed-views-in-a-tab-bar-using-tabview-2~dark.mp4 "/>

The tags for your tabs can whatever you want, as long as the data type conforms to `Hashable`. Integers *might* work well, but if you're going to do any meaningful programmatic navigation you should make sure you put the tags somewhere central such as a static property inside the view. This allows you to share the value in many places, reducing the risk of mistakes.

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
  "title": "How to embed a view in a navigation view | SwiftUI by Example",
  "desc": "How to embed a view in a navigation view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-embed-a-view-in-a-navigation-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Adding TabView and tabItem() | SwiftUI by Example",
  "desc": "Adding TabView and tabItem()",
  "link": "https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/adding-tabview-and-tabitem.html",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add a badge to TabView items and List rows | SwiftUI by Example",
  "desc": "How to add a badge to TabView items and List rows",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-badge-to-tabview-items-and-list-rows.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to customize the background color of navigation bars, tab bars, and toolbars | SwiftUI by Example",
  "desc": "How to customize the background color of navigation bars, tab bars, and toolbars",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-customize-the-background-color-of-navigation-bars-tab-bars-and-toolbars.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />