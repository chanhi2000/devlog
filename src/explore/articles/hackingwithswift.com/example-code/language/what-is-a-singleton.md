---
lang: ko-KR
title: "What is a singleton?"
description: "Article(s) > What is a singleton?"
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
  - ios-13.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > What is a singleton?"
    - property: og:description
      content: "What is a singleton?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-a-singleton.html
date: 2022-04-11
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
  "title": "What is a singleton? | Language - free Swift example code",
  "desc": "What is a singleton?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-a-singleton",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
Singletons are objects that should only ever be created once, then shared everywhere they need to be used. They are common on Apple’s platforms: `FileManager`, `UserDefaults`, `UIApplication`, and `UIAccelerometer` are all mostly used through their singleton implementations.

The basic implementation of a Swift singleton looks like this:

```swift
class Settings {
    static let shared = Settings()
    var username: String?

    private init() { }
}
```

Adding a `private` initializer is important, because it stops other parts of our code from trying to create a `Settings` class instance. However, the class creates its own instance of itself as a static variable, which means the only instance of the `Settings` class is the one it created: `Settings.shared`.

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-use-compactmap-to-transform-an-array">How to use compactMap() to transform an array 
/example-code/language/how-to-specify-your-own-date-format-with-codable-and-jsonencoder">How to specify your own date format with Codable and JSONEncoder 
/example-code/language/what-is-a-protocol">What is a protocol? 
/example-code/language/what-is-the-objcmembers-attribute">What is the @objcMembers attribute? 
/example-code/language/what-is-class-inheritance">What is class inheritance?</a>
-->

:::

---

<TagLinks />