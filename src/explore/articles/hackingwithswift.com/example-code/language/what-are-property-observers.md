---
lang: ko-KR
title: "What are property observers?"
description: "Article(s) > What are property observers?"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > What are property observers?"
    - property: og:description
      content: "What are property observers?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-are-property-observers.html
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
  "title": "What are property observers? | Language - free Swift example code",
  "desc": "What are property observers?",
  "link": "https://hackingwithswift.com/example-code/language/what-are-property-observers",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
Property observers are Swift's way of letting you attach functionality to changes in property values. For example, you might want to say, "whenever the player's score changes, update this label to show their new score." Here's a basic example that prints message to the debug console when a variable changes:

```swift
var score = 0 {
    willSet {
        print("Score is about to change to \(newValue)")
    }

    didSet {
        print("Score just changed from \(oldValue) to \(score)")
    }
}

score = 10
```

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-use-local-variable-observers">How to use local variable observers 
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/quick-start/swiftui/understanding-property-wrappers-in-swift-and-swiftui">Understanding property wrappers in Swift and SwiftUI 
/quick-start/swiftui/what-is-the-published-property-wrapper">What is the @Published property wrapper? 
/quick-start/swiftui/what-is-the-gesturestate-property-wrapper">What is the @GestureState property wrapper?</a>
-->

:::

---

<TagLinks />