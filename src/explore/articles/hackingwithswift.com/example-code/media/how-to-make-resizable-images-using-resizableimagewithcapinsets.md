---
lang: ko-KR
title: "How to make resizable images using resizableImage(withCapInsets:)"
description: "Article(s) > How to make resizable images using resizableImage(withCapInsets:)"
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
      content: "Article(s) > How to make resizable images using resizableImage(withCapInsets:)"
    - property: og:description
      content: "How to make resizable images using resizableImage(withCapInsets:)"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-make-resizable-images-using-resizableimagewithcapinsets.html
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
  "title": "How to make resizable images using resizableImage(withCapInsets:) | Media - free Swift example code",
  "desc": "How to make resizable images using resizableImage(withCapInsets:)",
  "link": "https://hackingwithswift.com/example-code/media/how-to-make-resizable-images-using-resizableimagewithcapinsets",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
If you use a small image in a large image view, you can make the image stretch to fit if you want to but it probably won't look great. iOS provides an alternative known as *resizable images*, which is where you define part of an image as being fixed in size and let iOS stretch the remainder.

This technique is common with button graphics: you make the corners fixed in size, then stretch the center part as big as it needs to be. The center part ought to be just one pixel by one pixel in size so that it stretches perfectly, but you can also ask iOS to repeat the center area as a tile if that's what you want.

This example code below creates a resizable image by defining the corners as 8 points each and stretching the rest:

```swift
if let img = UIImage(named: "button") {
    let resizable = img.resizableImage(withCapInsets: UIEdgeInsets(top: 8, left: 8, bottom: 8, right: 8), resizingMode: .stretch)
}
```

-->

::: details Similar solutions…

<!--
/example-code/arkit/how-to-detect-images-using-arimagetrackingconfiguration">How to detect images using ARImageTrackingConfiguration 
/quick-start/swiftui/how-to-use-decorative-images-to-reduce-screen-reader-clutter">How to use decorative images to reduce screen reader clutter 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/how-to-draw-images-using-image-views">How to draw images using Image views 
/quick-start/swiftui/how-to-insert-images-into-text">How to insert images into text</a>
-->

:::

---

<TagLinks />