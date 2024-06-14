---
lang: ko-KR
title: How to create basic animations
description: Article(s) > How to create basic animations
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
      content: Article(s) > How to create basic animations
    - property: og:description
      content: How to create basic animations
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-create-basic-animations.html
prev: /explore/articles/hackingwithswift.com/swiftui/how-to-add-metal-shaders-to-swiftui-views-using-layer-effects.md
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
  "title": "How to create basic animations | SwiftUI by Example",
  "desc": "How to create basic animations",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-basic-animations",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Improved in iOS 17**

SwiftUI has built-in support for animations with its `animation()` modifier. To use this modifier, place it after any other modifiers for your views, tell it what kind of animation you want, and also make sure you attach it to a particular value so the animation triggers only when that specific value changes.

For example, this code creates a button that increases its scale effect by 1 each time it’s pressed:

```swift
struct ContentView: View {
    @State private var scale = 1.0

    var body: some View {
        Button("Press here") {
            scale += 1
        }
        .scaleEffect(scale)
        .animation(.linear(duration: 1), value: scale)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-basic-animations-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-basic-animations-1~dark.mp4" />

That makes the animation happen over 1 second, but if you don’t want to specify a precise time for your animation you can just use `.linear`.

::: important

From iOS 17 and later SwiftUI uses spring animations by default, but before that used linear animations by default.

:::

Instead of simple linear animations you can specify a curve from various built-in options, including:

- `.easeIn` starts slow then accelerates until the end.
- `.easeOut` starts fast then slows down near the end.
- `.easeInOut` starts slow, accelerates in the middle, then slows down near the end.
- `.smooth` is a spring animation with no bounce (from iOS 17) 
- `.snappy` is a spring animation with a little bounce (from iOS 17)
- `.bouncy` is a spring animation with a medium amount of bounce (from iOS 17)

Alternatively, you can specify `.timingCurve` to specify your own control points.

For example, this animates the scale effect so that it starts slow and gets faster:

```swift
struct ContentView: View {
    @State private var scale = 1.0

    var body: some View {
        Button("Press here") {
            scale += 1
        }
        .scaleEffect(scale)
        .animation(.easeIn, value: scale)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-basic-animations-2.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-basic-animations-2~dark.mp4" />

You can animate many other modifiers, such as 2D and 3D rotation, opacity, border, and more. For example, this makes a button that spins around and increases its border every time it’s tapped:

```swift
struct ContentView: View {
    @State private var angle = 0.0
    @State private var borderThickness = 1.0

    var body: some View {
        Button("Press here") {
            angle += 45
            borderThickness += 1
        }
        .padding()
        .border(.red, width: borderThickness)
        .rotationEffect(.degrees(angle))
        .animation(.easeIn, value: angle)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-basic-animations-3.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-basic-animations-3~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "How to create multi-step animations using phase animators | SwiftUI by Example",
  "desc": "How to create multi-step animations using phase animators",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-multi-step-animations-using-phase-animators.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to synchronize animations from one view to another with matchedGeometryEffect() | SwiftUI by Example",
  "desc": "How to synchronize animations from one view to another with matchedGeometryEffect()",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-synchronize-animations-from-one-view-to-another-with-matchedgeometryeffect.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to override animations with transactions | SwiftUI by Example",
  "desc": "How to override animations with transactions",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-override-animations-with-transactions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to apply multiple animations to a view | SwiftUI by Example",
  "desc": "How to apply multiple animations to a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-apply-multiple-animations-to-a-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{ 
  "title": "How to reduce animations when requested | SwiftUI by Example",
  "desc": "How to reduce animations when requested",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-reduce-animations-when-requested.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::


---

<TagLinks />