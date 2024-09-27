---
lang: ko-KR
title: "How to test throwing functions"
description: "Article(s) > How to test throwing functions"
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
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to test throwing functions"
    - property: og:description
      content: "How to test throwing functions"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/testing/how-to-test-throwing-functions.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Testing - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/testing/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to test throwing functions | Testing - free Swift example code",
  "desc": "How to test throwing functions",
  "link": "https://hackingwithswift.com/example-code/testing/how-to-test-throwing-functions",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
One of the many brilliant features of Swift’s error handling system is its ability to throw errors during tests and have them considered as failures. That is, if you mark your test using `throws` you run any throwing code inside that test and if it throws an error the test will be marked as a failure.

For example, if I have an `ImageGenerator` struct that has a throwing method called `generateImages()`, I could test it out using code like this:

```swift
func testFailingExample() throws {
    let generator = ImageGenerator()
    let result = try generator.generateImages()
    XCTAssertTrue(result, "Image generation should complete successfully.")
}
```

That creates an instance of the struct, attempts to run its `generateImages()` method, then asserts that the result of the method was true. If `generateImages()` throws an error it won’t be caught inside the test – there’s no `do`/`catch` blocks in there – so instead it will bubble up to the `XCTestCase`, which will automatically mark the test as being failed.

Although this approach works well for individual throwing methods like you see above, I don’t think you should use it for more complex tests because you can mask failures too easily. If you have three throwing function calls inside a single test, it’s a better idea to wrap them individually in `do`/`catch` blocks so you can deal with the error inline by calling `XCTFail()` at the point of failure.

-->

::: details Similar solutions…

<!--
/quick-start/concurrency/how-to-call-async-throwing-functions">How to call async throwing functions 
/example-code/testing/how-to-test-asynchronous-functions-using-expectation">How to test asynchronous functions using expectation() 
/example-code/language/what-is-a-throwing-function">What is a throwing function? 
/example-code/testing/how-to-do-conditional-test-tear-down-using-addteardownblock">How to do conditional test tear down using addTeardownBlock() 
/example-code/language/how-to-pass-the-fizz-buzz-test">How to pass the Fizz Buzz test</a>
-->

:::

---

<TagLinks />