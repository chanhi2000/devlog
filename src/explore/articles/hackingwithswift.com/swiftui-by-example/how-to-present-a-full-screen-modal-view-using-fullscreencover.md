---
lang: ko-KR
title: How to present a full screen modal view using fullScreenCover()
description: Article(s) > How to present a full screen modal view using fullScreenCover()
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
      content: Article(s) > How to present a full screen modal view using fullScreenCover()
    - property: og:description
      content: How to present a full screen modal view using fullScreenCover()
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-present-a-full-screen-modal-view-using-fullscreencover.html
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
  "title": "How to present a full screen modal view using fullScreenCover() | SwiftUI by Example",
  "desc": "How to present a full screen modal view using fullScreenCover()",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-present-a-full-screen-modal-view-using-fullscreencover",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI’s `fullScreenCover()` modifier gives us a presentation style for times when you want to cover as much of the screen as possible, and in code it works almost identically to regular sheets.

Regular sheets can be dismissed by dragging downwards on them, but that isn’t possible with views presented using `fullScreenCover()`. As a result, it’s important you provide a way to dismiss the presented view, probably using the `dismiss` environment key.

::: important

`fullScreenCover()` is not available on macOS.

:::

For example, this defines a simple `FullScreenModalView` struct that can dismiss itself, then presents it from `ContentView` when another button is pressed:


```swift
struct FullScreenModalView: View {
    @Environment(\.dismiss) var dismiss

    var body: some View {
        ZStack {
            Color.primary.edgesIgnoringSafeArea(.all)
            Button("Dismiss Modal") {
                dismiss()
            }
        }
    }
}

struct ContentView: View {
    @State private var isPresented = false

    var body: some View {
        Button("Present!") {
            isPresented.toggle()
        }
        .fullScreenCover(isPresented: $isPresented, content: FullScreenModalView.init)
    }
}
```

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-present-a-full-screen-modal-view-using-fullscreencover-1~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "How to present a new view using sheets | SwiftUI by Example",
  "desc": "How to present a new view using sheets",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-present-a-new-view-using-sheets.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to present multiple sheets | SwiftUI by Example",
  "desc": "How to present multiple sheets",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-present-multiple-sheets.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tips-and-tricks.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Displaying a detail screen with NavigationLink | SwiftUI by Example",
  "desc": "Displaying a detail screen with NavigationLink",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/displaying-a-detail-screen-with-navigationlink.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{ 
  "title": "How to use decorative images to reduce screen reader clutter | SwiftUI by Example",
  "desc": "How to use decorative images to reduce screen reader clutter",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-decorative-images-to-reduce-screen-reader-clutter.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::
 
---

<TagLinks />