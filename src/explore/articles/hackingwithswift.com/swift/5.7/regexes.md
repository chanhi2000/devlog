---
lang: ko-KR
title: Regular expressions
description: Article(s) > Regular expressions
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-5.7
head:
  - - meta:
    - property: og:title
      content: Article(s) > Regular expressions
    - property: og:description
      content: Regular expressions
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.7/regexes.html
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
  "title": "Regular expressions | Changes in Swift 5.7",
  "desc": "Regular expressions",
  "link": "https://hackingwithswift.com/swift/5.7/regexes", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.7

Swift 5.7 introduces a whole raft of improvements relating to regular expressions (regexes), and in doing so dramatically improves the way we process strings. This is actually a whole chain of interlinked proposals, including

- [SE-0350 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0350-regex-type-overview.md) introduces a new `Regex` type
- [SE-0351 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0351-regex-builder.md) introduces a result builder-powered DSL for creating regular expressions.
- [SE-0354 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0354-regex-literals.md) adds the ability co create a regular expression using `/.../` rather than going through `Regex` and a string.
- [SE-0357 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/main/proposals/0357-regex-string-processing-algorithms.md) adds many new string processing algorithms based on regular expressions.

Put together this is pretty revolutionary for strings in Swift, which have often been quite a sore point when compared to other languages and platforms. 

To see what’s changing, let’s start simple and work our way up.

First, we can now draw on a whole bunch of new string methods, like so:

```swift
let message = "the cat sat on the mat"
print(message.ranges(of: "at"))
print(message.replacing("cat", with: "dog"))
print(message.trimmingPrefix("the "))
```

But the real power of these is that they all accept regular expressions too:

```swift
print(message.ranges(of: /[a-z]at/))
print(message.replacing(/[a-m]at/, with: "dog"))
print(message.trimmingPrefix(/The/.ignoresCase()))
```

In case you’re not familiar with regular expressions:

- In that first regular expression we’re asking for the range of all substrings that match any lowercase alphabetic letter followed by “at”, so that would find the locations of “cat”, “sat”, and “mat”.
- In the second one we’re matching the range “a” through “m” only, so it will print “the dog sat on the dog”.
- In the third one we’re looking for “The”, but I’ve modified the regex to be case insensitive so that it matches “the”, “THE”, and so on.

Notice how each of those regexes are made using *regex literals* – the ability to create a regular expression by starting and ending your regex with a `/`.

Along with regex literals, Swift provides a dedicated `Regex` type that works similarly:

```swift
do {
    let atSearch = try Regex("[a-z]at")
    print(message.ranges(of: atSearch))
} catch {
    print("Failed to create regex")
}
```

However, there’s a key difference that has significant side effects for our code: when we create a regular expression from a string using `Regex`, Swift must parse the string at runtime to figure out the actual expression it should use. In comparison, using regex literals allows Swift to check your regex *at compile time*: it can validate the regex contains no errors, and also understand exactly what matches it will contain.

::: note This bears repeating, because it’s quite remarkable

Swift parses your regular expressions at compile time, making sure they are valid – this is, for me at least, the coding equivalent of the head explode emoji.

:::

To see how powerful this difference is, consider this code:

```swift
let search1 = /My name is (.+?) and I'm (\d+) years old./
let greeting1 = "My name is Taylor and I'm 26 years old."

if let result = try? search1.wholeMatch(in: greeting1) {
    print("Name: \(result.1)")
    print("Age: \(result.2)")
}
```

That creates a regex looking for two particular values in some text, and if it finds them both prints them. But notice how the `result` tuple can reference its matches as `.1` and `.2`, because Swift knows exactly which matches will occur. (In case you were wondering, `.0` will return the whole matched string.)

In fact, we can go even further because regular expressions allow us to name our matches, and these flow through to the resulting tuple of matches:

```swift
let search2 = /My name is (?<name>.+?) and I'm (?<age>\d+) years old./
let greeting2 = "My name is Taylor and I'm 26 years old."

if let result = try? search2.wholeMatch(in: greeting2) {
    print("Name: \(result.name)")
    print("Age: \(result.age)")
}
```

