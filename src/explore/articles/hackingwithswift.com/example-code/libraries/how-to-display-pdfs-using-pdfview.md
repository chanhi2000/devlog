---
lang: ko-KR
title: "How to display PDFs using PDFView"
description: "Article(s) > How to display PDFs using PDFView"
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
  - ios-11.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to display PDFs using PDFView"
    - property: og:description
      content: "How to display PDFs using PDFView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/libraries/how-to-display-pdfs-using-pdfview.html
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
  "title": "How to display PDFs using PDFView | Libraries - free Swift example code",
  "desc": "How to display PDFs using PDFView",
  "link": "https://hackingwithswift.com/example-code/libraries/how-to-display-pdfs-using-pdfview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!-- 
Apple’s PDFKit framework provides a huge range of code to help us work with PDFs, and one of the most useful is `PDFView` – it renders PDFs to the screen and lets users interact with them.

To try it out, start by importing the PDFKit framework:

```swift
import PDFKit
```

Next, add this code to your `viewDidLoad()` method to create a `PDFView` and make it fill all available space:

```swift
let pdfView = PDFView()

pdfView.translatesAutoresizingMaskIntoConstraints = false
view.addSubview(pdfView)

pdfView.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor).isActive = true
pdfView.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor).isActive = true
pdfView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor).isActive = true
pdfView.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor).isActive = true
```

Finally, create a `URL` pointing to a PDF you have in your bundle somewhere (or one in your documents directory), then create a `PDFDocument` object from that and pass it to the PDF view:

```swift
guard let path = Bundle.main.url(forResource: "example", withExtension: "pdf") else { return }

if let document = PDFDocument(url: path) {
    pdfView.document = document
}
```

Done!

-->

::: details Similar solutions…

<!--
/example-code/libraries/how-to-watermark-pdfs-inside-a-pdfview">How to watermark PDFs inside a PDFView 
/example-code/uikit/how-to-render-pdfs-using-uigraphicspdfrenderer">How to render PDFs using UIGraphicsPDFRenderer 
/example-code/libraries/how-to-show-pdf-thumbnails-using-pdfthumbnailview">How to show PDF thumbnails using PDFThumbnailView 
/quick-start/swiftui/how-to-customize-the-display-mode-of-navigationsplitview">How to customize the display mode of NavigationSplitView 
/example-code/strings/how-to-display-different-strings-based-on-available-space-using-variantfittingpresentationwidth">How to display different strings based on available space using variantFittingPresentationWidth()</a>
-->

:::

---

<TagLinks />