---
lang: ko-KR
title: Dynamic member look up
description: Article(s) > Dynamic member look up
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-4.2
head:
  - - meta:
    - property: og:title
      content: Article(s) > Dynamic member look up
    - property: og:description
      content: Dynamic member look up
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/4.2/dynamic-member-lookup.html
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
  "title": "Dynamic member look up | Changes in Swift 4.2",
  "desc": "Dynamic member look up",
  "link": "https://hackingwithswift.com/swift/4.2/dynamic-member-lookup", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 4.2

Conditional conformances [were introduced in Swift 4.1](/explore/articles/hackingwithswift.com/whats-new-in-swift-4-1.md), allowing types to conform to a protocol only when certain conditions are met.

For example, if we had a `Purchaseable` protocol:

```swift
protocol Purchaseable {
    func buy()
}
```

And a simple type that conforms to that protocol:

```swift
struct Book: Purchaseable {
    func buy() {
        print("You bought a book")
    }
}
```

Then we could make `Array` conform to `Purchaseable` if all the elements inside the array were also `Purchasable`:

```swift
extension Array: Purchaseable where Element: Purchaseable {
    func buy() {
        for item in self {
            item.buy()
        }
    }
}
```

This worked great at compile time, but there was a problem: if you needed to query a conditional conformance at runtime, your code would crash because it wasn’t supported in Swift 4.1

In Swift 4.2 that’s now fixed, so if you receive data of one type and want to check if it can be converted to a conditionally conformed protocol, it works great.

For example:

```swift
let items: Any = [Book(), Book(), Book()]

if let books = items as? Purchaseable {
    books.buy()
}
```

In addition, support for automatic synthesis of `Hashable` conformance has improved greatly in Swift 4.2. Several built-in types from the Swift standard library – including optionals, arrays, dictionaries, and ranges – now automatically conform to the `Hashable` protocol when their elements conform to `Hashable`.

For example:

```swift
struct User: Hashable {
    var name: String
    var pets: [String]
}
```

Swift 4.2 can automatically synthesize `Hashable` conformance for that struct, but Swift 4.1 could not.

::: details Other Changes in Swift 4.2

```component VPCard
{
  "title": "Derived collections of enum cases | Changes in Swift 4.2",
  "desc": "Derived collections of enum cases",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/caseiterable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Warning and error diagnostic directives | Changes in Swift 4.2",
  "desc": "Warning and error diagnostic directives",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/warning-error.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Dynamic member look up | Changes in Swift 4.2",
  "desc": "Dynamic member look up",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/dynamic-member-lookup.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Enhanced conditional conformances | Changes in Swift 4.2",
  "desc": "Enhanced conditional conformances",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/conditional-conformance.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Random number generation and shuffling | Changes in Swift 4.2",
  "desc": "Random number generation and shuffling",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/random.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Simpler, more secure hashing | Changes in Swift 4.2",
  "desc": "Simpler, more secure hashing",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/hashable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Checking sequence elements match a condition | Changes in Swift 4.2",
  "desc": "Checking sequence elements match a condition",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/allsatisfy.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "In-place collection element removal | Changes in Swift 4.2",
  "desc": "In-place collection element removal",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/remove-where.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Boolean toggling | Changes in Swift 4.2",
  "desc": "Boolean toggling",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/toggle.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 4.2 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-4-1-to-4-2.playground.zip)

:::

---

<TagLinks />