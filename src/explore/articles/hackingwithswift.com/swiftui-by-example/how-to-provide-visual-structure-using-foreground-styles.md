---
lang: ko-KR
title: How to provide visual structure using foreground styles
description: Article(s) > How to provide visual structure using foreground styles
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
  - hacking-with-swift
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to provide visual structure using foreground styles
    - property: og:description
      content: How to provide visual structure using foreground styles
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-provide-visual-structure-using-foreground-styles.html
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
  "title": "How to provide visual structure using foreground styles | SwiftUI by Example",
  "desc": "How to provide visual structure using foreground styles",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-provide-visual-structure-using-foreground-styles",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 15**

SwiftUI provides a `foregroundStyle()` modifier to control the way text, images, and shapes are styled all at once. In its simplest form this is similar to using `foregroundStyle()` with `.secondary`, but not only does it unlock more of the semantic colors – `.tertiary` and `.quaternary`, it also adds support for anything that conforms to `ShapeStyle`.

So, here's an example of an image and some text rendered using quaternary style, which is the lowest of four importance levels for content:

```swift
HStack {
    Image(systemName: "clock.fill")
    Text("Set the time")
}
.font(.largeTitle.bold())
.foregroundStyle(.quaternary)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-provide-visual-structure-using-foreground-styles-1.zip)

A clock symbol beside the words “Set the time”, both in faint grey.

Like I said, anything that conforms to `ShapeStyle` also works, meaning that we can render our `HStack` with a red to black linear gradient using the same modifier:

```swift
HStack {
    Image(systemName: "clock.fill")
    Text("Set the time")
}
.font(.largeTitle.bold())
.foregroundStyle(
    .linearGradient(
        colors: [.red, .black],
        startPoint: .top,
        endPoint: .bottom
    )
)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-provide-visual-structure-using-foreground-styles-2.zip)

![A clock symbol beside the words “Set the time”, both with a gradient running from red at the top to black at the bottom.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-provide-visual-structure-using-foreground-styles-2~dark.png)

::: details Similar solutions…

```component VPCard
{
  "title": "How to detect when your app moves to the background or foreground with scenePhase | SwiftUI by Example",
  "desc": "How to detect when your app moves to the background or foreground with scenePhase",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-when-your-app-moves-to-the-background-or-foreground-with-scenephase.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add visual effect blurs | SwiftUI by Example",
  "desc": "How to add visual effect blurs",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-visual-effect-blurs.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to provide relative sizes using GeometryReader | SwiftUI by Example",
  "desc": "How to provide relative sizes using GeometryReader",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-provide-relative-sizes-using-geometryreader.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to get custom colors and transparency with SF Symbols | SwiftUI by Example",
  "desc": "How to get custom colors and transparency with SF Symbols",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-get-custom-colors-and-transparency-with-sf-symbols.md",
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

:::

---

<TagLinks />