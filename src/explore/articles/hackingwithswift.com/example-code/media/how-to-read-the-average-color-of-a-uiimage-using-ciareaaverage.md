---
lang: ko-KR
title: "How to read the average color of a UIImage using CIAreaAverage"
description: "Article(s) > How to read the average color of a UIImage using CIAreaAverage"
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
  - ios-9.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to read the average color of a UIImage using CIAreaAverage"
    - property: og:description
      content: "How to read the average color of a UIImage using CIAreaAverage"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-read-the-average-color-of-a-uiimage-using-ciareaaverage.html
date: 2020-07-07
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
  "title": "How to read the average color of a UIImage using CIAreaAverage | Media - free Swift example code",
  "desc": "How to read the average color of a UIImage using CIAreaAverage",
  "link": "https://hackingwithswift.com/example-code/media/how-to-read-the-average-color-of-a-uiimage-using-ciareaaverage",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!-- 
Core Image has a filter that resamples an image down to 1x1 pixels so you can read the most dominant color in an image, although it’s weirdly hard to use. 

To simplify things, here’s an extension on `UIImage` that returns an optional `UIColor` – it will be nil only if something went wrong while reading your image, but otherwise it will contain the average color for the entire image:

```swift
extension UIImage {
    var averageColor: UIColor? {
        guard let inputImage = CIImage(image: self) else { return nil }
        let extentVector = CIVector(x: inputImage.extent.origin.x, y: inputImage.extent.origin.y, z: inputImage.extent.size.width, w: inputImage.extent.size.height)

        guard let filter = CIFilter(name: "CIAreaAverage", parameters: [kCIInputImageKey: inputImage, kCIInputExtentKey: extentVector]) else { return nil }
        guard let outputImage = filter.outputImage else { return nil }

        var bitmap = [UInt8](repeating: 0, count: 4)
        let context = CIContext(options: [.workingColorSpace: kCFNull])
        context.render(outputImage, toBitmap: &bitmap, rowBytes: 4, bounds: CGRect(x: 0, y: 0, width: 1, height: 1), format: .RGBA8, colorSpace: nil)

        return UIColor(red: CGFloat(bitmap[0]) / 255, green: CGFloat(bitmap[1]) / 255, blue: CGFloat(bitmap[2]) / 255, alpha: CGFloat(bitmap[3]) / 255)
    }
}
```

As you can see, that reads in the source image and creates an extent for the full image. It then uses the “CIAreaAverage” filter to do the actual work, then renders the average color to a 1x1 image. Finally, it reads each of the color values into a `UIColor`, and sends it back.

-->

::: details Similar solutions…

<!--
/example-code/core-graphics/how-to-use-core-graphics-blend-modes-to-draw-a-uiimage-differently">How to use Core Graphics blend modes to draw a UIImage differently 
/example-code/media/how-to-save-a-uiimage-to-a-file-using-jpegdata-and-pngdata">How to save a UIImage to a file using jpegData() and pngData() 
/example-code/media/how-to-render-a-uiview-to-a-uiimage">How to render a UIView to a UIImage 
/example-code/media/how-to-pixellate-a-uiimage">How to pixellate a UIImage 
/example-code/media/cidetectortypeface-how-to-detect-faces-in-a-uiimage">CIDetectorTypeFace: How to detect faces in a UIImage</a>
-->

:::

---

<TagLinks />