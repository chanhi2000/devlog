---
lang: ko-KR
title: "Main thread and main queue: what’s the difference?"
description: "Article(s) > Main thread and main queue: what’s the difference?"
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
      content: "Article(s) > Main thread and main queue: what’s the difference?"
    - property: og:description
      content: "Main thread and main queue: what’s the difference?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/main-thread-and-main-queue-whats-the-difference.html
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
  "title": "Main thread and main queue: what’s the difference? | Swift Concurrency by Example",
  "desc": "Main thread and main queue: what’s the difference?",
  "link": "https://hackingwithswift.com/quick-start/concurrency/main-thread-and-main-queue-whats-the-difference", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

The main thread is the one that starts our program, and it’s also the one where all our UI work must happen. However, there is also a main *queue*, and although sometimes we use the terms “main thread” and “main queue” interchangeably, they aren’t quite the same thing.

It’s a subtle distinction, but it can sometimes matter: although your main queue will always execute on the main thread (and is therefore where you’ll be doing your UI work!), it’s also possible that other queues might sometimes run on the main thread – the system is free to move things around in whatever way is most efficient.

So, if you’re on the main queue then you’re definitely on the main thread, but being on the main thread doesn’t automatically mean you’re on the main queue – a different queue could temporarily be running on the main thread.

At this point you’re very likely staring at the screen wondering when this would ever be a problem, or perhaps even rereading what I said like it’s a cryptic riddle. Trust me, if you ever hit a problem where the main thread vs main queue matters, you’ll be glad you read this!

::: details Similar solutions…

```component VPCard
{
  "title": "How to use @MainActor to run code on the main queue | Swift Concurrency by Example",
  "desc": "How to use @MainActor to run code on the main queue",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Understanding threads and queues | Swift Concurrency by Example",
  "desc": "Understanding threads and queues",
  "link": "/explore/articles/hackingwithswift.com/concurrency/understanding-threads-and-queues.md",
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
  "title": "What’s the difference between async let, tasks, and task groups? | Swift Concurrency by Example",
  "desc": "What’s the difference between async let, tasks, and task groups?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/whats-the-difference-between-async-let-tasks-and-task-groups.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What’s the difference between actors, classes, and structs? | Swift Concurrency by Example",
  "desc": "What’s the difference between actors, classes, and structs?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/whats-the-difference-between-actors-classes-and-structs.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />