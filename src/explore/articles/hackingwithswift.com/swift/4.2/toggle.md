---
lang: ko-KR
title: Boolean toggling
description: Article(s) > Boolean toggling
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
      content: Article(s) > Boolean toggling
    - property: og:description
      content: Boolean toggling
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/4.2/toggle.html
next: /explore/articles/hackingwithswift.com/swift/4.1/synthesized-protocols.md
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
  "title": "Boolean toggling | Changes in Swift 4.2",
  "desc": "Boolean toggling",
  "link": "https://hackingwithswift.com/swift/4.2/toggle", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 4.2

[SE-0199 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0199-bool-toggle.md) introduced a new `toggle()` method to booleans that flip them between true and false..

The entire code to implement proposal is only a handful of lines of Swift:

```swift
extension Bool {
   mutating func toggle() {
      self = !self
   }
}
```

However, the end result makes for much more natural Swift code:

```swift
var loggedIn = false
loggedIn.toggle()
```

As noted in the proposal, this is particularly useful in more complex data structures: `myVar.prop1.prop2.enabled.toggle()` avoids the potential typing errors that could be caused using manual negation.

The proposal makes Swift easier and safer to write, and is purely additive, so I think most folks will switch to using it quickly enough.

::: details Other Changes in Swift 4.2

```component VPCard
{
  "title": "Derived collections of enum cases | Changes in Swift 4.2",
  "desc": "Derived collections of enum cases",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/caseiterable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Warning and error diagnostic directives | Changes in Swift 4.2",
  "desc": "Warning and error diagnostic directives",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/warning-error.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Dynamic member look up | Changes in Swift 4.2",
  "desc": "Dynamic member look up",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/dynamic-member-lookup.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Enhanced conditional conformances | Changes in Swift 4.2",
  "desc": "Enhanced conditional conformances",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/conditional-conformance.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Random number generation and shuffling | Changes in Swift 4.2",
  "desc": "Random number generation and shuffling",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/random.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Simpler, more secure hashing | Changes in Swift 4.2",
  "desc": "Simpler, more secure hashing",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/hashable.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Checking sequence elements match a condition | Changes in Swift 4.2",
  "desc": "Checking sequence elements match a condition",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/allsatisfy.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "In-place collection element removal | Changes in Swift 4.2",
  "desc": "In-place collection element removal",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/remove-where.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Boolean toggling | Changes in Swift 4.2",
  "desc": "Boolean toggling",
  "link": "/explore/articles/hackingwithswift.com/swift/4.2/toggle.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
[<FontIcon icon="fas fa-file-zipper"/>Download Swift 4.2 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-4-1-to-4-2.playground.zip)

:::

---

<TagLinks />