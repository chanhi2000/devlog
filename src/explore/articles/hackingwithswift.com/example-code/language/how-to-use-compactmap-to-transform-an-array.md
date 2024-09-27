---
lang: ko-KR
title: "How to use compactMap() to transform an array"
description: "Article(s) > How to use compactMap() to transform an array"
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
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to use compactMap() to transform an array"
    - property: og:description
      content: "How to use compactMap() to transform an array"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-compactmap-to-transform-an-array.html
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
  "title": "How to use compactMap() to transform an array | Language - free Swift example code",
  "desc": "How to use compactMap() to transform an array",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-compactmap-to-transform-an-array",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
The `compactMap()` method lets us transform the elements of an array just like `map()` does, except once the transformation completes an extra step happens: all optionals get unwrapped, and any nil values get discarded.

This is useful whenever you have an array of things you need to convert, but the conversion process might fail.

For example, consider this array of strings:

```swift
let numbers = ["1", "2", "Fish"]
```

Two of those hold a number, but one does not. We can use `compactMap()` to convert those to integers, because creating an `Int` from a `String` is a failable initializer – it returns an `Int?` because you might have passed an invalid number. 

`compactMap()` will read those optional integers, unwrap all the optionals for us, then discard any items that returned `nil`, all in one line of code:

```swift
let integers = numbers.compactMap { Int($0) }
```

When that code runs, `integers` will hold an array of `Int` rather than an array of `Int?`.

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-use-map-to-transform-an-array">How to use map() to transform an array 
/example-code/language/how-to-transform-a-dictionary-using-mapvalues">How to transform a dictionary using mapValues() 
/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject? 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/language/how-to-convert-a-multidimensional-array-to-a-single-dimensional-array">How to convert a multidimensional array to a single-dimensional array</a>
-->

:::

---

<TagLinks />