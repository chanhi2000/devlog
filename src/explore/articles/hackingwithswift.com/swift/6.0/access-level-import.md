---
lang: ko-KR
title: "Access-level modifiers on import declarations"
description: "Article(s) > Access-level modifiers on import declarations"
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-6.0
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Access-level modifiers on import declarations"
    - property: og:description
      content: "Access-level modifiers on import declarations"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/6.0/access-level-import.html
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
  "title": "Access-level modifiers on import declarations | Changes in Swift 6.0",
  "desc": "Access-level modifiers on import declarations",
  "link": "https://hackingwithswift.com/swift/6.0/access-level-import", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 6.0

[SE-0409 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0409-access-level-on-imports.md) adds the ability to mark import declarations with access control modifiers, such as `private import SomeLibrary`.

There are various ways this will be useful, including the ability for library developers to avoid accidentally leaking their own dependencies. For example, a banking app might be split into multiple parts:

- The app itself, presenting the user interface.
- A Banking library that handles all the functionality and core logic.
- Several smaller, internal libraries that handle individual pieces of work that are lower level, such as a Transactions package, a Networking package, and so on.

So, the app depends on the Banking library, and the Banking library in turn depends on Transactions, Networking, and other internal libraries.

We can demonstrate that setup with some code that also demonstrates the problem being resolved here. First, we could say that the low-level Transactions package has a struct such as this one: 

```swift
public struct BankTransaction {
    // code here
}
```

Up in the Banking library we might write a function to send money from one account number to another using that `BankTransaction`:

```swift
public func sendMoney(from: Int, to: Int) -> BankTransaction {
    // handle sending money then send back the result
    return BankTransaction()
}
```

And now in the main app we can call `sendMoney()` to do the work.

That's all regular Swift code, but it can create a rather unpleasant problem: very often wrapper libraries don't want to reveal the inner workings of the libraries they rely on internally, which is exactly what happens here – our main app is given access to the `BankTransaction` struct from the Transactions library, when really it should only use APIs from the Banking library.

From 6.0 onwards we can solve this problem by using access control on the import for Transactions: by using `internal import Transactions` or similar in the Banking library, Swift will refuse to build any code declared as public that exposes API from the Transactions library.

This really helps to clear up code boundaries: the Banking framework can still go ahead and use all the libraries it wants internally, but it won't be allowed to send those back to clients – the app in this case – by accident. If we genuinely did want to expose the internal framework types, we would use `public import Transactions` to make that explicit.

On a more fine-grained level, this also allows files inside the same module to add extra restrictions – one file could privately import a framework without wanting to accidentally expose the contents of that framework elsewhere.

Although Swift 6 hasn't shipped yet, it's looking like the default for imports will be `internal` when running in Swift 6 mode, but `public` in Swift 5 mode to retain compatibility with existing code.

::: details Other Changes in Swift 6.0

```component VPCard
{
  "title": "Complete concurrency enabled by default | Changes in Swift 6.0",
  "desc": "Complete concurrency enabled by default",
  "link": "/explore/articles/hackingwithswift.com/swift/6.0/concurrency.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "count(where:) | Changes in Swift 6.0",
  "desc": "count(where:)",
  "link": "/explore/articles/hackingwithswift.com/swift/6.0/count-where.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Typed throws | Changes in Swift 6.0",
  "desc": "Typed throws",
  "link": "/explore/articles/hackingwithswift.com/swift/6.0/typed-throws.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Pack iteration | Changes in Swift 6.0",
  "desc": "Pack iteration",
  "link": "/explore/articles/hackingwithswift.com/swift/6.0/pack-iteration.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Add Collection Operations on Noncontiguous Elements | Changes in Swift 6.0",
  "desc": "Add Collection Operations on Noncontiguous Elements",
  "link": "/explore/articles/hackingwithswift.com/swift/6.0/rangeset.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Access-level modifiers on import declarations | Changes in Swift 6.0",
  "desc": "Access-level modifiers on import declarations",
  "link": "/explore/articles/hackingwithswift.com/swift/6.0/access-level-import.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Upgrades for noncopyable types | Changes in Swift 6.0",
  "desc": "Upgrades for noncopyable types",
  "link": "/explore/articles/hackingwithswift.com/swift/6.0/noncopyable-upgrades.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "128-bit Integer Types | Changes in Swift 6.0",
  "desc": "128-bit Integer Types",
  "link": "/explore/articles/hackingwithswift.com/swift/6.0/int128.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "BitwiseCopyable | Changes in Swift 6.0",
  "desc": "BitwiseCopyable",
  "link": "/explore/articles/hackingwithswift.com/swift/6.0/bitwisecopyable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 6.0 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-10-to-6-0.playground.zip)

:::

---

<TagLinks />