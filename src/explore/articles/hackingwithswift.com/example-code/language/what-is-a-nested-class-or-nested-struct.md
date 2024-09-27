---
lang: ko-KR
title: "What is a nested class or nested struct?"
description: "Article(s) > What is a nested class or nested struct?"
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
      content: "Article(s) > What is a nested class or nested struct?"
    - property: og:description
      content: "What is a nested class or nested struct?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-a-nested-class-or-nested-struct.html
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
  "title": "What is a nested class or nested struct? | Language - free Swift example code",
  "desc": "What is a nested class or nested struct?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-a-nested-class-or-nested-struct",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Nested types – i.e. nested structs and nested classes – are a useful way of organizing your code, and perhaps even restricting what others can do with it. In essence, a nested type is just one data type defined inside another, like this:

```swift
struct Deck {
    struct Card {

    }
}
```

Now rather than creating a new `Card` struct you would instead create a new `Deck.Card` because one is inside the other.

This approach is useful for organizing larger applications, because you might need custom types that are applicable only in certain places – exposing them elsewhere might cause problems.

If you want to re-enforce this, Swift lets you mark the inner type (`Card` above) as being private, which means it can only be used inside the `Deck` class – code from outside `Deck` can’t even see it.

-->

::: details Similar solutions…

<!--
/example-code/language/whats-the-difference-between-a-class-and-a-struct">What’s the difference between a class and a struct? 
/example-code/language/how-to-add-a-custom-initializer-to-a-struct-without-losing-its-memberwise-initializer">How to add a custom initializer to a struct without losing its memberwise initializer 
/quick-start/swiftui/how-to-create-modifiers-for-a-uiviewrepresentable-struct">How to create modifiers for a UIViewRepresentable struct 
/example-code/system/how-to-load-and-save-a-struct-in-userdefaults-using-codable">How to load and save a struct in UserDefaults using Codable 
/example-code/language/whats-the-difference-between-a-static-variable-and-a-class-variable">What’s the difference between a static variable and a class variable?</a>
-->

:::

---

<TagLinks />