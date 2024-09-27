---
lang: ko-KR
title: "How to check for valid method input using the guard keyword"
description: "Article(s) > How to check for valid method input using the guard keyword"
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
      content: "Article(s) > How to check for valid method input using the guard keyword"
    - property: og:description
      content: "How to check for valid method input using the guard keyword"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-check-for-valid-method-input-using-the-guard-keyword.html
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
  "title": "How to check for valid method input using the guard keyword | Language - free Swift example code",
  "desc": "How to check for valid method input using the guard keyword",
  "link": "https://hackingwithswift.com/example-code/language/how-to-check-for-valid-method-input-using-the-guard-keyword",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
The `guard` keyword was introduced in Swift to signal early returns, which is a coding technique that effectively means "make sure all these things are set up before I start doing the real work in my function, others bail out."

For example, if you want to ensure a `submit()` is only ever run if an existing `name` property has a value, you would do this:

```swift
func submit() {
    guard name != nil else { return }

    doImportantWork(name)
}
```

This might seem like a job for a regular `if` statement, and to be fair that's correct – the two are very similar. The advantage with `guard`, however, is that it makes your intention clear: these values need to be set up correctly before continuing.

The `guard` keyword is also helpful because it can be used to check and unwrap optionals that remain unwrapped until the end of the method. For example:

```swift
func betterSubmit() {
    guard let unwrappedName = name else { return }

    doImportantWork(unwrappedName)
}
```

So, if `name` is `nil` the method will return; otherwise, it will be safely unwrapped into `unwrappedName`.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-detect-keyboard-input-using-pressesbegan-and-pressesended">How to detect keyboard input using pressesBegan() and pressesEnded() 
/example-code/uikit/how-to-create-custom-text-input-using-uikeyinput">How to create custom text input using UIKeyInput 
/example-code/language/how-to-use-the-rethrows-keyword">How to use the rethrows keyword 
/example-code/language/how-to-fix-argument-of-selector-refers-to-instance-method-that-is-not-exposed-to-objective-c">How to fix “argument of #selector refers to instance method that is not exposed to Objective-C” 
/example-code/language/how-to-delay-execution-of-code-using-the-defer-keyword">How to delay execution of code using the defer keyword</a>
-->

:::

---

<TagLinks />