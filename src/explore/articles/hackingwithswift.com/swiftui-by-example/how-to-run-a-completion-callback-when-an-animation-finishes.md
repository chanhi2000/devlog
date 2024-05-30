---
lang: ko-KR
title: How to run a completion callback when an animation finishes
description: Article(s) > How to run a completion callback when an animation finishes
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
      content: Article(s) > How to run a completion callback when an animation finishes
    - property: og:description
      content: How to run a completion callback when an animation finishes
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-run-a-completion-callback-when-an-animation-finishes.html
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
  "title": "How to run a completion callback when an animation finishes | SwiftUI by Example",
  "desc": "How to run a completion callback when an animation finishes",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-run-a-completion-callback-when-an-animation-finishes",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 17**

SwiftUI’s `withAnimation()` function can optionally be given a completion callback with code to run when the animation finishes. This might be where you adjust some program state, but you can also use it as a simple way to chain animations together – to animate one thing, then animate something else afterwards.

For example, this makes a button scale up then fade out:

```swift
struct ContentView: View {
    @State private var scaleUp = false
    @State private var fadeOut = false

    var body: some View {
        Button("Tap Me!") {
            withAnimation {
                scaleUp = true
            } completion: {
                withAnimation {
                    fadeOut = true
                }
            }
        }
        .scaleEffect(scaleUp ? 3 : 1)
        .opacity(fadeOut ? 0 : 1)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-run-a-completion-callback-when-an-animation-finishes-1.zip)

![A button that scales up then disappears when pressed.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-run-a-completion-callback-when-an-animation-finishes-1~dark@2x.gif)

There is one little subtlety here that might hit you: if you’re using a spring animation it’s possible there’s a very long tail of movement at the end, where your animation is moving small fractions of a point that are imperceptible to the user.

The default behavior of `withAnimation()` is to consider the animation complete even with that long tail of tiny movement still happening, but if you wanted it to be 100% finished you can override the default like this:

```swift
struct ContentView: View {
    @State private var scaleUp = false
    @State private var fadeOut = false

    var body: some View {
        Button("Tap Me!") {
            withAnimation(.bouncy, completionCriteria: .removed) {
                scaleUp = true
            } completion: {
                withAnimation {
                    fadeOut = true
                }
            }
        }
        .scaleEffect(scaleUp ? 3 : 1)
        .opacity(fadeOut ? 0 : 1)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-run-a-completion-callback-when-an-animation-finishes-2.zip)

![A button that scales up then disappears when pressed.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-run-a-completion-callback-when-an-animation-finishes-2~dark@2x.gif)

I probably wouldn’t recommend that unless you had a very specific use case – the default setting ought to be fine.

::: tip

For more complex effects, consider using a phase animator instead of animation completion closures.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to start an animation immediately after a view appears | SwiftUI by Example",
  "desc": "How to start an animation immediately after a view appears",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-start-an-animation-immediately-after-a-view-appears.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create an explicit animation | SwiftUI by Example",
  "desc": "How to create an explicit animation",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-an-explicit-animation.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a spring animation | SwiftUI by Example",
  "desc": "How to create a spring animation",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-spring-animation.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to delay an animation | SwiftUI by Example",
  "desc": "How to delay an animation",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-delay-an-animation.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to run some code when state changes using onChange() | SwiftUI by Example",
  "desc": "How to run some code when state changes using onChange()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-run-some-code-when-state-changes-using-onchange.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />