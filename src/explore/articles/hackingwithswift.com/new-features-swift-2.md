---
lang: ko-KR
title: "Key features in Swift"
description: "Key features in Swift"
icon: fa-brands fa-swift
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-2.0
  - xcode
head:
  - - meta:
    - property: og:title
      content:  Key features in Swift
    - property: og:description
      content: "Key features in Swift"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/new-features-swift-2.html
prev: /programming/swift/articles/README.md
date: 2015-06-11
isOriginal: false
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

```component VPCard
{
  "title": "Key features in Swift – Hacking with Swift",
  "desc": "Key features in Swift",
  "link": "https://hackingwithswift.com/new-features-swift-2",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

I already wrote overviews of [all the new features of Swift 2](/explore/articles/hackingwithswift.com/swift2.md) and [the new features in iOS 9](/explore/articles/hackingwithswift.com/ios9.md), but I wanted to get into more depth with some of the Swift 2 language changes so you could start getting to grips with it.

So, I wrote four short articles explaining four key new features in Swift 2 syntax: try catch error handling, guard, defer and API availability checking.

You can work through them in any order you want – enjoy!

::: info UPDATE

I put together a [huge and free collection of Swift example code](https://hackingwithswift.com/example-code/), so if you're upgrading your code you should definitely check it out.
<!-- TODO: add VPCard -->

:::

- [Error handling in Swift 2: `try`, `catch`, `do` and `throw`](/explore/articles/hackingwithswift.com/new-syntax-swift-2-error-handling-try-catch.md) – it's been entirely rewritten to be modern, fast and safe, and unless you use only a small subset of the iOS APIs you're going to need to learn about it,
- [The `guard` keyword in Swift 2: early returns made easy](/explore/articles/hackingwithswift.com/new-syntax-swift-2-guard.md) – `guard` takes an `if` statement and adds extra optional unwrapping power, amongst other things.
- [The `defer` keyword in Swift 2: `try`/`finally` done right](/explore/articles/hackingwithswift.com/new-syntax-swift-2-defer.md") – if you return from a method at the end or part way through, or if you exit a method by throwing an error, your deferred work will take place.
- [Availability checking in Swift 2: backwards compatibility the smart way](/explore/articles/hackingwithswift.com/new-syntax-swift-2-availability-checking.md) – great for using `if #available` to run version-specific code in small blocks.

---

<TagLinks />
