---
lang: ko-KR
title: How to cancel a Task
description: Article(s) > How to cancel a Task
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
      content: Article(s) > How to cancel a Task
    - property: og:description
      content: How to cancel a Task
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/how-to-cancel-a-task.html
date: 2024-04-30
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
  "title": "How to cancel a Task | Swift Concurrency by Example",
  "desc": "How to cancel a Task",
  "link": "https://hackingwithswift.com/quick-start/concurrency/how-to-cancel-a-task", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Swift’s tasks use *cooperative cancellation*, which means that although we can tell a task to stop work, the task itself is free to completely ignore that instruction and carry on for as long as it wants. This is a feature rather than a bug: if cancelling a task made it stop work immediately, the task might leave your program in an inconsistent state.

There are seven things to know when working with task cancellation:

1. You can explicitly cancel a task by calling its `cancel()` method.
2. Any task can check `Task.isCancelled` to determine whether the task has been cancelled or not.
3. You can call the `Task.checkCancellation()` method, which will throw a `CancellationError` if the task has been cancelled or do nothing otherwise.
4. Some parts of Foundation automatically check for task cancellation and will throw their own cancellation error even without your input.
5. If you’re using `Task.sleep()` to wait for some amount of time to pass, cancelling your task will automatically terminate the sleep and throw a `CancellationError`.
6. If the task is part of a group and any part of the group throws an error, the other tasks will be cancelled and awaited.
7. If you have started a task using SwiftUI’s `task()` modifier, that task will automatically be canceled when the view disappears.

We can explore a few of these in code. First, here’s a function that uses a task to fetch some data from a URL, decodes it into an array, then returns the average:

```swift
func getAverageTemperature() async {
    let fetchTask = Task { () -> Double in
        let url = URL(string: "https://hws.dev/readings.json")!
        let (data, _) = try await URLSession.shared.data(from: url)
        let readings = try JSONDecoder().decode([Double].self, from: data)
        let sum = readings.reduce(0, +)
        return sum / Double(readings.count)
    }

    do {
        let result = try await fetchTask.value
        print("Average temperature: \(result)")
    } catch {
        print("Failed to get data.")
    }
}

await getAverageTemperature()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-cancel-a-task-1.zip)

Now, there is no explicit cancellation in there, but there *is* implicit cancellation because the `URLSession.shared.data(from:)` call will check to see whether its task is still active before continuing. If the task has been cancelled, `data(from:)` will automatically throw a `URLError` and the rest of the task won’t execute.

However, that implicit check happens *before* the network call, so it’s unlikely to be an actual cancellation point in practice. As most of our users are likely to be using mobile network connections, the network call is likely to take most of the time of this task, particularly if the user has a poor connection.

So, we could upgrade our task to explicitly check for cancellation *after* the network request, using `Task.checkCancellation()`. This is a static function call because it will always apply to whatever task it’s called inside, and it needs to be called using `try` so that it can throw a `CancellationError` if the task *has* been cancelled.

Here’s the new function:

```swift
func getAverageTemperature() async {
    let fetchTask = Task { () -> Double in
        let url = URL(string: "https://hws.dev/readings.json")!
        let (data, _) = try await URLSession.shared.data(from: url)
        try Task.checkCancellation()
        let readings = try JSONDecoder().decode([Double].self, from: data)
        let sum = readings.reduce(0, +)
        return sum / Double(readings.count)
    }

    do {
        let result = try await fetchTask.value
        print("Average temperature: \(result)")
    } catch {
        print("Failed to get data.")
    }
}

await getAverageTemperature()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-cancel-a-task-2.zip)

As you can see, it just takes one call to `Task.checkCancellation()` to make sure our task isn’t wasting time calculating data that’s no longer needed.

If you want to handle cancellation yourself – if you need to clean up some resources or perform some other calculations, for example – then instead of calling `Task.checkCancellation()` you should check the value of `Task.isCancelled` instead. This is a simple Boolean that returns the current cancellation state, which you can then act on however you want.

To demonstrate this, we could rewrite our function a third time so that cancelling the task or failing to fetch data returns an average temperature of 0. This time we’re going to cancel the task ourselves as soon as it’s created, but because we’re always returning a default value we no longer need to handle errors when reading the task’s result:

```swift
func getAverageTemperature() async {
    let fetchTask = Task { () -> Double in
        let url = URL(string: "https://hws.dev/readings.json")!

        do {
            let (data, _) = try await URLSession.shared.data(from: url)
            if Task.isCancelled { return 0 }

            let readings = try JSONDecoder().decode([Double].self, from: data)
            let sum = readings.reduce(0, +)
            return sum / Double(readings.count)
        } catch {
            return 0
        }
    }

    fetchTask.cancel()

    let result = await fetchTask.value
    print("Average temperature: \(result)")
}

await getAverageTemperature()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-cancel-a-task-3.zip)

Now we have one implicit cancellation point with the `data(from:)` call, and an explicit one with the check on `Task.isCancelled`. If either one is triggered, the task will return 0 rather than throw an error.

::: tip

You can use both `Task.checkCancellation()` and `Task.isCancelled` from both synchronous and asynchronous functions. Remember, async functions can call synchronous functions freely, so checking for cancellation can be just as important to avoid doing unnecessary work.

:::

::: details Similar solutions…

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