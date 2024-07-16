---
lang: ko-KR
title: Understanding how global actor inference works
description: Article(s) > Understanding how global actor inference works
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
      content: Article(s) > Understanding how global actor inference works
    - property: og:description
      content: Understanding how global actor inference works
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/understanding-how-global-actor-inference-works.html
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
  "title": "Understanding how global actor inference works | Swift Concurrency by Example",
  "desc": "Understanding how global actor inference works",
  "link": "https://hackingwithswift.com/quick-start/understanding-how-global-actor-inference-works", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Apple explicitly annotates many of its types as being `@MainActor`, including most UIKit types such as `UIView` and `UIButton`. However, there are many places where types gain main-actor-ness *implicitly* through a process called *global actor inference* – Swift applies `@MainActor` automatically based on a set of predetermined rules.

There are five rules for global actor inference, and I want to tackle them individually because although they start easy they get more complex.

First, if a class is marked `@MainActor`, all its subclasses are also automatically `@MainActor`. This follows the principle of least surprise: if you inherit from a `@MainActor` class it makes sense that your subclass is also `@MainActor`.

Second, if a method in a class is marked `@MainActor`, any overrides for that method are also automatically `@MainActor`. Again, this is a natural thing to expect – you overrode a `@MainActor` method, so the only safe way Swift can call that override is if it’s also `@MainActor`.

Third, any struct or class using a property wrapper with `@MainActor` for its wrapped value will automatically be `@MainActor`. This is what makes `@StateObject` and `@ObservedObject` convey main-actor-ness on SwiftUI views that use them – if you use either of those two property wrappers in a SwiftUI view, the whole view becomes `@MainActor` too. At the time of writing Xcode’s generated interface for those two property wrappers don’t show that they are annotated as `@MainActor`, but I’ve been assured they definitely are – hopefully Xcode can make that work better in the future.

The fourth rule is where the difficulty ramps up a little: if a protocol declares a method as being `@MainActor`, any type that conforms to that protocol will have that same method automatically be `@MainActor` *unless* you separate the conformance from the method.

What this means is that if you make a type conform to a protocol with a `@MainActor` method, and add the required method implementation at the same time, it is implicitly `@MainActor`. However, if you separate the conformance and the method implementation, you need to add `@MainActor` by hand.

Here’s that in code:

```swift
// A protocol with a single `@MainActor` method.
protocol DataStoring {
    @MainActor func save()
}

// A struct that does not conform to the protocol.
struct DataStore1 { }

// When we make it conform and add save() at the same time, our method is implicitly @MainActor.
extension DataStore1: DataStoring {
    func save() { } // This is automatically @MainActor.
}

// A struct that conforms to the protocol.
struct DataStore2: DataStoring { }

// If we later add the save() method, it will *not* be implicitly @MainActor so we need to mark it as such ourselves.
extension DataStore2 {
    @MainActor func save() { }
}
```

As you can see, we need to explicitly use `@MainActor func save()` in `DataStore2` because the global actor inference does not apply there. Don’t worry about forgetting it, though – Xcode will automatically check the annotation is there, and offer to add `@MainActor` if it’s missing.

The fifth and final rule is most complex of all: if the whole protocol is marked with `@MainActor`, any type that conforms to that protocol will also automatically be `@MainActor` *unless* you put the conformance separately from the main type declaration, in which case only the methods are `@MainActor`.

In attempt to make this clear, here’s what I mean:

```swift
// A protocol marked as @MainActor.
@MainActor protocol DataStoring {
    func save()
}

// A struct that conforms to DataStoring as part of its primary type definition.
struct DataStore1: DataStoring { // This struct is automatically @MainActor.
    func save() { } // This method is automatically @MainActor.
}

// Another struct that conforms to DataStoring as part of its primary type definition.
struct DataStore2: DataStoring { } // This struct is automatically @MainActor.

// The method is provided in an extension, but it's the same as if it were in the primary type definition.
extension DataStore2 {
    func save() { } // This method is automatically @MainActor.
}

// A third struct that does *not* conform to DataStoring in its primary type definition.
struct DataStore3 { } // This struct is not @MainActor.

// The conformance is added as an extension
extension DataStore3: DataStoring {
    func save() { } // This method is automatically @MainActor.
}
```

I realize that might sound obscure, but it makes sense if you put it into a real-world context. For example, let’s say you were working with the `DataStoring` protocol we defined above – what would happen if you modified one of Apple’s types so that it conformed to it?

If conformance to a `@MainActor` protocol retroactively made the whole of Apple’s type `@MainActor` then you would have dramatically altered the way it worked, probably breaking all sorts of assumptions made elsewhere in the system. If it’s *your* type – a type you’re creating from scratch in your own code – then you *can* add the protocol conformance as you make the type and therefore isolate the entire type to `@MainActor`, because it’s your choice.

::: details Similar solutions…

```component VPCard
{
  "title": "Understanding how priority escalation works | Swift Concurrency by Example",
  "desc": "Understanding how priority escalation works",
  "link": "/explore/articles/hackingwithswift.com/concurrency/understanding-how-priority-escalation-works.md",
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
  "title": "What is actor hopping and how can it cause problems? | Swift Concurrency by Example",
  "desc": "What is actor hopping and how can it cause problems?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/what-is-actor-hopping-and-how-can-it-cause-problems.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Important: Do not use an actor for your SwiftUI data models | Swift Concurrency by Example",
  "desc": "Important: Do not use an actor for your SwiftUI data models",
  "link": "/explore/articles/hackingwithswift.com/concurrency/important-do-not-use-an-actor-for-your-swiftui-data-models.md",
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

:::

---

<TagLinks />