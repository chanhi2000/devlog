---
lang: ko-KR
title: Is it efficient to create many tasks?
description: Article(s) > Is it efficient to create many tasks?
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
      content: Article(s) > Is it efficient to create many tasks?
    - property: og:description
      content: Is it efficient to create many tasks?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/how-to-run-tasks-using-swiftuis-task-modifier.html
next: /explore/articles/hackingwithswift.com/concurrency/what-is-an-actor-and-why-does-swift-have-them.md
date: 2021-07-28
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
  "title": "Is it efficient to create many tasks? | Swift Concurrency by Example",
  "desc": "Is it efficient to create many tasks?",
  "link": "https://hackingwithswift.com/quick-start/concurrency/how-to-run-tasks-using-swiftuis-task-modifier", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftUI provides a `task()` modifier that starts a new detached task as soon as a view appears, and automatically cancels the task when the view disappears. This is sort of the equivalent of starting a task in `onAppear()` then cancelling it `onDisappear()`, although `task()` has an extra ability to track an identifier and restart its task when the identifier changes.

In the simplest scenario – and probably the one you’re going to use the most – `task()` is the best way to load your view’s initial data, which might be loaded from local storage or by fetching and decoding a remote URL.

For example, this downloads data from a server and decodes it into an array for display in a list:

```swift
struct Message: Decodable, Identifiable {
    let id: Int
    let from: String
    let text: String
}

struct ContentView: View {
    @State private var messages = [Message]()

    var body: some View {
        NavigationView {
            List(messages) { message in
                VStack(alignment: .leading) {
                    Text(message.from)
                        .font(.headline)

                    Text(message.text)
                }
            }
            .navigationTitle("Inbox")
            .task {
                await loadMessages()
            }
        }
    }

    func loadMessages() async {
        do {
            let url = URL(string: "https://hws.dev/messages.json")!
            let (data, _) = try await URLSession.shared.data(from: url)
            messages = try JSONDecoder().decode([Message].self, from: data)
        } catch {
            messages = [
                Message(id: 0, from: "Failed to load inbox.", text: "Please try again later.")
            ]
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-run-tasks-using-swiftuis-task-modifier-1.zip)

<strong>Important:</strong> The `task()` modifier is a great place to load the data for your SwiftUI views. Remember, they can be recreated many times over the lifetime of your app, so you should avoid putting this kind of work into their initializers if possible.

A more advanced usage of `task()` is to attach some kind of `Equatable` identifying value – when that value changes SwiftUI will automatically cancel the previous task and create a new task with the new value. This might be some shared app state, such as whether the user is logged in or not, or some local state, such as what kind of filter to apply to some data. 

As an example, we could upgrade our messaging view to support both an Inbox and a Sent box, both fetched and decoded using the same `task()` modifier. By setting the message box type as the identifier for the task with `.task(id: selectedBox)`, SwiftUI will automatically update its message list every time the selection changes.

Here’s how that looks in code:

```swift
struct Message: Decodable, Identifiable {
    let id: Int
    let user: String
    let text: String
}

// Our content view is able to handle two kinds of message box now.
struct ContentView: View {
    @State private var messages = [Message]()
    @State private var selectedBox = "Inbox"
    let messageBoxes = ["Inbox", "Sent"]

    var body: some View {
        NavigationView {
            List {
                Section {
                    ForEach(messages) { message in
                        VStack(alignment: .leading) {
                            Text(message.user)
                                .font(.headline)

                            Text(message.text)
                        }
                    }
                }
            }
            .listStyle(.insetGrouped)
            .navigationTitle(selectedBox)

            // Our task modifier will recreate its fetchData() task whenever selectedBox changes
            .task(id: selectedBox) {
                await fetchData()
            }
            .toolbar {
                // Switch between our two message boxes
                Picker("Select a message box", selection: $selectedBox) {
                    ForEach(messageBoxes, id: \.self, content: Text.init)
                }
                .pickerStyle(.segmented)
            }
        }
    }

