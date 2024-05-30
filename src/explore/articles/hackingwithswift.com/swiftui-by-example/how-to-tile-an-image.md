---
lang: ko-KR
title: How to tile an image
description: Article(s) > How to tile an image
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
      content: Article(s) > How to tile an image
    - property: og:description
      content: How to tile an image
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-tile-an-image.html
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
  "title": "How to tile an image | SwiftUI by Example",
  "desc": "How to tile an image",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-tile-an-image",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If SwiftUI is asked to make an image view take up more space than the image was designed for, its default behavior is to stretch the image so that it fits the space you've asked for. However, it doesn't need to be that way: it can also _tile_ the image, i.e. repeat it horizontally and vertically so the space is fully filled.

The key is to use the `resizable()` modifier with its `resizingMode` parameter. This can be either `.stretch` (the default) or `.tile`, with `.tile` being what you're looking for.

In code it looks like this:

```swift
Image("logo")
    .resizable(resizingMode: .tile)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-tile-an-image-1.zip)

![A phone showing tiled images of the Hacking With Swift logo.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-tile-an-image-1~dark.png)

If you only want to tile part of the image – leading one or more edges fixed to the image view's edges – you can provide edge insets to the first parameter, like this:

```swift
Image("logo")
    .resizable(capInsets: EdgeInsets(top: 20, leading: 20, bottom: 20, trailing: 20), resizingMode: .tile)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-tile-an-image-2.zip)

![A phone showing tiled images of a slightly cropped Hacking With Swift logo.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-tile-an-image-2~dark.png)

::: details Similar solutions…

```component VPCard
{
  "title": "How to load a remote image from a URL | SwiftUI by Example",
  "desc": "How to load a remote image from a URL",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-load-a-remote-image-from-a-url.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to convert a SwiftUI view to an image | SwiftUI by Example",
  "desc": "How to convert a SwiftUI view to an image",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-convert-a-swiftui-view-to-an-image.md",
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

```component VPCard
{
  "title": "How to adjust the way an image is fitted to its space | SwiftUI by Example",
  "desc": "How to adjust the way an image is fitted to its space",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-the-way-an-image-is-fitted-to-its-space.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Displaying a detail screen with NavigationLink | SwiftUI by Example",
  "desc": "Displaying a detail screen with NavigationLink",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/displaying-a-detail-screen-with-navigationlink.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />