---
lang: ko-KR
title: "How to use @dynamicCallable in Swift"
description: Swift 5.0 introduces a new way to work with dynamic languages
icon: fa-brands fa-swift
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-5.0
  - ios
  - xcode
head:
  - - meta:
    - property: og:title
      content: How to use @dynamicCallable in Swift
    - property: og:description
      content: Swift 5.0 introduces a new way to work with dynamic languages
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/how-to-use-dynamiccallable-in-swift.html
prev: /programming/swift/articles/README.md
date: 2018-11-27
isOriginal: false
cover: https://hackingwithswift.com/uploads/swift-evolution-4.jpg
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Swift > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/swift/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="How to use @dynamicCallable in Swift – Hacking with Swift"
  desc="Swift 5.0 introduces a new way to work with dynamic languages"
  url="https://hackingwithswift.com/articles/134/how-to-use-dynamiccallable-in-swift"
  logo="https://hackingwithswift.com/favicon.svg"
  preview="https://hackingwithswift.com/uploads/swift-evolution-4.jpg"/>

![](https://hackingwithswift.com/uploads/swift-evolution-4.jpg)

[SE-0216 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0216-dynamic-callable.md) adds a new `@dynamicCallable` attribute to Swift, which brings with it the ability to mark a type as being directly callable. It’s syntactic sugar rather than any sort of compiler magic, effectively transforming this code:

```swift
let result = random(numberOfZeroes: 3)
```

Into this:

```swift
let result = random.dynamicallyCall(withKeywordArguments: ["numberOfZeroes": 3])
```

Previously I wrote about a [feature in Swift 4.2 called @dynamicMemberLookup](/explore/articles/hackingwithswift.com/how-to-use-dynamic-member-lookup-in-swift.md). `@dynamicCallable` is the natural extension of `@dynamicMemberLookup`, and serves the same purpose: to make it easier for Swift code to work alongside dynamic languages such as Python and JavaScript.

To add this functionality to your own types, you need to add the `@dynamicCallable` attribute plus one or both of these methods:

```swift
func dynamicallyCall(withArguments args: [Int]) -> Double

func dynamicallyCall(withKeywordArguments args: KeyValuePairs<String, Int>) -> Double
```

The first of those is used when you call the type without parameter labels (e.g. `a(b, c)`), and the second is used when you *do* provide labels (e.g. `a(b: cat, c: dog)`).

`@dynamicCallable` is really flexible about which data types its methods accept and return, allowing you to benefit from all of Swift’s type safety while still having some wriggle room for advanced usage. So, for the first method (no parameter labels) you can use anything that conforms to `ExpressibleByArrayLiteral` such as arrays, array slices, and sets, and for the second method (with parameter labels) you can use anything that conforms to `ExpressibleByDictionaryLiteral` such as dictionaries and key value pairs.

::: note

If you haven’t used `KeyValuePairs` before, now would be a good time to learn what they are because they are extremely useful with `@dynamicCallable`. Find out more here: [What are KeyValuePairs?](/explore/articles/hackingwithswift.com/example-code/language/what-are-keyvaluepairs.md)
<!-- TODO: add VPCard -->

:::

As well as accepting a variety of inputs, you can also provide multiple overloads for a variety of outputs – one might return a string, one an integer, and so on. As long as Swift is able to resolve which one is used, you can mix and match all you want.

Let’s look at an example. First, here’s a `RandomNumberGenerator` struct that generates numbers between 0 and a certain maximum, depending on what input was passed in:

```swift
struct RandomNumberGenerator {
    func generate(numberOfZeroes: Int) -> Double {
        let maximum = pow(10, Double(numberOfZeroes))
        return Double.random(in: 0...maximum)
    }
}
```

To switch that over to `@dynamicCallable` we’d write something like this instead:

```swift
@dynamicCallable
struct RandomNumberGenerator {
    func dynamicallyCall(withKeywordArguments args: KeyValuePairs<String, Int>) -> Double {
        let numberOfZeroes = Double(args.first?.value ?? 0)
        let maximum = pow(10, numberOfZeroes)
        return Double.random(in: 0...maximum)
    }
}
```

That method can be called with any number of parameters, or perhaps zero, so we read the first value carefully and use nil coalescing to make sure there’s a sensible default.

We can now create an instance of `RandomNumberGenerator` and call it like a function:

```swift
let random = RandomNumberGenerator()
let result = random(numberOfZeroes: 0)
```

If you had used `dynamicallyCall(withArguments:)` instead – or at the same time, because you can have them both a single type – then you’d write this:

```swift
@dynamicCallable
struct RandomNumberGenerator {
    func dynamicallyCall(withArguments args: [Int]) -> Double {
        let numberOfZeroes = Double(args[0])
        let maximum = pow(10, numberOfZeroes)
        return Double.random(in: 0...maximum)
    }
}

let random = RandomNumberGenerator()
let result = random(0)
```

There are some important rules to be aware of when using `@dynamicCallable`:

- You can apply it to structs, enums, classes, and protocols.
- If you implement `withKeywordArguments:` and don’t implement `withArguments:`, your type can still be called without parameter labels – you’ll just get empty strings for the keys.
- If your implementations of `withKeywordArguments:` or `withArguments:` are marked as throwing, calling the type will also be throwing.
- You can’t add `@dynamicCallable` to an extension, only the primary definition of a type.
- You can still add other methods and properties to your type, and use them as normal.

Perhaps more importantly, there is no support for method resolution, which means we must call the type directly (e.g. `random(numberOfZeroes: 5)`) rather than calling specific methods on the type (e.g. `random.generate(numberOfZeroes: 5)`). There is already some discussion on adding the latter using a method signature such as this:

```swift
func dynamicallyCallMethod(named: String, withKeywordArguments: KeyValuePairs<String, Int>)
```

If that became possible in future Swift versions it might open up some very interesting possibilities for test mocking.

In the meantime, `@dynamicCallable` is not likely to be widely popular, but it *is* hugely important for a small number of people who want interactivity with Python, JavaScript, and other languages.

---

<TagLinks />