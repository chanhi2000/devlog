---
lang: ko-KR
title: How to preview your layout in different devices
description: Article(s) > How to preview your layout in different devices
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
      content: Article(s) > How to preview your layout in different devices
    - property: og:description
      content: How to preview your layout in different devices
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-preview-your-layout-in-different-devices.html
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
  "title": "How to preview your layout in different devices | SwiftUI by Example",
  "desc": "How to preview your layout in different devices",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-preview-your-layout-in-different-devices",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Xcode’s SwiftUI preview lets us show our designs in multiple screen sizes at the same time using the `.previewDevice()` modifier. This needs to be provided with the exact name of a device as seen in Xcode’s destination menu, e.g. “iPhone 14”.

For example, this shows a preview on the iPhone 14 Pro Max:

```swift
ContentView()
    .previewDevice(PreviewDevice(rawValue: "iPhone 14 Pro Max"))
```

When using specific devices for previewing, you’re likely to find it useful to add in the `.previewDisplayName()` modifier, which lets you put a name under a device in the preview window.

For example, this creates two previews for two different devices, adding the name of each to make it clear what’s going on:

```swift
struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
            .previewDevice(PreviewDevice(rawValue: "iPhone 14"))
            .previewDisplayName("iPhone 14")

        ContentView()
            .previewDevice(PreviewDevice(rawValue: "iPhone 14 Pro Max"))
            .previewDisplayName("iPhone 14 Pro Max")
    }
}
```

![Xcode showing Previews on an iPhone 12 and an iPhone 12 Pro Max.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-preview-your-layout-in-different-devices-1~dark@2x.png)

::: details Similar solutions…

```component VPCard
{
  "title": "How to preview your layout at different Dynamic Type sizes | SwiftUI by Example",
  "desc": "How to preview your layout at different Dynamic Type sizes",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-preview-your-layout-at-different-dynamic-type-sizes.md",
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
  "title": "How to preview your layout in a navigation view | SwiftUI by Example",
  "desc": "How to preview your layout in a navigation view",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-preview-your-layout-in-a-navigation-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to preview your layout in portrait or landscape | SwiftUI by Example",
  "desc": "How to preview your layout in portrait or landscape",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-preview-your-layout-in-portrait-or-landscape.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to return different view types | SwiftUI by Example",
  "desc": "How to return different view types",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-return-different-view-types.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::


---

<TagLinks />