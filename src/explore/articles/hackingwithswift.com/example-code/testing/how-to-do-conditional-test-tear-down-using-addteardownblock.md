---
lang: ko-KR
title: "How to do conditional test tear down using addTeardownBlock()"
description: "Article(s) > How to do conditional test tear down using addTeardownBlock()"
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
      content: "Article(s) > How to do conditional test tear down using addTeardownBlock()"
    - property: og:description
      content: "How to do conditional test tear down using addTeardownBlock()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/testing/how-to-do-conditional-test-tear-down-using-addteardownblock.html
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
  "title": "How to do conditional test tear down using addTeardownBlock() | Testing - free Swift example code",
  "desc": "How to do conditional test tear down using addTeardownBlock()",
  "link": "https://hackingwithswift.com/example-code/testing/how-to-do-conditional-test-tear-down-using-addteardownblock",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
All `XCTestCase` subclasses have access to `setUp()` and `tearDown()` instance methods, plus `setUp()` and `tearDown()` class methods for one-time setup and tear down. But sometimes you need to add *conditional* tear down code: if your test creates a resource that must be destroyed, you can add that as an additional tear down step using the `addTeardownBlock()` method.

As an example, consider this test method:

```swift
func testDatabaseQuery() {
    let database = connectToDatabase()
    let results = database.fetchExampleData()

    XCTAssertEqual(results.count, 1, "We should receive exactly one result.")
}
```

That connects to a database, runs an example query, and checks the result. However, behind the scenes our database needs to be reset every time a connection is finished. If *all* our tests relied on the database being created then we could add the cleanup code either to the `tearDown()` instance method or to the `tearDown()` class method, but if it’s only used *sometimes* then that isn’t an option.

Fortunately, the `addTeardownBlock()` is designed to fix this: you can pass in any code you want to run when your test is being torn down, and it will be run after the current test finishes, but before the `tearDown()` instance method.

In the case of the `connectToDatabase()` method that needs clean up, we *could* write that clean up code directly into each test, but that just duplicates code and is likely to cause problems. So, instead we’re going to add the clean up right inside the connection code, like this:

```swift
func connectToDatabase() -> Database {
    let database = Database()
    database.connect()

    addTeardownBlock {
        database.cleanUp()
    }

    return database
}
```

That `database.cleanUp()` code will be called only when the surrounding test is complete, so it acts a bit like `defer` except the scope is the current test.

It’s important to get the order of set up and tear down correct, because various things happen at different times. If you have two tests in your `XCTestCase` here’s how it would look:

1. The `setUp()` class method is called.
<li>The `setUp()` instance method is called.
<li>One test is run.
<li>Any tear down blocks that were registered are run.
<li>The `tearDown()` instance method is called.
<li>The `setUp()` instance method is called again.
<li>The second test is run.
<li>Any tear down blocks that were registered are run.
<li>The `tearDown()` instance method is called again.
<li>The `tearDown()` class method is called.

You won’t need to use tear down blocks often, but they are a useful tool to have.

-->

::: details Similar solutions…

<!--
/example-code/uikit/how-to-check-whether-an-iphone-or-ipad-is-upside-down-or-face-up">How to check whether an iPhone or iPad is upside down or face up 
/quick-start/swiftui/how-to-scale-a-view-up-or-down">How to scale a view up or down 
/example-code/testing/how-to-test-asynchronous-functions-using-expectation">How to test asynchronous functions using expectation() 
/example-code/language/how-to-use-conditional-conformance-in-swift">How to use conditional conformance in Swift 
/example-code/testing/how-to-test-throwing-functions">How to test throwing functions</a>
-->

:::

---

<TagLinks />