---
lang: ko-KR
title: "What’s the difference between a static variable and a class variable?"
description: "Article(s) > What’s the difference between a static variable and a class variable?"
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
      content: "Article(s) > What’s the difference between a static variable and a class variable?"
    - property: og:description
      content: "What’s the difference between a static variable and a class variable?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/whats-the-difference-between-a-static-variable-and-a-class-variable.html
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
  "title": "What’s the difference between a static variable and a class variable? | Language - free Swift example code",
  "desc": "What’s the difference between a static variable and a class variable?",
  "link": "https://hackingwithswift.com/example-code/language/whats-the-difference-between-a-static-variable-and-a-class-variable",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Both the `static` and `class` keywords allow us to attach variables to a class rather than to instances of a class. For example, you might create a `Student` class with properties such as `name` and `age`, then create a static `numberOfStudents` property that is owned by the `Student` class itself rather than individual instances.

Where `static` and `class` differ is how they support inheritance: When you make a `static` property it becomes owned by the class and cannot be changed by subclasses, whereas when you use `class` it may be overridden if needed.

For example, here’s a `Person` class with one static property and one class property:

```swift
class Person {
    static var count: Int {
        return 250
    }

    class var averageAge: Double {
        return 30
    }
}
```

If we created a `Student` class by inheriting from `Person`, trying to override `count` (the static property) would fail to compile if uncommented, whereas trying to override `averageAge` (the class property) is OK:

```swift
class Student: Person {
    // THIS ISN'T ALLOWED
    // override static var count: Int {
    //    return 150
    // }

    // THIS IS ALLOWED
    override class var averageAge: Double {
        return 19.5
    }
}
```

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks 
/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode 
/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource 
/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a>
-->

:::

---

<TagLinks />