---
lang: ko-KR
title: Effectful read-only properties
description: Article(s) > Effectful read-only properties
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
      content: Article(s) > Effectful read-only properties
    - property: og:description
      content: Effectful read-only properties
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.5/effectful-read-only-properties.html
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
  "title": "Effectful read-only properties | Changes in Swift 5.5",
  "desc": "Effectful read-only properties",
  "link": "https://hackingwithswift.com/swift/5.5/effectful-read-only-properties", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.5

[SE-0310 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0310-effectful-readonly-properties.md) upgrades Swift’s read-only properties to support the `async` and `throws` keywords, either individually or together, making them significantly more flexible.

To demonstrate this, we could create a `BundleFile` struct that attempts to load the contents of a file in our app’s resource bundle. Because the file might not be there, might be there but can’t be read for some reason, or might be readable but so big it takes time to read, we could mark the `contents` property as `async throws` like this:

```swift
import Foundation

enum FileError: Error {
    case missing, unreadable
}

struct BundleFile {
    let filename: String

    var contents: String {
        get async throws {
            guard let url = Bundle.main.url(forResource: filename, withExtension: nil) else {
                throw FileError.missing
            }

            do {
                return try String(contentsOf: url)
            } catch {
                throw FileError.unreadable
            }
        }
    }
}
```

Because `contents` is both async and throwing, we must use `try await` when trying to read it:

```swift
func printHighScores() async throws {
    let file = BundleFile(filename: "highscores")
    try await print(file.contents)
}
```

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
<!-- 
```component VPCard
{
  "title": "Effectful read-only properties | Changes in Swift 5.5",
  "desc": "Effectful read-only properties",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/effectful-read-only-properties.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
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

```component VPCard
{
  "title": "Continuations for interfacing async tasks with synchronous code | Changes in Swift 5.5",
  "desc": "Continuations for interfacing async tasks with synchronous code",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/continuations.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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