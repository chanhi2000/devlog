---
lang: ko-KR
title: Should you learn SwiftData, Core Data, or both?
description: Article(s) > Should you learn SwiftData, Core Data, or both?
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swiftdata
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > Should you learn SwiftData, Core Data, or both?
    - property: og:description
      content: Should you learn SwiftData, Core Data, or both?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/should-you-learn-swiftdata-core-data-or-both.html
date: 2023-09-30
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftData by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftdata/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Should you learn SwiftData, Core Data, or both? | SwiftData by Example",
  "desc": "Should you learn SwiftData, Core Data, or both?",
  "link": "https://hackingwithswift.com/quick-start/should-you-learn-swiftdata-core-data-or-both", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Because SwiftData is an overlay over Core Data, deciding to learn either SwiftData or Core Data is a fairly easy one: if you are able to live without the missing features such as `NSFetchedResultsController`, and you are able to target iOS 17 and later, learning SwiftData is significantly faster and easier – you’ll be building apps in a tenth the time it would take for you to learn Core Data.

However, the nice thing about its overlay status is that it’s surprisingly easy to move from SwiftData to Core Data without risking any user information. This means if you’re six months into a project and realize you just can’t live without one particular feature, you can move your code across to the older framework without too much hassle.

One slightly less obvious downside to SwiftData is that its newness means it has significantly less documentation available, both from Apple but also the community. This means if you have a problem you’ll have a harder time finding solutions, simply because there are fewer people asking and answering on sites such as Stack Overflow. Hopefully this book goes a long way to filling the gaps!

In the meantime, one thing you can be clear on is Apple's direction of travel: Swift, SwiftUI, and SwiftData are the best way to build apps for Apple's platforms, and will continue to expand for years to come.

One signal for this is the logos: Swift, SwiftUI, and SwiftData all have logos that incorporate the Swift bird, which I think is intentional – I think it's Apple's way of saying these three form the new Cocoa. In the past, Cocoa meant using Foundation, AppKit, and Core Data, but now we have the Swift standard library, SwiftUI, and SwiftData, all of which combine to make app development as enjoyable, efficient, and safe as it can be.

---

<TagLinks />