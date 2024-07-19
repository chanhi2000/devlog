---
lang: ko-KR
title: "Upgrades for noncopyable types"
description: "Article(s) > Upgrades for noncopyable types"
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
      content: "Article(s) > Upgrades for noncopyable types"
    - property: og:description
      content: "Upgrades for noncopyable types"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/6.0/noncopyable-upgrades.html
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
  "title": "Upgrades for noncopyable types | Changes in Swift 6.0",
  "desc": "Upgrades for noncopyable types",
  "link": "https://hackingwithswift.com/swift/6.0/noncopyable-upgrades", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 6.0

Noncopyable types were [introduced in Swift 5.9](/explore/articles/hackingwithswift.com/swift/5.9/noncopyable-structs-and-enums.md), but are getting several upgrades in Swift 6.

As a reminder, noncopyable types allow us to create types that have unique ownership, which we can pass around using borrowing or consuming as needed.

One example of noncopyable types I previously used were the secret messages used in the Mission Impossible movies – they famously self-destruct after being read, which we can model with a noncopyable type that is consumed (i.e. destroyed) upon reading:

```swift
struct Message: ~Copyable {
    var agent: String
    private var message: String

    init(agent: String, message: String) {
        self.agent = agent
        self.message = message
    }

    consuming func read() {
        print("\(agent): \(message)")
    }
}

func createMessage() {
    let message = Message(agent: "Ethan Hunt", message: "You need to abseil down a skyscraper for some reason.")
    message.read()
}

createMessage()
```

In that code, the compiler enforces that `message.read()` can only ever be called once, because it consumes the object.

The first major improvement is [SE-0427 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0427-noncopyable-generics.md), which introduces a batch of improvements at once. The biggest of those is that every struct, class, enum, generic type parameter, and protocol in Swift 6 automatically conforms to a new `Copyable` protocol unless you explicitly opt out using `~Copyable`.

This impacts on the other changes introduced with this proposal. For example, noncopyable types can now be used with generics, allowing things like *optional* noncopyable instances because Swift's `Optional` is implemented as a generic enum. However, because generic type parameters automatically conform to `Copyable` we must explicitly opt out using `~Copyable`.

Similarly, this change means noncopyable types can now conform to protocols, but only when those protocols are also marked `~Copyable` because otherwise they get automatically opted into `Copyable` as mentioned above. (In case you were curious, `Copyable` types can conform to noncopyable protocols just fine.)

[SE-0429 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0429-partial-consumption.md) improves things further by adding partial consumption of noncopyable values.

Previously it could be a problem when one noncopyable type incorporated another. For example, even fairly trivial code like the below was a problem before [SE-0429 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0429-partial-consumption.md):

```swift
struct Package: ~Copyable {
    var from: String = "IMF"
    var message: Message

    consuming func read() {
        message.read()
    }
}
```

That code is now valid Swift, as long as the types in question don't have deinitializers. 

A third major noncopyable improvement is [SE-0432 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0432-noncopyable-switch.md), which allows us to borrow noncopyable types while switching over them. Previously it was impossible to do pattern matching with `where` clauses that depended on noncopyable values, whereas thanks to SE-0432 this is now possible in Swift 6.

Continuing our Mission Impossible example, we could say that one set of orders might be signed or anonymous, like this:

```swift
enum ImpossibleOrder: ~Copyable {
    case signed(Package)
    case anonymous(Message)
}
```

Because that enum has associated values that are noncopyable, it must itself be noncopyable. However, the associated values being noncopyable also means that pattern matching with `where` was tricky – if you wanted to perform one set of actions for one `Message` type, and a different set for another `Message` type, you were out of luck.

With [SE-0432 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0432-noncopyable-switch.md) this is now resolved, meaning code like the below is now allowed:

```swift
func issueOrders() {
    let message = Message(agent: "Ethan Hunt", message: "You need to abseil down a skyscraper for some reason.")
    let order = ImpossibleOrder.anonymous(message)

    switch consume order {
    case .signed(let package):
        package.read()
    case .anonymous(let message) where message.agent == "Ethan Hunt":
        print("Play dramatic music")
        message.read()
    case .anonymous(let message):
        message.read()
    }
}
```

Put together, this collection of changes helps make noncopyable types work much more naturally in Swift.

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

```component VPCard
{
  "title": "Access-level modifiers on import declarations | Changes in Swift 6.0",
  "desc": "Access-level modifiers on import declarations",
  "link": "/explore/articles/hackingwithswift.com/swift/6.0/access-level-import.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Upgrades for noncopyable types | Changes in Swift 6.0",
  "desc": "Upgrades for noncopyable types",
  "link": "/explore/articles/hackingwithswift.com/swift/6.0/noncopyable-upgrades.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
 -->
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