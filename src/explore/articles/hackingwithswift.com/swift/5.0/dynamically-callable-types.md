---
lang: ko-KR
title: Dynamically callable types
description: Article(s) > Dynamically callable types
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.0
head:
  - - meta:
    - property: og:title
      content: Article(s) > Dynamically callable types
    - property: og:description
      content: Dynamically callable types
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.0/dynamically-callable-types.html
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
  "title": "Dynamically callable types | Changes in Swift 5.0",
  "desc": "Dynamically callable types",
  "link": "https://hackingwithswift.com/swift/5.0/dynamically-callable-types", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.0

[SE-0216 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0216-dynamic-callable.md) adds a new `@dynamicCallable` attribute to Swift, which brings with it the ability to mark a type as being directly callable. It’s syntactic sugar rather than any sort of compiler magic, effectively transforming this code:

```swift
let result = random(numberOfZeroes: 3)
```

Into this:

```swift
let result = random.dynamicallyCall(withKeywordArguments: ["numberOfZeroes": 3])
```

`@dynamicCallable` is the natural extension of Swift 4.2's `@dynamicMemberLookup`, and serves the same purpose: to make it easier for Swift code to work alongside dynamic languages such as Python and JavaScript.

To add this functionality to your own types, you need to add the `@dynamicCallable` attribute plus one or both of these methods:

```swift
func dynamicallyCall(withArguments args: [Int]) -> Double

func dynamicallyCall(withKeywordArguments args: KeyValuePairs<String, Int>) -> Double
```

The first of those is used when you call the type without parameter labels (e.g. `a(b, c)`), and the second is used when you *do* provide labels (e.g. `a(b: cat, c: dog)`).

`@dynamicCallable` is really flexible about which data types its methods accept and return, allowing you to benefit from all of Swift’s type safety while still having some wriggle room for advanced usage. So, for the first method (no parameter labels) you can use anything that conforms to `ExpressibleByArrayLiteral` such as arrays, array slices, and sets, and for the second method (with parameter labels) you can use anything that conforms to `ExpressibleByDictionaryLiteral` such as dictionaries and key value pairs.

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

::: details Other Changes in Swift 5.0

```component VPCard
{
  "title": "Raw strings | Changes in Swift 5.0",
  "desc": "Raw strings",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/raw-strings.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "A standard Result type | Changes in Swift 5.0",
  "desc": "A standard Result type",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/result.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Customizing string interpolation | Changes in Swift 5.0",
  "desc": "Customizing string interpolation",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/string-interpolation.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Dynamically callable types | Changes in Swift 5.0",
  "desc": "Dynamically callable types",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/dynamically-callable-types.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Handling future enum cases | Changes in Swift 5.0",
  "desc": "Handling future enum cases",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/handling-future-enum-cases.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Flattening nested optionals resulting from try? | Changes in Swift 5.0",
  "desc": "Flattening nested optionals resulting from try?",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/flattening-optionals.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Checking for integer multiples | Changes in Swift 5.0",
  "desc": "Checking for integer multiples",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/integer-multiples.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Transforming and unwrapping dictionary values with compactMapValues() | Changes in Swift 5.0",
  "desc": "Transforming and unwrapping dictionary values with compactMapValues()",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/compactmapvalues.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.0 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-4-2-to-5-0.playground.zip)

:::

---

<TagLinks />