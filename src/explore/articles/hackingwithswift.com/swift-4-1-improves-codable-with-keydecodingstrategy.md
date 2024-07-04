---
lang: ko-KR
title: "Swift 4.1 improves Codable with keyDecodingStrategy"
description: Snake case is now just a few keystrokes away.
icon: fa-brands fa-swift
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - ios
  - xcode
head:
  - - meta:
    - property: og:title
      content:  Swift 4.1 improves Codable with keyDecodingStrategy
    - property: og:description
      content: Snake case is now just a few keystrokes away.
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swift-4-1-improves-codable-with-keydecodingstrategy.html
prev: /programming/swift/articles/README.md
date: 2018-02-05
isOriginal: false
cover: https://hackingwithswift.com/uploads/swift-evolution-5.jpg
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Swift > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/swift/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Swift 4.1 improves Codable with keyDecodingStrategy – Hacking with Swift"
  desc="Snake case is now just a few keystrokes away."
  url="https://hackingwithswift.com/articles/52/swift-4-1-improves-codable-with-keydecodingstrategy"
  logo="https://hackingwithswift.com/favicon.svg"
  preview="https://hackingwithswift.com/uploads/swift-evolution-5.jpg"/>

![](https://hackingwithswift.com/uploads/swift-evolution-5.jpg)

Swift 4.0 [brought many great new features](/explore/articles/hackingwithswift.com/swift4.md), including multi-line strings, better keypaths, and lots of improved dictionary functionality. But it also gave us `Codable` for the first time: by far the easiest, safest way to convert Swift objects into JSON and XML.

However, `Codable` had one particular annoyance that hit most users: if your JSON used snake_case for its key names and your Swift code used camelCase for its property names, `Codable` wouldn’t be able to convert between the two – you needed to create your own `CodingKeys` mapping to explain how the two matched up.

Well, Swift 4.1 has fixed this beautifully: along with [awesome new features of its own](/explore/articles/hackingwithswift.com/whats-new-in-swift-4-1.md) there’s a new `keyDecodingStrategy` property on `JSONDecoder` that can automatically convert between snake_case and camelCase if you need it. The inverse property, `keyEncodingStrategy`, also exists on `JSONEncoder` so you can convert your Swift camelCase names back into snake_case.

Enough chat – let’s look at a practical example. Create a new Playground and give it this JSON string:

```swift
let jsonString = """
[
    {
        "name": "MacBook Pro",
        "screen_size": 15,
        "cpu_count": 4
    },
    {
        "name": "iMac Pro",
        "screen_size": 27,
        "cpu_count": 18
    }
]
"""

let jsonData = Data(jsonString.utf8)
```

That stores an array of two items, each describing a Mac. As you can see, both `screen_size` and `cpu_count` use snake case – words are all lowercased, with underscores separating them. I’ve added a conversion to `Data` at the end, because that’s what `JSONDecoder` works with.

Now, we want to convert that JSON into an array of `Mac` instances using this struct:

```swift
struct Mac: Codable {
    var name: String
    var screenSize: Int
    var cpuCount: Int
}
```

That follows standard Swift naming conventions, so the property names are all camelCased – words have no separators, but second and subsequent words all start with a capital letter.

In Swift 4.0 you might try to decode that JSON like this:

```swift
let decoder = JSONDecoder()

do {
    let macs = try decoder.decode([Mac].self, from: jsonData)
    print(macs)
} catch {
    print(error.localizedDescription)
}
```

However, that code won’t work because `Codable` doesn’t know how to map camelCase keys to the snake_case. This is where the new `keyDecodingStrategy` property comes in: it’s set to `.useDefaultKeys` by default, which does a direct mapping of JSON names to Swift properties. However, if you change it to `.convertFromSnakeCase` then the above code works immediately because `Codable` handles the name conversion for us.

So, add this line just before the start of the `do` block:

```swift
decoder.keyDecodingStrategy = .convertFromSnakeCase
```

When you want to go back the other way – to convert a `Codable` struct with camelCase properties back to JSON with snake_case keys, set the `keyEncodingStrategy` to `.convertToSnakeCase` like this:

```swift
let encoder = JSONEncoder()
encoder.keyEncodingStrategy = .convertToSnakeCase
let encoded = try encoder.encode(macs)
```

If you have more advanced uses – perhaps you prefer SCREAMING_SNAKE_CASE for some reason? – you can also specify a custom key strategy, but [looking at the tests for that (<FontIcon icon="iconfont icon-github"/>`apple/swift`)](https://github.com/apple/swift/blob/77e417f1d043b888a83652471b53cedb952fd655/test/stdlib/TestJSONEncoder.swift#L597) it seems a rather involved thing to do, at least for now.

For more on the new features in Swift 4.1, see our article [what's new in Swift 4.1](/explore/articles/hackingwithswift.com/whats-new-in-swift-4-1.md).

---

<TagLinks />