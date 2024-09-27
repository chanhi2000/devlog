---
lang: ko-KR
title: "How to detect documents using VNDocumentCameraViewController"
description: "Article(s) > How to detect documents using VNDocumentCameraViewController"
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
  - ios-13.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to detect documents using VNDocumentCameraViewController"
    - property: og:description
      content: "How to detect documents using VNDocumentCameraViewController"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/vision/how-to-convert-a-hex-color-to-a-uicolor.html
date: 2019-06-03
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Vision - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/vision/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to detect documents using VNDocumentCameraViewController | Vision - free Swift example code",
  "desc": "How to detect documents using VNDocumentCameraViewController",
  "link": "https://hackingwithswift.com/example-code/vision/how-to-convert-a-hex-color-to-a-uicolor",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
iOS 13.0 introduced a new micro-framework called VisionKit, which is specifically designed to make it possible to scan documents like Notes does. 

You can then Vision OCR to scan the text if you want, but by default `VNDocumentCameraViewController` just gives you images of each page.

To get started:

1. Import VisionKit.
<li>Make some type (such as your view controller) conform to the `VNDocumentCameraViewControllerDelegate` protocol so you can handle delegate callbacks.
<li>Create and present an instance of `VNDocumentCameraViewController`, setting its delegate property to whatever should be notified when a scan completes.
<li>Present the document scanner as normal, then wait for feedback.

So, something like this:

```swift
let vc = VNDocumentCameraViewController()
vc.delegate = self
present(vc, animated: true)
```

Once the scan completes your delegate will get called with the document, like this:

```swift
func documentCameraViewController(_ controller: VNDocumentCameraViewController, didFinishWith scan: VNDocumentCameraScan) {
    print("Found \(scan.pageCount)")

    for i in 0 ..< scan.pageCount {
        let img = scan.imageOfPage(at: i)
        // ... your code here
    }
}
```

The result of `imageOfPage(at:)` is a `UIImage`, so you’ll need to replace “your code here” with whatever you want to do with your images.

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-find-the-users-documents-directory">How to find the user's documents directory 
/example-code/vision/how-to-use-vnrecognizetextrequests-optical-character-recognition-to-detect-text-in-an-image">How to use VNRecognizeTextRequest’s optical character recognition to detect text in an image 
/example-code/uikit/how-to-detect-keyboard-input-using-pressesbegan-and-pressesended">How to detect keyboard input using pressesBegan() and pressesEnded() 
/example-code/location/how-to-detect-ibeacons">How to detect iBeacons 
/example-code/arkit/how-to-detect-images-using-arimagetrackingconfiguration">How to detect images using ARImageTrackingConfiguration</a>
-->

:::

---

<TagLinks />