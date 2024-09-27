---
lang: ko-KR
title: "What is class inheritance?"
description: "Article(s) > What is class inheritance?"
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
      content: "Article(s) > What is class inheritance?"
    - property: og:description
      content: "What is class inheritance?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-class-inheritance.html
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
  "title": "What is class inheritance? | Language - free Swift example code",
  "desc": "What is class inheritance?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-class-inheritance",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Swift allows you to define a custom class as inheriting from another, which means it gains the functionality of the original class while being able to add its own. This is used extensively on Apple platforms: `UIButton` inherits from `UIControl`, which inherits from `UIView`, which inherits from `UIResponder`, which inherits from `NSObject`, for example.

This approach allows you to create something new by building upon and tweaking existing functionality. If you want to create a custom view for your app, you don’t need to go all the way back to basics – you can just inherit from `UIView` and make whatever changes you need. This means you automatically benefit from things like background colors, Auto Layout, `CALayer`, and more.

While inheritance is both power and used extensively, it does create some problems. The main two are first that it’s available only with classes and so Swift’s structs and enums are excluded, and the second are that it creates tight coupling, where one piece of code depends heavily on another piece of code.

-->

::: details Similar solutions…

<!--
/example-code/language/whats-the-difference-between-a-static-variable-and-a-class-variable">What’s the difference between a static variable and a class variable? 
/example-code/language/what-are-class-and-subtype-existentials">What are class and subtype existentials? 
/example-code/language/whats-the-difference-between-a-class-and-a-struct">What’s the difference between a class and a struct? 
/example-code/uikit/how-to-detect-when-your-size-class-changes">How to detect when your size class changes 
/example-code/language/fixing-class-viewcontroller-has-no-initializers">Fixing "Class ViewController has no initializers"</a>
-->

:::

---

<TagLinks />