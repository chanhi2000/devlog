---
lang: ko-KR
title: How to use @MainActor to run code on the main queue
description: Article(s) > How to use @MainActor to run code on the main queue
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
      content: Article(s) > How to use @MainActor to run code on the main queue
    - property: og:description
      content: How to use @MainActor to run code on the main queue
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/how-to-use-mainactor-to-run-code-on-the-main-queue.html
date: 2021-12-13
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
  "title": "How to use @MainActor to run code on the main queue | Swift Concurrency by Example",
  "desc": "How to use @MainActor to run code on the main queue",
  "link": "https://hackingwithswift.com/quick-start/how-to-use-mainactor-to-run-code-on-the-main-queue", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

`@MainActor` is a global actor that uses the main queue for executing its work. In practice, this means methods or types marked with `@MainActor` can (for the most part) safely modify the UI because it will always be running on the main queue, and calling `MainActor.run()` will push some custom work of your choosing to the main actor, and thus to the main queue. At the simplest level both of these features are straightforward to use, but as you’ll see there’s a lot of complexity behind them.

First, let’s look at using `@MainActor`, which automatically makes a single method or all methods on a type run on the main actor. This is particularly useful for any types that exist to update your user interface, such as `ObservableObject` classes.

For example, we could create a observable object with two `@Published` properties, and because they will both update the UI we would mark the whole class with `@MainActor` to ensure these UI updates always happen on the main actor:

```swift
@MainActor
class AccountViewModel: ObservableObject {
    @Published var username = "Anonymous"
    @Published var isAuthenticated = false
}
```

In fact, this set up is so central to the way `ObservableObject` works that SwiftUI bakes it right in: whenever you use `@StateObject` or `@ObservedObject` inside a view, Swift will ensure that the whole view runs on the main actor so that you can’t accidentally try to publish UI updates in a dangerous way. Even better, no matter what property wrappers you use, the `body` property of your SwiftUI views is always run on the main actor.

Does that mean you don’t need to explicitly add `@MainActor` to observable objects? Well, no – there are still benefits to using `@MainActor` with these classes, not least if they are using `async`/`await` to do their own asynchronous work such as downloading data from a server.

So, my recommendation is simple: even though SwiftUI ensures main-actor-ness when using `@ObservableObject`, `@StateObject`, and SwiftUI view `body` properties, it’s a good idea to add the `@MainActor` attribute to all your observable object classes to be absolutely sure all UI updates happen on the main actor. If you need certain methods or computed properties to opt out of running on the main actor, use `nonisolated` as you would do with a regular actor.

::: important

I’ve said it previously, but it’s worth repeating: you should *not* attempt to use actors for your observable objects, because they must do their UI updates on the main actor rather than a custom actor.

:::

More broadly, *any* type that has `@MainActor` objects as properties will also implicitly be `@MainActor` using *global actor inference* – a set of rules that Swift applies to make sure global-actor-ness works without getting in the way too much. I’ll cover these rules in the next chapter, because they are quite precise.

The magic of `@MainActor` is that it automatically forces methods or whole types to run on the main actor, a lot of the time without any further work from us. Previously we needed to do it by hand, remembering to use code like `DispatchQueue.main.async()` or similar every place it was needed, but now the compiler does it for us automatically.

Be careful: `@MainActor` is really helpful to make code run on the main actor, but it’s not *foolproof*. For example, if you have a `@MainActor` class then in theory all its methods will run on the main actor, but one of those methods could trigger code to run on a background task. For example, if you’re using Face ID and call `evaluatePolicy()` to authenticate the user, the completion handler will be called on a background thread even though that code is still within the `@MainActor` class.

If you *do* need to spontaneously run some code on the main actor, you can do that by calling `MainActor.run()` and providing your work. This allows you to safely push work onto the main actor no matter where your code is currently running, like this:

```swift
func couldBeAnywhere() async {
    await MainActor.run {
        print("This is on the main actor.")
    }
}

await couldBeAnywhere()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-use-atmainactor-to-run-code-on-the-main-queue-1.zip)

You can send back nothing from `run()` if you want, or send back a value like this:

```swift
func couldBeAnywhere() async {
    let result = await MainActor.run { () -> Int in
        print("This is on the main actor.")
        return 42
    }

    print(result)
}

await couldBeAnywhere()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-use-atmainactor-to-run-code-on-the-main-queue-2.zip)

Even better, if that code was already running on the main actor then the code is executed immediately – it won’t wait until the next run loop in the same way that `DispatchQueue.main.async()` would have done.

If you wanted the work to be sent off to the main actor *without* waiting for its result to come back, you can place it in a new task like this:

```swift
func couldBeAnywhere() {
    Task {
        await MainActor.run {
            print("This is on the main actor.")
        }
    }

    // more work you want to do
}

couldBeAnywhere()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-use-atmainactor-to-run-code-on-the-main-queue-3.zip)

Or you can also mark your task’s closure as being `@MainActor`, like this:

```swift
func couldBeAnywhere() {
    Task { @MainActor in
        print("This is on the main actor.")
    }

    // more work you want to do
}

couldBeAnywhere()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-use-atmainactor-to-run-code-on-the-main-queue-4.zip)

This is particularly helpful when you’re inside a synchronous context, so you need to push work to the main actor without using the `await` keyword.

::: important

If your function is already running on the main actor, using `await MainActor.run()` will run your code immediately without waiting for the next run loop, but using `Task` as shown above *will* wait for the next run loop.

:::

You can see this in action in the following snippet:

```swift
@MainActor class ViewModel: ObservableObject {
    func runTest() async {
        print("1")

        await MainActor.run {
            print("2")

            Task { @MainActor in
                print("3")
            }

            print("4")
        }

        print("5")
    }
}
```

That marks the whole type as using the main actor, so the call to code>MainActor.run()` will run immediately when `runTest()` is called. However, the inner `Task` will *not* run immediately, so the code will print 1, 2, 4, 5, 3.

Although it’s possible to create your own global actors, I think we should probably avoid doing so until we’ve had sufficient chance to build apps using what we already have.

::: details Similar solutions…

```component VPCard
{
  "title": "Main thread and main queue: what’s the difference? | Swift Concurrency by Example",
  "desc": "Main thread and main queue: what’s the difference?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/main-thread-and-main-queue-whats-the-difference.md",
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
  "title": "What is actor hopping and how can it cause problems? | Swift Concurrency by Example",
  "desc": "What is actor hopping and how can it cause problems?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/what-is-actor-hopping-and-how-can-it-cause-problems.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />