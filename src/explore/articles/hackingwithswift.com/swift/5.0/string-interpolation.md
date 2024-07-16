---
lang: ko-KR
title: Customizing string interpolation
description: Article(s) > Customizing string interpolation
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
      content: Article(s) > Customizing string interpolation
    - property: og:description
      content: Customizing string interpolation
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.0/string-interpolation.html
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
  "title": "Customizing string interpolation | Changes in Swift 5.0",
  "desc": "Customizing string interpolation",
  "link": "https://hackingwithswift.com/swift/5.0/string-interpolation", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.0

[SE-0228 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0228-fix-expressiblebystringinterpolation.md) dramatically revamped Swift’s string interpolation system so that it’s more efficient and more flexible, and it’s creating a whole new range of features that were previously impossible.

In its most basic form, the new string interpolation system lets us control how objects appear in strings. Swift has default behavior for structs that is helpful for debugging, because it prints the struct name followed by all its properties. But if you were working with classes (that don’t have this behavior), or wanted to format that output so it could be user-facing, then you could use the new string interpolation system.

For example, if we had a struct like this:

```swift
struct User {
    var name: String
    var age: Int
}
```

If we wanted to add a special string interpolation for that so that we printed users neatly, we would add an extension to `String.StringInterpolation` with a new `appendInterpolation()` method. Swift already has several of these built in, and uses the interpolation *type* – in this case `User` to figure out which method to call.

In this case, we’re going to add an implementation that puts the user’s name and age into a single string, then calls one of the built-in `appendInterpolation()` methods to add that to our string, like this:

```swift
extension String.StringInterpolation {
    mutating func appendInterpolation(_ value: User) {
        appendInterpolation("My name is \(value.name) and I'm \(value.age)")
    }
}
```

Now we can create a user and print out their data:

```swift
let user = User(name: "Guybrush Threepwood", age: 33)
print("User details: \(user)")
```

That will print <strong>User details: My name is Guybrush Threepwood and I'm 33</strong>, whereas with the custom string interpolation it would have printed <strong>User details: User(name: "Guybrush Threepwood", age: 33)</strong>. Of course, that functionality is no different from just implementing the `CustomStringConvertible` protocol, so let’s move on to more advanced usages.

Your custom interpolation method can take as many parameters as you need, labeled or unlabeled. For example, we could add an interpolation to print numbers using various styles, like this:

```swift
extension String.StringInterpolation {
    mutating func appendInterpolation(_ number: Int, style: NumberFormatter.Style) {
        let formatter = NumberFormatter()
        formatter.numberStyle = style

        if let result = formatter.string(from: number as NSNumber) {
            appendLiteral(result)
        }
    }
}
```

The `NumberFormatter` class has a number of styles, including currency ($72.83), ordinal (1st, 12th), and spell out (five, forty-three). So, we could create a random number and have it spelled out into a string like this:

```swift
let number = Int.random(in: 0...100)
let lucky = "The lucky number this week is \(number, style: .spellOut)."
print(lucky)
```

You can call `appendLiteral()` as many times as you need, or even not at all if necessary. For example, we could add a string interpolation to repeat a string multiple times, like this:

```swift
extension String.StringInterpolation {
    mutating func appendInterpolation(repeat str: String, _ count: Int) {
        for _ in 0 ..< count {
            appendLiteral(str)
        }
    }
}

print("Baby shark \(repeat: "doo ", 6)")
```

And, as these are just regular methods, you can use Swift’s full range of functionality. For example, we might add an interpolation that joins an array of strings together, but if that array is empty execute a closure that returns a string instead:

```swift
extension String.StringInterpolation {
    mutating func appendInterpolation(_ values: [String], empty defaultValue: @autoclosure () -> String) {
        if values.count == 0 {
            appendLiteral(defaultValue())
        } else {
            appendLiteral(values.joined(separator: ", "))
        }
    }
}

let names = ["Harry", "Ron", "Hermione"]
print("List of students: \(names, empty: "No one").")
```

Using `@autoclosure` means that we can use simple values or call complex functions for the default value, but none of that work will be done unless `values.count` is zero.

