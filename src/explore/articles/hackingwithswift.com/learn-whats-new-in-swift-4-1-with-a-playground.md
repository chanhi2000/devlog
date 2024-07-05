---
lang: ko-KR
title: "Learn what's new in Swift 4.1 with a playground"
description: See the code, run the code, edit the code
icon: fa-brands fa-swift
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - ios
  - xcode
head:
  - - meta:
    - property: og:title
      content:  Learn what's new in Swift 4.1 with a playground
    - property: og:description
      content: See the code, run the code, edit the code
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/learn-whats-new-in-swift-4-1-with-a-playground-with-a-playground.html
prev: /programming/swift/articles/README.md
date: 2018-04-04
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
  name="Learn what's new in Swift 4.1 with a playground – Hacking with Swift"
  desc="See the code, run the code, edit the code"
  url="https://hackingwithswift.com/articles/70/learn-whats-new-in-swift-4-1-with-a-playground-with-a-playground"
  logo="https://hackingwithswift.com/favicon.svg"
  preview="https://hackingwithswift.com/uploads/swift-evolution-4.jpg"/>

![](https://hackingwithswift.com/uploads/swift-evolution-4.jpg)

Previously I wrote about [the new features in Swift 4.1](/explore/articles/hackingwithswift.com/whats-new-in-swift-4-1.md), but it's a lot more fun to see things in action and experiment yourself.

So, I just released an Xcode playground that demonstrates the new features introduced in Swift 4.1, complete with examples that I hope make them easy to understand and apply in your own work:

- Synthesized `Equatable` and `Hashable`
- Key decoding strategy in `Codable`
- Conditional conformances
- Recursive constraints on associated types
- Build configuration import testing
- Target environment testing
- `flatMap()` is now (partly) `compactMap()`

::: info

The playground is available on GitHub, so I hope you'll try it for yourself: 

<SiteInfo
  name="twostraws/whats-new-in-swift-4-1"
  desc="An Xcode playground that demonstrates the new features introduced in Swift 4.1."
  url="https://github.com/twostraws/whats-new-in-swift-4-1"
  logo="https://avatars.githubusercontent.com/u/190200?v=4"
  preview="https://opengraph.githubassets.com/a1360816631948796d3ae3ce271ac76ac99dcc4f3cf734118570cd9f7755009e/twostraws/whats-new-in-swift-4-1"/>

:::

I should add that the task of building this playground was made much easier thanks to previous work done by [<FontIcon icon="fa-brands fa-x-twitter"/>Ole Begemann](https://x.com/olebegemann).

---

<TagLinks />