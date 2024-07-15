---
lang: ko-KR
title: Opening existential arguments to optional parameters
description: Article(s) > Opening existential arguments to optional parameters
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.8
head:
  - - meta:
    - property: og:title
      content: Article(s) > Opening existential arguments to optional parameters
    - property: og:description
      content: Opening existential arguments to optional parameters
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.8/opening-existential-optional.html
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
  "title": "Opening existential arguments to optional parameters | Changes in Swift 5.8",
  "desc": "Opening existential arguments to optional parameters",
  "link": "https://hackingwithswift.com/swift/5.8/opening-existential-optional", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.8

[SE-0375 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0375-opening-existential-optional.md) extends a Swift 5.7 feature that allowed us to call generic functions using a protocol, fixing a small but annoying inconsistency: Swift 5.7 would not allow this behavior with optionals, whereas Swift 5.8 does.

For example, this code worked great in Swift 5.7, because it uses a non-optional `T` parameter:

```swift
func double<T: Numeric>(_ number: T) -> T {
    number * 2
}

let first = 1
let second = 2.0
let third: Float = 3

let numbers: [any Numeric] = [first, second, third]

for number in numbers {
    print(double(number))
}
```

In Swift 5.8, that same parameter can now be optional, like this:

```swift
func optionalDouble<T: Numeric>(_ number: T?) -> T {
    let numberToDouble = number ?? 0
    return  numberToDouble * 2
}

for number in numbers {
    print(optionalDouble(number))
}
```

In Swift 5.7 that would have issued the rather baffling error message “Type 'any Numeric' cannot conform to 'Numeric’”, so it’s good to see this inconsistency resolved.

::: details Other Changes in Swift 5.8

```component VPCard
{
  "title": "Lift all limitations on variables in result builders | Changes in Swift 5.8",
  "desc": "Lift all limitations on variables in result builders",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/lift-result-builder-limitations.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Function back deployment | Changes in Swift 5.8",
  "desc": "Function back deployment",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/function-back-deployment.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Allow implicit self for weak self captures, after self is unwrapped | Changes in Swift 5.8",
  "desc": "Allow implicit self for weak self captures, after self is unwrapped",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/implicit-self-weak-capture.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Concise magic file names | Changes in Swift 5.8",
  "desc": "Concise magic file names",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/concise-magic-file-names.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Opening existential arguments to optional parameters | Changes in Swift 5.8",
  "desc": "Opening existential arguments to optional parameters",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/opening-existential-optional.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
```component VPCard
{
  "title": "Collection downcasts in cast patterns are now supported | Changes in Swift 5.8",
  "desc": "Collection downcasts in cast patterns are now supported",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/collection-downcasts.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.8 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-7-to-5-8.playground.zip)

:::

---

<TagLinks />