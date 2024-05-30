---
lang: ko-KR
title: How to dynamically adjust the appearance of a view based on its size and location
description: Article(s) > How to dynamically adjust the appearance of a view based on its size and location
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
      content: Article(s) > How to dynamically adjust the appearance of a view based on its size and location
    - property: og:description
      content: How to dynamically adjust the appearance of a view based on its size and location
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location.html
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
  "title": "How to dynamically adjust the appearance of a view based on its size and location | SwiftUI by Example",
  "desc": "How to dynamically adjust the appearance of a view based on its size and location",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 17**

SwiftUI's `visualEffect()` modifier lets us read the geometry proxy for a view *without* using a `GeometryReader`, which means we can look at the size and location of a view without affecting its layout behavior.

::: important

This modifier is specifically for applying visual effects such as adjusting colors or adding blur, and cannot adjust how the frame of your content is calculated for layout purposes. It *can* adjust frame-*like* things such as the offset and scale of your view, because they don't affect layout.

:::

As an example, the following code blurs each view in a scroll view by some blur amount that's calculated by how far away the view is away from the center of its scroll view. That means views near the vertical center have little or no blur, whereas views on the outside are heavily blurred:

```swift
struct ContentView: View {
    var body: some View {
        ScrollView {
            ForEach(0..<100) { i in
                Text("Row \(i)")
                    .font(.largeTitle)
                    .frame(maxWidth: .infinity)
                    .visualEffect { content, proxy in
                        content.blur(radius: blurAmount(for: proxy))
                    }
            }
        }
    }

    func blurAmount(for proxy: GeometryProxy) -> Double {
        let scrollViewHeight = proxy.bounds(of: .scrollView)?.height ?? 100
        let ourCenter = proxy.frame(in: .scrollView).midY
        let distanceFromCenter = abs(scrollViewHeight / 2 - ourCenter)
        return Double(distanceFromCenter) / 100
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location-1.zip)

![A scrolling list of rows, where rows near the center are sharp and rows near the edges are blurry.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location-1~dark.gif)

::: tip

Calling `proxy.frame(in: .scrollView)` finds the size of this view in the innermost scroll view that contains it.

:::

These visual effects work with any kind of position, including that generated through animation. For example, this makes a series of circles in a grid spin around, with each one dynamically recoloring based on a hue rotation:

```swift
struct ContentView: View {
    @State private var rotationAmount = 0.0

    var body: some View {
        Grid {
            ForEach(0..<3) { _ in
                GridRow {
                    ForEach(0..<3) { _ in
                        Circle()
                            .fill(.green)
                            .frame(width: 100, height: 100)
                            .visualEffect { content, proxy in
                                content.hueRotation(.degrees(proxy.frame(in: .global).midY / 2))
                            }
                    }
                }
            }
        }
        .rotationEffect(.degrees(rotationAmount))
        .onAppear {
            withAnimation(.linear(duration: 5).repeatForever(autoreverses: false)) {
                rotationAmount = 360
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location-2.zip)

![A 3x3 grid of rotating circles, where each circle changes colors as it moves.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location-2~dark.gif)

The modifier's name, `visualEffect()`, should make it clear that any adjustments you make are limited how the finished view looks – if you find yourself wanting to use it to adjust view *content*, you're looking in the wrong place.

::: details Similar solutions…

```component VPCard
{
  "title": "How to adjust the size of a view relative to its container | SwiftUI by Example",
  "desc": "How to adjust the size of a view relative to its container",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-the-size-of-a-view-relative-to-its-container.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to automatically switch between HStack and VStack based on size class | SwiftUI by Example",
  "desc": "How to automatically switch between HStack and VStack based on size class",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-automatically-switch-between-hstack-and-vstack-based-on-size-class.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to dynamically adjust the color of an SF Symbol | SwiftUI by Example",
  "desc": "How to dynamically adjust the color of an SF Symbol",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-dynamically-adjust-the-color-of-an-sf-symbol.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to adjust the position of a view using its offset | SwiftUI by Example",
  "desc": "How to adjust the position of a view using its offset",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-the-position-of-a-view-using-its-offset.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a document-based app using FileDocument and DocumentGroup | SwiftUI by Example",
  "desc": "How to create a document-based app using FileDocument and DocumentGroup",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-document-based-app-using-filedocument-and-documentgroup.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />