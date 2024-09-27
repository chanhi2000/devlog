---
lang: ko-KR
title: "How to pass the Fizz Buzz test"
description: "Article(s) > How to pass the Fizz Buzz test"
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
      content: "Article(s) > How to pass the Fizz Buzz test"
    - property: og:description
      content: "How to pass the Fizz Buzz test"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-pass-the-fizz-buzz-test.html
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
  "title": "How to pass the Fizz Buzz test | Language - free Swift example code",
  "desc": "How to pass the Fizz Buzz test",
  "link": "https://hackingwithswift.com/example-code/language/how-to-pass-the-fizz-buzz-test",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
The Fizz Buzz test is a simple coding test used in some coding interviews. It’s not designed to be hard, in fact quite the opposite – it’s designed to be easy enough that most folks can solve it without feeling too pressured.

To pass the test you must write a function that accepts an integer and returns a string. Which string to return depends on the input number:

- If the integer is evenly divisible by three, it should return “Fizz”.
<li>If the integer is evenly divisible by five, it should return “Buzz”. 
<li>If the integer is evenly divisible by three *and* five, it should return “Fizz Buzz”. 
<li>Otherwise it should return the string form of the input number.

There are lots of ways this can be solved in Swift, but I think one of the most interesting is to use tuples like this:

```swift
func fizzbuzz(number: Int) -> String {
    switch (number % 3 == 0, number % 5 == 0) {
    case (true, false):
        return "Fizz"
    case (false, true):
        return "Buzz"
    case (true, true):
        return "FizzBuzz"
    case (false, false):
        return String(number)
    }
}

print(fizzbuzz(number: 15))
```

This approach breaks down a large input space – any number – into simple combinations of true and false, and we then use tuple pattern matching in the case statements to select the correct output.

-->

::: details Similar solutions…

<!--
/example-code/system/how-to-pass-data-between-two-view-controllers">How to pass data between two view controllers 
/example-code/testing/how-to-do-conditional-test-tear-down-using-addteardownblock">How to do conditional test tear down using addTeardownBlock() 
/example-code/testing/how-to-test-throwing-functions">How to test throwing functions 
/example-code/testing/how-to-test-asynchronous-functions-using-expectation">How to test asynchronous functions using expectation() 
/example-code/strings/how-to-test-localization-by-setting-a-debug-locale-and-double-length-pseudolanguage">How to test localization by setting a debug locale and double length pseudolanguage</a>
-->

:::

---

<TagLinks />