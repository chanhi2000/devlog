---
lang: ko-KR
title: Conditional conformances
description: Article(s) > Conditional conformances
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-4.1
head:
  - - meta:
    - property: og:title
      content: Article(s) > Conditional conformances
    - property: og:description
      content: Conditional conformances
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/4.1/conditional-conformance.html
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
  "title": "Conditional conformances | Changes in Swift 4.1",
  "desc": "Conditional conformances",
  "link": "https://hackingwithswift.com/swift/4.1/conditional-conformance", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 4.1

Swift 4.1 implements [SE-0143 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0143-conditional-conformances.md), which introduced proposed conditional conformances into the language. This allows types to conform to a protocol only when certain conditions are met.

To demonstrate conditional conformances, let's create a `Purchaseable` protocol that we can use to buy things:

```swift
protocol Purchaseable {
   func buy()
}
```

We can now define a `Book` struct that conforms to the protocol, and prints a message when a book is bought:

```swift
struct Book: Purchaseable {
   func buy() {
      print("You bought a book")
   }
}
```

So far this is easy enough, but let's take it one step further: what if the user has a basket full of books, and wants to buy them all? We could loop over all books in the array by hand, calling `buy()` on each one. But a better approach is to write an extension on `Array` to make it conform to `Purchaseable`, then give it a `buy()` method that in turn calls `buy()` on each of its elements.

This is where conditional conformances come in: if we tried to extend all arrays, we'd be adding functionality where it wouldn't make sense – we'd be adding `buy()` to arrays of strings, for example, even though those strings don't have a `buy()` method we can call.

Swift 4.1 lets us make arrays conform to `Purchaseable` only if their elements also conform to `Purchaseable`, like this:

```swift
extension Array: Purchaseable where Element: Purchaseable {
   func buy() {
      for item in self {
         item.buy()
      }
   }
}
```

As you can see, conditional conformances let us constrain the way our extensions are applied more precisely than was possible before.

Conditional conformances also make large parts of Swift code easier and safer, even if you don't do any extra work yourself. For example, this code creates two arrays of optional strings and checks whether they are equal:

```swift
var left: [String?] = ["Andrew", "Lizzie", "Sophie"]
var right: [String?] = ["Charlotte", "Paul", "John"]
left == right
```

That might seem trivial, but that code wouldn't even compile in Swift 4.0 – both `String` and `[String]` were equatable, but `[String?]` was not.

The introduction of conditional conformance in Swift 4.1 means that it’s now possible to add protocol conformance to a type as long as it satisfies a condition. In this case, if the elements of the array are equatable, that means the whole thing is equatable. So, the above code now compiles in Swift 4.1

Conditional conformance has been extended to the `Codable` protocol in a way that will definitely make things safer. For example:

```swift
struct Person {
   var name = "Taylor"
}

var people = [Person()]
var encoder = JSONEncoder()
// try encoder.encode(people)
```

If you uncomment the `encoder.encode(people)` line, Swift will refuse to build your code because you're trying to encode a struct that doesn't conform to `Codable`. However, that code compiled cleanly with Swift 4.0, then threw a fatal error at runtime because `Person` doesn’t conform to `Codable`.

Obviously no one wants a fatal error at runtime, because it means your app crashes. Fortunately, Swift 4.1 cleans this up using conditional conformances: `Optional`, `Array`, `Dictionary`, and `Set` now only conform to `Codable` if their contents also conform to `Codable`, so the above code will refuse to compile.

::: details Other Changes in Swift 4.1

```component VPCard
{
  "title": "Synthesized Equatable and Hashable | Changes in Swift 4.1",
  "desc": "Synthesized Equatable and Hashable",
  "link": "/explore/articles/hackingwithswift.com/swift/4.1/synthesized-protocols.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Key decoding strategies for Codable | Changes in Swift 4.1",
  "desc": "Key decoding strategies for Codable",
  "link": "/explore/articles/hackingwithswift.com/swift/4.1/key-decoding-strategies.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Conditional conformances | Changes in Swift 4.1",
  "desc": "Conditional conformances",
  "link": "/explore/articles/hackingwithswift.com/swift/4.1/conditional-conformance.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
```component VPCard
{
  "title": "Recursive constraints on associated types | Changes in Swift 4.1",
  "desc": "Recursive constraints on associated types",
  "link": "/explore/articles/hackingwithswift.com/swift/4.1/recursive-constraints.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Build configuration import testing | Changes in Swift 4.1",
  "desc": "Build configuration import testing",
  "link": "/explore/articles/hackingwithswift.com/swift/4.1/import-testing.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Target environment testing | Changes in Swift 4.1",
  "desc": "Target environment testing",
  "link": "/explore/articles/hackingwithswift.com/swift/4.1/target-environment.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "flatMap is now (partly) compactMap() | Changes in Swift 4.1",
  "desc": "flatMap is now (partly) compactMap()",
  "link": "/explore/articles/hackingwithswift.com/swift/4.1/compactmap.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 4.1 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-4-0-to-4-1.playground.zip)

:::

---

<TagLinks />