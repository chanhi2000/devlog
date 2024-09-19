---
lang: ko-KR
title: "What does weak mean?"
description: "Article(s) > What does weak mean?"
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
      content: "Article(s) > What does weak mean?"
    - property: og:description
      content: "What does weak mean?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-does-weak-mean.html
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
  "title": "What does weak mean? | Language - free Swift example code",
  "desc": "What does weak mean?",
  "link": "https://hackingwithswift.com/example-code/language/what-does-weak-mean",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>Unless you specific otherwise, all Swift properties are strong, which means they will not be removed from RAM until whatever owns them is removed from RAM. So, if you create an array in your view controller and you want it to stick around until the view controller is destroyed, that's what strong does.</p>
<p><em>Weak</em> on the other hand is there when you want to say "I want to be able to reference this variable, but I don't mind if it goes away, so I don't want to own it." This might seem strange: after all, where's the point in having a reference to a variable that might not be there?</p>
<p>Well, the answer lies in a thing called reference cycles. If object A has a strong variable pointing at object B, and object B has a strong variable pointing at object A, neither object would ever be deleted because they both keep each other alive.</p>
<p>In this situation, having one of the objects change their property to be weak would solve the problem. For example, object A has a strong variable to object B, but object B has a weak variable pointing at object A. This guarantees that B cannot be destroyed while A still exists, but A can be destroyed because B doesn't have a strong variable owning it.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/what-does-unowned-mean">What does unowned mean?</a></li><li><a href="/example-code/language/what-does-an-exclamation-mark-mean">What does an exclamation mark mean?</a></li><li><a href="/example-code/uikit/what-does-the-message-simulator-user-has-requested-new-graphics-quality-100-mean">What does the message "Simulator user has requested new graphics quality: 100" mean?</a></li><li><a href="/example-code/language/what-does-override-mean">What does override mean?</a></li><li><a href="/quick-start/concurrency/how-to-fix-the-error-async-call-in-a-function-that-does-not-support-concurrency">How to fix the error “async call in a function that does not support concurrency”</a></li></ul>
-->

:::

---

<TagLinks />