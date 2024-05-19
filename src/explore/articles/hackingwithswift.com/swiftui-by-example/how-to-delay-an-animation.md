---
lang: ko-KR
title: How to delay an animation
description: Article(s) > How to delay an animation
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
      content: Article(s) > How to delay an animation
    - property: og:description
      content: How to delay an animation
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-delay-an-animation.html
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
  "title": "How to delay an animation | SwiftUI by Example",
  "desc": "How to delay an animation",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-delay-an-animation",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

When you create any animation – implicitly, explicitly, or with bindings – you can attach modifiers to that animation to adjust the way it works. For example, if you want an animation to start after a certain number of seconds you should use the `delay()` modifier.

As an example, this creates a red rectangle that, when tapped, will rotate by 360 degrees using a two-second animation with a one-second delay:

```swift
struct ContentView: View {
    @State var rotation = 0.0

    var body: some View {
        Rectangle()
            .fill(.red)
            .frame(width: 200, height: 200)
            .rotationEffect(.degrees(rotation))
            .animation(.easeInOut(duration: 3).delay(1), value: rotation)
            .onTapGesture {
                rotation += 360
            }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-delay-an-animation-1.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-delay-an-animation-1~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "How to start an animation immediately after a view appears | SwiftUI by Example",
  "desc": "How to start an animation immediately after a view appears",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-start-an-animation-immediately-after-a-view-appears.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create an explicit animation | SwiftUI by Example",
  "desc": "How to create an explicit animation",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-an-explicit-animation.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a spring animation | SwiftUI by Example",
  "desc": "How to create a spring animation",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-spring-animation.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to run a completion callback when an animation finishes | SwiftUI by Example",
  "desc": "How to run a completion callback when an animation finishes",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-run-a-completion-callback-when-an-animation-finishes.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to show a menu when a button is pressed | SwiftUI by Example",
  "desc": "How to show a menu when a button is pressed",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-a-menu-when-a-button-is-pressed.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />