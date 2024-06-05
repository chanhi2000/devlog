---
lang: ko-KR
title: How to fix images not resizing
description: Article(s) > How to fix images not resizing
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
      content: Article(s) > How to fix images not resizing
    - property: og:description
      content: How to fix images not resizing
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-images-not-resizing.html
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
  "title": "How to fix images not resizing | SwiftUI by Example",
  "desc": "How to fix images not resizing",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-fix-images-not-resizing",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you created a SwiftUI `Image` and it isn’t being resized, look for code like this:

```swift
Image("cornwall")
    .frame(width: 300, height: 300)
```

That explicitly sets the image’s frame, but *doesn’t* mark the image as being resizable. The correct thing to do is add the `resizable()` modifier before the frame, like this:

```swift
Image("cornwall")
    .resizable()
    .frame(width: 300, height: 300)
```

::: details Similar solutions…

```component VPCard
{
  "title": "How to disable the overlay color for images inside Button and NavigationLink | SwiftUI by Example",
  "desc": "How to disable the overlay color for images inside Button and NavigationLink",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-disable-the-overlay-color-for-images-inside-button-and-navigationlink.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to show different images and other views in light or dark mode | SwiftUI by Example",
  "desc": "How to show different images and other views in light or dark mode",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-different-images-and-other-views-in-light-or-dark-mode.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to insert images into text | SwiftUI by Example",
  "desc": "How to insert images into text",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-insert-images-into-text.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{ 
  "title": "How to use decorative images to reduce screen reader clutter | SwiftUI by Example",
  "desc": "How to use decorative images to reduce screen reader clutter",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-decorative-images-to-reduce-screen-reader-clutter.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to draw images using Image views | SwiftUI by Example",
  "desc": "How to draw images using Image views",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-images-using-image-views.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />