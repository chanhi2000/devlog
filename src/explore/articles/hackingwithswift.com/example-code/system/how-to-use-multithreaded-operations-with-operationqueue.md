---
lang: ko-KR
title: "How to use multithreaded operations with OperationQueue"
description: "Article(s) > How to use multithreaded operations with OperationQueue"
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
      content: "Article(s) > How to use multithreaded operations with OperationQueue"
    - property: og:description
      content: "How to use multithreaded operations with OperationQueue"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-use-multithreaded-operations-with-operationqueue.html
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
  "title": "How to use multithreaded operations with OperationQueue | System - free Swift example code",
  "desc": "How to use multithreaded operations with OperationQueue",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-use-multithreaded-operations-with-operationqueue",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.0

<!-- TODO: 작성 -->

<!-- 
There are lots of ways to work with Grand Central Dispatch (GCD) on iOS, but `OperationQueue` is particularly powerful because it lets you control precisely how many simultaneous operations can run and what quality of service you need, while also letting you schedule work using closures. You can even ask the operation queue to wait until all its operations are finished, which makes scheduling easier.

If you had an array of images you needed to process then save somewhere, you might normally write a loop like this:

```swift
for image in images {
    process(image)
}
```

However, that’s single-threaded – it can only use one of the available CPU cores. With only a small change you can get the same behavior working across multiple cores, and the operation queue will wait until it’s all complete so it doesn’t change the meaning of your code:

```swift
let queue = OperationQueue()

for image in images {
    queue.addOperation {
        self.process(image)
    }
}

queue.waitUntilAllOperationsAreFinished()
```

You can add as many operations as you want, but they don’t all get executed at the same time. Instead, `OperationQueue` limits the number of operations based on system conditions – if it’s a more powerful device that isn’t doing much right now, you’ll get more operations than a less powerful device or a device that’s busy with other work.

You can override this behavior if you need something specific:

```swift
queue.maxConcurrentOperationCount = 4
```

And if you ever need to stop all operations that have yet to be started, call `cancelAllOperations()` on your queue, like this:

```swift
queue.cancelAllOperations()
```

That won’t cancel any operations that are currently in flight.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject? 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/system/how-to-make-one-operation-wait-for-another-to-complete-using-adddependency">How to make one operation wait for another to complete using addDependency() 
/quick-start/concurrency/how-to-call-an-async-function-using-async-let">How to call an async function using async let</a>
-->

:::

---

<TagLinks />