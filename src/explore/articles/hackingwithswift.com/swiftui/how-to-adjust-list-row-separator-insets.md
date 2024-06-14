---
lang: ko-KR
title: How to adjust List row separator insets
description: Article(s) > How to adjust List row separator insets
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
      content: Article(s) > How to adjust List row separator insets
    - property: og:description
      content: How to adjust List row separator insets
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-adjust-list-row-separator-insets.html
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
  "title": "How to adjust List row separator insets | SwiftUI by Example",
  "desc": "How to adjust List row separator insets",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-adjust-list-row-separator-insets",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 16**

SwiftUI automatically adjusts list row insets so the separator is aligned to the leading edge of your text, but it provides alignment guides called `.listRowSeparatorLeading` and `.listRowSeparatorTrailing` so you can customize this if you want.

For example, you can set the separator's leading edge to be the leading edge of the whole row, which means the separator will align with all of your content rather than just the text part:

```swift
List(0..<51) { i in
    Label("Row \(i)", systemImage: "\(i).circle")
        .alignmentGuide(.listRowSeparatorLeading) { d in
            d[.leading]
        }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-adjust-list-row-separator-insets-1.zip)

In that example, using `0` rather than `d[.leading]` should work the same.

Alternatively, you can use a custom value based on what matches your design:

```swift
List(0..<51) { i in
    Label("Row \(i)", systemImage: "\(i).circle")
        .alignmentGuide(.listRowSeparatorLeading) { _ in
            100
        }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-adjust-list-row-separator-insets-2.zip)

You can also customize the trailing edge of the list row separator, either in addition to or in place of the leading row separator inset. For example, this code leaves the leading separator inset alone by aligns the trailing separator inset to the edge of the content, causing the row separator to sit only underneath the row text:

```swift
List(0..<51) { i in
    Label("Row \(i)", systemImage: "\(i).circle")
        .alignmentGuide(.listRowSeparatorTrailing) { d in
            d[.trailing]
        }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-adjust-list-row-separator-insets-3.zip)

::: details Similar solutions…

```component VPCard
{
  "title": "How to adjust List row separator visibility and color | SwiftUI by Example",
  "desc": "How to adjust List row separator visibility and color",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-adjust-list-row-separator-visibility-and-color.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to allow row selection in a list | SwiftUI by Example",
  "desc": "How to allow row selection in a list",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-allow-row-selection-in-a-list.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add custom swipe action buttons to a List row | SwiftUI by Example",
  "desc": "How to add custom swipe action buttons to a List row",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-add-custom-swipe-action-buttons-to-a-list-row.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to push a new view when a list row is tapped | SwiftUI by Example",
  "desc": "How to push a new view when a list row is tapped",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-push-a-new-view-when-a-list-row-is-tapped.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to scroll to a specific row in a list | SwiftUI by Example",
  "desc": "How to scroll to a specific row in a list",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-scroll-to-a-specific-row-in-a-list.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />