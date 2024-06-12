---
lang: ko-KR
title: How to create a task group and add tasks to it
description: Article(s) > How to create a task group and add tasks to it
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
      content: Article(s) > How to create a task group and add tasks to it
    - property: og:description
      content: How to create a task group and add tasks to it
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/how-to-create-a-task-group-and-add-tasks-to-it.html
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
  "title": "How to create a task group and add tasks to it | Swift Concurrency by Example",
  "desc": "How to create a task group and add tasks to it",
  "link": "https://hackingwithswift.com/quick-start/concurrency/how-to-create-a-task-group-and-add-tasks-to-it", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Swift’s task groups are collections of tasks that work together to produce a single result. Each task inside the group must return the same kind of data, but if you use enum associated values you can make them send back different kinds of data – it’s a little clumsy, but it works.

Creating a task group is done in a very precise way to avoid us creating problems for ourselves: rather than creating a `TaskGroup` instance directly, we do so by calling the `withTaskGroup(of:)` function and telling it the data type the task group will return. We give this function the code for our group to execute, and Swift will pass in the `TaskGroup` that was created, which we can then use to add tasks to the group.

First, I want to look at the simplest possible example of task groups, which is returning 5 constant strings, adding them into a single array, then joining that array into a string:

```swift
func printMessage() async {
  let string = await withTaskGroup(of: String.self) { group -> String in
      group.addTask { "Hello" }
      group.addTask { "From" }
      group.addTask { "A" }
      group.addTask { "Task" }
      group.addTask { "Group" }

      var collected = [String]()

      for await value in group {
          collected.append(value)
      }

      return collected.joined(separator: " ")
  }

  print(string)
}

await printMessage()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-create-a-task-group-and-add-tasks-to-it-1.zip)

I know it’s trivial, but it demonstrates several important things:

1. We must specify the exact type of data our task group will return, which in our case is `String.self` so that each child task can return a string.
2. We need to specify exactly what the return value of the group will be using `group - > String in` – Swift finds it hard to figure out the return value otherwise.
3. We call `addTask()` once for each task we want to add to the group, passing in the work we want that task to do.
4. Task groups conform to `AsyncSequence`, so we can read all the values from their children using `for await`, or by calling `group.next()` repeatedly.
5. Because the whole task group executes asynchronously, we must call it using `await`.

However, there’s one other thing you *can’t* see in that code sample, which is that our task results are sent back in *completion* order and not creation order. That is, our code above might send back “Hello From A Task Group”, but it also might send back “Task From A Hello Group”, “Group Task A Hello From”, or any other possible variation – the return value could be different every time.

Tasks created using `withTaskGroup()` cannot throw errors. If you *want* them to be able to throw errors that bubble upwards – i.e., that are handled outside the task group – you should use `withThrowingTaskGroup()` instead. To demonstrate this, and also to demonstrate a more real-world example of `TaskGroup` in action, we could write some code that fetches several news feeds and combines them into one list:

```swift
struct NewsStory: Identifiable, Decodable {
    let id: Int
    let title: String
    let strap: String
    let url: URL
}

struct ContentView: View {
    @State private var stories = [NewsStory]()

    var body: some View {
        NavigationView {
            List(stories) { story in
                VStack(alignment: .leading) {
                    Text(story.title)
                        .font(.headline)

                    Text(story.strap)
                }
            }
            .navigationTitle("Latest News")
        }
        .task {
            await loadStories()
        }
    }

    func loadStories() async {
        do {
            stories = try await withThrowingTaskGroup(of: [NewsStory].self) { group -> [NewsStory] in
                for i in 1...5 {
                    group.addTask {
                        let url = URL(string: "https://hws.dev/news-\(i).json")!
                        let (data, _) = try await URLSession.shared.data(from: url)
                        return try JSONDecoder().decode([NewsStory].self, from: data)
                    }
                }

                let allStories = try await group.reduce(into: [NewsStory]()) { $0 += $1 }
                return allStories.sorted { $0.id > $1.id }
            }
        } catch {
            print("Failed to load stories")
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-create-a-task-group-and-add-tasks-to-it-2.zip)

In that code you can see we have a simple struct that contains one news story, a SwiftUI view showing all the news stories we fetched, plus a `loadStories()` method that handles fetching and decoding several news feeds into a single array.

There are four things in there that deserve special attention:

1. Fetching and decoding news items might throw errors, and those errors are *not* handled inside the tasks, so we need to use `withThrowingTaskGroup()` to create the group.
2. One of the main advantages of task groups is being able to add tasks inside a loop – we can loop from 1 through 5 and call `addTask()` repeatedly.
3. Because the task group conforms to `AsyncSequence`, we can call its `reduce()` method to boil all its task results down to a single value, which in this case is a single array of news stories.
4. As I said earlier, tasks in a group can complete in any order, so we sorted the resulting array of news stories to get them all in a sensible order.

Regardless of whether you’re using throwing or non-throwing tasks, all tasks in a group must complete before the group returns. You have three options here:

1. Awaiting all individual tasks in the group.
2. Calling `waitForAll()` will automatically wait for tasks you have not explicitly awaited, discarding any results they return.
3. If you do not explicitly await any child tasks, they will be *implicitly* awaited – Swift will wait for them anyway, even if you aren’t using their return values.

Of the three, I find myself using the first most often because it’s the most explicit – you aren’t leaving folks wondering why some or all of your tasks are launched then ignored.

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
  "title": "How to run tasks using SwiftUI’s task() modifier | Swift Concurrency by Example",
  "desc": "How to run tasks using SwiftUI’s task() modifier",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-run-tasks-using-swiftuis-task-modifier.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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
  "title": "What’s the difference between a task and a detached task? | Swift Concurrency by Example",
  "desc": "What’s the difference between a task and a detached task?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/whats-the-difference-between-a-task-and-a-detached-task.md",
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

:::

---

<TagLinks />