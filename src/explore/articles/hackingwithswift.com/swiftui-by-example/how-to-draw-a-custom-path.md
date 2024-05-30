---
lang: ko-KR
title: How to draw a custom path
description: Article(s) > How to draw a custom path
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
      content: Article(s) > How to draw a custom path
    - property: og:description
      content: How to draw a custom path
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-a-custom-path.html
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
  "title": "How to draw a custom path | SwiftUI by Example",
  "desc": "How to draw a custom path",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-draw-a-custom-path",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI lets us draw custom paths by conforming to the `Shape` protocol, so we can create our own shapes that work the same as `Rectangle`, `Capsule`, and `Circle`. Conforming to this protocol isn’t hard, because all you need to do is support a `path(in:)` method that accepts a `CGRect` and returns a `Path`. Even better, you can use any paths you’ve previously built using `CGPath` or `UIBezierPath`, then convert the result to a SwiftUI path.

If you want to use SwiftUI’s native `Path` type, create a variable instance of it then add as many points or shapes as you need. Don’t think about colors, fills, or stroke widths – you’re focusing on the raw shape here, and those kinds of settings are provided when your custom path is used.

For example, we could make a creative effect by drawing a series of shrinking squares, then placing that shape into a SwiftUI view with a stroke and a size:

```swift
struct ShrinkingSquares: Shape {
    func path(in rect: CGRect) -> Path {
        var path = Path()

        for i in stride(from: 1, through: 100, by: 5.0) {
            let rect = CGRect(x: 0, y: 0, width: rect.width, height: rect.height)
            let insetRect = rect.insetBy(dx: i, dy: i)
            path.addRect(insetRect)
        }

        return path
    }
}

struct ContentView: View {
    var body: some View {
        ShrinkingSquares()
            .stroke()
            .frame(width: 200, height: 200)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-draw-a-custom-path-1.zip)

![A series of concentric square outlines creating an optical illusion.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-a-custom-path-1~dark@2x.png)

::: details Similar solutions…

```component VPCard
{
  "title": "How to draw polygons and stars | SwiftUI by Example",
  "desc": "How to draw polygons and stars",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-polygons-and-stars.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to draw a checkerboard | SwiftUI by Example",
  "desc": "How to draw a checkerboard",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-a-checkerboard.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to draw a border inside a view | SwiftUI by Example",
  "desc": "How to draw a border inside a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-a-border-inside-a-view.md",
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
  "title": "How to draw a border around a view | SwiftUI by Example",
  "desc": "How to draw a border around a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-a-border-around-a-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />