---
lang: ko-KR
title: How to create a marching ants border effect
description: Article(s) > How to create a marching ants border effect
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
      content: Article(s) > How to create a marching ants border effect
    - property: og:description
      content: How to create a marching ants border effect
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-marching-ants-border-effect.html
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
  "title": "How to create a marching ants border effect | SwiftUI by Example",
  "desc": "How to create a marching ants border effect",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-marching-ants-border-effect",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s stroke can be configured with dash and dash phase options that gives us very fine-grained control over how the line is drawn. For example, we could draw a box with a dashed stroke like this:

```swift
struct ContentView: View {
    var body: some View {
        Rectangle()
            .strokeBorder(style: StrokeStyle(lineWidth: 4, dash: [10]))
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-a-marching-ants-border-effect-1.zip)

![A dotted line outlining a rectangular area.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-marching-ants-border-effect-1~dark@2x.png)

Using `[10]` for the `dash` parameter means SwiftUI will draw 10 points of our stroke then 10 points of space, repeating that pattern until the entire rectangle has been stroked. It’s an array because you can provide more than one value, such as `[10, 5]`, to mean “10 points of stroke then a 5-point gap.”

Where this becomes really interesting is when you add in the dash phase, which dictates where the dashes and gaps should be positioned. If we store that phase in a state property, we can then animate that value over time to create a so-called marching ants effect – a dashed stroke that moves around a shape, which is commonly used to signal object selection.

In code it looks like this:

```swift
struct ContentView: View {
    @State private var phase = 0.0

    var body: some View {
        Rectangle()
            .strokeBorder(style: StrokeStyle(lineWidth: 4, dash: [10], dashPhase: phase))
            .frame(width: 200, height: 200)
            .onAppear {
                withAnimation(.linear.repeatForever(autoreverses: false)) {
                    phase -= 20
                }
            }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-a-marching-ants-border-effect-2.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-marching-ants-border-effect-2~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "How to draw a border around a view | SwiftUI by Example",
  "desc": "How to draw a border around a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-draw-a-border-around-a-view.md",
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
  "title": "How to add a border to a TextField | SwiftUI by Example",
  "desc": "How to add a border to a TextField",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-add-a-border-to-a-textfield.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add visual effect blurs | SwiftUI by Example",
  "desc": "How to add visual effect blurs",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-add-visual-effect-blurs.md",
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