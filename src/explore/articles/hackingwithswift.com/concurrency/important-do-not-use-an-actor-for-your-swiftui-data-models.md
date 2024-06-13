---
lang: ko-KR
title: "Important: Do not use an actor for your SwiftUI data models"
description: "Article(s) > Important: Do not use an actor for your SwiftUI data models"
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
      content: "Article(s) > Important: Do not use an actor for your SwiftUI data models"
    - property: og:description
      content: "Important: Do not use an actor for your SwiftUI data models"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/important-do-not-use-an-actor-for-your-swiftui-data-models.html
next: /explore/articles/hackingwithswift.com/concurrency/how-to-download-json-from-the-internet-and-decode-it-into-any-codable-type.md
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
  "title": "Important: Do not use an actor for your SwiftUI data models | Swift Concurrency by Example",
  "desc": "Important: Do not use an actor for your SwiftUI data models",
  "link": "https://hackingwithswift.com/quick-start/concurrency/important-do-not-use-an-actor-for-your-swiftui-data-models", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Swift’s actors allow us to share data in multiple parts of our app *without* causing problems with concurrency, because they automatically ensure two pieces of code cannot simultaneously access the actor’s protected data.

Actors are an important addition to our toolset, and help us guarantee safe access to data in concurrent environments. However, if you’ve ever wondered “should I use an actor for my SwiftUI data?”, let me answer that as clearly as I can: actors are a *really* bad choice for any data models you use with SwiftUI – anything that conforms to the `ObservableObject` protocol.

SwiftUI updates its user interface on the main actor, which means when we make a class conform to `ObservableObject` we’re agreeing that all our work will happen on the main actor. As an example, any time we modify an `@Published` property that *must* happen on the main actor, otherwise we’ll be asking for changes to be made somewhere that isn’t allowed.

Now think about what would happen if you tried to use a custom actor for your data. Not only would any data writes need to happen on that actor rather than the main actor (thus forcing the UI to update away from the main actor), but any data *reads* would need to happen there too – every time you tried to bind a string to a `TextField`, for example, you’d be asking Swift to simultaneously use the main actor and your custom actor, which doesn’t make sense.

The correct solution here is to use a class that conforms to `ObservableObject`, then annotate it with `@MainActor` to ensure it does any UI work safely. If you still find that you need to be able to carve off some async work safely, you can create a sibling actor – a separate actor that does not use `@MainActor`, but does not directly update the UI.

::: details Similar solutions…

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
  "title": "What is actor hopping and how can it cause problems? | Swift Concurrency by Example",
  "desc": "What is actor hopping and how can it cause problems?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/what-is-actor-hopping-and-how-can-it-cause-problems.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to use @MainActor to run code on the main queue | Swift Concurrency by Example",
  "desc": "How to use @MainActor to run code on the main queue",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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
  "title": "How to make parts of an actor nonisolated | Swift Concurrency by Example",
  "desc": "How to make parts of an actor nonisolated",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-make-parts-of-an-actor-nonisolated.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />