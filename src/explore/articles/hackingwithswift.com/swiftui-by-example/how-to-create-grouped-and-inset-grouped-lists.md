---
lang: ko-KR
title: How to create grouped and inset grouped lists
description: Article(s) > How to create grouped and inset grouped lists
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
      content: Article(s) > How to create grouped and inset grouped lists
    - property: og:description
      content: How to create grouped and inset grouped lists
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-grouped-and-inset-grouped-lists.html
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
  "title": "How to create grouped and inset grouped lists | SwiftUI by Example",
  "desc": "How to create grouped and inset grouped lists",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-grouped-and-inset-grouped-lists",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Updated for iOS 15**

SwiftUI's `List` views have a `listStyle()` modifier to control how the list looks, and there are two options you're likely to want: `.grouped` (or `GroupedListStyle()` for Xcode 12) to get the old-style grouping of items, and `.insetGrouped` (or `InsetGroupedListStyle()` for Xcode 12) to get the newer style grouping of items.

For example, this defines an example row and places it inside a grouped list:

```swift
struct ExampleRow: View {
    var body: some View {
        Text("Example Row")
    }
}

struct ContentView: View {
    var body: some View {
        List {
            Section(header: Text("Examples")) {
                ExampleRow()
                ExampleRow()
                ExampleRow()
            }
        }
        .listStyle(.grouped)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-grouped-and-inset-grouped-lists-1.zip)

![A group of 3 rows whose width spans the screen below an “Examples” section heading.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-grouped-and-inset-grouped-lists-1@2x.png")

Alternatively, this will create a list of 100 rows with the new inset style of grouping:

```swift
List(0..<100) { i in
    Text("Row \(i)")
}
.listStyle(.insetGrouped)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-grouped-and-inset-grouped-lists-2.zip)

![A group of rows with left and right edges inset from the screen's sides.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-grouped-and-inset-grouped-lists-2@2x.png")

::: important

If you're using Xcode 12 you need to use `GroupedListStyle` and `InsetGroupedListStyle()` rather than `.grouped` and `insetGrouped`.

:::

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
  "title": "How to create multi-column lists using Table | SwiftUI by Example",
  "desc": "How to create multi-column lists using Table",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-multi-column-lists-using-table.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to inset the safe area with custom content | SwiftUI by Example",
  "desc": "How to inset the safe area with custom content",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-inset-the-safe-area-with-custom-content.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Building a menu using List | SwiftUI by Example",
  "desc": "Building a menu using List",
  "link": "https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/building-a-menu-using-list.html",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />