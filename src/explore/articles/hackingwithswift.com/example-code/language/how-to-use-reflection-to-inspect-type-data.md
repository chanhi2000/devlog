---
lang: ko-KR
title: "How to use reflection to inspect type data"
description: "Article(s) > How to use reflection to inspect type data"
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
      content: "Article(s) > How to use reflection to inspect type data"
    - property: og:description
      content: "How to use reflection to inspect type data"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-reflection-to-inspect-type-data.html
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
  "title": "How to use reflection to inspect type data | Language - free Swift example code",
  "desc": "How to use reflection to inspect type data",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-reflection-to-inspect-type-data",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Swift has a built-in `Mirror` struct that lets us query any kind of data in our code. It’s most commonly used to read through the list of properties that are available, but it’s also used in playgrounds to print out user-readable values inside types.

To get started, first create a custom type then an instance of that type:

```swift
struct Person {
    var name = "Taylor Swift"
    var age = 26
}

var taylor = Person()
```

You can now instantiate a `Mirror` object from `taylor`, like this:

```swift
var mirror = Mirror(reflecting: taylor)
```

That mirror isn’t a copy of `taylor`, a *reflection* of it – something you can inspect. For example, you can loop over all the properties inside `taylor` and print out their names and values like this:

```swift
for case let (label?, value) in mirror.children {
    print (label, value)
}
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject? 
/quick-start/concurrency/how-to-download-json-from-the-internet-and-decode-it-into-any-codable-type">How to download JSON from the internet and decode it into any Codable type 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/how-to-use-dynamic-type-with-a-custom-font">How to use Dynamic Type with a custom font</a>
-->

:::

---

<TagLinks />