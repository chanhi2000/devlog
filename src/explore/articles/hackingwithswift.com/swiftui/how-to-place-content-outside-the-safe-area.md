---
lang: ko-KR
title: How to place content outside the safe area
description: Article(s) > How to place content outside the safe area
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
      content: Article(s) > How to place content outside the safe area
    - property: og:description
      content: How to place content outside the safe area
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-place-content-outside-the-safe-area.html
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
  "title": "How to place content outside the safe area | SwiftUI by Example",
  "desc": "How to place content outside the safe area",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-place-content-outside-the-safe-area",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

By default your SwiftUI views will mostly stay inside the safe area – they will go to the bottom of the screen, but it won't go near any notch at the top of the device.

If you want to change that – if you want your view to be truly full screen, even if that means being partly obscured by a notch or other hardware cut outs – then you should use the `ignoresSafeArea()` modifier.

For example, this creates a red text view that asks to fill all available space, then sets it to ignore any safe areas so that it goes truly edge to edge.

```swift
Text("Hello World")
    .frame(minWidth: 100, maxWidth: .infinity, minHeight: 100, maxHeight: .infinity)
    .background(.red)
    .ignoresSafeArea()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-place-content-outside-the-safe-area-1.zip)

![A phone showing the words “Hello World” over a red background which fills the screen.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-place-content-outside-the-safe-area-1~dark.png)

There is a second, similar modifier called `safeAreaInset()`, which allows us to place distinct content outside the safe area while also adjusting the remaining safe area so that all its contents remain visible.

::: details Similar solutions…

```component VPCard
{
  "title": "How to inset the safe area with custom content | SwiftUI by Example",
  "desc": "How to inset the safe area with custom content",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-inset-the-safe-area-with-custom-content.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to inset the safe area with custom content | SwiftUI by Example",
  "desc": "How to inset the safe area with custom content",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-inset-the-safe-area-with-custom-content.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add extra padding to the safe area | SwiftUI by Example",
  "desc": "How to add extra padding to the safe area",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-add-extra-padding-to-the-safe-area.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to control the tappable area of a view using contentShape() | SwiftUI by Example",
  "desc": "How to control the tappable area of a view using contentShape()",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-control-the-tappable-area-of-a-view-using-contentshape.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to indent the content or scroll indicators in a ScrollView | SwiftUI by Example",
  "desc": "How to indent the content or scroll indicators in a ScrollView",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />