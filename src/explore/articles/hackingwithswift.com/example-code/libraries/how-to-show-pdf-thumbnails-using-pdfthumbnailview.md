---
lang: ko-KR
title: "How to show PDF thumbnails using PDFThumbnailView"
description: "Article(s) > How to show PDF thumbnails using PDFThumbnailView"
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
      content: "Article(s) > How to show PDF thumbnails using PDFThumbnailView"
    - property: og:description
      content: "How to show PDF thumbnails using PDFThumbnailView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/libraries/how-to-show-pdf-thumbnails-using-pdfthumbnailview.html
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
  "title": "How to show PDF thumbnails using PDFThumbnailView | Libraries - free Swift example code",
  "desc": "How to show PDF thumbnails using PDFThumbnailView",
  "link": "https://hackingwithswift.com/example-code/libraries/how-to-show-pdf-thumbnails-using-pdfthumbnailview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!-- 
Apple’s PDFKit framework provides a huge range of code to help us work with PDFs, including a dedicated view for rendering thumbnails of PDF pages: `PDFThumbnailView`. However, using it takes a little extra work because it doesn’t read PDF directly – you first load the PDF into a `PDFView`, then connect *that* to the thumbnail view.

To try it out, start by importing the PDFKit framework:

```swift
import PDFKit
```

Next, add this code to your `viewDidLoad()` method to create a `PDFView` and make it pin to the top, left, and right edges of your view:

```swift
let pdfView = PDFView()

pdfView.translatesAutoresizingMaskIntoConstraints = false
view.addSubview(pdfView)

pdfView.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor).isActive = true
pdfView.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor).isActive = true
pdfView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor).isActive = true
```

Third, create a `PDFThumbnailView` and pin to the bottom, left, and right edges of your view controller:

```swift
let thumbnailView = PDFThumbnailView()
thumbnailView.translatesAutoresizingMaskIntoConstraints = false
view.addSubview(thumbnailView)

thumbnailView.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor).isActive = true
thumbnailView.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor).isActive = true
thumbnailView.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor).isActive = true
```

We need the PDF view and PDF thumbnail view to share the space, so we’re going to make the limit the thumbnail to 120 points of height, with the PDF view taking up the rest of the space:

```swift
pdfView.bottomAnchor.constraint(equalTo: thumbnailView.topAnchor).isActive = true
thumbnailView.heightAnchor.constraint(equalToConstant: 120).isActive = true
```

`PDFThumbnailView` has a few interesting properties to set, of which the most important are the size of the thumbnails and the direction they should be born:

```swift
thumbnailView.thumbnailSize = CGSize(width: 100, height: 100)
thumbnailView.layoutMode = .horizontal
```

Now we just need to connect the two views together so that changing one also changes the other:

```swift
thumbnailView.pdfView = pdfView
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
/quick-start/swiftui/how-to-render-a-swiftui-view-to-a-pdf">How to render a SwiftUI view to a PDF 
/example-code/libraries/how-to-extract-text-from-a-pdf-using-pdfkit">How to extract text from a PDF using PDFKit 
/example-code/core-graphics/how-to-render-a-pdf-to-an-image">How to render a PDF to an image 
/example-code/uikit/how-to-render-an-nsattributedstring-to-a-pdf">How to render an NSAttributedString to a PDF 
/quick-start/swiftui/how-to-show-an-alert">How to show an alert</a>
-->

:::

---

<TagLinks />