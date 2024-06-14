---
lang: ko-KR
title: How to control spacing around individual views using padding
description: Article(s) > How to control spacing around individual views using padding
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
      content: Article(s) > How to control spacing around individual views using padding
    - property: og:description
      content: How to control spacing around individual views using padding
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-control-spacing-around-individual-views-using-padding.html
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
  "title": "How to control spacing around individual views using padding | SwiftUI by Example",
  "desc": "How to control spacing around individual views using padding",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-control-spacing-around-individual-views-using-padding",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI lets us set individual padding around views using the `padding()` modifier, causing views to be placed further away from their neighbors.

If you use this with no parameters you'll get system-default padding on all sides, like this:

```swift
VStack {
    Text("Using")
    Text("SwiftUI")
        .padding()
    Text("rocks")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-control-spacing-around-individual-views-using-padding-1.zip)

The text “Using” and “SwiftUI” placed some distance above the text “rocks”.

But you can also customize how much padding to apply and where. So, you might want to apply system padding to only one side:

```swift
VStack {
    Text("Using")
    Text("SwiftUI")
        .padding(.bottom)
    Text("rocks")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-control-spacing-around-individual-views-using-padding-2.zip)

The text “Using” and “SwiftUI” placed some distance above the text “rocks”.

Or you might want to control how much padding is applied to all sides:

```swift
VStack {
    Text("Using")
    Text("SwiftUI")
        .padding(100)
    Text("rocks")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-control-spacing-around-individual-views-using-padding-3.zip)

The text “SwiftUI” surrounded by lots of whitespace, with the text “Using” above and “rocks” below.

Or you can combine the two to add a specific amount of padding to one side of the view:

```swift
VStack {
    Text("Using")
    Text("SwiftUI")
        .padding(.bottom, 100)
    Text("rocks")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-control-spacing-around-individual-views-using-padding-4.zip)

The text “Using” and “SwiftUI” placed a long distance above the text “rocks”.

::: details Similar solutions…

```component VPCard
{
  "title": "How to color the padding around a view | SwiftUI by Example",
  "desc": "How to color the padding around a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-color-the-padding-around-a-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to change the tint color for individual list rows | SwiftUI by Example",
  "desc": "How to change the tint color for individual list rows",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-change-the-tint-color-for-individual-list-rows.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add extra padding to the safe area | SwiftUI by Example",
  "desc": "How to add extra padding to the safe area",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-add-extra-padding-to-the-safe-area.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to style text views with fonts, colors, line spacing, and more | SwiftUI by Example",
  "desc": "How to style text views with fonts, colors, line spacing, and more",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-style-text-views-with-fonts-colors-line-spacing-and-more.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to draw a shadow around a view | SwiftUI by Example",
  "desc": "How to draw a shadow around a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-draw-a-shadow-around-a-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />