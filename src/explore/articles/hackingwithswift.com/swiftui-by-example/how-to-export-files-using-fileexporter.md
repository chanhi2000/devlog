---
lang: ko-KR
title: How to export files using fileExporter()
description: Article(s) > How to export files using fileExporter()
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
      content: Article(s) > How to export files using fileExporter()
    - property: og:description
      content: How to export files using fileExporter()
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-export-files-using-fileexporter.html
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftUI by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/README.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to export files using fileExporter() | SwiftUI by Example",
  "desc": "How to export files using fileExporter()",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-export-files-using-fileexporter",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI has a `fileExporter()` modifier that lets us export files from our app to anywhere the user wants – any folder in iCloud, or on their local device.

Using it takes several steps, because you must first have created a document type that your app is able to work with. I’m going to presume you’ve already done that so we can focus on `fileExporter()`, but if you **haven’t** already created a document type see the end of this article – I’ll provide an example there.

First, you need some state to track when you want the exporter UI to show or not. This is a simple Boolean, so you’d use something like this:

```swift
@State private var showingExporter = false
```

The next step is to add the `fileExporter()` modifier somewhere to your view hierarchy, passing in the Boolean state you just created, the document you want to export, and content type the document has.

Helpfully, the document parameter is **optional**, so you don’t need to have this set at all times. However, in order for the exporter UI to appear the document must be set **and** your state Boolean must have be true – you need both.

When the export operation completes, the file exporter will run a callback function of your choosing, passing in a `Result` object that either contains the URL where the file was saved or an error.

So, you would add this kind of modifier to your view hierarchy:

```swift
.fileExporter(isPresented: $showingExporter, document: yourDocument, contentType: .plainText) { result in
    switch result {
    case .success(let url):
        print("Saved to \(url)")
    case .failure(let error):
        print(error.localizedDescription)
    }
}
```

::: note

I used `.plainText` for my content type, but that should match one of the content types you’ve set on your document type.

:::

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-export-files-using-fileexporter-1~dark.mp4" />

That’s all it takes to export a file, but just in case you’re missing this I want to provide an example document type that can be used here. 

First, you’ll need to add a new import so that you can declare which content types your document can be used as:

```swift
import UniformTypeIdentifiers
```

And now you need to create some sort of type that conforms to the `FileDocument` protocol. This doesn’t take much, but you do need to tell SwiftUI how to load and save files, and also give it an initializer able to create new instances as needed.

Here’s an example, with comments to explain what it all does:

```swift
struct TextFile: FileDocument {
    // tell the system we support only plain text
    static var readableContentTypes = [UTType.plainText]

    // by default our document is empty
    var text = ""

    // a simple initializer that creates new, empty documents
    init(initialText: String = "") {
        text = initialText
    }

    // this initializer loads data that has been saved previously
    init(configuration: ReadConfiguration) throws {
        if let data = configuration.file.regularFileContents {
            text = String(decoding: data, as: UTF8.self)
        }
    }

    // this will be called when the system wants to write our data to disk
    func fileWrapper(configuration: WriteConfiguration) throws -> FileWrapper {
        let data = Data(text.utf8)
        return FileWrapper(regularFileWithContents: data)
    }
}
```

::: details Similar solutions…

```component VPCard
{
  "title": "How to create multi-column lists using Table | SwiftUI by Example",
  "desc": "How to create multi-column lists using Table",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-multi-column-lists-using-table.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to add advanced text styling using AttributedString | SwiftUI by Example",
  "desc": "How to add advanced text styling using AttributedString",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-advanced-text-styling-using-attributedstring.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "SwiftUI tips and tricks | SwiftUI by Example",
  "desc": "SwiftUI tips and tricks",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tips-and-tricks.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to convert a SwiftUI view to an image | SwiftUI by Example",
  "desc": "How to convert a SwiftUI view to an image",
  "link": "/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-convert-a-swiftui-view-to-an-image.md",
  "logo": "https://www.hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />