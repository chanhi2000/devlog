---
lang: ko-KR
title: How to use images and other views as a backgrounds
description: Article(s) > How to use images and other views as a backgrounds
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
      content: Article(s) > How to use images and other views as a backgrounds
    - property: og:description
      content: How to use images and other views as a backgrounds
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-images-and-other-views-as-a-backgrounds.html
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
  "title": "How to use images and other views as a backgrounds | SwiftUI by Example",
  "desc": "How to use images and other views as a backgrounds",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-use-images-and-other-views-as-a-backgrounds",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI doesn’t have a dedicated modifier for displaying background colors or images, but instead lets us specify any kind of background view using its `background()` modifier.

For example, this creates a text view with a large font, then places a 100x100 image behind it:

```swift
Text("Hacking with Swift")
    .font(.system(size: 48))
    .padding(50)
    .background(
        Image("singapore")
            .resizable()
    )
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-use-images-and-other-views-as-a-backgrounds-1.zip)

![The words “Hacking with Swift” over an image of the indoor waterfall at Singapore's “Jewel” airport terminal.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-use-images-and-other-views-as-a-backgrounds-1~dark.png)

However, it doesn’t _need_ to be an image. For example, this creates the same text view then places a 50x50 red circle behind it:

```swift
Text("Hacking with Swift")
    .font(.largeTitle)
    .padding()
    .background(Circle()
        .fill(.red)
        .frame(width: 50, height: 50))
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-use-images-and-other-views-as-a-backgrounds-2.zip)

![The words “Hacking with Swift” over a small red circle.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-use-images-and-other-views-as-a-backgrounds-2~dark.png)

By default background views automatically take up as much space as they need to be fully visible, but if you want you can have them be clipped to the size of their parent view using the `clipped()` modifier:

```swift
Text("Hacking with Swift")
    .font(.largeTitle)
    .padding()
    .background(
        Circle()
            .fill(.red)
            .frame(width: 100, height: 100)
    )
    .clipped()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-use-images-and-other-views-as-a-backgrounds-3.zip)

![The words “Hacking with Swift” over a red circle which has been clipped at the top and bottom.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-use-images-and-other-views-as-a-backgrounds-3~dark.png)

To be clear, you can use _any_ view as your background – another text view if you wanted, for example.

::: details Similar solutions…

```component VPCard
{
  "title": "Article(s) > How to show different images and other views in light or dark mode",
  "desc": "How to show different images and other views in light or dark mode",
  "link": "/swift/swiftui-by-example/09-advanced-state/how-to-show-different-images-and-other-views-in-light-or-dark-mode.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to layer views on top of each other using ZStack",
  "desc": "How to layer views on top of each other using ZStack",
  "link": "/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-layer-views-on-top-of-each-other-using-zstack.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > SwiftUI tips and tricks",
  "desc": "SwiftUI tips and tricks",
  "link": "/swift/swiftui-by-example/24-what-now/swiftui-tips-and-tricks.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > All SwiftUI property wrappers explained and compared",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/swift/swiftui-by-example/25-appendix-a/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Article(s) > How to hide the home indicator and other system UI",
  "desc": "How to hide the home indicator and other system UI",
  "link": "/swift/swiftui-by-example/04-view-layout/how-to-hide-the-home-indicator-and-other-system-ui.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />