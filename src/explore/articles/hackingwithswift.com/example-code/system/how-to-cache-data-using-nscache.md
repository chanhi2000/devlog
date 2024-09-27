---
lang: ko-KR
title: "How to cache data using NSCache"
description: "Article(s) > How to cache data using NSCache"
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
  - ios-4.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to cache data using NSCache"
    - property: og:description
      content: "How to cache data using NSCache"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/system/how-to-cache-data-using-nscache.html
date: 2018-03-28
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
  "title": "How to cache data using NSCache | System - free Swift example code",
  "desc": "How to cache data using NSCache",
  "link": "https://hackingwithswift.com/example-code/system/how-to-cache-data-using-nscache",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.0

<!-- TODO: 작성 -->

<!-- 
Here's an easy win for you that will make your apps immediately much better: `NSCache` is a specialized class that behaves similarly to a mutable dictionary with one major difference: iOS will automatically remove objects from the cache if the device is running low on memory.

Helpfully, if the system does encounter memory pressure `NSCache` will automatically start to remove items without you knowing about it, which means you won't get a memory warning unless even more RAM needs to be cleared. It will also remove items intelligently, trying to keep as much cached as possible.

Here's how to use it, imagining a fictional class called `ExpensiveObjectClass` that you want to compute as infrequently as you can:

```swift
let cache = NSCache<NSString, ExpensiveObjectClass>()
let myObject: ExpensiveObjectClass

if let cachedVersion = cache.object(forKey: "CachedObject") {
    // use the cached version
    myObject = cachedVersion
} else {
    // create it from scratch then store in the cache
    myObject = ExpensiveObjectClass()
    cache.setObject(myObject, forKey: "CachedObject")
}
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/quick-start/concurrency/how-to-create-and-use-an-actor-in-swift">How to create and use an actor in Swift 
/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table 
/quick-start/concurrency/how-to-handle-different-result-types-in-a-task-group">How to handle different result types in a task group 
/quick-start/concurrency/how-to-use-continuations-to-convert-completion-handlers-into-async-functions">How to use continuations to convert completion handlers into async functions</a>
-->

:::

---

<TagLinks />