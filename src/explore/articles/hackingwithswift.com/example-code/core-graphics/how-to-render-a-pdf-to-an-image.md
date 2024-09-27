---
lang: ko-KR
title: "How to render a PDF to an image"
description: "Article(s) > How to render a PDF to an image"
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
  - ios-3.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to render a PDF to an image"
    - property: og:description
      content: "How to render a PDF to an image"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/core-graphics/how-to-render-a-pdf-to-an-image.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Core Graphics - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/core-graphics/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to render a PDF to an image | Core Graphics - free Swift example code",
  "desc": "How to render a PDF to an image",
  "link": "https://hackingwithswift.com/example-code/core-graphics/how-to-render-a-pdf-to-an-image",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.0

<!-- TODO: 작성 -->

<!-- 
iOS has built-in APIs for drawing PDFs, which means it's relatively straight forward to render a PDF to an image. I say "relatively" because there's still some boilerplate you need to worry about: figuring out the document size, filling the background in a solid color to avoid transparency, and flipping the rendering so that the PDF draws the right way up.

To make things easy for you, here's a pre-made method you can use that takes a URL to a PDF and returns either a rendered image or nil if it failed. To call it you should pull out the URL to a resource in your bundle or another local PDF file.

```swift
func drawPDFfromURL(url: URL) -> UIImage? {
    guard let document = CGPDFDocument(url as CFURL) else { return nil }
    guard let page = document.page(at: 1) else { return nil }

    let pageRect = page.getBoxRect(.mediaBox)
    let renderer = UIGraphicsImageRenderer(size: pageRect.size)
    let img = renderer.image { ctx in
        UIColor.white.set()
        ctx.fill(pageRect)

        ctx.cgContext.translateBy(x: 0.0, y: pageRect.size.height)
        ctx.cgContext.scaleBy(x: 1.0, y: -1.0)

        ctx.cgContext.drawPDFPage(page)
    }

    return img
}
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-render-a-swiftui-view-to-a-pdf">How to render a SwiftUI view to a PDF 
/example-code/uikit/how-to-render-an-nsattributedstring-to-a-pdf">How to render an NSAttributedString to a PDF 
/example-code/libraries/how-to-show-pdf-thumbnails-using-pdfthumbnailview">How to show PDF thumbnails using PDFThumbnailView 
/example-code/libraries/how-to-extract-text-from-a-pdf-using-pdfkit">How to extract text from a PDF using PDFKit 
/example-code/uikit/how-to-render-pdfs-using-uigraphicspdfrenderer">How to render PDFs using UIGraphicsPDFRenderer</a>
-->

:::

---

<TagLinks />