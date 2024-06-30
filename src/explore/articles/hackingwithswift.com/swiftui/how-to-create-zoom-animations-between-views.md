---
lang: ko-KR
title: How to create zoom animations between views
description: Article(s) > How to create zoom animations between views
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
      content: Article(s) > How to create zoom animations between views
    - property: og:description
      content: How to create zoom animations between views
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-create-zoom-animations-between-views.html
next: /explore/articles/hackingwithswift.com/swiftui/working-with-presentations.md
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
  "title": "How to create zoom animations between views | SwiftUI by Example",
  "desc": "How to create zoom animations between views",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-zoom-animations-between-views",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 16

**New in iOS 18**

SwiftUI provides a zoom transition effect that can be used when pushing to a new view with a `NavigationStack`, and also used when pushing to a sheet or a full-screen cover presentation. It's works similarly to a matched geometry effect, except it works across presentations where matched geometry effect fails.

Using it takes three steps:

1. Declare a new animation namespace using `@Namespace`
2. Use the `matchedTransitionSource()` modifier on whatever source view is triggering the transition.
3. Use the `navigationTransition()` modifier on whatever destination view you're navigating to.

Both modifiers must be given a stable view ID that is being transitioned, just like matched geometry effects.

Let's start with a simple example, animating to a sheet where all the code is inside a single view.

First, we'd define some data to work with:

```swift
struct Icon: Identifiable {
    var id: String
    var color: Color
}
```

And now we can define a view that shows lots of icons, zooming one up when tapped:

```swift
struct ContentView: View {
    let icons = [
        Icon(id: "figure.badminton", color: .red),
        Icon(id: "figure.fencing", color: .orange),
        Icon(id: "figure.gymnastics", color: .green),
        Icon(id: "figure.indoor.cycle", color: .blue),
        Icon(id: "figure.outdoor.cycle", color: .purple),
        Icon(id: "figure.rower", color: .indigo),
    ]

    @Namespace var animation
    @State private var selected: Icon?

    var body: some View {
        LazyVGrid(columns: [.init(.adaptive(minimum: 100, maximum: 300))]) {
            ForEach(icons) { icon in
                Button {
                    selected = icon
                } label: {
                    Image(systemName: icon.id)
                }
                .foregroundStyle(icon.color.gradient)
                .font(.system(size: 100))
                .matchedTransitionSource(id: icon.id, in: animation)
            }
        }
        .sheet(item: $selected) { icon in
            Image(systemName: icon.id)
                .font(.system(size: 300))
                .foregroundStyle(icon.color.gradient)
                .navigationTransition(.zoom(sourceID: icon.id, in: animation))
        }
    }
}
```

That works, but in practice you're going to want to split the source and destination views more cleanly, like this:

```swift
struct ContentView: View {
    let icons = [
        Icon(id: "figure.badminton", color: .red),
        Icon(id: "figure.fencing", color: .orange),
        Icon(id: "figure.gymnastics", color: .green),
        Icon(id: "figure.indoor.cycle", color: .blue),
        Icon(id: "figure.outdoor.cycle", color: .purple),
        Icon(id: "figure.rower", color: .indigo),
    ]

    @Namespace var animation
    @State private var selected: Icon?

    var body: some View {
        LazyVGrid(columns: [.init(.adaptive(minimum: 100, maximum: 300))]) {
            ForEach(icons) { icon in
                Button {
                    selected = icon
                } label: {
                    Image(systemName: icon.id)
                }
                .foregroundStyle(icon.color.gradient)
                .font(.system(size: 100))
                .matchedTransitionSource(id: icon.id, in: animation)
            }
        }
        .sheet(item: $selected) { icon in
            DestinationView(icon: icon, animation: animation)
        }
    }
}

struct DestinationView: View {
    var icon: Icon
    var animation: Namespace.ID

    var body: some View {
        Image(systemName: icon.id)
            .font(.system(size: 300))
            .foregroundStyle(icon.color.gradient)
            .navigationTransition(.zoom(sourceID: icon.id, in: animation))
    }
}
```

::: details Similar solutions…

```component VPCard
{
  "title": "How to handle pinch to zoom for views | SwiftUI by Example",
  "desc": "How to handle pinch to zoom for views",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-handle-pinch-to-zoom-for-views.md",
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
  "title": "How to create basic animations | SwiftUI by Example",
  "desc": "How to create basic animations",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-basic-animations.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create custom text effects and animations | SwiftUI by Example",
  "desc": "How to create custom text effects and animations",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-custom-text-effects-and-animations.md",
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

:::

---

<TagLinks />