---
lang: ko-KR
title: "How to run code when an object is destroyed"
description: "Article(s) > How to run code when an object is destroyed"
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
      content: "Article(s) > How to run code when an object is destroyed"
    - property: og:description
      content: "How to run code when an object is destroyed"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-run-code-when-an-object-is-destroyed.html
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
  "title": "How to run code when an object is destroyed | Language - free Swift example code",
  "desc": "How to run code when an object is destroyed",
  "link": "https://hackingwithswift.com/example-code/language/how-to-run-code-when-an-object-is-destroyed",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
All structs and classes can have initializers, which are special methods that run when those types are created. However, classes can also have *deinitializers* – code that gets run when an instance of the class is destroyed. This isn’t possible with structs because they only ever have one owner.

Deinitializers never take any parameters, so they are written just as `deinit`. For example, we could create a simple `Person` class with an initializer and a deinitializer:

```swift
class Person {
    init() {
        print("I'm alive!")
    }

    deinit {
        print("I'm dying!")
    }
}
```

If you want to try that in a playground, run this code:

```swift
do {
    let person = Person()
}
```

Putting the `Person` instance inside a `do` block ensures it will be destroyed before the playground finishes, so you should see “I’m alive!” and “I’m dying!”

Deinitializers are extremely important when handling memory that isn’t managed by Swift. For example, if you’re using an external C library and it has allocated RAM, you should free that RAM inside your deinitializer.

-->

::: details Similar solutions…

<!--
/quick-start/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue">How to use @MainActor to run code on the main queue 
/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated 
/quick-start/swiftui/how-to-access-a-core-data-managed-object-context-from-a-swiftui-view">How to access a Core Data managed object context from a SwiftUI view 
/example-code/arrays/how-to-tell-if-an-array-contains-an-object">How to tell if an array contains an object 
/example-code/language/remove-all-instances-of-an-object-from-an-array">Remove all instances of an object from an array</a>
-->

:::

---

<TagLinks />