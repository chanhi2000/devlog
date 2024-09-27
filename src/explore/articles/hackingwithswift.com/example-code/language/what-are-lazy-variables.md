---
lang: ko-KR
title: "What are lazy variables?"
description: "Article(s) > What are lazy variables?"
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
      content: "Article(s) > What are lazy variables?"
    - property: og:description
      content: "What are lazy variables?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-are-lazy-variables.html
date: 2021-10-07
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
  "title": "What are lazy variables? | Language - free Swift example code",
  "desc": "What are lazy variables?",
  "link": "https://hackingwithswift.com/example-code/language/what-are-lazy-variables",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
It's very common in iOS to want to create complex objects only when you need them, largely because with limited computing power at your disposal you need to avoid doing expensive work unless it's really needed.

Swift has a mechanism built right into the language that enables just-in-time calculation of expensive work, and it is called a *lazy variable*. These variables are created using a function you specify only when that variable is first requested. If it's never requested, the function is never run, so it does help save processing time.

I don't want to produce a complicated example because that would rather defy the point, so instead I've built a simple (if silly!) one: imagine you want to calculate a person's age using the Fibonacci sequence. This sequence goes 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on – each number is calculated by adding the previous two numbers in the sequence. So if someone was aged 8, their Fibonacci sequence age would be 21, because that's at position 8 in the sequence.

I chose this because the most common pedagogical way to teach the Fibonacci sequence is using a function like this one:

```swift
func fibonacci(of num: Int) -> Int {
    if num < 2 {
        return num
    } else {
        return fibonacci(of: num - 1) + fibonacci(of: num - 2)
    }
}
```

That function calls itself, which makes it a *recursive function*, and actually it's quite slow. If you try to calculate the Fibonacci value of something over, say, 21, expect it to be slow in a playground!

Anyway, we want to create a `Person` struct that has an age property and a `fibonacciAge` property, but we don't want that second one to be evaluated unless it's actually used. So, create this struct now:

```swift
struct Person {
    var age = 16

    lazy var fibonacciOfAge: Int = {
        fibonacci(of: self.age)
    }()

    func fibonacci(of num: Int) -> Int {
        if num < 2 {
            return num
        } else {
            return fibonacci(of: num - 1) + fibonacci(of: num - 2)
        }
    }
}
```

There are five important things to note in that code:

- The lazy property is marked as `lazy var`. You can't make it `lazy let` because lazy properties must always be variables.
<li>Because the actual value is created by evaluation, you need to declare its data type up front. In the case of the code above, that means declaring the property as `Int`.
<li>Once you've set your data type, you need to use an open brace ("{") to start your block of code, then "}" to finish.
<li>You need to use `self` inside the function. You don’t need to use `[weak self]` or similar, because the closure is immediately applied and therefore won’t cause a retain cycle.
<li>You need to end your lazy property with `()`, because what you're actually doing is making a call to the function you just created.

Once that code is written, you can use it like this:

```swift
var singer = Person()
print(singer.fibonacciOfAge)
```

Remember, the point of lazy properties is that they are computed only when they are first needed, after which their value is saved. This means if you create 1000 singers and never touch their `fibonacciOfAge` property, your code will be lightning fast because that lazy work is never done.

-->

::: details Similar solutions…

<!--
/quick-start/swiftui/how-to-lazy-load-views-using-lazyvstack-and-lazyhstack">How to lazy load views using LazyVStack and LazyHStack 
/example-code/language/what-is-a-lazy-sequence">What is a lazy sequence? 
/example-code/language/what-are-static-methods-and-variables">What are static methods and variables? 
/quick-start/swiftui/answering-the-big-question-should-you-learn-swiftui-uikit-or-both">Answering the big question: should you learn SwiftUI, UIKit, or both? 
/example-code/language/what-does-unowned-mean">What does unowned mean?</a>
-->

:::

---

<TagLinks />