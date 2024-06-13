---
lang: ko-KR
title: What is an actor and why does Swift have them?
description: Article(s) > What is an actor and why does Swift have them?
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
      content: Article(s) > What is an actor and why does Swift have them?
    - property: og:description
      content: What is an actor and why does Swift have them?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/what-is-an-actor-and-why-does-swift-have-them.html
prev: /explore/articles/hackingwithswift.com/concurrency/is-it-efficient-to-create-many-tasks.md
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
  "title": "What is an actor and why does Swift have them? | Swift Concurrency by Example",
  "desc": "What is an actor and why does Swift have them?",
  "link": "https://hackingwithswift.com/quick-start/what-is-an-actor-and-why-does-swift-have-them", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Swift’s actors are conceptually like classes that are safe to use in concurrent environments. This safety is made possible because Swift automatically ensures no two pieces of code attempt to access an actor’s data at the same time – it is made impossible by the compiler, rather than requiring developers to write boilerplate code using systems such as locks.

In the following chapters we’re going to explore more about how actors work and when you should use them, but here is the least you need to know:

1. Actors are created using the `actor` keyword. This is a concrete nominal type in Swift, like structs, classes, and enums.
2. Like classes, actors are reference types. This makes them useful for sharing state in your program.
3. They have many of the same features as classes: you can give them properties, methods (async or otherwise), initializers, and subscripts, they can conform to protocols, and they can be generic.
4. Actors do not support inheritance, so they cannot have convenience initializers, and do not support either `final` or `override`.
5. All actors automatically conform to the `Actor` protocol, which no other type can use. This allows you to write code restricted to work only with actors.

As well as those, there is one more behavior of actors that lies at the center of their existence: if you’re attempting to read a variable property or call a method on an actor, and you’re doing it from outside the actor itself, you must do so asynchronously using `await`.

I’ll explain why in a moment, but I want to show you a brief snippet of code first so you can see what I mean:

```swift
actor User {
    var score = 10

    func printScore() {
        print("My score is \(score)")
    }

    func copyScore(from other: User) async {
        score = await other.score
    }
}

let actor1 = User()
let actor2 = User()

await print(actor1.score)
await actor1.copyScore(from: actor2)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/what-is-an-actor-and-why-does-swift-have-them-1.zip)

You can see several things in action there:

1. The new `User` type is created using the `actor` keyword rather than `struct` or `class`.
2. It can have properties and methods just like structs or classes.
3. The `printScore()` method can access the local `score` property just fine, because it’s our actor’s method reading its own property.
4. But in `copyScore(from:)` we’re attempting to read the score from another user, and we can’t read their `score` property without marking the request with `await`.
5. Code from *outside* the actor also needs to use `await`.

The reason the `await` call is needed in `copyScore(from:)` is central to the reasons actors are needed at all. You see, rather than just letting us poke around in an actor’s mutable state, Swift silently translates that request into what is effectively a message that goes into the actor’s message inbox: “please let me know your score as soon as you can.”

If the actor is currently idle it can respond with the score straight away and our code continues no different from if we had used a class or a struct. But the actor might also have multiple other messages waiting in its inbox that it needs to deal with first, so our `score` request has to wait. Eventually our request makes it to the top of the inbox and it will be dealt with, and the `copyScore(from:)` method will continue.

This means several things:

1. Actors are effectively operating a private serial queue for their message inbox, taking requests one at a time and fulfilling them. This executes requests in the order they were received, but you can also use task priority to escalate requests.
2. Only one piece of code at a time can access an actor’s mutable state unless you specifically mark some things as being unprotected. Swift calls this *actor isolation*.
3. Just like regular `await` calls, reading an actor’s property or method marks a potential suspension point – we might get a value back immediately, but it might also take a little time.
4. Any state that is *not* mutable – i.e., a constant property – can be accessed without `await`, because it’s always going to be safe.

In practice, the rule to remember is this: if you are writing code inside an actor’s method, you can read other properties on that actor and call its synchronous methods without using `await`, but if you’re trying to use that data from *outside* the actor `await` is required even for synchronous properties and methods. Think of situations where using `self` is possible: if you could `self` you don’t need `await`. 

**Writing properties from outside an actor is not allowed, with or without `await`.**

Of course, the real question here is why Swift needs actors at all – what’s their fundamental purpose? And the answer is straightforward: if you ever need to make sure that access to some object is restricted to a single task at a time, actors are perfect.

This is more common than you might think – yes, UI work should be restricted to the main thread, but you probably also want to restrict database access so that you can’t write conflicting data, for example. There are also times when simultaneous concurrent access to data can cause *data races* – when the outcome of your work depends on the order in which tasks complete. These errors are particularly nasty to find and fix, but with actors such data races become impossible.

::: tip

Creating an instance of an actor has no extra performance cost compared to creating an instance of a class; the only performance difference comes when trying to access the protected state of an actor, which might trigger task suspension.

:::

::: details Similar solutions…

```component VPCard
{
  "title": "How to create and use an actor in Swift | Swift Concurrency by Example",
  "desc": "How to create and use an actor in Swift",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-create-and-use-an-actor-in-swift.md",
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
  "title": "Understanding how global actor inference works | Swift Concurrency by Example",
  "desc": "Understanding how global actor inference works",
  "link": "/explore/articles/hackingwithswift.com/concurrency/understanding-how-global-actor-inference-works.md",
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

:::

---

<TagLinks />