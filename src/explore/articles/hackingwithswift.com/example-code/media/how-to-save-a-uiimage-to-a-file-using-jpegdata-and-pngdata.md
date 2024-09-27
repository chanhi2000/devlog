---
lang: ko-KR
title: "How to save a UIImage to a file using jpegData() and pngData()"
description: "Article(s) > How to save a UIImage to a file using jpegData() and pngData()"
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
  - ios-2.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to save a UIImage to a file using jpegData() and pngData()"
    - property: og:description
      content: "How to save a UIImage to a file using jpegData() and pngData()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/media/how-to-save-a-uiimage-to-a-file-using-jpegdata-and-pngdata.html
date: 2020-04-18
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Media - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/media/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to save a UIImage to a file using jpegData() and pngData() | Media - free Swift example code",
  "desc": "How to save a UIImage to a file using jpegData() and pngData()",
  "link": "https://hackingwithswift.com/example-code/media/how-to-save-a-uiimage-to-a-file-using-jpegdata-and-pngdata",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
If you've generated an image using Core Graphics, or perhaps rendered part of your layout, you might want to save that out as either a PNG or a JPEG. Both are easy thanks to two methods: `pngData()` and `jpegData()`, both of which convert a `UIImage` into a `Data` instance you can write out.

Here's an example:

```swift
if let image = UIImage(named: "example.png") {
    if let data = image.pngData() {
        let filename = getDocumentsDirectory().appendingPathComponent("copy.png")
        try? data.write(to: filename)
    }
}
```

That call to `getDocumentsDirectory()` is a little helper function I include in most of my projects, because it makes it easy to locate the user's documents directory where you can save app files. Here it is:

```swift
func getDocumentsDirectory() -> URL {
    let paths = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)
    return paths[0]
}
```

If you want to save your image as a JPEG rather than a PNG, use this code instead:

```swift
if let image = UIImage(named: "example.jpg") {
    if let data = image.jpegData(compressionQuality: 0.8) {
        let filename = getDocumentsDirectory().appendingPathComponent("copy.png")
        try? data.write(to: filename)
    }
}
```

The parameter to `jpegData()` is a float that represents JPEG quality, where 1.0 is highest and 0.0 is lowest.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource 
/example-code/strings/how-to-save-a-string-to-a-file-on-disk-with-writeto">How to save a string to a file on disk with write(to:)</a>
-->

:::

---

<TagLinks />