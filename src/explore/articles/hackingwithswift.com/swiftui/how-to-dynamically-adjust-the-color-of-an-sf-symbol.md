---
lang: ko-KR
title: How to dynamically adjust the color of an SF Symbol
description: Article(s) > How to dynamically adjust the color of an SF Symbol
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
      content: Article(s) > How to dynamically adjust the color of an SF Symbol
    - property: og:description
      content: How to dynamically adjust the color of an SF Symbol
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-dynamically-adjust-the-color-of-an-sf-symbol.html
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
  "title": "How to dynamically adjust the color of an SF Symbol | SwiftUI by Example",
  "desc": "How to dynamically adjust the color of an SF Symbol",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-dynamically-adjust-the-color-of-an-sf-symbol",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 16**

Some SF Symbols support variable coloring, which means they can have different parts filled based on a fraction between 0 and 1.

For example, this shows a Wi-Fi icon that is partly filled in:

```swift
Image(systemName: "wifi", variableValue: 0.5)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-dynamically-adjust-the-color-of-an-sf-symbol-1.zip)

This value can change over time based on whatever state you're using in your code. For example, we could use a slider to change various icons according to a local property:

```swift
struct ContentView: View {
    @State private var value = 0.0

    var body: some View {
        VStack {
            HStack {
                Image(systemName: "aqi.low", variableValue: value)
                Image(systemName: "wifi", variableValue: value)
                Image(systemName: "chart.bar.fill", variableValue: value)
                Image(systemName: "waveform", variableValue: value)
            }

            Slider(value: $value)
        }
        .font(.system(size: 72))
        .foregroundStyle(.blue)
        .padding()
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-dynamically-adjust-the-color-of-an-sf-symbol-2.zip)

![Four variable color icons automatically adapting as a slider is dragged up then down](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-dynamically-adjust-the-color-of-an-sf-symbol-1~dark.gif)

::: details Similar solutions…

```component VPCard
{
  "title": "How to dynamically adjust the appearance of a view based on its size and location | SwiftUI by Example",
  "desc": "How to dynamically adjust the appearance of a view based on its size and location",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to adjust the accent color of a view | SwiftUI by Example",
  "desc": "How to adjust the accent color of a view",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-adjust-the-accent-color-of-a-view.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to adjust List row separator visibility and color | SwiftUI by Example",
  "desc": "How to adjust List row separator visibility and color",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-adjust-list-row-separator-visibility-and-color.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to dynamically change between VStack and HStack | SwiftUI by Example",
  "desc": "How to dynamically change between VStack and HStack",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-dynamically-change-between-vstack-and-hstack.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to adjust views by tinting, desaturating, and more | SwiftUI by Example",
  "desc": "How to adjust views by tinting, desaturating, and more",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-adjust-views-by-tinting-desaturating-and-more.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />