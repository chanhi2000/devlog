---
lang: ko-KR
title: How to create and use an actor in Swift
description: Article(s) > How to create and use an actor in Swift
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
      content: Article(s) > How to create and use an actor in Swift
    - property: og:description
      content: How to create and use an actor in Swift
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/how-to-create-and-use-an-actor-in-swift.html
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
  "title": "How to create and use an actor in Swift | Swift Concurrency by Example",
  "desc": "How to create and use an actor in Swift",
  "link": "https://hackingwithswift.com/quick-start/how-to-create-and-use-an-actor-in-swift", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

Creating and using an actor in Swift takes two steps: create the type using `actor` rather than `class` or `struct`, then use `await` when accessing its properties or methods externally. Swift takes care of everything else for us, including ensuring that properties and methods must be accessed safely.

Let’s look at a simple example: a URL cache that remembers the data for each URL it downloads. Here’s how that would be created and used:

```swift
actor URLCache {
    private var cache = [URL: Data]()

    func data(for url: URL) async throws -> Data {
        if let cached = cache[url] {
            return cached
        }

        let (data, _) = try await URLSession.shared.data(from: url)
        cache[url] = data
        return data
    }
}

@main
struct App {
    static func main() async throws {
        let cache = URLCache()

        let url = URL(string: "https://apple.com")!
        let apple = try await cache.data(for: url)
        let dataString = String(decoding: apple, as: UTF8.self)
        print(dataString)
    }
}
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-create-and-use-an-actor-in-swift-1.zip)

I marked its internal `cache` dictionary as `private`, so the only way we can access cached data is using the `data(for:)` method. This provides some degree of safety, because we might do some sort of special work inside the method that would be bypassed by accessing the property directly.

However, the *real* protection here is that the property and method are both encapsulated inside an *actor*, which means only a single thread can use them at any given time. In practice, this avoids two problems:

1. Attempting to read from a dictionary at the same time we’re writing to it, which can cause your app to crash.
2. Two or more simultaneous requests for the same uncached URL coming in, forcing our code to fetch and store the same data repeatedly. This is a data race: whether we make two requests or one depends on the exact way our code is executed.

If we didn’t have an actor here – if we had used `class URLCache` or `struct URLCache` – then we would need to solve those two problems ourselves. It’s not *hard*, at least not in a simple way, but it’s error-prone and boring to do, so it’s great to be able to hand this work over to the Swift compiler to do for us.

However, this ease of use does come with some extra responsibility: it’s really important you keep in mind the serial queue behavior of actors, because it’s entirely possible you can create massive speed bumps in your code just because you wrote `actor` rather than `class`. Think about the URL cache we just made, for example – just by using `actor` rather than `class` when we made it, we forced it to load only a single URL at a time. If that’s what you want then you’re all set, but if not then you’ll be wondering why all its requests are handled one by one.

The canonical example of why data races are problematic – the one that is often taught in computer science degrees – is about *bank accounts*, because here data races can result in serious real-world problems. To see why, here’s an example `BankAccount` class that handles sending and receiving money:

```swift
class BankAccount {
    var balance: Decimal

    init(initialBalance: Decimal) {
        balance = initialBalance
    }

    func deposit(amount: Decimal) {
        balance = balance + amount
    }

    func transfer(amount: Decimal, to other: BankAccount) {
        // Check that we have enough money to pay
        guard balance > amount else { return }

        // Subtract it from our balance
        balance = balance - amount

        // Send it to the other account
        other.deposit(amount: amount)
    }
}

let firstAccount = BankAccount(initialBalance: 500)
let secondAccount = BankAccount(initialBalance: 0)
firstAccount.transfer(amount: 500, to: secondAccount)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-create-and-use-an-actor-in-swift-2.zip)

That’s a class, so Swift won’t do anything to stop us from accessing the same piece of data multiple times. So, what could actually happen here?

Well, in the worst case two parallel calls to `transfer()` would be called on the same `BankAccount` instance, and the following would occur:

1. The first would check whether the balance was sufficient for the transfer. It is, so the code would continue.
2. The second would also check whether the balance was sufficient for the transfer. It still is, so the code would continue.
3. The first would then subtract the amount from the balance, and deposit it in the other account.
4. The second would then subtract the amount from the balance, and deposit it in the other account.

Do you see the problem there? Well, what happens if the account we’re transferring from contains $100, and we’re asked to transfer $80 to the other account? If we follow the steps above, both calls to `transfer()` will happen in parallel and see that there was enough for the transfer to take place, then both will transfer the money across. The end result is that our check for sufficient funds wasn’t useful, and one account ends up with -$60 – something that might incur fees, or perhaps not even be allowed depending on the type of account they have.

If we switch this type to be an actor, that problem goes away. This means using `actor BankAccount` rather than `class BankAccount`, but also using `async` and `await` because we can’t directly call `deposit()` on the other bank account and instead need to post the request as a message to be executed later.

Here’s how that looks:

```swift
actor BankAccount {
    var balance: Decimal

    init(initialBalance: Decimal) {
        balance = initialBalance
    }

    func deposit(amount: Decimal) {
        balance = balance + amount
    }

    func transfer(amount: Decimal, to other: BankAccount) async {
        // Check that we have enough money to pay
        guard balance > amount else { return }

        // Subtract it from our balance
        balance = balance - amount

        // Send it to the other account
        await other.deposit(amount: amount)
    }
}

let firstAccount = BankAccount(initialBalance: 500)
let secondAccount = BankAccount(initialBalance: 0)
await firstAccount.transfer(amount: 500, to: secondAccount)
```

> [<FontIcon icon="fas fa-file-zipper"/>Download this as an Xcode project](https://hackingwithswift.com/files/projects/concurrency/how-to-create-and-use-an-actor-in-swift-3.zip)

With that change, our bank accounts can no longer fall into negative values by accident, which avoids a potentially nasty result.

In other places, actors can prevent bizarre results that ought to be impossible. For example, what would happen if our example was a basketball team rather than a bank account, and we were transferring players rather than money? Without actors we could end up in the situation where we transfer the same player twice – Team A would end up without them, and Team B would have them twice!

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
  "title": "What’s the difference between a task and a detached task? | Swift Concurrency by Example",
  "desc": "What’s the difference between a task and a detached task?",
  "link": "/explore/articles/hackingwithswift.com/concurrency/whats-the-difference-between-a-task-and-a-detached-task.md",
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

:::

---

<TagLinks />