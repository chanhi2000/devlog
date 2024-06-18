---
lang: ko-KR
title: How to store SwiftData attributes in an external file
description: Article(s) > How to store SwiftData attributes in an external file
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swiftdata
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to store SwiftData attributes in an external file
    - property: og:description
      content: How to store SwiftData attributes in an external file
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-store-swiftdata-attributes-in-an-external-file.html
date: 2023-10-31
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftData by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftdata/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to store SwiftData attributes in an external file | SwiftData by Example",
  "desc": "How to store SwiftData attributes in an external file",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-store-swiftdata-attributes-in-an-external-file", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftData is great for storing information such as strings, integers, dates, and custom `Codable` objects, but if you’re storing *larger* data such as images or even movies it’s a good idea to have SwiftData store them in external, peripheral files, then reference those filenames in your SwiftData object.

Helpfully, SwiftData makes this trivial using the `.externalStorage` attribute, which suggests to SwiftData that this data is best stored separately. It will, if needed, stash that data externally from your main SwiftData storage, store only the filename to the external data, then transparently connect the two so you don’t need to take any further action – for the most part external data behaves no differently from internal data.

For example, if you were storing a game player’s avatar, you might have code like this:

```swift
@Model class User {
    var name: String
    var score: Int
    @Attribute(.externalStorage) var avatar: Data

    init(name: String, score: Int, avatar: Data) {
        self.name = name
        self.score = score
        self.avatar = avatar
    }
}
```

You can combine this with other attributes, such as encryption, like this:

```swift
@Attribute(.externalStorage, .allowsCloudEncryption) var avatar: Data
```

There are three important provisos when dealing with external storage, and it’s important that you’re aware of them.

First, the `.externalStorage` attributes merely *suggests* to SwiftData that some information is best stored outside the main SQLite data store, but it doesn’t have to honor that request. In my tests with this attribute, SwiftData seems happy to store up to about 128K of a `Data` object right inside its main storage area, with larger data automatically being saved externally. 

Second, if you’re using `String` rather than `Data`, SwiftData seems happy to store strings of unlimited size without using external files at all no matter whether you use the attribute or not.

Third, for the most part all this is an implementation detail: whether the data is stored right inside the database or not doesn’t matter to us, because it’s loaded and saved the same as internal data. However, you can’t use externally stored properties inside predicates, because the external files aren’t visible to the underlying data store – if you see an error message like **[Foundation.__NSSwiftData _bytesPtrForStore]: unrecognized selector sent to instance 0x600000c74ae0 with userInfo of (null)** chances are you might have fallen into this trap.

---

<TagLinks />