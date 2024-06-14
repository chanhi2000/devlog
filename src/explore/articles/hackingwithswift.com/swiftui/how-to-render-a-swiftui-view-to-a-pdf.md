---
lang: ko-KR
title: How to render a SwiftUI view to a PDF
description: Article(s) > How to render a SwiftUI view to a PDF
category:
  - Swift
  - SwiftUI
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swiftui
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to render a SwiftUI view to a PDF
    - property: og:description
      content: How to render a SwiftUI view to a PDF
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-render-a-swiftui-view-to-a-pdf.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
   "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to render a SwiftUI view to a PDF | SwiftUI by Example",
  "desc": "How to render a SwiftUI view to a PDF",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-render-a-swiftui-view-to-a-pdf",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

**New in iOS 16**

SwiftUI’s `ImageRenderer` class can render views any SwiftUI views to PDFs, and yes: all the text and shapes remain vectors, so they scale up beautifully.

Creating a PDF with `ImageRenderer` takes eight steps:

1. Deciding which views you want to render.
2. Creating a URL where SwiftUI can write the image data.
3. Calling `render()` on the image renderer to start your rendering code.
4. Telling SwiftUI how big you want the PDF to be. This might be a fixed size like A4 or US Letter, or might be the size of the view hierarchy you’re rendering.
5. Create a `CGContext` object to handle the PDF pages.
6. Starting a new page.
7. Rendering the SwiftUI views onto that page.
8. Ending the page and closing the PDF document.

Once that finishes the PDF URL is yours to do with as you please.

I know that sounds like a lot of work, but the total amount of code isn’t so bad. Here’s a complete example that renders a view to a PDF to be exported using `ShareLink`, with comments matching the explanation above:

```swift
@MainActor
struct ContentView: View {
    var body: some View {
        ShareLink("Export PDF", item: render())
    }

    func render() -> URL {
        // 1: Render Hello World with some modifiers
        let renderer = ImageRenderer(content:
            Text("Hello, world!")
                .font(.largeTitle)
                .foregroundStyle(.white)
                .padding()
                .background(.blue)
                .clipShape(Capsule())
        )

        // 2: Save it to our documents directory
        let url = URL.documentsDirectory.appending(path: "output.pdf")

        // 3: Start the rendering process
        renderer.render { size, context in
            // 4: Tell SwiftUI our PDF should be the same size as the views we're rendering
            var box = CGRect(x: 0, y: 0, width: size.width, height: size.height)

            // 5: Create the CGContext for our PDF pages
            guard let pdf = CGContext(url as CFURL, mediaBox: &box, nil) else {
                return
            }

            // 6: Start a new PDF page
            pdf.beginPDFPage(nil)

            // 7: Render the SwiftUI view data onto the page
            context(pdf)

            // 8: End the page and close the file
            pdf.endPDFPage()
            pdf.closePDF()
        }

        return url
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/swiftui/how-to-render-a-swiftui-view-to-a-pdf-1.zip)

::: details Similar solutions…

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui/swiftui-tips-and-tricks.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to convert a SwiftUI view to an image | SwiftUI by Example",
  "desc": "How to convert a SwiftUI view to an image",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-convert-a-swiftui-view-to-an-image.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to render Markdown content in text | SwiftUI by Example",
  "desc": "How to render Markdown content in text",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-render-markdown-content-in-text.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to render a gradient | SwiftUI by Example",
  "desc": "How to render a gradient",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-render-a-gradient.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to render images using SF Symbols | SwiftUI by Example",
  "desc": "How to render images using SF Symbols",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-render-images-using-sf-symbols.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::


---

<TagLinks />