---
lang: ko-KR
title: What’s the performance cost of calling an async function?
description: Article(s) > What’s the performance cost of calling an async function?
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
      content: Article(s) > What’s the performance cost of calling an async function?
    - property: og:description
      content: What’s the performance cost of calling an async function?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/whats-the-performance-cost-of-calling-an-async-function.html
date: 2021-12-28
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
  "title": "What’s the performance cost of calling an async function? | Swift Concurrency by Example",
  "desc": "What’s the performance cost of calling an async function?",
  "link": "https://hackingwithswift.com/quick-start/concurrency/whats-the-performance-cost-of-calling-an-async-function", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Whenever we use `await` to call an async function, we mark a potential suspension point in our code – we’re acknowledging that it’s entirely possible our function will be suspended, along with all its callers, while the work completes. In terms of performance, this is *not* free: synchronous and asynchronous functions use a different calling convention internally, with the asynchronous variant being slightly less efficient.

The important thing to understand here is that Swift cannot tell at compile time whether an `await` call will suspend or not, and so the same (slightly) more expensive calling convention is used regardless of what actually takes place at runtime.

However, what happens at runtime depends on whether the call suspends or not:

- If a suspension happens, then Swift will pause the function and all its callers, which has a small performance cost. These will then be resumed later, and ultimately whatever performance cost you pay for the suspension is like a rounding error compared to the performance gain provided by async/await even existing.
- If a suspension does *not* happen, no pause will take place and your function will continue to run with the same efficiency and timings as a synchronous function.

That last part carries an important side effect: using `await` will not cause your code to wait for one runloop to go by before continuing.

It’s a common joke that many coding problems can be fixed by waiting for one runloop tick to pass before trying again – usually seen as `DispatchQueue.main.async { … }` in Swift projects – but that will *not* happen when using `await`, because the code will execute immediately.

So, if your code doesn’t actually suspend, the only cost to calling an asynchronous function is the slightly more expensive calling convention, and if your code *does* suspend then any cost is more or less irrelevant because you’ve gained so much extra performance thanks to the suspension happening in the first place.

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
  "title": "What calls the first async function? | Swift Concurrency by Example",
  "desc": "What calls the first async function?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/what-calls-the-first-async-function.md",
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
  "title": "How to fix the error “async call in a function that does not support concurrency” | Swift Concurrency by Example",
  "desc": "How to fix the error “async call in a function that does not support concurrency”",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-fix-the-error-async-call-in-a-function-that-does-not-support-concurrency.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />