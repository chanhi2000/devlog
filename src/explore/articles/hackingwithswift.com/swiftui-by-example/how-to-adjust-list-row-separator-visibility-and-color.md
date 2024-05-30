---
lang: ko-KR
title: How to adjust List row separator visibility and color
description: Article(s) > How to adjust List row separator visibility and color
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
      content: Article(s) > How to adjust List row separator visibility and color
    - property: og:description
      content: How to adjust List row separator visibility and color
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-list-row-separator-visibility-and-color.html
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
  "title": "How to adjust List row separator visibility and color | SwiftUI by Example",
  "desc": "How to adjust List row separator visibility and color",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-adjust-list-row-separator-visibility-and-color",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

SwiftUI provides two modifiers to control the way row separators look with its Lists, specifically `listRowSeparator()` for controlling whether separators are visible or not, and `listRowSeparatorTint()` for controlling the separator color.

For example, if you wanted to hide the separators for all rows in your list you could write this:

```swift
List {
    ForEach(1..<100) { index in
        Text("Row \(index)")
            .listRowSeparator(.hidden)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-adjust-list-row-separator-visibility-and-color-1.zip)

![A list with no visible separators between rows.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-adjust-list-row-separator-visibility-and-color-1~dark.png)

To adjust the *color* of the separator, use `listRowSeparatorTint()` like this:

```swift
List {
    ForEach(1..<100) { index in
        Text("Row \(index)")
            .listRowSeparatorTint(.red)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-adjust-list-row-separator-visibility-and-color-2.zip)

![A list with thin red lines separating the rows.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-adjust-list-row-separator-visibility-and-color-2~dark.png)

Again, you can attach that to individual list rows if you want more control.

::: detail Similar solutions…

```component VPCard
{
  "title": "How to adjust List row separator insets | SwiftUI by Example",
  "desc": "How to adjust List row separator insets",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-list-row-separator-insets.md",
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
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Composing views to create a list row | SwiftUI by Example",
  "desc": "Composing views to create a list row",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/composing-views-to-create-a-list-row.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Building a menu using List | SwiftUI by Example",
  "desc": "Building a menu using List",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/building-a-menu-using-list.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />