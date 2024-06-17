---
lang: ko-KR
title: Use the defer keyword to delay work until your scope exits
description: Article(s) > Use the defer keyword to delay work until your scope exits
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-2.0
head:
  - - meta:
    - property: og:title
      content: Article(s) > Use the defer keyword to delay work until your scope exits
    - property: og:description
      content: Use the defer keyword to delay work until your scope exits
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/2.0/defer.html
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "HACKING WITH SWIFT",
  "desc": "What's new in Swift?",
  "link": "/explore/articles/hackingwithswift.com/swift/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Use the defer keyword to delay work until your scope exits | Changes in Swift 2.0",
  "desc": "Use the defer keyword to delay work until your scope exits",
  "link": "https://hackingwithswift.com/swift/2.0/defer", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 2.0

Some languages have a concept of `try/finally` which lets you tell your app "no matter what happens, I want this code to be executed." Swift 2 introduced its own take on this requirement using the `defer` keyword: it means "I want this work to take place, but not just yet." In practice, this usually means the work will happen just before your method ends, but here's the cool thing: this will still happen if you throw an error.

First, a simple example:

```swift
override func viewDidLoad() {
    super.viewDidLoad()

    print("Checkpoint 1")
    doStuff()
    print("Checkpoint 4")
}

func doStuff() {
    print("Checkpoint 2")
    defer { print("Do clean up here") }
    print("Checkpoint 3")
}
```

If you run that, you'll see "Checkpoint 1", "Checkpoint 2", "Checkpoint 3", "Do clean up here", then "Checkpoint 4". So, even though the `defer` line appears before checkpoint 3, it gets executed after – it gets deferred until the method is about to end.

I put "Do clean up code here" in there because that's exactly what `defer` is good at: when you know you need to flush a cache, write out a file or whatever, and you want to make sure that code gets executed regardless of what path is taken through your method.

As I said, work you schedule with `defer` will execute no matter what route your code takes through your method, and that includes if you throw any errors. For example:

```swift
override func viewDidLoad() {
    super.viewDidLoad()

    print("Checkpoint 1")

    do {
        try doStuff()
    } catch {
        print("Error!")
    }

    print("Checkpoint 4")
}

func doStuff() throws {
    print("Checkpoint 2")
    defer { print("Do clean up here") }
    throw MyError.UserError
    print("Checkpoint 3")
}
```

As soon as `doStuff()` throws its error, the method is exited and at that point the deferred code is called.

::: details Other changes in Swift 2.0…

```component VPCard
{
  "title": "Throwing errors | Changes in Swift 2.0",
  "desc": "Throwing errors",
  "link": "/explore/articles/hackingwithswift.com/swift/2.0/try.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Use the guard keyword for early returns | Changes in Swift 2.0",
  "desc": "Use the guard keyword for early returns",
  "link": "/explore/articles/hackingwithswift.com/swift/2.0/guard.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Measure strings using their character count | Changes in Swift 2.0",
  "desc": "Measure strings using their character count",
  "link": "/explore/articles/hackingwithswift.com/swift/2.0/strings.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Mutability warnings | Changes in Swift 2.0",
  "desc": "Mutability warnings",
  "link": "/explore/articles/hackingwithswift.com/swift/2.0/mutability.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Checking API availability | Changes in Swift 2.0",
  "desc": "Checking API availability",
  "link": "/explore/articles/hackingwithswift.com/swift/2.0/api-availability.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

:::

---

<TagLinks />