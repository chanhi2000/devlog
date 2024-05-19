---
lang: ko-KR
title: How to render a gradient
description: Article(s) > How to render a gradient
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
      content: Article(s) > How to render a gradient
    - property: og:description
      content: How to render a gradient
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-render-a-gradient.html
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
  "title": "How to render a gradient | SwiftUI by Example",
  "desc": "How to render a gradient",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-render-a-gradient",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Updated in iOS 16**

SwiftUI gives us a variety of gradient options, all of which can be used in a variety of ways.

If you're targeting iOS 16 or later, you can get a beautifully simple linear gradient by appending `.gradient` to whatever color you're using:

```swift
Rectangle().fill(.blue.gradient)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-render-a-gradient-1.zip)

For more advanced gradients, or to support iOS versions prior to 16, you can use one of SwiftUI's built in gradient types to get exact control. For example, you could render a text view using a white to black linear gradient like this:

```swift
Text("Hello World")
    .padding()
    .foregroundStyle(.white)
    .font(.largeTitle)
    .background(
        LinearGradient(gradient: Gradient(colors: [.white, .black]), startPoint: .top, endPoint: .bottom)
    )
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-render-a-gradient-2.zip)

![The words “Hello World” in white over a gradient fading from white at the top to black at the bottom.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-render-a-gradient-1~dark.png)

The colors are specified as an array and you can have as many as you want – by default SwiftUI will space them equally. So, we could go from white to red to black like this:

```swift
Text("Hello World")
    .padding()
    .foregroundStyle(.white)
    .font(.largeTitle)
    .background(
        LinearGradient(gradient: Gradient(colors: [.white, .red, .black]), startPoint: .top, endPoint: .bottom)
    )
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-render-a-gradient-3.zip)

![The words “Hello World” in white over a gradient fading from white at the top to red in the center to black at the bottom.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-render-a-gradient-2~dark.png)

To make a horizontal gradient rather than a vertical one, use `.leading` and `.trailing` for your start and end points:

```swift
Text("Hello World")
    .padding()
    .foregroundStyle(.white)
    .font(.largeTitle)
    .background(
        LinearGradient(gradient: Gradient(colors: [.white, .red, .black]), startPoint: .leading, endPoint: .trailing)
    )
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-render-a-gradient-4.zip)

![The words “Hello World” in white over a gradient fading from white on the left to red in the center to black on the right.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-render-a-gradient-3~dark.png)

For alternative gradient styles, try `RadialGradient` or `AngularGradient`. As an example, this creates a radial gradient through a variety of colors, starting from the center of the circle and going out to the edges:

```swift
Circle()
    .fill(
        RadialGradient(gradient: Gradient(colors: [.red, .yellow, .green, .blue, .purple]), center: .center, startRadius: 50, endRadius: 100)
    )
    .frame(width: 200, height: 200)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-render-a-gradient-5.zip)

![A circle colored with a gradient transitioning radially outwards from red to yellow to green to blue to purple.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-render-a-gradient-4~dark.png)

And this creates an angular gradient (often called a conic gradient), cycling through various colors then returning to the beginning:

```swift
Circle()
    .fill(
        AngularGradient(gradient: Gradient(colors: [.red, .yellow, .green, .blue, .purple, .red]), center: .center)
    )
    .frame(width: 200, height: 200)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-render-a-gradient-6.zip)

![A circle colored with a conic gradient transitioning through the colors of the rainbow.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-render-a-gradient-5~dark.png)

Because all three gradient types conform to the `ShapeStyle` protocol, you can use them for backgrounds, fills, and strokes. For example, this uses our rainbow conical gradient as a thick inner stroke for a circle:

```swift
Circle()
    .strokeBorder(
        AngularGradient(gradient: Gradient(colors: [.red, .yellow, .green, .blue, .purple, .red]), center: .center, startAngle: .zero, endAngle: .degrees(360)),
        lineWidth: 50
    )
    .frame(width: 200, height: 200)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-render-a-gradient-6.zip)

![A donut shape colored with a conic gradient transitioning through the colors of the rainbow.]()

::: details Similar solutions…

```component VPCard
{
  "title": "How to render a SwiftUI view to a PDF | SwiftUI by Example",
  "desc": "How to render a SwiftUI view to a PDF",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-render-a-swiftui-view-to-a-pdf.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to render images using SF Symbols | SwiftUI by Example",
  "desc": "How to render images using SF Symbols",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-render-images-using-sf-symbols.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to render Markdown content in text | SwiftUI by Example",
  "desc": "How to render Markdown content in text",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-render-markdown-content-in-text.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to convert a SwiftUI view to an image | SwiftUI by Example",
  "desc": "How to convert a SwiftUI view to an image",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-convert-a-swiftui-view-to-an-image.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add in-app purchases in SwiftUI | SwiftUI by Example",
  "desc": "How to add in-app purchases in SwiftUI",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-in-app-purchases-in-swiftui.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />