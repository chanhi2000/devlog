---
lang: ko-KR
title: Flattening nested optionals resulting from try?
description: Article(s) > Flattening nested optionals resulting from try?
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.0
head:
  - - meta:
    - property: og:title
      content: Article(s) > Flattening nested optionals resulting from try?
    - property: og:description
      content: Flattening nested optionals resulting from try?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.0/flattening-optionals.html
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
  "title": "Flattening nested optionals resulting from try? | Changes in Swift 5.0",
  "desc": "Flattening nested optionals resulting from try?",
  "link": "https://hackingwithswift.com/swift/5.0/flattening-optionals", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.0

[SE-0230 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0230-flatten-optional-try.md) modifies the way `try?` works so that nested optionals are flattened to become regular optionals. This makes it work the same way as optional chaining and conditional typecasts, both of which flatten optionals in earlier Swift versions.

Here’s a practical example that demonstrates the change:

```swift
struct User {
    var id: Int

    init?(id: Int) {
        if id < 1 {
            return nil
        }

        self.id = id
    }

    func getMessages() throws -> String {
        // complicated code here
        return "No messages"
    }
}

let user = User(id: 1)
let messages = try? user?.getMessages()
```

The `User` struct has a failable initializer, because we want to make sure folks create users with a valid ID. The `getMessages()` method would in theory contain some sort of complicated code to get a list of all the messages for the user, so it’s marked as `throws`; I’ve made it return a fixed string so the code compiles.

The key line is the last one: because the user is optional it uses optional chaining, and because `getMessages()` can throw it uses `try?` to convert the throwing method into an optional, so we end up with a nested optional. In Swift 4.2 and earlier this would make `messages` a `String??` – an optional optional string – but in Swift 5.0 and later `try?` won’t wrap values in an optional if they are already optional, so `messages` will just be a `String?`.

This new behavior matches the existing behavior of optional chaining and conditional typecasting. That is, you could use optional chaining a dozen times in a single line of code if you wanted, but you wouldn’t end up with 12 nested optionals. Similarly, if you used optional chaining with `as?`, you would still end up with only one level of optionality, because that’s usually what you want.

::: details Other Changes in Swift 5.0

```component VPCard
{
  "title": "Raw strings | Changes in Swift 5.0",
  "desc": "Raw strings",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/raw-strings.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "A standard Result type | Changes in Swift 5.0",
  "desc": "A standard Result type",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/result.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Customizing string interpolation | Changes in Swift 5.0",
  "desc": "Customizing string interpolation",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/string-interpolation.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Dynamically callable types | Changes in Swift 5.0",
  "desc": "Dynamically callable types",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/dynamically-callable-types.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Handling future enum cases | Changes in Swift 5.0",
  "desc": "Handling future enum cases",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/handling-future-enum-cases.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Flattening nested optionals resulting from try? | Changes in Swift 5.0",
  "desc": "Flattening nested optionals resulting from try?",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/flattening-optionals.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
```component VPCard
{
  "title": "Checking for integer multiples | Changes in Swift 5.0",
  "desc": "Checking for integer multiples",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/integer-multiples.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Transforming and unwrapping dictionary values with compactMapValues() | Changes in Swift 5.0",
  "desc": "Transforming and unwrapping dictionary values with compactMapValues()",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/compactmapvalues.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.0 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-4-2-to-5-0.playground.zip)

:::

---

<TagLinks />