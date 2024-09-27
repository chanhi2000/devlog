---
lang: ko-KR
title: "What is trailing closure syntax?"
description: "Article(s) > What is trailing closure syntax?"
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
      content: "Article(s) > What is trailing closure syntax?"
    - property: og:description
      content: "What is trailing closure syntax?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-trailing-closure-syntax.html
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
  "title": "What is trailing closure syntax? | Language - free Swift example code",
  "desc": "What is trailing closure syntax?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-trailing-closure-syntax",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
Trailing closure syntax is a little piece of syntactic sugar that makes particularly common code more pleasant to read and write. Many functions in iOS accept multiple parameters where the final parameter is a closure. For example, if you've done animation in iOS you'll be familiar with this method:

```swift
public class func animate(withDuration: TimeInterval, animations: () -> Void)
```

That accepts an animation duration as its first parameter, and a closure containing animation instructions as its second.

One way of calling this method is like this:

```swift
UIView.animate(withDuration: 1, animations: { [unowned self] in
    self.view.backgroundColor = UIColor.red
})
```

While that is perfectly valid Swift code, it's harder to read than it ought to be. If a closure is the last parameter to a method, as seen here, Swift allows you write your code like this instead:

```swift
UIView.animate(withDuration: 1) { [unowned self] in
    self.view.backgroundColor = UIColor.red
}
```

That's shorter, and avoids the double closing `})` code.

This functionality is available wherever a closure is the final parameter to a function. For testing purposes, we could write a simple one like this:

```swift
func greetThenRunClosure(name: String, closure: () -> ()) {
    print("Hello, \(name)!")
    closure()
}
```

That prints a message, then runs a closure. Because the closure is the final parameter to the function, we can call it using trailing closure syntax like this:

```swift
greetThenRunClosure(name: "Paul") {
    print("The closure was run")
}
```

-->

::: details Similar solutions…

<!--
/example-code/uikit/whats-the-difference-between-leading-trailing-left-and-right-anchors">What’s the difference between leading, trailing, left, and right anchors? 
/example-code/language/what-is-a-closure">What is a closure? 
/example-code/language/what-is-an-escaping-closure">What is an escaping closure? 
/example-code/language/how-to-write-a-closure-that-returns-a-value">How to write a closure that returns a value 
/example-code/language/whats-the-difference-between-a-function-and-a-closure">What’s the difference between a function and a closure?</a>
-->

:::

---

<TagLinks />