---
lang: ko-KR
title: How to call async throwing functions
description: Article(s) > How to call async throwing functions
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
      content: Article(s) > How to call async throwing functions
    - property: og:description
      content: How to call async throwing functions
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/how-to-call-async-throwing-functions.html
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
  "title": "How to call async throwing functions | Swift Concurrency by Example",
  "desc": "How to call async throwing functions",
  "link": "https://hackingwithswift.com/quick-start/concurrency/how-to-call-async-throwing-functions", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Just like their synchronous counterparts, Swift’s async functions can be throwing or non-throwing depending on how you want them to behave. However, there is a twist: although we mark the function as being `async throws`, we *call* the function using `try await` – the keyword order is flipped.

To demonstrate this in action, here’s a `fetchFavorites()` method that attempts to download some JSON from my server, decode it into an array of integers, and return the result:

```swift
func fetchFavorites() async throws -> [Int] {
    let url = URL(string: "https://hws.dev/user-favorites.json")!
    let (data, _) = try await URLSession.shared.data(from: url)
    return try JSONDecoder().decode([Int].self, from: data)
}

if let favorites = try? await fetchFavorites() {
    print("Fetched \(favorites.count) favorites.")
} else {
    print("Failed to fetch favorites.")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-call-async-throwing-functions-1.zip)

Both fetching data and decoding it are throwing functions, so we need to use `try` in both those places. Those errors aren’t being handled in the function, so we need to mark `fetchFavorites()` as also being throwing so Swift can let any errors bubble up to whatever called it. 

Notice that the function is marked `async throws` but the function *calls* are marked `try await` – like I said, the keyword order gets reversed. So, it’s “asynchronous, throwing” in the function definition, but “throwing, asynchronous” at the call site. Think of it as unwinding a stack.

Not only does `try await` read more easily than `await try`, but it’s also more reflective of what’s actually happening when our code executes: we’re waiting for some work to complete, and when it does complete we’ll check whether it ended up throwing an error or not.

Of course, the other possibility is that they could have `try await` at the call site and `throws async` on the function definition, and here’s what the Swift team says about that:

> “This order restriction is arbitrary, but it's not harmful, and it eliminates the potential for stylistic debates.”

Personally, if I saw `throws async` I’d be more likely to write it as “this thing throws an async error” or similar, but as the quote above says ultimately the order is just arbitrary.

::: details Similar solutions…

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
  "title": "How to use continuations to convert completion handlers into async functions | Swift Concurrency by Example",
  "desc": "How to use continuations to convert completion handlers into async functions",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-use-continuations-to-convert-completion-handlers-into-async-functions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />