---
lang: ko-KR
title: "How to check whether a module is available using canImport()"
description: "Article(s) > How to check whether a module is available using canImport()"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-5.10
  - ios
  - ios-8.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to check whether a module is available using canImport()"
    - property: og:description
      content: "How to check whether a module is available using canImport()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-check-whether-a-module-is-available-using-canimport.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Language - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/language/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to check whether a module is available using canImport() | Language - free Swift example code",
  "desc": "How to check whether a module is available using canImport()",
  "link": "https://hackingwithswift.com/example-code/language/how-to-check-whether-a-module-is-available-using-canimport",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Writing multi-platform code has its own challenges, but if you use the `canImport()` compiler test then one big challenge is solved for you: you can write one chunk code to run if a specific module is available, and another chunk otherwise.

For example, this code will check for UIKit, AppKit, and all other possibilities so that you can pick whichever color type is best for the current platform:

```swift
#if canImport(UIKit)
// iOS, tvOS, and watchOS – use UIColor
#elseif canImport(AppKit)
// macOS – use NSColor
#else
// all other platforms – use a custom color object
#endif
```

Before `canImport()` was available we need to use `#if os(macOS)` instead, like this:

```swift
#if os(iOS) || os(tvOS) || os(watchOS)
// use UIColor
#else
// use NSColor
#endif
```

Using `canImport()` is an improvement because it lets you focus on what *functionality* you want rather than what operating system. So, if UIKit became available on macOS tomorrow you wouldn’t need to change your code to use it.

-->

::: details Similar solutions…

<!--
/example-code/language/what-is-whole-module-optimization">What is whole module optimization? 
/example-code/language/how-to-use-available-to-check-for-api-availability">How to use #available to check for API availability 
/example-code/language/how-to-check-whether-an-integer-lies-inside-a-range">How to check whether an integer lies inside a range 
/example-code/system/how-to-check-whether-your-other-apps-are-installed">How to check whether your other apps are installed 
/example-code/language/how-to-check-whether-a-date-is-inside-a-date-range">How to check whether a date is inside a date range</a>
-->

:::

---

<TagLinks />