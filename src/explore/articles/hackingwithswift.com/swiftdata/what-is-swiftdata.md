---
lang: ko-KR
title: What is SwiftData?
description: Article(s) > What is SwiftData?
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
      content: Article(s) > What is SwiftData?
    - property: og:description
      content: What is SwiftData?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/what-is-swiftdata.html
prev: /explore/articles/hackingwithswift.com/swiftdata/README.md
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
  "title": "What is SwiftData? | SwiftData by Example",
  "desc": "What is SwiftData?",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/what-is-swiftdata", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftData is a fast, powerful, and easy-to-use way to store data in apps built for iOS, macOS, tvOS, watchOS, and even visionOS. It lets us create custom objects, define how they link together, retrieve them with filtering and sorting, and even synchronize them to iCloud – and much more too.

Not only does SwiftData take full advantage of the latest Swift language features, but it’s also built with SwiftUI in mind: if you’re building apps with SwiftUI, you’ll find SwiftData slots in almost invisibly.

Behind the scenes, SwiftData is powered by a much bigger and more mature framework called Core Data. That brings all sorts of benefits, not least 20 years of development and maturity. But SwiftData is more than just a simple overlay: Apple really went to town in isolating and resolving the key pain points developers were reporting with the older framework, meaning that SwiftData is a significant improvement for anyone who has used Core Data in the past.

One downside is that SwiftData supports only iOS 17 or later, along with other coordinated releases – that’s macOS Sonoma, tvOS 17, watchOS 10, and visionOS 1.0.

SwiftData makes a great choice for any kind of on-device storage, including:

1. Permanent storage of user data, such as their to do lists or cooking recipes.
2. Temporary storage of user data, where SwiftData is used as a cache for data fetched from a server.
3. Document-based apps, e.g. text or video editors.
4. Complex user settings or history data.

It’s *less* of a great choice when:

1. You need to support many users using iOS 16 and earlier. Although SwiftData and Core Data can live side by side by in the same app, it’s extra work.
2. Your data is stored only in CloudKit or another equivalent service, and you need to be using live data at all times.
3. You need the full range of capabilities offered by Core Data. Many features from Core Data have yet to surface in SwiftData, so if you have more advanced use-cases you should probably stick with Core Data for now.

---

<TagLinks />