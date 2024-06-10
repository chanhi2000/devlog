---
lang: ko-KR
title: How to call an async function using async let
description: Article(s) > How to call an async function using async let
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
      content: Article(s) > How to call an async function using async let
    - property: og:description
      content: How to call an async function using async let
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/how-to-call-an-async-function-using-async-let.html
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
  "title": "How to call an async function using async let | Swift Concurrency by Example",
  "desc": "How to call an async function using async let",
  "link": "https://hackingwithswift.com/quick-start/concurrency/how-to-call-an-async-function-using-async-let", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Sometimes you want to run several async operations at the same time then wait for their results to come back, and the easiest way to do that is with `async let`. This lets you start several async functions, all of which begin running immediately – it’s much more efficient than running them sequentially.

A common example of where this is useful is when you have to make two or more network requests, none of which relate to each other. That is, if you need to get Thing X and Thing Y from a server, but you don’t need to wait for X to return before you start fetching Y.

To demonstrate this, we could define a couple of structs to store data – one to store a user’s account data, and one to store all the messages in their inbox:

```swift
struct User: Decodable {
    let id: UUID
    let name: String
    let age: Int
}

struct Message: Decodable, Identifiable {
    let id: Int
    let from: String
    let message: String
}
```

These two things can be fetched independently of each other, so rather than fetching the user’s account details *then* fetching their message inbox we want to get them both together.

In this instance, rather than using a regular `await` call a better choice is `async let`, like this:

```swift
func loadData() async {
    async let (userData, _) = URLSession.shared.data(from: URL(string: "https://hws.dev/user-24601.json")!)

    async let (messageData, _) = URLSession.shared.data(from: URL(string: "https://hws.dev/user-messages.json")!)

    // more code to come
}
```

That’s only a small amount of code, but there are three things I want to highlight in there:

- Even though the `data(from:)` method is async, we don’t need to use `await` before it because that’s implied by `async let`.
- The `data(from:)` method is also throwing, but we don’t need to use `try` to execute it because that gets pushed back to when we actually want to read its return value.
- Both those network calls start immediately, but might complete in any order.

Okay, so now we have two network requests in flight. The next step is to wait for them to complete, decode their returned data into structs, and use that somehow.

There are two things you need to remember:

- Both our `data(from:)` calls might throw, so when we read those values we need to use `try`. 
- Both our `data(from:)` calls are running concurrently while our main `loadData()` function continues to execute, so we need to read their values using `await` in case they aren’t ready yet.

So, we could complete our function by using `try await` for each of our network requests in turn, then print out the result:

```swift
struct User: Decodable {
    let id: UUID
    let name: String
    let age: Int
}

struct Message: Decodable, Identifiable {
    let id: Int
    let from: String
    let message: String
}

func loadData() async {
    async let (userData, _) = URLSession.shared.data(from: URL(string: "https://hws.dev/user-24601.json")!)

    async let (messageData, _) = URLSession.shared.data(from: URL(string: "https://hws.dev/user-messages.json")!)

    do {
        let decoder = JSONDecoder()
        let user = try await decoder.decode(User.self, from: userData)
        let messages = try await decoder.decode([Message].self, from: messageData)
        print("User \(user.name) has \(messages.count) message(s).")
    } catch {
        print("Sorry, there was a network problem.")
    }
}

await loadData()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-call-an-async-function-using-async-let-1.zip)

The Swift compiler will automatically track which `async let` constants could throw errors and will enforce the use of `try` when reading their value. It doesn’t matter which form of `try` you use, so you can use `try`, `try?` or `try!` as appropriate.

::: tip

If you never try to read the value of a throwing `async let` call – i.e., if you’ve started the work but don’t care what it returns – then you don’t need to use `try` at all, which in turn means the function running the `async let` code might not need to handle errors at all.

:::

Although both our network requests are happening at the same time, we still need to wait for them to complete in some sort of order. So, if you wanted to update your user interface as soon as either `user` or `messages` arrived back `async let` isn’t going to help by itself – you should look at the dedicated `Task` type instead.

One complexity with `async let` is that it captures any values it uses, which means you might accidentally try to write code that isn’t safe. Swift helps here by taking some steps to enforce that you aren’t trying to modify data unsafely.

As an example, if we wanted to fetch the favorites for a user, we might have a function such as this one:

```swift
struct User: Decodable {
    let id: UUID
    let name: String
    let age: Int
}

struct Message: Decodable, Identifiable {
    let id: Int
    let from: String
    let message: String
}

func fetchFavorites(for user: User) async -> [Int] {
    print("Fetching favorites for \(user.name)…")

    do {
        async let (favorites, _) = URLSession.shared.data(from: URL(string: "https://hws.dev/user-favorites.json")!)
        return try await JSONDecoder().decode([Int].self, from: favorites)
    } catch {
        return []
    }
}

let user = User(id: UUID(), name: "Taylor Swift", age: 26)
async let favorites = fetchFavorites(for: user)
await print("Found \(favorites.count) favorites.")
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-call-an-async-function-using-async-let-2.zip)

That function accepts a `User` parameter so it can print a status message. But what happens if our `User` was created as a variable and captured by `async let`? You can see this for yourself if you change the user:

```swift
var user = User(id: UUID(), name: "Taylor Swift", age: 26)
```

Even though it’s a struct, the `user` variable will be *captured* rather than *copied* and so Swift will throw up the build error “Reference to captured var 'user' in concurrently-executing code.”

To fix this we need to make it clear the struct cannot change by surprise, even when captured, by making it a constant rather than a variable.

::: details Similar solutions…

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
  "title": "Why can’t we call async functions using async var? | Swift Concurrency by Example",
  "desc": "Why can’t we call async functions using async var?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/why-cant-we-call-async-functions-using-async-var.md",
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