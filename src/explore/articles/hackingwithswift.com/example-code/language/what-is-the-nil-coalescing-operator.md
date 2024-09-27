---
lang: ko-KR
title: "What is the nil coalescing operator?"
description: "Article(s) > What is the nil coalescing operator?"
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
      content: "Article(s) > What is the nil coalescing operator?"
    - property: og:description
      content: "What is the nil coalescing operator?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-the-nil-coalescing-operator.html
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
  "title": "What is the nil coalescing operator? | Language - free Swift example code",
  "desc": "What is the nil coalescing operator?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-the-nil-coalescing-operator",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
Optionals are a powerful source of safety in Swift, but can also be annoying if you find them littered throughout your code. Swift's nil coalescing operator helps you solve this problem by either unwrapping an optional if it has a value, or providing a default if the optional is empty.

Here's an example to get you started:

```swift
let name: String? = nil
let unwrappedName = name ?? "Anonymous"
```

Because `name` is an optional string, we need to unwrap it safely to ensure it has a meaningful value. The nil coalescing operator – `??` – does exactly that, but if it finds the optional has no value then it uses a default instead. In this case, the default is "Anonymous". What this means is that `unwrappedName` has the data type `String` rather than `String?` because it can be guaranteed to have a value.

You don't need to create a separate variable to use nil coalescing. For example, this works fine too:

```swift
print("Hello, \(name ?? "Anonymous")!")
```

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-loop-over-non-nil-items-in-an-array">How to loop over non-nil items in an array 
/example-code/language/how-to-use-operator-overloading">How to use operator overloading 
/example-code/language/what-is-the-ternary-operator">What is the ternary operator? 
/example-code/system/how-to-save-user-settings-using-userdefaults">How to save user settings using UserDefaults 
/quick-start/concurrency/how-to-create-a-custom-asyncsequence">How to create a custom AsyncSequence</a>
-->

:::

---

<TagLinks />