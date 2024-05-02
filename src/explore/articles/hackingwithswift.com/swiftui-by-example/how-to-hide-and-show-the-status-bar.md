---
lang: ko-KR
title: How to hide and show the status bar
description: Article(s) > How to hide and show the status bar
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
      content: Article(s) > How to hide and show the status bar
    - property: og:description
      content: How to hide and show the status bar
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-hide-and-show-the-status-bar.html
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
  "title": "How to hide and show the status bar | SwiftUI by Example",
  "desc": "How to hide and show the status bar",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-hide-and-show-the-status-bar",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

We can hide and show the iOS status bar using SwiftUI's `statusBar()` modifier. This takes one `hidden` parameter that must be either true or false, depending the behavior you want:

```swift
Text("No status bar, please")
    .statusBar(hidden: true)
```

::: important

This modifier is available only on iOS.

:::

If you want status bar visibility to be dependent on some program state, use an `@State` Boolean in place of a hard-coded value. For example, this creates a `hideStatusBar` Boolean that gets toggled when a button is tapped, which in turn controls whether the status bar is showing or not:

```swift
struct ContentView: View {
    @State private var hideStatusBar = false

    var body: some View {
        Button("Toggle Status Bar") {
            withAnimation {
                hideStatusBar.toggle()
            }
        }
        .statusBar(hidden: hideStatusBar)
    }
}
```

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-hide-and-show-the-status-bar-1~dark.mp4 "/>

As you can see, that toggles the Boolean inside a `withAnimation` block, which causes the status bar to fade in and out smoothly.

::: details Similar solutions…

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
  "title": "How to hide the tab bar, navigation bar, or other toolbars | SwiftUI by Example",
  "desc": "How to hide the tab bar, navigation bar, or other toolbars",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-hide-the-tab-bar-navigation-bar-or-other-toolbars.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to hide and show the sidebar programmatically | SwiftUI by Example",
  "desc": "How to hide and show the sidebar programmatically",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-hide-and-show-the-sidebar-programmatically.md",
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

:::

---

<TagLinks />