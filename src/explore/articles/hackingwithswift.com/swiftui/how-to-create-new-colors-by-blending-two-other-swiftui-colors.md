---
lang: ko-KR
title: How to create new colors by blending two other SwiftUI colors
description: Article(s) > How to create new colors by blending two other SwiftUI colors
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
      content: Article(s) > How to create new colors by blending two other SwiftUI colors
    - property: og:description
      content: How to create new colors by blending two other SwiftUI colors
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-create-new-colors-by-blending-two-other-swiftui-colors.html
next: /explore/articles/hackingwithswift.com/swiftui/swiftuis-built-in-shapes.md
date: 2024-06-21
isOriginal: false
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
  "title": "How to create new colors by blending two other SwiftUI colors | SwiftUI by Example",
  "desc": "How to create new colors by blending two other SwiftUI colors",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-new-colors-by-blending-two-other-swiftui-colors",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 16

**New in iOS 18**

SwiftUI's `Color` view has a `mix(with:by:)` modifier that lets us blend two colors dynamically. This can be as simple as putting two colors together, like this:

```swift
Rectangle()
    .fill(Color.red.mix(with: .indigo, by: 0.5))
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-new-colors-by-blending-two-other-swiftui-colors-1.zip)

However, you can also customize the colorspace. It's set to `.perceptual` by default, meaning that humans perceive the colors to blend smoothly – it's not strictly accurate to exact color values, but it <em>feels</em> accurate to our eyes. We could also the `.device` colorspace, which means the blending is more mathematically accurate as a value between 0 and 1:

```swift
Rectangle()
    .fill(Color.red.mix(with: .indigo, by: 0.5, in: .device))
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-new-colors-by-blending-two-other-swiftui-colors-2.zip)

With this API, we can create a whole color picker and blender layout like this:

```swift
struct ContentView: View {
    @State private var firstColor = Color.red
    @State private var secondColor = Color.indigo
    @State private var blendAmount = 0.5

    var body: some View {
        VStack {
            ColorPicker("From", selection: $firstColor)
            ColorPicker("To", selection: $secondColor)
            Slider(value: $blendAmount)

            Rectangle()
                .fill(firstColor.mix(with: secondColor, by: blendAmount))
        }
        .padding()
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-create-new-colors-by-blending-two-other-swiftui-colors-3.zip)

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
  "title": "How to layer views on top of each other using ZStack | SwiftUI by Example",
  "desc": "How to layer views on top of each other using ZStack",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-layer-views-on-top-of-each-other-using-zstack.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to hide the home indicator and other system UI | SwiftUI by Example",
  "desc": "How to hide the home indicator and other system UI",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-hide-the-home-indicator-and-other-system-ui.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to hide the tab bar, navigation bar, or other toolbars | SwiftUI by Example",
  "desc": "How to hide the tab bar, navigation bar, or other toolbars",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-hide-the-tab-bar-navigation-bar-or-other-toolbars.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to use images and other views as backgrounds | SwiftUI by Example",
  "desc": "How to use images and other views as backgrounds",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-use-images-and-other-views-as-backgrounds.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />