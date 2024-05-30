---
lang: ko-KR
title: How to adjust the way an image is fitted to its space
description: Article(s) > How to adjust the way an image is fitted to its space
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
      content: Article(s) > How to adjust the way an image is fitted to its space
    - property: og:description
      content: How to adjust the way an image is fitted to its space
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-the-way-an-image-is-fitted-to-its-space.html
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
  "title": "How to adjust the way an image is fitted to its space | SwiftUI by Example",
  "desc": "How to adjust the way an image is fitted to its space",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-adjust-the-way-an-image-is-fitted-to-its-space",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI's `Image` view has the ability to be scaled in different ways, just like the content mode of a `UIImageView`.

By default, image views automatically size themselves to their contents, which might make them go beyond the screen. If you add the `resizable()` modifier then the image will instead automatically be sized so that it fills all the available space, either in a frame you specify or whatever is available on the screen:

```swift
Image("rome")
    .resizable()
    .frame(height: 200)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-adjust-the-way-an-image-is-fitted-to-its-space-1.zip)

![A phone showing an image of the Pantheon in Rome. The image is stretched horizontally.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-adjust-the-way-an-image-is-fitted-to-its-space-1~dark.png)

However, that may also cause the image to have its original aspect ratio distorted, because it will be stretched in all dimensions by whatever amount is needed to make it fill the space.

If you want to keep its aspect ratio you should add an `aspectRatio` modifier using either `.fill` or `.fit`, like this:

```swift
Image("rome")
    .resizable()
    .aspectRatio(contentMode: .fit)
    .frame(width: 250)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-adjust-the-way-an-image-is-fitted-to-its-space-2.zip)

![A phone showing an image of the Pantheon in Rome. The image is no longer stretched.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-adjust-the-way-an-image-is-fitted-to-its-space-2~dark.png)

::: details Similar solutions…

```component VPCard
{
  "title": "How to dynamically adjust the appearance of a view based on its size and location | SwiftUI by Example",
  "desc": "How to dynamically adjust the appearance of a view based on its size and location",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to adjust the position of a view using its offset | SwiftUI by Example",
  "desc": "How to adjust the position of a view using its offset",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-the-position-of-a-view-using-its-offset.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to adjust the size of a view relative to its container | SwiftUI by Example",
  "desc": "How to adjust the size of a view relative to its container",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-the-size-of-a-view-relative-to-its-container.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Two-way bindings in SwiftUI | SwiftUI by Example",
  "desc": "Two-way bindings in SwiftUI",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/two-way-bindings-in-swiftui.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to customize the way links are opened | SwiftUI by Example",
  "desc": "How to customize the way links are opened",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-customize-the-way-links-are-opened.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />