---
lang: ko-KR
title: How to fill and stroke shapes at the same time
description: Article(s) > How to fill and stroke shapes at the same time
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
  - hacking-with-swift
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to fill and stroke shapes at the same time
    - property: og:description
      content: How to fill and stroke shapes at the same time
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fill-and-stroke-shapes-at-the-same-time.html
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
  "title": "How to fill and stroke shapes at the same time | SwiftUI by Example",
  "desc": "How to fill and stroke shapes at the same time",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-fill-and-stroke-shapes-at-the-same-time",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Improved in iOS 17**

In iOS 17 and later, you can fill and stroke shapes at the same time just by stacking the modifiers, like this:

```swift
Circle()
    .stroke(.red, lineWidth: 20)
    .fill(.orange)
    .frame(width: 150, height: 150)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-fill-and-stroke-shapes-at-the-same-time-1.zip)

![A orange circle with a red outline.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-fill-and-stroke-shapes-at-the-same-time-3~dark.png)

This even works with multiple strokes of various sizes:

```swift
Circle()
    .stroke(.blue, lineWidth: 45)
    .stroke(.green, lineWidth: 35)
    .stroke(.yellow, lineWidth: 25)
    .stroke(.orange, lineWidth: 15)
    .stroke(.red, lineWidth: 5)
    .frame(width: 150, height: 150)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-fill-and-stroke-shapes-at-the-same-time-2.zip)

![A circle with a rainbow of stroke colors.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-fill-and-stroke-shapes-at-the-same-time-4~dark.png)

In iOS 16 and below, SwiftUI provides the `fill()`, `stroke()`, and `strokeBorder()` modifiers for adjusting the way we draw shapes, but it does not provide a built-in way to fill and stroke at the same time. However, we can get the same effect in two different ways, and I’m going to show you both here.

The first option is to use `strokeBorder()` to add a border around your shape, then place a filled shape in the background using `background()`. For example, this creates a circle with a black stroke and blue fill:

```swift
Circle()
    .strokeBorder(.red, lineWidth: 20)
    .background(Circle().fill(.orange))
    .frame(width: 150, height: 150)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-fill-and-stroke-shapes-at-the-same-time-3.zip)

![A blue circle with a thick black outline.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-fill-and-stroke-shapes-at-the-same-time-1~dark.png)

Using `background()` ensures the blue circle always matches the size of the red circle.

The second option is to layer the two circles manually using `ZStack`:

```swift
ZStack {
    Circle()
        .fill(.orange)

    Circle()
        .strokeBorder(.red, lineWidth: 20)
}
.frame(width: 150, height: 150)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-fill-and-stroke-shapes-at-the-same-time-4.zip)

If you want to fill and stroke lots of shapes, you should consider wrapping up this functionality in an extension. Only `InsettableShapes` get the `strokeBorder()` method, so you should probably write two extension methods – one to handle regular shapes using `stroke()`, and one to handle insettable shapes using `strokeBorder()`.

Here’s how that looks in code:

```swift
extension Shape {
    func fill<Fill: ShapeStyle, Stroke: ShapeStyle>(_ fillStyle: Fill, strokeBorder strokeStyle: Stroke, lineWidth: Double = 1) -> some View {
        self
            .stroke(strokeStyle, lineWidth: lineWidth)
            .background(self.fill(fillStyle))
    }
}

extension InsettableShape {
    func fill<Fill: ShapeStyle, Stroke: ShapeStyle>(_ fillStyle: Fill, strokeBorder strokeStyle: Stroke, lineWidth: Double = 1) -> some View {
        self
            .strokeBorder(strokeStyle, lineWidth: lineWidth)
            .background(self.fill(fillStyle))
    }
}
```

::: details Similar solutions…

```component VPCard
{
  "title": "Article(s) > How to make two gestures recognize at the same time using simultaneousGesture()",
  "desc": "How to make two gestures recognize at the same time using simultaneousGesture()",
  "link": "/swift/swiftui-by-example/08-taps-and-gestures/how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

How to combine shapes to create new shapes

```component VPCard
{
  "title": "Article(s) > How to make two views the same width or height",
  "desc": "How to make two views the same width or height",
  "link": "/swift/swiftui-by-example/04-view-layout/how-to-make-two-views-the-same-width-or-height.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > SwiftUI’s built-in shapes",
  "desc": "SwiftUI’s built-in shapes",
  "link": "/swift/swiftui-by-example/17-drawing/swiftuis-built-in-shapes.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to display solid shapes",
  "desc": "How to display solid shapes",
  "link": "/swift/swiftui-by-example/03-images-shapes-and-media/how-to-display-solid-shapes.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />