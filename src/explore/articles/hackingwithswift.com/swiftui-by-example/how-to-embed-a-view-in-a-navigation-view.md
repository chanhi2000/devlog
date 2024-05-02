---
lang: ko-KR
title: How to embed a view in a navigation view
description: Article(s) > How to embed a view in a navigation view
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
      content: Article(s) > How to embed a view in a navigation view
    - property: og:description
      content: How to embed a view in a navigation view
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-embed-a-view-in-a-navigation-view.html
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
  "title": "How to embed a view in a navigation view | SwiftUI by Example",
  "desc": "How to embed a view in a navigation view",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-embed-a-view-in-a-navigation-view",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI's `NavigationStack` maps more or less to UIKit's `UINavigationController` in that it presents content, it's able to handle navigation between views, and it places a navigation bar at the top of the screen.

In its simplest form you can place a text view into a navigation stack like this:

```swift
struct ContentView: View {
    var body: some View { 
        NavigationStack {
            Text("This is a great app")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-embed-a-view-in-a-navigation-view-1.zip)

However, that leaves the navigation bar at the top empty. So, you will usually use the `navigationTitle()` modifier on whatever you're embedding, so you can add a title at the top of your screen, like this:

```swift
struct ContentView: View {
    var body: some View { 
        NavigationStack {
            Text("SwiftUI")
                .navigationTitle("Welcome")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-embed-a-view-in-a-navigation-view-2.zip)

There is a second modifier, `navigationBarTitleDisplayMode()`, that gives us control over whether to use large titles or smaller, inline ones. For example, by default views will inherit their large title display mode from whatever view presented them, or if it's the initial view then it will use large titles. But if you'd prefer to enable or disable large titles manually you should use `.navigationBarTitleDisplayMode()` like this:

```swift
struct ContentView: View {
    var body: some View { 
        NavigationStack {
            Text("SwiftUI")
                .navigationTitle("Welcome")
                .navigationBarTitleDisplayMode(.inline)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-embed-a-view-in-a-navigation-view-3.zip)

That will make small navigation titles, but you can also use `.large` to force a large title.

![A row of four phones showing NavigationStacks. From left to right, they have no title, the default large, left-aligned title style, a smaller, centered title style, and the large, left-aligned title style respectively.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-embed-a-view-in-a-navigation-view-1@2x.png)

::: details Similar solutions…

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
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tips-and-tricks.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to convert a SwiftUI view to an image | SwiftUI by Example",
  "desc": "How to convert a SwiftUI view to an image",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-convert-a-swiftui-view-to-an-image.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create and compose custom views | SwiftUI by Example",
  "desc": "How to create and compose custom views",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-and-compose-custom-views.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to preview your layout in a navigation view | SwiftUI by Example",
  "desc": "How to preview your layout in a navigation view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-preview-your-layout-in-a-navigation-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />