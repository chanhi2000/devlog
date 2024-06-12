---
lang: ko-KR
title: How to get a Result from a task
description: Article(s) > How to get a Result from a task
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
      content: Article(s) > How to get a Result from a task
    - property: og:description
      content: How to get a Result from a task
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/how-to-get-a-result-from-a-task.html
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
  "title": "How to get a Result from a task | Swift Concurrency by Example",
  "desc": "How to get a Result from a task",
  "link": "https://hackingwithswift.com/quick-start/concurrency/how-to-get-a-result-from-a-task", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you want to read the return value from a `Task` directly, you should read its `value` using `await`, or use `try await` if it has a throwing operation. However, all tasks also have a `result` property that returns an instance of Swift’s `Result` struct, generic over the type returned by the task as well as whether it might contain an error or not.

To demonstrate this, we could write some code that creates a task to fetch and decode a string from a URL. To start with we’re going to make this task throw errors if the download fails, or if the data can’t be converted to a string.

Here’s the code:

```swift
enum LoadError: Error {
    case fetchFailed, decodeFailed
}

func fetchQuotes() async {
    let downloadTask = Task { () -> String in
        let url = URL(string: "https://hws.dev/quotes.txt")!
        let data: Data

        do {
            (data, _) = try await URLSession.shared.data(from: url)
        } catch {
            throw LoadError.fetchFailed
        }

        if let string = String(data: data, encoding: .utf8) {
            return string
        } else {
            throw LoadError.decodeFailed
        }
    }

    let result = await downloadTask.result

    do {
        let string = try result.get()
        print(string)
    } catch LoadError.fetchFailed {
        print("Unable to fetch the quotes.")
    } catch LoadError.decodeFailed {
        print("Unable to convert quotes to text.")
    } catch {
        print("Unknown error.")
    }
}

await fetchQuotes()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-get-a-result-from-a-task-1.zip)

There’s not a lot of code there, but there are a few things I want to point out as being important:

1. Our task might return a string, but also might throw one of two errors. So, when we ask for its `result` property we’ll be given a `Result&lt;String, Error&gt;`.
2. Although we need to use `await` to get the result, we *don’t* need to use `try` even though there could be errors there. This is because we’re just reading out the result, not trying to read the successful value.
3. We call `get()` on the `Result` object to read the successful, but *that’s* when `try` is needed because it’s when Swift checks whether an error occurred or not.
4. When it comes to catching errors, we need a “catch everything” block at the end, even though we know we’ll only throw `LoadError`.

That last point hits us because Swift isn’t able to evaluate the task to see exactly what kinds of error are thrown inside, and there’s no way of adding that annotation ourself because Swift doesn’t support typed throws.

If you don’t care what errors are thrown, or don’t mind digging through Foundation’s various errors yourself, you can avoid handling errors in the task and just let them propagate up:

```swift
func fetchQuotes() async {
    let downloadTask = Task { () -> String in
        let url = URL(string: "https://hws.dev/quotes.txt")!
        let (data, _) = try await URLSession.shared.data(from: url)
        return String(decoding: data, as: UTF8.self)
    }

    let result = await downloadTask.result

    do {
        let string = try result.get()
        print(string)
    } catch {
        print("Unknown error.")
    }
}

await fetchQuotes()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-get-a-result-from-a-task-2.zip)

The main take aways here are:

1. All tasks can return a `Result` if you want.
2. For the error type, the `Result` will either contain `Error` or `Never`.
3. Although we need to use `await` to get the result, we *don’t* need to use `try` until we try to get the success value inside.

Many places where `Result` was useful are now better served through async/await, but `Result` is still useful for storing in a single value the success or failure of some operation. Yes, in the code above we evaluate the result immediately for brevity, but the power of `Result` is that it’s value you can pass around elsewhere in your code to deal with at a later time.

::: details Similar solutions…

```component VPCard
{
  "title": "How to handle different result types in a task group | Swift Concurrency by Example",
  "desc": "How to handle different result types in a task group",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-handle-different-result-types-in-a-task-group.md",
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

:::

---

<TagLinks />