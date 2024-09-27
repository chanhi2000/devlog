---
lang: ko-KR
title: "How to test asynchronous functions using expectation()"
description: "Article(s) > How to test asynchronous functions using expectation()"
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
      content: "Article(s) > How to test asynchronous functions using expectation()"
    - property: og:description
      content: "How to test asynchronous functions using expectation()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/testing/how-to-test-asynchronous-functions-using-expectation.html
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
  "title": "How to test asynchronous functions using expectation() | Testing - free Swift example code",
  "desc": "How to test asynchronous functions using expectation()",
  "link": "https://hackingwithswift.com/example-code/testing/how-to-test-asynchronous-functions-using-expectation",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
`XCTestCase` has the built-in ability to work with asynchronous code using a system of expectations. First, you create one of more instances of `XCTestExpectation` using the `expectation()` method, then you run your asynchronous code, and finally you call `waitForExpectations()` so the test doesn’t end prematurely. 

When your asynchronous code completes you call `fulfill()` on it to mark it as complete, and you can then call some variant of `XCTAssert()` to check whether the test succeeded or failed.

As an example, I have a `FeedParser` struct that loads stories from disk and parses them ready for display. It takes a few milliseconds to run, so to avoid freezing my app it has an asynchronous method called `loadStories()` that calls a completion handler when the stories are ready to be used. Using `XCTestCase` expectations I would write a test like this:

```swift
func testStoryLoading() throws {
    let parser = FeedParser()

    // create the expectation
    let exp = expectation(description: "Loading stories")

    // call my asynchronous method
    parser.loadStories {
        // when it finishes, mark my expectation as being fulfilled
        exp.fulfill()
    }

    // wait three seconds for all outstanding expectations to be fulfilled
    waitForExpectations(timeout: 3)

    // our expectation has been fulfilled, so we can check the result is correct
    XCTAssertEqual(parser.stories.count, 20, "We should have loaded exactly 20 stories.")
}
```

If my asynchronous code does not complete in the allotted time of three seconds, the test is considered an immediate failure.

`XCTestExpectation` has two properties you might want to explore further. The first is `isInverted`: if you set that to true then the test will be considered a failure if `fulfill()` gets called before the time out, so for example you might want the AI in your game to wait at least two seconds before making its move so the player can see it’s definitely thinking. 

The second is `expectedFulfillmentCount`: if you set this to 5 for example, it means `fulfill()` must be called five times before the time out is reached, which allows you to implement more advanced testing logic.

-->

::: details Similar solutions…

<!--
/quick-start/concurrency/what-is-an-asynchronous-function">What is an asynchronous function? 
/quick-start/swiftui/how-to-run-an-asynchronous-task-when-a-view-is-shown">How to run an asynchronous task when a view is shown 
/example-code/testing/how-to-test-throwing-functions">How to test throwing functions 
/example-code/testing/how-to-do-conditional-test-tear-down-using-addteardownblock">How to do conditional test tear down using addTeardownBlock() 
/example-code/language/how-to-pass-the-fizz-buzz-test">How to pass the Fizz Buzz test</a>
-->

:::

---

<TagLinks />