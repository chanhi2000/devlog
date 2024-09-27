---
lang: ko-KR
title: "How to create a barcode"
description: "Article(s) > How to create a barcode"
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
      content: "Article(s) > How to create a barcode"
    - property: og:description
      content: "How to create a barcode"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-create-a-barcode.html
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
  "title": "How to create a barcode | Media - free Swift example code",
  "desc": "How to create a barcode",
  "link": "https://hackingwithswift.com/example-code/media/how-to-create-a-barcode",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
You can generate a string into a traditional barcode using iOS using Core Image, but you should make sure and convert your input string to a `Data` using `String.Encoding.ascii` to ensure compatibility. Here's a function you can use that wraps it all up neatly, including scaling up the barcode so it's a bit bigger:

```swift
func generateBarcode(from string: String) -> UIImage? {
    let data = string.data(using: String.Encoding.ascii)

    if let filter = CIFilter(name: "CICode128BarcodeGenerator") {
        filter.setValue(data, forKey: "inputMessage")
        let transform = CGAffineTransform(scaleX: 3, y: 3)

        if let output = filter.outputImage?.transformed(by: transform) {
            return UIImage(ciImage: output)
        }
    }

    return nil
}
```

With that method in place, you can now write code like this:

```swift
let image = generateBarcode(from: "Hacking with Swift")
```

-->

::: details Similar solutions…

<!--
/example-code/media/how-to-create-a-pdf417-barcode">How to create a PDF417 barcode 
/example-code/media/how-to-scan-a-barcode">How to scan a barcode 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a>
-->

:::

---

<TagLinks />