---
lang: ko-KR
title: "How to add a custom initializer to a struct without losing its memberwise initializer"
description: "Article(s) > How to add a custom initializer to a struct without losing its memberwise initializer"
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
      content: "Article(s) > How to add a custom initializer to a struct without losing its memberwise initializer"
    - property: og:description
      content: "How to add a custom initializer to a struct without losing its memberwise initializer"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-add-a-custom-initializer-to-a-struct-without-losing-its-memberwise-initializer.html
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
  "title": "How to add a custom initializer to a struct without losing its memberwise initializer | Language - free Swift example code",
  "desc": "How to add a custom initializer to a struct without losing its memberwise initializer",
  "link": "https://hackingwithswift.com/example-code/language/how-to-add-a-custom-initializer-to-a-struct-without-losing-its-memberwise-initializer",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
All structs in Swift come with a default memberwise initializer, which is an initializer that accepts values for all the properties in the struct. However, as soon as you add your *own* initializer to the struct that memberwise initializer goes away, because it’s possible you’re doing special work that the default initializer isn’t aware of.

If you want to keep both the default initializer and your own custom ones, there’s a simple trick: create your initializers inside an extension rather than as part of the main struct definition.

For example:

```swift
struct Person {
    var firstName: String
    var lastName: String
}

extension Person {
    init(name: String) {
        let split = name.components(separatedBy: " ")
        firstName = split.first ?? ""
        lastName = split.last ?? ""
    }
}
```

Because my custom initializer is inside an extension, you can create instances of `Person` in two ways:

```swift
let taylor1 = Person(firstName: "Taylor", lastName: "Swift")
let taylor2 = Person(name: "Taylor Swift")
```

-->

::: details Similar solutions…

<!--
/example-code/calayer/how-to-change-a-views-anchor-point-without-moving-it">How to change a view’s anchor point without moving it 
/quick-start/swiftui/how-to-create-modifiers-for-a-uiviewrepresentable-struct">How to create modifiers for a UIViewRepresentable struct 
/example-code/language/whats-the-difference-between-a-class-and-a-struct">What’s the difference between a class and a struct? 
/example-code/language/what-is-a-nested-class-or-nested-struct">What is a nested class or nested struct? 
/example-code/system/how-to-load-and-save-a-struct-in-userdefaults-using-codable">How to load and save a struct in UserDefaults using Codable</a>
-->

:::

---

<TagLinks />