---
lang: ko-KR
title: "How to create a QR code"
description: "Article(s) > How to create a QR code"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to create a QR code"
    - property: og:description
      content: "How to create a QR code"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-create-a-qr-code.html
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
  "title": "How to create a QR code | Media - free Swift example code",
  "desc": "How to create a QR code",
  "link": "https://hackingwithswift.com/example-code/media/how-to-create-a-qr-code",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
iOS has a built-in QR code generator, but it's a bit tricksy to use because it's exposed as a Core Image filter that needs various settings to be applied. Also, it generates codes where every bit is just one pixel across, which looks terrible if you try to stretch it inside an image view.

So, here's a simple function that wraps up QR code generation while also scaling up the QR code so it's a respectable size:

```swift
func generateQRCode(from string: String) -> UIImage? {
    let data = string.data(using: String.Encoding.ascii)

    if let filter = CIFilter(name: "CIQRCodeGenerator") {
        filter.setValue(data, forKey: "inputMessage")
        let transform = CGAffineTransform(scaleX: 3, y: 3)

        if let output = filter.outputImage?.transformed(by: transform) {
            return UIImage(ciImage: output)
        }
    }

    return nil
}

let image = generateQRCode(from: "Hacking with Swift is the best iOS coding tutorial I've ever read!")
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts 
/example-code/uikit/how-to-make-your-user-interface-in-code">How to make your user interface in code 
/example-code/uikit/how-to-add-drag-and-drop-to-your-app">How to add drag and drop to your app 
/quick-start/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue">How to use @MainActor to run code on the main queue</a>
-->

:::

---

<TagLinks />