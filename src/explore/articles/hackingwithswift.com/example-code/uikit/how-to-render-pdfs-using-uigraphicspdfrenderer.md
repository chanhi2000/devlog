---
lang: ko-KR
title: "How to render PDFs using UIGraphicsPDFRenderer"
description: "Article(s) > How to render PDFs using UIGraphicsPDFRenderer"
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
  - ios-10.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to render PDFs using UIGraphicsPDFRenderer"
    - property: og:description
      content: "How to render PDFs using UIGraphicsPDFRenderer"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-render-pdfs-using-uigraphicspdfrenderer.html
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
  "title": "How to render PDFs using UIGraphicsPDFRenderer | UIKit - free Swift example code",
  "desc": "How to render PDFs using UIGraphicsPDFRenderer",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-render-pdfs-using-uigraphicspdfrenderer",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 10.0

<!-- TODO: 작성 -->

<!--
UIKit comes with a built-in class for rendering PDFs, and you can render strings, attributed strings, images, and more right to PDF pages. To get started, just create an instance of `UIGraphicsPDFRenderer` with the paper size you want, then call its `pdfData()` method and pass in your drawing instructions. You get back a `Data` object, which you can then write to disk however you want.

Let’s work through some example code so you can try it out. First, pick a paper size:

```swift
// A4 size
let pageRect = CGRect(x: 0, y: 0, width: 595.2, height: 841.8)

// Use this to get US Letter size instead
// let pageRect = CGRect(x: 0, y: 0, width: 612, height: 792)
```

Next, use that size to create a `UIGraphicsPDFRenderer`:

```swift
let renderer = UIGraphicsPDFRenderer(bounds: pageRect)
```

Third, decide what you want to render. I’m going to render some attributed text as if we were printing an essay:

```swift
let title = "School report\n"
let text = String(repeating: "This is an important report about the weather. ", count: 20)

let titleAttributes = [NSAttributedString.Key.font: UIFont.boldSystemFont(ofSize: 36)]
let textAttributes = [NSAttributedString.Key.font: UIFont.systemFont(ofSize: 12)]

let formattedTitle = NSMutableAttributedString(string: title, attributes: titleAttributes)
let formattedText = NSAttributedString(string: text, attributes: textAttributes)
formattedTitle.append(formattedText)
```

Once you have your content ready, call `pdfData()` on your renderer, begin a new page, then render as much as you want:

```swift
let data = renderer.pdfData { ctx in
    ctx.beginPage()

    formattedTitle.draw(in: pageRect.insetBy(dx: 50, dy: 50))
}
```

As you can see, I’ve inset my formatted text by 50 points on all side, which should be enough to allow printers to print it accurately.

Finally, save `data` somewhere as your finished PDF file.

-->

::: details Similar solutions…

<!--
/example-code/libraries/how-to-watermark-pdfs-inside-a-pdfview">How to watermark PDFs inside a PDFView 
/example-code/libraries/how-to-display-pdfs-using-pdfview">How to display PDFs using PDFView 
/quick-start/swiftui/how-to-render-a-swiftui-view-to-a-pdf">How to render a SwiftUI view to a PDF 
/example-code/uikit/how-to-render-shadows-using-nsshadow-and-setshadow">How to render shadows using NSShadow and setShadow() 
/quick-start/swiftui/how-to-render-images-using-sf-symbols">How to render images using SF Symbols</a>
-->

:::

---

<TagLinks />