This kind of safety just wouldn’t be possible with regexes created from strings.

But Swift goes one step further: you can create regular expressions from strings, you can create them from regex literals, but you can also create them from a domain-specific language similar to SwiftUI code.

For example, if we wanted to match the same “My name is Taylor and I’m 26 years old” text, we could write a regex like this:

```swift
import RegexBuilder

let search3 = Regex {
    "My name is "

    Capture {
        OneOrMore(.word)
    }

    " and I'm "

    Capture {
        OneOrMore(.digit)
    }

    " years old."
}
```

Even better, this DSL approach is able to apply transformations to the matches it finds, and if we use `TryCapture` rather than `Capture` then Swift will automatically consider the whole regex not to match if the capture fails or throws an error. So, in the case of our age matching we could write this to convert the age string into an integer:

```swift
let search4 = Regex {
    "My name is "

    Capture {
        OneOrMore(.word)
    }

    " and I'm "

    TryCapture {
        OneOrMore(.digit)
    } transform: { match in
        Int(match)
    }

    " years old."
}
```

And you can even bring together named matches using variables with specific types like this:

```swift
let nameRef = Reference(Substring.self)
let ageRef = Reference(Int.self)

let search5 = Regex {
    "My name is "

    Capture(as: nameRef) {
        OneOrMore(.word)
    }

    " and I'm "

    TryCapture(as: ageRef) {
        OneOrMore(.digit)
    } transform: { match in
        Int(match)
    }

    " years old."
}

if let result = greeting1.firstMatch(of: search5) {
    print("Name: \(result[nameRef])")
    print("Age: \(result[ageRef])")
}
```

Of the three options, I suspect the regex literals will get the most use because it’s the most natural, but helpfully Xcode has the ability to convert regex literals into the RegexBuilder syntax.

::: details Other Changes in Swift 5.7

```component VPCard
{
  "title": "if let shorthand for unwrapping optionals | Changes in Swift 5.7",
  "desc": "if let shorthand for unwrapping optionals",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/if-let-shorthand.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Multi-statement closure type inference | Changes in Swift 5.7",
  "desc": "Multi-statement closure type inference",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/multi-statement-inference.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Clock, Instant, and Duration | Changes in Swift 5.7",
  "desc": "Clock, Instant, and Duration",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/clock.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Regular expressions | Changes in Swift 5.7",
  "desc": "Regular expressions",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/regexes.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Type inference from default expressions | Changes in Swift 5.7",
  "desc": "Type inference from default expressions",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/default-type-inference.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Concurrency in top-level code | Changes in Swift 5.7",
  "desc": "Concurrency in top-level code",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/top-level-concurrency.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Opaque parameter declarations | Changes in Swift 5.7",
  "desc": "Opaque parameter declarations",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/opaque-parameter-declarations.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Structural opaque result types | Changes in Swift 5.7",
  "desc": "Structural opaque result types",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/structural-opaque-result-types.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Unlock existentials for all protocols | Changes in Swift 5.7",
  "desc": "Unlock existentials for all protocols",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/unlock-existentials.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Lightweight same-type requirements for primary associated types | Changes in Swift 5.7",
  "desc": "Lightweight same-type requirements for primary associated types",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/primary-associated-types.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Constrained existential types | Changes in Swift 5.7",
  "desc": "Constrained existential types",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/constrained-existentials.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Distributed actor isolation | Changes in Swift 5.7",
  "desc": "Distributed actor isolation",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/distributed-actors.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "buildPartialBlock for result builders | Changes in Swift 5.7",
  "desc": "buildPartialBlock for result builders",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/buildpartialblock.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Implicitly opened existentials | Changes in Swift 5.7",
  "desc": "Implicitly opened existentials",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/implicitly-opened-existentials.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Unavailable from async attribute | Changes in Swift 5.7",
  "desc": "Unavailable from async attribute",
  "link": "/explore/articles/hackingwithswift.com/swift/5.7/noasync.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.7 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-5-6-to-5-7.playground.zip)

:::

---

<TagLinks />