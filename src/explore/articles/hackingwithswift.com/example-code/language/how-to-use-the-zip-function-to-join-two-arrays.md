---
lang: ko-KR
title: "How to use the zip() function to join two arrays"
description: "Article(s) > How to use the zip() function to join two arrays"
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
      content: "Article(s) > How to use the zip() function to join two arrays"
    - property: og:description
      content: "How to use the zip() function to join two arrays"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-the-zip-function-to-join-two-arrays.html
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
  "title": "How to use the zip() function to join two arrays | Language - free Swift example code",
  "desc": "How to use the zip() function to join two arrays",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-the-zip-function-to-join-two-arrays",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
The `zip()` function is designed to merge two sequences into a single sequence of tuples. For example, here is an array of wizards:

```swift
let wizards1 = ["Harry", "Ron", "Hermione"]
```

And here’s a matching array of the animals owned by those wizards:

```swift
let animals1 = ["Hedwig", "Scabbers", "Crookshanks"]
```

Using `zip()` we can combine them together:

```swift
let combined1 = zip(wizards1, animals1)
```

That will produce a single sequence combining the earlier two. To avoid doing extra work, Swift actually creates a special type called `Zip2Sequence` that stores both sequences internally – this is more efficient than doing the actual joining, but it does make the output harder to read if you’re using a playground. So, if you *are* using a playground you should wrap the output from `zip()` into a new array to make its output easier to read:

```swift
let combined2 = Array(zip(wizards1, animals1))
```

If you print `combined` you’ll see it contains this array:

```swift
[("Harry", "Hedwig"), ("Ron", "Scabbers"), ("Hermione", "Crookshanks")]
```

One of the helpful features of `zip()` is that if your two arrays differ in size it will automatically choose the shorter of the two. This avoids trying to read two arrays at the same time and accidentally going out of bounds when one is shorter.

For example, this code will print out the animals belonging to the first three wizards, but nothing for Draco because he doesn’t have a matching animal:

```swift
let wizards2 = ["Harry", "Ron", "Hermione", "Draco"]
let animals2 = ["Hedwig", "Scabbers", "Crookshanks"]

for (wizard, animal) in zip(wizards2, animals2) {
    print("\(wizard) has \(animal)")
}
```

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-join-an-array-of-strings-in-a-natural-way">How to join an array of strings in a natural way 
/example-code/arrays/how-to-join-an-array-of-strings-into-a-single-string">How to join an array of strings into a single string 
/example-code/language/how-to-find-the-difference-between-two-arrays">How to find the difference between two arrays 
/quick-start/swiftui/two-way-bindings-in-swiftui">Two-way bindings in SwiftUI 
/quick-start/concurrency/how-to-call-an-async-function-using-async-let">How to call an async function using async let</a>
-->

:::

---

<TagLinks />