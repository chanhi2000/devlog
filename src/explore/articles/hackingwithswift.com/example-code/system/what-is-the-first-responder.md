---
lang: ko-KR
title: "What is the first responder?"
description: "Article(s) > What is the first responder?"
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
  - ios-2.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > What is the first responder?"
    - property: og:description
      content: "What is the first responder?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/what-is-the-first-responder.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "System - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/system/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "What is the first responder? | System - free Swift example code",
  "desc": "What is the first responder?",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/what-is-the-first-responder",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
Most of UIKit has a concept of *responders* baked deep into the system, but it’s not common you need to work with it directly. It’s Apple’s implementation of a design pattern called the Chain of Responsibility: UIKit asks one component if it can respond to an action, but if it can’t it gets passed to another component, and if that can’t respond then it gets passed on and on until something *can* respond – it’s a chain of responders.

The *first* responder is whatever control is currently ready to respond to actions. In UIKit this is usually the control that has activated the keyboard and is receiving input. If you want that text control to stop waiting for input – which in turn dismisses the keyboard – you should call its `resignFirstResponder()` method, which passes the first responder baton to the next waiting component.

The responder chain is how events bubble upwards on Apple platforms: `touchesBegan()` might be implemented on a view, on its view controller, on a parent view controller, or even higher up, but it will always be triggered somewhere when it happens.

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-find-the-index-of-the-first-matching-array-element">How to find the index of the first matching array element 
/example-code/language/how-to-find-the-first-matching-element-in-an-array">How to find the first matching element in an array 
/example-code/language/how-to-remove-the-first-or-last-item-from-an-array">How to remove the first or last item from an array 
/quick-start/concurrency/what-calls-the-first-async-function">What calls the first async function? 
/example-code/strings/how-to-capitalize-the-first-letter-of-a-string">How to capitalize the first letter of a string</a>
-->

:::

---

<TagLinks />