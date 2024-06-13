---
lang: ko-KR
title: What’s the difference between actors, classes, and structs?
description: Article(s) > What’s the difference between actors, classes, and structs?
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
      content: Article(s) > What’s the difference between actors, classes, and structs?
    - property: og:description
      content: What’s the difference between actors, classes, and structs?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/whats-the-difference-between-actors-classes-and-structs.html
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
  "title": "What’s the difference between actors, classes, and structs? | Swift Concurrency by Example",
  "desc": "What’s the difference between actors, classes, and structs?",
  "link": "https://hackingwithswift.com/quick-start/whats-the-difference-between-actors-classes-and-structs", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Swift provides four concrete nominal types for defining custom objects: actors, classes, structs, and enums. Each of these works a little differently from the others, but the first three might seem similar so it’s worth spending a little time clarifying what they have in common and where their differences are. 

::: tip

Ultimately, which you use depends on the exact context you’re working in, and you will need them all at some point.

:::

Actors:

1. Are reference types, so are good for shared mutable state.
2. Can have properties, methods, initializers, and subscripts.
3. Do not support inheritance.
4. Automatically conform to the `Actor` protocol.
5. Automatically conform to the `AnyObject` protocol, and can therefore conform to `Identifiable` without adding an explicit `id` property.
6. Can have a deinitializer.
7. Cannot have their public properties and methods directly accessed externally; we must use `await`.
8. Can execute only one method at a time, regardless of how they are accessed.

Classes:

1. Are reference types, so are good for shared mutable state.
2. Can have properties, methods, initializers, and subscripts.
3. Support inheritance.
4. Cannot conform to the `Actor` protocol.
5. Automatically conform to the `AnyObject` protocol, and can therefore conform to `Identifiable` without adding an explicit `id` property.
6. Can have a deinitializer.
7. Can have their public properties and methods directly accessed externally.
8. Can potentially be executing severals methods at a time.

Structs:

1. Are value types, so are copied rather than shared.
2. Can have properties, methods, initializers, and subscripts.
3. Do not support inheritance.
4. Cannot conform to the `Actor` protocol.
5. Cannot conform to the `AnyObject` protocol; if you want to add `Identifiable` conformance you must add an `id` property yourself.
6. Cannot have a deinitializer.
7. Can have their public properties and methods directly accessed externally.
8. Can potentially be executing severals methods at a time.

You might think the advantages of actors are such that they should be used everywhere classes are currently used, but that is a bad idea. Not only do you lose the ability for inheritance, but you’ll also cause a huge amount of pain for yourself because every single external property access needs to use `await`.

However, there are certainly places where actors are a natural fit. For example, if you were previously creating serial queues to handle specific workflows, they can be replaced almost entirely with actors – while also benefiting from increased safety and performance. So, if you have some work that absolutely must work one at a time, such as accessing a database, then trying converting it into something like a database actor.

There is one area in particular where using actors rather than classes is going to cause problems, so I really can’t say this clearly enough:

**Do not use actors for your SwiftUI data models.** You should use a class that conforms to the `ObservableObject` protocol instead. If needed, you can optionally also mark that class with `@MainActor` to ensure it does any UI work safely, but keep in mind that using `@StateObject` or `@ObservedObject` automatically makes a view’s code run on the main actor. If you desperately need to be able to carve off some async work safely, you can create a sibling actor – a separate actor that does not use `@MainActor`, but does not directly update the UI.

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
  "title": "What is an actor and why does Swift have them? | Swift Concurrency by Example",
  "desc": "What is an actor and why does Swift have them?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/what-is-an-actor-and-why-does-swift-have-them.md",
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

```component VPCard
{
  "title": "What’s the difference between Sequence, AsyncSequence, and AsyncStream? | Swift Concurrency by Example",
  "desc": "What’s the difference between Sequence, AsyncSequence, and AsyncStream?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/whats-the-difference-between-sequence-asyncsequence-and-asyncstream.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What’s the difference between await and async let? | Swift Concurrency by Example",
  "desc": "What’s the difference between await and async let?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/whats-the-difference-between-await-and-async-let.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />