---
lang: ko-KR
title: Raw strings
description: Article(s) > Raw strings
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
      content: Article(s) > Raw strings
    - property: og:description
      content: Raw strings
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/5.0/raw-strings.html
prev: /explore/articles/hackingwithswift.com/swift/5.1/creating-uninitialized-arrays.md
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
  "title": "Raw strings | Changes in Swift 5.0",
  "desc": "Raw strings",
  "link": "https://hackingwithswift.com/swift/5.0/raw-strings", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 5.0

[SE-0200 (<FontIcon icon="iconfont icon-github"/>`apple/swift-evolution`)](https://github.com/apple/swift-evolution/blob/master/proposals/0200-raw-string-escaping.md) added the ability to create raw strings, where backslashes and quote marks are interpreted as those literal symbols rather than escapes characters or string terminators. This makes a number of use cases more easy, but regular expressions in particular will benefit.

To use raw strings, place one or more `#` symbols before your strings, like this:

```swift
let rain = #"The "rain" in "Spain" falls mainly on the Spaniards."#
```

The `#` symbols at the start and end of the string become part of the string delimiter, so Swift understands that the standalone quote marks around “rain” and “Spain” should be treated as literal quote marks rather than ending the string.

Raw strings allow you to use backslashes too:

```swift
let keypaths = #"Swift keypaths such as \Person.name hold uninvoked references to properties."#
```

That treats the backslash as being a literal character in the string, rather than an escape character. This in turn means that string interpolation works differently:

```swift
let answer = 42
let dontpanic = #"The answer to life, the universe, and everything is \#(answer)."#
```

Notice how I’ve used `\#(answer)` to use string interpolation – a regular `\(answer)` will be interpreted as characters in the string, so when you want string interpolation to happen in a raw string you must add the extra `#`.

One of the interesting features of Swift’s raw strings is the use of hash symbols at the start and end, because you can use more than one in the unlikely event you’ll need to. It’s hard to provide a good example here because it really ought to be extremely rare, but consider this string: <strong>My dog said "woof"#gooddog</strong>. Because there’s no space before the hash, Swift will see `"#` and immediately interpret it as the string terminator. In this situation we need to change our delimiter from `#"` to `##"`, like this:

```swift
let str = ##"My dog said "woof"#gooddog"##
```

Notice how the number of hashes at the end must match the number at the start.

Raw strings are fully compatible with Swift’s multi-line string system – just use `#"""` to start, then `"""#` to end, like this:

```swift
let multiline = #"""
The answer to life,
the universe,
and everything is \#(answer).
"""#
```

Being able to do without lots of backslashes will prove particularly useful in regular expressions. For example, writing a simple regex to find keypaths such as `\Person.name` used to look like this:

```swift
let regex1 = "\\\\[A-Z]+[A-Za-z]+\\.[a-z]+"
```

Thanks to raw strings we can write the same thing with half the number of backslashes:

```swift
let regex2 = #"\\[A-Z]+[A-Za-z]+\.[a-z]+"#
```

We still need *some*, because regular expressions use them too.

::: details Other Changes in Swift 5.0
<!-- 
```component VPCard
{
  "title": "Raw strings | Changes in Swift 5.0",
  "desc": "Raw strings",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/raw-strings.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```
-->
```component VPCard
{
  "title": "A standard Result type | Changes in Swift 5.0",
  "desc": "A standard Result type",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/result.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Customizing string interpolation | Changes in Swift 5.0",
  "desc": "Customizing string interpolation",
  "link": "/explore/articles/hackingwithswift.com/swift/5.0/string-interpolation.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

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