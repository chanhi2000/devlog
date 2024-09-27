---
lang: ko-KR
title: "How to render a UIView to a UIImage"
description: "Article(s) > How to render a UIView to a UIImage"
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
  - ios-10.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to render a UIView to a UIImage"
    - property: og:description
      content: "How to render a UIView to a UIImage"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-render-a-uiview-to-a-uiimage.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Media - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/media/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to render a UIView to a UIImage | Media - free Swift example code",
  "desc": "How to render a UIView to a UIImage",
  "link": "https://hackingwithswift.com/example-code/media/how-to-render-a-uiview-to-a-uiimage",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 10.0

<!-- TODO: 작성 -->

<!-- 
You can render any `UIView` into a `UIImage` in just four lines of code, and that even handles drawing all the subviews automatically. Here's the code:

```swift
let renderer = UIGraphicsImageRenderer(size: view.bounds.size)
let image = renderer.image { ctx in
    view.drawHierarchy(in: view.bounds, afterScreenUpdates: true)
}
```

Helpfully, that code works equally well no matter what the view contains - if you're using UIKit, SpriteKit, Metal or whatever, it all works.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-mask-one-uiview-using-another-uiview">How to mask one UIView using another UIView 
/example-code/media/how-to-read-the-average-color-of-a-uiimage-using-ciareaaverage">How to read the average color of a UIImage using CIAreaAverage 
/example-code/core-graphics/how-to-use-core-graphics-blend-modes-to-draw-a-uiimage-differently">How to use Core Graphics blend modes to draw a UIImage differently 
/example-code/media/how-to-save-a-uiimage-to-a-file-using-jpegdata-and-pngdata">How to save a UIImage to a file using jpegData() and pngData() 
/example-code/media/how-to-pixellate-a-uiimage">How to pixellate a UIImage</a>
-->

:::

---

<TagLinks />