    // This is almost the same as before, but now loads the selectedBox JSON file rather than always loading the inbox.
    func fetchData() async {
        do {
            let url = URL(string: "https://hws.dev/\(selectedBox.lowercased()).json")!
            let (data, _) = try await URLSession.shared.data(from: url)
            messages = try JSONDecoder().decode([Message].self, from: data)
        } catch {
            messages = [
                Message(id: 0, user: "Failed to load message box.", text: "Please try again later.")
            ]
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-run-tasks-using-swiftuis-task-modifier-2.zip)

::: tip

That example uses the shared `URLSession`, which means it will cache its responses and so load the two inboxes only once. If that’s what you want you’re all set, but if you want it to always fetch the files make sure you create your own session configuration and disable caching.

:::

One particularly interesting use case for `task()` is with `AsyncSequence` collections that continuously generate values. This might be a server that maintains an open connection while sending fresh content, it might be the `URLWatcher` example we looked at previously, or perhaps just a local value. For example, we could write a simple random number generator that regularly emits new random numbers – with the `task()` modifier we can constantly watch that for changes, and stream the results into a SwiftUI view.

To bring this example to life, we’re going to add one more thing: the random number generator will print a message every time a number is generated, and the resulting number list will be shown inside a detail view. Both of these are done so you can see how `task()` automatically cancels its work: the numbers will automatically start streaming when the detail view is shown, and stop streaming when the view is dismissed.

Here’s the code:

```swift
// A simple random number generator sequence
struct NumberGenerator: AsyncSequence, AsyncIteratorProtocol {
    typealias Element = Int
    let delay: Double
    let range: ClosedRange<Int>

    init(in range: ClosedRange<Int>, delay: Double = 1) {
        self.range = range
        self.delay = delay
    }

    mutating func next() async -> Int? {
        // Make sure we stop emitting numbers when our task is cancelled
        while Task.isCancelled == false {
            try? await Task.sleep(nanoseconds: UInt64(delay) * 1_000_000_000)
            print("Generating number")
            return Int.random(in: range)
        }

        return nil
    }

    func makeAsyncIterator() -> NumberGenerator {
        self
    }
}

// This exists solely to show DetailView when requested.
struct ContentView: View {
    var body: some View {
        NavigationView {
            NavigationLink(destination: DetailView()) {
                Text("Start Generating Numbers")
            }
        }
    }
}

// This generates and displays all the random numbers we've generated.
struct DetailView: View {
    @State private var numbers = [String]()
    let generator = NumberGenerator(in: 1...100)

    var body: some View {
        List(numbers, id: \.self, rowContent: Text.init)
            .task {
                await generateNumbers()
            }
    }

    func generateNumbers() async {
        for await number in generator {
            numbers.insert("\(numbers.count + 1). \(number)", at: 0)
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-run-tasks-using-swiftuis-task-modifier-3.zip)

Notice how the `generateNumbers()` method at the end doesn’t actually have any way of exiting? That’s because it will exit automatically when `generator` stops returning values, which will happen when the task is cancelled, and *that* will happen when `DetailView` is dismissed – it takes no special work from us.

::: tip

The `task()` modifier accepts a `priority` parameter if you want fine-grained control over your task’s priority. For example, use `.task(priority: .low)` to create a low-priority task.

:::

::: details Similar solutions…

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
  "title": "What’s the difference between async let, tasks, and task groups? | Swift Concurrency by Example",
  "desc": "What’s the difference between async let, tasks, and task groups?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/whats-the-difference-between-async-let-tasks-and-task-groups.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to run tasks using SwiftUI’s task() modifier | Swift Concurrency by Example",
  "desc": "How to run tasks using SwiftUI’s task() modifier",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-run-tasks-using-swiftuis-task-modifier.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What are tasks and task groups? | Swift Concurrency by Example",
  "desc": "What are tasks and task groups?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/what-are-tasks-and-task-groups.md",
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