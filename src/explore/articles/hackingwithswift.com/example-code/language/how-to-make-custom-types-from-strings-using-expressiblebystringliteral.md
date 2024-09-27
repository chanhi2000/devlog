---
lang: ko-KR
title: "How to make custom types from strings using ExpressibleByStringLiteral"
description: "Article(s) > How to make custom types from strings using ExpressibleByStringLiteral"
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
      content: "Article(s) > How to make custom types from strings using ExpressibleByStringLiteral"
    - property: og:description
      content: "How to make custom types from strings using ExpressibleByStringLiteral"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-make-custom-types-from-strings-using-expressiblebystringliteral.html
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
  "title": "How to make custom types from strings using ExpressibleByStringLiteral | Language - free Swift example code",
  "desc": "How to make custom types from strings using ExpressibleByStringLiteral",
  "link": "https://hackingwithswift.com/example-code/language/how-to-make-custom-types-from-strings-using-expressiblebystringliteral",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Swift’s `ExpressibleByStringLiteral` protocol lets us create any type directly from a string – as long as Swift understands what type you mean, you can create whatever you want.

For example, if you regularly hard-code URLs and are tired of force unwrapping them when you know they are definitely correct, you can make `URL` conform to `ExpressibleByStringLiteral` so that URLs can be created directly from strings:

```swift
extension URL: ExpressibleByStringLiteral {
    public init(stringLiteral value: String) {
        self = URL(string: value)!
    }
}
```

With that extension in place you can now write code like this:

```swift
let url: URL = "https://www.hackingwithswift.com"
print(url.absoluteString)
```

Notice that I’ve clearly marked `url` as being of type `URL` so that Swift doesn’t think it’s a regular string.

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-safely-use-reference-types-inside-value-types-with-isknownuniquelyreferenced">How to safely use reference types inside value types with isKnownUniquelyReferenced() 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/strings/how-to-concatenate-strings-to-make-one-joined-string">How to concatenate strings to make one joined string 
/quick-start/concurrency/how-to-handle-different-result-types-in-a-task-group">How to handle different result types in a task group 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a>
-->

:::

---

<TagLinks />