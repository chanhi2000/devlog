---
lang: ko-KR
title: How to position views in a fixed grid
description: Article(s) > How to position views in a fixed grid
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
      content: Article(s) > How to position views in a fixed grid
    - property: og:description
      content: How to position views in a fixed grid
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-position-views-in-a-fixed-grid.html
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
  "title": "How to position views in a fixed grid | SwiftUI by Example",
  "desc": "How to position views in a fixed grid",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-position-views-in-a-fixed-grid",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 16**

SwiftUI's `Grid` view lets us create a static grid of views, with precise control over what goes into each row and column. You mark out individual rows using `GridRow`, then optionally also configure how wide each cell should be.

As a basic example, this creates a 2x2 grid with text reflecting where each cell with be positioned:

```swift
Grid {
    GridRow {
        Text("Top Leading")
            .background(.red)

        Text("Top Trailing")
            .background(.orange)
    }

    GridRow {
        Text("Bottom Leading")
            .background(.green)

        Text("Bottom Trailing")
            .background(.blue)
    }
}
.font(.title)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-position-views-in-a-fixed-grid-1.zip)

If you don't want to have the same number of cells in each row, you have three choices.

First, if you do nothing, SwiftUI will automatically insert empty cells to make sure the rows are equal. So, in this code we can add to the red and blue scores freely, and SwiftUI will keep the whole thing balanced:

```swift
struct ContentView: View {
    @State private var redScore = 0
    @State private var blueScore = 0

    var body: some View {
        Grid {
            GridRow {
                Text("Red")

                ForEach(0..<redScore, id: \.self) { _ in
                    Rectangle()
                        .fill(.red)
                        .frame(width: 20, height: 20)
                }
            }

            GridRow {
                Text("Blue")

                ForEach(0..<blueScore, id: \.self) { _ in
                    Rectangle()
                        .fill(.blue)
                        .frame(width: 20, height: 20)
                }
            }
        }
        .font(.title)

        Button("Add to Red") { redScore += 1 }
        Button("Add to Blue") { blueScore += 1 }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-position-views-in-a-fixed-grid-2.zip)

The second option is to place views into the grid without wrapping them in a `GridRow`, which will cause them to occupy a whole row by themselves. This is great for the `Divider` view. The third option is to use the `gridCellColumns()` modifier, to make one cell span multiple columns.

We can see the second and third option in a single code sample:

```swift
Grid {
    GridRow {
        Text("Food")
        Text("$200")
    }

    GridRow {
        Text("Rent")
        Text("$800")
    }

    GridRow {
        Text("Candles")
        Text("$3600")
    }

    Divider()

    GridRow {
        Text("$4600")
            .gridCellColumns(2)
            .multilineTextAlignment(.trailing)
    }

}
.font(.title)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-position-views-in-a-fixed-grid-3.zip)

As you can see, using `gridCellColumns()` with the same number of columns you have yields the same result as placing a view outside of a `GridRow`.

Important: Unlike `LazyHGrid` and `LazyVGrid`, a plain `Grid` loads all its views immediately, so be careful how much work you do.

Grids are fantastic choices when you need exact layouts – we can use them to make a tic-tac-toe board:

```swift
Grid(horizontalSpacing: 20, verticalSpacing: 20) {
    GridRow {
        Image(systemName: "xmark")
        Image(systemName: "xmark")
        Image(systemName: "xmark")
    }

    GridRow {
        Image(systemName: "circle")
        Image(systemName: "xmark")
        Image(systemName: "circle")
    }

    GridRow {
        Image(systemName: "xmark")
        Image(systemName: "circle")
        Image(systemName: "circle")
    }
}
.font(.largeTitle)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-position-views-in-a-fixed-grid-4.zip)

Or even a chessboard:

```swift
struct ContentView: View {
    var body: some View {
        Grid(horizontalSpacing: 0, verticalSpacing: 0) {
            ForEach(0..<8) { row in
                GridRow {
                    ForEach(0..<8) { col in
                        if (row + col).isMultiple(of: 2) {
                            Rectangle()
                                .fill(.black)
                        } else {
                            Rectangle()
                                .fill(.white)
                        }
                    }
                }
            }
        }
        .aspectRatio(1, contentMode: .fit)
        .border(.black, width: 1)
        .padding()
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-position-views-in-a-fixed-grid-5.zip)

::: details Similar solutions…

```component VPCard
{
  "title": "How to position views in a grid using LazyVGrid and LazyHGrid | SwiftUI by Example",
  "desc": "How to position views in a grid using LazyVGrid and LazyHGrid",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-position-views-in-a-grid-using-lazyvgrid-and-lazyhgrid.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to make a fixed size Spacer | SwiftUI by Example",
  "desc": "How to make a fixed size Spacer",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-make-a-fixed-size-spacer.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to adjust the position of a view using its offset | SwiftUI by Example",
  "desc": "How to adjust the position of a view using its offset",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-adjust-the-position-of-a-view-using-its-offset.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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
  "title": "How to style text views with fonts, colors, line spacing, and more | SwiftUI by Example",
  "desc": "How to style text views with fonts, colors, line spacing, and more",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-style-text-views-with-fonts-colors-line-spacing-and-more.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />