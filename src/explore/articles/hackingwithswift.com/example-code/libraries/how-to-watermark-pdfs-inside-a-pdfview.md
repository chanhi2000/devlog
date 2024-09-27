---
lang: ko-KR
title: "How to watermark PDFs inside a PDFView"
description: "Article(s) > How to watermark PDFs inside a PDFView"
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
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to watermark PDFs inside a PDFView"
    - property: og:description
      content: "How to watermark PDFs inside a PDFView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/libraries/how-to-watermark-pdfs-inside-a-pdfview.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Libraries - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/libraries/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to watermark PDFs inside a PDFView | Libraries - free Swift example code",
  "desc": "How to watermark PDFs inside a PDFView",
  "link": "https://hackingwithswift.com/example-code/libraries/how-to-watermark-pdfs-inside-a-pdfview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
PDFKit makes it easy to watermark PDFs as they are rendered, for example to add “FREE SAMPLE” over pages. It takes six steps, five of which are trivial and one which involves a little Core Graphics heavy lifting.

Let’s get the easy stuff out of the way:

1. Create a new Cocoa Touch Class called “SampleWatermark”, making it a subclass of `PDFPage`.
<li>Add `import PDFKit` to the top of the new file.
<li>Open whichever view controller owns your `PDFView` and make the `ViewController` class conform to the `PDFDocumentDelegate` protocol.
<li>Find the code where you load your document (something like `pdfView.document = document`) then insert this directly before: `document.delegate = self`. That means the document will ask your view controller what class it should use to render pages.
<li>Finally, we need to add a new method to the view controller to tell it to use the `SampleWatermark` class for its pages.

Add this method to your view controller now:

```swift
func classForPage() -> AnyClass {
    return SampleWatermark.self
}
```

What we’ve just done is create a new `PDFPage` subclass that will handle watermark rendering, then tell our `PDFDocument` to use it for all pages. We haven’t given the `SampleWatermark` class any code yet, which means it will look just like a regular page – we’re going to fix that now.

When doing custom PDF rendering there are a few things to know:

1. If you draw your content before calling `super.draw()`, your content will appear behind the page content. That might be what you want, but we’ll be doing the opposite here.
2. You’re given a graphics context to draw into, but you should tread carefully: save the context and its state before you make any changes, then restore them afterwards.
3. PDFs have a variety of drawing boxes that determine how things are displayed. We don’t care which one is used, but we do need to ask PDFKit to tell us the page bounds for that box so we know how to position our text.
4. UIKit and PDFs draw in different directions, but you can correct that by moving the drawing position down by the height of the document then flipping its Y axis.

We’re going to write the words “FREE SAMPLE” in red, centered near the top of each page using a bold font. Add this method to <FontIcon icon="fa-brands fa-swift"/>`SampleWatermark.swift`:

```swift
override func draw(with box: PDFDisplayBox, to context: CGContext) {
    super.draw(with: box, to: context)

    let string: NSString = "FREE SAMPLE"
    let attributes: [NSAttributedString.Key: Any] = [.foregroundColor: UIColor.red, .font: UIFont.boldSystemFont(ofSize: 32)]
    let stringSize = string.size(withAttributes: attributes)

    UIGraphicsPushContext(context)
    context.saveGState()

    let pageBounds = bounds(for: box)
    context.translateBy(x: (pageBounds.size.width - stringSize.width) / 2, y: pageBounds.size.height)
    context.scaleBy(x: 1.0, y: -1.0)

    string.draw(at: CGPoint(x: 0, y: 55), withAttributes: attributes)

    context.restoreGState()
    UIGraphicsPopContext()
}
```

If everything went well you should now see “FREE SAMPLE” emblazoned across every page of your PDF.

-->

::: details Similar solutions…

<!--
/example-code/libraries/how-to-display-pdfs-using-pdfview">How to display PDFs using PDFView 
/example-code/uikit/how-to-render-pdfs-using-uigraphicspdfrenderer">How to render PDFs using UIGraphicsPDFRenderer 
/example-code/libraries/how-to-show-pdf-thumbnails-using-pdfthumbnailview">How to show PDF thumbnails using PDFThumbnailView 
/example-code/uikit/how-to-find-an-aspect-fit-images-size-inside-an-image-view">How to find an aspect fit image’s size inside an image view 
/quick-start/swiftui/how-to-draw-a-border-inside-a-view">How to draw a border inside a view</a>
-->

:::

---

<TagLinks />