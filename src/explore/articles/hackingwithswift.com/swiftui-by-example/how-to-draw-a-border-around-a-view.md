---
lang: ko-KR
title: How to draw a border around a view
description: Article(s) > How to draw a border around a view
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
      content: Article(s) > How to draw a border around a view
    - property: og:description
      content: How to draw a border around a view
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-a-border-around-a-view.html
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
  "title": "How to draw a border around a view | SwiftUI by Example",
  "desc": "How to draw a border around a view",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-draw-a-border-around-a-view",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI gives us a dedicated `border()` modifier to draw borders around views. It has a few variations depending on whether you want to specify a stroke width or a corner radius, so here are a few examples:

This adds a simple 1-point green border around a text view:

```swift
Text("Hacking with Swift")
    .border(.green)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-draw-a-border-around-a-view-1.zip)

![The text “Hacking with Swift” with a thin rectangular green border. There is almost no space between the text's edges and the border.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-a-border-around-a-view-1~dark@2x.png)

If you want to make the border so that it doesn’t sit right on the edges of your view, add some padding first:

```swift
Text("Hacking with Swift")
    .padding()
    .border(.green)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-draw-a-border-around-a-view-2.zip)

![The text “Hacking with Swift” with a thin rectangular green border. There is space around the text between its edges and the border.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-a-border-around-a-view-2~dark@2x.png)

This adds a 4-point red border:

```swift
Text("Hacking with Swift")
    .padding()
    .border(.red, width: 4)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-draw-a-border-around-a-view-3.zip)

![The text “Hacking with Swift” with a thick rectangular red border.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-a-border-around-a-view-3~dark@2x.png)

If you want anything more advanced – e.g., if you want to round the corners of your border – you need to use the `overlay()` modifier instead. For example, this adds a 4-point blue border with 16-point rounded corners:

```swift
Text("Hacking with Swift")
    .padding()
    .overlay(
        RoundedRectangle(cornerRadius: 16)
            .stroke(.blue, lineWidth: 4)
    )
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-draw-a-border-around-a-view-4.zip)

![The text “Hacking with Swift” with a thick blue rounded-rectangular border.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-a-border-around-a-view-4~dark@2x.png)

::: tip

Use `stroke()` or `strokeBorder()` with shapes, and `border()` with other view types.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to draw a shadow around a view | SwiftUI by Example",
  "desc": "How to draw a shadow around a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-a-shadow-around-a-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to draw a border inside a view | SwiftUI by Example",
  "desc": "How to draw a border inside a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-a-border-inside-a-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to color the padding around a view | SwiftUI by Example",
  "desc": "How to color the padding around a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-color-the-padding-around-a-view.md",
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
  "title": "How to add a border to a TextField | SwiftUI by Example",
  "desc": "How to add a border to a TextField",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-border-to-a-textfield.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />