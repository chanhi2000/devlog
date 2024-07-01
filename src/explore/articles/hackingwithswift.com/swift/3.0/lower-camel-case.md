---
lang: ko-KR
title: UpperCamelCase has been replaced with lowerCamelCase for enums and properties
description: Article(s) > UpperCamelCase has been replaced with lowerCamelCase for enums and properties
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - swift
  - swift-3.0
head:
  - - meta:
    - property: og:title
      content: Article(s) > UpperCamelCase has been replaced with lowerCamelCase for enums and properties
    - property: og:description
      content: UpperCamelCase has been replaced with lowerCamelCase for enums and properties
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift/3.0/lower-camel-case.html
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
  "title": "UpperCamelCase has been replaced with lowerCamelCase for enums and properties | Changes in Swift 3.0",
  "desc": "UpperCamelCase has been replaced with lowerCamelCase for enums and properties",
  "link": "https://hackingwithswift.com/swift/3.0/lower-camel-case", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Available from Swift 3.0

Although syntactically irrelevant, the capital letters we use to name classes and structs, properties, enums, and more have always followed a convention fairly closely: classes, structs, and enums use UpperCamelCase (MyStruct, WeatherType.Cloudy), properties and parameter names use lowerCamelCase (emailAddress, requestString).

I say "fairly closely" because there are some exceptions that are going to *stop* being exceptions in Swift 3: properties and parameters that started with initials in Swift 2.2 will now used lowerCamelCase in Swift 3.

Sometimes this isn't too strange: Swift 2.2 created `NSURLRequest` objects using `NSURLRequest(URL: someURL)` – note the capital "URL". Swift 3 rewrites that to `URLRequest(url: someURL)`, and also means you'll use things like `webView.request?.url?.absoluteString` for reading the URL of a web view.

Where it's a bit more jarring is when only part of the property name is in caps, e.g. `CGColor` or `CIColor`. Yes, you've guessed it: they become `cgColor` and `ciColor` in Swift 3, so you'll be writing code like this:

```swift
let red = UIColor.red.cgColor
```

This change does help drive consistency: all properties and parameters should start with a lowercase letter, no exceptions.

At the same time enum cases are also changing, moving from UpperCamelCase to lowerCamelCase. This makes sense: an enum is a data type (like a struct), but enum values are closer to properties. However, it does mean that wherever you've used an Apple enum, it will now be lowercase. So:

```swift
UIInterfaceOrientationMask.Portrait // old
UIInterfaceOrientationMask.portrait // new

NSTextAlignment.Left // old
NSTextAlignment.left // new

SKBlendMode.Replace // old
SKBlendMode.replace // new
```

You get the idea. However, this tiny change brings something much bigger because Swift's optionals are actually just an enum under the hood, like this:

```swift
enum Optional {
    case None
    case Some(Wrapped)
}
```

This means if you use `.Some` to work with optionals, you'll need to switch to `.some` instead. Of course, you could always take this opportunity to ditch `.some` entirely – these two pieces of code are identical:

```swift
for case let .some(datum) in data {
    print(datum)
}

for case let datum? in data {
    print(datum)
}
```

::: details Changes in Swift 3.0

```component VPCard
{
  "title": "All function parameters have labels unless you request otherwise | Changes in Swift 3.0",
  "desc": "All function parameters have labels unless you request otherwise",
  "link": "/explore/articles/hackingwithswift.com/swift/3.0/function-parameters.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Omit needless words | Changes in Swift 3.0",
  "desc": "Omit needless words",
  "link": "/explore/articles/hackingwithswift.com/swift/3.0/omit-needless-words.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
<!-- 
```component VPCard
{
  "title": "UpperCamelCase has been replaced with lowerCamelCase for enums and properties | Changes in Swift 3.0",
  "desc": "UpperCamelCase has been replaced with lowerCamelCase for enums and properties",
  "link": "/explore/articles/hackingwithswift.com/swift/3.0/lower-camel-case.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```
-->
```component VPCard
{
  "title": "Swifty importing of C functions | Changes in Swift 3.0",
  "desc": "Swifty importing of C functions",
  "link": "/explore/articles/hackingwithswift.com/swift/3.0/c-functions.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Verbs and nouns | Changes in Swift 3.0",
  "desc": "Verbs and nouns",
  "link": "/explore/articles/hackingwithswift.com/swift/3.0/verbs-and-nouns.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[<FontIcon icon="fas fa-file-zipper"/>Download Swift 3.0 playground](https://hackingwithswift.com/files/playgrounds/swift/playground-2-2-to-3-0.playground.zip)

:::

---

<TagLinks />