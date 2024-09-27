---
lang: ko-KR
title: "What is a monad?"
description: "Article(s) > What is a monad?"
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
      content: "Article(s) > What is a monad?"
    - property: og:description
      content: "What is a monad?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-a-monad.html
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
  "title": "What is a monad? | Language - free Swift example code",
  "desc": "What is a monad?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-a-monad",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
A monad is any data type that can be mapped over using `map()` and flat mapped over using `flatMap()`, as long it abides by three laws. Arrays, sets, optionals, and more are all monads. 

You don’t need to understand (or even be aware of) the three monad laws in order to use them, but if you’re curious I’ll try to explain. The three monad laws are best demonstrated using code, because honestly it’s a bit heavy when you’re just learning.

The first law is left identity, and means that if you have: 1) a value, e.g. the number 5; 2) a monad that contains that value, e.g. an array containing the number 5; and 3) a function that accepts the same type of value (5) and sends back the same type of monad (an array); then calling `flatMap()` on the array should be equal to applying the function directly to the value.

In code:

```swift
// if you have a value, in this case 5
let myNumber = 5

// and you have a monad containing that value, in this case an array containing 5
let myMonad = [myNumber]

// and you have a function that accepts a number and returns the same type of monad as we had before (an array)
let doubleNumbers = { (value: Int) in return [value * 2] }

// then calling flatMap on the array…
let result1 = myMonad.flatMap(doubleNumbers)

// should be equal to applying the function directly to the value
let result2 = doubleNumbers(myNumber)

// so, this should print "true" in a playground
result1 == result2
```

The second law is right identity, and means that if you have: 1) a value, e.g. the number 5; 2) a monad that contains that value, e.g. an array containing the number 5; and 3) a function that accepts the same type of value (5) and sends back the same kind of monad (an array) without transforming the value; then calling `flatMap()` with that function on your monad should leave it unchanged.

In code:

```swift
// if you have a value, in this case 5
let value = 5

// and you have a monad containing that value, in this case an array containing 5
let array = [5]

// and you have a function that accepts a number and returns the same type of monad as we had before (an array) without transforming the value
let wrapInArray = { (value: Int) in return [value] }

// then calling flatMap() with that function on your monad should leave it unchanged
let flatMapped = array.flatMap(wrapInArray)

// this should print "true" in a playground
array == flatMapped
```

The third law is associativity, and means that if you have 1) a value, e.g. the number 5; 2) a monad that contains that value, e.g. an array containing the number 5; and 3) two functions that can be run on that monad as a chain; then it shouldn’t matter how those functions are nested.

```swift
// if you have a value, in this case 5
let anotherNumber = 5

// and you have a monad containing that value, in this case an array containing 5
let anotherArray = [myNumber]

// and you have two functions that can be run on that monad as a chain, in this case one that multiplies by 5 and one by 10
let multiplyBy5 = { [$0 * 5] }
let multiplyBy10 = { [$0 * 10] }

// then it shouldn’t matter how those functions are nested
let chained = anotherArray.flatMap(multiplyBy5).flatMap(multiplyBy10)
let nested = anotherArray.flatMap { multiplyBy5($0).flatMap(multiplyBy10) }

// this should print "true" in a playground
chained == nested
```

Again, you don’t need to understand these laws in order to use monads, so don’t be too worried if you understood only part of the code above.

-->

::: details Similar solutions…

<!--
/example-code/language/whats-the-difference-between-a-function-and-a-closure">What’s the difference between a function and a closure? 
/example-code/language/how-to-use-codable-to-load-and-save-custom-data-types">How to use Codable to load and save custom data types 
/example-code/language/how-to-convert-an-int-to-a-string">How to convert an Int to a String 
/example-code/language/what-is-a-nib">What is a nib? 
/example-code/language/what-are-designated-initializers">What are designated initializers?</a>
-->

:::

---

<TagLinks />