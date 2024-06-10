---
lang: ko-KR
title: How to fix the error “async call in a function that does not support concurrency”
description: Article(s) > How to fix the error “async call in a function that does not support concurrency”
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
      content: Article(s) > How to fix the error “async call in a function that does not support concurrency”
    - property: og:description
      content: How to fix the error “async call in a function that does not support concurrency”
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/how-to-fix-the-error-async-call-in-a-function-that-does-not-support-concurrency.html
next: /explore/articles/hackingwithswift.com/concurrency/whats-the-difference-between-sequence-asyncsequence-and-asyncstream.md
date: 2021-11-28
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
  "title": "How to fix the error “async call in a function that does not support concurrency” | Swift Concurrency by Example",
  "desc": "How to fix the error “async call in a function that does not support concurrency”",
  "link": "https://hackingwithswift.com/quick-start/concurrency/how-to-fix-the-error-async-call-in-a-function-that-does-not-support-concurrency", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

This error occurs when you’ve tried to call an async function from a synchronous function, which is not allowed in Swift – asynchronous functions must be able to suspend themselves and their callers, and synchronous functions simply don’t know how to do that.

If your asynchronous work needs to be waited for, you don’t have much of a choice but to mark your current code as also being `async` so that you can use `await` as normal. However, sometimes this can result in a bit of an “async infection” – you mark one function as being async, which means its caller needs to be async too, as does *`its*` caller, and so on, until you’ve turned one error into 50.

In this situation, you can create a dedicated `Task` to solve the problem. We’ll be covering this API in more detail later on, but here’s how it would look in your code:

```swift
func doAsyncWork() async {
    print("Doing async work")
}

func doRegularWork() {
    Task {
        await doAsyncWork()
    }
}

doRegularWork()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-fix-the-error-async-call-in-a-function-that-does-not-support-concurrency-1.zip)

Tasks like this one are created and run immediately. We aren’t waiting for the task to complete, so we shouldn’t use `await` when creating it.

::: details Similar solutions…

```component VPCard
{
  "title": "How to call an async function using async let | Swift Concurrency by Example",
  "desc": "How to call an async function using async let",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-call-an-async-function-using-async-let.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Why can’t we call async functions using async var? | Swift Concurrency by Example",
  "desc": "Why can’t we call async functions using async var?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/why-cant-we-call-async-functions-using-async-var.md",
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

```component VPCard
{
  "title": "How to call async throwing functions | Swift Concurrency by Example",
  "desc": "How to call async throwing functions",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-call-async-throwing-functions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Concurrency vs parallelism | Swift Concurrency by Example",
  "desc": "Concurrency vs parallelism",
  "link": "/explore/articles/hackingwithswift.com/concurrency/concurrency-vs-parallelism.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />