---
lang: ko-KR
title: What are tasks and task groups?
description: Article(s) > What are tasks and task groups?
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
      content: Article(s) > What are tasks and task groups?
    - property: og:description
      content: What are tasks and task groups?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/what-are-tasks-and-task-groups.html
prev: /explore/articles/hackingwithswift.com/concurrency/how-to-convert-an-asyncsequence-into-a-sequence.md
date: 2021-09-23
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
"title": "What are tasks and task groups? | Swift Concurrency by Example",
  "desc": "What are tasks and task groups?",
  "link": "https://hackingwithswift.com/quick-start/concurrency/what-are-tasks-and-task-groups", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Using async/await in Swift allows us to write asynchronous code that is easy to read and understand, but by itself it doesn’t enable us to run anything concurrently – even with several CPU cores working hard, async/await code would still execute sequentially.

To create actual concurrency – to provide the ability for multiple pieces of work to run at the same time – Swift provides us with two specific types for constructing and managing concurrency in a way that makes it easier to use: `Task` and `TaskGroup`. Although the types themselves aren’t *complex*, they unlock a lot of power and flexibility, and sit at the core of how we use concurrency with Swift.

Which you choose – `Task` or `TaskGroup` – depends on the goal of your work: if you want one or two independent pieces of work to start, then `Task` is the right choice. If you want to split up one job into several concurrent operations then `TaskGroup` is a better fit. Task groups work best when their individual operations return exactly the same kind of data, but with a little extra effort you can coerce them into supporting heterogenous data types.

Although you might not realize it, you’re using tasks every time you write any async code in Swift. You see, all async functions run as part of a task whether or not we explicitly ask for it to happen. Even using `async let` is *syntactic sugar* for creating a task then waiting for its result – special syntax that makes a particular piece of code easier to write. This is why if you use multiple sequential `async let` calls they will all start executing immediately while the rest of your code continues. 

Both `Task` and `TaskGroup` can be created with one of four priority levels: `high` is the most important, then `medium`, `low`, and finally `background` at the bottom. Task priorities allow the system to adjust the order in which it executes work, meaning that important work can happen before unimportant work.

::: tip

If you’ve been doing iOS programming for a while, you may prefer to use the more familiar quality of service priorities from `DispatchQueue`, which are `userInitiated` and `utility` in place of `high` and `low` respectively. There is no equivalent to the old `userInteractive` priority, which is now exclusively reserved for the user interface.

:::

::: details Similar solutions…

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
  "title": "How to run tasks using SwiftUI’s task() modifier | Swift Concurrency by Example",
  "desc": "How to run tasks using SwiftUI’s task() modifier",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-run-tasks-using-swiftuis-task-modifier.md",
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
  "title": "How to create and use task local values | Swift Concurrency by Example",
  "desc": "How to create and use task local values",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-create-and-use-task-local-values.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />