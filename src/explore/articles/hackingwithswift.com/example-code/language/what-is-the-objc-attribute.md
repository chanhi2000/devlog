---
lang: ko-KR
title: "What is the @objc attribute?"
description: "Article(s) > What is the @objc attribute?"
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
      content: "Article(s) > What is the @objc attribute?"
    - property: og:description
      content: "What is the @objc attribute?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-the-objc-attribute.html
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
  "title": "What is the @objc attribute? | Language - free Swift example code",
  "desc": "What is the @objc attribute?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-the-objc-attribute",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
By default Swift generates code that is only available to other Swift code, but if you need to interact with the Objective-C runtime – all of UIKit, for example – you need to tell Swift what to do.

That’s where the `@objc` attribute comes in: when you apply it to a class or method it instructs Swift to make those things available to Objective-C as well as Swift code. So, any time you want to call a method from a `UIBarButtonItem` or a `Timer`, you’ll need to mark that method using `@objc` so it’s exposed – both of those, and many others, are Objective-C code.

Don’t worry: if you *forget* to add `@objc` when it’s needed, your code simply won’t compile – it’s not something you can forget by accident and introduce a bug.

To expose a method to Objective-C, just write `@objc` before its name like this:

```swift
class MyController: UIViewController {
    @objc func authenticateUser() {

    }
}
```

That whole class is automatically Objective-C friendly because it inherits from `UIViewController`, but if you need it you can also explicitly make a class open to Objective-C by marking it `@objc`.

-->

::: details Similar solutions…

<!--
/example-code/language/what-is-the-objcmembers-attribute">What is the @objcMembers attribute? 
/example-code/language/what-is-the-autoclosure-attribute">What is the autoclosure attribute? 
/example-code/language/how-to-fix-argument-of-selector-refers-to-instance-method-that-is-not-exposed-to-objective-c">How to fix “argument of #selector refers to instance method that is not exposed to Objective-C” 
/example-code/language/what-is-key-value-observing">What is key-value observing? 
/example-code/language/how-to-make-optional-protocol-methods">How to make optional protocol methods</a>
-->

:::

---

<TagLinks />