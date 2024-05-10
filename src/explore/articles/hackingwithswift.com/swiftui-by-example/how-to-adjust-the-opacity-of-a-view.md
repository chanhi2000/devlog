---
lang: ko-KR
title: How to adjust the opacity of a view
description: Article(s) > How to adjust the opacity of a view
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
      content: Article(s) > How to adjust the opacity of a view
    - property: og:description
      content: How to adjust the opacity of a view
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-the-opacity-of-a-view.html
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
  "title": "How to adjust the opacity of a view | SwiftUI by Example",
  "desc": "How to adjust the opacity of a view",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-adjust-the-opacity-of-a-view",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Any SwiftUI view can be partially or wholly transparent using the <code>opacity()</code> modifier. This accepts a value between 0 (completely invisible) and 1 (fully opaque), just like the <code>alpha</code> property of <code>UIView</code> in UIKit.

For example, this creates a text view with a red background, then gives it 30% opacity:

```swift
Text("Now you see me")
    .padding()
    .background(.red)
    .opacity(0.3)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-adjust-the-opacity-of-a-view-1.zip)

![The text “Now you see me” in a red rectangle. Both are translucent.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-adjust-the-opacity-of-a-view-1~dark@2x.png)

Modifying opacity is extremely fast – certainly something you can do as often as you need. To demonstrate that, the following code adjusts text opacity using a slider, and you’ll see you can move it around as fast and as much as you like without any performance hit:

```swift
struct ContentView: View {
    @State private var opacity = 0.5

    var body: some View {
        VStack {
            Text("Now you see me")
                .padding()
                .background(.red)
                .opacity(opacity)

            Slider(value: $opacity, in: 0...1)
                .padding()
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-adjust-the-opacity-of-a-view-2.zip)

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-adjust-the-opacity-of-a-view-2~dark.mp4" />

::: details Similar solutions…

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
  "title": "How to dynamically adjust the appearance of a view based on its size and location | SwiftUI by Example",
  "desc": "How to dynamically adjust the appearance of a view based on its size and location",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to adjust the position of a view using its offset | SwiftUI by Example",
  "desc": "How to adjust the position of a view using its offset",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-the-position-of-a-view-using-its-offset.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to adjust the size of a view relative to its container | SwiftUI by Example",
  "desc": "How to adjust the size of a view relative to its container",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-the-size-of-a-view-relative-to-its-container.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to adjust the accent color of a view | SwiftUI by Example",
  "desc": "How to adjust the accent color of a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-the-accent-color-of-a-view.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />