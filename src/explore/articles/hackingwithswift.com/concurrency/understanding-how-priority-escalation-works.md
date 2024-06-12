---
lang: ko-KR
title: Understanding how priority escalation works
description: Article(s) > Understanding how priority escalation works
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
      content: Article(s) > Understanding how priority escalation works
    - property: og:description
      content: Understanding how priority escalation works
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/understanding-how-priority-escalation-works.html
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
  "title": "Understanding how priority escalation works | Swift Concurrency by Example",
  "desc": "Understanding how priority escalation works",
  "link": "https://hackingwithswift.com/quick-start/concurrency/understanding-how-priority-escalation-works", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Every task can be created with a specific priority level, or it can inherit a priority from somewhere else. But in two specific circumstances, Swift will *raise* the priority of a task so it’s able to complete faster.

This always happens because of some specific action from us:

1. If higher-priority task A starts waiting for the result of lower-priority task B, task B will have its priority elevated to the same priority as task A.
2. If lower-priority task A has started running on an actor, and higher-priority task B has been enqueued on that same actor, task A will have its priority elevated to match task B.

In both cases, Swift is trying to ensure the higher priority task gets the quality of service it needs to run quickly – if something very important can only complete when something less important is also complete, then the less important task *becomes* very important.

For the most part, this isn’t something we need to worry about in our code – think of it as a bonus feature provided automatically by Swift’s tasks.

However, there is *one* place where priority escalation might surprise you, and it’s worth at least being aware of it: in our first situation, where a high-priority task uses `await` on a low-priority task, using `Task.currentPriority` will report the *escalated* priority rather than the original priority. So, you might create a task with a low priority, but when you query it a minute later it might have moved up to be a high priority.

At the time of writing, this is the only real “gotcha” moment with task escalation. The other situation – if you queue a high-priority task on the same actor where a low-priority task is already running – will also involve priority escalation, but *won’t* change the value of `currentPriority`. This means your task will run a little faster and it might not be obvious why, but honestly it’s unlikely you’ll even notice this.

::: details Similar solutions…

```component VPCard
{
  "title": "How to control the priority of a task | Swift Concurrency by Example",
  "desc": "How to control the priority of a task",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-control-the-priority-of-a-task.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Understanding how global actor inference works | Swift Concurrency by Example",
  "desc": "Understanding how global actor inference works",
  "link": "/explore/articles/hackingwithswift.com/concurrency/understanding-how-global-actor-inference-works.md",
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
  "title": "How to run tasks using SwiftUI’s task() modifier | Swift Concurrency by Example",
  "desc": "How to run tasks using SwiftUI’s task() modifier",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-run-tasks-using-swiftuis-task-modifier.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />