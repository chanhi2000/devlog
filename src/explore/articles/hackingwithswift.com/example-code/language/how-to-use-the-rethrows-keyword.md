---
lang: ko-KR
title: "How to use the rethrows keyword"
description: "Article(s) > How to use the rethrows keyword"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-5.10
  - ios
  - ios-8.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to use the rethrows keyword"
    - property: og:description
      content: "How to use the rethrows keyword"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-the-rethrows-keyword.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Language - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/language/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to use the rethrows keyword | Language - free Swift example code",
  "desc": "How to use the rethrows keyword",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-the-rethrows-keyword",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
The `rethrows` keyword is used when you write a function (let’s call it A) that accepts a throwing function as a parameter (let’s call it B). If function B throws errors, then the function A becomes a throwing function too, but if function B doesn’t throw errors then neither does function A.

First, here’s a simple function that accepts a username and always throws an error because biometric authentication isn’t available:

```swift
extension String: Error { }

func authenticateBiometrically(_ user: String) throws -> Bool {
    throw "Failed"
}
```

That little `String` extension allows us to throw strings as errors, which saves a little time.

Now here’s a second function that doesn’t throw:

```swift
func authenticateByPassword(_ user: String) -> Bool {
    return true
}
```

So, biometric authentication (Touch ID, Face ID) always throws an error, and password authentication always works.

Now we want to write an authentication function that can either run biometric authentication or password authentication depending on what its given. Because one of the two possibilities can throw, we mark its parameter as throwing, like this: `method: (String) throws -> Bool`.

What we’re saying is that this function *might* be able to throw, not that it *must* throw.

Try adding this function now:

```swift
func authenticateUser(method: (String) throws -> Bool) throws {
    try method("twostraws")
    print("Success!")
}
```

We can now call that function like this:

```swift
do {
    try authenticateUser(method: authenticateByPassword)
} catch {
    print("D'oh!")
}
```

Now for the important part: we both know that `authenticateByPassword()` doesn’t throw errors, and Swift can see that too, so if we change the definition of `authenticateUser` from *throws* to *rethrows* Swift will no longer require us to use `do`/`catch` when passing it a non-throwing parameter.

Change the function to this:

```swift
func authenticateUser(method: (String) throws -> Bool) rethrows {
    try method("twostraws")
    print("Success!")
}
```

Now Xcode will give you a warning: the `catch` block later on is unreachable because `authenticateUser` will never throw errors. But if you were to call it using `authenticateBiometrically` then you *would* need the `do`/`catch` blocks – Swift is able to evaluate the flow of our code much better, which means we need to write less code.

-->

::: details Similar solutions…

<!--
/example-code/language/what-does-the-open-keyword-do">What does the open keyword do? 
/example-code/language/how-to-check-for-valid-method-input-using-the-guard-keyword">How to check for valid method input using the guard keyword 
/example-code/language/how-to-delay-execution-of-code-using-the-defer-keyword">How to delay execution of code using the defer keyword 
/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject? 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a>
-->

:::

---

<TagLinks />