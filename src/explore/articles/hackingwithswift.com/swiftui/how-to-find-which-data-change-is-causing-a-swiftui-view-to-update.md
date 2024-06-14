---
lang: ko-KR
title: How to find which data change is causing a SwiftUI view to update
description: Article(s) > How to find which data change is causing a SwiftUI view to update
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
      content: Article(s) > How to find which data change is causing a SwiftUI view to update
    - property: og:description
      content: How to find which data change is causing a SwiftUI view to update
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-find-which-data-change-is-causing-a-swiftui-view-to-update.html
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
  "title": "How to find which data change is causing a SwiftUI view to update | SwiftUI by Example",
  "desc": "How to find which data change is causing a SwiftUI view to update",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-find-which-data-change-is-causing-a-swiftui-view-to-update",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI provides a special, debug-only method call we can use to identify what change caused a view to reload itself. The method is specifically for debugging, and should *not* be shipped in a real app, but it’s extremely helpful for the times when you can see a view is reinvoking its `body` property but you’re not sure why.

The method is `Self._printChanges()`, and should be called *inside* the `body` property. This means you may temporarily need to add an explicit return to send back your regular view code.

To demonstrate this method in action, here’s some sample code where a view relies on an observable object that randomly issues change notifications:

```swift
class EvilStateObject: ObservableObject {
    var timer: Timer?

    init() {
        timer = Timer.scheduledTimer(
            withTimeInterval: 1,
            repeats: true
        ) { _ in
            if Int.random(in: 1...5) == 1 {
                self.objectWillChange.send()
            }
        }
    }
}

struct ContentView: View {
    @StateObject private var evilObject = EvilStateObject()

    var body: some View {
        let _ = Self._printChanges()
        Text("What could possibly go wrong?")
    }
}
```

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-find-which-data-change-is-causing-a-swiftui-view-to-update-1~dark.mp4" />

[<FontIcon icon="fa-brands fa-twitter-x"/>Peter Steinberger](https://twitter.com/steipete/status/1379483193708052480) has a helpful tip for discovering when the `body` property of a view is being reinvoked: assign a random background color to one of its views. This will be re-evaluated along with the rest of the body, so if `body` is being called a lot then your views will flicker as they change background.

To use this in your own projects, first add the following `Color` extension to get random colors:

```swift
extension ShapeStyle where Self == Color {
    static var random: Color {
        Color(
            red: .random(in: 0...1),
            green: .random(in: 0...1),
            blue: .random(in: 0...1)
        )
    }
}
```

And now go ahead and use it with `background()` whenever you’re curious what’s happening:

```swift
struct ContentView: View {
    var body: some View {
        Text("Hello, world!")
            .background(.random)
    }
}
```

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-find-which-data-change-is-causing-a-swiftui-view-to-update-2~dark.mp4" />

::: details Similar solutions…

```component VPCard  
{
  "title": "How to fix “Modifying state during view update, this will cause undefined behavior” | SwiftUI by Example",
  "desc": "How to fix “Modifying state during view update, this will cause undefined behavior”",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-fix-modifying-state-during-view-update-this-will-cause-undefined-behavior.md",
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
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to control which NavigationSplitView column is shown in compact layouts | SwiftUI by Example",
  "desc": "How to control which NavigationSplitView column is shown in compact layouts",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-control-which-navigationsplitview-column-is-shown-in-compact-layouts.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to control which view is shown when your app launches | SwiftUI by Example",
  "desc": "How to control which view is shown when your app launches",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-control-which-view-is-shown-when-your-app-launches.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />