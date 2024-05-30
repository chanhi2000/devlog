---
lang: ko-KR
title: How to dynamically change between VStack and HStack
description: Article(s) > How to dynamically change between VStack and HStack
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
      content: Article(s) > How to dynamically change between VStack and HStack
    - property: og:description
      content: How to dynamically change between VStack and HStack
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-dynamically-change-between-vstack-and-hstack.html
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
  "title": "How to dynamically change between VStack and HStack | SwiftUI by Example",
  "desc": "How to dynamically change between VStack and HStack",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-dynamically-change-between-vstack-and-hstack",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 16**

SwiftUI's `AnyLayout` struct allows us to switch between `HStack` and `VStack` freely, based on whatever environment context we want to take into account – just remember to use the `Layout`-conforming variants of each.

For example, we might want to show a group of images horizontally when we're in a regular horizontal size class, or vertically otherwise, like this:

```swift
struct ContentView: View {
    @Environment(\.horizontalSizeClass) var horizontalSizeClass

    var body: some View {
        let layout = horizontalSizeClass == .regular ? AnyLayout(HStackLayout()) : AnyLayout(VStackLayout())

        layout {
            Image(systemName: "1.circle")
            Image(systemName: "2.circle")
            Image(systemName: "3.circle")
        }
        .font(.largeTitle)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-dynamically-change-between-vstack-and-hstack-1.zip)

Tip: Unlike using `AnyView`, `AnyLayout` doesn't incur any performance impact, and won't discard any of the state of its child views.

Alternatively, we could flip the axis when the user's Dynamic Type size goes beyond a certain size:

```swift
struct ContentView: View {
    @Environment(\.dynamicTypeSize) var dynamicTypeSize

    var body: some View {
        let layout = dynamicTypeSize <= .xxxLarge ? AnyLayout(HStackLayout()) : AnyLayout(VStackLayout())

        layout {
            Image(systemName: "1.circle")
            Image(systemName: "2.circle")
            Image(systemName: "3.circle")
        }
        .font(.largeTitle)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-dynamically-change-between-vstack-and-hstack-2.zip)

As well as `VStackLayout` and `HStackLayout`, you can also use `ZStackLayout` and `GridLayout`.

::: tip

Any grid rows that are used in non-grid layouts don't do anything – they become the same as using `Group`.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to automatically switch between HStack and VStack based on size class | SwiftUI by Example",
  "desc": "How to automatically switch between HStack and VStack based on size class",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-automatically-switch-between-hstack-and-vstack-based-on-size-class.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create stacks using VStack and HStack | SwiftUI by Example",
  "desc": "How to create stacks using VStack and HStack",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-stacks-using-vstack-and-hstack.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to dynamically adjust the appearance of a view based on its size and location | SwiftUI by Example",
  "desc": "How to dynamically adjust the appearance of a view based on its size and location",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to dynamically adjust the color of an SF Symbol | SwiftUI by Example",
  "desc": "How to dynamically adjust the color of an SF Symbol",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-dynamically-adjust-the-color-of-an-sf-symbol.md",
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

:::

---

<TagLinks />