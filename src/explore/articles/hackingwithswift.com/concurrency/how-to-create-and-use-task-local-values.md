---
lang: ko-KR
title: How to create and use task local values
description: Article(s) > How to create and use task local values
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
      content: Article(s) > How to create and use task local values
    - property: og:description
      content: How to create and use task local values
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/how-to-create-and-use-task-local-values.html
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
  "title": "How to create and use task local values | Swift Concurrency by Example",
  "desc": "How to create and use task local values",
  "link": "https://hackingwithswift.com/quick-start/concurrency/how-to-create-and-use-task-local-values", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Swift lets us attach metadata to a task using *task-local values*, which are small pieces of information that any code inside a task can read. For example, you’ve already seen how we can read `Task.isCancelled` to see whether the current task is cancelled or not, but that’s not a true static property – it’s scoped to the current task, rather than shared across all tasks. This is the power of task-local values: the ability to create static-like properties inside a task.

::: important

Most people will not want to use task-local values – if you’re just curious you’re welcome to read on and explore how task-local values work, but honestly they are useful in only a handful of very specific circumstances and if you find them complex I wouldn’t worry too much.

:::

Task-local values are analogous to thread-local values in an old-style multithreading environment: we attach some metadata to our task, and any code running inside that task can read that data as needed. Swift’s implementation is carefully scoped so that you create contexts where the data is available, rather than just injecting it directly into the task, which makes it possible to adjust your metadata over time. However, *inside* that context all code is able to read your task-local values, regardless of how it’s used.

Using task-local values happens in four steps:

1. Creating a type that has one or more properties we want to make into task-local values. This can be an enum, struct, class, or even actor if you want, but I’d suggest starting with an enum so it’s clear you don’t intend to make instances of the type.
2. Marking each of your task-local values with the `@TaskLocal` property wrapper. These properties can be any type you want, including optionals, but must be marked as `static`.
3. Starting a new task-local scope using `YourType.$yourProperty.withValue(someValue) { … }`.

Inside the task-local scope, any time you read `YourType.yourProperty` you will receive the *task-local* value for that property – it’s not a regular static property that has a single value shared between all parts of your program, but instead it can return a different value depending on which task tries to read it.

To demonstrate task-local values in action, I want to give you two examples: the first is a simple toy example that demonstrates the code required to use them and how they work, but the second is a more real-world example that’s actually useful.

First, our simple example. This will create a `User` enum with a `id` property that is marked `@TaskLocal`, then it will launch a couple of tasks with different values for that user ID. Each task will do exactly the same thing: print the user ID, sleep for a small amount of time, then print the user ID again, which will allow you to see both tasks running at the same time while having their own unique task-local user ID.

Here’s the code:

```swift
enum User {
    @TaskLocal static var id = "Anonymous"
}

@main
struct App {
    static func main() async throws {
        Task {
            try await User.$id.withValue("Piper") {
                print("Start of task: \(User.id)")
                try await Task.sleep(nanoseconds: 1_000_000)
                print("End of task: \(User.id)")
            }
        }

        Task {
            try await User.$id.withValue("Alex") {
                print("Start of task: \(User.id)")
                try await Task.sleep(nanoseconds: 1_000_000)
                print("End of task: \(User.id)")
            }
        }

        print("Outside of tasks: \(User.id)")
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-create-and-use-task-local-values-1.zip)

When that code runs it will print:

- Start of task: Alex
- Start of task: Piper
- Outside of tasks: Anonymous
- End of task: Alex
- End of task: Piper

Of course, because the two tasks run independently of each other you might also find that the order of Piper and Alex switch. The important thing is that each task has its own value for `User.id` even as they overlap, and code outside the task will continue to use the original value.

As you can see, Swift makes it impossible to forget about a task-local value you’ve set, because it only exists for the work inside `withValue()`. This scoping approach also means it’s possible to nest multiple task locals as needed, and you can even shadow task locals – start a scope for one, do some work, then start another nested scope for that same property. so that it temporarily has a different value.

In real-world code, task-local values are useful for places where you need to repeatedly pass values around inside your tasks – values that need to be shared within the task, but not across your whole program like a singleton might be. For example, the Swift Evolution proposal for task-local values ([<FontIcon icon="iconfont icon-github"/>https://github.com/apple/swift-evolution/blob/main/proposals/0311-task-locals.md](https://github.com/apple/swift-evolution/blob/main/proposals/0311-task-locals.md)) suggests examples such as tracing, mocking, progress monitoring, and more.

As a more complex example, we could create a simple `Logger` struct that writes out messages depending on the current level of logging: debug being the lowest log level, then info, warn, error, and finally fatal at the highest level. If we make the log level – which messages to print – be a task-local value, then each of our tasks can have whatever level of logging they want, regardless of what other tasks are doing.

To make this work we need three things:

1. An enum to describe the five levels of logging.
2. A `Logger` struct that is a singleton. 
3. A task-local property inside `Logger` to store the current log level. (Even though the logger is a singleton, the log *level* is task-local.)

On top of that, we need a couple more things to actually demonstrate the logger in action: a `fetch()` method that downloads data from a URL and creates various logging messages, and a couple of tasks that call `fetch()` with different task-local log settings so we can see exactly how it all works.

Here’s the code:

```swift
// Our five log levels, marked Comparable so we can use < and > with them.
enum LogLevel: Comparable {
    case debug, info, warn, error, fatal
}

struct Logger {
    // The log level for an individual task
    @TaskLocal static var logLevel = LogLevel.info

    // Make this struct a singleton
    private init() { }
    static let shared = Logger()

    // Print out a message only if it meets or exceeds our log level.
    func write(_ message: String, level: LogLevel) {
        if level >= Logger.logLevel {
            print(message)
        }
    }
}

@main
struct App {
    // Returns data from a URL, writing log messages along the way.
    static func fetch(url urlString: String) async throws -> String? {
        Logger.shared.write("Preparing request: \(urlString)", level: .debug)

        if let url = URL(string: urlString) {
            let (data, _) = try await URLSession.shared.data(from: url)
            Logger.shared.write("Received \(data.count) bytes", level: .info)
            return String(decoding: data, as: UTF8.self)
        } else {
            Logger.shared.write("URL \(urlString) is invalid", level: .error)
            return nil
        }
    }

    // Starts a couple of fire-and-forget tasks with different log levels.
    static func main() async throws {
        Task {
            try await Logger.$logLevel.withValue(.debug) {
                try await fetch(url: "https://hws.dev/news-1.json")
            }
        }

        Task {
            try await Logger.$logLevel.withValue(.error) {
                try await fetch(url: "https:\\hws.dev/news-1.json")
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-create-and-use-task-local-values-2.zip)

When that runs you’ll see “Preparing request: [<FontIcon icon="iconfont icon-json"/>https://hws.dev/news-1.json](https://hws.dev/news-1.json)” as the first task starts, then “URL https:\hws.dev/news-1.json is invalid” as the second task starts (I used a back slash rather than forward slash), then “Received 8075 bytes” as the first task finishes downloading its data.

So, here our `fetch()` method doesn’t even need to know that a task-local value is being used – it just calls the `Logger` singleton, which in turn refers to the task-local value.

To finish up, I want to leave you with a few important tips for using task-local values:

1. It’s okay to access a task-local value outside of a `withValue()` scope – you’ll just get back whatever default value you gave it.
2. Although regular tasks inherit task-local values of their parent task, detached tasks do *not* because they don’t have a parent.
3. Task-local values are read-only; you can only modify them by calling `withValue()` as shown above.

And finally, one important quote from the Swift Evolution proposal for this feature: “please be careful with the use of task-locals and don't use them in places where plain-old parameter passing would have done the job.” Put more plainly, if task locals are the answer, there’s a very good chance you’re asking the wrong question.

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
  "title": "What’s the difference between async let, tasks, and task groups? | Swift Concurrency by Example",
  "desc": "What’s the difference between async let, tasks, and task groups?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/whats-the-difference-between-async-let-tasks-and-task-groups.md",
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

:::

---

<TagLinks />