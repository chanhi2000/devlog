---
lang: ko-KR
title: How to show different images and other views in light or dark mode
description: Article(s) > How to show different images and other views in light or dark mode
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
      content: Article(s) > How to show different images and other views in light or dark mode
    - property: og:description
      content: How to show different images and other views in light or dark mode
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-show-different-images-and-other-views-in-light-or-dark-mode.html
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
  "title": "How to show different images and other views in light or dark mode | SwiftUI by Example",
  "desc": "How to show different images and other views in light or dark mode",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-show-different-images-and-other-views-in-light-or-dark-mode",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI can load light and dark mode images directly from your asset catalog depending on the user's current appearance setting, but if you *aren't* using an asset catalog – for example if you downloaded the images or generated them locally – you need to do a little extra work.

The simplest solution is to create a new view that handles both light and dark mode images, like this:

```swift
struct AdaptiveImage: View {
    @Environment(\.colorScheme) var colorScheme
    let light: Image
    let dark: Image

    @ViewBuilder var body: some View {
        if colorScheme == .light {
            light
        } else {
            dark
        }
    }
}
```

That allows you to pass both images in, and SwiftUI will automatically select the correct one for both light and dark mode:

```swift
struct ContentView: View {
    var body: some View {
        AdaptiveImage(light: Image(systemName: "sun.max"), dark: Image(systemName: "moon"))
    }
}
```

That works great if you just want to flip between light and dark mode images, but if we add a little extra code we can create a wrapper view able to display completely different content depending on light and dark mode:

```swift
struct AdaptiveView<T: View, U: View>: View {
    @Environment(\.colorScheme) var colorScheme
    let light: T
    let dark: U

    init(light: T, dark: U) {
        self.light = light
        self.dark = dark
    }

    init(light: () -> T, dark: () -> U) {
        self.light = light()
        self.dark = dark()
    }

    @ViewBuilder var body: some View {
        if colorScheme == .light {
            light
        } else {
            dark
        }
    }
}
```

That retains the same simple initializer, but now adds alternatives that accept closures. So, with that more advanced version we can now flip between more complicated layouts:

```swift
struct ContentView: View {
    var body: some View {
        VStack {
            AdaptiveView {
                VStack {
                    Text("Light mode")
                    Image(systemName: "sun.max")
                }
            } dark: {
                HStack {
                    Text("Dark mode")
                    Image(systemName: "moon")
                }
            }
            .font(.largeTitle)
        }
    }
}
```

::: details Similar solutions…

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
  "title": "How to detect dark mode | SwiftUI by Example",
  "desc": "How to detect dark mode",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-detect-dark-mode.md",
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

:::

---

<TagLinks />