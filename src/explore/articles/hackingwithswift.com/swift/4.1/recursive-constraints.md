---
lang: ko-KR
title: Recursive constraints on associated types
description: Article(s) > Recursive constraints on associated types
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
      content: Article(s) > Recursive constraints on associated types
    - property: og:description
      content: Recursive constraints on associated types
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/4.1/recursive-constraints.html
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
  "title": "Recursive constraints on associated types | Changes in Swift 4.1",
  "desc": "Recursive constraints on associated types",
  "link": "https://hackingwithswift.com/swift/4.1/recursive-constraints", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 4.1

Swift 4.1 implements [SE-0157 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0157-recursive-protocol-constraints.md), which lifts restrictions on the way we use associated types inside protocols. As a result, we can now create recursive constraints for our associated types: associated types that are constrained by the protocol they are defined in.

To demonstrate this, let's consider a simple team hierarchy in a tech company. In this company, every employee has a manager – someone more senior to them that they report to. Each manager must also be an employee of the company, because it would be weird if they weren't.

We can express this relationship in a simple `Employee` protocol:

```swift
protocol Employee {
   associatedtype Manager: Employee
   var manager: Manager? { get set }
}
```

::: note

I've used an optional `Manager?` because ultimately one person (presumably the CEO) has no manager.

:::

Even though that's a fairly self-evident relationship, it wasn't possible to compile that code in Swift 4.0 because we're using the `Employee` protocol inside itself. However, this is fixed in Swift 4.1 because of the new ability to use recursive constraints on associated types.

Thanks to this new feature, we can model a simple tech company that has three kinds of team members: junior developers, senior developers, and board members. The reporting structure is also simple: junior developers are managed by senior developers, senior developers are managed by board members, and board members may be managed by another board member – e.g. the CTO reporting to the CEO.

That looks exactly as you would imagine thanks to Swift 4.1:

```swift
class BoardMember: Employee {
   var manager: BoardMember?
}

class SeniorDeveloper: Employee {
   var manager: BoardMember?
}

class JuniorDeveloper: Employee {
   var manager: SeniorDeveloper?
}
```

::: note

I've used classes here rather than structs because `BoardMember` itself contains a `BoardMember` property and that would result in an infinitely sized struct. If one of these has to be a class I personally would prefer to make all three classes just for consistency, but if you preferred you could leave `BoardMember` as a class and make both `SeniorDeveloper` and `JuniorDeveloper` into structs.

:::

::: details Other Changes in Swift 4.1

```component VPCard
{
  "title": "Synthesized Equatable and Hashable | Changes in Swift 4.1",
  "desc": "Synthesized Equatable and Hashable",
  "link": "/explore/articles/hackingwithswift.com/swift/4.1/synthesized-protocols.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Key decoding strategies for Codable | Changes in Swift 4.1",
  "desc": "Key decoding strategies for Codable",
  "link": "/explore/articles/hackingwithswift.com/swift/4.1/key-decoding-strategies.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Conditional conformances | Changes in Swift 4.1",
  "desc": "Conditional conformances",
  "link": "/explore/articles/hackingwithswift.com/swift/4.1/conditional-conformance.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Recursive constraints on associated types | Changes in Swift 4.1",
  "desc": "Recursive constraints on associated types",
  "link": "/explore/articles/hackingwithswift.com/swift/4.1/recursive-constraints.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Build configuration import testing | Changes in Swift 4.1",
  "desc": "Build configuration import testing",
  "link": "/explore/articles/hackingwithswift.com/swift/4.1/import-testing.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Target environment testing | Changes in Swift 4.1",
  "desc": "Target environment testing",
  "link": "/explore/articles/hackingwithswift.com/swift/4.1/target-environment.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "flatMap is now (partly) compactMap() | Changes in Swift 4.1",
  "desc": "flatMap is now (partly) compactMap()",
  "link": "/explore/articles/hackingwithswift.com/swift/4.1/compactmap.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 4.1 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-4-0-to-4-1.playground.zip)

:::

---

<TagLinks />