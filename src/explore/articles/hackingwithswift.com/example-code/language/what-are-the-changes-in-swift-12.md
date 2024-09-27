---
lang: ko-KR
title: "What are the changes in Swift 1.2?"
description: "Article(s) > What are the changes in Swift 1.2?"
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
      content: "Article(s) > What are the changes in Swift 1.2?"
    - property: og:description
      content: "What are the changes in Swift 1.2?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-are-the-changes-in-swift-12.html
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
  "title": "What are the changes in Swift 1.2? | Language - free Swift example code",
  "desc": "What are the changes in Swift 1.2?",
  "link": "https://hackingwithswift.com/example-code/language/what-are-the-changes-in-swift-12",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
Swift 1.2 was an interim release that fixed some early confusions and annoyances in the language. Its changes weren't big, but they did help clean up and clarify Swift, and helped tide us all over until the release of Swift 2.

The important changes are:

- You can now check and unwrap multiple optionals using `if/let` rather than create a so-called "pyramid of doom" with nested statements.
<li>Many Objective-C types that were being passed around now had correct nullability values set. This was done by modifying Objective-C then having many people scour through existing Apple code to add new annotations.
<li>Downcasting (a typecast from a higher type in your class hierarchy to a lower type) is now done using `as!` and `as?` to mark forced downcasting and optional downcasting respectively.
<li>Swift strings, arrays and dictionaries now no longer automatically typecast to `NSString`, `NSArray` and `NSDictionary`.
<li>A new `Set` data type was introduced to handle arrays where each value can appear only once.
<li>Constants can now be declared without a value, as long as they are provided with a value before they are used.
<li>Incremental build support was added, which makes it more efficient to build larger Swift projects.

-->

::: details Similar solutions…

<!--
/example-code/language/what-are-the-changes-in-swift-3">What are the changes in Swift 3? 
/example-code/language/what-are-the-changes-in-swift-20">What are the changes in Swift 2.0? 
/example-code/language/what-are-the-changes-in-swift-22">What are the changes in Swift 2.2? 
/example-code/uikit/how-to-animate-when-your-size-class-changes-willtransitionto">How to animate when your size class changes: willTransition(to:) 
/quick-start/swiftui/how-to-run-some-code-when-state-changes-using-onchange">How to run some code when state changes using onChange()</a>
-->

:::

---

<TagLinks />