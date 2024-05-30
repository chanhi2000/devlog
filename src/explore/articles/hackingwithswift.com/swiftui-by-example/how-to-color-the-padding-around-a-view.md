---
lang: ko-KR
title: How to color the padding around a view
description: Article(s) > How to color the padding around a view
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
      content: Article(s) > How to color the padding around a view
    - property: og:description
      content: How to color the padding around a view
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-color-the-padding-around-a-view.html
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
  "title": "How to color the padding around a view | SwiftUI by Example",
  "desc": "How to color the padding around a view",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-color-the-padding-around-a-view",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

The `padding()` modifier lets us add some spacing around a view, and the `background()` modifier lets us set a background color. However, the way you use them matters, so it’s important to be clear about your goal in order to get the best results.

As an example, this creates a text view with a red background and white foreground, then adds system default padding to it:

```swift
Text("Hacking with Swift")
    .background(.red)
    .foregroundStyle(.white)
    .padding()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-color-the-padding-around-a-view-1.zip)

![The text “Hacking with Swift” on a red background. There is little space between the text's edges and the rectangle's edges.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-color-the-padding-around-a-view-1~dark@2x.png)

And this adds system default padding then sets a red background color and a white foreground:

```swift
Text("Hacking with Swift")
    .padding()
    .background(.red)
    .foregroundStyle(.white)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-color-the-padding-around-a-view-2.zip)

![The text “Hacking with Swift” on a red background. There is some red space around the text between its edges and the rectangle's.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-color-the-padding-around-a-view-2~dark@2x.png)

Those two pieces of code might look similar, but they yield different results because the order in which you apply modifiers matters. In the second example the view is padded *then* colored, which means the padding also gets colored red. In contrast, the first example colors then pads, so the padding remains uncolored.

So, if you want some text to have a background color wider than the text itself, make sure to use the second code example – pad *then* color.

::: details Similar solutions…

```component VPCard
{
  "title": "How to control spacing around individual views using padding | SwiftUI by Example",
  "desc": "How to control spacing around individual views using padding",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-control-spacing-around-individual-views-using-padding.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add extra padding to the safe area | SwiftUI by Example",
  "desc": "How to add extra padding to the safe area",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-extra-padding-to-the-safe-area.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to draw a border around a view | SwiftUI by Example",
  "desc": "How to draw a border around a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-a-border-around-a-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to draw a shadow around a view | SwiftUI by Example",
  "desc": "How to draw a shadow around a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-a-shadow-around-a-view.md",
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