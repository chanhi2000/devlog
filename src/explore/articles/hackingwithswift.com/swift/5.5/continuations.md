---
lang: ko-KR
title: Continuations for interfacing async tasks with synchronous code
description: Article(s) > Continuations for interfacing async tasks with synchronous code
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.5
head:
  - - meta:
    - property: og:title
      content: Article(s) > Continuations for interfacing async tasks with synchronous code
    - property: og:description
      content: Continuations for interfacing async tasks with synchronous code
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.5/continuations.html
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
  "title": "Continuations for interfacing async tasks with synchronous code | Changes in Swift 5.5",
  "desc": "Continuations for interfacing async tasks with synchronous code",
  "link": "https://hackingwithswift.com/swift/5.5/continuations", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.5

[SE-0300 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0300-continuation.md) introduced new functions to help us adapt older, completion handler-style APIs to modern async code.

For example, this function returns its values asynchronously using a completion handler:

```swift
import Foundation

func fetchLatestNews(completion: @escaping ([String]) -> Void) {
    DispatchQueue.main.async {
        completion(["Swift 5.5 release", "Apple acquires Apollo"])
    }
}
```

If you wanted to use that using async/await you might be able to rewrite the function, but there are various reasons why that might not be possible – it might come from an external library, for example.

Continuations allow us to create a shim between the completion handler and async functions so that we wrap up the older code in a more modern API. For example, the `withCheckedContinuation()` function creates a new continuation that can run whatever code you want, then call `resume(returning:)` to send a value back whenever you’re ready – even if that’s part of a completion handler closure.

So, we could make a second `fetchLatestNews()` function that is async, wrapping around the older completion handler function:

```swift
func fetchLatestNews() async -> [String] {
    await withCheckedContinuation { continuation in
        fetchLatestNews { items in
            continuation.resume(returning: items)
        }
    }
}
```

With that in place we can now get our original functionality in an async function, like this:

```swift
func printNews() async {
    let items = await fetchLatestNews()

    for item in items {
        print(item)
    }
}
```

The term “checked” continuation means that Swift is performing runtime checks on our behalf: are we calling `resume()` once and only once? This is important, because if you never resume the continuation then you will leak resources, but if you call it twice then you’re likely to hit problems. 

::: important

To be crystal clear, you *must* resume your continuation exactly once.

:::

As there is a runtime performance cost of checking your continuations, Swift also provides a `withUnsafeContinuation()` function that works in exactly the same way except does *not* perform runtime checks on your behalf. This means Swift won’t warn you if you forget to resume the continuation, and if you call it twice then the behavior is undefined. 

Because these two functions are called in the same way, you can switch between them easily. So, it seems likely people will use `withCheckedContinuation()` while writing their functions so Swift will emit warnings and even trigger crashes if the continuations are used incorrectly, but some may then switch over to `withUnsafeContinuation()` as they prepare to ship if they are affected by the runtime performance cost of checked continuations.

::: details Other Changes in Swift 5.5

```component VPCard
{
  "title": "Async await | Changes in Swift 5.5",
  "desc": "Async await",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/async-await.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Async sequences | Changes in Swift 5.5",
  "desc": "Async sequences",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/async-sequences.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Effectful read-only properties | Changes in Swift 5.5",
  "desc": "Effectful read-only properties",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/effectful-read-only-properties.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Structured concurrency | Changes in Swift 5.5",
  "desc": "Structured concurrency",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/structured-concurrency.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "async let bindings | Changes in Swift 5.5",
  "desc": "async let bindings",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/async-let-bindings.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Continuations for interfacing async tasks with synchronous code | Changes in Swift 5.5",
  "desc": "Continuations for interfacing async tasks with synchronous code",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/continuations.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Actors | Changes in Swift 5.5",
  "desc": "Actors",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/actors.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Global actors | Changes in Swift 5.5",
  "desc": "Global actors",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/global-actors.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Sendable and @Sendable closures | Changes in Swift 5.5",
  "desc": "Sendable and @Sendable closures",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/sendable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "if for postfix member expressions | Changes in Swift 5.5",
  "desc": "if for postfix member expressions",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/postfix-if.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Interchangeable use of CGFloat and Double types | Changes in Swift 5.5",
  "desc": "Interchangeable use of CGFloat and Double types",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/interchangeable-cgfloat-double.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Codable synthesis for enums with associated values | Changes in Swift 5.5",
  "desc": "Codable synthesis for enums with associated values",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/codable-enums.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "lazy now works in local contexts | Changes in Swift 5.5",
  "desc": "lazy now works in local contexts",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/local-lazy.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Extending property wrappers to function and closure parameters | Changes in Swift 5.5",
  "desc": "Extending property wrappers to function and closure parameters",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/property-wrapper-function-parameters.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Extending static member lookup in generic contexts | Changes in Swift 5.5",
  "desc": "Extending static member lookup in generic contexts",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/static-member-generic.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.5 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-4-to-5-5.playground.zip)

:::

---

<TagLinks />