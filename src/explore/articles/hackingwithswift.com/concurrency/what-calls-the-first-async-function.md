---
lang: ko-KR
title: What calls the first async function?
description: Article(s) > What calls the first async function?
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
      content: Article(s) > What calls the first async function?
    - property: og:description
      content: What calls the first async function?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/what-calls-the-first-async-function.html
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
  "title": "What calls the first async function? | Swift Concurrency by Example",
  "desc": "What calls the first async function?",
  "link": "https://hackingwithswift.com/quick-start/concurrency/what-calls-the-first-async-function", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

You can only call async functions from other async functions, because they might need to suspend themselves and everything that is waiting for them. This leads to a bit of a chicken and egg problem: if only async functions can call other async functions, what starts it all – what calls the very first async function?

Well, there are three main approaches you’ll find yourself using.

First, in simple command-line programs using the `@main` attribute, you can declare your `main()` method to be async. This means your program will immediately launch into an async function, so you can call other async functions freely.

Here’s how that looks in code:

```swift
func processWeather() async {
    // Do async work here
}

@main
struct MainApp {
    static func main() async {
        await processWeather()
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/what-calls-the-first-async-function-1.zip)

Second, in apps built with something like SwiftUI the framework itself has various places that can trigger an async function. For example, the `refreshable()` and `task()` modifiers can both call async functions freely.

Using the `task()` modifier we could write a simple “View Source” app that fetches the content of a website when our view appears:

```swift
struct ContentView: View {
    @State private var sourceCode = ""

    var body: some View {
        ScrollView {
            Text(sourceCode)
        }
        .task {
            await fetchSource()
        }
    }

    func fetchSource() async {
        do {
            let url = URL(string: "https://apple.com")!

            let (data, _) = try await URLSession.shared.data(from: url)
            sourceCode = String(decoding: data, as: UTF8.self).trimmingCharacters(in: .whitespacesAndNewlines)
        } catch {
            sourceCode = "Failed to fetch apple.com"
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/what-calls-the-first-async-function-2.zip)

::: tip

Using `task()` will almost certainly run our code away from the main thread, but the `@State` property wrapper has specifically been written to allow us to modify its value on any thread.

:::

The third option is that Swift provides a dedicated `Task` API that lets us call async functions from a synchronous function. Now, you might think “wait a minute – how can a synchronous function call an asynchronous function?” Well, it *can’t* – at least not *directly*. Remember, async functions might need to suspend themselves in the future, and synchronous functions don’t know how to do that.

When you use something like `Task` you’re asking Swift to run some async code. If you don’t care about the result you have nothing to wait *for* – the task will start running immediately while your own function continues, and it will always run to completion even if you don’t store the active task somewhere. This means you’re not awaiting the result of the task, so you won’t run the risk of being suspended. Of course, when you actually want to *use* any returned value from your task, that’s when `await` is required. 

We’ll be looking at Swift’s `Task` API in detail later on, but for now we could quickly upgrade our little website source code viewer to work with any URL. This time we’re going to trigger the network fetch using a button press, which is *not* asynchronous by default, so we’re going to wrap our work in a `Task`. This is possible because we don’t need to wait for the task to complete – it will always run to completion as soon as it is made, and will take care of updating the UI for us.

Here’s how that looks:

```swift
struct ContentView: View {
    @State private var site = "https://"
    @State private var sourceCode = ""

    var body: some View {
        VStack {
            HStack {
                TextField("Website address", text: $site)
                    .textFieldStyle(.roundedBorder)
                Button("Go") {
                    Task {
                        await fetchSource()
                    }
                }
            }
            .padding()

            ScrollView {
                Text(sourceCode)
            }
        }
    }

    func fetchSource() async {
        do {
            let url = URL(string: site)!
            let (data, _) = try await URLSession.shared.data(from: url)
            sourceCode = String(decoding: data, as: UTF8.self).trimmingCharacters(in: .whitespacesAndNewlines)
        } catch {
            sourceCode = "Failed to fetch \(site)"
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/what-calls-the-first-async-function-3.zip)


::: details Similar solutions…

```component VPCard
{
  "title": "How to call an async function using async let | Swift Concurrency by Example",
  "desc": "How to call an async function using async let",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-call-an-async-function-using-async-let.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Why can’t we call async functions using async var? | Swift Concurrency by Example",
  "desc": "Why can’t we call async functions using async var?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/why-cant-we-call-async-functions-using-async-var.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create and call an async function | Swift Concurrency by Example",
  "desc": "How to create and call an async function",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-create-and-call-an-async-function.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to fix the error “async call in a function that does not support concurrency” | Swift Concurrency by Example",
  "desc": "How to fix the error “async call in a function that does not support concurrency”",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-fix-the-error-async-call-in-a-function-that-does-not-support-concurrency.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What’s the performance cost of calling an async function? | Swift Concurrency by Example",
  "desc": "What’s the performance cost of calling an async function?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/whats-the-performance-cost-of-calling-an-async-function.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />