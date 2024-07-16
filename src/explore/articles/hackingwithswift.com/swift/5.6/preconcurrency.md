---
lang: ko-KR
title: More concurrency changes
description: Article(s) > More concurrency changes
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.6
head:
  - - meta:
    - property: og:title
      content: Article(s) > More concurrency changes
    - property: og:description
      content: More concurrency changes
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.6/preconcurrency.html
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
  "title": "More concurrency changes | Changes in Swift 5.6",
  "desc": "More concurrency changes",
  "link": "https://hackingwithswift.com/swift/5.6/preconcurrency", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.6

Swift 5.5 added a lot of features around concurrency, and 5.6 continues the process of refining those features to make them safer and more consistent, while also working towards bigger, breaking changes coming in Swift 6.

The biggest change is [SE-0337 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0337-support-incremental-migration-to-concurrency-checking.md), which aims to provide a roadmap towards full, strict concurrency checking for our code. This is designed to be incremental: you can import whole modules using `@preconcurrency` to tell Swift the module was created without modern concurrency in mind; or you can mark individual classes, structs, properties, methods and more as `@preconcurrency` to be more selective.

In the short term this makes it significantly easier to migrate larger projects to modern concurrency.

Another area that’s changing is the use of actors, because as a result of [SE-0327 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0327-actor-initializers.md) Swift 5.6 now issues a warning if you attempt to instantiate a `@MainActor` property using `@StateObject` like this:

```swift
import SwiftUI

@MainActor class Settings: ObservableObject { }

struct OldContentView: View {
    @StateObject private var settings = Settings()

    var body: some View {
        Text("Hello, world!")
    }
}
```

This warning will be upgraded to an error in Swift 6, so you should be prepared to move away from this code and use this instead:

```swift
struct NewContentView: View {
    @StateObject private var settings: Settings

    init() {
        _settings = StateObject(wrappedValue: Settings())
    }

    var body: some View {
        Text("Hello, world!")
    }
}
```

::: details Other Changes in Swift 5.6

```component VPCard
{
  "title": "Introduce existential any | Changes in Swift 5.6",
  "desc": "Introduce existential any",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/existential-any.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Type placeholders | Changes in Swift 5.6",
  "desc": "Type placeholders",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/type-placeholders.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Allow coding of non String/Int keyed Dictionary into a KeyedContainer | Changes in Swift 5.6",
  "desc": "Allow coding of non String/Int keyed Dictionary into a KeyedContainer",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/codingkeyrepresentable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Unavailability condition | Changes in Swift 5.6",
  "desc": "Unavailability condition",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/unavailable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "More concurrency changes | Changes in Swift 5.6",
  "desc": "More concurrency changes",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/preconcurrency.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Plugins for Swift Package Manager | Changes in Swift 5.6",
  "desc": "Plugins for Swift Package Manager",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/swiftpm-plugins.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.6 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-5-to-5-6.playground.zip)

:::

---

<TagLinks />