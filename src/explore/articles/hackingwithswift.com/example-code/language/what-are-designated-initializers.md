---
lang: ko-KR
title: "What are designated initializers?"
description: "Article(s) > What are designated initializers?"
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
      content: "Article(s) > What are designated initializers?"
    - property: og:description
      content: "What are designated initializers?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-are-designated-initializers.html
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
  "title": "What are designated initializers? | Language - free Swift example code",
  "desc": "What are designated initializers?",
  "link": "https://hackingwithswift.com/example-code/language/what-are-designated-initializers",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Designated initializers are the default way of creating new instances of a type. There are others, known as convenience initializers, that are there to help you accomplish common tasks more easily, but those are in addition to your designated initializers rather than a replacement.

For example, you might create a `Polygon` class that stores sets of points to be drawn later on, like this:

```swift
class Polygon {
    var points: [CGPoint]

    init(points: [CGPoint]) {
        self.points = points
    }
}
```

That initializer is your designated initializer: one that will set up all properties fully in a default way. You could add convenience initializers on top to perform certain tasks – creating squares or triangles would make sense in this scenario – but those must always end by calling a designated initializer.

-->

::: details Similar solutions…

<!--
/example-code/language/what-are-convenience-initializers">What are convenience initializers? 
/example-code/language/fixing-class-viewcontroller-has-no-initializers">Fixing "Class ViewController has no initializers" 
/example-code/uikit/how-to-fix-the-error-failed-to-instantiate-the-default-view-controller-for-uimainstoryboardfile">How to fix the error “Failed to instantiate the default view controller for UIMainStoryboardFile” 
/quick-start/concurrency/whats-the-difference-between-actors-classes-and-structs">What’s the difference between actors, classes, and structs? 
/quick-start/concurrency/what-is-an-actor-and-why-does-swift-have-them">What is an actor and why does Swift have them?</a>
-->

:::

---

<TagLinks />