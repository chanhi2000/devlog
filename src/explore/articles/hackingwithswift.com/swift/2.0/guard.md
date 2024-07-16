---
lang: ko-KR
title: Use the guard keyword for early returns
description: Article(s) > Use the guard keyword for early returns
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
      content: Article(s) > Use the guard keyword for early returns
    - property: og:description
      content: Use the guard keyword for early returns
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/2.0/guard.html
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
  "title": "Use the guard keyword for early returns | Changes in Swift 2.0",
  "desc": "Use the guard keyword for early returns",
  "link": "https://hackingwithswift.com/swift/2.0/guard", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 2.0

It's very common to place some conditional checks at the start of a method to ensure that various data is configured ready to go. For example, if a Submit button is tapped, you might want to check that the user has entered a username in your user interface. To do this, you'd use this code:

```swift
func submitTapped() {
    guard username.text.characters.count > 0 else {
        return
    }

    print("All good")
}
```

Using `guard` might not seem much different to using `if`, but with `guard` your intention is clearer: execution should not continue if your conditions are not met. Plus it has the advantage of being shorter and more readable, so `guard` is a real improvement, and I'm sure it will be adopted quickly.

There is one bonus to using `guard` that might make it even more useful to you: if you use it to unwrap any optionals, those unwrapped values stay around for you to use in the rest of your code block. For example:

```swift
guard let unwrappedName = userName else {
    return
}

print("Your username is \(unwrappedName)")
```

This is in comparison to a straight `if` statement, where the unwrapped value would be available only inside the `if` block, like this:

```swift
if let unwrappedName = userName {
    print("Your username is \(unwrappedName)")
} else {
    return
}

// this won't work – unwrappedName doesn't exist here!
print("Your username is \(unwrappedName)")
```

::: details Other changes in Swift 2.0…

```component VPCard
{
  "title": "Throwing errors | Changes in Swift 2.0",
  "desc": "Throwing errors",
  "link": "/explore/articles/hackingwithswift.com/swift/2.0/try.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Use the guard keyword for early returns | Changes in Swift 2.0",
  "desc": "Use the guard keyword for early returns",
  "link": "/explore/articles/hackingwithswift.com/swift/2.0/guard.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Measure strings using their character count | Changes in Swift 2.0",
  "desc": "Measure strings using their character count",
  "link": "/explore/articles/hackingwithswift.com/swift/2.0/strings.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Use the defer keyword to delay work until your scope exits | Changes in Swift 2.0",
  "desc": "Use the defer keyword to delay work until your scope exits",
  "link": "/explore/articles/hackingwithswift.com/swift/2.0/defer.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Mutability warnings | Changes in Swift 2.0",
  "desc": "Mutability warnings",
  "link": "/explore/articles/hackingwithswift.com/swift/2.0/mutability.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Checking API availability | Changes in Swift 2.0",
  "desc": "Checking API availability",
  "link": "/explore/articles/hackingwithswift.com/swift/2.0/api-availability.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 2.0 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-1-2-to-2-0.playground.zip)

:::

---

<TagLinks />