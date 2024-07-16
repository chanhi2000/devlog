---
lang: ko-KR
title: macOS apps can now use @NSApplicationMain
description: Article(s) > macOS apps can now use @NSApplicationMain
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-1.1
head:
  - - meta:
    - property: og:title
      content: Article(s) > macOS apps can now use @NSApplicationMain
    - property: og:description
      content: macOS apps can now use @NSApplicationMain
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/1.1/nsapplicationmain.html
next: /explore/articles/hackingwithswift.com/swift/README.md
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
  "title": "macOS apps can now use @NSApplicationMain | Changes in Swift 1.1",
  "desc": "macOS apps can now use @NSApplicationMain",
  "link": "https://hackingwithswift.com/swift/1.1/nsapplicationmain", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 1.1

iOS apps have a `@UIApplicationMain` attribute that automatically generates a `UIApplicationMain()` func to bootstrap the app. This is now also available to macOS developers using `@NSApplicationMain`, and this attribute will automatically be added to Cocoa app delegates in all new projects.

---

<TagLinks />