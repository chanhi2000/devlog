---
lang: ko-KR
title: "How to extract text from a PDF using PDFKit"
description: "Article(s) > How to extract text from a PDF using PDFKit"
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
      content: "Article(s) > How to extract text from a PDF using PDFKit"
    - property: og:description
      content: "How to extract text from a PDF using PDFKit"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/libraries/how-to-extract-text-from-a-pdf-using-pdfkit.html
date: 2021-06-21
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
  "title": "How to extract text from a PDF using PDFKit | Libraries - free Swift example code",
  "desc": "How to extract text from a PDF using PDFKit",
  "link": "https://hackingwithswift.com/example-code/libraries/how-to-extract-text-from-a-pdf-using-pdfkit",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!-- 
PDFKit comes with a built-in class called `PDFDocument`, which allows us to load and parse PDF documents. It’s used when you want to put your PDF into a `PDFView`, but it’s also useful when you just want to read text from the PDF: you can loop over each page in the PDF, read its `attributedString` property, then append it to an attributed string containing all the text from the PDF.

First, add `import PDFKit` in the Swift file you’re using, then add the following example code to read out the text contents of a file:

```swift
if let pdf = PDFDocument(url: yourDocumentURL) {
    let pageCount = pdf.pageCount
    let documentContent = NSMutableAttributedString()

    for i in 0 ..< pageCount {
        guard let page = pdf.page(at: i) else { continue }
        guard let pageContent = page.attributedString else { continue }
        documentContent.append(pageContent)
    }
}
```

It’s an *attributed* string, so it will retain formatting from the PDF as best as it can.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-render-a-swiftui-view-to-a-pdf">How to render a SwiftUI view to a PDF 
/example-code/libraries/how-to-show-pdf-thumbnails-using-pdfthumbnailview">How to show PDF thumbnails using PDFThumbnailView 
/example-code/core-graphics/how-to-render-a-pdf-to-an-image">How to render a PDF to an image 
/example-code/uikit/how-to-render-an-nsattributedstring-to-a-pdf">How to render an NSAttributedString to a PDF 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a>
-->

:::

---

<TagLinks />