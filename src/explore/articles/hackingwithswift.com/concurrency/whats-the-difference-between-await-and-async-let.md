---
lang: ko-KR
title: What’s the difference between await and async let?
description: Article(s) > What’s the difference between await and async let?
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
      content: Article(s) > What’s the difference between await and async let?
    - property: og:description
      content: What’s the difference between await and async let?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/whats-the-difference-between-await-and-async-let.html
date: 2023-01-19
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
  "title": "What’s the difference between await and async let? | Swift Concurrency by Example",
  "desc": "What’s the difference between await and async let?",
  "link": "https://hackingwithswift.com/quick-start/concurrency/whats-the-difference-between-await-and-async-let", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Swift lets us perform async operations using both `await` and `async let`, but although they both run some async code they don’t quite run the same: `await` waits for the work to complete so we can read its result, whereas `async let` does not.

Which you choose depends on the kind of work you’re trying to do. For example, if you want to make two network requests where one relates to the other, you might have code like this:

```swift
let first = await requestFirstData()
let second = await requestSecondData(using: first)
```

There the call to `requestSecondData()` cannot start until the call to `requestFirstData()` has completed and returned its value – it just doesn’t make sense for those two to run simultaneously.

On the other hand, if you’re making several completely different requests – perhaps you want to download the latest news, the weather forecast, and check whether an app update was available – then those things do *not* rely on each other to complete and would be great candidates for `async let`:

```swift
func getAppData() async -> ([News], [Weather], Bool) {
    async let news = getNews()
    async let weather = getWeather()
    async let hasUpdate = getAppUpdateAvailable()
    return await (news, weather, hasUpdate)
}
```

So, use `await` when it’s important you have a value before continuing, and `async let` when your work can continue without the value for the time being – you can always use `await` later on when it’s actually needed.

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
  "title": "What’s the difference between async let, tasks, and task groups? | Swift Concurrency by Example",
  "desc": "What’s the difference between async let, tasks, and task groups?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/whats-the-difference-between-async-let-tasks-and-task-groups.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to loop over an AsyncSequence using for await | Swift Concurrency by Example",
  "desc": "How to loop over an AsyncSequence using for await",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-loop-over-an-asyncsequence-using-for-await.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to manipulate an AsyncSequence using map(), filter(), and more | Swift Concurrency by Example",
  "desc": "How to manipulate an AsyncSequence using map(), filter(), and more",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-manipulate-an-asyncsequence-using-map-filter-and-more.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to use continuations to convert completion handlers into async functions | Swift Concurrency by Example",
  "desc": "How to use continuations to convert completion handlers into async functions",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-use-continuations-to-convert-completion-handlers-into-async-functions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />