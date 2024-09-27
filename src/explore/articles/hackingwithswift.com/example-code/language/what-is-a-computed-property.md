---
lang: ko-KR
title: "What is a computed property?"
description: "Article(s) > What is a computed property?"
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
      content: "Article(s) > What is a computed property?"
    - property: og:description
      content: "What is a computed property?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-a-computed-property.html
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
  "title": "What is a computed property? | Language - free Swift example code",
  "desc": "What is a computed property?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-a-computed-property",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
wSwift offers us two kinds of property: a *stored* property is one that saves a value for use later, and a *computed* property is one that runs some code in order to calculate the value.

As comparison, here’s a `Person` struct with four stored properties and one computed one. The computed property returns a string based on joining the four stored properties into a sentence.

```swift
struct Person {
    var name = "Taylor"
    var favoriteColor = "red"
    var favoriteCity = "Tokyo"
    var favoriteFood = "tea"

    var greeting: String {
        return "Hello, my name is \(name), and I like \(favoriteFood), \(favoriteCity), and the color \(favoriteColor)."
    }
}
```

Note: Unlike stored properties, Swift requires you to use an explicit type with your computed properties.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared 
/quick-start/swiftui/understanding-property-wrappers-in-swift-and-swiftui">Understanding property wrappers in Swift and SwiftUI 
/quick-start/swiftui/what-is-the-gesturestate-property-wrapper">What is the @GestureState property wrapper? 
/quick-start/swiftui/what-is-the-published-property-wrapper">What is the @Published property wrapper? 
/quick-start/swiftui/what-is-the-binding-property-wrapper">What is the @Binding property wrapper?</a>
-->

:::

---

<TagLinks />