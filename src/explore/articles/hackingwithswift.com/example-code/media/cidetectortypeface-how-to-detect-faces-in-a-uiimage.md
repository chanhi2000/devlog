---
lang: ko-KR
title: "CIDetectorTypeFace: How to detect faces in a UIImage"
description: "Article(s) > CIDetectorTypeFace: How to detect faces in a UIImage"
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
  - ios-5.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > CIDetectorTypeFace: How to detect faces in a UIImage"
    - property: og:description
      content: "CIDetectorTypeFace: How to detect faces in a UIImage"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/cidetectortypeface-how-to-detect-faces-in-a-uiimage.html
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
  "title": "CIDetectorTypeFace: How to detect faces in a UIImage | Media - free Swift example code",
  "desc": "CIDetectorTypeFace: How to detect faces in a UIImage",
  "link": "https://hackingwithswift.com/example-code/media/cidetectortypeface-how-to-detect-faces-in-a-uiimage",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!-- 
Core Image has a number of feature detectors built right in, including the ability to detect faces, eyes, mouths, smiles and even blinking in pictures. When you ask it to look for faces in a picture, it will return you an array of all the faces it found, with each one containing face feature details such as eye position. Here's an example:

```swift
if let inputImage = UIImage(named: "taylor-swift") {
    let ciImage = CIImage(cgImage: inputImage.cgImage!)

    let options = [CIDetectorAccuracy: CIDetectorAccuracyHigh]
    let faceDetector = CIDetector(ofType: CIDetectorTypeFace, context: nil, options: options)!

    let faces = faceDetector.features(in: ciImage)

    if let face = faces.first as? CIFaceFeature {
        print("Found face at \(face.bounds)")

        if face.hasLeftEyePosition {
            print("Found left eye at \(face.leftEyePosition)")
        }

        if face.hasRightEyePosition {
            print("Found right eye at \(face.rightEyePosition)")
        }

        if face.hasMouthPosition {
            print("Found mouth at \(face.mouthPosition)")
        }
    }
}
```

-->

::: details Similar solutions…

<!--
/example-code/core-graphics/how-to-use-core-graphics-blend-modes-to-draw-a-uiimage-differently">How to use Core Graphics blend modes to draw a UIImage differently 
/example-code/media/how-to-save-a-uiimage-to-a-file-using-jpegdata-and-pngdata">How to save a UIImage to a file using jpegData() and pngData() 
/example-code/media/how-to-read-the-average-color-of-a-uiimage-using-ciareaaverage">How to read the average color of a UIImage using CIAreaAverage 
/example-code/media/how-to-pixellate-a-uiimage">How to pixellate a UIImage 
/example-code/media/how-to-render-a-uiview-to-a-uiimage">How to render a UIView to a UIImage</a>
-->

:::

---

<TagLinks />