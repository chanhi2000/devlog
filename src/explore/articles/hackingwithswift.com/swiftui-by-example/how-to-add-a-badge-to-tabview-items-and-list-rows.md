---
lang: ko-KR
title: How to add a badge to TabView items and List rows
description: Article(s) > How to add a badge to TabView items and List rows
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
      content: Article(s) > How to add a badge to TabView items and List rows
    - property: og:description
      content: How to add a badge to TabView items and List rows
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-badge-to-tabview-items-and-list-rows.html
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
  "title": "How to add a badge to TabView items and List rows | SwiftUI by Example",
  "desc": "How to add a badge to TabView items and List rows",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-add-a-badge-to-tabview-items-and-list-rows",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

SwiftUI's `badge()` modifier lets us add numbers and text to tab view items and list rows, with the purpose of drawing the user's attention to some supplementary status information – something like a number over a tab icon to represent an unread message count, for example.

For example, if you wanted to show the number 5 in red over a tab item, you would use this:

```swift
TabView {
    Text("Your home screen here")
        .tabItem {
            Label("Home", systemImage: "house")
        }
        .badge(5)
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-a-badge-to-tabview-items-and-list-rows-1.zip)

![Some text above a blue label. The label's house icon has a circular red badge in the top right containing the number 5.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-a-badge-to-tabview-items-and-list-rows-1~dark@2x.png)

Badges work just as well with list rows, and automatically appear as right-aligned text in a secondary color. For example, we could make static list rows similar to the iOS Settings app like this:

```swift
List {
    Text("Wi-Fi")
        .badge("LAN Solo")

    Text("Bluetooth")
        .badge("On")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-a-badge-to-tabview-items-and-list-rows-2.zip)

![A list of two rows, containing “Wi-Fi” beside “LAN Solo”, and “Bluetooth” beside “On”.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-a-badge-to-tabview-items-and-list-rows-2~dark@2x.png)

::: details Similar solutions…

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
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tips-and-tricks.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to let users move rows in a list | SwiftUI by Example",
  "desc": "How to let users move rows in a list",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-move-rows-in-a-list.md",
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
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />