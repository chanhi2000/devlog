---
lang: ko-KR
title: Introduce existential any
description: Article(s) > Introduce existential any
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.6
head:
  - - meta:
    - property: og:title
      content: Article(s) > Introduce existential any
    - property: og:description
      content: Introduce existential any
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.6/existential-any.html
prev: /explore/articles/hackingwithswift.com/swift/5.7/noasync.md 
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
  "title": "Introduce existential any | Changes in Swift 5.6",
  "desc": "Introduce existential any",
  "link": "https://hackingwithswift.com/swift/5.6/existential-any", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.6

[SE-0335 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0335-existential-any.md) introduces a new `any` keyword to mark existential types, and although that might sound esoteric please don’t skip ahead: this one is a big change, and is likely to break a lot of Swift code in future versions.

Protocols allow us to specify a set of requirements that conforming types must adhere to, such as methods they must implement. So, we often write code like this:

```swift
protocol Vehicle {
    func travel(to destination: String)
}

struct Car: Vehicle {
    func travel(to destination: String) {
        print("I'm driving to \(destination)")
    }
}

let vehicle = Car()
vehicle.travel(to: "London")
```

It’s also possible to use protocols as generic type constraints in functions, meaning that we write code that can work with any kind of data that conforms to a particular protocol. For example, this will work with any kind of type that conforms to `Vehicle`:

```swift
func travel<T: Vehicle>(to destinations: [String], using vehicle: T) {
    for destination in destinations {
        vehicle.travel(to: destination)
    }
}

travel(to: ["London", "Amarillo"], using: vehicle)
```

When that code compiles, Swift can see we’re calling `travel()` with a `Car` instance and so it is able to create optimized code to call the `travel()` function directly – a process known as *static dispatch*.

All this matters because there is a second way to use protocols, and it looks very similar to the other code we’ve used so far:

```swift
let vehicle2: Vehicle = Car()
vehicle2.travel(to: "Glasgow")
```

Here we are still creating a `Car` struct, but we’re storing it as a `Vehicle`. This isn’t just a simple matter of hiding the underlying information, but instead this `Vehicle` type is a whole other thing called an *existential type*: a new data type that is able to hold any value of any type that conforms to the `Vehicle` protocol.

::: important

Existential types are different from opaque types that use the `some` keyword, e.g. `some View`, which must always represent one specific type that conforms to whatever constraints you specify.

:::

We can use existential types with functions too, like this:

```swift
func travel2(to destinations: [String], using vehicle: Vehicle) {
    for destination in destinations {
        vehicle.travel(to: destination)
    }
}
```

That might look similar to the other `travel()` function, but as this one accepts any kind of `Vehicle` object Swift can no longer perform the same set of optimizations – it has to use a process called *dynamic dispatch*, which is less efficient than the static dispatch available in the generic equivalent. So, Swift was in a position where both uses of protocols looked very similar, and actually the slower, existential version of our function was easier to write.

To resolve this problem, Swift 5.6 introduces a new `any` keyword for use with existential types, so that we’re explicitly acknowledging the impact of existentials in our code. In Swift 5.6 this new behavior is enabled and works, but in future Swift versions failing to use it will generate warnings, and from Swift 6 onwards the plan is to issue errors – you will be *required* to mark existential types using `any`.

So, you would write this:

```swift
let vehicle3: any Vehicle = Car()
vehicle3.travel(to: "Glasgow")

func travel3(to destinations: [String], using vehicle: any Vehicle) {
    for destination in destinations {
        vehicle.travel(to: destination)
    }
}
```

I know it took a lot of explanation to reach this conclusion, but hopefully it makes sense: when we use `Vehicle` as a conformance or a generic constraint we will carry on writing `Vehicle`, but when we use it as its own type we should start moving across to `any Vehicle`.

::: note This is a big breaking change in Swift.

Fortunately, like I said the Swift team are taking it slow – here’s what they said in the acceptance decision:

> “The goal is that that one can write code that compiles without warnings for the current Swift release and at least one major release prior, after which warnings can be introduced to guide users to the new syntax in existing language modes. Finally, the old syntax can be removed or repurposed only in a new major language version.”

<SiteInfo
  name="[Accepted with modifications] SE-0335: Introduce existential `any` - Evolution / Announcements - Swift Forums"
  desc="Hello Swift Community, The review  of SE-0335: Introduce existential any has completed. We had great discussions throughout the pitch and review phases of this proposal. The Core Team has accepted this proposal with sma..."
  url="https://forums.swift.org/t/accepted-with-modifications-se-0335-introduce-existential-any/54504"
  logo="https://global.discourse-cdn.com/swift/optimized/1X/0a90dde98a223f5841eeca49d89dc9f57592e8d6_2_180x180.png"
  preview="https://global.discourse-cdn.com/swift/original/1X/0a90dde98a223f5841eeca49d89dc9f57592e8d6.png"/>

:::

::: details Other Changes in Swift 5.6
<!-- 
```component VPCard
{
  "title": "Introduce existential any | Changes in Swift 5.6",
  "desc": "Introduce existential any",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/existential-any.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
```component VPCard
{
  "title": "Type placeholders | Changes in Swift 5.6",
  "desc": "Type placeholders",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/type-placeholders.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Allow coding of non String/Int keyed Dictionary into a KeyedContainer | Changes in Swift 5.6",
  "desc": "Allow coding of non String/Int keyed Dictionary into a KeyedContainer",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/codingkeyrepresentable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Unavailability condition | Changes in Swift 5.6",
  "desc": "Unavailability condition",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/unavailable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "More concurrency changes | Changes in Swift 5.6",
  "desc": "More concurrency changes",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/preconcurrency.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Plugins for Swift Package Manager | Changes in Swift 5.6",
  "desc": "Plugins for Swift Package Manager",
  "link": "/explore/articles/hackingwithswift.com/swift/5.6/swiftpm-plugins.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.6 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-5-to-5-6.playground.zip)

:::

---

<TagLinks />