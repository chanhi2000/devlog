---
lang: ko-KR
title: "Data races are now clearly diagnosed"
description: "Article(s) > Data races are now clearly diagnosed"
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.10
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Data races are now clearly diagnosed"
    - property: og:description
      content: "Data races are now clearly diagnosed"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.10/complete-concurrency.html
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "HACKING WITH SWIFT",
  "desc": "What's new in Swift?",
  "link": "/explore/articles/hackingwithswift.com/swift/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Data races are now clearly diagnosed | Changes in Swift 5.10",
  "desc": "Data races are now clearly diagnosed",
  "link": "https://hackingwithswift.com/swift/5.10/complete-concurrency", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.10

Swift concurrency was introduced back in Swift 5.5, but had a bit of a rocky adoption both in Apple's own frameworks and our own projects. However, with Swift 5.10 the team made a rather dramatic statement: "Swift 5.10 closes all known static data-race safety holes in complete strict concurrency checking."

Concurrency checking is what allows the compiler to verify our use of concurrent code is safe – that we aren't accidentally sharing mutable state in a way that can cause race conditions. Of course, the key word here is "known": everything they *know about* has been resolved.

Apple's work here is not only hugely innovative, but hugely *complex*: similar to how type inference requires the Swift compiler to be able to reason about how various parts of our code are used, in concurrency the compiler is effectively running a series of algorithms that attempt to determine conclusively that our code is concurrency-safe.

To give you a concrete example, this code generated a warning in Swift 5.9:

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        Button("Tap Me", action: doWork)
    }

    func doWork() {
        print("Hello")
    }
}
```

That would throw up the rather unhelpful warning, "Converting function value of type `@MainActor () -> ()` to `() -> Void` loses global actor MainActor".

The problem here is that SwiftUI's <code>Button</code> view doesn't use <code>@MainActor</code> for its action, so Swift was throwing up a warning that we were calling a main actor-method from somewhere that isn't isolated to the main actor. This warning has been removed by the concurrency checking improvements in Swift 5.10: the compiler can now see the button action exists in side the <code>body</code> property, which *is* isolated to the main actor, and therefore is safe.

::: details Other Changes in Swift 5.10
<!-- 
```component VPCard
{
  "title": "Data races are now clearly diagnosed | Changes in Swift 5.10",
  "desc": "Data races are now clearly diagnosed",
  "link": "/explore/articles/hackingwithswift.com/swift/5.10/complete-concurrency.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
```component VPCard
{
  "title": "Allow Protocols to be Nested in Non-Generic Contexts | Changes in Swift 5.10",
  "desc": "Allow Protocols to be Nested in Non-Generic Contexts",
  "link": "/explore/articles/hackingwithswift.com/swift/5.10/nested-protocols.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Deprecate @UIApplicationMain and @NSApplicationMain | Changes in Swift 5.10",
  "desc": "Deprecate @UIApplicationMain and @NSApplicationMain",
  "link": "/explore/articles/hackingwithswift.com/swift/5.10/deprecate-uiapplicationmain.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Refined actor initialization and deinitialization | Changes in Swift 5.10",
  "desc": "Refined actor initialization and deinitialization",
  "link": "/explore/articles/hackingwithswift.com/swift/5.10/actor-initialization.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.10 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-9-to-5-10.playground.zip)

:::

---

<TagLinks />