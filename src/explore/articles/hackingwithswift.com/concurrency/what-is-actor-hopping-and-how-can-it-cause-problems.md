---
lang: ko-KR
title: What is actor hopping and how can it cause problems?
description: Article(s) > What is actor hopping and how can it cause problems?
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
      content: Article(s) > What is actor hopping and how can it cause problems?
    - property: og:description
      content: What is actor hopping and how can it cause problems?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/what-is-actor-hopping-and-how-can-it-cause-problems.html
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
  "title": "What is actor hopping and how can it cause problems? | Swift Concurrency by Example",
  "desc": "What is actor hopping and how can it cause problems?",
  "link": "https://hackingwithswift.com/quick-start/what-is-actor-hopping-and-how-can-it-cause-problems", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

When a thread pauses work on one actor to start work on another actor instead, we call it *actor hopping*, and it will happen any time one actor calls another.

Behind the scenes, Swift manages a group of threads called the *cooperative thread pool*, creating as many threads as there are CPU cores so that we can’t be hit by thread explosion. Actors guarantee that they can be running only one method at a time, but they don’t care which thread they are running on – they will automatically move between threads as needed in order to balance system resources. 

Actor hopping with the cooperative pool is fast – it will happen automatically, and we don’t need to worry about it. However, the main thread is *not* part of the cooperative thread pool, which means actor code being run from the main actor will require a context switch, which will incur a performance penalty if done too frequently.

You can see the problem caused by frequent actor hopping in this toy example code:

```swift
actor NumberGenerator {
    var lastNumber = 1

    func getNext() -> Int {
        defer { lastNumber += 1 }
        return lastNumber
    }

    @MainActor func run() async {
        for _ in 1...100 {
            let nextNumber = await getNext()
            print("Loading \(nextNumber)")
        }
    }
}

let generator = NumberGenerator()
await generator.run()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/what-is-actor-hopping-and-how-can-it-cause-problems-1.zip)

In that code, the `run()` method must take place on the main actor because it has the `@MainActor` attribute attached to it, however the `getNext()` method will run somewhere on the cooperative pool, meaning that Swift will need to perform frequent context switching from to and from the main actor inside the loop.

In practice, your code is more likely to look like this:

```swift
// An example piece of data we can show in our UI
struct User: Identifiable {
    let id: Int
}

// An actor that handles serial access to a database
actor Database {
    func loadUser(id: Int) -> User {
        // complex work to load a user from the database
        // happens here; we'll just send back an example
        User(id: id)
    }
}

// An observable object that handles updating our UI
@MainActor
class DataModel: ObservableObject {
    @Published var users = [User]()
    var database = Database()

    // Load all our users, updating the UI as each one
    // is successfully fetched
    func loadUsers() async {
        for i in 1...100 {
            let user = await database.loadUser(id: i)
            users.append(user)
        }
    }
}

// A SwiftUI view showing all the users in our data model
struct ContentView: View {
    @StateObject var model = DataModel()

    var body: some View {
        List(model.users) { user in
            Text("User \(user.id)")
        }
        .task {
            await model.loadUsers()
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/what-is-actor-hopping-and-how-can-it-cause-problems-2.zip)

When that runs, the `loadUsers()` method will run on the main actor, because the whole `DataModel` class must run there – it has been annotated with `@MainActor` to avoid publishing changes from a background thread. However, the database’s `loadUser()` method will run somewhere on the cooperative pool: it might run on thread 3 the first time it’s called, thread 5 the second time, thread 8 the third time, and so on; Swift will take care of that for us.

This means when our code runs it will repeatedly hop to and from the main actor, meaning there’s a significant performance cost introduced by all the context switching.

The solution here is to avoid all the switches by running operations in batches – hop to the cooperative thread pool once to perform all the actor work required to load many users, then process those batches on the main actor. The batch size could potentially load all users at once depending on your need, but even batch sizes of two would halve the context switches compared to individual fetches.

For example, we could rewrite our previous example like this:

```swift
struct User: Identifiable {
    let id: Int
}

actor Database {
    func loadUsers(ids: [Int]) -> [User] {
        // complex work to load users from the database
        // happens here; we'll just send back examples
        ids.map { User(id: $0) }
    }
}

@MainActor
class DataModel: ObservableObject {
    @Published var users = [User]()
    var database = Database()

    func loadUsers() async {
        let ids = Array(1...100)

        // Load all users in one hop
        let newUsers = await database.loadUsers(ids: ids)

        // Now back on the main actor, update the UI
        users.append(contentsOf: newUsers)
    }
}

struct ContentView: View {
    @StateObject var model = DataModel()

    var body: some View {
        List(model.users) { user in
            Text("User \(user.id)")
        }
        .task {
            await model.loadUsers()
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/what-is-actor-hopping-and-how-can-it-cause-problems-3.zip)

Notice how the SwiftUI view is identical – we’re just rearranging our internal data access to be more efficient.

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
  "title": "Important: Do not use an actor for your SwiftUI data models | Swift Concurrency by Example",
  "desc": "Important: Do not use an actor for your SwiftUI data models",
  "link": "/explore/articles/hackingwithswift.com/concurrency/important-do-not-use-an-actor-for-your-swiftui-data-models.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />