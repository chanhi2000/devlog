---
lang: ko-KR
title: "What does the open keyword do?"
description: "Article(s) > What does the open keyword do?"
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
      content: "Article(s) > What does the open keyword do?"
    - property: og:description
      content: "What does the open keyword do?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-does-the-open-keyword-do.html
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
  "title": "What does the open keyword do? | Language - free Swift example code",
  "desc": "What does the open keyword do?",
  "link": "https://hackingwithswift.com/example-code/language/what-does-the-open-keyword-do",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
When working with code from another module – e.g., UIKit or a module you wrote separate from your main app – Swift differentiates between public accessibility and public overridability. That is, someone can be public for folks to use, but not public for them to extend.

Here’s an example to demonstrate the difference:

```swift
open class User {
    open func login() { }
    public func playGame() { }
    public init() { }
}
```

If that were defined in its own module, any other code accessing it would be able to inherit from the `User` class because it’s marked `open`. Inside the child class, they could override `login()` because it’s also marked `open`, but they could *not* override `playGame()` because it’s marked only as `public` – it can be *called*, but not *changed*. If you remove `open` from the whole `User` class it can be *used* but not *subclassed*.

The `open` keyword is an effective way of stopping other developers from accidentally overriding functionality that’s critical to the way your app works. If you use it selectively, subclassers can add their own functionality or perhaps replace a few non-critical components, without altering the fundamental behavior of your class.

-->

::: details Similar solutions…

<!--
/example-code/language/how-to-use-the-rethrows-keyword">How to use the rethrows keyword 
/example-code/language/how-to-check-for-valid-method-input-using-the-guard-keyword">How to check for valid method input using the guard keyword 
/example-code/system/how-to-make-your-app-open-with-a-custom-url-scheme">How to make your app open with a custom URL scheme 
/example-code/language/how-to-delay-execution-of-code-using-the-defer-keyword">How to delay execution of code using the defer keyword 
/quick-start/swiftui/how-to-open-a-new-window">How to open a new window</a>
-->

:::

---

<TagLinks />