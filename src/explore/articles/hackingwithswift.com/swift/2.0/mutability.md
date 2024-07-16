---
lang: ko-KR
title: Mutability warnings
description: Article(s) > Mutability warnings
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-2.0
head:
  - - meta:
    - property: og:title
      content: Article(s) > Mutability warnings
    - property: og:description
      content: Mutability warnings
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/2.0/mutability.html
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
  "title": "Mutability warnings | Changes in Swift 2.0",
  "desc": "Mutability warnings",
  "link": "https://hackingwithswift.com/swift/2.0/mutability", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 2.0

This is a simple change that is going to go a long way to help code readability. As you know, Swift developers prefer declaring things as constants (using `let`) rather than variables (using `var`). But what if you made something a variable by accident? Or if you thought you might need to change it, then never do?

As of Xcode 7 and Swift 2, you'll get warnings in your code whenever you declare variables that never change – Xcode literally examines the way you use the variable and knows if you never change it.

::: details Other changes in Swift 2.0…

```component VPCard
{
  "title": "Throwing errors | Changes in Swift 2.0",
  "desc": "Throwing errors",
  "link": "/explore/articles/hackingwithswift.com/swift/2.0/try.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Use the guard keyword for early returns | Changes in Swift 2.0",
  "desc": "Use the guard keyword for early returns",
  "link": "/explore/articles/hackingwithswift.com/swift/2.0/guard.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Measure strings using their character count | Changes in Swift 2.0",
  "desc": "Measure strings using their character count",
  "link": "/explore/articles/hackingwithswift.com/swift/2.0/strings.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Use the defer keyword to delay work until your scope exits | Changes in Swift 2.0",
  "desc": "Use the defer keyword to delay work until your scope exits",
  "link": "/explore/articles/hackingwithswift.com/swift/2.0/defer.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Mutability warnings | Changes in Swift 2.0",
  "desc": "Mutability warnings",
  "link": "/explore/articles/hackingwithswift.com/swift/2.0/mutability.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Checking API availability | Changes in Swift 2.0",
  "desc": "Checking API availability",
  "link": "/explore/articles/hackingwithswift.com/swift/2.0/api-availability.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 2.0 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-1-2-to-2-0.playground.zip)

:::

---

<TagLinks />