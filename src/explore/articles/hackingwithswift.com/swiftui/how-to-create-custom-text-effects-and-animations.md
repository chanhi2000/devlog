---
lang: ko-KR
title: How to create custom text effects and animations
description: Article(s) > How to create custom text effects and animations
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
      content: Article(s) > How to create custom text effects and animations
    - property: og:description
      content: How to create custom text effects and animations
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-create-custom-text-effects-and-animations.html
next: /explore/articles/hackingwithswift.com/swiftui/how-to-create-basic-animations.md
date: 2024-06-21
isOriginal: false
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
  "title": "How to create custom text effects and animations | SwiftUI by Example",
  "desc": "How to create custom text effects and animations",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-custom-text-effects-and-animations",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 16

**New in iOS 18**

SwiftUI's `TextRenderer` protocol combines with the `textRenderer()` modifier to give us complete control over how text is rendered, including the ability to smooth animate rendering based on our custom logic.

To explain how this all works, I'll start by giving you a simple example, then explain how the various components fit together, and finish up with more examples so you can see what's possible.

First, let's look at a simple example that adjusts every other line in rendered text, so that even-numbered lines are opaque and odd-numbered lines are slightly translucent:

```swift
struct ZebraStripeRenderer: TextRenderer {
    func draw(layout: Text.Layout, in context: inout GraphicsContext) {
        for (index, line) in layout.enumerated() {
            if index.isMultiple(of: 2) {
                context.opacity = 1
            } else {
                context.opacity = 0.5
            }

            context.draw(line)
        }
    }
}

struct ContentView: View {
    var body: some View {
        Text("He thrusts his fists against the posts and still insists he sees the ghosts.")
            .font(.largeTitle)
            .textRenderer(ZebraStripeRenderer())
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-custom-text-effects-and-animations-1.zip)

Almost all the work there is in the `ZebraStripeRenderer` struct. That conforms to the `TextRenderer` protocol, which has only one requirement: a `draw(layout:in:)` method that handles text rendering into a graphics context. 

SwiftUI's `Text.Layout` type can be used as a sequence, so in the code above we loop over all the lines, adjusting opacity as we go, then rendering each line one at a time.

Each line is itself a sequence containing zero or more *runs*, which are groups of letters with the same styling, and inside *runs* are individual glyphs, which are the actual letters being rendered.

To help you visualize how this all fits together, we could create a simple text renderer that draws boxes around lines, runs, and glyphs, like this:

```swift
struct BoxedRenderer: TextRenderer {
    func draw(layout: Text.Layout, in context: inout GraphicsContext) {
        for line in layout {
            for run in line {
                for glyph in run {
                    context.stroke(Rectangle().path(in: glyph.typographicBounds.rect), with: .color(.blue), lineWidth: 2)
                }

                context.stroke(Rectangle().path(in: run.typographicBounds.rect), with: .color(.green), lineWidth: 2)
            }

            context.stroke(Rectangle().path(in: line.typographicBounds.rect), with: .color(.red), lineWidth: 2)

            context.draw(line)
        }
    }
}

struct ContentView: View {
    var body: some View {
        VStack {
            (
                Text("This is a **very** important string") +
                Text(" with lots of text inside.")
                    .foregroundStyle(.secondary)
            )
            .font(.largeTitle)
            .textRenderer(BoxedRenderer())
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-custom-text-effects-and-animations-2.zip)

The text we're rendering this time has Markdown styling inside and a SwiftUI modifier, which splits the lines up into several runs. When that code runs, you'll see red, green, and blue lines drawn around the various components, so you can see exactly what they mean.

---

## Animating TextRenderer

When you conform to `TextRenderer`, you can add an `animatableData` property to control how values change over time. This can then be animated using regular SwiftUI animations.

::: important

When rendering text that moves, it's a good idea to use the `.disablesSubpixelQuantization` option, which allows letter shapes to be rendered at floating-point positions rather than being snapped to the nearest integer, making for smoother movement.

:::

As an example, we could make a simple `WaveRenderer` struct that bends letters up and down based on `strength` and `frequency` values:

```swift
struct WaveRenderer: TextRenderer {
    var strength: Double
    var frequency: Double

    var animatableData: Double {
        get { strength }
        set { strength = newValue }
    }

    func draw(layout: Text.Layout, in context: inout GraphicsContext) {
        for line in layout {
            for run in line {
                for (index, glyph) in run.enumerated() {
                    let yOffset = strength * sin(Double(index) * frequency)
                    var copy = context

                    copy.translateBy(x: 0, y: yOffset)
                    copy.draw(glyph, options: .disablesSubpixelQuantization)
                }
            }
        }
    }
}
```

::: tip

Because `GraphicsContext` uses value semantics, taking a copy of your context allows you to make changes such as translating and scaling without affecting other drawing.

:::

Using that in a SwiftUI view means passing in some properties that change over time, for example using an animation that moves from strength -10 to +10:

```swift
struct ContentView: View {
    @State private var amount = -10.0

    var body: some View {
        Text("This is a very important string with lots of text inside. This is a very important string with lots of text inside.")
            .font(.largeTitle)
            .textRenderer(WaveRenderer(strength: amount, frequency: 0.5))
            .onAppear {
                withAnimation(.easeInOut(duration: 1).repeatForever(autoreverses: true)) {
                    amount = 10
                }
            }
    }
}
```

Or we could create an earthquake-style effect by using random Y offsets for each letter: 

```swift
struct QuakeRenderer: TextRenderer {
    var moveAmount: Double

    var animatableData: Double {
        get { moveAmount }
        set { moveAmount = newValue }
    }

    func draw(layout: Text.Layout, in context: inout GraphicsContext) {
        for line in layout {
            for run in line {
                for glyph in run {
                    var copy = context
                    let yOffset = Double.random(in: -moveAmount...moveAmount)

                    copy.translateBy(x: 0, y: yOffset)
                    copy.draw(glyph, options: .disablesSubpixelQuantization)
                }
            }
        }
    }
}

struct ContentView: View {
    @State private var strength = 0.0

    var body: some View {
        Text("SHOCKWAVE")
            .font(.largeTitle.weight(.black).width(.compressed))
            .textRenderer(QuakeRenderer(moveAmount: strength))
            .onAppear {
                withAnimation(.easeInOut(duration: 1).repeatForever(autoreverses: true)) {
                    strength = 10
                }
            }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-custom-text-effects-and-animations-4.zip)

There's really no limit to the kinds of animation you can perform!

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui/swiftui-tips-and-tricks.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui/all-swiftui-property-wrappers-explained-and-compared.md",
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
  "title": "How to create multi-step animations using phase animators | SwiftUI by Example",
  "desc": "How to create multi-step animations using phase animators",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-multi-step-animations-using-phase-animators.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Building a menu using List | SwiftUI by Example",
  "desc": "Building a menu using List",
  "link": "/explore/articles/hackingwithswift.com/swiftui/building-a-menu-using-list.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />