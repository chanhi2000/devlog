---
lang: ko-KR
title: How to draw a checkerboard
description: Article(s) > How to draw a checkerboard
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
      content: Article(s) > How to draw a checkerboard
    - property: og:description
      content: How to draw a checkerboard
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-draw-a-checkerboard.html
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
  "title": "How to draw a checkerboard | SwiftUI by Example",
  "desc": "How to draw a checkerboard",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-draw-a-checkerboard",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s paths don’t need to be continuous, isolated shapes, and can instead be multiple rectangles, ellipses, and more, all combined into one.

As an easy way of demonstrating this, we could write a shape that creates checkerboard patterns by building up a series of rectangles of a set number of rows and columns, like this:

```swift
struct Checkerboard: Shape {
    let rows: Int
    let columns: Int

    func path(in rect: CGRect) -> Path {
        var path = Path()

        // figure out how big each row/column needs to be
        let rowSize = rect.height / Double(rows)
        let columnSize = rect.width / Double(columns)

        // loop over all rows and columns, making alternating squares colored    
        for row in 0 ..< rows {
            for column in 0 ..< columns {
                if (row + column).isMultiple(of: 2) {
                    // this square should be colored; add a rectangle here
                    let startX = columnSize * Double(column)
                    let startY = rowSize * Double(row)

                    let rect = CGRect(x: startX, y: startY, width: columnSize, height: rowSize)
                    path.addRect(rect)
                }
            }
        }

        return path
    }
}

// Create a checkerboard in a view
struct ContentView: View {
    var body: some View {
        Checkerboard(rows: 16, columns: 16)
            .fill(.red)
            .frame(width: 200, height: 200)    
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-draw-a-checkerboard-1.zip)

![A square covered in a 16 by 16 red checkerboard pattern.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-a-checkerboard-1~dark@2x.png)

::: details Similar solutions…

```component VPCard
{
  "title": "How to add Metal shaders to SwiftUI views using layer effects | SwiftUI by Example",
  "desc": "How to add Metal shaders to SwiftUI views using layer effects",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-add-metal-shaders-to-swiftui-views-using-layer-effects.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to draw polygons and stars | SwiftUI by Example",
  "desc": "How to draw polygons and stars",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-draw-polygons-and-stars.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to draw a border inside a view | SwiftUI by Example",
  "desc": "How to draw a border inside a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-draw-a-border-inside-a-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to draw a custom path | SwiftUI by Example",
  "desc": "How to draw a custom path",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-draw-a-custom-path.md",
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