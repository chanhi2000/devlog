---
lang: ko-KR
title: Key path expressions as functions
description: Article(s) > Key path expressions as functions
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.2
head:
  - - meta:
    - property: og:title
      content: Article(s) > Key path expressions as functions
    - property: og:description
      content: Key path expressions as functions
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.2/keypath-expressions.html
prev: /explore/articles/hackingwithswift.com/swift/5.3/spm-improvements.md
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
  "title": "Key path expressions as functions | Changes in Swift 5.2",
  "desc": "Key path expressions as functions",
  "link": "https://hackingwithswift.com/swift/5.2/keypath-expressions", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.2

[SE-0249 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0249-key-path-literal-function-expressions.md) introduced a marvelous shortcut that allows us to use keypaths in a handful of specific circumstances.

The Evolution proposal describes this as being able to use “`\Root.value` wherever functions of `(Root) -> Value` are allowed”, but what it means is that if previously you sent a Car into a method and got back its license plate, you can now use `Car.licensePlate` instead.

This is best understood as an example, so here’s a `User` type that defines four properties:

```swift
struct User {
    let name: String
    let age: Int
    let bestFriend: String?

    var canVote: Bool {
        age >= 18
    }
}
```

We could create some instance of that struct and put them into an array, like this:

```swift
let eric = User(name: "Eric Effiong", age: 18, bestFriend: "Otis Milburn")
let maeve = User(name: "Maeve Wiley", age: 19, bestFriend: nil)
let otis = User(name: "Otis Milburn", age: 17, bestFriend: "Eric Effiong")
let users = [eric, maeve, otis]
```

Now for the important part: if you want to get an array of all the users names, you can do so by using a key path like this:

```swift
let userNames = users.map(\.name)
print(userNames)
```

Previously you would have had to write a closure to retrieve the name by hand, like this:

```swift
let oldUserNames = users.map { $0.name }
```

This same approach works elsewhere – anywhere where previously you would have received a value and passed back one of its properties, you can now use a key path instead. For example, this will return all users who can vote:

```swift
let voters = users.filter(\.canVote)
```

And this will return the best friends for all users who have one:

```swift
let bestFriends = users.compactMap(\.bestFriend)
```

::: details Other Changes in Swift 5.2
<!-- 
```component VPCard
{
  "title": "Key path expressions as functions | Changes in Swift 5.2",
  "desc": "Key path expressions as functions",
  "link": "/explore/articles/hackingwithswift.com/swift/5.2/keypath-expressions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Callable values of user-defined nominal types | Changes in Swift 5.2",
  "desc": "Callable values of user-defined nominal types",
  "link": "/explore/articles/hackingwithswift.com/swift/5.2/callasfunction.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Subscripts can now declare default arguments | Changes in Swift 5.2",
  "desc": "Subscripts can now declare default arguments",
  "link": "/explore/articles/hackingwithswift.com/swift/5.2/subscript-default-arguments.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Lazy filtering order is now reversed | Changes in Swift 5.2",
  "desc": "Lazy filtering order is now reversed",
  "link": "/explore/articles/hackingwithswift.com/swift/5.2/lazy-filtering.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "New and improved diagnostics | Changes in Swift 5.2",
  "desc": "New and improved diagnostics",
  "link": "/explore/articles/hackingwithswift.com/swift/5.2/new-diagnostics.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.2 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-1-to-5-2.playground.zip)

:::

---

<TagLinks />