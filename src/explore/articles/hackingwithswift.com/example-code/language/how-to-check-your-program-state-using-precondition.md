---
lang: ko-KR
title: "How to check your program state using precondition()"
description: "Article(s) > How to check your program state using precondition()"
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
      content: "Article(s) > How to check your program state using precondition()"
    - property: og:description
      content: "How to check your program state using precondition()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-check-your-program-state-using-precondition.html
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
  "title": "How to check your program state using precondition() | Language - free Swift example code",
  "desc": "How to check your program state using precondition()",
  "link": "https://hackingwithswift.com/example-code/language/how-to-check-your-program-state-using-precondition",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
You should already know that the `assert()` function lets you check the state of your program at runtime, and crash if things aren’t how they should be. One of the neat features of `assert()` is that it automatically gets removed when you build your app in release mode, but if you don’t want that to happen – if you want your app to crash if something is seriously wrong – then you should use the `precondition()` function instead.

`precondition()` works identically to `assert()`: give it a condition to check along with an optional message to print if the check fails. At runtime – even in release mode – Swift will run the check for you and crash if the check fails.

For example:

```swift
precondition(users.count > 0, "There must be at least one user.")
```

Whereas `assert()` should be used liberally to make sure your program is always in a sane state, `precondition()` should be used much more infrequently because it will still crash your app in release mode. That’s not always a bad thing, particularly if bad state means something is seriously corrupted, but you should definitely use it more carefully.

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/example-code/language/how-to-force-your-program-to-crash-with-assert">How to force your program to crash with assert() 
/example-code/system/how-to-run-an-external-program-using-process">How to run an external program using Process 
/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject? 
/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a>
-->

:::

---

<TagLinks />