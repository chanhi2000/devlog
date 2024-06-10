---
lang: ko-KR
title: How to use continuations to convert completion handlers into async functions
description: Article(s) > How to use continuations to convert completion handlers into async functions
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
      content: Article(s) > How to use continuations to convert completion handlers into async functions
    - property: og:description
      content: How to use continuations to convert completion handlers into async functions
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/how-to-use-continuations-to-convert-completion-handlers-into-async-functions.html
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
  "title": "How to use continuations to convert completion handlers into async functions | Swift Concurrency by Example",
  "desc": "How to use continuations to convert completion handlers into async functions",
  "link": "https://hackingwithswift.com/quick-start/concurrency/how-to-use-continuations-to-convert-completion-handlers-into-async-functions", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Older Swift code uses completion handlers for notifying us when some work has completed, and sooner or later you’re going to have to use it from an `async` function – either because you’re using a library someone else created, or because it’s one of your own functions but updating it to async would take a lot of work.

Swift uses *continuations* to solve this problem, allowing us to create a bridge between older functions with completion handlers and newer async code.

To demonstrate this problem, here’s some code that attempts to fetch some JSON from a web server, decode it into an array of `Message` structs, then send it back using a completion handler:

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

Although the `dataTask(with:)` method does run our code on its own thread, this is *not* an async function in the sense of Swift’s async/await feature, which means it’s going to be messy to integrate into other code that *does* use modern async Swift.

To fix this, Swift provides us with *continuations*, which are special objects we pass into the completion handlers as captured values. Once the completion handler fires, we can either return the finished value, throw an error, or send back a `Result` that can be handled elsewhere.

In the case of `fetchMessages()`, we want to write a new async function that calls the original, and in its completion handler we’ll return whatever value was sent back:

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

func fetchMessages() async -> [Message] {
    await withCheckedContinuation { continuation in
        fetchMessages { messages in
            continuation.resume(returning: messages)
        }
    }
}

let messages = await fetchMessages()
print("Downloaded \(messages.count) messages.")
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-use-continuations-to-convert-completion-handlers-into-async-functions-1.zip)

As you can see, starting a continuation is done using the `withCheckedContinuation()` function, which passes into itself the continuation we need to work with. It’s called a “checked” continuation because Swift checks that we’re using the continuation correctly, which means abiding by one very simple, very important rule:

**Your continuation must be resumed exactly once. Not zero times, and not twice or more times – exactly once.how-to-create-continuations-that-can-throw-errors

If you call the checked continuation twice or more, Swift will cause your program to halt – it will just crash. I realize this sounds bad, but when the alternative is to have some bizarre, unpredictable behavior, crashing doesn’t sound so bad.

On the other hand, if you fail to resume the continuation at all, Swift will print out a large warning in your debug log similar to this: “SWIFT TASK CONTINUATION MISUSE: fetchMessages() leaked its continuation!” This is because you’re leaving the task suspended, causing any resources it’s using to be held indefinitely.

You might think these are easy mistakes to avoid, but in practice they can occur in all sorts of places if you aren’t careful.

For example, in our original `fetchMessages()` method we used this:

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

func fetchMessages() async -> [Message] {
    await withCheckedContinuation { continuation in
        fetchMessages { messages in
            continuation.resume(returning: messages)
        }
    }
}

let messages = await fetchMessages()
print("Downloaded \(messages.count) messages.")
```

That checks for data coming back, and checks that it can be decoded correctly, before completing and returning, but if either of those two checks fail then the completion handler is called with an empty array – no matter what happens, the completion handler gets called.

But what if we had written something different? See if you can spot the problem with this alternative: 

```swift
if let data = data {
    if let messages = try? JSONDecoder().decode([Message].self, from: data) {
        completion(messages)
    }
} else {
    completion([])
}
```

That attempts to decode the JSON into a `Message` array and send back the result using the completion handler, or send back an empty array if nothing came back from the server. However, it has a mistake that will cause problems with continuations: if some valid data comes back but *can’t* be decoded into an array of messages, the completion handler will never be called and our continuation will be leaked.

These two code samples are fairly similar, which shows how important it is to be careful with your continuations. However, if you have checked your code carefully and you’re sure it is correct, you can if you want replace the `withCheckedContinuation()` function with a call to `withUnsafeContinuation()`, which works exactly the same way but doesn’t add the runtime cost of checking you’ve used the continuation correctly.

I say you can do this *if you want*, but I’m dubious about the benefit. It’s easy to say “I know my code is safe, go for it!” but I’d be wary about moving across to unsafe code unless you had profiled your code using Instruments and were quite sure Swift’s extra checks were causing a performance problem.

::: details Similar solutions…

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
  "title": "How to create continuations that can throw errors | Swift Concurrency by Example",
  "desc": "How to create continuations that can throw errors",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-create-continuations-that-can-throw-errors.md",
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
  "title": "How to call an async function using async let | Swift Concurrency by Example",
  "desc": "How to call an async function using async let",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-call-an-async-function-using-async-let.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to call async throwing functions | Swift Concurrency by Example",
  "desc": "How to call async throwing functions",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-call-async-throwing-functions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />