---
lang: ko-KR
title: "What are generics?"
description: "Article(s) > What are generics?"
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
      content: "Article(s) > What are generics?"
    - property: og:description
      content: "What are generics?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-are-generics.html
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
  "title": "What are generics? | Language - free Swift example code",
  "desc": "What are generics?",
  "link": "https://hackingwithswift.com/example-code/language/what-are-generics",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Generics are a way of making one data type act in a variety of ways depending on how it is created. You’ve already used them whether you realized or not: Swift has an `Array` type, but it is *generic* – it doesn’t contain any sort of specific data. Instead, you ask for arrays that hold specific kinds of data by using things like `[String]` to get a string array.

It’s not hard to create generics of your own, and to demonstrate that we’re going to create a simple `Queue` type. These are first-in, first-out data structures (FIFO), which means you add things to the back and remove them from the front – much like a real-life queue.

We want this queue to be generic, and in Swift you do that by writing the name of a generic placeholder inside angle brackets, like this: `struct Queue<T> {`. That `T` doesn’t mean anything special – it could have been `R` or `Element` – but `T` is commonly used.

Inside the queue we’re going to have an internal array tracking the items we’re storing, and we’ll write methods to add and remove items.

Here’s the complete `Queue` struct:

```swift
struct Queue<T> {
    private var internalArray = [T]()

    var count: Int {
        return internalArray.count
    }

    mutating func add(_ item: T) {
        internalArray.append(item)
    }

    mutating func remove() -> T? {
        if internalArray.count > 0 {
            return internalArray.removeFirst()
        } else {
            return nil
        }
    }
}
```

You can now create a queue to store any object you want. For example, this create a queue of integers:

```swift
let queue = Queue<Int>()
```

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-use-compiler-directives-to-detect-the-ios-simulator">How to use compiler directives to detect the iOS Simulator 
/example-code/language/how-to-check-for-valid-method-input-using-the-guard-keyword">How to check for valid method input using the guard keyword 
/example-code/language/how-to-convert-a-string-to-an-nsstring">How to convert a string to an NSString 
/example-code/language/what-is-a-protocol-associated-type">What is a protocol associated type? 
/example-code/language/tips-for-android-developers-switching-to-swift">Tips for Android developers switching to Swift</a>
-->

:::

---

<TagLinks />