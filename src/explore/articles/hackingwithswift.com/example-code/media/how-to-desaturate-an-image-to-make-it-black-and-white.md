---
lang: ko-KR
title: "How to desaturate an image to make it black and white"
description: "Article(s) > How to desaturate an image to make it black and white"
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
  - ios-6.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to desaturate an image to make it black and white"
    - property: og:description
      content: "How to desaturate an image to make it black and white"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-desaturate-an-image-to-make-it-black-and-white.html
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
  "title": "How to desaturate an image to make it black and white | Media - free Swift example code",
  "desc": "How to desaturate an image to make it black and white",
  "link": "https://hackingwithswift.com/example-code/media/how-to-desaturate-an-image-to-make-it-black-and-white",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 6.0

<!-- TODO: 작성 -->

<!-- 
One of the most useful filters to have in your toolbox is called `CIColorMonochrome`, and its job is to remove the color variance from an image then tint it however you want. If you use gray as your tint color, it produces plain black and white images, but you can also use other colors to get sepia tone and other effects.

Here’s some example code to get you started:

```swift
guard let currentCGImage = yourUIImage.cgImage else { return }
let currentCIImage = CIImage(cgImage: currentCGImage)

let filter = CIFilter(name: "CIColorMonochrome")
filter?.setValue(currentCIImage, forKey: "inputImage")

// set a gray value for the tint color
filter?.setValue(CIColor(red: 0.7, green: 0.7, blue: 0.7), forKey: "inputColor")

filter?.setValue(1.0, forKey: "inputIntensity")
guard let outputImage = filter?.outputImage else { return }

let context = CIContext()

if let cgimg = context.createCGImage(outputImage, from: outputImage.extent) {
    let processedImage = UIImage(cgImage: cgimg)
    print(processedImage.size)
}
```

To make that work you’ll need a `UIImage` called `yourUIImage`, then replace the `print(processedImage.size)` line at the end with whatever you want to do with your black and white image.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource 
/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a>
-->

:::

---

<TagLinks />