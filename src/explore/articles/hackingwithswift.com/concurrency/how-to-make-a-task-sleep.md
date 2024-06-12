---
lang: ko-KR
title: How to make a task sleep
description: Article(s) > How to make a task sleep
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
      content: Article(s) > How to make a task sleep
    - property: og:description
      content: How to make a task sleep
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/how-to-make-a-task-sleep.html
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
  "title": "How to make a task sleep | Swift Concurrency by Example",
  "desc": "How to make a task sleep",
  "link": "https://hackingwithswift.com/quick-start/concurrency/how-to-make-a-task-sleep", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Swift’s `Task` struct has a static `sleep()` method that will cause the current task to be suspended for at least some number of nanoseconds. Yes, nanoseconds: you need to write 1_000_000_000 to get 1 second. You need to call `Task.sleep()` using `await` as it will cause the task to be suspended, and you also need to use `try` because `sleep()` will throw an error if the task is cancelled.

For example, this will make the current task sleep for at least 3 seconds:

```swift
try await Task.sleep(nanoseconds: 3_000_000_000)
```

::: important

Calling `Task.sleep()` will make the current task sleep for *at least* the amount of time you ask, not *exactly* the time you ask. There is a little drift involved because the system might be busy doing other work when the sleep ends, but you are at least guaranteed it won’t end *before* your time has elapsed.

:::

Using nanoseconds is a bit clumsy, but Swift doesn’t have an alternative at this time – the plan seems to be to wait for a more thorough review of managing time in the language before committing to specific API.

In the meantime, we can add small `Task` extensions to make sleeping easier to accomplish. For example, this lets us sleep using seconds as a floating-point number:

```swift
extension Task where Success == Never, Failure == Never {
    static func sleep(seconds: Double) async throws {
        let duration = UInt64(seconds * 1_000_000_000)
        try await Task.sleep(nanoseconds: duration)
    }
}
```

With that in place, you can now write `Task.sleep(seconds: 0.5)` or similar.

Calling `Task.sleep()` automatically checks for cancellation, meaning that if you cancel a sleeping task it will be woken and throw a `CancellationError` for you to catch.

::: tip

Unlike making a thread sleep, `Task.sleep()` does *not* block the underlying thread, allowing it pick up work from elsewhere if needed.

:::

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
  "title": "How to cancel a task group | Swift Concurrency by Example",
  "desc": "How to cancel a task group",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-cancel-a-task-group.md",
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