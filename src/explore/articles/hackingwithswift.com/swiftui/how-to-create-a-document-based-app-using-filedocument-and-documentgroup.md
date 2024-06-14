---
lang: ko-KR
title: How to create a document-based app using FileDocument and DocumentGroup
description: Article(s) > How to create a document-based app using FileDocument and DocumentGroup
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
      content: Article(s) > How to create a document-based app using FileDocument and DocumentGroup
    - property: og:description
      content: How to create a document-based app using FileDocument and DocumentGroup
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftui/how-to-create-a-document-based-app-using-filedocument-and-documentgroup.html
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
  "title": "How to create a document-based app using FileDocument and DocumentGroup | SwiftUI by Example",
  "desc": "How to create a document-based app using FileDocument and DocumentGroup",
  "link": "https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-document-based-app-using-filedocument-and-documentgroup",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI comes with support for document-based apps, which are apps that let users create, edit, and share documents such as text files. In SwiftUI we’re given two main types to work with: the `FileDocument` protocol to define what a document in our app looks like, and the `DocumentGroup` struct that gives us a default scene to let users create, open, and save documents.

Creating your own document-based app takes four steps:

1. Defining what your document is, including how it should be saved and loaded.
2. Creating some sort of view that lets users edit their documents.
3. Creating a `DocumentGroup` capable of creating your files and loading them into your user interface.
4. Updating your Info.plist file to say that you want to use the system’s document browser.

We’ll work through each of those here, starting with defining what your document is. Some document types save multiple files of different types, but for now we’re going to say that we support only plain text, and we want that text to be read and written directly to disk.

First, add `import UniformTypeIdentifiers` to the top of your Swift file, so you can bring in uniform type identifiers – a fixed way of saying what data types your document can work with.

Now add this struct, defining a simple text file:

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
        } else {
            throw CocoaError(.fileReadCorruptFile)
        }
    }

    // this will be called when the system wants to write our data to disk
    func fileWrapper(configuration: WriteConfiguration) throws -> FileWrapper {
        let data = Data(text.utf8)
        return FileWrapper(regularFileWithContents: data)
    }
}
```

Notice how in the `fileWrapper(configuration:)` method we convert our text string into a `Data` instance, then save that using a `FileWrapper`. It’s not our job to say where the file should be stored –  iOS takes care of that for us.

Our second task is to create some sort of editor area where the user can edit our text. This should use an `@Binding` property wrapper so that it updates the text in our `TextFile` struct rather than keeping its own local copy:

```swift
struct ContentView: View {
    @Binding var document: TextFile

    var body: some View {
        TextEditor(text: $document.text)
    }
}
```

Our third step is to edit the main Swift file for the project to include a `DocumentGroup`, which presents the system-standard interface for browsing, opening, and creating files:

```swift
@main
struct YourAwesomeApp: App {
    var body: some Scene {
        DocumentGroup(newDocument: TextFile()) { file in
            ContentView(document: file.$document)
        }
    }
}
```

As you can see, that tells iOS how to create new files, and also how to show them.

Finally, we need to add a new key to Info.plist, so open that now, right-click in some space, and choose Add Row. For the key name enter “Supports Document Browser”, make sure Type is set to Boolean, then set the value to YES.

![The Info.plist file with “Supports Document Browser” set to YES.](https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-document-based-app-using-filedocument-and-documentgroup-1~dark@2x.png)

That’s it! Your document-based app is ready to go. If you run your app back now you’ll see the standard iOS document picker interface, and if you press + iOS will create a new file and open it for editing in `ContentView` –  nice!

<VidStack src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-document-based-app-using-filedocument-and-documentgroup-2~dark.mp4" />

::: details Similar solutions…

```component VPCard
{
  "title": "All SwiftUI property wrappers explained and compared | SwiftUI by Example",
  "desc": "All SwiftUI property wrappers explained and compared",
  "link": "/explore/articles/hackingwithswift.com/swiftui/all-swiftui-property-wrappers-explained-and-compared.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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
  "title": "How to use Instruments to profile your SwiftUI code and identify slow layouts | SwiftUI by Example",
  "desc": "How to use Instruments to profile your SwiftUI code and identify slow layouts",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Building a menu using List | SwiftUI by Example",
  "desc": "Building a menu using List",
  "link": "/explore/articles/hackingwithswift.com/swiftui/building-a-menu-using-list.html",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create multi-column lists using Table | SwiftUI by Example",
  "desc": "How to create multi-column lists using Table",
  "link": "/explore/articles/hackingwithswift.com/swiftui/how-to-create-multi-column-lists-using-table.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />