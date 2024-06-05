---
lang: ko-KR
title: Where is Swift concurrency supported?
description: Article(s) > Where is Swift concurrency supported?
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > Where is Swift concurrency supported?
    - property: og:description
      content: Where is Swift concurrency supported?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/where-is-swift-concurrency-supported.html
date: 2021-07-01
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Swift Concurrency by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/concurrency/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Where is Swift concurrency supported? | Swift Concurrency by Example",
  "desc": "Where is Swift concurrency supported?",
  "link": "https://hackingwithswift.com/quick-start/concurrency/where-is-swift-concurrency-supported", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

When it was originally announced, Swift concurrency required at least iOS 15, macOS 12, watchOS 8, tvOS 15, or on other platforms at least Swift 5.5.

However, if you’re building your code using Xcode 13.2 or later you can back deploy to older versions of each of those operating systems: iOS 13, macOS 10.15, watchOS 6, and tvOS 13 are all supported. This offers the full range of Swift functionality, including actors, async/await, the task APIs, and more.

::: important

This backwards compatibility applies only to Swift language features, not to any APIs built using those language features. This means you can write your own code to use async/await, actors, and so on, but you won’t automatically gain access to the new Foundation APIs using those – things like the new `URLSession` APIs that use async/await still require iOS 15.

:::

If you are keen to use the newer APIs in your project while also preserving backwards compatibility for older OS releases, your best bet is to add a runtime version check for iOS 15 then wrap the older APIs with continuations. This kind of hybrid solution allows you to keep using async/await elsewhere in your project – you get all the benefits of concurrency for the vast majority of your code, while keeping your backwards deployment shims neatly organized in one place so they can be removed in a year or two.

::: details Similar solutions…

Concurrency vs parallelism
How to fix the error “async call in a function that does not support concurrency”
How to use continuations to convert completion handlers into async functions
What are tasks and task groups?
What is an asynchronous function?

:::

---

<TagLinks />