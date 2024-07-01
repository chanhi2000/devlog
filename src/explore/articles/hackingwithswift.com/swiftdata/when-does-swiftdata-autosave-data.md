---
lang: ko-KR
title: When does SwiftData autosave data?
description: Article(s) > When does SwiftData autosave data?
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
      content: Article(s) > When does SwiftData autosave data?
    - property: og:description
      content: When does SwiftData autosave data?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/when-does-swiftdata-autosave-data.html
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
  "title": "When does SwiftData autosave data? | SwiftData by Example",
  "desc": "When does SwiftData autosave data?",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/when-does-swiftdata-autosave-data", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 16

SwiftData automatically saves all our changes effectively immediately – it's so fast the chance of any data loss is effectively zero. *Exactly* when it happens is an implementation detail, but from what I can tell it's in the following circumstances:

- Every time the app goes to the background
- Every time the app moves back to the foreground
- Every time the current runloop ends

That last one is the most important: given that your runloop lasts 1/60th or 1/120th of a second, the time between you making a change and SwiftData saving it is… well, basically zero. (Okay, technically it's 0.008333 of a second, but come on…)

To old-school Core Data users this probably sounds extremely wasteful, but even when testing several hundred thousand objects I haven't hit a performance problem: the autosave happens immediately, every time.

That being said, please try benchmarking it for your own project. If you have particularly heavy model objects – if you're saving movies as external files, for example – then I would imagine autosave being more costly, so you might need to handle it more carefully.

If you decide autosave isn't suitable for your project, you can disable it either when creating your own custom model container, or by adjusting the `autosaveEnabled` property for an existing model context. Once that's done, call `save()` manually at whatever points you think work best for you.

---

<TagLinks />