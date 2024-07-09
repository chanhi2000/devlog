---
lang: ko-KR
title: "Allow Protocols to be Nested in Non-Generic Contexts"
description: "Article(s) > Allow Protocols to be Nested in Non-Generic Contexts"
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
      content: "Article(s) > Allow Protocols to be Nested in Non-Generic Contexts"
    - property: og:description
      content: "Allow Protocols to be Nested in Non-Generic Contexts"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.10/nested-protocols.html
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
  "title": "Allow Protocols to be Nested in Non-Generic Contexts | Changes in Swift 5.10",
  "desc": "Allow Protocols to be Nested in Non-Generic Contexts",
  "link": "https://hackingwithswift.com/swift/5.10/nested-protocols", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.10

[SE-0404 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0404-nested-protocols.md) allows us to create nested protocols, meaning that we can place protocols inside structs, enums, classes, actors, and even functions, with the sole restriction that whatever we're nesting the protocol in can't use generics.

This is particularly helpful when common names are given to protocols. For example, the word "transaction" could feasibly be used to mean an animation transaction, a bank transaction, and a database transaction all in the same app.

One way to resolve this is by using compound names – we add more words to protocol names to clarify what we mean, like this:

```swift
protocol AnimationTransaction {
}

protocol BankTransaction {
}

protocol DatabaseTransaction {
}
```

Another common problem also occurs when several similar protocols exist. For example, in SwiftUI we have protocols for `ButtonStyle`, `LabelStyle`, `ListStyle`, and more, all encapsulating the idea that a view can be styled in various ways.

Both of these can be resolved with this change. In the case of transactions, we could nest each transaction type inside whatever type it operated on:

```swift
struct Animation {
    protocol Transaction {
    }
}

struct Bank {
    protocol Transaction {
    }
}

struct Database {
    protocol Transaction {       
    }
}
```

Where those protocols are used externally, they would now be written `Animation.Transaction`, `Bank.Transaction`, and `Database.Transaction`, but inside their respective structs they can just be referred to as `Transaction`.

In theory, SwiftUI could also move to `Button.Style`, `List.Style`, and so on, but that feels like a big change at this point.

::: details Other Changes in Swift 5.10

```component VPCard
{
  "title": "Data races are now clearly diagnosed | Changes in Swift 5.10",
  "desc": "Data races are now clearly diagnosed",
  "link": "/explore/articles/hackingwithswift.com/swift/5.10/complete-concurrency.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Allow Protocols to be Nested in Non-Generic Contexts | Changes in Swift 5.10",
  "desc": "Allow Protocols to be Nested in Non-Generic Contexts",
  "link": "/explore/articles/hackingwithswift.com/swift/5.10/nested-protocols.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
 -->
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