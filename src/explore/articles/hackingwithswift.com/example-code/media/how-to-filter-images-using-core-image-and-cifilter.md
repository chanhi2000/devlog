---
lang: ko-KR
title: "How to filter images using Core Image and CIFilter"
description: "Article(s) > How to filter images using Core Image and CIFilter"
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
      content: "Article(s) > How to filter images using Core Image and CIFilter"
    - property: og:description
      content: "How to filter images using Core Image and CIFilter"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-filter-images-using-core-image-and-cifilter.html
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
  "title": "How to filter images using Core Image and CIFilter | Media - free Swift example code",
  "desc": "How to filter images using Core Image and CIFilter",
  "link": "https://hackingwithswift.com/example-code/media/how-to-filter-images-using-core-image-and-cifilter",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!-- 
Core Image is the one of the most powerful frameworks available to iOS developers: it makes hardware-accelerated image manipulation ridiculously easy, which means you get to add powerful graphical effects to your apps and games with very little work.

Most of the work is done by choosing the right `CIFilter`. Apple's official documentation goes into great detail about the various filters you can use, and you can also read <a href="/read/13/overview">Hacking with Swift project 13</a> for a hands-on tutorial showing off various effects. The code below applies a 50% sepia tone effect to an image:

```swift
let inputImage = UIImage(named: "taylor-swift")!
let context = CIContext(options: nil)

if let currentFilter = CIFilter(name: "CISepiaTone") {
    let beginImage = CIImage(image: inputImage)
    currentFilter.setValue(beginImage, forKey: kCIInputImageKey)
    currentFilter.setValue(0.5, forKey: kCIInputIntensityKey)

    if let output = currentFilter.outputImage {
        if let cgimg = context.createCGImage(output, from: output.extent) {
            let processedImage = UIImage(cgImage: cgimg)
            // do something interesting with the processed image
        }
    }
}
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource 
/quick-start/concurrency/how-to-manipulate-an-asyncsequence-using-map-filter-and-more">How to manipulate an AsyncSequence using map(), filter(), and more</a>
-->

:::

---

<TagLinks />