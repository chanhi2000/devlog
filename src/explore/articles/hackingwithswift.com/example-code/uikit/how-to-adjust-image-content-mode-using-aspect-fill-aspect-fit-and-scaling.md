---
lang: ko-KR
title: "How to adjust image content mode using aspect fill, aspect fit and scaling"
description: "Article(s) > How to adjust image content mode using aspect fill, aspect fit and scaling"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-5.10
  - ios
  - ios-2.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to adjust image content mode using aspect fill, aspect fit and scaling"
    - property: og:description
      content: "How to adjust image content mode using aspect fill, aspect fit and scaling"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-adjust-image-content-mode-using-aspect-fill-aspect-fit-and-scaling.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIKit - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uikit/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to adjust image content mode using aspect fill, aspect fit and scaling | UIKit - free Swift example code",
  "desc": "How to adjust image content mode using aspect fill, aspect fit and scaling",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-adjust-image-content-mode-using-aspect-fill-aspect-fit-and-scaling",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
All views (including those that don't hold images) have a content mode that affects the way they draw their content. The default is `Scale To Fill` because it's fastest: the contents of the view just get stretched up (or down) to fit the space available. But there are two others that you'll be using a lot: Aspect Fit and Aspect Fill.

"Aspect Fit" means "stretch this image up as large as it can go, but make sure that all the image is visible while keeping its original aspect ratio." This is useful when you want an image to be as large as possible without stretching its proportions, and it's probably the most commonly used content mode.

"Aspect Fill” means "stretch this image up as large as it can go, cropping off any parts that don't fit while keeping its original aspect ratio." This is useful when you want an image to fill its image view, even when that means losing either the horizontal or vertical edges. If you want to force an image to fill a specific space, but you want to keep its aspect ratio, this is the one you should use.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-find-an-aspect-fit-images-size-inside-an-image-view">How to find an aspect fit image’s size inside an image view 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/quick-start/swiftui/how-to-fill-and-stroke-shapes-at-the-same-time">How to fill and stroke shapes at the same time 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a>
-->

:::

---

<TagLinks />