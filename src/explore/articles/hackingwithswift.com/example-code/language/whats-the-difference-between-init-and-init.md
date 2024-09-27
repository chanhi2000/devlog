---
lang: ko-KR
title: "What’s the difference between init?() and init()?"
description: "Article(s) > What’s the difference between init?() and init()?"
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
      content: "Article(s) > What’s the difference between init?() and init()?"
    - property: og:description
      content: "What’s the difference between init?() and init()?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/whats-the-difference-between-init-and-init.html
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
  "title": "What’s the difference between init?() and init()? | Language - free Swift example code",
  "desc": "What’s the difference between init?() and init()?",
  "link": "https://hackingwithswift.com/example-code/language/whats-the-difference-between-init-and-init",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
It’s the job of a regular Swift initializer to create a fully fledged instance of a new type, however sometimes the data that has been provided is insufficient or incorrect, and creation can’t proceed.

For example, consider this code:

```swift
struct Person {
    var ssn: String

    init(socialSecurityNumber: String) {
        self.ssn = socialSecurityNumber
    }
}

let person = Person(socialSecurityNumber: "111-11-1111")
print(person)
```

That defines a `Person` struct that can be created using a nine-digit social security number, then creates an instance of that struct.

But what should happen here?

```swift
let person = Person(socialSecurityNumber: "FISH")
```

In that instance we’re passing an invalid social security number, so really we expect creating a `Person` to fail. 

This is where failable initializers come in: they are written as `init?()`, and can return nil rather than a value if something goes wrong during creation. For example, we could write a quick check to make sure the social security number is more or less correct like this:

```swift
struct Person {
    var ssn: String

    init?(socialSecurityNumber: String) {
        if socialSecurityNumber.count < 11 {
            return nil
        } else {
            self.ssn = socialSecurityNumber
        }
    }
}
```

Notice the initializer is now called `init?()` to reflect that it returns an optional – the process might return `nil` if the creation fails. The logic is pretty simple: if there are 11 digits we assume it’s correct, otherwise we return nil. Note: if you *really* wanted to validate that number you’d need to use a regular expression.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource 
/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a>
-->

:::

---

<TagLinks />