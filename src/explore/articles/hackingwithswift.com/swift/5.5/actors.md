---
lang: ko-KR
title: Actors
description: Article(s) > Actors
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
      content: Article(s) > Actors
    - property: og:description
      content: Actors
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.5/async-await.html
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
  "title": "Actors | Changes in Swift 5.5",
  "desc": "Actors",
  "link": "https://hackingwithswift.com/swift/5.5/actors", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.5

[SE-0306 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0306-actors.md) introduced actors, which are conceptually similar to classes that are safe to use in concurrent environments. This is possible because Swift ensures that mutable state inside your actor is only ever accessed by a single thread at any given time, which helps eliminate a variety of serious bugs right at the compiler level.

To demonstrate the problem actors solve, consider this Swift code that creates a `RiskyCollector` class able to trade cards from their deck with another collector:

```swift
class RiskyCollector {
    var deck: Set<String>

    init(deck: Set<String>) {
        self.deck = deck
    }

    func send(card selected: String, to person: RiskyCollector) -> Bool {
        guard deck.contains(selected) else { return false }

        deck.remove(selected)
        person.transfer(card: selected)
        return true
    }

    func transfer(card: String) {
        deck.insert(card)
    }
}
```

In a single-threaded environment that code is safe: we check whether our deck contains the card in question, remove it, then add it to the other collector’s deck. However, in a multi-threaded environment our code has a potential race condition, which is a problem whereby the results of the code will vary as two separate parts of our code run side by side.

If we call `send(card:to:)` more than once at the same time, the following chain of events can happen:

1. The first thread checks whether the card is in the deck, and it is so it continues.
2. The second thread also checks whether the card is in the deck, and it is so it continues.
3. The first thread removes the card from the deck and transfer it to the other person.
4. The second thread attempts to remove the card from the deck, but actually it’s already gone so nothing will happen. However, it still transfers the card to the other person.

In that situation one player loses a card while the other gains *two* cards, and if that card happened to be a Black Lotus from Magic the Gathering then you’ve got a big problem!

Actors solve this problem by introducing *actor isolation*: stored properties and methods cannot be read from outside the actor object unless they are performed asynchronously, and stored properties cannot be *written* from outside the actor object at all. The async behavior isn’t there for performance; instead it’s because Swift automatically places these requests into a queue that is processed sequentially to avoid race conditions.

So, we could rewrite out `RiskyCollector` class to be a `SafeCollector` actor, like this:

```swift
actor SafeCollector {
    var deck: Set<String>

    init(deck: Set<String>) {
        self.deck = deck
    }

    func send(card selected: String, to person: SafeCollector) async -> Bool {
        guard deck.contains(selected) else { return false }

        deck.remove(selected)
        await person.transfer(card: selected)
        return true
    }

    func transfer(card: String) {
        deck.insert(card)
    }
}
```

There are several things to notice in that example:

1. Actors are created using the new `actor` keyword. This is a new concrete nominal type in Swift, joining structs, classes, and enums.
2. The `send()` method is marked with `async`, because it will need to suspend its work while waiting for the transfer to complete.
3. Although the `transfer(card:)` method is *not* marked with `async`, we still need to *call* it with `await` because it will wait until the other `SafeCollector` actor is able to handle the request.

To be clear, an actor can use its own properties and methods freely, asynchronously or otherwise, but when interacting with a different actor it must always be done asynchronously. With these changes Swift can ensure that all actor-isolated state is never accessed concurrently, and more importantly this is done at compile time so that safety is guaranteed.

Actors and classes have some similarities:

- Both are reference types, so they can be used for shared state.
- They can have methods, properties, initializers, and subscripts.
- They can conform to protocols and be generic.
- Any properties and methods that are static behave the same in both types, because they have no concept of `self` and therefore don’t get isolated.

Beyond actor isolation, there are two other important differences between actors and classes:

- Actors do not currently support inheritance, which makes their initializers much simpler – there is no need for convenience initializers, overriding, the `final` keyword, and more. This might change in the future.
- All actors implicitly conform to a new `Actor` protocol; no other concrete type can use this. This allows you to restrict other parts of your code so it can work only with actors.

The best way I’ve heard to explain how actors differ from classes is this: “actors pass messages, not memory.” So, rather than one actor poking directly around in another’s properties or calling their methods, we instead send a message asking for the data and let the Swift runtime handle it for us safely.

::: details Other Changes in Swift 5.5

```component VPCard
{
  "title": "Async await | Changes in Swift 5.5",
  "desc": "Async await",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/async-await.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Async sequences | Changes in Swift 5.5",
  "desc": "Async sequences",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/async-sequences.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Effectful read-only properties | Changes in Swift 5.5",
  "desc": "Effectful read-only properties",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/effectful-read-only-properties.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Structured concurrency | Changes in Swift 5.5",
  "desc": "Structured concurrency",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/structured-concurrency.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "async let bindings | Changes in Swift 5.5",
  "desc": "async let bindings",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/async-let-bindings.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Continuations for interfacing async tasks with synchronous code | Changes in Swift 5.5",
  "desc": "Continuations for interfacing async tasks with synchronous code",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/continuations.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Actors | Changes in Swift 5.5",
  "desc": "Actors",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/actors.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
```component VPCard
{
  "title": "Global actors | Changes in Swift 5.5",
  "desc": "Global actors",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/global-actors.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Sendable and @Sendable closures | Changes in Swift 5.5",
  "desc": "Sendable and @Sendable closures",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/sendable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "if for postfix member expressions | Changes in Swift 5.5",
  "desc": "if for postfix member expressions",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/postfix-if.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Interchangeable use of CGFloat and Double types | Changes in Swift 5.5",
  "desc": "Interchangeable use of CGFloat and Double types",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/interchangeable-cgfloat-double.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Codable synthesis for enums with associated values | Changes in Swift 5.5",
  "desc": "Codable synthesis for enums with associated values",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/codable-enums.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "lazy now works in local contexts | Changes in Swift 5.5",
  "desc": "lazy now works in local contexts",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/local-lazy.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Extending property wrappers to function and closure parameters | Changes in Swift 5.5",
  "desc": "Extending property wrappers to function and closure parameters",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/property-wrapper-function-parameters.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Extending static member lookup in generic contexts | Changes in Swift 5.5",
  "desc": "Extending static member lookup in generic contexts",
  "link": "/explore/articles/hackingwithswift.com/swift/5.5/static-member-generic.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.5 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-4-to-5-5.playground.zip)

:::

---

<TagLinks />