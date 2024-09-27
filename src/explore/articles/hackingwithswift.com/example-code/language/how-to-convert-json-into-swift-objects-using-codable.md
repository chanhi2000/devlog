---
lang: ko-KR
title: "How to convert JSON into Swift objects using Codable"
description: "Article(s) > How to convert JSON into Swift objects using Codable"
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
      content: "Article(s) > How to convert JSON into Swift objects using Codable"
    - property: og:description
      content: "How to convert JSON into Swift objects using Codable"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-convert-json-into-swift-objects-using-codable.html
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
  "title": "How to convert JSON into Swift objects using Codable | Language - free Swift example code",
  "desc": "How to convert JSON into Swift objects using Codable",
  "link": "https://hackingwithswift.com/example-code/language/how-to-convert-json-into-swift-objects-using-codable",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Swift’s `Codable` protocol makes it easy to convert JSON to native Swift structs and classes – just design data types that hold the same keys and values as your JSON, then use `JSONDecoder` to convert.

Here’s some example JSON we can work with:

```swift
let jsonString = """
[
    {
        "name": "Taylor Swift",
        "age": 26
    },
    {
        "name": "Justin Bieber",
        "age": 25
    }
]
"""

let jsonData = Data(jsonString.utf8)
```

That stores two people in an array, each with a name and an age.

We need to make a matching Swift struct that can hold those fields. The only requirement `Codable` has is that all the properties inside the struct also conform to `Codable` – in our case that’s a string and an integer, so we’re all set.

Start by adding this type:

```swift
struct Person: Codable {
    var name: String
    var age: Int
}
```

Now we can go ahead and decide the JSON data into an array of that `Person` struct. This is a throwing operation, so you need to use `try`. Here’s some example code:

```swift
let decoder = JSONDecoder()

do {
    let people = try decoder.decode([Person].self, from: jsonData)
    print(people)
} catch {
    print(error.localizedDescription)
}
```

That will result in `people` storing the two items from the JSON, except now they are parsed into Swift types so we can refer to them in a type-safe way.

-->

::: details Similar solutions…

<!--
/quick-start/concurrency/how-to-download-json-from-the-internet-and-decode-it-into-any-codable-type">How to download JSON from the internet and decode it into any Codable type 
/quick-start/concurrency/how-to-use-continuations-to-convert-completion-handlers-into-async-functions">How to use continuations to convert completion handlers into async functions 
/example-code/language/how-to-format-json-using-codable-and-pretty-printing">How to format JSON using Codable and pretty printing 
/example-code/language/how-to-sort-the-keys-of-your-json-using-codable">How to sort the keys of your JSON using Codable 
/quick-start/swiftui/observable-objects-environment-objects-and-published">Observable objects, environment objects, and @Published</a>
-->

:::

---

<TagLinks />