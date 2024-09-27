---
lang: ko-KR
title: "How to compress and decompress data"
description: "Article(s) > How to compress and decompress data"
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
  - ios-13.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to compress and decompress data"
    - property: og:description
      content: "How to compress and decompress data"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/system/how-to-compress-and-decompress-data.html
date: 2019-10-13
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "System - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/system/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to compress and decompress data | System - free Swift example code",
  "desc": "How to compress and decompress data",
  "link": "https://hackingwithswift.com/example-code/system/how-to-compress-and-decompress-data",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
Apple gives us dedicated API for compressing binary data, although annoyingly it exists on `NSData` without being bridged neatly to Swift’s native `Data` type. Fortunately, that conversion is trivial, so this functionality isn’t hard to use.

Here’s how to use it:

```swift
do {
    let compressedData = try (yourData as NSData).compressed(using: .lzfse)
    // use your compressed data
} catch {
    print(error.localizedDescription)
}
```

Although it’s common for folks to call compression and decompression *zipping* and *unzipping*, zip is one particular file format and the code above uses the LZFSE compression algorithm instead. This an Apple-design compression algorithm that is recommended unless you specifically need one of the others. The alternatives are:

- `.lz4` compresses less effectively, but is significantly faster.
<li>`.zlib` is the recommended general purpose algorithm to use if you want cross compatibility with non-Apple devices.
<li>`.lzma` compresses the most effectively, but should only be used if memory usage and speed are not important. Apple specifically states that this might use a large amount of memory, and so it should be avoided if you’re trying to compress large amounts of data. This is about 10x slower than the alternatives.

If you want to decompress some data, you should use the counterpart method, `decompressed(using:)`, which works in the same way.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource 
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a>
-->

:::

---

<TagLinks />