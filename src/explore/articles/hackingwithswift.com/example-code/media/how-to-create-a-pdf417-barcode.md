---
lang: ko-KR
title: "How to create a PDF417 barcode"
description: "Article(s) > How to create a PDF417 barcode"
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
      content: "Article(s) > How to create a PDF417 barcode"
    - property: og:description
      content: "How to create a PDF417 barcode"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-create-a-pdf417-barcode.html
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
  "title": "How to create a PDF417 barcode | Media - free Swift example code",
  "desc": "How to create a PDF417 barcode",
  "link": "https://hackingwithswift.com/example-code/media/how-to-create-a-pdf417-barcode",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!-- 
PDF417 barcodes - most frequently seen on boarding passes at airports, but also seen in digital postage stamps and other places – are built right into iOS. This function below accepts a string as its only parameter and returns a `UIImage` containing the PDF417 barcode representing that string:

```swift
func generatePDF417Barcode(from string: String) -> UIImage? {
    let data = string.data(using: String.Encoding.ascii)

    if let filter = CIFilter(name: "CIPDF417BarcodeGenerator") {
        filter.setValue(data, forKey: "inputMessage")
        let transform = CGAffineTransform(scaleX: 3, y: 3)

        if let output = filter.outputImage?.transformed(by: transform) {
            return UIImage(ciImage: output)
        }
    }

    return nil
}

let image = generatePDF417Barcode(from: "Hacking with Swift")
```

-->

::: details Similar solutions…

<!--
/example-code/media/how-to-create-a-barcode">How to create a barcode 
/example-code/media/how-to-scan-a-barcode">How to scan a barcode 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a>
-->

:::

---

<TagLinks />