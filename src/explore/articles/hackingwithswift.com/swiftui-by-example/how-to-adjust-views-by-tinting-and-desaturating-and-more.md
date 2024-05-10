---
lang: ko-KR
title: How to adjust views by tinting, desaturating, and more
description: Article(s) > How to adjust views by tinting, desaturating, and more
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
      content: Article(s) > How to adjust views by tinting, desaturating, and more
    - property: og:description
      content: How to adjust views by tinting, desaturating, and more
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-views-by-tinting-desaturating-and-more.html
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
  "title": "How to adjust views by tinting, desaturating, and more | SwiftUI by Example",
  "desc": "How to adjust views by tinting, desaturating, and more",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-adjust-views-by-tinting-desaturating-and-more",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI lets us finely control the way views look by adjusting their brightness, tint, hue, saturation, and more, all by using various modifiers.

For example, this creates an image view and tints the whole thing red:

```swift
Image("cat")
    .colorMultiply(.red)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-adjust-views-by-tinting-desaturating-and-more-1.zip)

![An image of a cat tinted red.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-adjust-views-by-tinting-and-desaturating-and-more-1~dark@2x.png)

You can adjust the saturation of views to any amount, where 0.0 is fully gray and 1.0 is its original color:

```swift
Image("boats")
    .saturation(0.3)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-adjust-views-by-tinting-desaturating-and-more-2.zip)

![A “washed out” desaturated image of boats.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-adjust-views-by-tinting-and-desaturating-and-more-2~dark@2x.png)

You can even dynamically adjust the contrast of a view by using the `contrast()` modifier. A value of 0.0 yields no contrast (a flat gray image), 1.0 gives you the original image, and everything above 1.0 *adds* contrast.

So, this will reduce the image contrast to 50%:

```swift
Image("sunset")
    .contrast(0.5)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://www.hackingwithswift.com/files/projects/swiftui/how-to-adjust-views-by-tinting-desaturating-and-more-3.zip)

![A low contrast image of a sunset.](https://www.hackingwithswift.com/img/books/quick-start/swiftui/how-to-adjust-views-by-tinting-and-desaturating-and-more-3~dark@2x.png)


::: details Similar solutions…

```component VPCard
{
  "title": "How to adjust views by tinting, desaturating, and more | SwiftUI by Example",
  "desc": "How to adjust views by tinting, desaturating, and more",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-views-by-tinting-desaturating-and-more.md",
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

```component VPCard
{
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to use Instruments to profile your SwiftUI code and identify slow layouts | SwiftUI by Example",
  "desc": "How to use Instruments to profile your SwiftUI code and identify slow layouts",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Building a menu using List | SwiftUI by Example",
  "desc": "Building a menu using List",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/building-a-menu-using-list.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />