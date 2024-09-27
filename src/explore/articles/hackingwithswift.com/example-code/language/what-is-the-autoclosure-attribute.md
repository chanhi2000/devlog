---
lang: ko-KR
title: "What is the autoclosure attribute?"
description: "Article(s) > What is the autoclosure attribute?"
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
      content: "Article(s) > What is the autoclosure attribute?"
    - property: og:description
      content: "What is the autoclosure attribute?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-the-autoclosure-attribute.html
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
  "title": "What is the autoclosure attribute? | Language - free Swift example code",
  "desc": "What is the autoclosure attribute?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-the-autoclosure-attribute",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
The `@autoclosure` attribute can be applied to a closure parameter for a function, and automatically creates a closure from an expression you pass in. When you call a function that uses this attribute, the code you write *isn't* a closure, but it *becomes* a closure, which can be a bit confusing – even the official Swift reference guide warns that overusing autoclosures makes your code harder to understand.

To help you understand how it works, here's a trivial example:

```swift
func printTest1(_ result: () -> Void) {
    print("Before")
    result()
    print("After")
}

printTest1({ print("Hello") })
```

That code creates a `printTest()` method, which accepts a closure and calls it. As you can see, the `print("Hello")` is inside a closure that gets called between "Before" and "After", so the final output is "Before", "Hello", "After".

If we used `@autoclosure` instead, it would allow us to rewrite the `printTest()` call so that it doesn't need braces, like this:

```swift
func printTest2(_ result: @autoclosure () -> Void) {
    print("Before")
    result()
    print("After")
}

printTest2(print("Hello"))
```

These two pieces of code produce identical results thanks to `@autoclosure`. In the second code example, the `print("Hello")` won't be executed immediately because it gets wrapped inside a closure for execution later.

The `@autoclosure` attribute is used inside Swift wherever code needs to be passed in and executed only if conditions are right. For example, the `&&` operator uses `@autoclosure` to allow short-circuit evaluation, and the `assert()` function uses it so that the assertion isn’t checked outside of debug mode.

-->

::: details Similar solutions…

<!--
/example-code/language/what-is-the-objc-attribute">What is the @objc attribute? 
/example-code/language/what-is-the-objcmembers-attribute">What is the @objcMembers attribute? 
/example-code/language/how-to-make-array-access-safer-using-a-custom-subscript">How to make array access safer using a custom subscript 
/example-code/language/how-to-fix-argument-of-selector-refers-to-instance-method-that-is-not-exposed-to-objective-c">How to fix “argument of #selector refers to instance method that is not exposed to Objective-C” 
/example-code/language/how-to-handle-unknown-properties-and-methods-using-dynamicmemberlookup">How to handle unknown properties and methods using @dynamicMemberLookup</a>
-->

:::

---

<TagLinks />