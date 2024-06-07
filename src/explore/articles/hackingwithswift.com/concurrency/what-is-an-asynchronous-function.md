---
lang: ko-KR
title: What is an asynchronous function?
description: Article(s) > What is an asynchronous function?
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
      content: Article(s) > What is an asynchronous function?
    - property: og:description
      content: What is an asynchronous function?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/what-is-an-asynchronous-function.html
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
  "title": "What is an asynchronous function? | Swift Concurrency by Example",
  "desc": "What is an asynchronous function?",
  "link": "https://hackingwithswift.com/quick-start/concurrency/what-is-an-asynchronous-function", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Although Swift functions are synchronous by default, we can make them *asynchronous* by adding one keyword: `async`. Inside asynchronous functions, we can call other asynchronous functions using a second keyword: `await`. As a result, you’ll often hear Swift developers talk about async/await as a way of coding.

So, this is a synchronous function that rolls a virtual dice and returns its result:

```swift
func randomD6() -> Int {
    Int.random(in: 1...6)
}

let result = randomD6()
print(result)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/what-is-an-asynchronous-function-1.zip)

And this is an *asynchronous* or *async* function:

```swift
func randomD6() async -> Int {
    Int.random(in: 1...6)
}

let result = await randomD6()
print(result)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/what-is-an-asynchronous-function-2.zip)

The only part of the code that changed is adding the `async` keyword before the return type and the `await` keyword before calling it, but those changes tell us three important things about async functions.

First, `async` is part of the function’s *type*. The original, synchronous function returns an integer, which means we can’t use it in a place that expects it to return a string. However, by marking the code `async` we’ve now made it an *asynchronous* function that returns an integer, which means we can’t use it in a place that expects a *synchronous* function that returns an integer. 

This is what I mean when I say that the async nature of the function is part of its type: it affects the way we refer to the function everywhere else in our code. This is exactly how `throws` works – you can’t use a throwing function in a place that expects a non-throwing function.

Second, notice that the work inside our function hasn’t actually changed. The same work is being done as before: this function doesn’t actually use the `await` keyword at all, and that’s okay. You see, marking a function with `async` means it *might* do asynchronous work, not that it must. Again, the same is true of `throws` – some paths through a function might throw, but others might not.

A third key difference arises when we *call* `randomD6()`, because we need to do so asynchronously. Swift provides a few ways we can do this, but in our example we used `await`, which means “run this function asynchronously and wait for its result to come back before continuing.”

So, what’s the *actual difference* between synchronous and asynchronous functions? To answer that, I want to show you a real function that does some async work to fetch a file from a web server:

```swift
func fetchNews() async -> Data? {
    do {
        let url = URL(string: "https://hws.dev/news-1.json")!
        let (data, _) = try await URLSession.shared.data(from: url)
        return data
    } catch {
        print("Failed to fetch data")
        return nil
    }
}

if let data = await fetchNews() {
    print("Downloaded \(data.count) bytes")
} else {
    print("Download failed.")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/what-is-an-asynchronous-function-3.zip)

Later on we’ll be digging in more to how that actually works, but for now what matters is that the `URLSession.shared.data(from:)` method we call is asynchronous – its job is to fetch some data from a web server, without causing the whole program to freeze up.

We’ve already seen that synchronous functions cause *blocking*, which leads to performance problems. Async functions do *not* block: when we call them with `await` we are marking a suspension point, which is a place where the function can suspend itself – literally stop running – so that other work can happen. At some point in the future the function’s work completes, and Swift will wake it back up out of its “suspended animation”-like existence and it will carry on working.

This might sound simple on paper, but in practice it’s very clever.

First, when an async function is suspended, all the async functions that called it are also suspended; they all wait quietly while the async work happens, then resume later on. This is really important: async functions have this special ability to be suspended that regular synchronous functions do not. It’s for this reason that synchronous functions cannot call async functions directly – they don’t know how to suspend themselves.

Second, a function can be suspended as many times as is needed, but it won’t happen without you writing `await` there – functions won’t suspend themselves by surprise.

Third, a function that is suspended does *not* block the thread it’s running on, and instead it gives up that thread so that Swift can do other work instead. Note: Although we can tell Swift how important many tasks are, we don’t get to decide exactly how the system schedules our work – it automatically takes care of all the threads working under the hood. This means if we call async function A without waiting for its result, then a moment later call async function B, it’s entirely possible B will start running before A does.

Fourth, when the function resumes, it might be running on the same thread as before, but it might not; Swift gets to choose, and you shouldn’t make any assumptions here. This means by the time your function resumes all sorts of things might have changed in your program – a few milliseconds might have passed, or perhaps 20 seconds or more.

And finally, I know I’m repeating myself, but this matters: just because a function is async doesn’t mean it *will* suspend – the `await` keyword only marks a *potential suspension point*. Most of the time Swift knows perfectly well that the function we’re calling is async, so this `await` keyword is as much for us as it is for the compiler – it’s a way of clearly marking which parts of the function might suspend, so you can know for sure which parts of the function run as one atomic chunk. (“Atomic” is a fancy word meaning “indivisible” – a chunk of work where all lines of code will execute without being interrupted by other code running.) This requirement for `await` is identical to the requirement for `try`, where we must mark each line of code that might throw errors.

So, async functions are like regular functions, except they have a superpower: if they need to, they can suspend themselves and all their callers, freeing up their thread to do other work.

::: details Similar solutions…

```component VPCard
{
  "title": "What’s the performance cost of calling an async function? | Swift Concurrency by Example",
  "desc": "What’s the performance cost of calling an async function?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/whats-the-performance-cost-of-calling-an-async-function.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What calls the first async function? | Swift Concurrency by Example",
  "desc": "What calls the first async function?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/what-calls-the-first-async-function.md",
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
  "title": "What is a synchronous function? | Swift Concurrency by Example",
  "desc": "What is a synchronous function?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/what-is-a-synchronous-function.md",
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

:::

---

<TagLinks />