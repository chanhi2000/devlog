---
lang: ko-KR
title: How to create continuations that can throw errors
description: Article(s) > How to create continuations that can throw errors
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
      content: Article(s) > How to create continuations that can throw errors
    - property: og:description
      content: How to create continuations that can throw errors
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/how-to-create-continuations-that-can-throw-errors.html
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
  "title": "How to create continuations that can throw errors | Swift Concurrency by Example",
  "desc": "How to create continuations that can throw errors",
  "link": "https://hackingwithswift.com/quick-start/concurrency/how-to-create-continuations-that-can-throw-errors", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Swift provides `withCheckedContinuation()` and `withUnsafeContinuation()` to let us create continuations that can’t throw errors, but if the API you’re using <em>can</em> throw errors you should use their throwing equivalents: `withCheckedThrowingContinuation()` and `withUnsafeThrowingContinuation()`.

Both of these replacement functions work identically to their non-throwing counterparts, except now you need to catch any errors thrown inside the continuation.

To demonstrate this, here’s the same `fetchMessages()` function we used previously, built without async/await in mind:

```swift
struct Message: Decodable, Identifiable {
    let id: Int
    let from: String
    let message: String
}

func fetchMessages(completion: @escaping ([Message]) -> Void) {
    let url = URL(string: "https://hws.dev/user-messages.json")!

    URLSession.shared.dataTask(with: url) { data, response, error in
        if let data = data {
            if let messages = try? JSONDecoder().decode([Message].self, from: data) {
                completion(messages)
                return
            }
        }

        completion([])
    }.resume()
}
```

If we wanted to wrap that using a continuation, we might decide that having zero messages is an error we should throw rather than just sending back an empty array. That thrown error would then need to be handled outside the continuation somehow.

So, first we’d define the errors we want to throw, then we’d write a newer async version of `fetchMessages()` using `withCheckedThrowingContinuation()`, and handling the “no messages” error using whatever code we wanted:

```swift
struct Message: Decodable, Identifiable {
    let id: Int
    let from: String
    let message: String
}

func fetchMessages(completion: @escaping ([Message]) -> Void) {
    let url = URL(string: "https://hws.dev/user-messages.json")!

    URLSession.shared.dataTask(with: url) { data, response, error in
        if let data = data {
            if let messages = try? JSONDecoder().decode([Message].self, from: data) {
                completion(messages)
                return
            }
        }

        completion([])
    }.resume()
}

// An example error we can throw
enum FetchError: Error {
    case noMessages
}

func fetchMessages() async -> [Message] {
    do {
        return try await withCheckedThrowingContinuation { continuation in
            fetchMessages { messages in
                if messages.isEmpty {
                    continuation.resume(throwing: FetchError.noMessages)
                } else {
                    continuation.resume(returning: messages)
                }
            }
        }
    } catch {
        return [
            Message(id: 1, from: "Tom", message: "Welcome to MySpace! I'm your new friend.")
        ]
    }
}

let messages = await fetchMessages()
print("Downloaded \(messages.count) messages.")
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-create-continuations-that-can-throw-errors-1.zip)

As you can see, that detects a lack of messages and sends back a welcome message instead, but you could also let the error propagate upwards by removing `do`/`catch` and making the new `fetchMessages()` function throwing.

::: tip

Using `withUnsafeThrowingContinuation()` comes with all the same warnings as using `withUnsafeContinuation()` – you should only switch over to it if it’s causing a performance problem.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to use continuations to convert completion handlers into async functions | Swift Concurrency by Example",
  "desc": "How to use continuations to convert completion handlers into async functions",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-use-continuations-to-convert-completion-handlers-into-async-functions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to store continuations to be resumed later | Swift Concurrency by Example",
  "desc": "How to store continuations to be resumed later",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-store-continuations-to-be-resumed-later.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is an actor and why does Swift have them? | Swift Concurrency by Example",
  "desc": "What is an actor and why does Swift have them?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/what-is-an-actor-and-why-does-swift-have-them.md",
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

:::

---

<TagLinks />