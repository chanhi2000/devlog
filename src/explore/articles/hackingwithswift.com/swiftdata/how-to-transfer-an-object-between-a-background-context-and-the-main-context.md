---
lang: ko-KR
title: How to transfer an object between a background context and the main context
description: Article(s) > How to transfer an object between a background context and the main context
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swiftdata
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to transfer an object between a background context and the main context
    - property: og:description
      content: How to transfer an object between a background context and the main context
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-transfer-an-object-between-a-background-context-and-the-main-context.html
date: 2023-09-30
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftData by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftdata/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to transfer an object between a background context and the main context | SwiftData by Example",
  "desc": "How to transfer an object between a background context and the main context",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-transfer-an-object-between-a-background-context-and-the-main-context", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

All instances of your model objects are automatically bound to the actor where they are created, which means you can't bounce objects between your main context and a context running on a separate actor. Instead, you should pass your object's persistent identifier between your actors, then load them locally.

::: important

Although we're now more than two years into Swift concurrency, Xcode still ships with its concurrency checking option set to Minimal. At the time of writing this means you _can_ send model objects between actors despite this potentially causing data races, and it will cause a hard error once Xcode starts to enforce its concurrency checks. If you'd like to save yourself some headaches, I'd suggest you go to your target's build settings and set Strict Concurrency Checking to Complete, then follow the instructions below in order to get concurrency right.

:::

As an example, let's say you're building an app that is able to scour various sources for information on a particular topic, and bring them all together in a local SwiftData store so you could perform various analysis work on it – perhaps you're running through some machine learning algorithms, you're performing semantic analysis, or whatever. 

We would start with a SwiftData model able to hold a topic name, plus a `content` string containing all the relevant text you found from various sources, like this:

```swift
@Model
class Topic {
    var name: String
    var content: String

    init(name: String, content: String = "") {
        self.name = name
        self.content = content
    }
}
```

Next, you'd build a dedicated actor that's able to research a particular topic on a background task. We're not actually going to do the machine learning part because that isn't the point, but I do want to point out the right and wrong way of receiving data.

First, the wrong way: **Do not write an actor that accepts a model object directly.** So, this code can introduce all sorts of problems in your code:

```swift
actor TopicResearcher {
    func research(_ topic: Topic) async throws {
        print("Researching \(topic.name)…")
        // Lots of work here…
    }
}
```

**Again: do _not_ send model objects across actors.**

There are only two things that are safe to send between actors: a `ModelContainer` and a `PersistentIdentifier`. This means the safe way to pass data between actors is to:

1. Pass a model container instance from your main actor to another actor.
2. Use that to create a model context on the other actor.
3. Pass the persistent identifier of your model object from your main actor to the other actor.
4. Use that to load the object on the other actor.

You can then perform as much extra work as you want on the other actor without interfering with your main actor.

All the work of fetching and analyzing data should be done off your main actor to avoid locking up the user interface 

So, the correct code to handle an object on a separate actor is like this:

```swift
actor TopicResearcher {
    let context: ModelContext

    // Create a model context on this actor
    init(container: ModelContainer) {
        context = ModelContext(container)
    }

    // Convert an identifier to a topic using the local context
    func research(_ identifier: PersistentIdentifier) async throws {
        guard let topic = context.model(for: identifier) as? Topic else {
            return
        }

        print("Researching \(topic.name)…")
        print("Lots of work here…")
    }
}
```

::: tip

Remember, your object's persistent identifier is only temporary until it is saved for the first time. If you intend to make an actor do extensive work with its model context, it's much more efficient to create the context inside a method rather than accessing the actor's property.

:::

With this in place, you can write a regular SwiftUI view that is able to display your topics somehow, and let the user select one to research. As an example to get you started, we might write code like this:

```swift
struct ContentView: View {
    @Query(sort: \Topic.name) var topics: [Topic]
    @Environment(\.modelContext) var modelContext

    @State private var researcher: TopicResearcher

    var body: some View {
        NavigationStack {
            List(topics) { topic in
                VStack(alignment: .leading) {
                    Text(topic.name)
                }
                .swipeActions {
                    Button("Research", systemImage: "magnifyingglass") {
                        research(topic)
                    }
                }
            }
            .navigationTitle("AutoResearcher")
            .toolbar {
                Button("Add Sample", action: addSample)
            }
        }
    }

    init(container: ModelContainer) {
        let researcher = TopicResearcher(container: container)
        _researcher = State(initialValue: researcher)
    }

    func addSample() {
        let topic1 = Topic(name: "The Roman Empire")
        let topic2 = Topic(name: "Travis Kelce")
        modelContext.insert(topic1)
        modelContext.insert(topic2)
    }

    func research(_ topic: Topic) {
        let id = topic.id

        Task { [researcher] in
            try await researcher.research(id)
        }
    }
}
```

This code compiles and runs cleanly even with complete concurrency checking enabled, avoiding the potential for data races.

---

<TagLinks />