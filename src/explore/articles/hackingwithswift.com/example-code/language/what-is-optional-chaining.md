---
lang: ko-KR
title: "What is optional chaining?"
description: "Article(s) > What is optional chaining?"
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
      content: "Article(s) > What is optional chaining?"
    - property: og:description
      content: "What is optional chaining?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-optional-chaining.html
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
  "title": "What is optional chaining? | Language - free Swift example code",
  "desc": "What is optional chaining?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-optional-chaining",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Optional chaining is a Swift feature that allows execution of a statement to stop and return nil at any point. For example, all views have an optional `superview` property that stores whichever `UIView` contains it, all `UIView` has an optional `gestureRecognizer` array that stores the gesture recognizers it has, and all arrays have an optional `first` property that returns the first item.

Optional chaining allows us to put those three optionals together like this:

```swift
let firstParentRecognizer = view.superview?.gestureRecognizers?.first
```

So, `superview` is optional, `gestureRecognizers` is optional, and `first` is optional, but the end result – `firstParentRecognizer` will be a simple `UIGestureRecognizer?` rather than a triple optional. The optional chaining – the two question marks – mean that if `superview` is nil then `firstParentRecognizer` gets set to nil and the rest of the statement is ignored, and the same is true of `gestureRecognizers`.

Without optional chaining we’d need to use a pyramid of `if let` statements, like this:

```swift
if let superview = view.superview {
    if let recognizers = superview.gestureRecognizers {
        let firstParentRecognizer = recognizers.first
    }
}
```

-->

::: details Similar solutions…

<!--
/example-code/language/optional-vs-implicitly-unwrapped-optional-whats-the-difference">Optional vs implicitly unwrapped optional: what’s the difference? 
/example-code/language/how-to-use-flatmap-with-an-optional-value">How to use flatMap() with an optional value 
/example-code/language/what-is-an-optional-value-in-swift">What is an optional value in Swift? 
/example-code/language/how-to-make-optional-protocol-methods">How to make optional protocol methods 
/example-code/language/how-to-unwrap-an-optional-in-swift">How to unwrap an optional in Swift</a>
-->

:::

---

<TagLinks />