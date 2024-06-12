---
lang: ko-KR
title: How to control the priority of a task
description: Article(s) > How to control the priority of a task
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
      content: Article(s) > How to control the priority of a task
    - property: og:description
      content: How to control the priority of a task
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/how-to-control-the-priority-of-a-task.html
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
  "title": "How to control the priority of a task | Swift Concurrency by Example",
  "desc": "How to control the priority of a task",
  "link": "https://hackingwithswift.com/quick-start/concurrency/how-to-control-the-priority-of-a-task", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Swift tasks can have a priority attached to them, such as `.high` or `.background`, but the priority can also be `nil` if no specific priority was assigned. This priority can be used by the system to determine which task should be executed next, but this isn’t guaranteed – think of it as a suggestion rather than a rule.

Creating a task with a priority look like this:

```swift
func fetchQuotes() async {
    let downloadTask = Task(priority: .high) { () -> String in
        let url = URL(string: "https://hws.dev/chapter.txt")!
        let (data, _) = try await URLSession.shared.data(from: url)
        return String(decoding: data, as: UTF8.self)
    }

    do {
        let text = try await downloadTask.value
        print(text)
    } catch {
        print(error.localizedDescription)
    }
}

await fetchQuotes()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-control-the-priority-of-a-task-1.zip)

Although you *can* directly assign a priority to a task when it’s created, if you don’t then Swift will follow three rules for deciding the priority automatically: 

1. If the task was created from another task, the child task will inherit the priority of the parent task.
2. If the new task was created directly from the main thread as opposed to a task, it’s automatically assigned the highest priority of `.userInitiated`.
3. If the new task wasn’t made by another task or the main thread, Swift will try to query the priority of the thread or give it a `nil` priority.

**This means not specifying an exact priority is often a good idea because Swift will do The Right Thing.**

However, like I said you can also specify an exact priority from one of the following:

- The highest priority is `.high`, which is synonymous with `.userInitiated`. As the name implies, this should be used only for tasks that the user specifically started and is actively waiting for.
- Next highest is `medium`, and again as the name implies this is a great choice for most of your tasks that the user isn’t actively waiting for.
- Next is `.low`, which is synonymous with `.utility`. This is the best choice for anything long enough to require a progress bar to be displayed, such as copying files or importing data.
- The lowest priority is `.background`, which is for any work the user can’t see, such as building a search index. This could in theory take hours to complete.

Like I said, priority inheritance helps get us a sensible priority by default, particularly when creating tasks in response to a user interface action.

For example, we could build a simple SwiftUI app using a single task, and we don’t need to provide a specific priority –it will automatically run as high priority because it was started from our UI:

```swift
struct ContentView: View {
    @State private var jokeText = ""

    var body: some View {
        VStack {
            Text(jokeText)
            Button("Fetch new joke", action: fetchJoke)
        }
    }

    func fetchJoke() {
        Task {
            let url = URL(string: "https://icanhazdadjoke.com")!
            var request = URLRequest(url: url)
            request.setValue("Swift Concurrency by Example", forHTTPHeaderField: "User-Agent")
            request.setValue("text/plain", forHTTPHeaderField: "Accept")

            let (data, _) = try await URLSession.shared.data(for: request)

            if let jokeString = String(data: data, encoding: .utf8) {
                jokeText = jokeString
            } else {
                jokeText = "Load failed."
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-control-the-priority-of-a-task-2.zip)

Any task can query its current priority using `Task.currentPriority`, but this works from anywhere – if it’s called in a function that is not currently part of a task, Swift will query the system for an answer or send back `.medium`.

::: details Similar solutions…

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
  "title": "How to run tasks using SwiftUI’s task() modifier | Swift Concurrency by Example",
  "desc": "How to run tasks using SwiftUI’s task() modifier",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-run-tasks-using-swiftuis-task-modifier.md",
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

:::

---

<TagLinks />