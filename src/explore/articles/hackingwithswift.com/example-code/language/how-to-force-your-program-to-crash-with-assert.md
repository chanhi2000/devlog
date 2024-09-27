---
lang: ko-KR
title: "How to force your program to crash with assert()"
description: "Article(s) > How to force your program to crash with assert()"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to force your program to crash with assert()"
    - property: og:description
      content: "How to force your program to crash with assert()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-force-your-program-to-crash-with-assert.html
date: 2021-03-11
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
  "title": "How to force your program to crash with assert() | Language - free Swift example code",
  "desc": "How to force your program to crash with assert()",
  "link": "https://hackingwithswift.com/example-code/language/how-to-force-your-program-to-crash-with-assert",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
This might seem like a strange topic – after all, why would anyone want their program to crash? Well, the answer is two-fold.

First, if something has gone wrong that leaves your program in an unsafe state, continuing might mean corrupting user data.

Second, if you're debugging your app (i.e., it's still in development), having your app refuse to continue if a serious problem is found is a huge advantage and a very common way to spot problems.

Swift lets you force an app crash using the `assert()` function. This takes two parameters: a condition to check, and a message to print if the assertion fails. Helpfully, any calls to `assert()` are ignored when your app is compiled in release mode (i.e., for the App Store), which means these checks have no impact on your code's final performance.

Here are two examples of `assert()` being used:

```swift
assert(1 == 1, "Maths failure!")
assert(1 == 2, "Maths failure!")
```

The first one asserts that 1 is equal to 1, which is clearly true, so nothing will happen. The second one asserts that 1 is equal to 2, which is clearly false, so that assertion will fail: your app will halt, and the message "Maths failure!" will be printed out to help you identify the problem.

Because assertions are ignored in release builds, you don't need to worry about running expensive checks in your assertions. For example:

```swift
assert(myReallySlowMethod() == true, "The slow method returned false, which is a bad thing!")
```

In release builds, that code will never be run, so you won't see any performance impact.

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-force-a-crash-using-fatalerror">How to force a crash using fatalError() 
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/example-code/language/how-to-check-your-program-state-using-precondition">How to check your program state using precondition() 
/example-code/system/how-to-run-an-external-program-using-process">How to run an external program using Process 
/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a>
-->

:::

---

<TagLinks />