---
lang: ko-KR
title: How to draw a border inside a view
description: Article(s) > How to draw a border inside a view
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
      content: Article(s) > How to draw a border inside a view
    - property: og:description
      content: How to draw a border inside a view
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-a-border-inside-a-view.html
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
  "title": "How to draw a border inside a view | SwiftUI by Example",
  "desc": "How to draw a border inside a view",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-draw-a-border-inside-a-view",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI gives us both `stroke()` and `strokeBorder()` modifiers for drawing borders around shapes, and they have subtly different behavior:

- The `strokeBorder()` modifier insets the view by half your border width then applies the stroke, meaning that the entire border is drawn inside the view.
- The `stroke()` modifier draws a border centered on the view’s edge, meaning that half the border is inside the view and half outside.

::: important

Both of these modifiers only apply to shapes – you can use `stroke()` and `strokeBorder()` with `Circle`, `Rectangle`, `Capsule`, and so on, but not with `Text`, `Image` or other non-shape views. If you want to draw a border around non-shape views, you should use the `border()` modifier instead – see “[How to draw a border around a view](/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-a-border-around-a-view.md)”.

:::

If you want to see `strokeBorder()` in action, try this:

```swift
Circle()
    .strokeBorder(.blue, lineWidth: 50)
    .frame(width: 200, height: 200)
    .padding()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-draw-a-border-inside-a-view-1.zip)

![A thick blue circular ring.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-a-border-inside-a-view-1~dark@2x.png)

Because that uses `strokeBorder()`, the 50-point blue stroke will be drawn entirely inside the circle.

If you aren’t quite sure of the difference from `stroke()`, try changing your code to this:

```swift
Circle()
    .stroke(.blue, lineWidth: 50)
    .frame(width: 200, height: 200)
    .padding()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-draw-a-border-inside-a-view-2.zip)

![A larger thick blue circular ring.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-a-border-inside-a-view-2~dark@2x.png)

Now you’ll see the circle looks bigger because the stroke is drawn half inside and half outside the circle.

::: details Similar solutions…

```component VPCard
{
  "title": "How to draw a border around a view | SwiftUI by Example",
  "desc": "How to draw a border around a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-a-border-around-a-view.md",
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

```component VPCard
{
  "title": "How to create a marching ants border effect | SwiftUI by Example",
  "desc": "How to create a marching ants border effect",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-marching-ants-border-effect.md",
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
  "title": "How to draw a shadow around a view | SwiftUI by Example",
  "desc": "How to draw a shadow around a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-a-shadow-around-a-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />