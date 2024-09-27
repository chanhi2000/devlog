---
lang: ko-KR
title: "How to save and load objects with NSKeyedArchiver and NSKeyedUnarchiver"
description: "Article(s) > How to save and load objects with NSKeyedArchiver and NSKeyedUnarchiver"
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
      content: "Article(s) > How to save and load objects with NSKeyedArchiver and NSKeyedUnarchiver"
    - property: og:description
      content: "How to save and load objects with NSKeyedArchiver and NSKeyedUnarchiver"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-save-and-load-objects-with-nskeyedarchiver-and-nskeyedunarchiver.html
date: 2018-03-28
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
  "title": "How to save and load objects with NSKeyedArchiver and NSKeyedUnarchiver | System - free Swift example code",
  "desc": "How to save and load objects with NSKeyedArchiver and NSKeyedUnarchiver",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-save-and-load-objects-with-nskeyedarchiver-and-nskeyedunarchiver",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
You can write any kind of object to disk as long as it supports the `NSCoding` protocol – which includes strings, arrays, dictionaries, `UIView`, `UIColor` and more right out of the box. To write to disk, use this:

```swift
let randomFilename = UUID().uuidString
let fullPath = getDocumentsDirectory().appendingPathComponent(randomFilename)

do {
    let data = try NSKeyedArchiver.archivedData(withRootObject: somethingToSave, requiringSecureCoding: false)
    try data.write(to: fullPath)
} catch {
    print("Couldn't write file")
}
```

That call to `getDocumentsDirectory()` is a small helper function I frequently use to write files to disk:

```swift
func getDocumentsDirectory() -> URL {
    let paths = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)
    return paths[0]
}
```

When you want to read your object back you need to use `unarchiveObject(withFile:)`, but be warned: the file might not exist or might not be unarchivable, so this method returns an optional value that you need to unwrap carefully.

For example, if you want to unarchive an array of strings, you would use this code:

```swift
do {
    if let loadedStrings = try NSKeyedUnarchiver.unarchiveTopLevelObjectWithData(data) as? [String] {
        savedArray = loadedStrings
    }
} catch {
    print("Couldn't read file.")
}
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource 
/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a>
-->

:::

---

<TagLinks />