---
lang: ko-KR
title: What is a synchronous function?
description: Article(s) > What is a synchronous function?
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > What is a synchronous function?
    - property: og:description
      content: What is a synchronous function?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/what-is-a-synchronous-function.html
prev: /explore/articles/hackingwithswift.com/concurrency/dedication.md
date: 2021-07-01
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Swift Concurrency by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/concurrency/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "What is a synchronous function? | Swift Concurrency by Example",
  "desc": "What is a synchronous function?",
  "link": "https://hackingwithswift.com/quick-start/concurrency/what-is-a-synchronous-function", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

By default, all Swift functions are *synchronous*, but what does that mean?

A synchronous function is one that executes all its work in a simple, straight line on a single thread. Although the function itself can interact with other threads – it can request that work happens elsewhere, for example – the function itself always runs on a single thread.

This has a number of advantages, not least that synchronous functions are very easy to think about: when you call function A, it will carry on working until all its work is done, then return a value. If while working, function A calls function B, and perhaps functions C, D, and E as well, it doesn’t matter – they all will execute on the same thread, and run one by one until the work completes.

Internally this is handled as a function stack: whenever one function calls another, the system creates what’s called a *stack frame* to store all the data required for that new function – that’s things like its local variables, for example. That new stack frame gets pushed on top of the previous one, like a stack of Lego bricks, and if that function calls a third function then another stack frame is created and added above the others. Eventually the functions finish, and their stack frame is removed and destroyed in a process we call *popping*, and control goes back to whichever function the code was called from.

Synchronous functions have an important downside, which is that they are *blocking*. If function A calls function B and needs to know what its return value is, then function A must wait for function B to finish before it can continue. This sounds self-evident, I know, but blocking code is problematic because now you’ve blocked a whole thread – it might be sitting around for a second or more waiting for some data to return.

You’re probably thinking that waiting for a second is nothing at all, but in computing terms that’s an ice age! Keep in mind that the Neural Engine in Apple’s A14 Bionic CPU – just one part of the chip that powers the iPhone 12 – is capable of doing 11 *trillion* things per second, so if you block a thread for even a second that’s 11,000,000,000,000 things you could have done but didn’t.

One solution is to say “Well, if we’ve got a thread that’s currently blocked, we should just launch a new thread.” That’s definitely *a* solution, but it’s also a path towards thread explosion and we’ve already covered why that’s every bit as bad as it sounds.

So, although synchronous functions are easy to think about and work with, they aren’t very efficient for certain kinds of tasks. To make our code more flexible and more efficient, it’s possible to create *asynchronous* functions instead.

::: details Similar solutions…

```component VPCard
{
  "title": "What is an asynchronous function? | Swift Concurrency by Example",
  "desc": "What is an asynchronous function?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/what-is-an-asynchronous-function.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What calls the first async function? | Swift Concurrency by Example",
  "desc": "What calls the first async function?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/what-calls-the-first-async-function.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What’s the performance cost of calling an async function? | Swift Concurrency by Example",
  "desc": "What’s the performance cost of calling an async function?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/whats-the-performance-cost-of-calling-an-async-function.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to fix the error “async call in a function that does not support concurrency” | Swift Concurrency by Example",
  "desc": "How to fix the error “async call in a function that does not support concurrency”",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-fix-the-error-async-call-in-a-function-that-does-not-support-concurrency.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create and call an async function | Swift Concurrency by Example",
  "desc": "How to create and call an async function",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-create-and-call-an-async-function.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />