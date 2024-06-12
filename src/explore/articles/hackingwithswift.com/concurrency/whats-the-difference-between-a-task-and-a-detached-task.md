---
lang: ko-KR
title: What’s the difference between a task and a detached task?
description: Article(s) > What’s the difference between a task and a detached task?
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
      content: Article(s) > What’s the difference between a task and a detached task?
    - property: og:description
      content: What’s the difference between a task and a detached task?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/whats-the-difference-between-a-task-and-a-detached-task.html
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
  "title": "What’s the difference between a task and a detached task? | Swift Concurrency by Example",
  "desc": "What’s the difference between a task and a detached task?",
  "link": "https://hackingwithswift.com/quick-start/concurrency/whats-the-difference-between-a-task-and-a-detached-task", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

If you create a new task using the regular `Task` initializer, your work starts running immediately and inherits the priority of the caller, any task local values, and its actor context. On the other hand, detached tasks also start work immediately, but do *not* inherit the priority or other information from the caller.

I’m going to explain in more detail why these differences matter, but first I want to mention this very important quote from the Swift Evolution proposal for `async let`: “`Task.detached` most of the time should not be used at all.” I’m getting that out of the way up front so you don’t spend time learning about detached tasks, only to realize you probably shouldn’t use them!

Still here? Okay, let’s dig in to our three differences: priority, task local values, and actor isolation.

The priority part is straightforward: if you’re inside a user-initiated task and create a new task, it will also have a priority of user-initiated, whereas creating a new detached task would give a nil priority unless you specifically asked for something.

The task local values part is a little more complex, but to be honest probably isn’t going to be of interest to most people. Task local values allow us to share a specific value everywhere inside one specific task – they are like static properties on a type, except rather than everything sharing that property, each task has its own value. Detached tasks do *not* inherit the task local values of their parent because they do not have a parent.

The *actor context* part is more important and more complex. When you create a regular task from inside an actor it will be isolated to that actor, which means you can use other parts of the actor synchronously:

```swift
actor User {
    func login() {
        Task {
            if authenticate(user: "taytay89", password: "n3wy0rk") {
                print("Successfully logged in.")
            } else {
                print("Sorry, something went wrong.")
            }
        }
    }

    func authenticate(user: String, password: String) -> Bool {
        // Complicated logic here
        return true
    }
}

let user = User()
await user.login()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/whats-the-difference-between-a-task-and-a-detached-task-1.zip)

In comparison, a detached task runs concurrently with all other code, including the actor that created it – it effectively has no parent, and therefore has greatly restricted access to the data inside the actor.

So, if we were to rewrite the previous actor to use a detached task, it would need to call `authenticate()` like this:

```swift
actor User {
    func login() {
        Task.detached {
            if await self.authenticate(user: "taytay89", password: "n3wy0rk") {
                print("Successfully logged in.")
            } else {
                print("Sorry, something went wrong.")
            }
        }
    }

    func authenticate(user: String, password: String) -> Bool {
        // Complicated logic here
        return true
    }
}

let user = User()
await user.login()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/whats-the-difference-between-a-task-and-a-detached-task-2.zip)

This distinction is particularly important when you are running on the main actor, which will be the case if you’re responding to a button click for example. The rules here might not be immediately obvious, so I want to show you some examples of what is allowed and what is *not* allowed, and more importantly explain why each is the case.

First, if you’re changing the value of an `@State` property, you can do so using a regular task like this:

```swift
struct ContentView: View {
    @State private var name = "Anonymous"

    var body: some View {
        VStack {
            Text("Hello, \(name)!")
            Button("Authenticate") {
                Task {
                    name = "Taylor"
                }
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/whats-the-difference-between-a-task-and-a-detached-task-3.zip)

::: note

The `Task` here is of course not needed because we’re just setting a local value; I’m just trying to illustrate how regular tasks and detached tasks are different.

:::

In fact, because `@State` guarantees it’s safe to change its value on any thread, we can use a detached task instead even though it won’t inherit actor isolation:

```swift
struct ContentView: View {
    @State private var name = "Anonymous"

    var body: some View {
        VStack {
            Text("Hello, \(name)!")
            Button("Authenticate") {
                Task.detached {
                    name = "Taylor"
                }
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/whats-the-difference-between-a-task-and-a-detached-task-4.zip)

That’s the easy part. The rules change when we switch to an observable object that publishes changes. As soon as you add any `@ObservedObject` or `@StateObject` property wrappers to a view, Swift will automatically infer that the whole view must also run on the main actor.

This makes sense if you think about it: changes published by observable objects must update the UI on the main thread, and because any part of the view might try to adjust your object the only safe approach is for the whole view to run on the main actor.

So, this means we can modify a view model from inside a task created inside a SwiftUI view:

```swift
class ViewModel: ObservableObject {
    @Published var name = "Hello"
}

struct ContentView: View {
    @StateObject private var model = ViewModel()

    var body: some View {
        VStack {
            Text("Hello, \(model.name)!")
            Button("Authenticate") {
                Task {
                    model.name = "Taylor"
                }
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/whats-the-difference-between-a-task-and-a-detached-task-5.zip)

However, we *cannot* use `Task.detached` here – Swift will throw up an error that a property isolated to global actor 'MainActor' can not be mutated from a non-isolated context. In simpler terms, our view model updates the UI and so must be on the main actor, but our detached task does not belong to that actor.

At this point, you might wonder why detached tasks would have any use. Well, consider this code:

```swift
class ViewModel: ObservableObject { }

struct ContentView: View {
    @StateObject private var model = ViewModel()

    var body: some View {
        Button("Authenticate", action: doWork)
    }

    func doWork() {
        Task {
            for i in 1...10_000 {
                print("In Task 1: \(i)")
            }
        }

        Task {
            for i in 1...10_000 {
                print("In Task 2: \(i)")
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/whats-the-difference-between-a-task-and-a-detached-task-6.zip)

That’s the simplest piece of code that demonstrates the usefulness of detached tasks: a SwiftUI view monitoring an empty view model, plus a button that launches a couple of tasks to print out text.

When that runs, you’ll see “In Task 1” printed 10,000 times, then “In Task 2” printed 10,000 times – even though we have created two tasks, they are executing sequentially. This happens because our `@StateObject` view model forces the entire view onto the main actor, meaning that it can only do one thing at a time.

In contrast, if you change both `Task` initializers to `Task.detached`, you’ll see “In Task 1” and “In Task 2” get intermingled as both execute at the same time. Without any need for actor isolation, Swift can run those tasks concurrently – using a detached task has allowed us to shed our attachment to the main actor.

Although detached tasks do have very specific uses, generally I think they should be your last port of call – use them only if you’ve tried both a regular task and `async let`, and neither solved your problem.

::: details Similar solutions…

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
  "title": "What’s the difference between Sequence, AsyncSequence, and AsyncStream? | Swift Concurrency by Example",
  "desc": "What’s the difference between Sequence, AsyncSequence, and AsyncStream?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/whats-the-difference-between-sequence-asyncsequence-and-asyncstream.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />