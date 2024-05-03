---
lang: ko-KR
title: How to detect the user hovering over a view
description: Article(s) > How to detect the user hovering over a view
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
      content: Article(s) > How to detect the user hovering over a view
    - property: og:description
      content: How to detect the user hovering over a view
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-the-user-hovering-over-a-view.html
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
  "title": "How to detect the user hovering over a view | SwiftUI by Example",
  "desc": "How to detect the user hovering over a view",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-detect-the-user-hovering-over-a-view",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

In SwiftUI, any macOS app or any iPadOS app where a mouse is connected can detect when the user is hovering their pointer over a view, and respond to it appropriately.

There are two modifiers you'll want to use: `onHover()`, and `hoverEffect()`. The first of these allows you to track whether the pointer is currently hovering over the view, and is passed a Boolean reflecting that state. For example, this will color some text red or green depending on whether the pointer is hovering over it or not:

```swift
struct ContentView: View {
    @State private var overText = false

    var body: some View {
        Text("Hello, World!")
            .foregroundStyle(overText ? .green : .red)
            .onHover { over in
                overText = over
            }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-detect-the-user-hovering-over-a-view-1.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-detect-the-user-hovering-over-a-view-1~dark.mp4" />

The `hoverEffect()` modifier allows you to choose one of three ways the system can highlight the view when a hover happens: `.highlight` transforms the pointer into the shape of the view while creating a gentle directional effect, `.lift` transforms the pointer into the shape of the view while scaling up the view and placing a soft shadow behind it, and `.automatic` selects whichever highlight effect it thinks is most appropriate.

Note that `.automatic` is the default if you just apply the `hoverEffect()` modifier without any parameters, but it *isn't* just selecting between `.highlight` and `.lift` – it's quite a different effect, and won't transform the pointer to match the shape of your view.

To try it out, here's some code that places a tappable text label on the screen, giving it a `.lift` hover effect to make it clear that it's tappable:

```swift
struct ContentView: View {
    var body: some View {
        Text("Tap me!")
            .font(.largeTitle)
            .hoverEffect(.lift)
            .onTapGesture {
                print("Text tapped")
            }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-detect-the-user-hovering-over-a-view-2.zip)

<VidStack src="https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-detect-the-user-hovering-over-a-view-2~dark.mp4" />

::: tip

To try this out on the iPadOS simulator, go to the I/O menu and choose <FontIcon icon="iconfont icon-select"/>`[Input]` > `[Send Cursor to Device]`.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to detect the location of a tap inside a view | SwiftUI by Example",
  "desc": "How to detect the location of a tap inside a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-the-location-of-a-tap-inside-a-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to detect shake gestures | SwiftUI by Example",
  "desc": "How to detect shake gestures",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-shake-gestures.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to detect device rotation | SwiftUI by Example",
  "desc": "How to detect device rotation",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-device-rotation.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to detect and respond to key press events | SwiftUI by Example",
  "desc": "How to detect and respond to key press events",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-and-respond-to-key-press-events.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to detect when your app moves to the background or foreground with scenePhase | SwiftUI by Example",
  "desc": "How to detect when your app moves to the background or foreground with scenePhase",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-when-your-app-moves-to-the-background-or-foreground-with-scenephase.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />