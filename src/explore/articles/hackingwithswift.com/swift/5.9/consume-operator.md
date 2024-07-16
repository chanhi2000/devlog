---
lang: ko-KR
title: "consume operator to end the lifetime of a variable binding"
description: "Article(s) > consume operator to end the lifetime of a variable binding"
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.9
head:
  - - meta:
    - property: og:title
      content: "Article(s) > consume operator to end the lifetime of a variable binding"
    - property: og:description
      content: "consume operator to end the lifetime of a variable binding"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.9/consume-operator.html
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "HACKING WITH SWIFT",
  "desc": "What's new in Swift?",
  "link": "/explore/articles/hackingwithswift.com/swift/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "consume operator to end the lifetime of a variable binding | Changes in Swift 5.9",
  "desc": "consume operator to end the lifetime of a variable binding",
  "link": "https://hackingwithswift.com/swift/5.9/consume-operator", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.9

[SE-0366 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0366-move-function.md) extends the concept of consuming values to local variables and constants of copyable types, which might benefit developers who want to avoid excess retain/release calls happening behind the scenes as their data is passed around.

In its simplest form, the `consume` operator looks like this:

```swift
struct User {
    var name: String
}

func createUser() {
    let newUser = User(name: "Anonymous")
    let userCopy = consume newUser
    print(userCopy.name)
}

createUser()
```

The important line there is the `let userCopy` line, which does two things at once:

1. It copies the value from `newUser` into `userCopy`.
2. It ends the lifetime of `newUser`, so any further attempt to access it will throw up an error.

This allows us to tell the compiler explicitly “do not allow me to use this value again,” and it will enforce the rule on our behalf.

I can see this being particularly common with the so-called black hole, `_`, where we don’t want a copy of the data but simply want to mark it as being destroyed, like this:

```swift
func consumeUser() {
    let newUser = User(name: "Anonymous")
    _ = consume newUser
}
```

In practice, though, it’s possible the most common place the `consume` operator will be used is when passing values into a function like this:

```swift
func createAndProcessUser() {
    let newUser = User(name: "Anonymous")
    process(user: consume newUser)
}

func process(user: User) {
    print("Processing \(user.name)…")
}

createAndProcessUser()
```

There are two extra things I think are particularly worth knowing about this feature.

First, Swift tracks which branches of your code have consumed values, and enforces the rules conditionally. So, in this code only one of the two possibilities consumes our `User` instance:

```swift
func greetRandomly() {
    let user = User(name: "Taylor Swift")

    if Bool.random() {
        let userCopy = consume user
        print("Hello, \(userCopy.name)")
    } else {
        print("Greetings, \(user.name)")
    }
}

greetRandomly()
```

Second, technically speaking `consume` operates on *bindings* not *values*. In practice this means if we consume using a variable, we can reinitialize the variable and use it just fine:

```swift
func createThenRecreate() {
    var user = User(name: "Roy Kent")
    _ = consume user

    user = User(name: "Jamie Tartt")
    print(user.name)
}

createThenRecreate()
```

::: details Other Changes in Swift 5.9

```component VPCard
{
  "title": "if and switch expressions | Changes in Swift 5.9",
  "desc": "if and switch expressions",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/if-switch-expressions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Value and Type Parameter Packs | Changes in Swift 5.9",
  "desc": "Value and Type Parameter Packs",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/variadic-generics.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Macros | Changes in Swift 5.9",
  "desc": "Macros",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/macros.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Noncopyable structs and enums | Changes in Swift 5.9",
  "desc": "Noncopyable structs and enums",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/noncopyable-structs-and-enums.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "consume operator to end the lifetime of a variable binding | Changes in Swift 5.9",
  "desc": "consume operator to end the lifetime of a variable binding",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/consume-operator.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Convenience Async[Throwing]Stream.makeStream methods | Changes in Swift 5.9",
  "desc": "Convenience Async[Throwing]Stream.makeStream methods",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/convenience-asyncthrowingstream-makestream.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Add sleep(for:) to Clock | Changes in Swift 5.9",
  "desc": "Add sleep(for:) to Clock",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/sleep-for-clock.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Discarding task groups | Changes in Swift 5.9",
  "desc": "Discarding task groups",
  "link": "/explore/articles/hackingwithswift.com/swift/5.9/discarding-task-groups.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.9 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-8-to-5-9.playground.zip)

:::

---

<TagLinks />