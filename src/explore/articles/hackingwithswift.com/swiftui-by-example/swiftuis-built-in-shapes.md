---
lang: ko-KR
title: SwiftUI's built-in shapes
description: Article(s) > SwiftUI's built-in shapes
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
      content: Article(s) > SwiftUI's built-in shapes
    - property: og:description
      content: SwiftUI's built-in shapes
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/swiftuis-built-in-shapes.html
prev: /explore/articles/hackingwithswift.com/swiftui-by-example/how-to-change-the-background-color-of-list-texteditor-and-more.md
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
  "title": "SwiftUI's built-in shapes | SwiftUI by Example",
  "desc": "SwiftUI's built-in shapes",
  "link": "https://hackingwithswift.com/quick-start/swiftui/swiftuis-built-in-shapes",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Improved in iOS 17**

SwiftUI gives us five built-in shapes that are commonly used: rectangle, rounded rectangle, circle, ellipse, and capsule. The last three in particular are subtly different in how they behave based on what sizes you provide, but we can demonstrate all the options with a single example:

```swift
struct ContentView: View {
    var body: some View {
        ZStack {
            Rectangle()
                .fill(.gray)
                .frame(width: 200, height: 200)

            RoundedRectangle(cornerRadius: 25)
                .fill(.red)
                .frame(width: 200, height: 200)

            UnevenRoundedRectangle(cornerRadii: .init(topLeading: 50, topTrailing: 50))
                .fill(.orange)
                .frame(width: 200, height: 200)

            Capsule()
                .fill(.green)
                .frame(width: 100, height: 50)

            Ellipse()
                .fill(.blue)
                .frame(width: 100, height: 50)

            Circle()
                .fill(.white)
                .frame(width: 100, height: 50)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/swiftuis-built-in-shapes-1.zip)

That draws all five shapes: two at 200x200 and three at 100x50. However, because the drawing behavior of the shapes is different you’ll see all five shapes visible in the output:

- `Rectangle` draws a box at the exact dimensions you specify.
- `RoundedRectangle` does the same, except now you can round the corners by a certain amount. Its second parameter, `style`, determines whether you want classic rounded corners (`.circular`) or Apple’s slightly smoother alternative (`.continuous`). The default from iOS 13 to 16 was `.circular`, but this changes to `.continuous` from iOS 17 on.
- `UnevenRoundedRectangle` is a rounded rectangle where only some corners are rounded. The default is 0 for any corner, but you can override as many as you want to get a custom effect.
- `Capsule` draws a box where one edge axis is rounded fully, depending on whether the height or width is largest. Our shape is 100x50, so it will have rounded left and right edges while being straight on the top and bottom edges.
- `Ellipse` draws an ellipse at the exact dimensions you specify.
- `Circle` draws an ellipse where the height and width are equal, so when we provide 100x50 for the space we’ll actually get 50x50.

If you’re applying these shapes as clip shapes, content shapes, or similar, you can use the short-hand versions `.capsule`, `ellipse`, `.rect(cornerRadius: 10)`, `.rect(topLeadingRadius: 20, topTrailingRadius: 20)`, and so on.

::: details Similar solutions…

```component VPCard
{
  "title": "How to combine shapes to create new shapes | SwiftUI by Example",
  "desc": "How to combine shapes to create new shapes",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-combine-shapes-to-create-new-shapes.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to fill and stroke shapes at the same time | SwiftUI by Example",
  "desc": "How to fill and stroke shapes at the same time",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fill-and-stroke-shapes-at-the-same-time.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to display solid shapes | SwiftUI by Example",
  "desc": "How to display solid shapes",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-display-solid-shapes.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to draw polygons and stars | SwiftUI by Example",
  "desc": "How to draw polygons and stars",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-polygons-and-stars.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to draw a custom path | SwiftUI by Example",
  "desc": "How to draw a custom path",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-a-custom-path.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />