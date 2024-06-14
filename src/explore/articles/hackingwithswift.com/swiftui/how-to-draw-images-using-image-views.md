---
lang: ko-KR
title: How to draw images using Image views
description: Article(s) > How to draw images using Image views
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
      content: Article(s) > How to draw images using Image views
    - property: og:description
      content: How to draw images using Image views
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-draw-images-using-image-views.html
prev: /explore/articles/hackingwithswift.com/swiftui/how-to-let-users-select-text.md
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
  "title": "How to draw images using Image views | SwiftUI by Example",
  "desc": "How to draw images using Image views",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-draw-images-using-image-views",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Use the `Image` view to render images inside your SwiftUI layouts. These can load images from your bundle, from system icons, from a `UIImage`, and more, but those three will be the most common.

If you're building using Xcode 15 and later, you can load an image from your bundle and display it inside an image view using built-in static properties, like this:

```swift
Image(.dog)
```

This was introduced in Xcode 15 alongside iOS 17, but works just fine back in all older versions of iOS.

If you're using Xcode 14 and earlier, you need to write the name of your images like this:

```swift
Image("dog")
```

![A phone showing an image of a white dog.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-images-using-image-views-1~dark.png)

You also can create an image view from an existing `UIImage`. As loading a `UIImage` using its `named` initializer returns an optional image, you should either add a default value or use a force unwrap if you're sure it will exist in your asset catalog:

```swift
Image(uiImage: UIImage(named: "cat")!)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-draw-images-using-image-views-1.zip)

![A phone showing an image of a brown cat.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-images-using-image-views-2~dark.png)

If you want to work with Apple's SF Symbols icon set, you should use the Image(systemName:) initializer, like this:

```swift
Image(systemName: "cloud.heavyrain.fill")
    .font(.largeTitle)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-draw-images-using-image-views-2.zip)

![A symbol of a cloud dispensing heavy rain.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-draw-images-using-image-views-3~dark.png)

Notice how you can use the `font()` modifier to adjust SF Symbols as if they were text.

::: details Similar solutions…

```component VPCard
{
  "title": "How to show different images and other views in light or dark mode | SwiftUI by Example",
  "desc": "How to show different images and other views in light or dark mode",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-show-different-images-and-other-views-in-light-or-dark-mode.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to use images and other views as a backgrounds | SwiftUI by Example",
  "desc": "How to use images and other views as a backgrounds",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-use-images-and-other-views-as-a-backgrounds.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{ 
  "title": "How to use decorative images to reduce screen reader clutter | SwiftUI by Example",
  "desc": "How to use decorative images to reduce screen reader clutter",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-use-decorative-images-to-reduce-screen-reader-clutter.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to draw part of a solid shape using trim() | SwiftUI by Example",
  "desc": "How to draw part of a solid shape using trim()",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-draw-part-of-a-solid-shape-using-trim.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to draw a custom path | SwiftUI by Example",
  "desc": "How to draw a custom path",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-draw-a-custom-path.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />