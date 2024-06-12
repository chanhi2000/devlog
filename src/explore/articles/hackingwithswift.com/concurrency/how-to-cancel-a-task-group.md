---
lang: ko-KR
title: How to cancel a task group
description: Article(s) > How to cancel a task group
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
      content: Article(s) > How to cancel a task group
    - property: og:description
      content: How to cancel a task group
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/how-to-cancel-a-task-group.html
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
  "title": "How to cancel a task group | Swift Concurrency by Example",
  "desc": "How to cancel a task group",
  "link": "https://hackingwithswift.com/quick-start/concurrency/how-to-cancel-a-task-group", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Swift’s task groups can be cancelled in one of three ways:

1. If the parent task of the task group is cancelled.
2. If you explicitly call `cancelAll()` on the group.
3. If one of your child tasks throws an uncaught error, all remaining tasks will be implicitly cancelled.

The first of those happens outside of the task group, but the other two are worth investigating.

First, calling `cancelAll()` will cancel all remaining tasks. As with standalone tasks, cancelling a task group is *cooperative*: your child tasks can check for cancellation using `Task.isCancelled` or `Task.checkCancellation()`, but they can ignore cancellation entirely if they want.

I’ll show you a real-world example of `cancelAll()` in action in a moment, but before that I want to show you some toy examples so you can see how it works.

We could write a simple `printMessage()` function like this one, creating three tasks inside a group in order to generate a string:

```swift
func printMessage() async {
    let result = await withThrowingTaskGroup(of: String.self) { group -> String in
        group.addTask {
            return "Testing"
        }

        group.addTask {
            return "Group"
        }

        group.addTask {
            return "Cancellation"
        }

        group.cancelAll()
        var collected = [String]()

        do {
            for try await value in group {
                collected.append(value)
            }
        } catch {
            print(error.localizedDescription)
        }

        return collected.joined(separator: " ")
    }

    print(result)
}

await printMessage()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-cancel-a-task-group-1.zip)

As you can see, that calls `cancelAll()` immediately after creating all three tasks, and yet when the code is run you’ll still see all three strings printed out. I’ve said it before, but it bears repeating and this time in bold: **cancelling a task group is cooperative, so unless the tasks you add implicitly or explicitly check for cancellation calling `cancelAll()` by itself won’t do much.**

To see `cancelAll()` actually working, try replacing the first `addTask()` call with this:

```swift
group.addTask {
    try Task.checkCancellation()
    return "Testing"
}
```

And now our behavior will be different: you might see “Cancellation” by itself, “Group” by itself, “Cancellation Group”, “Group Cancellation”, or nothing at all. 

To understand why, keep the following in mind:

1. Swift will start all three tasks immediately. They might all run in parallel; it depends on what the system thinks will work best at runtime.
2. Although we immediately call `cancelAll()`, some of the tasks might have started running. 
3. All the tasks finish in completion order, so when we first loop over the group we might receive the result from any of the three tasks.

When you put those together, it’s entirely possible the first task to complete is the one that calls `Task.checkCancellation()`, which means our loop will exit, we’ll print an error message, and send back an empty string. Alternatively, one or both of the other tasks might run first, in which case we’ll get our other possible outputs.

Remember, calling `cancelAll()` only cancels *remaining* tasks, meaning that it won’t undo work that has already completed. Even then the cancellation is cooperative, so you need to make sure the tasks you add to the group check for cancellation.

With that toy example out of the way, here’s a more complex demonstration of `cancelAll()` that builds on an example from an earlier chapter. This code attempts to fetch, merge, and display using SwiftUI the contents of five news feeds. If any of the fetches throws an error the whole group will throw an error and end, but if a fetch somehow succeeds while ending up with an empty array it means our data quota has run out and we should stop trying any other feed fetches.

Here’s the code:

```swift
struct NewsStory: Identifiable, Decodable {
    let id: Int
    let title: String
    let strap: String
    let url: URL
}

struct ContentView: View {
    @State private var stories = [NewsStory]()

    var body: some View {
        NavigationView {
            List(stories) { story in
                VStack(alignment: .leading) {
                    Text(story.title)
                        .font(.headline)

                    Text(story.strap)
                }
            }
            .navigationTitle("Latest News")
        }
        .task {
            await loadStories()
        }
    }

    func loadStories() async {
        do {
            try await withThrowingTaskGroup(of: [NewsStory].self) { group -> Void in
                for i in 1...5 {
                    group.addTask {
                        let url = URL(string: "https://hws.dev/news-\(i).json")!
                        let (data, _) = try await URLSession.shared.data(from: url)
                        try Task.checkCancellation()
                        return try JSONDecoder().decode([NewsStory].self, from: data)
                    }
                }

                for try await result in group {
                    if result.isEmpty {
                        group.cancelAll()
                    } else {
                        stories.append(contentsOf: result)
                    }
                }

                stories.sort { $0.id < $1.id }
            }
        } catch {
            print("Failed to load stories: \(error.localizedDescription)")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-cancel-a-task-group-2.zip)

As you can see, that calls `cancelAll()` as soon as any feed sends back an empty array, thus aborting all remaining fetches. Inside the child tasks there is an explicit call to `Task.checkCancellation()`, but the `data(from:)` also runs check for cancellation to avoid doing unnecessary work.

The other way task groups get cancelled is if one of the tasks throws an uncaught error. We can write a simple test for this by creating two tasks inside a group, both of which sleep for a little time. The first task will sleep for 1 second then throw an example error, whereas the second will sleep for 2 seconds then print the value of `Task.isCancelled`. 

Here’s how that looks:

```swift
enum ExampleError: Error {
    case badURL
}

func testCancellation() async {
    do {
        try await withThrowingTaskGroup(of: Void.self) { group -> Void in
            group.addTask {
                try await Task.sleep(nanoseconds: 1_000_000_000)
                throw ExampleError.badURL
            }

            group.addTask {
                try await Task.sleep(nanoseconds: 2_000_000_000)
                print("Task is cancelled: \(Task.isCancelled)")
            }

            try await group.next()
        }
    } catch {
        print("Error thrown: \(error.localizedDescription)")
    }
}

await testCancellation()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-cancel-a-task-group-3.zip)

::: note

Just throwing an error inside `addTask()` isn’t enough to cause other tasks in the group to be cancelled – this only happens when you access the value of the throwing task using `next()` or when looping over the child tasks. This is why the code sample above specifically waits for the result of a task, because doing so will cause `ExampleError.badURL` to be rethrown and cancel the other task.

:::

Calling `addTask()` on your group will unconditionally add a new task to the group, even if you have already cancelled the group. If you want to avoid adding tasks to a cancelled group, use the `addTaskUnlessCancelled()` method instead – it works identically except will do nothing if called on a cancelled group. Calling `addTaskUnlessCancelled()` returns a Boolean that will be true if the task was successfully added, or false if the task group was already cancelled.

::: details Similar solutions…

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
  "title": "How to create a task group and add tasks to it | Swift Concurrency by Example",
  "desc": "How to create a task group and add tasks to it",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-create-a-task-group-and-add-tasks-to-it.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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

:::

---

<TagLinks />