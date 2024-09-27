---
lang: ko-KR
title: "How to do one-time setup for your tests"
description: "Article(s) > How to do one-time setup for your tests"
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
      content: "Article(s) > How to do one-time setup for your tests"
    - property: og:description
      content: "How to do one-time setup for your tests"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/testing/how-to-do-one-time-setup-for-your-tests.html
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
  "title": "How to do one-time setup for your tests | Testing - free Swift example code",
  "desc": "How to do one-time setup for your tests",
  "link": "https://hackingwithswift.com/example-code/testing/how-to-do-one-time-setup-for-your-tests",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
When you create a default `XCTestCase` using Xcode you’ll get default `setUp()` and `tearDown()` methods like these:

```swift
override func setUp() {
    super.setUp()
    // Put setup code here. This method is called before the invocation of each test method in the class.
}

override func tearDown() {
    // Put teardown code here. This method is called after the invocation of each test method in the class.
    super.tearDown()
}
```

Those are called before and after every test inside your `XCTestCase` subclass, which allows you to reset your testing environment fully. However, sometimes you prefer to do some setup once and keep that state during all your tests, for example if you need to generate some test data that gets shared in all your tests.

As well as the regular `setUp()` and `tearDown()` instance methods, you can also define class methods with the same names, like this:

```swift
override class func setUp() {
    super.setUp()
}

override class func tearDown() {
    super.tearDown()
}
```

Unlike their instance method equivalents, these two class methods will be run only once each: `setUp()` before all your tests are run, and `tearDown()` after all your tests have completed.

-->

::: details Similar solutions…

<!--
/example-code/testing/how-to-check-and-unwrap-optionals-in-tests-using-xctunwrap">How to check and unwrap optionals in tests using XCTUnwrap() 
/quick-start/swiftui/how-to-synchronize-animations-from-one-view-to-another-with-matchedgeometryeffect">How to synchronize animations from one view to another with matchedGeometryEffect() 
/example-code/system/how-to-decode-json-from-your-app-bundle-the-easy-way">How to decode JSON from your app bundle the easy way 
/quick-start/swiftui/building-a-menu-using-list">Building a menu using List 
/quick-start/swiftui/how-to-mask-one-view-with-another">How to mask one view with another</a>
-->

:::

---

<TagLinks />