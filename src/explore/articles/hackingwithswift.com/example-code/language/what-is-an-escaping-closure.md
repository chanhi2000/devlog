---
lang: ko-KR
title: "What is an escaping closure?"
description: "Article(s) > What is an escaping closure?"
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
      content: "Article(s) > What is an escaping closure?"
    - property: og:description
      content: "What is an escaping closure?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-an-escaping-closure.html
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
  "title": "What is an escaping closure? | Language - free Swift example code",
  "desc": "What is an escaping closure?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-an-escaping-closure",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Swift’s closures are reference types, which means if you point two variables at the same closure they share that closure –&nbsp;Swift just remembers that there are two things relying on it by incrementing its reference count.</p>
<p>When a closure gets passed into a function to be used, Swift needs to know whether that function will get used immediately or whether it will be saved for use later on. If it’s used immediately, the compiler can skip adding one to its reference count because the closure will be run straight away then forgotten about. But if it’s used later –&nbsp;or even <em>might</em> be used later –&nbsp;Swift needs to add one to its reference count so that it won’t accidentally be destroyed.</p>
<p>For performance reasons, Swift assumes all closures are nonescaping closures, which means they will be used immediately inside the function and not stored, which in turn means Swift doesn’t touch the reference count. If this isn’t the case –&nbsp;if you take any measure to store the closure – then Swift will force you to mark it as <code>@escaping</code> so that the reference count must be changed.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/what-is-trailing-closure-syntax">What is trailing closure syntax?</a></li><li><a href="/example-code/language/what-is-a-closure">What is a closure?</a></li><li><a href="/example-code/language/how-to-write-a-closure-that-returns-a-value">How to write a closure that returns a value</a></li><li><a href="/example-code/language/whats-the-difference-between-a-function-and-a-closure">What’s the difference between a function and a closure?</a></li><li><a href="/example-code/language/what-are-the-changes-in-swift-3">What are the changes in Swift 3?</a></li></ul>
-->

:::

---

<TagLinks />