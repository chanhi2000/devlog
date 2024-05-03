---
lang: ko-KR
title: How to create a custom layout using the Layout protocol
description: Article(s) > How to create a custom layout using the Layout protocol
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
      content: Article(s) > How to create a custom layout using the Layout protocol
    - property: og:description
      content: How to create a custom layout using the Layout protocol
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-custom-layout-using-the-layout-protocol.html
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
  "title": "How to create a custom layout using the Layout protocol | SwiftUI by Example",
  "desc": "How to create a custom layout using the Layout protocol",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-custom-layout-using-the-layout-protocol",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 16**

SwiftUI lets us create wholly custom layouts for our views using the Layout protocol, and our custom layouts can be used just like HStack, VStack, or any other built-in layout types.

Adopting the `Layout` protocol has just two requirements:

- A method that returns how much space your layout wants for its subviews. This will be given a size proposal, which is how much space the parent view has available for it. This might be called multiple times so SwiftUI can see how flexible your container is.
- Another method that actually places those subviews where you want them. This will be given the same size proposal as the first method, but will also be given a specific bounds to work with – this will be

You can also optionally make these methods cache their calculations if you're doing something particularly slow, but I've yet to encounter a situation where this is needed.

::: important 

When you're giving a size proposal, it might contain nil values for either or both of its width or height. As a result, it's common to call `replacingUnspecifiedDimensions()` on the proposal so that any nil values are replaced with a nominal, non-nil value.

:::

For example, we could implement a radial layout – a layout that places it views around a circle:

```swift
struct RadialLayout: Layout {
    func sizeThatFits(proposal: ProposedViewSize, subviews: Subviews, cache: inout Void) -> CGSize {
        // accept the full proposed space, replacing any nil values with a sensible default
        proposal.replacingUnspecifiedDimensions()
    }

    func placeSubviews(in bounds: CGRect, proposal: ProposedViewSize, subviews: Subviews, cache: inout Void) {
        // calculate the radius of our bounds
        let radius = min(bounds.size.width, bounds.size.height) / 2

        // figure out the angle between each subview on our circle
        let angle = Angle.degrees(360 / Double(subviews.count)).radians

        for (index, subview) in subviews.enumerated() {
            // ask this view for its ideal size
            let viewSize = subview.sizeThatFits(.unspecified)

            // calculate the X and Y position so this view lies inside our circle's edge
            let xPos = cos(angle * Double(index) - .pi / 2) * (radius - viewSize.width / 2)
            let yPos = sin(angle * Double(index) - .pi / 2) * (radius - viewSize.height / 2)

            // position this view relative to our centre, using its natural size ("unspecified")
            let point = CGPoint(x: bounds.midX + xPos, y: bounds.midY + yPos)
            subview.place(at: point, anchor: .center, proposal: .unspecified)
        }
    }
}
```

We can now use that just like any other layout type. For example, we could place an array of shapes around, using a stepper to control how many are shown:

```swift
struct ContentView: View {
    @State private var count = 16

    var body: some View {
        RadialLayout {
            ForEach(0..<count, id: \.self) { _ in
                Circle()
                    .frame(width: 32, height: 32)
            }
        }
        .safeAreaInset(edge: .bottom) {
            Stepper("Count: \(count)", value: $count.animation(), in: 0...36)
                .padding()
        }
    }
}
```

My book Pro SwiftUI goes into a lot more detail on custom layouts, including SwiftUI code for masonry layouts, equal width stacks, relative stacks, layout caches, custom animations, and more. Find out more [<FontIcon icon="fas fa-globe"/>here](https://www.hackingwithswift.com/store/pro-swiftui).

::: details Similar solutions…

```component VPCard  
{
  "title": "How to fix “Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements” | SwiftUI by Example",
  "desc": "How to fix “Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements”",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-protocol-view-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create and compose custom views | SwiftUI by Example",
  "desc": "How to create and compose custom views",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-and-compose-custom-views.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a custom transition | SwiftUI by Example",
  "desc": "How to create a custom transition",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-custom-transition.md",
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