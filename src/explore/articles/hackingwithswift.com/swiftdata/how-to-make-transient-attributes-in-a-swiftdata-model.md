---
lang: ko-KR
title: How to make transient attributes in a SwiftData model
description: Article(s) > How to make transient attributes in a SwiftData model
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swiftdata
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to make transient attributes in a SwiftData model
    - property: og:description
      content: How to make transient attributes in a SwiftData model
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/swiftdata/how-to-make-transient-attributes-in-a-swiftdata-model.html
date: 2023-09-30
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "SwiftData by Example",
  "desc": "Back to Home",
  "link": "/explore/articles/hackingwithswift.com/swiftdata/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to make transient attributes in a SwiftData model | SwiftData by Example",
  "desc": "How to make transient attributes in a SwiftData model",
  "link": "https://hackingwithswift.com/quick-start/swiftdata/how-to-make-transient-attributes-in-a-swiftdata-model", 
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

> Updated for Xcode 15

SwiftData automatically saves all stored property into its data storage. If you don’t want that – if you have temporary data that is needed only while your program is running – then you can mark it using the `@Transient` macro so that SwiftData treats it as ephemeral and disposable, so it won’t be saved along with the rest of your data.

For example, if you were building a game, you might want to track how many levels a player has completed in the current run so you can suggest they take a break after a while, like this:

```swift
@Model class Player {
    var name: String
    var score: Int
    @Transient var levelsPlayed = 0

    init(name: String, score: Int) {
        self.name = name
        self.score = score
    }
}
```

That starts with a default value of 0 when your app runs, and will automatically reset to 0 when the app terminates – it won’t be stored inside SwiftData.

SwiftData automatically saves only the *stored* properties of your models – any computed properties are automatically transient. For example, if we wanted to put our `Player` model into a high score table, we might add a computed property that shows both their name and score:

```swift
@Model class Player {
    var name: String
    var score: Int
    @Transient var levelsPlayed = 0

    var highScoreEntry: String {
        "\(name) scored \(score) points"
    }

    init(name: String, score: Int) {
        self.name = name
        self.score = score
    }
}
```

There are two important things to remember when working with transient properties in SwiftData:

1. Transient properties cannot be used in SwiftData query predicates because the actual data you’re working with doesn’t exist on disk. **Attempting to use a transient property will compile just fine, but crash at runtime.**
2. Transient properties must always have a default value as shown above, so that when you create a new object or when an existing one is fetched from disk, there’s always a value present.

---

<TagLinks />