---
lang: ko-KR
title: How to create different layouts using size classes
description: Article(s) > How to create different layouts using size classes
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
      content: Article(s) > How to create different layouts using size classes
    - property: og:description
      content: How to create different layouts using size classes
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-different-layouts-using-size-classes.html
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
  "title": "How to create different layouts using size classes | SwiftUI by Example",
  "desc": "How to create different layouts using size classes",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-different-layouts-using-size-classes",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI supports size classes natively by exposing them in the environment for us to read. To use them, first create an `@Environment` object that will store its value, then check the value of that property whenever you need, looking for either the `.compact` or `.regular` size class.

For example:

```swift
struct ContentView: View {
    @Environment(\.horizontalSizeClass) var horizontalSizeClass

    var body: some View {
        if horizontalSizeClass == .compact {
            Text("Compact")
        } else {
            Text("Regular")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-different-layouts-using-size-classes-1.zip)

![A phone in portrait mode showing the word “Compact” beside a phone in landscape mode showing the word “Regular”.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-different-layouts-using-size-classes-1~dark.png)

Size classes are a great way to make your user interfaces intelligently adapt to the available space by using a `VStack` or a `HStack` for your content. For example, if you have lots of space you might lay things out horizontally, but switch to vertical layout when space is limited.

::: details Similar solutions…

```component VPCard
{
  "title": "How to use Instruments to profile your SwiftUI code and identify slow layouts | SwiftUI by Example",
  "desc": "How to use Instruments to profile your SwiftUI code and identify slow layouts",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to customize stack layouts with alignment and spacing | SwiftUI by Example",
  "desc": "How to customize stack layouts with alignment and spacing",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-customize-stack-layouts-with-alignment-and-spacing.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to control which NavigationSplitView column is shown in compact layouts | SwiftUI by Example",
  "desc": "How to control which NavigationSplitView column is shown in compact layouts",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-control-which-navigationsplitview-column-is-shown-in-compact-layouts.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to control which NavigationSplitView column is shown in compact layouts | SwiftUI by Example",
  "desc": "How to control which NavigationSplitView column is shown in compact layouts",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-control-which-navigationsplitview-column-is-shown-in-compact-layouts.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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
  "title": "How to animate the size of text | SwiftUI by Example",
  "desc": "How to animate the size of text",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-animate-the-size-of-text.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />