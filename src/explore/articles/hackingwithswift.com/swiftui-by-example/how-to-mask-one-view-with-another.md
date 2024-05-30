---
lang: ko-KR
title: How to mask one view with another
description: Article(s) > How to mask one view with another
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
      content: Article(s) > How to mask one view with another
    - property: og:description
      content: How to mask one view with another
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-mask-one-view-with-another.html
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
  "title": "How to mask one view with another | SwiftUI by Example",
  "desc": "How to mask one view with another",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-mask-one-view-with-another",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI gives us the `mask()` modifier for masking one with another, which means you can mask an image using text or an image using an image, or more.

For example, this creates a 300x300 image of stripes, then masks it using the text “SWIFT!” so that the letters act as a cut out for the image:

```swift
Image("laser-show")
    .resizable()
    .frame(width: 300, height: 300)
    .mask(
        Text("SWIFT!")
            .font(.system(size: 72))
    )
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-mask-one-view-with-another-1.zip)

![The text “SWIFT!” forms a mask through which we can see a laser show.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-mask-one-view-with-another-1~dark@2x.png)

The `mask()` modifier is different from `clipShape()`, because it also applies any transparency from the masking view – you get to have holes in your underlying view based on the transparency of your mask. On the other hand, `clipShape()` only adjusts the outside shape of the view you apply it to.

::: details Similar solutions…

```component VPCard
{
  "title": "How to synchronize animations from one view to another with matchedGeometryEffect() | SwiftUI by Example",
  "desc": "How to synchronize animations from one view to another with matchedGeometryEffect()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-synchronize-animations-from-one-view-to-another-with-matchedgeometryeffect.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to force one gesture to recognize before another using highPriorityGesture() | SwiftUI by Example",
  "desc": "How to force one gesture to recognize before another using highPriorityGesture()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tips-and-tricks.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to recommend another app using appStoreOverlay() | SwiftUI by Example",
  "desc": "How to recommend another app using appStoreOverlay()",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-recommend-another-app-using-appstoreoverlay.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to force views to one side inside a stack using Spacer | SwiftUI by Example",
  "desc": "How to force views to one side inside a stack using Spacer",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-force-views-to-one-side-inside-a-stack-using-spacer.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />