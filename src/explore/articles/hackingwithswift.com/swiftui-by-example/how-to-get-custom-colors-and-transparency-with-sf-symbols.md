---
lang: ko-KR
title: How to get custom colors and transparency with SF Symbols
description: Article(s) > How to get custom colors and transparency with SF Symbols
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
      content: Article(s) > How to get custom colors and transparency with SF Symbols
    - property: og:description
      content: How to get custom colors and transparency with SF Symbols
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-get-custom-colors-and-transparency-with-sf-symbols.html
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
  "title": "How to get custom colors and transparency with SF Symbols | SwiftUI by Example",
  "desc": "How to get custom colors and transparency with SF Symbols",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-get-custom-colors-and-transparency-with-sf-symbols",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

If you use SF Symbols in SwiftUI's `Image` view, you can get simple colors using the `foregroundStyle()` modifier, or enable their multicolor variants by using `.renderingMode(.original)`. However, for extra flexibility over individual parts of the image, you can use the _hierarchical_ variant or provide a completely custom palette.

Hierarchical rendering uses opacity to create variations in shade on-screen. For example, this will draw the image in transparency to provide extra depth and clarity:

```swift
Image(systemName: "theatermasks")
    .symbolRenderingMode(.hierarchical)
    .font(.system(size: 144))
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-get-custom-colors-and-transparency-with-sf-symbols-1.zip)

![A symbol showing a smiling mask in the foreground and a fainter sad mask in background.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-get-custom-colors-and-transparency-with-sf-symbols-1~dark.png)

Hierarchical rendering works in combination with foreground color, so you can specify both if you need to:

```swift
Image(systemName: "theatermasks")
    .symbolRenderingMode(.hierarchical)
    .foregroundStyle(.blue)
    .font(.system(size: 144))
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-get-custom-colors-and-transparency-with-sf-symbols-2.zip)

![A symbol showing a smiling blue mask in the foreground and a fainter sad blue mask in background.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-get-custom-colors-and-transparency-with-sf-symbols-2~dark.png)

For even more power, you can use the `.palette` variant to get complete control over the colors in the image. So, we could render the SharePlay icon both blue and black at the same time, like this:

```swift
Image(systemName: "shareplay")
    .symbolRenderingMode(.palette)
    .foregroundStyle(.blue, .black)
    .font(.system(size: 144))
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-get-custom-colors-and-transparency-with-sf-symbols-3.zip)

![The Apple Shareplay symbol showing a blue person icon in front of two black arcs.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-get-custom-colors-and-transparency-with-sf-symbols-3~dark.png)

How those colors are applied depends on each individual symbol – sometimes symbols are defined with two layers and sometimes three, and you'll need to explore them individually to see how they break down.

For symbols that contain three variants, just add an extra color:

```swift
Image(systemName: "person.3.sequence.fill")
    .symbolRenderingMode(.palette)
    .foregroundStyle(.blue, .green, .red)
    .font(.system(size: 144))
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-get-custom-colors-and-transparency-with-sf-symbols-4.zip)

![Three slightly overlapping person icons, in blue, green, and red from left to right.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-get-custom-colors-and-transparency-with-sf-symbols-4~dark.png)

This even works with complex foreground styles, such as providing one gradient for each person in the icon:

```swift
Image(systemName: "person.3.sequence.fill")
    .symbolRenderingMode(.palette)
    .foregroundStyle(
        .linearGradient(colors: [.red, .black], startPoint: .top, endPoint: .bottomTrailing),
        .linearGradient(colors: [.green, .black], startPoint: .top, endPoint: .bottomTrailing),
        .linearGradient(colors: [.blue, .black], startPoint: .top, endPoint: .bottomTrailing)
    )
    .font(.system(size: 144))
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-get-custom-colors-and-transparency-with-sf-symbols-5.zip)

![Three slightly overlapping person icons, in blue, green, and red from left to right. Each icon's color transitions to black as it approaches the bottom right corner.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-get-custom-colors-and-transparency-with-sf-symbols-5~dark.png)

::: details Similar solutions…

```component VPCard
{
  "title": "How to animate SF Symbols | SwiftUI by Example",
  "desc": "How to animate SF Symbols",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-animate-sf-symbols.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to render images using SF Symbols | SwiftUI by Example",
  "desc": "How to render images using SF Symbols",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-render-images-using-sf-symbols.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Polishing designs with fonts and colors | SwiftUI by Example",
  "desc": "Polishing designs with fonts and colors",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/polishing-designs-with-fonts-and-colors.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to load custom colors from an asset catalog | SwiftUI by Example",
  "desc": "How to load custom colors from an asset catalog",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-load-custom-colors-from-an-asset-catalog.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to style text views with fonts, colors, line spacing, and more | SwiftUI by Example",
  "desc": "How to style text views with fonts, colors, line spacing, and more",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-style-text-views-with-fonts-colors-line-spacing-and-more.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />