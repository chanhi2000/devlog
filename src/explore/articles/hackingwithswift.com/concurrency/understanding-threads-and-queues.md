---
lang: ko-KR
title: Understanding threads and queues
description: Article(s) > Understanding threads and queues
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
      content: Article(s) > Understanding threads and queues
    - property: og:description
      content: Understanding threads and queues
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/understanding-threads-and-queues.html
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
  "title": "Understanding threads and queues | Swift Concurrency by Example",
  "desc": "Understanding threads and queues",
  "link": "https://hackingwithswift.com/quick-start/concurrency/understanding-threads-and-queues", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Every program launches with at least one thread where its work takes place, called the *main thread*. Super simple command-line apps for macOS might only ever have that one thread, iOS apps will have many more to do all sorts of other jobs, but either way that initial thread – the one the app is first launched with – always exists for the lifetime of the app, and it’s always called the main thread.

This is important, because all your user interface work must take place on that main thread. Not some work some of the time, but *all* work *all* the time – if you try to update your UI from any other thread in your program you might find nothing happens, you might find your app crashes, or pretty much anywhere in between.

This rule exists for all apps that run on iOS, macOS, tvOS, and watchOS, and even though it’s simple you will – *will* – forget it at some point in the future. It’s like an initiation rite, except it happens more often than I’d like to admit even after years of programming.

Although Swift lets us create threads whenever we want, this is uncommon because it creates a lot of complexity. Each thread you create needs to run *somewhere*, and if you accidentally end up creating 40 threads when you have only 4 CPU cores, the system will need to spend a lot of time just swapping them.

Swapping threads is known as a *context switch*, and it has a performance cost: the system must stash away all the data the thread was using and remember how far it had progressed in its work, before giving another thread the chance to run. When this happens a lot – when you create many more threads compared to the number of available CPU cores – the cost of context switching grows high, and so it has a suitably disastrous-sounding name: *thread explosion*.

And so, apart from that main thread of work that starts our whole program and manages the user interface, we normally prefer to think of our work in terms of *queues*.

Queues work like they do in real life, where you might line up to buy something at a grocery store: you join the queue at the back, then move forward again and again until you’re at the front, at which point you can check out. Some bigger stores might have lots of queues leading up to lots of checkouts, and small stores might just have one queue with one checkout. You might occasionally see stores trying to avoid the problem of one queue moving faster than another by having a single shared queue feed into multiple checkouts – there are all sorts of possible combinations.

Swift’s queues work exactly the same way: we create a queue and add work to it, and the system will remove and execute work from there in the order it was added. Sometimes the queues are *serial*, which means they remove one piece of work from the front of the queue and complete it before going onto the next piece of work; and sometimes they are *concurrent*, which means they remove and execute multiple pieces of work at a time. Either way work will start in the order it was added to the queue unless we specifically say something has a high or low priority.

You might look at that and wonder why you even need serial queues – surely running one thing at a time is what we’re trying to avoid? Well, no. In fact, there are lots of times when having the predictability of a serial queue is important. 

As a simple example, your user might want to batch convert a collection of videos from one format to another. Video conversion is a really intense operation and is already highly optimized to take full advantage of multi-core CPUs, so it’s more efficient to convert one video fully, then the next, then a third, and so on until you reach the end, rather than trying to convert four at once. This kind of work is perfect for a serial queue.

More importantly, sometimes serial queues are *required* to ensure our data is safe. For example, manipulating your user’s data is exactly the kind of work you’d want to do on a serial queue, because it stops you from trying to read the data at the same time some other part of your program is trying to write new data.

Putting this all together, threads are the individual slices of a program that do pieces of work, whereas queues are like pipelines of execution where we can request that work be done at some point. Queues are easier to think about than threads because they focus on what matters: we don’t care how some code runs on the CPU, as long as it either runs in a particular order (serially) or not (concurrently). A lot of the time we don’t even create the queue – we just use one of the built-in queues and let the system figure out how it should happen.

::: tip

Sometimes Apple’s frameworks will help you a little here. For example, even though using the `@State` property wrapper in a view will cause the body to be refreshed when the property is changed, this property wrapper is designed to be safe to call on any thread.

:::

::: details Similar solutions…

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
  "title": "Understanding how priority escalation works | Swift Concurrency by Example",
  "desc": "Understanding how priority escalation works",
  "link": "/explore/articles/hackingwithswift.com/concurrency/understanding-how-priority-escalation-works.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create and use an actor in Swift | Swift Concurrency by Example",
  "desc": "How to create and use an actor in Swift",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-create-and-use-an-actor-in-swift.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is an actor and why does Swift have them? | Swift Concurrency by Example",
  "desc": "What is an actor and why does Swift have them?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/what-is-an-actor-and-why-does-swift-have-them.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create and run a task | Swift Concurrency by Example",
  "desc": "How to create and run a task",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-create-and-run-a-task.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />