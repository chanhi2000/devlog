---
lang: ko-KR
title: How to download JSON from the internet and decode it into any Codable type
description: Article(s) > How to download JSON from the internet and decode it into any Codable type
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
      content: Article(s) > How to download JSON from the internet and decode it into any Codable type
    - property: og:description
      content: How to download JSON from the internet and decode it into any Codable type
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/how-to-download-json-from-the-internet-and-decode-it-into-any-codable-type.html
prev: /explore/articles/hackingwithswift.com/concurrency/important-do-not-use-an-actor-for-your-swiftui-data-models.md
next: /explore/articles/hackingwithswift.com/concurrency/README.md
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
  "title": "How to download JSON from the internet and decode it into any Codable type | Swift Concurrency by Example",
  "desc": "How to download JSON from the internet and decode it into any Codable type",
  "link": "https://hackingwithswift.com/quick-start/concurrency/how-to-download-json-from-the-internet-and-decode-it-into-any-codable-type", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Fetching JSON from the network and using `Codable` to convert it into native Swift objects is probably the most common task for any Swift developer, usually followed by displaying that data in a `List` or `UITableView` depending on whether they are using SwiftUI or UIKit.

Well, using Swift’s concurrency features we can write a small but beautiful extension for `URLSession` that makes such work just a single line of code – you just tell iOS what data type to expect and the URL to fetch, and it will do the rest. To add some extra flexibility, we can also provide options to customize decoding strategies for keys, data, and dates, providing sensible defaults for each one to keep our call sites clear for the most common usages.

Here’s how it’s done:

```swift
extension URLSession {
    func decode<T: Decodable>(
        _ type: T.Type = T.self,
        from url: URL,
        keyDecodingStrategy: JSONDecoder.KeyDecodingStrategy = .useDefaultKeys,
        dataDecodingStrategy: JSONDecoder.DataDecodingStrategy = .deferredToData,
        dateDecodingStrategy: JSONDecoder.DateDecodingStrategy = .deferredToDate
    ) async throws  -> T {
        let (data, _) = try await data(from: url)

        let decoder = JSONDecoder()
        decoder.keyDecodingStrategy = keyDecodingStrategy
        decoder.dataDecodingStrategy = dataDecodingStrategy
        decoder.dateDecodingStrategy = dateDecodingStrategy

        let decoded = try decoder.decode(T.self, from: data)
        return decoded
    }
}
```

That does several things:

1. It’s an extension on `URLSession`, so you can go ahead and create your own custom session with a unique configuration if needed.
2. It uses generics, so that it will work with anything that conforms to the `Decodable` protocol – that’s half of `Codable`, so if you use `Codable` it will work there too.
3. It uses `T.self` for the default data type, so if Swift can infer your type then you don’t need to repeat yourself.
4. It allows all errors to propane to your call site, so you can handle networking and/or decoding errors as needed.

To use the extension in your own code, first define a type you want to work with, then go ahead and call `decode()` in whichever way you need:

```swift
extension URLSession {
    func decode<T: Decodable>(
        _ type: T.Type = T.self,
        from url: URL,
        keyDecodingStrategy: JSONDecoder.KeyDecodingStrategy = .useDefaultKeys,
        dataDecodingStrategy: JSONDecoder.DataDecodingStrategy = .deferredToData,
        dateDecodingStrategy: JSONDecoder.DateDecodingStrategy = .deferredToDate
    ) async throws  -> T {
        let (data, _) = try await data(from: url)

        let decoder = JSONDecoder()
        decoder.keyDecodingStrategy = keyDecodingStrategy
        decoder.dataDecodingStrategy = dataDecodingStrategy
        decoder.dateDecodingStrategy = dateDecodingStrategy

        let decoded = try decoder.decode(T.self, from: data)
        return decoded
    }
}

struct User: Codable {
    let id: UUID
    let name: String
    let age: Int
}

struct Message: Codable {
    let id: Int
    let user: String
    let text: String
}

do {
    // Fetch and decode a specific type
    let url1 = URL(string: "https://hws.dev/user-24601.json")!
    let user = try await URLSession.shared.decode(User.self, from: url1)
    print("Downloaded \(user.name)")

    // Infer the type because Swift has a type annotation
    let url2 = URL(string: "https://hws.dev/inbox.json")!
    let messages: [Message] = try await URLSession.shared.decode(from: url2)
    print("Downloaded \(messages.count) messages")

    // Create a custom URLSession and decode a Double array from that
    let config = URLSessionConfiguration.default
    config.requestCachePolicy = .reloadIgnoringLocalAndRemoteCacheData
    let session = URLSession(configuration: config)

    let url3 = URL(string: "https://hws.dev/readings.json")!
    let readings = try await session.decode([Double].self, from: url3)
    print("Downloaded \(readings.count) readings")
} catch {
    print("Download error: \(error.localizedDescription)")
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-download-json-from-the-internet-and-decode-it-into-any-codable-type-1.zip)

As you can see, with that small extension in place it becomes trivial to fetch and decode any type of `Codable` data with just one line of Swift.

::: details Similar solutions…

```component VPCard
{
  "title": "How to use continuations to convert completion handlers into async functions | Swift Concurrency by Example",
  "desc": "How to use continuations to convert completion handlers into async functions",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-use-continuations-to-convert-completion-handlers-into-async-functions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Understanding threads and queues | Swift Concurrency by Example",
  "desc": "Understanding threads and queues",
  "link": "/explore/articles/hackingwithswift.com/concurrency/understanding-threads-and-queues.md",
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
  "title": "What is an actor and why does Swift have them? | Swift Concurrency by Example",
  "desc": "What is an actor and why does Swift have them?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/what-is-an-actor-and-why-does-swift-have-them.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />