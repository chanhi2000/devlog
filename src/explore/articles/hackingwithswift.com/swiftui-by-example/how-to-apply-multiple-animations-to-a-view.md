---
lang: ko-KR
title: How to apply multiple animations to a view
description: Article(s) > How to apply multiple animations to a view
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
      content: Article(s) > How to apply multiple animations to a view
    - property: og:description
      content: How to apply multiple animations to a view
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-apply-multiple-animations-to-a-view.html
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
  "title": "How to apply multiple animations to a view | SwiftUI by Example",
  "desc": "How to apply multiple animations to a view",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-apply-multiple-animations-to-a-view",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**Improved in iOS 17**

The order in which we use SwiftUI’s `animation()` modifier affects which modifiers get animated, and it’s also possible to add multiple `animation()` modifiers in order to get *different* animations.

**There are two ways of doing this:** A newer, clearer approach that’s available from iOS 17 and later, and an older alternative that also works in iOS 16 and earlier.

First, the new approach. In this code we animate the background color over one second, and the clip shape over two seconds:

```swift
struct ContentView: View {
    @State private var isEnabled = false

    var body: some View {
        Button("Press Me") {
            isEnabled.toggle()
        }
        .foregroundStyle(.white)
        .frame(width: 200, height: 200)
        .animation(.easeInOut(duration: 1)) { content in
            content
                .background(isEnabled ? .green : .red)
        }
        .animation(.easeInOut(duration: 2)) { content in
            content
                .clipShape(.rect(cornerRadius: isEnabled ? 100 : 0))
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-apply-multiple-animations-to-a-view-1.zip)

You don’t need to specify a value to watch when using this new code, because you’re only ever animating the things specified in your close.

When using the older approach, you add multiple `animation()` modifiers wherever you want to adjust the animation stack for previous modifiers. For example, we could write code to create a button that animates between enabled and disabled states, making the corner rounding and background color changes. If we wanted the corner rounding to animate but not the color change, we’d use an animation such as `animation(.default)` after the clip shape, then `animation(nil)` after the background, like this:

```swift
struct ContentView: View {
    @State private var isEnabled = false

    var body: some View {
        Button("Press Me") {
            isEnabled.toggle()
        }
        .foregroundStyle(.white)
        .frame(width: 200, height: 200)
        .background(isEnabled ? .green : .red)
        .animation(nil, value: isEnabled)
        .clipShape(RoundedRectangle(cornerRadius: isEnabled ? 100 : 0))
        .animation(.default, value: isEnabled)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-apply-multiple-animations-to-a-view-2.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-apply-multiple-animations-to-a-view-1~dark.mp4" />

Using these techniques it’s possible to animate every modifier differently if you need to.

::: details Similar solutions…

```component VPCard
{
  "title": "Learn once, apply anywhere | SwiftUI by Example",
  "desc": "Learn once, apply anywhere",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/learn-once-apply-anywhere.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to synchronize animations from one view to another with matchedGeometryEffect() | SwiftUI by Example",
  "desc": "How to synchronize animations from one view to another with matchedGeometryEffect()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-synchronize-animations-from-one-view-to-another-with-matchedgeometryeffect.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create multi-step animations using phase animators | SwiftUI by Example",
  "desc": "How to create multi-step animations using phase animators",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-multi-step-animations-using-phase-animators.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tips-and-tricks.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to override animations with transactions | SwiftUI by Example",
  "desc": "How to override animations with transactions",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-override-animations-with-transactions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />