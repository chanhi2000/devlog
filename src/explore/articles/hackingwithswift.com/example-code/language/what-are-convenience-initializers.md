---
lang: ko-KR
title: "What are convenience initializers?"
description: "Article(s) > What are convenience initializers?"
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
      content: "Article(s) > What are convenience initializers?"
    - property: og:description
      content: "What are convenience initializers?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-are-convenience-initializers.html
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
  "title": "What are convenience initializers? | Language - free Swift example code",
  "desc": "What are convenience initializers?",
  "link": "https://hackingwithswift.com/example-code/language/what-are-convenience-initializers",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Designated initializers are the default way of creating new instances of a type. There are others, known as convenience initializers, that are there to help you accomplish common tasks more easily, but those are in addition to your designated initializers rather than a replacement.

For example, you might have a `Polygon` class that stores sets of points to be drawn later on, like this:

```swift
class Polygon {
    var points: [CGPoint]

    init(points: [CGPoint]) {
        self.points = points
    }
}
```

Now, if that were just a struct you could go ahead and add other initializers. But as it’s a *class* – where the rules for initialization are quite complex – you could add a convenience initializer that sets up squares of a specific length, like this:

```swift
convenience init(squareWithLength length: CGFloat) {
    let points = [
        CGPoint(x: 0, y: 0),
        CGPoint(x: length, y: 0),
        CGPoint(x: length, y: length),
        CGPoint(x: 0, y: length),
    ]

    self.init(points: points)
}
```

Note how the convenience initializer ends by calling the designated initializer – this is a requirement, and means that your convenience initializers are only responsible for setting up the parts that are unique to them rather than doing everything.

-->

::: details Similar solutions…

<!--
/example-code/language/what-are-designated-initializers">What are designated initializers? 
/example-code/language/fixing-class-viewcontroller-has-no-initializers">Fixing "Class ViewController has no initializers" 
/example-code/uicolor/how-to-convert-a-html-name-string-into-a-uicolor">How to convert a HTML name string into a UIColor 
/quick-start/concurrency/what-is-an-actor-and-why-does-swift-have-them">What is an actor and why does Swift have them? 
/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject?</a>
-->

:::

---

<TagLinks />