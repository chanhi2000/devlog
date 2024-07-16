---
lang: ko-KR
title: Collection downcasts in cast patterns are now supported
description: Article(s) > Collection downcasts in cast patterns are now supported
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
      content: Article(s) > Collection downcasts in cast patterns are now supported
    - property: og:description
      content: Collection downcasts in cast patterns are now supported
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.8/collection-downcasts.html
next: /explore/articles/hackingwithswift.com/swift/5.7/if-let-shorthand.md
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
  "title": "Collection downcasts in cast patterns are now supported | Changes in Swift 5.8",
  "desc": "Collection downcasts in cast patterns are now supported",
  "link": "https://hackingwithswift.com/swift/5.8/collection-downcasts", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.8

This resolves another small but potentially annoying inconsistency in Swift where downcasting a collection – e.g. casting an array of `ClassA` to an array of another type that *inherits* from `ClassA` – would not be allowed in some circumstances.

For example, this code is now valid in Swift 5.8, whereas it would not have worked previously:

```swift
class Pet { }
class Dog: Pet {
    func bark() { print("Woof!") }
}

func bark(using pets: [Pet]) {
    switch pets {
    case let pets as [Dog]:
        for pet in pets {
            pet.bark()
        }
    default:
        print("No barking today.")
    }
}
```

Before Swift 5.8 that would have led to the error message, “Collection downcast in cast pattern is not implemented; use an explicit downcast to '[Dog]' instead.” In practice, syntax such as `if let dogs = pets as? [Dog] {` worked just fine, so I would imagine that error was rarely seen. However, this change does mean another language inconsistency is resolved, which is always welcome.

::: details Other Changes in Swift 5.8

```component VPCard
{
  "title": "Lift all limitations on variables in result builders | Changes in Swift 5.8",
  "desc": "Lift all limitations on variables in result builders",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/lift-result-builder-limitations.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Function back deployment | Changes in Swift 5.8",
  "desc": "Function back deployment",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/function-back-deployment.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Allow implicit self for weak self captures, after self is unwrapped | Changes in Swift 5.8",
  "desc": "Allow implicit self for weak self captures, after self is unwrapped",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/implicit-self-weak-capture.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Concise magic file names | Changes in Swift 5.8",
  "desc": "Concise magic file names",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/concise-magic-file-names.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Opening existential arguments to optional parameters | Changes in Swift 5.8",
  "desc": "Opening existential arguments to optional parameters",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/opening-existential-optional.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Collection downcasts in cast patterns are now supported | Changes in Swift 5.8",
  "desc": "Collection downcasts in cast patterns are now supported",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/collection-downcasts.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.8 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-7-to-5-8.playground.zip)

:::

---

<TagLinks />