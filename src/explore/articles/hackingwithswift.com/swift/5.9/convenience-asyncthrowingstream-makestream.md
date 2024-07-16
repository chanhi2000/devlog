---
lang: ko-KR
title: "Convenience Async[Throwing]Stream.makeStream methods"
description: "Article(s) > Convenience Async[Throwing]Stream.makeStream methods"
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.9
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Convenience Async[Throwing]Stream.makeStream methods"
    - property: og:description
      content: "Convenience Async[Throwing]Stream.makeStream methods"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.9/convenience-asyncthrowingstream-makestream.html
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "HACKING WITH SWIFT",
  "desc": "What's new in Swift?",
  "link": "/explore/articles/hackingwithswift.com/swift/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Convenience Async[Throwing]Stream.makeStream methods | Changes in Swift 5.9",
  "desc": "Convenience Async[Throwing]Stream.makeStream methods",
  "link": "https://hackingwithswift.com/swift/5.9/convenience-asyncthrowingstream-makestream", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.9

[SE-0388 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0388-async-stream-factory.md) adds a new `makeStream()` method to both `AsyncStream` and `AsyncThrowingStream` that sends back both the stream itself alongside its continuation.

So, rather than writing code like this:

```swift
var _continuation: AsyncStream<String>.Continuation!
let stream = AsyncStream<String> { _continuation = $0 }
let continuation = _continuation!
```

We can now get both at the same time:

```swift
let (newStream, newContinuation) = AsyncStream.makeStream(of: String.self)
```

This is going to be particularly welcome in places where you need to access the continuation outside of the current context, such as in a different method. For example, previously we might have written a simple number generator like this one, which needs to store the continuation as its own property in order to be able to call it from the `queueWork()` method:

```swift
struct OldNumberGenerator {
    private var continuation: AsyncStream<Int>.Continuation!
    var stream: AsyncStream<Int>!

    init() {
        stream = AsyncStream(Int.self) { continuation in
            self.continuation = continuation
        }
    }

    func queueWork() {
        Task {
            for i in 1...10 {
                try await Task.sleep(for: .seconds(1))
                continuation.yield(i)
            }

            continuation.finish()
        }
    }
}
```

With the new `makeStream(of:)` method this code becomes much simpler:

```swift
struct NewNumberGenerator {
    let (stream, continuation) = AsyncStream.makeStream(of: Int.self)

    func queueWork() {
        Task {
            for i in 1...10 {
                try await Task.sleep(for: .seconds(1))
                continuation.yield(i)
            }

            continuation.finish()
        }
    }
}
```

::: details Other Changes in Swift 5.9

```component VPCard
{
  "title": "if and switch expressions | Changes in Swift 5.9",
  "desc": "if and switch expressions",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/if-switch-expressions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Value and Type Parameter Packs | Changes in Swift 5.9",
  "desc": "Value and Type Parameter Packs",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/variadic-generics.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Macros | Changes in Swift 5.9",
  "desc": "Macros",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/macros.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Noncopyable structs and enums | Changes in Swift 5.9",
  "desc": "Noncopyable structs and enums",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/noncopyable-structs-and-enums.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "consume operator to end the lifetime of a variable binding | Changes in Swift 5.9",
  "desc": "consume operator to end the lifetime of a variable binding",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/consume-operator.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Convenience Async[Throwing]Stream.makeStream methods | Changes in Swift 5.9",
  "desc": "Convenience Async[Throwing]Stream.makeStream methods",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/convenience-asyncthrowingstream-makestream.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Add sleep(for:) to Clock | Changes in Swift 5.9",
  "desc": "Add sleep(for:) to Clock",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/sleep-for-clock.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Discarding task groups | Changes in Swift 5.9",
  "desc": "Discarding task groups",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/discarding-task-groups.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.9 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-8-to-5-9.playground.zip)

:::

---

<TagLinks />