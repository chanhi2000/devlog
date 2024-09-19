---
lang: ko-KR
title: "What does unowned mean?"
description: "Article(s) > What does unowned mean?"
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
      content: "Article(s) > What does unowned mean?"
    - property: og:description
      content: "What does unowned mean?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-does-unowned-mean.html
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
  "title": "What does unowned mean? | Language - free Swift example code",
  "desc": "What does unowned mean?",
  "link": "https://hackingwithswift.com/example-code/language/what-does-unowned-mean",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>Unowned variables are similar to weak variables in that they provide a way to reference data without having ownership. However, weak variables can become <code>nil</code> – they are effectively optional. In comparison, unowned variables must never be set to nil once they have been initialized, which means you don't need to worry about unwrapping optionals.</p>
<p>The most common place you'll see unowned variables is with closures that declare <code>[unowned self]</code> – this means "I want to reference <code>self</code> inside this closure but I don't want to own it." Why <code>unowned</code> rather than <code>weak</code>? Both would work, but let's face it: if <code>self</code> is nil inside a closure, something has gone wrong!</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/what-does-weak-mean">What does weak mean?</a></li><li><a href="/example-code/language/what-does-an-exclamation-mark-mean">What does an exclamation mark mean?</a></li><li><a href="/example-code/uikit/what-does-the-message-simulator-user-has-requested-new-graphics-quality-100-mean">What does the message "Simulator user has requested new graphics quality: 100" mean?</a></li><li><a href="/example-code/language/what-does-override-mean">What does override mean?</a></li><li><a href="/quick-start/concurrency/how-to-fix-the-error-async-call-in-a-function-that-does-not-support-concurrency">How to fix the error “async call in a function that does not support concurrency”</a></li></ul>
-->

:::

---

<TagLinks />