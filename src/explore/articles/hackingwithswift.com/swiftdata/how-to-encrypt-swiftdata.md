---
lang: ko-KR
title: How to encrypt SwiftData
description: Article(s) > How to encrypt SwiftData
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
      content: Article(s) > How to encrypt SwiftData
    - property: og:description
      content: How to encrypt SwiftData
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-encrypt-swiftdata.html
date: 2023-09-30
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
  "title": "How to encrypt SwiftData | SwiftData by Example",
  "desc": "How to encrypt SwiftData",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-encrypt-swiftdata", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you’re storing information that’s particularly sensitive, you can take one or perhaps two steps to make sure it’s stored extra carefully.

The simplest, guaranteed to work option is to use the `.allowsCloudEncryption` attribute on any property that should be stored encrypted in iCloud, like this:

```swift
@Attribute(.allowsCloudEncryption) var cardNumber: Int
```

As the name suggests, this encryption only works in iCloud; this property has no effect on locally stored data.

The second, much more complex option is to attempt to set custom data protection properties in your data. Apple’s documentation here is rather thin on the ground, and cunning it’s impossible to verify that any of these actually work because the process of unlocking your phone also decrypts the data, however *in theory* you’d need to write code like this:

```swift
if let path = modelContext.container.configurations.first?.url.path(percentEncoded: false) {
    let attrs = [FileAttributeKey.protectionKey: FileProtectionType.completeUnlessOpen]
    try? FileManager.default.setAttributes(attrs, ofItemAtPath: path)
}
```

You may also need to enable the Data Protection capability for your app in Xcode.

However, this approach is more complicated than it might appear:

1. The underlying data store is likely to be split into multiple files in order to support write-ahead logging, and they shouldn’t necessarily have the same protection class.
2. SQLite can delete and recreate files at will as part of its self-healing mechanisms.
3. If you’re supporting Core Data at the same time, you should adjust the `NSPersistentStoreFileProtectionKey` option key to match whatever you enabled for SwiftData.

Remember, it’s hard to verify that your files are encrypted because the very act of trusting your Mac to read the files makes them available unencrypted. So, I’d advise treading carefully!

---

<TagLinks />