With a combination of the `ExpressibleByStringLiteral` and `ExpressibleByStringInterpolation` protocols it’s now possible to create whole types using string interpolation, and if we add `CustomStringConvertible` we can even make those types print as strings however we want.

To make this work, we need to fulfill some specific criteria:

- Whatever type we create should conform to `ExpressibleByStringLiteral`, `ExpressibleByStringInterpolation`, and `CustomStringConvertible`. The latter is only needed if you want to customize the way the type is printed.
- *Inside* your type needs to be a nested struct called `StringInterpolation` that conforms to `StringInterpolationProtocol`.
- The nested struct needs to have an initializer that accepts two integers telling us roughly how much data it can expect.
- It also needs to implement an `appendLiteral()` method, as well as one or more `appendInterpolation()` methods.
- Your main type needs to have two initializers that allow it to be created from string literals and string interpolations.

We can put all that together into an example type that can construct HTML from various common elements. The “scratchpad” inside the nested `StringInterpolation` struct will be a string: each time a new literal or interpolation is added, we’ll append it to the string. To help you see exactly what’s going on, I’ve added some `print()` calls inside the various append methods.

Here’s the code.

```swift
struct HTMLComponent: ExpressibleByStringLiteral, ExpressibleByStringInterpolation, CustomStringConvertible {
    struct StringInterpolation: StringInterpolationProtocol {
        // start with an empty string
        var output = ""

        // allocate enough space to hold twice the amount of literal text
        init(literalCapacity: Int, interpolationCount: Int) {
            output.reserveCapacity(literalCapacity * 2)
        }

        // a hard-coded piece of text – just add it
        mutating func appendLiteral(_ literal: String) {
            print("Appending \(literal)")
            output.append(literal)
        }

        // a Twitter username – add it as a link
        mutating func appendInterpolation(twitter: String) {
            print("Appending \(twitter)")
            output.append("<a href=\"https://twitter/\(twitter)\">@\(twitter)</a>")
        }

        // an email address – add it using mailto
        mutating func appendInterpolation(email: String) {
            print("Appending \(email)")
            output.append("<a href=\"mailto:\(email)\">\(email)</a>")
        }
    }

    // the finished text for this whole component
    let description: String

    // create an instance from a literal string
    init(stringLiteral value: String) {
        description = value
    }

    // create an instance from an interpolated string
    init(stringInterpolation: StringInterpolation) {
        description = stringInterpolation.output
    }
}
```

We can now create and use an instance of `HTMLComponent` using string interpolation like this:

```swift
let text: HTMLComponent = "You should follow me on Twitter \(twitter: "twostraws"), or you can email me at \(email: "paul@hackingwithswift.com")."
print(text)
```

Thanks to the `print()` calls that were scattered inside, you’ll see exactly how the string interpolation functionality works: you’ll see “Appending You should follow me on Twitter”, “Appending twostraws”, “Appending , or you can email me at “, “Appending paul@hackingwithswift.com”, and finally “Appending .” – each part triggers a method call, and is added to our string.

::: details Other Changes in Swift 5.0

```component VPCard
{
  "title": "Raw strings | Changes in Swift 5.0",
  "desc": "Raw strings",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/raw-strings.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "A standard Result type | Changes in Swift 5.0",
  "desc": "A standard Result type",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/result.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "Customizing string interpolation | Changes in Swift 5.0",
  "desc": "Customizing string interpolation",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/string-interpolation.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "Dynamically callable types | Changes in Swift 5.0",
  "desc": "Dynamically callable types",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/dynamically-callable-types.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Handling future enum cases | Changes in Swift 5.0",
  "desc": "Handling future enum cases",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/handling-future-enum-cases.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Flattening nested optionals resulting from try? | Changes in Swift 5.0",
  "desc": "Flattening nested optionals resulting from try?",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/flattening-optionals.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Checking for integer multiples | Changes in Swift 5.0",
  "desc": "Checking for integer multiples",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/integer-multiples.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Transforming and unwrapping dictionary values with compactMapValues() | Changes in Swift 5.0",
  "desc": "Transforming and unwrapping dictionary values with compactMapValues()",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/compactmapvalues.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 5.0 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-4-2-to-5-0.playground.zip)

:::

---

<TagLinks />