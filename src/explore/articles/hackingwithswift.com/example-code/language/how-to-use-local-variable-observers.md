---
lang: ko-KR
title: "How to use local variable observers"
description: "Article(s) > How to use local variable observers"
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
      content: "Article(s) > How to use local variable observers"
    - property: og:description
      content: "How to use local variable observers"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-use-local-variable-observers.html
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
  "title": "How to use local variable observers | Language - free Swift example code",
  "desc": "How to use local variable observers",
  "link": "https://hackingwithswift.com/example-code/language/how-to-use-local-variable-observers",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
You should already be familiar with the concept of property observers in Swift – those `willSet` and `didSet` blocks you can attach to property on classes and structs. Well, those same blocks can be attached to local and global variables as well, allowing you to respond to changes easily.

The syntax is identical: create your variable, give it an initial value, then provide `willSet` and/or `didSet` closures inside braces, like this:

```swift
var name = "Taylor Swift" {
    didSet {
        print("Name changed to \(name)!")
    }
}

name = "Justin Bieber"
```

That will print “Name changed to Justin Bieber!” when run.

-->

::: details Similar solutions…

<!--
/example-code/language/whats-the-difference-between-a-static-variable-and-a-class-variable">What’s the difference between a static variable and a class variable? 
/quick-start/concurrency/how-to-create-and-use-task-local-values">How to create and use task local values 
/example-code/language/what-are-property-observers">What are property observers? 
/example-code/system/how-to-set-local-alerts-using-unnotificationcenter">How to set local alerts using UNNotificationCenter 
/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject?</a>
-->

:::

---

<TagLinks />