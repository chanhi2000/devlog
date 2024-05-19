---
lang: ko-KR
title: How to hide and show the sidebar programmatically
description: Article(s) > How to hide and show the sidebar programmatically
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
      content: Article(s) > How to hide and show the sidebar programmatically
    - property: og:description
      content: How to hide and show the sidebar programmatically
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-hide-and-show-the-sidebar-programmatically.html
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
  "title": "How to hide and show the sidebar programmatically | SwiftUI by Example",
  "desc": "How to hide and show the sidebar programmatically",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-hide-and-show-the-sidebar-programmatically",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

When using `NavigationSplitView` on macOS and iPadOS, SwiftUI lets us toggle showing the sidebar, content view, and detail view using the `NavigationSplitViewVisibility` enum. 

This code sample shows all three variations:

```swift
struct ContentView: View {
    @State private var columnVisibility = NavigationSplitViewVisibility.detailOnly

    var body: some View {
        NavigationSplitView(columnVisibility: $columnVisibility) {
            Text("Sidebar")
        } content: {
           Text("Content")
        } detail: {
            VStack {
                Button("Detail Only") {
                    columnVisibility = .detailOnly
                }

                Button("Content and Detail") {
                    columnVisibility = .doubleColumn
                }

                Button("Show All") {
                    columnVisibility = .all
                }
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-hide-and-show-the-sidebar-programmatically-1.zip)

There are four modes to choose from:

- In `.detailOnly` mode, the detail view will take up all the available screen space for your app.
- In `.doubleColumn` mode, you'll see both the content and detail views.
- In `.all` mode, the system will attempt to show all three views if they exist. In the case where you don't have a content view (the middle view), it will only show two.
- In `.automatic` mode, the system will do what it thinks is best based on the current device and orientation.

::: note

providing the `columnVisibility` is done using a binding because your value will automatically be updated as the user interacts with your UI.

:::

Although SwiftUI uses different names for these three parts of our split view interface, they match up directly with UIKit counterparts: the sidebar is “primary” in UIKit, content is “supplementary”, and detail is “secondary”.

::: details Similar solutions…

How to add a sidebar for iPadOS

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
  "title": "How to hide and reveal content using DisclosureGroup | SwiftUI by Example",
  "desc": "How to hide and reveal content using DisclosureGroup",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-hide-and-reveal-content-using-disclosuregroup.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to hide and show the status bar | SwiftUI by Example",
  "desc": "How to hide and show the status bar",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-hide-and-show-the-status-bar.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```


:::

---

<TagLinks />