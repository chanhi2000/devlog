---
lang: ko-KR
title: "How to pixellate a UIImage"
description: "Article(s) > How to pixellate a UIImage"
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
  - ios-8.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to pixellate a UIImage"
    - property: og:description
      content: "How to pixellate a UIImage"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-pixellate-a-uiimage.html
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
  "title": "How to pixellate a UIImage | Media - free Swift example code",
  "desc": "How to pixellate a UIImage",
  "link": "https://hackingwithswift.com/example-code/media/how-to-pixellate-a-uiimage",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Core Image has a number of interesting filters baked in, and an easy one to use is `CIPixellate` – it pixellates images, making them appear blocky. You have control over how big each pixel block should be, so it’s suitable for a range of tasks.

Below is some sample code to get you started. To use it you should:

1. Change `yourUIImage` to be whatever input `UIImage` you want to use.
<li>Change the value of 12 for however strong your pixellation effect should be.
<li>Change the `print(processedImage.size)` line at the end for something more interesting – maybe you want to display the pixellated image somewhere?

Here’s the code:

```swift
guard let currentCGImage = yourUIImage.cgImage else { return }
let currentCIImage = CIImage(cgImage: currentCGImage)

let filter = CIFilter(name: "CIPixellate")
filter?.setValue(currentCIImage, forKey: kCIInputImageKey)
filter?.setValue(12, forKey: kCIInputScaleKey)
guard let outputImage = filter?.outputImage else { return }

let context = CIContext()

if let cgimg = context.createCGImage(outputImage, from: outputImage.extent) {
    let processedImage = UIImage(cgImage: cgimg)
    print(processedImage.size)
}
```

Note: if you intend to run pixellation several times you’ll find it more efficient to save your `CIContext` rather than keep recreating it.

-->

::: details Similar solutions…

<!--
/example-code/core-graphics/how-to-use-core-graphics-blend-modes-to-draw-a-uiimage-differently">How to use Core Graphics blend modes to draw a UIImage differently 
/example-code/media/how-to-save-a-uiimage-to-a-file-using-jpegdata-and-pngdata">How to save a UIImage to a file using jpegData() and pngData() 
/example-code/media/how-to-read-the-average-color-of-a-uiimage-using-ciareaaverage">How to read the average color of a UIImage using CIAreaAverage 
/example-code/media/cidetectortypeface-how-to-detect-faces-in-a-uiimage">CIDetectorTypeFace: How to detect faces in a UIImage 
/example-code/media/how-to-render-a-uiview-to-a-uiimage">How to render a UIView to a UIImage</a>
-->

:::

---

<TagLinks />