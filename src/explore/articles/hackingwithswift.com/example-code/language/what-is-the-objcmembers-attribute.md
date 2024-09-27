---
lang: ko-KR
title: "What is the @objcMembers attribute?"
description: "Article(s) > What is the @objcMembers attribute?"
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
      content: "Article(s) > What is the @objcMembers attribute?"
    - property: og:description
      content: "What is the @objcMembers attribute?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-the-objcmembers-attribute.html
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
  "title": "What is the @objcMembers attribute? | Language - free Swift example code",
  "desc": "What is the @objcMembers attribute?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-the-objcmembers-attribute",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
By default Swift generates code that is only available to other Swift code, but if you need to interact with the Objective-C runtime – all of UIKit, for example – you need to tell Swift what to do.

If you just want to expose a single method or property, you can mark that method using the `@objc` attribute. However, if you want *all* methods in a class to be exposed to Objective-C you can use a shortcut: the `@objcMembers` keyword:

```swift
@objcMembers class MyController: UIViewController {
    func login() {

    }
}
```

In that code, the `login()` method will automatically be exposed to Objective-C in the same way as if it had been marked with `@objc`, because the whole class it’s inside is marked with `@objcMembers`.

-->

::: details Similar solutions…

<!--
/example-code/language/what-is-the-autoclosure-attribute">What is the autoclosure attribute? 
/example-code/language/what-is-the-objc-attribute">What is the @objc attribute? 
/example-code/language/how-to-fix-argument-of-selector-refers-to-instance-method-that-is-not-exposed-to-objective-c">How to fix “argument of #selector refers to instance method that is not exposed to Objective-C” 
/example-code/language/how-to-handle-unknown-properties-and-methods-using-dynamicmemberlookup">How to handle unknown properties and methods using @dynamicMemberLookup 
/example-code/uikit/how-to-subclass-uiapplication-using-uiapplicationmain">How to subclass UIApplication using UIApplicationMain</a>
-->

:::

---

<TagLinks />