---
lang: ko-KR
title: "Value and Type Parameter Packs"
description: "Article(s) > Value and Type Parameter Packs"
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.9
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Value and Type Parameter Packs"
    - property: og:description
      content: "Value and Type Parameter Packs"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.9/variadic-generics.html
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
  "title": "Value and Type Parameter Packs | Changes in Swift 5.9",
  "desc": "Value and Type Parameter Packs",
  "link": "https://hackingwithswift.com/swift/5.9/variadic-generics", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.9

[SE-0393 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0393-parameter-packs.md), [SE-0398 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0398-variadic-types.md), and [SE-0399 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`](https://github.com/apple/swift-evolution/blob/main/proposals/0399-tuple-of-value-pack-expansion.md)) combined to form a rather dense knot of improvements to Swift that allow us to use variadic generics.

These proposals solve a significant problem in Swift, which is that generic functions required a specific number of type parameters. These functions could still accept variadic parameters, but they still had to use the same type ultimately.

As an example, we could have three different structs that represent different parts of our program:

```swift
struct FrontEndDev {
    var name: String
}

struct BackEndDev {
    var name: String
}

struct FullStackDev {
    var name: String
}
```

In practice they would have lots more properties that make those types unique, but you get the point – three different types exist.

We could make instances of those structs like this:

```swift
let johnny = FrontEndDev(name: "Johnny Appleseed")
let jess = FrontEndDev(name: "Jessica Appleseed")
let kate = BackEndDev(name: "Kate Bell")
let kevin = BackEndDev(name: "Kevin Bell")

let derek = FullStackDev(name: "Derek Derekson")
```

And then when it came to actually doing work, we could pair developers together using a simple function like this one:

```swift
func pairUp1<T, U>(firstPeople: T..., secondPeople: U...) -> ([(T, U)]) {
    assert(firstPeople.count == secondPeople.count, "You must provide equal numbers of people to pair.")
    var result = [(T, U)]()

    for i in 0..<firstPeople.count {
        result.append((firstPeople[i], secondPeople[i]))
    }

    return result
}
```

That uses two variadic parameters to receive a group of first people and a group of second people, then returns them as an array. 

We can now use that to create programmer pairs who can work on some back-end and front-end work together:

```swift
let result1 = pairUp1(firstPeople: johnny, jess, secondPeople: kate, kevin)
```

So far this is old, but here’s where things get interesting: Derek is a full-stack developer, and can therefore work as either a back-end developer or a front-end developer. However, if we tried to use `johnny, derek` as the first parameter then Swift would refuse to build our code – it needs the types of all the first people and second people to be the same.

One way to fix this would be to throw away all our type information using `Any`, but parameter packs allow us to solve this much more elegantly.

The syntax might be a little intense at first, so I’m going to show you the code then try to break it down. Here it is:

```swift
func pairUp2<each T, each U>(firstPeople: repeat each T, secondPeople: repeat each U) -> (repeat (first: each T, second: each U)) {
    return (repeat (each firstPeople, each secondPeople))
}
```

There are four independent things happening there, so let’s work through them one by one:

1. `<each T, each U>` creates two type parameter packs, `T` and `U`.
2. `repeat each T` is a pack expansion, which is what expands the parameter pack into actual values – it’s the equivalent of `T...`, but avoids some confusion with `...` being used as an operator.
3. The return type means we’re sending back tuples of paired programmers, one each from `T` and `U`.
4. Our `return` keyword is what does the real work: it uses a pack expansion expression to take one value from `T` and one from `U`, putting them together into the returned value.

What it *doesn’t* show is that the return type automatically ensures both our `T` and `U` types have the same *shape* – they have the same number of items inside them. So, rather than using `assert()` like we had in the first function, Swift will simply issue a compiler error if we try to pass in two sets of data of different sizes.

With the new function in place, we can now pair up Derek with other developers, like this:

```swift
let result2 = pairUp2(firstPeople: johnny, derek, secondPeople: kate, kevin)
```

Now, what we’ve *actually* done is implement a simple `zip()` function, which means we can write nonsense like this:

```swift
let result3 = pairUp2(firstPeople: johnny, derek, secondPeople: kate, 556)
```

That tries to pair Kevin with the number 556, which clearly doesn’t make any sense. This is where parameter packs really come into their own, because we could define protocols such as these:

```swift
protocol WritesFrontEndCode { }
protocol WritesBackEndCode { }
```

Then add some conformances:

- `FrontEndDev` should conform to `WritesFrontEndCode`
- `BackEndDev` should conform to `WritesBackEndCode`
- `FullStackDev` should conform to both `WritesFrontEndCode` and `WritesBackEndCode`

And now we can add constraints to our type parameter packs:

```swift
func pairUp3<each T: WritesFrontEndCode, each U: WritesBackEndCode>(firstPeople: repeat each T, secondPeople: repeat each U) -> (repeat (first: each T, second: each U)) {
    return (repeat (each firstPeople, each secondPeople))
}
```

That now means only sensible pairs can happen – we always get someone who can write front-end code paired with someone who can write back-end code, regardless of whether they are full-stack developers or not.

To transfer this over to something you’re more likely to be experienced with, we have a similar situation in SwiftUI. We regularly want to be able to create views with many subviews, and if we were working with a single view type such as `Text` then you could imagine something like `Text...` working great. But that *wouldn’t* work if we wanted to have some text, then an image, then a button, and more – any non-uniform layout would simply not be possible.

Trying to use `AnyView...` or similar to erase the types throws away all the type information, so before Swift 5.9 this problem was solved by creating lots of function overloads. For example, SwiftUI’s view builder has `buildBlock()` overloads that can combine two views, three views, four views, etc, all the way up to 10 views – but no further, because they need to draw a line *somewhere*.

::: details Other Changes in Swift 5.9

```component VPCard
{
  "title": "if and switch expressions | Changes in Swift 5.9",
  "desc": "if and switch expressions",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/if-switch-expressions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Value and Type Parameter Packs | Changes in Swift 5.9",
  "desc": "Value and Type Parameter Packs",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/variadic-generics.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Macros | Changes in Swift 5.9",
  "desc": "Macros",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/macros.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Noncopyable structs and enums | Changes in Swift 5.9",
  "desc": "Noncopyable structs and enums",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/noncopyable-structs-and-enums.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "consume operator to end the lifetime of a variable binding | Changes in Swift 5.9",
  "desc": "consume operator to end the lifetime of a variable binding",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/consume-operator.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Convenience Async[Throwing]Stream.makeStream methods | Changes in Swift 5.9",
  "desc": "Convenience Async[Throwing]Stream.makeStream methods",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/convenience-asyncthrowingstream-makestream.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Add sleep(for:) to Clock | Changes in Swift 5.9",
  "desc": "Add sleep(for:) to Clock",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/sleep-for-clock.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Discarding task groups | Changes in Swift 5.9",
  "desc": "Discarding task groups",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/discarding-task-groups.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.9 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-8-to-5-9.playground.zip)

:::

---

<TagLinks />