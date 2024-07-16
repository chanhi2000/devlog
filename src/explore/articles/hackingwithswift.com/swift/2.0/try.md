---
lang: ko-KR
title: Throwing errors
description: Article(s) > Throwing errors
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
      content: Article(s) > Throwing errors
    - property: og:description
      content: Throwing errors
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/2.0/try.html
prev: /explore/articles/hackingwithswift.com/swift/2.1/string-interpolation.md
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
  "title": "Throwing errors | Changes in Swift 2.0",
  "desc": "Throwing errors",
  "link": "https://hackingwithswift.com/swift/2.0/try", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 2.0

`try/catch` is a way of programming that means "try this thing, but if it fails do this other thing instead." Swift uses enums for error types so that it can ensure your error catching is exhaustive, just like with `switch` statements. So for example, you might define your error list something like this:

```swift
enum MyError: ErrorType {
    case UserError
    case NetworkError
    case DiscoverydError
}
```

Notice how my error type builds on the built-in `ErrorType` protocol; this is required.
Once you've defined the various errors you want to work with, it's time to introduce three new keywords: `throws`, `try`, `do` and `catch`.
First up, `throws` is a simple keyword that you add to your method to tell Swift it might fail. You put it right before where you put your method's return type, like this:

```swift
func doStuff() throws -> String {
```

Once that's done, you cannot call that method unless your code is written to handle any errors it throws – Xcode simply won't compile. When you want to throw an error from inside your methods, you just write `throw` followed by the type of error you want to throw, like this:

```swift
func doStuff() throws -> String {
    print("Do stuff 1")
    print("Do stuff 2")
    throw MyError.NetworkError

    return "Some return value"
}
```

The dummy `print()` calls are there so you can follow the program flow, as you'll see in a moment.
But first, on to the next keyword: `try`. This is placed before any call to a method that throws an error, like this:

```swift
try doStuff()
```

This literally writes into your code "I acknowledge that this code might fail," so it's effectively syntactic sugar to ensure safety. But even with that your code still won't compile, because you don't catch the errors: you need to use `do` and `catch`.
Catching errors has two forms: catching specific errors and catching all errors. You can mix and match, meaning your code can say "if the error is X, I want to handle it like this; all other errors should be handled this other way."
Here's a very basic example showing how to catch all errors:

```swift
do {
    try doStuff()
    print("Success")
} catch {
    print("An error occurred.")
}
```

If you remember, we made the `doStuff()` method print "Do stuff 1" then "Do stuff 2" before throwing a network error. So, what will happen is:

- "Do stuff 1" will be printed
- "Do stuff 2" will be printed
- The NetworkError error will be thrown, immediately exiting the `doStuff()` method – its return statement will never be reached
- Control will jump to the `catch` block
- "An error occurred" will be printed

To be clear: in the code above, "Success" will never be printed – as soon as any `try` methods throw an error, execution stops and jumps to the `catch` block.
As I said, you can mix and match generic and specific `catch` blocks, but you do need to be sure that all possible errors are caught. For example, this will execute one chunk of code for NetworkError errors, and another chunk for all other errors:

```swift
do {
    try doStuff()
    print("Success")
} catch MyError.NetworkError {
    print("A network error occurred")
} catch {
    print("An error occurred")
}
```

::: details Other changes in Swift 2.0…

```component VPCard
{
  "title": "Use the guard keyword for early returns | Changes in Swift 2.0",
  "desc": "Use the guard keyword for early returns",
  "link": "/explore/articles/hackingwithswift.com/swift/2.0/guard.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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

:::

---

<TagLinks />