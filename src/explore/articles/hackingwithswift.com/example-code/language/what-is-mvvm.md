---
lang: ko-KR
title: "What is MVVM?"
description: "Article(s) > What is MVVM?"
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
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > What is MVVM?"
    - property: og:description
      content: "What is MVVM?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-mvvm.html
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
  "title": "What is MVVM? | Language - free Swift example code",
  "desc": "What is MVVM?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-mvvm",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
MVVM stands for “Model View ViewModel”, and it’s a software architecture often used by Apple developers to replace MVC.

In MVC the way most Apple developers practice it, the view controller forms part of the Controller layer (the C in MVC), which means it’s responsible for doing lots of layout as well as being a general dumping ground for functionality.

In MVVM view controllers are considered part of the V layer, which means their job is to focus specifically on layout and the view lifecycle – `viewDidLoad()` and so on. In its place a new object is created called the *view model*, which is effectively most of the code you had in your view controller before except without UIKit attached. That is, it should be capable of responding to requests for data, and so on, except it shouldn’t reference any user interface controls.

This might seem like you’re just pointlessly moving code around, but the difference is important: because your view model is more like a *model* than like a *view* you can write tests for it more easily. Rather than having to mock up a `UITextField` to insert some data, you should be able to call a method that accepts a string because your view model shouldn’t rely on any user interface components.

While all this sounds positive, MVVM does have a big drawback on iOS: it relies on a system of two-way bindings that can communicate view data to your view model, otherwise you need to do a lot of work shuttling data around yourself.

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-create-multi-line-string-literals">How to create multi-line string literals 
/example-code/language/how-to-use-compactmap-to-transform-an-array">How to use compactMap() to transform an array 
/example-code/language/what-is-a-storyboard">What is a storyboard? 
/example-code/language/what-are-designated-initializers">What are designated initializers? 
/example-code/language/what-is-automatic-reference-counting-arc">What is Automatic Reference Counting (ARC)?</a>
-->

:::

---

<TagLinks />