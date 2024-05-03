---
lang: ko-KR
title: How to add sections to a list
description: Article(s) > How to add sections to a list
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
      content: Article(s) > How to add sections to a list
    - property: og:description
      content: How to add sections to a list
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-sections-to-a-list.html
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
  "title": "How to add sections to a list | SwiftUI by Example",
  "desc": "How to add sections to a list",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-add-sections-to-a-list",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

SwiftUI's list view has built-in support for sections and section headers, just like `UITableView` in UIKit. To add a section around some cells, start by placing a `Section` around it, optionally also adding a header and footer.

As an example, we could create a row that holds task data for a reminders app, then create a list view that has two sections: one for important tasks and one for less important tasks.

Here's how that looks:

```swift
struct TaskRow: View {
    var body: some View {
        Text("Task data goes here")
    }
}

struct ContentView: View {
    var body: some View {
        List {
            Section(header: Text("Important tasks")) {
                TaskRow()
                TaskRow()
                TaskRow()
            }

            Section(header: Text("Other tasks")) {
                TaskRow()
                TaskRow()
                TaskRow()
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-add-sections-to-a-list-1.zip)

![A list with two sections, with headers “Important Tasks” and “Other Tasks” respectively in all caps.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-sections-to-a-list-1@2x.png)

You can also add footer text to sections, like this:

```swift
List {
    Section(header: Text("Other tasks"), footer: Text("End")) {
        Text("Row 1")
        Text("Row 2")
        Text("Row 3")
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-add-sections-to-a-list-2.zip)

![A list section with header “Other Tasks” in all caps, and footer “End”.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-sections-to-a-list-2@2x.png)

By default your section headers will match the default iOS style, but you can request larger, bolder section text using the `headerProminence()` modifier and specifying `.increased`, like this:

```swift
List {
    Section(header: Text("Header")) {
        Text("Row")
    }
    .headerProminence(.increased)
}
.listStyle(.insetGrouped)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-add-sections-to-a-list-3.zip)

![A list with header text “Header” in large, bold, print.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-add-sections-to-a-list-3@2x.png)

::: details Similar solutions…

```component VPCard
{
  "title": "Breaking forms into sections | SwiftUI by Example",
  "desc": "Breaking forms into sections",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/breaking-forms-into-sections.md",
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

```component VPCard
{
  "title": "How to add custom swipe action buttons to a List row | SwiftUI by Example",
  "desc": "How to add custom swipe action buttons to a List row",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-custom-swipe-action-buttons-to-a-list-row.md",
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
  "title": "Composing views to create a list row | SwiftUI by Example",
  "desc": "Composing views to create a list row",
  "link": "https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/composing-views-to-create-a-list-row.html",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />