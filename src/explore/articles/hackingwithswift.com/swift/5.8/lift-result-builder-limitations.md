---
lang: ko-KR
title: Lift all limitations on variables in result builders
description: Article(s) > Lift all limitations on variables in result builders
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.8
head:
  - - meta:
    - property: og:title
      content: Article(s) > Lift all limitations on variables in result builders
    - property: og:description
      content: Lift all limitations on variables in result builders
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.8/lift-result-builder-limitations.html
prev: /explore/articles/hackingwithswift.com/swift/5.9/discarding-task-groups.md
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
  "title": "Lift all limitations on variables in result builders | Changes in Swift 5.8",
  "desc": "Lift all limitations on variables in result builders",
  "link": "https://hackingwithswift.com/swift/5.8/lift-result-builder-limitations", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.8

[SE-0373 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0373-vars-without-limits-in-result-builders.md) relaxes some of the restrictions on variables when used inside result builders, allowing us to write code that would previously have been disallowed by the compiler.

For example, in Swift 5.8 we can use lazy variables directly inside result builders, like so:

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            lazy var user = fetchUsername()
            Text("Hello, \(user).")
        }
        .padding()
    }

    func fetchUsername() -> String {
        "@twostraws"
    }
}
```

That shows the *concept*, but doesn’t provide any benefit because the lazy variable is always used – there’s no difference between using `lazy var` and `let` in that code. To see where it’s actually useful takes a longer code example, like this one:

```swift
// The user is an active subscriber, not an active subscriber, or we don't know their status yet.
enum UserState {
    case subscriber, nonsubscriber, unknown
}

// Two small pieces of information about the user
struct User {
    var id: UUID
    var username: String
}

struct SubscriberView: View {
    @State private var state = UserState.unknown

    var body: some View {
        VStack {
            lazy var user = fetchUsername()

            switch state {
            case .subscriber:
                Text("Hello, \(user.username). Here's what's new for subscribers…")
            case .nonsubscriber:
                Text("Hello, \(user.username). Here's why you should subscribe…")
                Button("Subscribe now") {
                    startSubscription(for: user)
                }
            case .unknown:
                Text("Sign up today!")
            }
        }
        .padding()
    }

    // Example function that would do complex work
    func fetchUsername() -> User {
        User(id: UUID(), username: "Anonymous")
    }

    func startSubscription(for user: User) {
        print("Starting subscription…")
    }
}
```

This approach solves problems that would appear in the alternatives:

- If we didn’t use `lazy`, then `fetchUsername()` would be called in all three cases of `state`, even when it isn’t used in one.
- If we removed `lazy` and placed the call to `fetchUsername()` *inside* the two cases then we would be duplicating code – not a massive problem with a simple one liner, but you can imagine how this would cause problems in more complex code.
- If we moved `user` out to a computed property, it would be called a second time when the user clicked the "Subscribe now" button.

This change also allows us to use property wrappers and local computed properties inside result builders, although I suspect they will be less useful. For example, this kind of code is now allowed: 

```swift
struct CounterView: View {
    var body: some View {
        @AppStorage("counter") var tapCount = 0

        Button("Count: \(tapCount)") {
            tapCount += 1
        }
    }
}
```

However, although that will cause the underlying `UserDefaults` value to change with each tap, using `@AppStorage` in this way *won’t* cause the `body` property to be reinvoked every time `tapCount` changes – our UI won’t automatically be updated to reflect the change.

::: details Other Changes in Swift 5.8
<!-- 
```component VPCard
{
  "title": "Lift all limitations on variables in result builders | Changes in Swift 5.8",
  "desc": "Lift all limitations on variables in result builders",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/lift-result-builder-limitations.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Function back deployment | Changes in Swift 5.8",
  "desc": "Function back deployment",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/function-back-deployment.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Allow implicit self for weak self captures, after self is unwrapped | Changes in Swift 5.8",
  "desc": "Allow implicit self for weak self captures, after self is unwrapped",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/implicit-self-weak-capture.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Concise magic file names | Changes in Swift 5.8",
  "desc": "Concise magic file names",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/concise-magic-file-names.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Opening existential arguments to optional parameters | Changes in Swift 5.8",
  "desc": "Opening existential arguments to optional parameters",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/opening-existential-optional.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Collection downcasts in cast patterns are now supported | Changes in Swift 5.8",
  "desc": "Collection downcasts in cast patterns are now supported",
  "link": "/explore/articles/hackingwithswift.com/swift/5.8/collection-downcasts.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.8 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-7-to-5-8.playground.zip)

:::

---

<TagLinks />