---
lang: ko-KR
title: How to preview your layout in portrait or landscape
description: Article(s) > How to preview your layout in portrait or landscape
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
      content: Article(s) > How to preview your layout in portrait or landscape
    - property: og:description
      content: How to preview your layout in portrait or landscape
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-preview-your-layout-in-portrait-or-landscape.html
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
  "title": "How to preview your layout in portrait or landscape | SwiftUI by Example",
  "desc": "How to preview your layout in portrait or landscape",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-preview-your-layout-in-portrait-or-landscape",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

SwiftUI has a dedicated `previewInterfaceOrientation()` modifier that controls the way device previews look in Xcode’s canvas. To use it, pass one of the four device rotation options: `.portrait`, `.portraitUpsideDown`, `.landscapeLeft`, or `.landscapeRight`.

For example, this will show a landscape left preview:

```swift
struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
            .previewInterfaceOrientation(.landscapeLeft)
    }
}
```

![An Xcode Preview of a phone rotated left into Landscape orientation.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-preview-your-layout-in-portrait-or-landscape-1~dark@2x.png)

Remember, your preview provider can contain several devices and they’ll display one above the other. This means you can have both portrait and landscape visible at the same time:

```swift
struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()

        ContentView()
            .previewInterfaceOrientation(.landscapeLeft)
    }
}
```

![Xcode Previews in upright orientation and rotated left into Landscape orientation.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-preview-your-layout-in-portrait-or-landscape-2~dark@2x.png)

::: details Similar solutions…

```component VPCard
{
  "title": "How to preview your layout at different Dynamic Type sizes | SwiftUI by Example",
  "desc": "How to preview your layout at different Dynamic Type sizes",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-preview-your-layout-at-different-dynamic-type-sizes.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to preview your layout in light and dark mode | SwiftUI by Example",
  "desc": "How to preview your layout in light and dark mode",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-preview-your-layout-in-light-and-dark-mode.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to preview your layout in a navigation view | SwiftUI by Example",
  "desc": "How to preview your layout in a navigation view",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-preview-your-layout-in-a-navigation-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to preview your layout in different devices | SwiftUI by Example",
  "desc": "How to preview your layout in different devices",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-preview-your-layout-in-different-devices.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a custom layout using the Layout protocol | SwiftUI by Example",
  "desc": "How to create a custom layout using the Layout protocol",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-custom-layout-using-the-layout-protocol.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />