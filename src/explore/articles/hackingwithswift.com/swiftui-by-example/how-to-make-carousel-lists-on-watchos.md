---
lang: ko-KR
title: How to make carousel lists on watchOS
description: Article(s) > How to make carousel lists on watchOS
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
      content: Article(s) > How to make carousel lists on watchOS
    - property: og:description
      content: How to make carousel lists on watchOS
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-carousel-lists-on-watchos.html
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
  "title": "How to make carousel lists on watchOS | SwiftUI by Example",
  "desc": "How to make carousel lists on watchOS",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-make-carousel-lists-on-watchos",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

watchOS has a particularly common list style that can easily be replicated using `List`: rows in the list slide and scale up when they are moving onto the screen, then slide and and scale *down* when they are moving *off* the screen. This is particularly effective with chunkier, graphical rows – it’s almost like Apple’s old Cover Flow effect.

To enable this carousel effect, use the `.listStyle()` modifier with `.carousel`, like this:

```swift
List(1..<51) {
    Text("\($0)")
}
.listStyle(.carousel)
```

<<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-make-carousel-lists-on-watchos-1~dark.mp4" />

::: important

If you’re using Xcode 12 you need to use `CarouselListStyle()` rather than `.carousel`.

:::

::: note

this is available only on watchOS.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to read the Digital Crown on watchOS using digitalCrownRotation() | SwiftUI by Example",
  "desc": "How to read the Digital Crown on watchOS using digitalCrownRotation()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-read-the-digital-crown-on-watchos-using-digitalcrownrotation.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create multi-column lists using Table | SwiftUI by Example",
  "desc": "How to create multi-column lists using Table",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-multi-column-lists-using-table.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Working with lists | SwiftUI by Example",
  "desc": "Working with lists",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/working-with-lists.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to get translucent lists on macOS | SwiftUI by Example",
  "desc": "How to get translucent lists on macOS",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-get-translucent-lists-on-macos.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create grouped and inset grouped lists | SwiftUI by Example",
  "desc": "How to create grouped and inset grouped lists",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-grouped-and-inset-grouped-lists.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />