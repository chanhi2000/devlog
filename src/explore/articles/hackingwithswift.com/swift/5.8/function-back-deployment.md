---
lang: ko-KR
title: Function back deployment
description: Article(s) > Function back deployment
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.8
head:
  - - meta:
    - property: og:title
      content: Article(s) > Function back deployment
    - property: og:description
      content: Function back deployment
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.8/function-back-deployment.html
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
  "title": "Function back deployment | Changes in Swift 5.8",
  "desc": "Function back deployment",
  "link": "https://hackingwithswift.com/swift/5.8/function-back-deployment", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.8

[SE-0376 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0376-function-back-deployment.md) adds a new `@backDeployed` attribute that makes it possible to allow new APIs to be used on older versions of frameworks. It works by writing the code for a function into your app’s binary then performing a runtime check: if your user is on a suitably new version of the operating system then the system’s own version of the function will be used, otherwise the version copied into your app’s binary will be used instead.

On the surface this sounds like a fantastic way for Apple to make some new features retroactively available in earlier operating systems, but I don’t think it’s some kind of silver bullet – `@backDeployed` applies only to functions, methods, subscripts, and computed properties, so while it might work great for smaller API changes such as the `fontDesign()` modifier introduced in iOS 16.1, it wouldn’t work for any code that requires new types to be used, such as the new `scrollBounceBehavior()` modifier that relies on a new `ScrollBounceBehavior` struct.

As an example, iOS 16.4 introduced a `monospaced(_ isActive:)` variant for `Text`. If this were using `@backDeployed`, the SwiftUI team might ensure the modifier is available to whatever earliest version of SwiftUI supports the implementation code they actually need, like this:

```swift
import SwiftUI

extension Text {
    @backDeployed(before: iOS 16.4, macOS 13.3, tvOS 16.4, watchOS 9.4)
    @available(iOS 14.0, macOS 11, tvOS 14.0, watchOS 7.0, *)
    public func monospaced(_ isActive: Bool) -> Text {
        fatalError("Implementation here")
    }
}
```

At runtime, Swift will use the system’s copy of SwiftUI if it has that modifier already, otherwise using the back-deployed version back to iOS 14.0 and similar.

::: details Other Changes in Swift 5.8

```component VPCard
{
  "title": "Lift all limitations on variables in result builders | Changes in Swift 5.8",
  "desc": "Lift all limitations on variables in result builders",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/lift-result-builder-limitations.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Function back deployment | Changes in Swift 5.8",
  "desc": "Function back deployment",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/function-back-deployment.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Allow implicit self for weak self captures, after self is unwrapped | Changes in Swift 5.8",
  "desc": "Allow implicit self for weak self captures, after self is unwrapped",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/implicit-self-weak-capture.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Concise magic file names | Changes in Swift 5.8",
  "desc": "Concise magic file names",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/concise-magic-file-names.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Opening existential arguments to optional parameters | Changes in Swift 5.8",
  "desc": "Opening existential arguments to optional parameters",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/opening-existential-optional.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Collection downcasts in cast patterns are now supported | Changes in Swift 5.8",
  "desc": "Collection downcasts in cast patterns are now supported",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/collection-downcasts.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.8 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-7-to-5-8.playground.zip)

:::

---

<TagLinks />