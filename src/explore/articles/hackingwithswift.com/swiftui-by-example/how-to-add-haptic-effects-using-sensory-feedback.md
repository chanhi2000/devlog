---
lang: ko-KR
title: How to add haptic effects using sensory feedback
description: Article(s) > How to add haptic effects using sensory feedback
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
      content: Article(s) > How to add haptic effects using sensory feedback
    - property: og:description
      content: How to add haptic effects using sensory feedback
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-haptic-effects-using-sensory-feedback.html
next: '/swift/swiftui-by-example/08-taps-and-gestures/how-to-add-a-gesture-recognizer-to-a-view.md'
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
  "title": "How to add haptic effects using sensory feedback | SwiftUI by Example",
  "desc": "How to add haptic effects using sensory feedback",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-add-haptic-effects-using-sensory-feedback",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 17**

SwiftUI's `sensoryFeedback()` modifier provides built-in support for a range of simple haptics, which means we can create vibration effects for success, failure, selection, impacts, and more.

To trigger feedback, attach the `sensoryFeedback()` to any view, telling it what kind of effect to make and what the trigger should be – when the effect should be played. SwiftUI will monitor the trigger value, and run your haptic effect whenever it changes.

For example, if you had a button that marks a task as being complete, you could play a haptic when completion happens:

```swift
struct ContentView: View {
    @State private var taskIsComplete = false

    var body: some View {
        Button("Mark Complete") {
            taskIsComplete = true
        }
        .sensoryFeedback(.success, trigger: taskIsComplete)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-haptic-effects-using-sensory-feedback-1.zip)

For more fine-grained control, you can decide exactly which type of haptic effect to trigger based on comparing the old and new value of your trigger. For example, this uses the `.impact` haptic effect with varying intensities based on the difference between two random numbers:

```swift
struct ContentView: View {
    @State private var randomNumber = 0.0

    var body: some View {
        Button("Mark Complete") {
            randomNumber = Double.random(in: 0...1)
        }
        .sensoryFeedback(trigger: randomNumber) { oldValue, newValue in
            let amount = abs(oldValue - newValue)
            return .impact(flexibility: .solid, intensity: amount)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-haptic-effects-using-sensory-feedback-2.zip)

And finally, you can provide a fixed haptic effect and customize when it's triggered by providing your own comparison function. As an example, this will trigger the `.success` haptic when the difference between two random numbers is more than 0.5:

```swift
struct ContentView: View {
    @State private var randomNumber = 0.0

    var body: some View {
        Button("Mark Complete") {
            randomNumber = Double.random(in: 0...1)
        }
        .sensoryFeedback(.success, trigger: randomNumber) { oldValue, newValue in
            abs(oldValue - newValue) > 0.5
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-add-haptic-effects-using-sensory-feedback-3.zip)

::: details Similar solutions…

```component VPCard
{
  "title": "How to add Metal shaders to SwiftUI views using layer effects | SwiftUI by Example",
  "desc": "How to add Metal shaders to SwiftUI views using layer effects",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-metal-shaders-to-swiftui-views-using-layer-effects.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to stack modifiers to create more advanced effects | SwiftUI by Example",
  "desc": "How to stack modifiers to create more advanced effects",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-stack-modifiers-to-create-more-advanced-effects.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create 3D effects like Cover Flow using ScrollView and GeometryReader | SwiftUI by Example",
  "desc": "How to create 3D effects like Cover Flow using ScrollView and GeometryReader",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-3d-effects-like-cover-flow-using-scrollview-and-geometryreader.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add advanced text styling using AttributedString | SwiftUI by Example",
  "desc": "How to add advanced text styling using AttributedString",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-advanced-text-styling-using-attributedstring.md",
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