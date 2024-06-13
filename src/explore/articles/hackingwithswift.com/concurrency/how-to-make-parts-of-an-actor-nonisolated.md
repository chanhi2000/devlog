---
lang: ko-KR
title: How to make parts of an actor nonisolated
description: Article(s) > How to make parts of an actor nonisolated
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
      content: Article(s) > How to make parts of an actor nonisolated
    - property: og:description
      content: How to make parts of an actor nonisolated
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/how-to-make-parts-of-an-actor-nonisolated.html
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
  "title": "How to make parts of an actor nonisolated | Swift Concurrency by Example",
  "desc": "How to make parts of an actor nonisolated",
  "link": "https://hackingwithswift.com/quick-start/how-to-make-parts-of-an-actor-nonisolated", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

All methods and mutable properties inside an actor are isolated to that actor by default, which means they cannot be accessed directly from code that’s external to the actor. Access to constant properties is automatically allowed because they are inherently safe from race conditions, but if you want you can make some methods excepted by using the `nonisolated` keyword.

Actor methods that are non-isolated can access other non-isolated state, such as constant properties or other methods that are marked non-isolated. However, they *cannot* directly access *isolated state* like an isolated actor method would; they need to use `await` instead.

To demonstrate non-isolated methods, we could write a `User` actor that has three properties: two constant strings for their username and password, and a variable Boolean to track whether they are online. Because `password` is constant, we could write a non-isolated method that returns the hash of that password using CryptoKit, like this:

```swift
import CryptoKit
import Foundation

actor User {
    let username: String
    let password: String
    var isOnline = false

    init(username: String, password: String) {
        self.username = username
        self.password = password
    }

    nonisolated func passwordHash() -> String {
        let passwordData = Data(password.utf8)
        let hash = SHA256.hash(data: passwordData)
        return hash.compactMap { String(format: "%02x", $0) }.joined()
    }
}

let user = User(username: "twostraws", password: "s3kr1t")
print(user.passwordHash())
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-make-parts-of-an-actor-nonisolated-1.zip)

I’d like to pick out a handful of things in that code:

1. Marking `passwordHash()` as `nonisolated` means that we can call it externally without using `await`.
2. We can also use `nonisolated` with computed properties, which in the previous example would have made `nonisolated var passwordHash: String`. Stored properties may not be non-isolated.
3. Non-isolated properties and methods can access only other non-isolated properties and methods, which in our case is a constant property. Swift will not let you ignore this rule.

Non-isolated methods are particularly useful when dealing with protocol conformances such as `Hashable` and `Codable`, where we must implement methods to be run from outside the actor. 

For example, if we wanted to make our `User` actor conform to `Codable`, we’d need to implement `encode(to:)` ourselves as a non-isolated method like this:

```swift
actor User: Codable {
    enum CodingKeys: CodingKey {
        case username, password
    }

    let username: String
    let password: String
    var isOnline = false

    init(username: String, password: String) {
        self.username = username
        self.password = password
    }

    nonisolated func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(username, forKey: .username)
        try container.encode(password, forKey: .password)
    }
}

let user = User(username: "twostraws", password: "s3kr1t")

if let encoded = try? JSONEncoder().encode(user) {
    let json = String(decoding: encoded, as: UTF8.self)
    print(json)
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-make-parts-of-an-actor-nonisolated-2.zip)

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

```component VPCard
{
  "title": "How to use @MainActor to run code on the main queue | Swift Concurrency by Example",
  "desc": "How to use @MainActor to run code on the main queue",
  "link": "/explore/articles/hackingwithswift.com/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

:::

---

<TagLinks />