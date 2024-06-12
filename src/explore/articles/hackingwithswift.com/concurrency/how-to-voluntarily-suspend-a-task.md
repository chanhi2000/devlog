---
lang: ko-KR
title: How to voluntarily suspend a task
description: Article(s) > How to voluntarily suspend a task
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
      content: Article(s) > How to voluntarily suspend a task
    - property: og:description
      content: How to voluntarily suspend a task
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/how-to-voluntarily-suspend-a-task.html
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
  "title": "How to voluntarily suspend a task | Swift Concurrency by Example",
  "desc": "How to voluntarily suspend a task",
  "link": "https://hackingwithswift.com/quick-start/concurrency/how-to-voluntarily-suspend-a-task", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you’re executing a long-running task that has few if any suspension points, for example if you’re repeatedly iterating over an intensive loop, you can call `Task.yield()` to *voluntarily* suspend the current task so that Swift can give other tasks the chance to proceed a little if needed.

To demonstrate this, we could write a simple function to calculate the factors for a number – numbers that divide another number equally. For example, the factors for 12 are 1, 2, 3, 4, 6, and 12. A simple version of this function might look like this:

```swift
func factors(for number: Int) async -> [Int] {
    var result = [Int]()

    for check in 1...number {
        if number.isMultiple(of: check) {
            result.append(check)
        }
    }

    return result
}

let factors = await factors(for: 120)
print("Found \(factors.count) factors for 120.")
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-voluntarily-suspend-a-task-1.zip)

Despite being a pretty inefficient implementation, in release builds that will still execute quite fast even for numbers such as 100,000,000. But if you try something even bigger you’ll notice it struggles – running hundreds of millions of checks is really going to make the task chew up a lot of CPU time, which might mean other tasks are left sitting around unable to make even the slightest progress forward.

Keep in mind our other tasks might be able to kick off some work then suspend immediately, such as making network requests. A simple improvement is to force our `factors()` method to pause every so often so that Swift can run other tasks if it wants – we’re effectively asking it to come up for air and let another task have a go.

So, we could modify the function so that it calls `Task.yield()` every 100,000 numbers, like this:

```swift
func factors(for number: Int) async -> [Int] {
    var result = [Int]()

    for check in 1...number {
        if check.isMultiple(of: 100_000) {
            await Task.yield()
        }

        if number.isMultiple(of: check) {
            result.append(check)
        }
    }

    return result
}

let factors = await factors(for: 120)
print("Found \(factors.count) factors for 120.")
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-voluntarily-suspend-a-task-2.zip)

However, that has the downside of now having twice as much work in the loop. As an alternative, you could try yielding only when a multiple is actually found, like this:

```swift
func factors(for number: Int) async -> [Int] {
    var result = [Int]()

    for check in 1...number {   
        if number.isMultiple(of: check) {
            result.append(check)
            await Task.yield()                
        }
    }

    return result
}

let factors = await factors(for: 120)
print("Found \(factors.count) factors for 120.")
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-voluntarily-suspend-a-task-3.zip)

That offers Swift the chance to pause every time a multiple is found. Yes, it will be called a lot in the first few iterations, but fewer multiples will be found over time and so it probably won’t yield as often as the previous example – it could well defeat the point of using `yield()` in the first place.

**Calling `yield()` does not always mean the task will stop running: if it has a higher priority than other tasks that are waiting, it’s entirely possible your task will just immediately resume its work.** Think of this as *guidance* – we’re giving Swift the chance to execute other tasks temporarily rather than forcing it to do so.

Think of calling `Task.yield()` as the equivalent of calling a fictional `Task.doNothing()` method – it gives Swift the chance to adjust the execution of its tasks without actually creating any real work.

::: details Similar solutions…

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

```component VPCard
{
  "title": "How to cancel a Task | Swift Concurrency by Example",
  "desc": "How to cancel a Task",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-cancel-a-task.md",
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