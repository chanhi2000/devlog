---
lang: ko-KR
title: "How to throw errors using strings"
description: "Article(s) > How to throw errors using strings"
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
      content: "Article(s) > How to throw errors using strings"
    - property: og:description
      content: "How to throw errors using strings"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-throw-errors-using-strings.html
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
  "title": "How to throw errors using strings | Language - free Swift example code",
  "desc": "How to throw errors using strings",
  "link": "https://hackingwithswift.com/example-code/language/how-to-throw-errors-using-strings",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Throwing functions in Swift are the main way we have of signaling that an operation failed, but sometimes it can be annoying to define a whole new error enum just to report a simple failure.

With a small extension to `String` you can make the whole process easier:

```swift
extension String: LocalizedError {
    public var errorDescription: String? { return self }
}
```

With that change you can now throw strings as errors, and they work just like regular errors. For example, you can create a throwing function like this one:

```swift
func doDangerousThing() throws {
    throw "I'm sorry, Dave, I can't do that."
}
```

Then attempt to run it and print any errors that are thrown, like this:

```swift
do {
    try doDangerousThing()
} catch {
    print(error.localizedDescription)
}
```

This only really works for errors that have one case, because you can’t match specific string errors.

-->

::: details Similar solutions…

<!--
/quick-start/concurrency/how-to-create-continuations-that-can-throw-errors">How to create continuations that can throw errors 
/example-code/language/how-to-add-warnings-and-errors-to-your-code-using-warning-and-error">How to add warnings and errors to your code using #warning and #error 
/quick-start/swiftui/common-swiftui-errors-and-how-to-fix-them">Common SwiftUI errors and how to fix them 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table 
/example-code/strings/how-to-concatenate-strings-to-make-one-joined-string">How to concatenate strings to make one joined string</a>
-->

:::

---

<TagLinks />