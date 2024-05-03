---
lang: ko-KR
title: How to create stacks using VStack and HStack
description: Article(s) > How to create stacks using VStack and HStack
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
      content: Article(s) > How to create stacks using VStack and HStack
    - property: og:description
      content: How to create stacks using VStack and HStack
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-stacks-using-vstack-and-hstack.html
prev: /explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-the-size-of-a-view-relative-to-its-container.md
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
  "title": "How to create stacks using VStack and HStack | SwiftUI by Example",
  "desc": "How to create stacks using VStack and HStack",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-stacks-using-vstack-and-hstack",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Our SwiftUI content views must contain one or more views, which is the layout we want them to show. When we want more than one view on screen at a time you'll usually want to tell SwiftUI how to arrange them, and that's where stacks come in.

Stacks – equivalent to `UIStackView` in UIKit – come in three forms: horizontal (`HStack`), vertical (`VStack`) and depth-based (`ZStack`), with the latter being used when you want to place child views so they overlap.

Let's start with something simple. Here's one text view:

```swift
Text("Hello, world!")
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-create-stacks-using-vstack-and-hstack-1.zip)

![The words “Hello, world!” on a plain background.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-stacks-using-vstack-and-hstack-1~dark.png)

If we want to place another below, we can't just create a second text view and hope for the best – SwiftUI doesn't know how to arrange them.

Instead, we need to place it in a vertical stack so our text views are placed above each other:

```swift
VStack {
    Text("SwiftUI")
    Text("rocks")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-create-stacks-using-vstack-and-hstack-2.zip)

![The text “SwiftUI” above the text “rocks”.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-stacks-using-vstack-and-hstack-2~dark.png)

You'll notice that the vertical stack is placed at the center of the screen, with the labels also being centered and having some automatic space between them.

If you wanted the labels side by side horizontally, replace `VStack` with `HStack` like this:

```swift
HStack {
    Text("SwiftUI")
    Text("rocks")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-create-stacks-using-vstack-and-hstack-3.zip)

![The text “SwiftUI” beside the text “rocks”.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-stacks-using-vstack-and-hstack-3~dark.png)

::: details Similar solutions…

```component VPCard
{
  "title": "How to automatically switch between HStack and VStack based on size class | SwiftUI by Example",
  "desc": "How to automatically switch between HStack and VStack based on size class",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-automatically-switch-between-hstack-and-vstack-based-on-size-class.md",
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
  "title": "Composing views to create a list row | SwiftUI by Example",
  "desc": "Composing views to create a list row",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/composing-views-to-create-a-list-row.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />