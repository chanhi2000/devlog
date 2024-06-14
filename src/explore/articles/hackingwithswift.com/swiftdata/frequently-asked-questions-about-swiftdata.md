---
lang: ko-KR
title: Frequently asked questions about SwiftData
description: Article(s) > Frequently asked questions about SwiftData
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
      content: Article(s) > Frequently asked questions about SwiftData
    - property: og:description
      content: Frequently asked questions about SwiftData
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/frequently-asked-questions-about-swiftdata.html
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
  "title": "Frequently asked questions about SwiftData | SwiftData by Example",
  "desc": "Frequently asked questions about SwiftData",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/frequently-asked-questions-about-swiftdata", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Ever since SwiftData was announced folks have been asking a whole bunch of questions to me, to Apple engineers, and more. I’ve answered as many of those as I can in this book, but the questions below are asked particularly commonly:

---

## Is it hard to start using SwiftData?

Core Data had quite a difficulty ramp for getting set up properly, but SwiftData takes such a small amount of code you’ll almost think you’ve missed something! Even when you start venturing into more advanced features, SwiftData does a great job of progressive disclosure – you can learn it bit by bit and get benefit at each step of the way, rather than having to learn many things at once just to get moving.

---

## Can Core Data apps be migrated to SwiftData?

Yes! SwiftData uses Core Data under the hood, which means all your data structures and more will remain intact. This means if you’ve shipped a Core Data app already, you can move over to SwiftData either partly or entirely whenever you’re ready.

---

## Can Core Data and SwiftData exist in the same app?

Yes, you can have both stacks running at the same time. Heck, they can even be pointing to the same data, and will stay in sync. Please make sure you keep the two data models in sync, though – if you adjust your Core Data model, make sure you apply the same change to your SwiftData model too.

---

## Do @Model classes need to be marked final?

No, but if you try subclassing them you're going to cause a lot of pain for yourself. If you want to avoid temptation, make your classes final.

---

## Why doesn’t SwiftData use structs for data models?

We all know Swift and SwiftUI developers love using structs as a simple and efficient way to represent data, but with data it’s complicated: if we load an array of users, then pass one user around for editing, we need to be able to keep all the screens in our app up to date as the user makes changes.

Sure, we could try to pass around an object identifier and just that to refer to an object, but if you think about it you’re kind of just recreating pointers – it’s a lot of extra effort just to land up with more or less the same result.

That’s not to say SwiftData must *only* use classes: you can incorporate any kind of `Codable` data into your models, including both structs and enums, and SwiftData will ensure they are saved and loaded correctly.

---

## Is there a way to force a CloudKit sync?

No; Apple really don’t want us trying to do this.

---

## Is there a way to add Codable support to a SwiftData object?

Yes, but it takes a little thinking – we don’t get automatic `Codable` support, and instead we need to implement it ourself.

---

## Can SwiftData be used with Objective-C?

No. Not only does it use native Swift classes, but it also uses a range of advanced Swift language features that aren’t available in Objective-C.

---

<TagLinks />