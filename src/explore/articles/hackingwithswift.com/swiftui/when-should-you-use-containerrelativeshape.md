---
lang: ko-KR
title: When should you use ContainerRelativeShape?
description: Article(s) > When should you use ContainerRelativeShape?
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
      content: Article(s) > When should you use ContainerRelativeShape?
    - property: og:description
      content: When should you use ContainerRelativeShape?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/when-should-you-use-containerrelativeshape.html
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
  "title": "When should you use ContainerRelativeShape? | SwiftUI by Example",
  "desc": "When should you use ContainerRelativeShape?",
  "link": "https://hackingwithswift.com/quick-start/swiftui/when-should-you-use-containerrelativeshape",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI has a number of built-in shapes that are self-explanatory, but there's one that stands out: `ContainerRelativeShape`. This isn't a fixed shape, but is instead designed to be an insettable version of whatever shape it's placed inside, which is particularly important when creating home screen widgets.

::: important

At this time, `ContainerRelativeShape` works only inside widgets. You can use it elsewhere, but it will just make a rectangle.

:::

For example, we could write code that draws a blue shape in our widget, and use `ContainerRelativeShape` to make sure it's the same shape as the widget itself:

```swift
struct ContentView: View {    
    var body: some View {
        ZStack {
            ContainerRelativeShape()
                .inset(by: 4)
                .fill(.blue)

            Text("Hello, World!")
                .font(.title)
        }
        .frame(width: 300, height: 200)
        .background(.red)
        .clipShape(Capsule())
    }
}
```

![An iOS widget showing the word Hello against a blue background, with a red border.](https://hackingwithswift.com/img/books/quick-start/swiftui/when-should-you-use-containerrelativeshape~dark.png)

SwiftUI is smart here: as you inset the container shape further and further, it will scale the corner radius of the container so it looks great in your widget.

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
  "title": "Answering the big question: should you learn SwiftUI, UIKit, or both? | SwiftUI by Example",
  "desc": "Answering the big question: should you learn SwiftUI, UIKit, or both?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/answering-the-big-question-should-you-learn-swiftui-uikit-or-both.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to use Instruments to profile your SwiftUI code and identify slow layouts | SwiftUI by Example",
  "desc": "How to use Instruments to profile your SwiftUI code and identify slow layouts",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts.md",
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
  "title": "What's the difference between @ObservedObject, @State, and @EnvironmentObject? | SwiftUI by Example",
  "desc": "What's the difference between @ObservedObject, @State, and @EnvironmentObject?",
  "link": "/explore/articles/hackingwithswift.com/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />