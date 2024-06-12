---
lang: ko-KR
title: How to loop over an AsyncSequence using for await
description: Article(s) > How to loop over an AsyncSequence using for await
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
      content: Article(s) > How to loop over an AsyncSequence using for await
    - property: og:description
      content: How to loop over an AsyncSequence using for await
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/how-to-loop-over-an-asyncsequence-using-for-await.html
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
  "title": "How to loop over an AsyncSequence using for await | Swift Concurrency by Example",
  "desc": "How to loop over an AsyncSequence using for await",
  "link": "https://hackingwithswift.com/quick-start/concurrency/how-to-loop-over-an-asyncsequence-using-for-await", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

You can loop over an `AsyncSequence` using Swift’s regular loop types, `for`, `while`, and `repeat`, but whenever you read a value from the async sequence you must use either `await` or `try await` depending on whether it can throw errors or not.

As an example, `URL` has a built-in `lines` property that generates an async sequence of all the lines directly from a URL. This does a *lot* of work internally: making the network request, fetching part of the data, converting it into a string, sending it back for us to use, then repeating fetch, convert, and send again and again until the server stops sending back data. 

All that functionality boils down to just a handful of lines of code:

```swift
func fetchUsers() async throws {
    let url = URL(string: "https://hws.dev/users.csv")!

    for try await line in url.lines {
        print("Received user: \(line)")
    }
}

try? await fetchUsers()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-loop-over-an-asyncsequence-using-for-await-1.zip)

Notice how we must use `try` along with `await`, because fetching data from the network might throw errors.

Using `lines` returns a specialized type called `AsyncLineSequence`, which returns individual lines from the download as strings. Because our source happens to be a comma-separated values file (CSV), we can write code to read the values from each line easily enough:

```swift
func printUsers() async throws {
    let url = URL(string: "https://hws.dev/users.csv")!

    for try await line in url.lines {
        let parts = line.split(separator: ",")
        guard parts.count == 4 else { continue }

        guard let id = Int(parts[0]) else { continue }
        let firstName = parts[1]
        let lastName = parts[2]
        let country = parts[3]

        print("Found user #\(id): \(firstName) \(lastName) from \(country)")
    }
}

try? await printUsers()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-loop-over-an-asyncsequence-using-for-await-2.zip)

Just like a regular sequence, using an async sequence in this way effectively generates an iterator then calls `next()` on it repeatedly until it returns `nil`, at which point the loop finishes.

If you want more control over how the sequence is read, you can of course create your own iterator then call `next()` whenever you want and as often as you want. Again, it will send back `nil` when the sequence is empty, at which point you should stop calling it.

For example, we could read the first user from our CSV and treat them specially, then read the next four users and do something specific for them, then finally reduce all the remainder down into an array of other users:

```swift
func printUsers() async throws {
    let url = URL(string: "https://hws.dev/users.csv")!

    var iterator = url.lines.makeAsyncIterator()

    if let line = try await iterator.next() {
        print("The first user is \(line)")
    }

    for i in 2...5 {
        if let line = try await iterator.next() {
            print("User #\(i): \(line)")
        }
    }

    var remainingResults = [String]()

    while let result = try await iterator.next() {
        remainingResults.append(result)
    }

    print("There were \(remainingResults.count) other users.")
}

try? await printUsers()
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-loop-over-an-asyncsequence-using-for-await-3.zip)

::: details Similar solutions…

```component VPCard
{
  "title": "How to create a custom AsyncSequence | Swift Concurrency by Example",
  "desc": "How to create a custom AsyncSequence",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-create-a-custom-asyncsequence.md",
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
  "title": "What’s the difference between await and async let? | Swift Concurrency by Example",
  "desc": "What’s the difference between await and async let?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/whats-the-difference-between-await-and-async-let.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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

:::

---

<TagLinks />