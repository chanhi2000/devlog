---
lang: ko-KR
title: How to preview your layout in a navigation view
description: Article(s) > How to preview your layout in a navigation view
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
      content: Article(s) > How to preview your layout in a navigation view
    - property: og:description
      content: How to preview your layout in a navigation view
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-preview-your-layout-in-a-navigation-view.html
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
  "title": "How to preview your layout in a navigation view | SwiftUI by Example",
  "desc": "How to preview your layout in a navigation view",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-preview-your-layout-in-a-navigation-view",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you’ve designed a view that you know will be presented as part of a navigation stack, but doesn’t itself contain a navigation stack, you won’t see its navigation title or buttons by default.

Fortunately, you can add your view to a navigation stack right inside your preview – this simulates having a navigation bar at the top without actually adding one for the live code, so you can see exactly how it looks.

For example, this view has no navigation stack but is configured to display in a specific way when presented as part of one – i.e. being pushed from another view:

```swift
struct ContentView: View {
    var body: some View {
        Text("Hello World")
            .navigationTitle("Welcome")
    }
}
```

To preview that in a navigation stack, just add a `NavigationStack` around the content view in your preview, like this:

```swift
struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationStack {
            ContentView()
        }
    }
}
```

![An Xcode Preview of a NavigationStack titled “Welcome” with contents “Hello World”.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-preview-your-layout-in-a-navigation-view-1~dark@2x.png)

This allows you to see accurately how the view will look without having to modify the view’s actual layout.

::: details Similar solutions…

```component VPCard
{
  "title": "How to preview your layout at different Dynamic Type sizes | SwiftUI by Example",
  "desc": "How to preview your layout at different Dynamic Type sizes",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-preview-your-layout-at-different-dynamic-type-sizes.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to preview your layout in light and dark mode | SwiftUI by Example",
  "desc": "How to preview your layout in light and dark mode",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-preview-your-layout-in-light-and-dark-mode.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tips-and-tricks.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to preview your layout in portrait or landscape | SwiftUI by Example",
  "desc": "How to preview your layout in portrait or landscape",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-preview-your-layout-in-portrait-or-landscape.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to preview your layout in different devices | SwiftUI by Example",
  "desc": "How to preview your layout in different devices",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-preview-your-layout-in-different-devices.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />