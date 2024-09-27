---
lang: ko-KR
title: "What does the AppDelegate class do?"
description: "Article(s) > What does the AppDelegate class do?"
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
      content: "Article(s) > What does the AppDelegate class do?"
    - property: og:description
      content: "What does the AppDelegate class do?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-does-the-appdelegate-class-do.html
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
  "title": "What does the AppDelegate class do? | Language - free Swift example code",
  "desc": "What does the AppDelegate class do?",
  "link": "https://hackingwithswift.com/example-code/language/what-does-the-appdelegate-class-do",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
If you create your app using one of Xcode’s built-in templates, you’ll automatically get an `AppDelegate` class in <FontIcon icon="fa-brands fa-swift"/>`AppDelegate.swift`, which comes with a handful of empty methods. 

This class is *supposed* to be there to handle application lifecycle events - i.e., responding to the app being launched, backgrounded, foregrounded, receiving data, and so on. However, in practice `AppDelegate` is often abused as an easy dumping group for shared data – any thing that is used in several view controllers often gets thrown into the app delegate, but that’s nearly always the wrong place for it.

You may also sometimes see folks creating their initial user interface inside `AppDelegate`. This is broadly a bad idea unless you’re just starting out – if you’ve done this, consider splitting off that layout code either into a coordinator or into a view containment subclass.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-add-an-appdelegate-to-a-swiftui-app">How to add an AppDelegate to a SwiftUI app 
/example-code/language/whats-the-difference-between-a-static-variable-and-a-class-variable">What’s the difference between a static variable and a class variable? 
/example-code/language/what-are-class-and-subtype-existentials">What are class and subtype existentials? 
/example-code/language/what-is-class-inheritance">What is class inheritance? 
/example-code/uikit/how-to-detect-when-your-size-class-changes">How to detect when your size class changes</a>
-->

:::

---

<TagLinks />