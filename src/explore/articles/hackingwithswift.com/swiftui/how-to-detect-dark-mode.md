---
lang: ko-KR
title: How to detect dark mode
description: Article(s) > How to detect dark mode
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
      content: Article(s) > How to detect dark mode
    - property: og:description
      content: How to detect dark mode
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-detect-dark-mode.html
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
  "title": "How to detect dark mode | SwiftUI by Example",
  "desc": "How to detect dark mode",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-detect-dark-mode",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI lets us detect whether dark mode or light mode is currently enabled using the `colorScheme` environment key. If you declare this using `@Environment`, you can refer to it in your views and they will automatically be reloaded when the color scheme changes.

For example, this will print either “In dark mode” or “In light mode” depending on the current color scheme:

```swift
struct ContentView: View {
    @Environment(\.colorScheme) var colorScheme

    var body: some View {
        Text(colorScheme == .dark ? "In dark mode" : "In light mode")
    }
}
```

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-detect-dark-mode-1~dark.mp4" />

This should generally only be necessary for custom drawing – if you want to enable dark and light colors or dark and light images these can both be done using your asset catalog, and will also reload when the color scheme changes.

::: details Similar solutions…

```component VPCard
{
  "title": "How to show different images and other views in light or dark mode | SwiftUI by Example",
  "desc": "How to show different images and other views in light or dark mode",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-show-different-images-and-other-views-in-light-or-dark-mode.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to preview your layout in light and dark mode | SwiftUI by Example",
  "desc": "How to preview your layout in light and dark mode",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-preview-your-layout-in-light-and-dark-mode.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to customize the display mode of NavigationSplitView | SwiftUI by Example",
  "desc": "How to customize the display mode of NavigationSplitView",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-customize-the-display-mode-of-navigationsplitview.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to detect the location of a tap inside a view | SwiftUI by Example",
  "desc": "How to detect the location of a tap inside a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-detect-the-location-of-a-tap-inside-a-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to detect device rotation | SwiftUI by Example",
  "desc": "How to detect device rotation",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-detect-device-rotation.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />