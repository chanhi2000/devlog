---
lang: ko-KR
title: "What is function composition?"
description: "Article(s) > What is function composition?"
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
      content: "Article(s) > What is function composition?"
    - property: og:description
      content: "What is function composition?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-function-composition.html
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
  "title": "What is function composition? | Language - free Swift example code",
  "desc": "What is function composition?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-function-composition",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
Function composition is the ability to combine small functions together to make bigger functions.

In normal circumstances, you’d give some input to function A and get back output, and do the same for function B. When those two functions as combined together, A’s output becomes B’s input, so you provide input to A and get the results back from B.

To demonstrate this, here’s a function that generates random numbers in a specific range:

```swift
func generateRandomNumber(max: Int) -> Int {
    return Int(arc4random_uniform(UInt32(max)))
}
```

And here’s a function that spells out any number it’s given:

```swift
func spell(number: Int) -> String {
    let formatter = NumberFormatter()
    formatter.numberStyle = .spellOut
    return formatter.string(from: number as NSNumber) ?? ""
}
```

We can define a new operator that lets us combine those two together, like this:

```swift
precedencegroup CompositionPrecedence {
    associativity: left
}

infix operator >>>: CompositionPrecedence

func >>> <T, U, V>(lhs: @escaping (T) -> U, rhs: @escaping (U) -> V) -> (T) -> V {
    return { rhs(lhs($0)) }
}
```

You can learn more about how that works in <a href="/store/pro-swift">Pro Swift</a>.

You can now combine your two smaller functions into bigger ones, like this:

```swift
let spellOutRandom = generateRandomNumber >>> spell
```

`spellOutRandom()` is designed to take the input from the first function (a number) and send back the output from the second function (a string), so we can use it like this:

```swift
print(spellOutRandom(100))
```

That will output a different spelled number each time it’s run.

-->

::: details Similar solutions…

<!--
/quick-start/concurrency/what-is-an-asynchronous-function">What is an asynchronous function? 
/quick-start/concurrency/what-is-a-synchronous-function">What is a synchronous function? 
/quick-start/concurrency/how-to-create-and-call-an-async-function">How to create and call an async function 
/quick-start/concurrency/how-to-make-function-parameters-isolated">How to make function parameters isolated 
/quick-start/concurrency/what-calls-the-first-async-function">What calls the first async function?</a>
-->

:::

---

<TagLinks />