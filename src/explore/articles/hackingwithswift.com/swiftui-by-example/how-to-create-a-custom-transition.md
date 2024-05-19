---
lang: ko-KR
title: How to create a custom transition
description: Article(s) > How to create a custom transition
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
      content: Article(s) > How to create a custom transition
    - property: og:description
      content: How to create a custom transition
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-custom-transition.html
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
  "title": "How to create a custom transition | SwiftUI by Example",
  "desc": "How to create a custom transition",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-custom-transition",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Although SwiftUI comes with a selection of transitions built in, it’s also possible to write entirely custom transitions if we want to.

The process takes three steps:

1. Create a `ViewModifier` that represents your transition at any of its states.
2. Create an `AnyTransition` extension that uses your view modifier for active and identity states.
3. Apply that transition to your views using the `transition()` modifier.

For example, we could write a shape and view modifier combination that lets us mimic the Iris animation in Keynote – it causes a new slide to appear in a circle that grows upwards, a bit like the old Looney Tunes intro sequence.

To demonstrate this in action, I’m going to show you a complete code example that does several things:

1. Defines a `ScaledCircle` shape that creates a circle inside a rectangle that is scaled according to some animatable data.
2. Create a custom `ViewModifier` struct to apply any shape (in our case, the scaled circle) as a clip shape for another view.
3. Wraps that in an `AnyTransition` extension to wrap that modifier in a transition for easier access.
4. Creates a SwiftUI view to demonstrate our transition in action.

Here’s the code, with added comments to explain what’s going on:


```swift
struct ScaledCircle: Shape {
    // This controls the size of the circle inside the
    // drawing rectangle. When it's 0 the circle is
    // invisible, and when it’s 1 the circle fills
    // the rectangle.
    var animatableData: Double

    func path(in rect: CGRect) -> Path {
        let maximumCircleRadius = sqrt(rect.width * rect.width + rect.height * rect.height)
        let circleRadius = maximumCircleRadius * animatableData

        let x = rect.midX - circleRadius / 2
        let y = rect.midY - circleRadius / 2

        let circleRect = CGRect(x: x, y: y, width: circleRadius, height: circleRadius)

        return Circle().path(in: circleRect)
    }
}

// A general modifier that can clip any view using a any shape.
struct ClipShapeModifier<T: Shape>: ViewModifier {
    let shape: T

    func body(content: Content) -> some View {
        content.clipShape(shape)
    }
}

// A custom transition combining ScaledCircle and ClipShapeModifier.
extension AnyTransition {
    static var iris: AnyTransition {
        .modifier(
            active: ClipShapeModifier(shape: ScaledCircle(animatableData: 0)),
            identity: ClipShapeModifier(shape: ScaledCircle(animatableData: 1))
        )
    }
}

// An example view move showing and hiding a red
// rectangle using our transition.
struct ContentView: View {
    @State private var isShowingRed = false

    var body: some View {
        ZStack {
            Color.blue
                .frame(width: 200, height: 200)

            if isShowingRed {
                Color.red
                    .frame(width: 200, height: 200)
                    .transition(.iris)
                    .zIndex(1)
            }
        }
        .padding(50)
        .onTapGesture {
            withAnimation(.easeInOut) {
                isShowingRed.toggle()
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-a-custom-transition-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-custom-transition-1~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "How to make views scroll with a custom transition | SwiftUI by Example",
  "desc": "How to make views scroll with a custom transition",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-views-scroll-with-a-custom-transition.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add and remove views with a transition | SwiftUI by Example",
  "desc": "How to add and remove views with a transition",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-and-remove-views-with-a-transition.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create and compose custom views | SwiftUI by Example",
  "desc": "How to create and compose custom views",
  "link": "https://www.hackingwithswift.com/quick-start/swiftui/how-to-create-and-compose-custom-views",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create custom animated drawings with TimelineView and Canvas | SwiftUI by Example",
  "desc": "How to create custom animated drawings with TimelineView and Canvas",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-custom-animated-drawings-with-timelineview-and-canvas.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create custom bindings | SwiftUI by Example",
  "desc": "How to create custom bindings",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-custom-bindings.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />