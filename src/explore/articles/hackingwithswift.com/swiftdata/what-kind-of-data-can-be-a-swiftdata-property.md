---
lang: ko-KR
title: What kind of data can be a SwiftData property?
description: Article(s) > What kind of data can be a SwiftData property?
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
      content: Article(s) > What kind of data can be a SwiftData property?
    - property: og:description
      content: What kind of data can be a SwiftData property?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/what-kind-of-data-can-be-a-swiftdata-property.html
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
  "title": "What kind of data can be a SwiftData property? | SwiftData by Example",
  "desc": "What kind of data can be a SwiftData property?",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/what-kind-of-data-can-be-a-swiftdata-property", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftData is capable of storing a variety of data, but specifically the following:

1. Any class that uses the `@Model` macro.
2. Any struct that conforms to the `Codable` protocol.
3. Any enum that conforms to the `Codable` protocol, even if it includes raw values or associated values.

::: important

If you intend to use options 2 or 3 in a hybrid app – using both SwiftData and Core Data side by side – it’s important that you use composite attributes in your Core Data code in order to retain compatibility.

For example, we could create a `Status` enum that has two cases, one of which has an associated value, then use that as one value inside

```swift
enum Status: Codable {
    case active, inactive(reason: String)
}

@Model
class User {
    var name: String
    var status: Status

    init(name: String, status: Status) {
        self.name = name
        self.status = status
    }
}
```

---

<TagLinks />