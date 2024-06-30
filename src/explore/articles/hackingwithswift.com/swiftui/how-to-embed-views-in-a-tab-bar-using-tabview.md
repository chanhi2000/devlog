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
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to embed views in a tab bar using TabView
    - property: og:description
      content: How to embed views in a tab bar using TabView
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-embed-views-in-a-tab-bar-using-tabview.html
date: 2024-06-21
isOriginal: false
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
  "title": "How to embed views in a tab bar using TabView | SwiftUI by Example",
  "desc": "How to embed views in a tab bar using TabView",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-embed-views-in-a-tab-bar-using-tabview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 16

**Updated in iOS 18**

SwiftUI’s `TabView` provides an equivalent to `UITabBarController`, allowing us to let the user switch between several active views using a control bar.

::: important

SwiftUI provides two ways of placing views into tabs: iOS 18 or later, and iOS 17 or earlier. I'll show you the iOS 18 code first, followed by the iOS 17 code.

:::

For iOS 18 and later, a `TabView` is created from multiple individual `Tab` views, each one with a title and an icon. If one of those tabs handles searching your app, add a `role` parameter of `.search`.

For example:

```swift
TabView {
    Tab("Home", systemImage: "house") {
        Text("Put a HomeView here")
    }

    Tab("Users", systemImage: "person.3") {
        Text("Put a UsersView here")
    }

    Tab("Search", systemImage: "magnifyingglass", role: .search) {
        Text("Put a SearchView here")
    }
}
```

![<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-embed-views-in-a-tab-bar-using-tabview-1.zip)

Where things get more interesting is when you want to group tabs together in the iPadOS sidebar. Tab groups are made by placing one or more `Tab` views inside a `TabSection`, and we can allow users to move between tabs and a sidebar on supported platforms using the `sidebarAdaptable` style.

For example, this creates two sections with two items each:

```swift
TabView {
    TabSection("Watch") {
        Tab("Movies", systemImage: "film") {
            Text("Put a MoviesView here")
        }

        Tab("TV Shows", systemImage: "tv") {
            Text("Put a TVShowsView here")
        }
    }

    TabSection("Listen") {
        Tab("Music", systemImage: "music.note.list") {
            Text("Put a MusicView here")
        }

        Tab("Podcasts", systemImage: "mic") {
            Text("Put a PodcastsView here")
        }
    }
}
.tabViewStyle(.sidebarAdaptable)
```

![<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-embed-views-in-a-tab-bar-using-tabview-2.zip)

Exactly how that looks depends on which device your user is on, and also what tab view mode they have active.

In the code above the two section titles aren't used at all on iOS – users just see four regular tabs.

However, on iPadOS what users see depends on whether they are in tab bar mode (a small across the top) or sidebar mode (a regular list along one edge).

By default users see *only the tab section titles* in the tab bar, and will see the first `Tab` in each section below. You need to make sure they have alternative ways of accessing the tab content.

If users then activate sidebar mode in iPadOS, they'll see both the section titles (now collapsible) along with each tab shown inside.

So, you'll need to plan your UI carefully when using tab sections: make sure users have a way of getting to each individual tab when on iPadOS, but you'll also need to make sure you don't end up with so many tabs on iOS that you have screen full of options hidden under a "More" tab.

If you want to programmatically control tab selection on iOS 18 and later, make a binding to the `selection` of your `TabView`, then add appropriate `value` parameter to your `Tab` objects.

As an example, we could make a `TabView` that can move between views using the tabs or using dedicated buttons:

```swift
struct ContentView: View {
    enum Section {
        case cats
        case dogs
    }

    @State private var selectedTab = Section.cats

    var body: some View {
        TabView(selection: $selectedTab) {
            Tab("Cats", systemImage: "cat", value: .cats) {
                Button("Go to Dogs") {
                    selectedTab = .dogs
                }
            }

            Tab("Dogs", systemImage: "dog", value: .dogs) {
                Button("Go to Cats") {
                    selectedTab = .cats
                }
            }
        }
    }
}
```

![<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-embed-views-in-a-tab-bar-using-tabview-3.zip)

Using an enum as shown is a great way to provide type safety – Swift knows the selection must be some kind of `Section`, so it won't allow a value that isn't `.cats` or `.dogs`.

---

## Targeting iOS 17 and earlier

If you need to target iOS 17 and earlier, you should use the older `TabView` API. 

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

![<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-embed-views-in-a-tab-bar-using-tabview-4.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-embed-views-in-a-tab-bar-using-tabview-1~dark.mp4" />

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

![<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-embed-views-in-a-tab-bar-using-tabview-5.zip)

::: tip

From iOS 15 you should *not* explicitly request the filled variant of SF Symbols icons, because the system will automatically use them as appropriate.

:::

If you add tags, you can programmatically control the active tab by modifying the tab view’s selection. In this example I’ve made the content of each tab a button that changes view, which is done by adding some new state to track which tab is active, then attaching that to the `selection` value of the `TabView`:

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

![<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-embed-views-in-a-tab-bar-using-tabview-6.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-embed-views-in-a-tab-bar-using-tabview-2~dark.mp4" />

The tags for your tabs can whatever you want, as long as the data type conforms to `Hashable`. Integers *might* work well, but if you’re going to do any meaningful programmatic navigation you should make sure you put the tags somewhere central such as a static property inside the view. This allows you to share the value in many places, reducing the risk of mistakes.

::: details Similar solutions…

```component VPCard
{
  "title": "How to hide the tab bar, navigation bar, or other toolbars | SwiftUI by Example",
  "desc": "How to hide the tab bar, navigation bar, or other toolbars",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-hide-the-tab-bar-navigation-bar-or-other-toolbars.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to embed a view in a navigation view | SwiftUI by Example",
  "desc": "How to embed a view in a navigation view",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-embed-a-view-in-a-navigation-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Adding TabView and tabItem() | SwiftUI by Example",
  "desc": "Adding TabView and tabItem()",
  "link": "/explore/articles/hackingwithswift.com/swiftui/adding-tabview-and-tabitem.md",
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
  "title": "How to customize the background color of navigation bars, tab bars, and toolbars | SwiftUI by Example",
  "desc": "How to customize the background color of navigation bars, tab bars, and toolbars",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-customize-the-background-color-of-navigation-bars-tab-bars-and-toolbars.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />