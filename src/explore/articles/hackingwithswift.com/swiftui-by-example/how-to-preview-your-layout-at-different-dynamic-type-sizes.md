---
lang: ko-KR
title: How to preview your layout at different Dynamic Type sizes
description: Article(s) > How to preview your layout at different Dynamic Type sizes
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
      content: Article(s) > How to preview your layout at different Dynamic Type sizes
    - property: og:description
      content: How to preview your layout at different Dynamic Type sizes
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-preview-your-layout-at-different-dynamic-type-sizes.html
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
  "title": "How to preview your layout at different Dynamic Type sizes | SwiftUI by Example",
  "desc": "How to preview your layout at different Dynamic Type sizes",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-preview-your-layout-at-different-dynamic-type-sizes",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

When building apps it’s critical to make sure your layouts work great with all ranges of Dynamic Type. This is partly because SwiftUI natively supports it, partly because many people use *smaller* font sizes because they want a higher information density, but mostly because many people with accessibility needs rely on it.

Fortunately, all of SwiftUI’s components natively adapt to Dynamic Type sizes, and it’s even easy to preview your designs at various sizes by using the `\.sizeCategory` environment value in your preview

For example, if you wanted to see how a view looks with extra small text, you would add `.environment(\.sizeCategory, .extraSmall)` to your content view preview, like this:

```swift
struct ContentView_Previews: PreviewProvider {
   static var previews: some View {
      Group {
         ContentView()
            .environment(\.sizeCategory, .extraSmall)
      }
   }
}
```

![The Xcode Preview showing some very small text.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-preview-your-layout-at-different-dynamic-type-sizes-1~dark@2x.png)

You can also send back a group of previews, all using different size categories. This allows you to see the same design at various font sizes side by side.

So, this code shows the design at extra small size, regular size, and the largest possible size:

```swift
struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
            .environment(\.sizeCategory, .extraSmall)

        ContentView()

        ContentView()
            .environment(\.sizeCategory, .accessibilityExtraExtraExtraLarge)
    }
}
```

![Xcode showing previews with small, regular, and large text sizes.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-preview-your-layout-at-different-dynamic-type-sizes-2~dark@2x.png)

If your design works great across all three of those, you’re good to go.

::: tip

If your preview is zoomed right in, you should either scroll around or zoom out to the other previews.

:::

::: details Similar solutions…

```component VPCard
{ 
  "title": "How to specify the Dynamic Type sizes a view supports | SwiftUI by Example",
  "desc": "How to specify the Dynamic Type sizes a view supports",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-specify-the-dynamic-type-sizes-a-view-supports.md",
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
  "title": "How to provide relative sizes using GeometryReader | SwiftUI by Example",
  "desc": "How to provide relative sizes using GeometryReader",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-provide-relative-sizes-using-geometryreader.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />