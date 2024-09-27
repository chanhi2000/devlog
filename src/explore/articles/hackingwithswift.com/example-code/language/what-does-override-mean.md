---
lang: ko-KR
title: "What does override mean?"
description: "Article(s) > What does override mean?"
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
      content: "Article(s) > What does override mean?"
    - property: og:description
      content: "What does override mean?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-does-override-mean.html
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
  "title": "What does override mean? | Language - free Swift example code",
  "desc": "What does override mean?",
  "link": "https://hackingwithswift.com/example-code/language/what-does-override-mean",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
The `override` is used when you want to write your own method to replace an existing one in a parent class. It's used commonly when you're working with `UIViewControllers`, because view controllers already come with lots of methods like `viewDidLoad()` and `viewWillAppear()`. When you want to override these default methods, you need to specify this with the `override` keyword.

Now, you might be wondering why the `override` keyword is even needed, but it's really about ensuring your code is safe – if you write a method and accidentally name it the same as something that already exists, Xcode will simply refuse to build your app until you add in the `override` keyword. Similarly, if you use `override` on a method that doesn't override something that already exists, Xcode will refuse to build.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-override-animations-with-transactions">How to override animations with transactions 
/example-code/language/what-does-weak-mean">What does weak mean? 
/example-code/uikit/what-does-the-message-simulator-user-has-requested-new-graphics-quality-100-mean">What does the message "Simulator user has requested new graphics quality: 100" mean? 
/example-code/language/what-does-an-exclamation-mark-mean">What does an exclamation mark mean? 
/example-code/language/what-does-unowned-mean">What does unowned mean?</a>
-->

:::

---

<TagLinks />