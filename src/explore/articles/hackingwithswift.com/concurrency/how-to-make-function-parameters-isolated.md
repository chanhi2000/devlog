---
lang: ko-KR
title: How to make function parameters isolated
description: Article(s) > How to make function parameters isolated
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
      content: Article(s) > How to make function parameters isolated
    - property: og:description
      content: How to make function parameters isolated
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/how-to-make-function-parameters-isolated.html
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
  "title": "How to make function parameters isolated | Swift Concurrency by Example",
  "desc": "How to make function parameters isolated",
  "link": "https://hackingwithswift.com/quick-start/how-to-make-function-parameters-isolated", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Any properties and methods that belong to an actor are isolated to that actor, but you can make *external* functions isolated to an actor if you want. This allows the function to access actor-isolated state as if it were inside that actor, without needing to use `await`.

Here’s a simple example so you can see what I mean:

```swift
actor DataStore {
    var username = "Anonymous"
    var friends = [String]()
    var highScores = [Int]()
    var favorites = Set<Int>()

    init() {
        // load data here
    }

    func save() {
        // save data here
    }
}

func debugLog(dataStore: isolated DataStore) {
    print("Username: \(dataStore.username)")
    print("Friends: \(dataStore.friends)")
    print("High scores: \(dataStore.highScores)")
    print("Favorites: \(dataStore.favorites)")
}

let data = DataStore()
await debugLog(dataStore: data)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-make-function-parameters-isolated-1.zip)

That creates a `DataStore` actor with various properties plus a couple of placeholder methods, then creates a `debugLog()` method that prints those *without* using `await` – they can be accessed directly. Notice the addition of the `isolated` keyword in the function signature; that’s what allows this direct access, and it even allows the function to *write* to those properties too.

Using `isolated` like this does *not* bypass any of the underlying safety or implementation of actors – there can still only be one thread accessing the actor at any one time. What we’ve done just pushes that access out by a level, because now the whole function must be run on that actor rather than just individual lines inside it. In practice, this means `debugLog(dataStore:)` needs to be called using `await`.

This approach has an important side effect: because the whole function is now isolated to the actor, it must be called using `await` even though it isn’t marked as async. This makes the function itself a single potential suspension point rather than individual accesses to the actor being suspension points.

In case you were wondering, you can’t have two isolation parameters, because it wouldn’t really make sense – which one is executing the function?

::: details Similar solutions…

```component VPCard
{
  "title": "How to make parts of an actor nonisolated | Swift Concurrency by Example",
  "desc": "How to make parts of an actor nonisolated",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-make-parts-of-an-actor-nonisolated.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What is an asynchronous function? | Swift Concurrency by Example",
  "desc": "What is an asynchronous function?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/what-is-an-asynchronous-function.md",
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