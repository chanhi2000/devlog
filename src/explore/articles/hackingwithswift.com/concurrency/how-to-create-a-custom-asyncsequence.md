---
lang: ko-KR
title: How to create a custom AsyncSequence
description: Article(s) > How to create a custom AsyncSequence
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
      content: Article(s) > How to create a custom AsyncSequence
    - property: og:description
      content: How to create a custom AsyncSequence
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/how-to-create-a-custom-asyncsequence.html
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
  "title": "How to create a custom AsyncSequence | Swift Concurrency by Example",
  "desc": "How to create a custom AsyncSequence",
  "link": "https://hackingwithswift.com/quick-start/concurrency/how-to-create-a-custom-asyncsequence", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

There are only three differences between creating an `AsyncSequence` and creating a regular `Sequence`:

1. We need to conform to the `AsyncSequence` and `AsyncIteratorProtocol` protocols.
2. The `next()` method of our iterator must be marked `async`.
3. We need to create a `makeAsyncIterator()` method rather than `makeIterator()`.

That last point technically allows us to create one type that is both a synchronous and asynchronous sequence, although I’m not sure when that would be a good idea.

We’re going to build two async sequences so you can see how they work, one simple and one more realistic. First, the simple one, which is an async sequence that doubles numbers every time `next()` is called:

```swift
struct DoubleGenerator: AsyncSequence, AsyncIteratorProtocol {
    typealias Element = Int
    var current = 1

    mutating func next() async -> Element? {
        defer { current &*= 2 }

        if current < 0 {
            return nil
        } else {
            return current
        }
    }

    func makeAsyncIterator() -> DoubleGenerator {
        self
    }
}

let sequence = DoubleGenerator()

for await number in sequence {
    print(number)
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-create-a-custom-asyncsequence-1.zip)

::: tip

In case you haven’t seen it before, `&amp;*=` multiples with overflow, meaning that rather than running out of room when the value goes beyond the highest number of a 64-bit integer, it will instead flip around to be negative. We use this to our advantage, returning `nil` when we reach that point.

:::

If you prefer having a separate iterator struct, that also works as with `Sequence` and you don’t need to adjust the calling code:

```swift
struct DoubleGenerator: AsyncSequence {
    typealias Element = Int

    struct AsyncIterator: AsyncIteratorProtocol {
        var current = 1

        mutating func next() async -> Element? {
            defer { current &*= 2 }

            if current < 0 {
                return nil
            } else {
                return current
            }
        }
    }

    func makeAsyncIterator() -> AsyncIterator {
        AsyncIterator()
    }
}

let sequence = DoubleGenerator()

for await number in sequence {
    print(number)
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-create-a-custom-asyncsequence-2.zip)

Now let’s look at a more complex example, which will periodically fetch a URL that’s either local or remote, and send back any values that have changed from the previous request. 

This is more complex for various reasons:

1. Our `next()` method will be marked `throws`, so callers are responsible for handling loop errors.
2. Between checks we’re going to sleep for some number of seconds, so we don’t overload the network. This will be configurable when creating the watcher, but internally it will use `Task.sleep()`.
3. If we get data back and it hasn’t changed, we go around our loop again – wait for some number of seconds, re-fetch the URL, then check again.
4. Otherwise, if there *has* been a change between the old and new data, we overwrite our old data with the new data and send it back.
5. If no data is returned from our request, we immediately terminate the iterator by sending back `nil`.
6. This is important: once our iterator ends, any further attempt to call `next()` must also return `nil`. This is part of the design of `AsyncSequence`, so stick to it.

To add to the complexity a little, `Task.sleep()` measures its time in nanoseconds, so to sleep for one second you should specify 1 billion as the sleep amount.

Like I said, this is more complex, but it’s also a useful, real-world example of `AsyncSequence`. It’s also particularly powerful when combined with SwiftUI’s `task()` modifier, because the network fetches will automatically start when a view is shown and cancelled when it disappears. This allows you to constantly watch for new data coming in, and stream it directly into your UI.

Anyway, here’s the code –&nbsp;it creates a `URLWatcher` struct that conforms to the `AsyncSequence` protocol, along with an example of it being used to display a list of users in a SwiftUI view:

```swift
struct URLWatcher: AsyncSequence, AsyncIteratorProtocol {
    typealias Element = Data

    let url: URL
    let delay: Int
    private var comparisonData: Data?
    private var isActive = true

    init(url: URL, delay: Int = 10) {
        self.url = url
        self.delay = delay
    }

    mutating func next() async throws -> Element? {
        // Once we're inactive always return nil immediately
        guard isActive else { return nil }

        if comparisonData == nil {
            // If this is our first iteration, return the initial value
            comparisonData = try await fetchData()
        } else {
            // Otherwise, sleep for a while and see if our data changed
            while true {
                try await Task.sleep(nanoseconds: UInt64(delay) * 1_000_000_000)
                let latestData = try await fetchData()

                if latestData != comparisonData {
                    // New data is different from previous data,
                    // so update previous data and send it back
                    comparisonData = latestData
                    break
                }
            }
        }

        if comparisonData == nil {
            isActive = false
            return nil
        } else {
            return comparisonData
        }
    }

    private func fetchData() async throws -> Element {
        let (data, _) = try await URLSession.shared.data(from: url)
        return data
    }

    func makeAsyncIterator() -> URLWatcher {
        self
    }
}

// As an example of URLWatcher in action, try something like this:
struct User: Identifiable, Decodable {
    let id: Int
    let name: String
}

struct ContentView: View {
    @State private var users = [User]()

    var body: some View {
        List(users) { user in
            Text(user.name)
        }
        .task {
            // continuously check the URL watcher for data
            await fetchUsers()
        }
    }

    func fetchUsers() async {
        let url = URL(fileURLWithPath: "FILENAMEHERE.json")
        let urlWatcher = URLWatcher(url: url, delay: 3)

        do {
            for try await data in urlWatcher {
                try withAnimation {
                    users = try JSONDecoder().decode([User].self, from: data)
                }
            }
        } catch {
            // just bail out
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-create-a-custom-asyncsequence-3.zip)

To make that work in your own project, replace “FILENAMEHERE” with the location of a local file you can test with. For example, I might use **/Users/twostraws/users.json**, giving that file the following example contents:

```json
[
    {
        "id": 1,
        "name": "Paul"
    }
]
```

When the code first runs the list will show Paul, but if you edit the JSON file and re-save with extra users, they will just slide into the SwiftUI list automatically.

::: details Similar solutions…

```component VPCard
{
  "title": "How to convert an AsyncSequence into a Sequence | Swift Concurrency by Example",
  "desc": "How to convert an AsyncSequence into a Sequence",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-convert-an-asyncsequence-into-a-sequence.md",
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
  "title": "How to manipulate an AsyncSequence using map(), filter(), and more | Swift Concurrency by Example",
  "desc": "How to manipulate an AsyncSequence using map(), filter(), and more",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-manipulate-an-asyncsequence-using-map-filter-and-more.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to loop over an AsyncSequence using for await | Swift Concurrency by Example",
  "desc": "How to loop over an AsyncSequence using for await",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-loop-over-an-asyncsequence-using-for-await.md",
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

:::

---

<TagLinks />