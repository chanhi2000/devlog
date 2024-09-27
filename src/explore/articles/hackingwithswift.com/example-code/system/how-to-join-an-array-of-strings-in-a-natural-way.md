---
lang: ko-KR
title: "How to join an array of strings in a natural way"
description: "Article(s) > How to join an array of strings in a natural way"
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
      content: "Article(s) > How to join an array of strings in a natural way"
    - property: og:description
      content: "How to join an array of strings in a natural way"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-join-an-array-of-strings-in-a-natural-way.html
date: 2019-10-07
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
  "title": "How to join an array of strings in a natural way | System - free Swift example code",
  "desc": "How to join an array of strings in a natural way",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-join-an-array-of-strings-in-a-natural-way",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
Swift provides the `ListFormatter` class as a built-in way of joining lists of strings into a single string so that the last item has “and” before it, like a natural English string. So, rather than just getting “A, B, C” you actually get “A, B and C” – it’s much more suitable for user interfaces.

Here’s some example code:

```swift
let names = ["Ash", "Brock", "Misty"]
let joined1 = ListFormatter.localizedString(byJoining: names)
print(joined1)
```

That will print “Ash, Brock and Misty”. (No, there’s no way of asking it for the Oxford comma, so “Ash, Brock, and Misty” isn’t possible.)

If you want to join the strings without using the “and” at the end, you should just use the `joined(separator:)` method, like this:

```swift
let joined2 = names.joined(separator: ", ")
print(joined2)
```

That will print “Ash, Brock, Misty”.

-->

::: details Similar solutions…

<!--
/example-code/arrays/how-to-join-an-array-of-strings-into-a-single-string">How to join an array of strings into a single string 
/example-code/language/how-to-use-the-zip-function-to-join-two-arrays">How to use the zip() function to join two arrays 
/quick-start/swiftui/two-way-bindings-in-swiftui">Two-way bindings in SwiftUI 
/quick-start/swiftui/how-to-adjust-the-way-an-image-is-fitted-to-its-space">How to adjust the way an image is fitted to its space 
/quick-start/swiftui/how-to-customize-the-way-links-are-opened">How to customize the way links are opened</a>
-->

:::

---

<TagLinks />