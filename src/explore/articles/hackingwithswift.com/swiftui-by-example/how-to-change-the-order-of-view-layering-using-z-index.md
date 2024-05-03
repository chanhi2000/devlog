---
lang: ko-KR
title: How to change the order of view layering using Z index
description: Article(s) > How to change the order of view layering using Z index
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
      content: Article(s) > How to change the order of view layering using Z index
    - property: og:description
      content: How to change the order of view layering using Z index
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-change-the-order-of-view-layering-using-z-index.html
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
  "title": "How to change the order of view layering using Z index | SwiftUI by Example",
  "desc": "How to change the order of view layering using Z index",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-change-the-order-of-view-layering-using-z-index",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

By default, SwiftUI's `ZStack` layers its views using the painter's algorithm to decide depth of views: whatever you put into the `ZStack` first is drawn first, then subsequent views are layered over it.

While this is often what you want, sometimes you need more control – you might want to push one view behind another while your app runs, for example, or perhaps bring one particular view to the front when it's tapped.

To do this you need to use the `zIndex()` modifier, which allows you to specify exactly how views should be layered inside a single `ZStack`. Views have a default Z index of 0, but you can provide positive or negative values that position them on top of or below other views respectively.

For example, this `ZStack` contains two overlapping rectangles, but the green rectangle will still be visible because it uses a Z index value of 1:

```swift
ZStack {
    Rectangle()
        .fill(.green)
        .frame(width: 50, height: 50)
        .zIndex(1)

    Rectangle()
        .fill(.red)
        .frame(width: 100, height: 100)
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-change-the-order-of-view-layering-using-z-index-1.zip)

![A green square centered within a larger red square.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-change-the-order-of-view-layering-using-z-index-1~dark.png)

::: note

The `zIndex()` modifier only affects drawing order inside the current `ZStack`, so if you have two overlapping stacks you need to think about the Z index of the stacks as well as the views *inside* the stacks.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "Adding items to an order with @EnvironmentObject | SwiftUI by Example",
  "desc": "Adding items to an order with @EnvironmentObject",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/adding-items-to-an-order-with-environmentobject.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to find which data change is causing a SwiftUI view to update | SwiftUI by Example",
  "desc": "How to find which data change is causing a SwiftUI view to update",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-find-which-data-change-is-causing-a-swiftui-view-to-update.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to dynamically change between VStack and HStack | SwiftUI by Example",
  "desc": "How to dynamically change between VStack and HStack",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-dynamically-change-between-vstack-and-hstack.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to change the background color of List, TextEditor, and more | SwiftUI by Example",
  "desc": "How to change the background color of List, TextEditor, and more",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-change-the-background-color-of-list-texteditor-and-more.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to change the tint color for individual list rows | SwiftUI by Example",
  "desc": "How to change the tint color for individual list rows",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-change-the-tint-color-for-individual-list-rows.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />