---
lang: ko-KR
title: "How to preview files using Quick Look and QLPreviewController"
description: "Article(s) > How to preview files using Quick Look and QLPreviewController"
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
  - ios-4.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to preview files using Quick Look and QLPreviewController"
    - property: og:description
      content: "How to preview files using Quick Look and QLPreviewController"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/libraries/how-to-preview-files-using-quick-look-and-qlpreviewcontroller.html
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
  "title": "How to preview files using Quick Look and QLPreviewController | Libraries - free Swift example code",
  "desc": "How to preview files using Quick Look and QLPreviewController",
  "link": "https://hackingwithswift.com/example-code/libraries/how-to-preview-files-using-quick-look-and-qlpreviewcontroller",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.0

<!-- TODO: 작성 -->

<!-- 
Apple’s Quick Look framework lets you embed previewing for a huge range of file types, including iWork documents, Microsoft Office documents, PDFs, images, and more, all without writing much code. 

First, import the QuickLook framework, then make your view controller conform to the `QLPreviewControllerDataSource` protocol. This protocol lets you provide items to Quick Look, which should be URLs pointing to whatever documents you’re trying to preview.

Now go ahead and create and present an instance of `QLPreviewController`, setting your view controller to be its data source:

```swift
let previewController = QLPreviewController()
previewController.dataSource = self
present(previewController, animated: true)
```

There are two methods you need to implement: how many items your Quick Look controller should show, and the URL for each item. The first of those is just a matter of returning an integer from `numberOfPreviewItems()`:

```swift
func numberOfPreviewItems(in controller: QLPreviewController) -> Int {
    return 3
}
```

Now for the important part: Quick Look will call a `previewItemAt` method for each item you want to preview, and you need to pass back a `QLPreviewItem` pointing at it.

For this example I added three PDF files – 0.pdf, 1.pdf, and 2.pdf – to my project, so I’m going to pass back URLs to each of them. `URL` conforms to `QLPreviewItem` already, so we can just do an `as` typecast to make this work:

```swift
func previewController(_ controller: QLPreviewController, previewItemAt index: Int) -> QLPreviewItem {
    guard let url = Bundle.main.url(forResource: String(index), withExtension: "pdf") else {
        fatalError("Could not load \(index).pdf")
    }

    return url as QLPreviewItem
}
```

When that runs you’ll be able to swipe horizontally through Quick Look items, or swipe up and down through pages in your PDFs.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/language/how-to-create-quick-look-debug-previews-for-your-custom-types">How to create Quick Look debug previews for your custom types 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/libraries/how-to-make-empty-uitableviews-look-more-attractive-using-dznemptydataset">How to make empty UITableViews look more attractive using DZNEmptyDataSet</a>
-->

:::

---

<TagLinks />