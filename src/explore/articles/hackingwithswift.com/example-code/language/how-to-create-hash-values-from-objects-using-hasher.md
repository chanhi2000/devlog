---
lang: ko-KR
title: "How to create hash values from objects using Hasher"
description: "Article(s) > How to create hash values from objects using Hasher"
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
  - ios-8.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to create hash values from objects using Hasher"
    - property: og:description
      content: "How to create hash values from objects using Hasher"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-create-hash-values-from-objects-using-hasher.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Language - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/language/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to create hash values from objects using Hasher | Language - free Swift example code",
  "desc": "How to create hash values from objects using Hasher",
  "link": "https://hackingwithswift.com/example-code/language/how-to-create-hash-values-from-objects-using-hasher",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Hash values are an invaluable way of identifying data uniquely, and any type that conforms to the `Hashable` protocol can be used to create all or part of a hash value by using the `Hasher` struct.

To use this, create an instance of `Hasher`, provide it with whatever objects you want to hash, then call `finalize()` to generate the final value as an integer. For example:

```swift
struct iPad: Hashable {
    var serialNumber: String
    var capacity: Int
}

let first = iPad(serialNumber: "12345", capacity: 128)
let second = iPad(serialNumber: "abcde", capacity: 512)

var hasher = Hasher()
hasher.combine(first)
hasher.combine(second)
let hash = hasher.finalize()
```

-->

::: details Similar solutions…

<!--
/example-code/cryptokit/how-to-calculate-the-sha-hash-of-a-string-or-data-instance">How to calculate the SHA hash of a String or Data instance 
/quick-start/swiftui/observable-objects-environment-objects-and-published">Observable objects, environment objects, and @Published 
/quick-start/swiftui/how-to-use-stateobject-to-create-and-monitor-external-objects">How to use @StateObject to create and monitor external objects 
/quick-start/swiftui/how-to-delete-core-data-objects-from-swiftui-views">How to delete Core Data objects from SwiftUI views 
/quick-start/swiftui/how-to-add-core-data-objects-from-swiftui-views">How to add Core Data objects from SwiftUI views</a>
-->

:::

---

<TagLinks />