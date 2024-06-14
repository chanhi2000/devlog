---
lang: ko-KR
title: How to create a list of static items
description: Article(s) > How to create a list of static items
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
      content: Article(s) > How to create a list of static items
    - property: og:description
      content: How to create a list of static items
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-list-of-static-items.html
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
  "title": "How to create a list of static items | SwiftUI by Example",
  "desc": "How to create a list of static items",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-list-of-static-items",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

To create a static list of items you first need to define what each row in your list should look like. This is a view just like any other, and can have any parameters for data you intend to show in the row. Once you have your row, you can create a `List` view that creates as many rows as you need.

For example, this code defines a `Pizzeria` view that will show a `name` string, then uses that as a row for a `List` with three fixed pieces of data:

```swift
struct Pizzeria: View {
    let name: String

    var body: some View {
        Text("Restaurant: \(name)")
    }
}

struct ContentView: View {
    var body: some View {
        List {
            Pizzeria(name: "Joe's Original")
            Pizzeria(name: "The Real Joe's Original")
            Pizzeria(name: "Original Joe's")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-a-list-of-static-items-1.zip)

![A list containing “Restaurant: Joe's Original”, “Restaurant: The Real Joe's Original”, and “Restaurant: Original Joe's”.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-list-of-static-items-1~dark@2x.png)

When that code runs you'll see three rows in a table, just like you would have had with `UITableView` in UIKit or `NSTableView` in AppKit.

You don't need to make each row use the same view type, so you can mix and match row views as you need.

::: details Similar solutions…

```component VPCard
{
  "title": "How to create a list of dynamic items | SwiftUI by Example",
  "desc": "How to create a list of dynamic items",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-list-of-dynamic-items.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create static labels with a Text view | SwiftUI by Example",
  "desc": "How to create static labels with a Text view",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-static-labels-with-a-text-view.md",
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
  "title": "Adding items to an order with @EnvironmentObject | SwiftUI by Example",
  "desc": "Adding items to an order with @EnvironmentObject",
  "link": "/explore/articles/hackingwithswift.com/swiftui/adding-items-to-an-order-with-environmentobject.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to limit the number of items in a fetch request | SwiftUI by Example",
  "desc": "How to limit the number of items in a fetch request",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-limit-the-number-of-items-in-a-fetch-request.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />