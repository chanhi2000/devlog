---
lang: ko-KR
title: How to group views visually using GroupBox
description: Article(s) > How to group views visually using GroupBox
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
      content: Article(s) > How to group views visually using GroupBox
    - property: og:description
      content: How to group views visually using GroupBox
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-group-views-visually-using-groupbox.html
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
  "title": "How to group views visually using GroupBox | SwiftUI by Example",
  "desc": "How to group views visually using GroupBox",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-group-views-visually-using-groupbox",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Updated in iOS 15**

SwiftUI's `GroupBox` view groups views together and places a light background color behind them so they stand out. You can optionally also include a header to make group titles, if you need to.

By default `GroupBox` with align its views vertically. For example, this will show three text views one above the other:

```swift
GroupBox {
    Text("Your account")
        .font(.headline)
    Text("Username: tswift89")
    Text("City: Nashville")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-group-views-visually-using-groupbox-1.zip)

![Three lines of text centered in a gray rounded rectangle. The top line is bolded.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-group-views-visually-using-groupbox-1~dark@2x.png)

If you want to control that layout, such as changing axis or adjusting the alignment, create a stack yourself:

```swift
GroupBox {
    VStack(alignment: .leading) {
        Text("Your account")
            .font(.headline)
        Text("Username: tswift89")
        Text("City: Nashville")
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-group-views-visually-using-groupbox-2.zip)

![Three lines of text left-aligned in a gray rounded rectangle. The top line is bolded.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-group-views-visually-using-groupbox-2~dark@2x.png)

One real power feature of `GroupBox` is that if you nest them they will automatically adapt their colors so they are neatly distinguished:

```swift
GroupBox {
    Text("Outer Content")

    GroupBox {
        Text("Middle Content")

        GroupBox {
            Text("Inner Content")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-group-views-visually-using-groupbox-3.zip)

![Three concentric rounded rectangles, each containing a line of text, and the inner rectangle(s).](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-group-views-visually-using-groupbox-3~dark@2x.png)

This effect works just as well – if not better! – in dark mode.

Like I said, you *can* add titles to your `GroupBox` and although it looks okay on macOS it doesn't look nice at all on iOS:

```swift
GroupBox("Your account") {
    VStack(alignment: .leading) {
        Text("Username: tswift89")
        Text("City: Nashville")
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-group-views-visually-using-groupbox-4.zip)

![A macOS window containing “Your account” above a two lines of text in a rounded rectangle. Beside it is an iPhone with similar contents consuming horizontal space, resulting in a visual imbalance.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-group-views-visually-using-groupbox-4~dark@2x.png)

::: details Similar solutions…

```component VPCard
{
  "title": "How to group views together with ControlGroup | SwiftUI by Example",
  "desc": "How to group views together with ControlGroup",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-group-views-together-with-controlgroup.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to group views together | SwiftUI by Example",
  "desc": "How to group views together",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-group-views-together.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to control spacing around individual views using padding | SwiftUI by Example",
  "desc": "How to control spacing around individual views using padding",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-control-spacing-around-individual-views-using-padding.md",
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
  "title": "How to create views in a loop using ForEach | SwiftUI by Example",
  "desc": "How to create views in a loop using ForEach",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-views-in-a-loop-using-foreach.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />