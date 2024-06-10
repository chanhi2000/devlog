---
lang: ko-KR
title: How to create and use async properties
description: Article(s) > How to create and use async properties
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
      content: Article(s) > How to create and use async properties
    - property: og:description
      content: How to create and use async properties
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/concurrency/how-to-create-and-use-async-properties.html
date: 2023-01-19
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
  "title": "How to create and use async properties | Swift Concurrency by Example",
  "desc": "How to create and use async properties",
  "link": "https://hackingwithswift.com/quick-start/concurrency/how-to-create-and-use-async-properties", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Just as Swift’s functions can be asynchronous, computed properties can also be asynchronous: attempting to access them must also use `await` or similar, and may also need `throws` if errors can be thrown when computing the property. This is what allows things like the `value` property of `Task` to work – it’s a simple property, but we must access it using `await` because it might not have completed yet.

::: important

This is only possible on read-only computed properties – attempting to provide a setter will cause a compile error.

:::

To demonstrate this, we could create a `RemoteFile` struct that stores a URL and a type that conforms to `Decodable`. This struct won’t actually fetch the URL when the struct is created, but will instead dynamically fetch the content’s of the URL every time the property is requested so that we can update our UI dynamically.

::: tip

If you use `URLSession.shared` to fetch your data it will automatically be cached, so we’re going to create a custom URL session that always ignores local and remote caches to make sure our remote file is always fetched.

:::

Here’s the code:

```swift
extension URLSession {
    static let noCacheSession: URLSession = {
        let config = URLSessionConfiguration.default
        config.requestCachePolicy = .reloadIgnoringLocalAndRemoteCacheData
        return URLSession(configuration: config)
    }()
}

// Now our struct that will fetch and decode a URL every
// time we read its `contents` property
struct RemoteFile<T: Decodable> {
    let url: URL
    let type: T.Type

    var contents: T {
        get async throws {
            let (data, _) = try await URLSession.noCacheSession.data(from: url)
            return try JSONDecoder().decode(T.self, from: data)
        }
    }
}
```

So, we’re fetching the URL’s contents every time `contents` is accessed, as opposed to storing the URL’s contents when a `RemoteFile` instance is created. As a result, the property is marked both `async` and `throws` so that callers must use `await` or similar when accessing it.

To try that out with some real SwiftUI code, we could write a view that fetches messages. We don’t ever want stale data, so we’re going to point our `RemoteFile` struct at a particular URL and tell it to expect an array of `Message` objects to come back, then let it take care of fetching and decoding those while also bypassing the `URLSession` ache:

```swift
// First, a URLSession instance that never uses caches
extension URLSession {
    static let noCacheSession: URLSession = {
        let config = URLSessionConfiguration.default
        config.requestCachePolicy = .reloadIgnoringLocalAndRemoteCacheData
        return URLSession(configuration: config)
    }()
}

// Now our struct that will fetch and decode a URL every
// time we read its `contents` property
struct RemoteFile<T: Decodable> {
    let url: URL
    let type: T.Type

    var contents: T {
        get async throws {
            let (data, _) = try await URLSession.noCacheSession.data(from: url)
            return try JSONDecoder().decode(T.self, from: data)
        }
    }
}

struct Message: Decodable, Identifiable {
    let id: Int
    let user: String
    let text: String
}

struct ContentView: View {
    let source = RemoteFile(url: URL(string: "https://hws.dev/inbox.json")!, type: [Message].self)
    @State private var messages = [Message]()

    var body: some View {
        NavigationView {
            List(messages) { message in
                VStack(alignment: .leading) {
                    Text(message.user)
                        .font(.headline)
                    Text(message.text)
                }
            }
            .navigationTitle("Inbox")
            .toolbar {
                Button(action: refresh) {
                    Label("Refresh", systemImage: "arrow.clockwise")
                }
            }
            .onAppear(perform: refresh)
        }
    }

    func refresh() {
        Task {
            do {
                // Access the property asynchronously
                messages = try await source.contents
            } catch {
                print("Message update failed.")
            }
        }
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-create-and-use-async-properties-1.zip)

That call to `source.contents` is where the real action happens – it’s a property, yes, but it must also be accessed asynchronously so that it can do its work of fetching and decoding without blocking the UI.

::: details Similar solutions…

```component VPCard
{
  "title": "How to call an async function using async let | Swift Concurrency by Example",
  "desc": "How to call an async function using async let",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-call-an-async-function-using-async-let.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Why can’t we call async functions using async var? | Swift Concurrency by Example",
  "desc": "Why can’t we call async functions using async var?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/why-cant-we-call-async-functions-using-async-var.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What calls the first async function? | Swift Concurrency by Example",
  "desc": "What calls the first async function?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/what-calls-the-first-async-function.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to create and call an async function | Swift Concurrency by Example",
  "desc": "How to create and call an async function",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-create-and-call-an-async-function.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "How to fix the error “async call in a function that does not support concurrency” | Swift Concurrency by Example",
  "desc": "How to fix the error “async call in a function that does not support concurrency”",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-fix-the-error-async-call-in-a-function-that-does-not-support-concurrency.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />