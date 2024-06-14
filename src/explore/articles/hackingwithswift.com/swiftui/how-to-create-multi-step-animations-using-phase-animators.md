---
lang: ko-KR
title: How to create multi-step animations using phase animators
description: Article(s) > How to create multi-step animations using phase animators
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
      content: Article(s) > How to create multi-step animations using phase animators
    - property: og:description
      content: How to create multi-step animations using phase animators
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-create-multi-step-animations-using-phase-animators.html
next: /explore/articles/hackingwithswift.com/swiftui/how-to-create-and-compose-custom-views.md
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
  "title": "How to create multi-step animations using phase animators | SwiftUI by Example",
  "desc": "How to create multi-step animations using phase animators",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-multi-step-animations-using-phase-animators",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 17**

SwiftUI’s `PhaseAnimator` view and `phaseAnimator` modifier allow us to perform multi-step animation by cycling through animation phases of our choosing, either constantly or when triggered.

Creating these multi-phase animations takes three steps:

1. Define the phases you’re going to work through. This can be any kind of sequence, but you might find it easiest to work with a `CaseIterable` enum.
2. Read one phase inside your phase animator, and adjust your views to match how you want that phase to look.
3. Optionally add a trigger to make the phase animator repeat its sequence from the beginning. Without this it will cycle constantly.

For example, this next example creates a simple animation that makes some text start small and invisible, scale up to natural size and be fully opaque, then scale up to be very large and invisible. It uses an array of the numbers 0, 1, and 3 to represent the various scaling sizes we’ll be using (0%, 100%, and 300%), and it makes the text opaque when the size is 1:

```swift
Text("Hello, world!")
    .font(.largeTitle)
    .phaseAnimator([0, 1, 3]) { view, phase in
        view
            .scaleEffect(phase)
            .opacity(phase == 1 ? 1 : 0)
    }
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-multi-step-animations-using-phase-animators-1.zip)

![The text Hello World zooming up and fading out repeatedly.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-multi-step-animations-using-phase-animators-1~dark@2x.gif)

Because we haven’t provided a trigger for the animation, it will run forever.

If you prefer, you can write that using a wrapping `PhaseAnimator` view, which has the advantage that multiple views can move between phases together:

```swift
VStack(spacing: 50) {
    PhaseAnimator([0, 1, 3]) { value in
        Text("Hello, world!")
            .font(.largeTitle)
            .scaleEffect(value)
            .opacity(value == 1 ? 1 : 0)

        Text("Goodbye, world!")
            .font(.largeTitle)
            .scaleEffect(3 - value)
            .opacity(value == 1 ? 1 : 0)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-multi-step-animations-using-phase-animators-2.zip)

![The text Hello World zooming up and fading out repeatedly, while the text Goodbye World zooms out while fading out at the same time.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-multi-step-animations-using-phase-animators-2~dark@2x.gif)

Like I said, you might prefer to use an enum with your various phases. This might have meaningful raw values attached, but it doesn’t need to. Here’s the same thing rewritten using an enum:

```swift
enum AnimationPhase: Double, CaseIterable {
    case fadingIn = 0
    case middle = 1
    case zoomingOut = 3
}

struct ContentView: View {
    var body: some View {
        Text("Hello, world!")
            .font(.largeTitle)
            .phaseAnimator(AnimationPhase.allCases) { view, phase in
                view
                    .scaleEffect(phase.rawValue)
                    .opacity(phase.rawValue == 1 ? 1 : 0)
            }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-multi-step-animations-using-phase-animators-3.zip)

Rather than have the phase animators repeat endlessly, you can make it trigger the animation sequence on your command. To do this, attach a trigger value for SwiftUI to watch, such as a random `UUID` or an incrementing number. Whenever that value changes, SwiftUI will reset your animator and play it back in full.

In this next example, tapping the button triggers a three-step animation using enum cases. First, we define the various animation phases we want, then we move through them whenever a property changes:

```swift
enum AnimationPhase: CaseIterable {
    case start, middle, end
}

struct ContentView: View {
    @State private var animationStep = 0

    var body: some View {
        Button("Tap Me!") {
            animationStep += 1
        }
        .font(.largeTitle)
        .phaseAnimator(AnimationPhase.allCases, trigger: animationStep) { content, phase in
            content
                .blur(radius: phase == .start ? 0 : 10)
                .scaleEffect(phase == .middle ? 3 : 1)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-multi-step-animations-using-phase-animators-4.zip)

![A button that says Tap Me, which zooms up, becomes blurry, then resets every time it’s pressed.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-multi-step-animations-using-phase-animators-3~dark@2x.gif)

For even more control, you can specify exactly which animation to use for each phase. For example, this moves between quick `.bouncy` and a slow `.easeInOut` animations to get a more varied movement:

```swift
enum AnimationPhase: CaseIterable {
    case start, middle, end
}

struct ContentView: View {
    @State private var animationStep = 0

    var body: some View {
        Button("Tap Me!") {
            animationStep += 1
        }
        .font(.largeTitle)
        .phaseAnimator(AnimationPhase.allCases, trigger: animationStep) { content, phase in
            content
                .blur(radius: phase == .start ? 0 : 10)
                .scaleEffect(phase == .middle ? 3 : 1)
        } animation: { phase in
            switch phase {
            case .start, .end: .bouncy
            case .middle: .easeInOut(duration: 2)
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-multi-step-animations-using-phase-animators-5.zip)

![A button that says Tap Me, which zooms up, becomes blurry, then resets every time it’s pressed. The zoom up part of the animation runs slowly](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-multi-step-animations-using-phase-animators-4~dark@2x.gif)

One approach I’ve found useful is to add extra computed properties to the animation phases to make the rest of the code easier to read, like this:

```swift
enum AnimationPhase: CaseIterable {
    case fadingIn, middle, zoomingOut

    var scale: Double {
        switch self {
        case .fadingIn: 0
        case .middle: 1
        case .zoomingOut: 3
        }
    }

    var opacity: Double {
        switch self {
        case .fadingIn: 0
        case .middle: 1
        case .zoomingOut: 0
        }
    }
}

struct ContentView: View {
    var body: some View {
        Text("Hello, world!")
            .font(.largeTitle)
            .phaseAnimator(AnimationPhase.allCases) { content, phase in
                content
                    .scaleEffect(phase.scale)
                    .opacity(phase.opacity)
            }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-multi-step-animations-using-phase-animators-6.zip)

![The text Hello World zooming up and fading out repeatedly.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-multi-step-animations-using-phase-animators-5~dark@2x.gif)

::: details Similar solutions…

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
  "title": "How to create basic animations | SwiftUI by Example",
  "desc": "How to create basic animations",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-basic-animations.md",
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