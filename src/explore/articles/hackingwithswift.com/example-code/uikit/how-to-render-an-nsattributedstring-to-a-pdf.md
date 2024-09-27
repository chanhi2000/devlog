---
lang: ko-KR
title: "How to render an NSAttributedString to a PDF"
description: "Article(s) > How to render an NSAttributedString to a PDF"
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
  - ios-4.2
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to render an NSAttributedString to a PDF"
    - property: og:description
      content: "How to render an NSAttributedString to a PDF"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-render-an-nsattributedstring-to-a-pdf.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIKit - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uikit/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to render an NSAttributedString to a PDF | UIKit - free Swift example code",
  "desc": "How to render an NSAttributedString to a PDF",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-render-an-nsattributedstring-to-a-pdf",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.2

<!-- TODO: 작성 -->

<!--
Attributed strings contain all the formatting they need to go straight to images, PDFs, and other visual output, although it does take a little setup to get a good PDF out.

First, create your attributed string:

```swift
let attributedString = NSAttributedString(string: "This is a test", attributes: [NSAttributedString.Key.foregroundColor: UIColor.red])
```

Next, wrap that inside a `UISimpleTextPrintFormatter`, which is responsible for layout out that string over as many pages as needed:

```swift
let printFormatter = UISimpleTextPrintFormatter(attributedText: attributedString)
```

You can then put that formatter inside a page renderer, telling it to start printing at page 0:

```swift
let renderer = UIPrintPageRenderer()
renderer.addPrintFormatter(printFormatter, startingAtPageAt: 0)
```

Next you need to define a few sizes: how big your paper size is, along with what margins you want.

```swift
// A4 size
let pageSize = CGSize(width: 595.2, height: 841.8)

// Use this to get US Letter size instead
// let pageSize = CGSize(width: 612, height: 792)

// create some sensible margins
let pageMargins = UIEdgeInsets(top: 72, left: 72, bottom: 72, right: 72)

// calculate the printable rect from the above two
let printableRect = CGRect(x: pageMargins.left, y: pageMargins.top, width: pageSize.width - pageMargins.left - pageMargins.right, height: pageSize.height - pageMargins.top - pageMargins.bottom)

// and here's the overall paper rectangle
let paperRect = CGRect(x: 0, y: 0, width: pageSize.width, height: pageSize.height)
```

You can now pass the paper and printable rectangles to the page renderer, like this:

```swift
renderer.setValue(NSValue(cgRect: paperRect), forKey: "paperRect")
renderer.setValue(NSValue(cgRect: printableRect), forKey: "printableRect")
```

The next step is to create an empty instance of `NSMutableData`, then ask UIKit to render into that data object:

```swift
let pdfData = NSMutableData()

UIGraphicsBeginPDFContextToData(pdfData, paperRect, nil)
renderer.prepare(forDrawingPages: NSMakeRange(0, renderer.numberOfPages))
```

Now all that remains is to render draw each page into the bounds of the PDF context, like this:

```swift
let bounds = UIGraphicsGetPDFContextBounds()

for i in 0  ..< renderer.numberOfPages {
    UIGraphicsBeginPDFPage()

    renderer.drawPage(at: i, in: bounds)
}

UIGraphicsEndPDFContext()
```

At this point your `pdfData` value contains the finished PDF, so you can write it wherever you want:

```swift
do {
    try pdfData.write(to: yourURL)
} catch {
    print(error.localizedDescription)
}
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-render-a-swiftui-view-to-a-pdf">How to render a SwiftUI view to a PDF 
/example-code/core-graphics/how-to-render-a-pdf-to-an-image">How to render a PDF to an image 
/example-code/libraries/how-to-show-pdf-thumbnails-using-pdfthumbnailview">How to show PDF thumbnails using PDFThumbnailView 
/example-code/libraries/how-to-extract-text-from-a-pdf-using-pdfkit">How to extract text from a PDF using PDFKit 
/example-code/system/how-to-convert-html-to-an-nsattributedstring">How to convert HTML to an NSAttributedString</a>
-->

:::

---

<TagLinks />