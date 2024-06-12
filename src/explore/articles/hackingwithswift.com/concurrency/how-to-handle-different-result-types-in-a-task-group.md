---
lang: ko-KR
title: How to handle different result types in a task group
description: Article(s) > How to handle different result types in a task group
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
      content: Article(s) > How to handle different result types in a task group
    - property: og:description
      content: How to handle different result types in a task group
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/how-to-handle-different-result-types-in-a-task-group.html
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
  "title": "How to handle different result types in a task group | Swift Concurrency by Example",
  "desc": "How to handle different result types in a task group",
  "link": "https://hackingwithswift.com/quick-start/concurrency/how-to-handle-different-result-types-in-a-task-group", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Each task in a Swift task group must return the same type of data as all the other tasks in the group, which is often problematic – what if you need one task group to handle several different types of data?

In this situation you should consider using `async let` for your concurrency if you can, because every `async let` expression can return its own unique data type. So, the first might result in an array of strings, the second in an integer, and so on, and once you’ve awaited them all you can use them however you please.

However, if you *need* to use task groups – for example if you need to create your tasks in a loop – then there is a solution: create an enum with associated values that wrap the underlying data you want to return. Using this approach, each of the tasks in your group still return a single data type – one of the cases from your enum – but *inside* those cases you can place the unique data types you’re actually using.

This is best demonstrated with some example code, but because it’s quite a lot I’m going to add inline comments so you can see what’s going on:

```swift
// A struct we can decode from JSON, storing one message from a contact.
struct Message: Decodable {
    let id: Int
    let from: String
    let message: String
}

// A user, containing their name, favorites list, and messages array.
struct User {
    let username: String
    let favorites: Set<Int>
    let messages: [Message]
}

// A single enum we'll be using for our tasks, each containing a different associated value.
enum FetchResult {
    case username(String)
    case favorites(Set<Int>)
    case messages([Message])
}

func loadUser() async {
    // Each of our tasks will return one FetchResult, and the whole group will send back a User.
    let user = await withThrowingTaskGroup(of: FetchResult.self) { group -> User in
        // Fetch our username string
        group.addTask {
            let url = URL(string: "https://hws.dev/username.json")!
            let (data, _) = try await URLSession.shared.data(from: url)
            let result = String(decoding: data, as: UTF8.self)

            // Send back FetchResult.username, placing the string inside.
            return .username(result)
        }

        // Fetch our favorites set
        group.addTask {
            let url = URL(string: "https://hws.dev/user-favorites.json")!
            let (data, _) = try await URLSession.shared.data(from: url)
            let result = try JSONDecoder().decode(Set<Int>.self, from: data)

            // Send back FetchResult.favorites, placing the set inside.
            return .favorites(result)
        }

        // Fetch our messages array
        group.addTask {
            let url = URL(string: "https://hws.dev/user-messages.json")!
            let (data, _) = try await URLSession.shared.data(from: url)
            let result = try JSONDecoder().decode([Message].self, from: data)

            // Send back FetchResult.messages, placing the message array inside
            return .messages(result)
        }

        // At this point we've started all our tasks,
        // so now we need to stitch them together into
        // a single User instance. First, we set
        // up some default values:
        var username = "Anonymous"
        var favorites = Set<Int>()
        var messages = [Message]()

        // Now we read out each value, figure out 
        // which case it represents, and copy its
        // associated value into the right variable.
        do {
            for try await value in group {
                switch value {
                case .username(let value):
                    username = value
                case .favorites(let value):
                    favorites = value
                case .messages(let value):
                    messages = value
                }
            }
        } catch {
            // If any of the fetches went wrong, we might
            // at least have partial data we can send back.
            print("Fetch at least partially failed; sending back what we have so far. \(error.localizedDescription)")
        }

        // Send back our user, either filled with
        // default values or using the data we
        // fetched from the server.
        return User(username: username, favorites: favorites, messages: messages)
    }

    // Now do something with the finished user data.
    print("User \(user.username) has \(user.messages.count) messages and \(user.favorites.count) favorites.")
}

await loadUser()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-handle-different-result-types-in-a-task-group-1.zip)

I know it’s a lot of code, but really it boils down to two things:

1. Creating an enum with one case for each type of data you’re expecting, with each case having an associated value of that type.
2. Reading the results from your group’s tasks using a `switch` block that reads each case from your enum, extracts the associated value inside, and acts on it appropriately.

So, it’s not impossible to handle heterogeneous results in a task group, it just requires a little extra thinking.

::: details Similar solutions…

```component VPCard
{
  "title": "How to cancel a task group | Swift Concurrency by Example",
  "desc": "How to cancel a task group",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-cancel-a-task-group.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create a task group and add tasks to it | Swift Concurrency by Example",
  "desc": "How to create a task group and add tasks to it",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-create-a-task-group-and-add-tasks-to-it.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to get a Result from a task | Swift Concurrency by Example",
  "desc": "How to get a Result from a task",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-get-a-result-from-a-task.md",
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
  "title": "How to create and use task local values | Swift Concurrency by Example",
  "desc": "How to create and use task local values",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-create-and-use-task-local-values.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />