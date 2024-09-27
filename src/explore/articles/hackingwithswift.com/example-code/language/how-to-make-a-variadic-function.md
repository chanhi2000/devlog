---
lang: ko-KR
title: "How to make a variadic function"
description: "Article(s) > How to make a variadic function"
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
      content: "Article(s) > How to make a variadic function"
    - property: og:description
      content: "How to make a variadic function"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-make-a-variadic-function.html
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
  "title": "How to make a variadic function | Language - free Swift example code",
  "desc": "How to make a variadic function",
  "link": "https://hackingwithswift.com/example-code/language/how-to-make-a-variadic-function",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Variadic functions are functions that accept any number of parameters. The most common one in Swift is `print()` – most people use it to print a single value, but you can actually pass as many as you want, like this:

```swift
print(1, 2, 3, 4, 5)
```

To make a variadic function of your own, just add `...` after any parameter. For example, we could write a `sum()` function that accepts any number of integers and adds them together, like this:

```swift
func sum1(_ numbers: Int...) -> Int {
    var total = 0

    for number in numbers {
        total += number
    }

    return total
}
```

Or if you wanted to write that functionally, you would use `reduce()`:

```swift
func sum2(_ numbers: Int...) -> Int {
    return numbers.reduce(0, +)
}
```

Notice how we specify `Int...` rather than `Int` – that means this function can be called using no integers, one integer, or even a hundred integers, and Swift will automatically convert them to be an array of integers inside the function.

So, it would be called like this:

```swift
let total = sum2(1, 2, 3, 4, 5)
```

-->

::: details Similar solutions…

<!--
/quick-start/concurrency/how-to-make-function-parameters-isolated">How to make function parameters isolated 
/quick-start/concurrency/what-is-an-asynchronous-function">What is an asynchronous function? 
/quick-start/concurrency/what-is-a-synchronous-function">What is a synchronous function? 
/quick-start/concurrency/how-to-call-an-async-function-using-async-let">How to call an async function using async let 
/example-code/language/how-to-use-the-zip-function-to-join-two-arrays">How to use the zip() function to join two arrays</a>
-->

:::

---

<TagLinks />