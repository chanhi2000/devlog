---
lang: ko-KR
title: How to customize stack layouts with alignment and spacing
description: Article(s) > How to customize stack layouts with alignment and spacing
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
      content: Article(s) > How to customize stack layouts with alignment and spacing
    - property: og:description
      content: How to customize stack layouts with alignment and spacing
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-customize-stack-layouts-with-alignment-and-spacing.html
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
  "title": "How to customize stack layouts with alignment and spacing | SwiftUI by Example",
  "desc": "How to customize stack layouts with alignment and spacing",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-customize-stack-layouts-with-alignment-and-spacing",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

You can add spacing inside your SwiftUI stacks by providing a value in the initializer, like this:

```swift
VStack(spacing: 50) {
    Text("SwiftUI")
    Text("rocks")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-customize-stack-layouts-with-alignment-and-spacing-1.zip)

![The text “SwiftUI” some distance above the text “rocks”.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-customize-stack-layouts-with-alignment-and-spacing-1~dark.png)

Alternatively, you can create dividers between items so that SwiftUI makes a small visual distinction between each item in the stack, like this:

```swift
VStack {
    Text("SwiftUI")
    Divider()
    Text("rocks")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-customize-stack-layouts-with-alignment-and-spacing-2.zip)


![The text “SwiftUI” above the text “rocks”. The two words are separated by a thin gray dividing line.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-customize-stack-layouts-with-alignment-and-spacing-2~dark.png)

By default, items in your stacks are aligned centrally. In the case of `HStack` that means items are aligned to be vertically in the middle, so if you have two text views of different heights they would both be aligned to their vertical center. For `VStack` that means items are aligned to be horizontally in the middle, so if you have two text views of different lengths they would both be aligned to their horizontal center.

To adjust this, pass in an alignment when you create your stack, like this:

```swift
VStack(alignment: .leading) {
    Text("SwiftUI")
    Text("rocks")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-customize-stack-layouts-with-alignment-and-spacing-3.zip)

![The text “SwiftUI” above the text “rocks”. The words' left edges are vertically aligned.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-customize-stack-layouts-with-alignment-and-spacing-3~dark.png)

That will align both “SwiftUI” and “rocks” to their left edge, but they will still ultimately sit in the middle of the screen because the stack takes up only as much space as it needs.

You can of course use both alignment and spacing at the same time, like this:

```swift
VStack(alignment: .leading, spacing: 20) {
    Text("SwiftUI")
    Text("rocks")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-customize-stack-layouts-with-alignment-and-spacing-4.zip)

![The text “SwiftUI” some distance above the text “rocks”. The words' left edges are vertically aligned.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-customize-stack-layouts-with-alignment-and-spacing-4~dark.png)

That will align both text views horizontally to the leading edge (that's left for left to right languages), and place 20 points of vertical space between them.

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
  "title": "How to adjust text alignment using multilineTextAlignment() | SwiftUI by Example",
  "desc": "How to adjust text alignment using multilineTextAlignment()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-text-alignment-using-multilinetextalignment.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add spacing between letters in text | SwiftUI by Example",
  "desc": "How to add spacing between letters in text",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-spacing-between-letters-in-text.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to style text views with fonts, colors, line spacing, and more | SwiftUI by Example",
  "desc": "How to style text views with fonts, colors, line spacing, and more",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-style-text-views-with-fonts-colors-line-spacing-and-more.md",
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

:::

---

<TagLinks />