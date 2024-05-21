---
lang: ko-KR
title: How to get translucent lists on macOS
description: Article(s) > How to get translucent lists on macOS
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
      content: Article(s) > How to get translucent lists on macOS
    - property: og:description
      content: How to get translucent lists on macOS
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-get-translucent-lists-on-macos.html
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
  "title": "How to get translucent lists on macOS | SwiftUI by Example",
  "desc": "How to get translucent lists on macOS",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-get-translucent-lists-on-macos",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Updated for iOS 15**

One subtle but important feature of macOS is the way sidebars are automatically made slightly transparent when a window is active, then made opaque when the window moves to the background – it’s a small hint to the user which window is active, but also lets a little of their background show through, giving them a little context of their environment.

SwiftUI allows us to create these translucent sidebars using the `listStyle()` modifier on `List`, passing in `.sidebar` (or `SidebarListStyle()` for Xcode 12) like this:

```swift
NavigationStack {
    List(1..<51) {
         Text("\($0)")
    }
    .listStyle(.sidebar)
}
```

::: important

If you’re using Xcode 12 you need to use `SidebarListStyle()` rather than `.sidebar`.

:::

There’s nothing stopping you from using that with any list, but the clue is in the name: it’s specifically designed for lists that are shown on the side of your main window, as you can see in Xcode’s navigators.

Note: on iOS and iPadOS, `.sidebar` does not provide translucent background, but does affect the cell styling.

![An inactive macOS window with an opaque sidebar, an active macOS window with a translucent sidebar, an iPad with a list, and an iPhone with a list. The iPad and iPhone lists have gray backgrounds and no list-item separators.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-get-translucent-lists-on-macos-1~dark@2x.png)

::: details Similar solutions…

```component VPCard
{
  "title": "How to create multi-column lists using Table | SwiftUI by Example",
  "desc": "How to create multi-column lists using Table",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-multi-column-lists-using-table.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create grouped and inset grouped lists | SwiftUI by Example",
  "desc": "How to create grouped and inset grouped lists",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-grouped-and-inset-grouped-lists.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create expanding lists | SwiftUI by Example",
  "desc": "How to create expanding lists",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-expanding-lists.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Working with lists | SwiftUI by Example",
  "desc": "Working with lists",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/working-with-lists.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make carousel lists on watchOS | SwiftUI by Example",
  "desc": "How to make carousel lists on watchOS",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-carousel-lists-on-watchos.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />