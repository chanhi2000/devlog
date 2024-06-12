---
lang: ko-KR
title: What’s the difference between async let, tasks, and task groups?
description: Article(s) > What’s the difference between async let, tasks, and task groups?
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
      content: Article(s) > What’s the difference between async let, tasks, and task groups?
    - property: og:description
      content: What’s the difference between async let, tasks, and task groups?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/whats-the-difference-between-async-let-tasks-and-task-groups.html
date: 2023-04-25
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
  "title": "What’s the difference between async let, tasks, and task groups? | Swift Concurrency by Example",
  "desc": "What’s the difference between async let, tasks, and task groups?",
  "link": "https://hackingwithswift.com/quick-start/concurrency/whats-the-difference-between-async-let-tasks-and-task-groups", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Swift’s `async let`, `Task`, and task groups all solve a similar problem: they allow us to create concurrency in our code so the system is able to run them efficiently. Beyond that, the way they work is quite different, and which you’ll choose depends on your exact scenario.

To help you understand how they differ, and provide some guidance on where each one is a good idea, I want to walk through the key behaviors of each of them.

First, `async let` and `Task` are designed to create specific, individual pieces of work, whereas task groups are designed to run multiple pieces of work at the same time and gather the results. As a result, `async let` and `Task` have no way to express a dynamic amount of work that should run in parallel.

For example, if you had an array of URLs and wanted to fetch them all in parallel, convert them into arrays of weather readings, then average them to a single `Double`, task groups would be a great choice because you won’t know ahead of time how many URLs are in your array. Trying to write this using `async let` or `Task` just wouldn’t work, because you’d have to hard-code the exact number of `async let` lines rather than just loop over an array.

Second, task groups automatically let us process results from child tasks in the order they complete, rather than in an order we specify. For example, if we wanted to fetch five pieces of data, task groups allow us to use `group.next()` to read whichever of the five comes back first, whereas using `async let` and `Task` would require us to await values in a specific, fixed order.

That alone is a helpful feature of task groups, but in some situations it goes from helpful to *crucial*. For example, if you have three possible servers for some data and want to use whichever one responds fastest, task groups are perfect – you can use `addTask()` once for each server, then call `next()` only once to read whichever one responded fastest.

Third, although all three forms of concurrency will automatically be marked as cancelled if their parent task is cancelled, only `Task` and task group can be cancelled directly, using `cancel()` and `cancelAll()` respectively. There is no equivalent for `async let`. 

Fourth, because `async let` doesn’t give us a handle to the underlying task it creates for us, it’s not possible to pass that task elsewhere – we can’t start an `async let` task in one function then pass that task to a different function. On the other hand, if you create a task that returns a string and never throws an error, you can pass that `Task&lt;String, Never&gt;` object around as needed.

And finally, although task groups *can* work with heterogeneous results – i.e., child tasks that return different types of data – it takes the extra work of making an enum to wrap the data. `async let` and `Task` do not suffer from this problem because they always return a single result type, so each result can be different.

By sheer volume of advantages you might think that `async let` is clearly much less useful than both `Task` and task groups, but not all those points carry equal weight in real-world code. In practice, I would suggest you’re likely to:

- Use `async let` the most; it works best when there is a fixed amount of work to do.
- Use `Task` for some places where `async let` doesn’t work, such as passing an incomplete value to a function.
- Use task groups least commonly, or at least use them *directly* least commonly – you might build other things on top of them.

I find that order is pretty accurate in practice, for a number of reasons:

1. I normally want results from all the work I start, so being able to skip some or get results in completion order is less important.
2. It’s surprisingly common to want to work with different data types, which is clumsy with task groups.
3. If I need to be able to cancel tasks, `Task` is similar enough to `async let` that it’s easy to move across to `Task` without going all the way to a task group.

So, again I would recommend you start with `async let`, move to `Task` if needed, then go to task groups only if there’s something specific they offer that you need.

::: details Similar solutions…

```component VPCard
{
  "title": "What are tasks and task groups? | Swift Concurrency by Example",
  "desc": "What are tasks and task groups?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/what-are-tasks-and-task-groups.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What’s the difference between a task and a detached task? | Swift Concurrency by Example",
  "desc": "What’s the difference between a task and a detached task?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/whats-the-difference-between-a-task-and-a-detached-task.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to run tasks using SwiftUI’s task() modifier | Swift Concurrency by Example",
  "desc": "How to run tasks using SwiftUI’s task() modifier",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-run-tasks-using-swiftuis-task-modifier.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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
  "title": "How to create a task group and add tasks to it | Swift Concurrency by Example",
  "desc": "How to create a task group and add tasks to it",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-create-a-task-group-and-add-tasks-to-it.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />