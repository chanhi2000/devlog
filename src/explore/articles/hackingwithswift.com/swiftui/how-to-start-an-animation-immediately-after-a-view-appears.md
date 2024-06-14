---
lang: ko-KR
title: How to start an animation immediately after a view appears
description: Article(s) > How to start an animation immediately after a view appears
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
      content: Article(s) > How to start an animation immediately after a view appears
    - property: og:description
      content: How to start an animation immediately after a view appears
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-start-an-animation-immediately-after-a-view-appears.html
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
  "title": "How to start an animation immediately after a view appears | SwiftUI by Example",
  "desc": "How to start an animation immediately after a view appears",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-start-an-animation-immediately-after-a-view-appears",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you want a SwiftUI view to start animating as soon as it appears, you should use the `nAppear()` modifier to attach an animation. I’ll show you the basic code first, then show you two extensions I use to make this process easier.

First, the simple version – this creates a circle that scales up and down forever:

```swift
struct ContentView: View {
    @State var scale = 1.0

    var body: some View {
        Circle()
            .frame(width: 200, height: 200)
            .scaleEffect(scale)
            .onAppear {
                let baseAnimation = Animation.easeInOut(duration: 1)
                let repeated = baseAnimation.repeatForever(autoreverses: true)

                withAnimation(repeated) {
                    scale = 0.5
                }
            }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-start-an-animation-immediately-after-a-view-appears-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-start-an-animation-immediately-after-a-view-appears-1~dark.mp4" />

If you intend to add initial animations frequently, it’s a smart idea to add some extensions to the `View` protocol to make it easier.

To demonstrate this, the two extensions below add `animate()` and `animateForever()` modifiers that let you customize the animation you want and also wrap up the whole behavior neatly:

```swift
// Create an immediate animation.
extension View {
    func animate(using animation: Animation = .easeInOut(duration: 1), _ action: @escaping () -> Void) -> some View {
        onAppear {
            withAnimation(animation) {
                action()
            }
        }
    }
}

// Create an immediate, looping animation
extension View {
    func animateForever(using animation: Animation = .easeInOut(duration: 1), autoreverses: Bool = false, _ action: @escaping () -> Void) -> some View {
        let repeated = animation.repeatForever(autoreverses: autoreverses)

        return onAppear {
            withAnimation(repeated) {
                action()
            }
        }
    }
}

// Try out our extensions with the scaling circle.
struct ContentView: View {
    @State var scale = 1.0

    var body: some View {
        Circle()
            .frame(width: 200, height: 200)
            .scaleEffect(scale)
            .animateForever(autoreverses: true) { scale = 0.5 }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-start-an-animation-immediately-after-a-view-appears-2.zip)

::: details Similar solutions…

```component VPCard
{
  "title": "How to make a ScrollView start at the bottom | SwiftUI by Example",
  "desc": "How to make a ScrollView start at the bottom",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-make-a-scrollview-start-at-the-bottom.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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
  "title": "How to follow this quick start guide | SwiftUI by Example",
  "desc": "How to follow this quick start guide",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-follow-this-quick-start-guide.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create an explicit animation | SwiftUI by Example",
  "desc": "How to create an explicit animation",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-an-explicit-animation.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a spring animation | SwiftUI by Example",
  "desc": "How to create a spring animation",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-spring-animation.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />