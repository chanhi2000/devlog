---
lang: ko-KR
title: "What is a closure?"
description: "Article(s) > What is a closure?"
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
      content: "Article(s) > What is a closure?"
    - property: og:description
      content: "What is a closure?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-a-closure.html
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
  "title": "What is a closure? | Language - free Swift example code",
  "desc": "What is a closure?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-a-closure",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
If you're here because you find closures hard, that's OK: most people find closures hard. But in truth, closures aren't actually that complicated, so I hope I can explain them to you quickly and easily.

Here's my best, simplest definition: a closure is a kind of anonymous function that gets stored as a variable so it can be called later on, and has the special ability to remember the state of your program when you used it.

Some detail:

- "Anonymous function": that is, a closure is a block of code you define, starting with { and ending with }. It's anonymous because it doesn't have a name – it doesn't need a name, because it gets stored as a variable.
<li>"Stored as a variable": yes, the closure code literally gets saved as a variable, for example, `myCode`. Whoever is storing the closure (normally one of Apple's libraries) can then "call" that variable to run your closure's code.
<li>"Called later on": once your closure has been stored away by iOS, it can be called a second later, a minute later, an hour later or never, depending on the situation. For example, when you say "run this code when my animation completes," iOS will make sure it happens at the right time.
<li>"Remember the state of your program": if your closure references some variables that you had created, Swift will automatically take a copy of those variables so they can be used later. Remember, your closure can be called 20 minutes after you created it, so being able to store the original program state is important.

The truth is that you've probably used closures without realizing it. Even a simple UIView animation call uses closures for the animations, and optionally also for the completion block. Just think of it as a chunk of code that gets called later on, and you're most of the way there.

-->

::: details Similar solutions…

<!--
/example-code/language/what-is-trailing-closure-syntax">What is trailing closure syntax? 
/example-code/language/what-is-an-escaping-closure">What is an escaping closure? 
/example-code/language/how-to-write-a-closure-that-returns-a-value">How to write a closure that returns a value 
/example-code/language/whats-the-difference-between-a-function-and-a-closure">What’s the difference between a function and a closure? 
/example-code/language/what-is-the-autoclosure-attribute">What is the autoclosure attribute?</a>
-->

:::

---

<TagLinks />